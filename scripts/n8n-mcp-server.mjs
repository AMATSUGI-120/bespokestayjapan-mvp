#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";

const SERVER_NAME = "n8n Local API";
const SERVER_VERSION = "0.1.0";
const JsonRpcError = {
  METHOD_NOT_FOUND: -32601,
  INVALID_PARAMS: -32602,
  INTERNAL_ERROR: -32603,
};

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

function sendResult(id, result) {
  send({ jsonrpc: "2.0", id, result });
}

function sendError(id, code, message) {
  send({ jsonrpc: "2.0", id, error: { code, message } });
}

function textResult(text, structuredContent = undefined) {
  return {
    content: [{ type: "text", text }],
    ...(structuredContent === undefined ? {} : { structuredContent }),
  };
}

async function loadEnv() {
  const envPath = process.env.N8N_API_ENV_PATH
    ? path.resolve(process.env.N8N_API_ENV_PATH)
    : path.join(os.homedir(), ".n8n-api.env");
  const text = await readFile(envPath, "utf8");
  const env = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const index = line.indexOf("=");
    const key = line.slice(0, index).trim();
    const value = line
      .slice(index + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "");
    env[key] = value;
  }
  if (!env.N8N_BASE_URL) {
    throw new Error(`N8N_BASE_URL is missing in ${envPath}`);
  }
  if (!env.N8N_API_KEY) {
    throw new Error(`N8N_API_KEY is missing in ${envPath}`);
  }
  return {
    baseUrl: env.N8N_BASE_URL.replace(/\/+$/, ""),
    apiKey: env.N8N_API_KEY,
  };
}

function sanitizeWorkflow(workflow) {
  if (!workflow || typeof workflow !== "object") return workflow;
  const copy = structuredClone(workflow);
  delete copy.shared;
  delete copy.ownedBy;
  return copy;
}

async function n8nRequest(pathname, options = {}) {
  const { baseUrl, apiKey } = await loadEnv();
  const url = `${baseUrl}${pathname}`;
  const headers = {
    Accept: "application/json",
    "X-N8N-API-KEY": apiKey,
    ...(options.body === undefined ? {} : { "Content-Type": "application/json" }),
    ...(options.headers ?? {}),
  };
  const response = await fetch(url, {
    method: options.method ?? "GET",
    headers,
    body:
      options.body === undefined ? undefined : JSON.stringify(options.body),
  });
  const responseText = await response.text();
  let data = null;
  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { raw: responseText.slice(0, 2000) };
    }
  }
  if (!response.ok) {
    const detail =
      data?.message || data?.error || data?.raw || response.statusText;
    throw new Error(`n8n ${response.status} ${response.statusText}: ${detail}`);
  }
  return data;
}

function requireString(value, name) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${name} must be a non-empty string.`);
  }
  return value.trim();
}

function requireObject(value, name) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${name} must be an object.`);
  }
  return value;
}

async function testConnection() {
  const settings = await n8nRequest("/rest/settings");
  const workflows = await n8nRequest("/api/v1/workflows?limit=1");
  return textResult("n8n connection succeeded.", {
    baseReachable: true,
    apiReachable: true,
    workflowCountKnown: Array.isArray(workflows?.data),
    version: settings?.data?.version ?? settings?.version ?? null,
  });
}

async function listWorkflows(args) {
  const limit = Math.min(Math.max(Number(args?.limit ?? 20), 1), 100);
  const data = await n8nRequest(`/api/v1/workflows?limit=${limit}`);
  const workflows = Array.isArray(data?.data) ? data.data : [];
  const summary = workflows.map((workflow) => ({
    id: workflow.id,
    name: workflow.name,
    active: workflow.active,
    updatedAt: workflow.updatedAt,
  }));
  return textResult(JSON.stringify(summary, null, 2), { workflows: summary });
}

async function getWorkflow(args) {
  const id = encodeURIComponent(requireString(args?.id, "id"));
  const workflow = sanitizeWorkflow(await n8nRequest(`/api/v1/workflows/${id}`));
  return textResult(JSON.stringify(workflow, null, 2), { workflow });
}

async function createWorkflow(args) {
  const workflow = sanitizeWorkflow(requireObject(args?.workflow, "workflow"));
  if (typeof workflow.name !== "string" || workflow.name.trim() === "") {
    throw new Error("workflow.name must be a non-empty string.");
  }
  if (!Array.isArray(workflow.nodes)) {
    throw new Error("workflow.nodes must be an array.");
  }
  if (!workflow.connections || typeof workflow.connections !== "object") {
    throw new Error("workflow.connections must be an object.");
  }
  workflow.active = false;
  const created = sanitizeWorkflow(
    await n8nRequest("/api/v1/workflows", {
      method: "POST",
      body: workflow,
    }),
  );
  return textResult(
    `Created inactive n8n workflow: ${created.name ?? workflow.name} (${created.id ?? "unknown id"})`,
    { workflow: created },
  );
}

async function updateWorkflow(args) {
  const id = encodeURIComponent(requireString(args?.id, "id"));
  const workflow = sanitizeWorkflow(requireObject(args?.workflow, "workflow"));
  delete workflow.id;
  const updated = sanitizeWorkflow(
    await n8nRequest(`/api/v1/workflows/${id}`, {
      method: "PUT",
      body: workflow,
    }),
  );
  return textResult(
    `Updated n8n workflow: ${updated.name ?? id} (${updated.id ?? id})`,
    { workflow: updated },
  );
}

async function activateWorkflow(args, active) {
  const id = encodeURIComponent(requireString(args?.id, "id"));
  const endpoint = active ? "activate" : "deactivate";
  const workflow = sanitizeWorkflow(
    await n8nRequest(`/api/v1/workflows/${id}/${endpoint}`, {
      method: "POST",
    }),
  );
  return textResult(
    `${active ? "Activated" : "Deactivated"} n8n workflow: ${workflow.name ?? id}`,
    { workflow },
  );
}

const tools = [
  {
    name: "test_connection",
    title: "Test n8n Connection",
    description:
      "Check that the local n8n base URL and API key from ~/.n8n-api.env work. Does not reveal secrets.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
  {
    name: "list_workflows",
    title: "List n8n Workflows",
    description: "List local n8n workflows using the n8n public API.",
    inputSchema: {
      type: "object",
      properties: {
        limit: { type: "number", minimum: 1, maximum: 100 },
      },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
  {
    name: "get_workflow",
    title: "Get n8n Workflow",
    description: "Fetch one n8n workflow by id.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", minLength: 1 } },
      required: ["id"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, destructiveHint: false },
  },
  {
    name: "create_workflow",
    title: "Create n8n Workflow",
    description:
      "Create an inactive n8n workflow. The tool forces active=false so new workflows cannot start running immediately.",
    inputSchema: {
      type: "object",
      properties: { workflow: { type: "object" } },
      required: ["workflow"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, destructiveHint: false },
  },
  {
    name: "update_workflow",
    title: "Update n8n Workflow",
    description: "Replace an existing n8n workflow by id.",
    inputSchema: {
      type: "object",
      properties: {
        id: { type: "string", minLength: 1 },
        workflow: { type: "object" },
      },
      required: ["id", "workflow"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, destructiveHint: true },
  },
  {
    name: "activate_workflow",
    title: "Activate n8n Workflow",
    description: "Activate an existing n8n workflow by id.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", minLength: 1 } },
      required: ["id"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, destructiveHint: false },
  },
  {
    name: "deactivate_workflow",
    title: "Deactivate n8n Workflow",
    description: "Deactivate an existing n8n workflow by id.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", minLength: 1 } },
      required: ["id"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, destructiveHint: false },
  },
];

async function handleToolCall(id, params) {
  const name = params?.name;
  const args = params?.arguments ?? {};
  let result;
  if (name === "test_connection") result = await testConnection();
  else if (name === "list_workflows") result = await listWorkflows(args);
  else if (name === "get_workflow") result = await getWorkflow(args);
  else if (name === "create_workflow") result = await createWorkflow(args);
  else if (name === "update_workflow") result = await updateWorkflow(args);
  else if (name === "activate_workflow") result = await activateWorkflow(args, true);
  else if (name === "deactivate_workflow") result = await activateWorkflow(args, false);
  else throw new Error(`Unknown tool: ${name ?? ""}`);
  sendResult(id, result);
}

async function handleRequest(message) {
  const { id, method, params } = message;
  if (method === "initialize") {
    sendResult(id, {
      protocolVersion: params?.protocolVersion ?? "2025-11-25",
      capabilities: { tools: {} },
      serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
      instructions:
        "Use this MCP server to manage the user's local n8n instance through the n8n public API. New workflows are created inactive by default. Do not activate or replace workflows without explicit user approval.",
    });
    return;
  }
  if (method === "ping") {
    sendResult(id, {});
    return;
  }
  if (method === "tools/list") {
    sendResult(id, { tools });
    return;
  }
  if (method === "tools/call") {
    try {
      await handleToolCall(id, params);
    } catch (error) {
      sendError(
        id,
        JsonRpcError.INVALID_PARAMS,
        error instanceof Error ? error.message : String(error),
      );
    }
    return;
  }
  if (id !== undefined) {
    sendError(id, JsonRpcError.METHOD_NOT_FOUND, `Method not found: ${method}`);
  }
}

const lines = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

lines.on("line", (line) => {
  if (line.trim().length === 0) return;
  let message;
  try {
    message = JSON.parse(line);
  } catch {
    return;
  }
  void handleRequest(message);
});
