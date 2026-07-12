# BSJ Weekly Analytics Report

Updated: 2026-07-13 JST

## Purpose

Use n8n to create a weekly Bespoke Stay Japan analytics report outside the main
Codex chat.

The report is meant to answer:

- Which BSJ pages were visited last week?
- Did Threads, Pinterest, Google, or direct traffic send visitors?
- Did visitors click lead magnets, guide CTAs, affiliate/product CTAs, tags, or
  maps?
- How many Threads posts were published from the queue?
- Which topics should be strengthened next?

This is an operations report, not a code-changing workflow.

## Report Storage

The current report destination is the existing Threads Google Sheet, using a
separate tab:

- `weekly_reports`

Do not commit private spreadsheet IDs to the repo. Store spreadsheet IDs in n8n
variables.

Current `weekly_reports` headers:

- `week_start_jst`
- `week_end_jst`
- `generated_at_jst`
- `pageviews`
- `unique_visitors`
- `total_events`
- `lead_magnet_clicks`
- `guide_cta_clicks`
- `affiliate_cta_clicks`
- `tag_clicks`
- `map_clicks`
- `threads_posted`
- `threads_linked_posted`
- `top_pages`
- `top_referrers`
- `top_ctas`
- `internal_traffic_note`
- `interpretation`
- `recommended_actions`
- `raw_report_markdown`

## n8n Workflow File

Import this workflow into n8n:

`n8n/bsj-weekly-analytics-report.workflow.json`

The workflow is inactive by default.

Expected shape:

1. Manual Trigger, for testing.
2. Weekly Schedule, Monday 10:00 JST.
3. Google Sheets: read `threads_posts`.
4. Code: query PostHog and build the weekly report.
5. Google Sheets: append one row to `weekly_reports`.

## Required n8n Setup

This n8n instance does not currently support the paid Variables feature, so the
workflow should not depend on `$vars`.

Configure the workflow directly in n8n:

| Item | Purpose |
| --- | --- |
| Google Sheets document ID | Directly set in both Google Sheets nodes. |
| PostHog project query URL | Directly set in each PostHog HTTP Request node. |
| `BSJ PostHog API` credential | n8n `httpHeaderAuth` credential with `Authorization: Bearer <PostHog Personal API Key>`. |

The repo workflow JSON uses placeholders and does not store private Sheet IDs or
PostHog API keys.

## Required n8n Credentials

The Google Sheets nodes must use the existing Google Sheets credential:

- `Google Sheets account`

The PostHog HTTP Request nodes must use:

- `BSJ PostHog API`

After importing or updating, open both Google Sheets nodes and the PostHog HTTP
Request nodes to confirm the credentials are selected.

## Time Window

The workflow should run every Monday at 10:00 JST.

It reports the previous full week:

- Monday 00:00 JST
- through Sunday 23:59:59 JST

For example, a Monday run on July 20 reports July 13 through July 19 JST.

## Interpretation Rules

Early BSJ traffic is small and may include owner/admin visits. Treat the first
reports as directional only.

Do not overreact to:

- one user visiting many pages
- direct traffic caused by owner checks
- single CTA clicks
- a one-day spike after manual testing

Useful early signals:

- guide pages receiving repeated visits
- lead magnet CTA clicks
- Threads-linked pages showing `utm_source=threads`
- Pinterest pages showing `utm_source=pinterest`
- repeated clicks on the same product/affiliate CTA

## Testing Checklist

Before activation:

1. Start local n8n.
2. Confirm the workflow imports without errors.
3. Confirm the Google Sheets document ID is set in both Google Sheets nodes.
4. Confirm all PostHog HTTP Request nodes use `BSJ PostHog API`.
5. Run the Manual Trigger once.
6. Confirm one row appears in `weekly_reports`.
7. Check that no secrets are printed in execution logs.
8. Activate the workflow only after the manual test succeeds.

Current status:

- n8n workflow: `BSJ Weekly Analytics Report`
- Workflow ID: `n436jDlEL3RYoY0T`
- Manual test: passed on 2026-07-13 JST
- Status: active

## Safety Rules

- Do not modify BSJ code, Supabase schema, import scripts, seed scripts, or
  live hotel data.
- Do not edit the Threads queue from this workflow.
- This workflow reads `threads_posts` and appends to `weekly_reports` only.
- Keep PostHog Personal API Keys in n8n variables or credentials, never in repo
  files.
