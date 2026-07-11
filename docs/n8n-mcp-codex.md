# n8n MCP for Codex

Updated: 2026-07-11 JST

## Purpose

Codex can manage the local Mac mini n8n instance through a small local MCP
server.

The server lives in this repo:

`scripts/n8n-mcp-server.mjs`

Codex MCP config entry:

```toml
[mcp_servers.n8n]
command = "/Users/ai-company/.nvm/versions/node/v24.14.1/bin/node"
args = ["/Users/ai-company/bespokestayjapan-mvp/scripts/n8n-mcp-server.mjs"]
startup_timeout_sec = 30
```

The config was added to:

`/Users/ai-company/.codex/config.toml`

A backup was created at setup time:

`/Users/ai-company/.codex/config.toml.bak-n8n-20260711161644`

## Credentials

The MCP server reads:

`/Users/ai-company/.n8n-api.env`

Required keys:

- `N8N_BASE_URL`
- `N8N_API_KEY`

Do not commit this env file.

## Current Status

n8n itself is reachable:

- `http://localhost:5678/healthz` returned 200
- `http://localhost:5678/rest/settings` returned 200

The public API is also reachable after replacing the local API key:

- `/api/v1/workflows?limit=1` returns 200
- MCP `test_connection` succeeds

Current BSJ Threads workflow:

- Name: `BSJ Threads Auto Poster`
- ID: `pp4kjHoDCtD0LFjc`
- Status: inactive unless the user explicitly approves activation
- Schedule: 09:00, 22:00, and 02:00 JST

## Exposed Tools

- `test_connection`
- `list_workflows`
- `get_workflow`
- `create_workflow`
- `update_workflow`
- `activate_workflow`
- `deactivate_workflow`

New workflows are forced to `active = false` when created, so imports cannot
start running immediately.

Do not activate or replace an existing workflow without explicit user approval.

## Reload Note

Codex may need a new session or app reload before the newly added MCP server
appears as a callable tool.
