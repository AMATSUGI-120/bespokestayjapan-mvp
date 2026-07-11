# Threads Automation Plan

Updated: 2026-07-11 JST

## Purpose

BSJ now has enough receiving pages to start Threads distribution. The first
automation goal is not aggressive selling. It is to publish useful Japan travel
tips consistently, earn trust, and send a portion of posts to relevant BSJ
guide pages or free sample pages.

## Current Source File

Local working file:
`threads_posts_combined.xlsx`

Current structure checked on 2026-07-11:

- 240 rows
- 25 columns
- All rows currently have `status = ready`
- Main columns:
  - `post_key`
  - `status`
  - `scheduled_at_jst`
  - `category`
  - `topic`
  - `post_type`
  - `final_text`
  - `char_count`
  - `media_type`
  - `cta_type`
  - `cta_url`
  - `site_page`
  - `source_url`
  - `utm_campaign`
  - `utm_content`
  - `api_creation_id`
  - `threads_post_id`
  - `permalink`
  - `posted_at_jst`
  - `attempt_count`
  - `last_attempt_at`
  - `error_message`
  - `notes`

## Posting Frequency

Start with:

- 3 posts per day
- JST schedule
- Suggested slots: 09:00, 13:00, 18:00

Do not include a link in every post. Start with roughly:

- 1 linked post per 3 to 5 posts
- More link-free posts while the account is new
- Links mainly when the post naturally needs a deeper guide or free checklist

## Status Flow

Use these statuses:

- `ready`: reviewed and available for scheduling
- `scheduled`: selected by n8n and waiting for its publish time
- `posted`: published successfully
- `failed`: API or validation error
- `skip`: do not publish
- `needs_review`: human should inspect before posting

n8n should never post rows with:

- empty `final_text`
- `status` other than `ready`
- `char_count` above the safe limit
- `media_type` not supported by the current workflow
- obvious broken `cta_url`

## URL Routing

Machine-readable route map:
`data/threads-route-map.json`

Primary mapping:

| Category | Primary receiving page |
| --- | --- |
| `transport` | `/shinkansen-oversized-luggage-guide` |
| `food` | `/dietary-restrictions-japan` |
| `photo` | `/japan-photography-etiquette-guide` |
| `tax_free` | `/japan-tax-free-shopping-guide` |
| `ryokan` | `/ryokan-stay-guide` |
| `bicycle` | `/japan-bicycle-rules-guide` |
| `shrine_temple` | `/japan-shrine-temple-etiquette-guide` |
| `ic_card` | `/japan-ic-card-guide` |
| `jr_pass` | `/japan-rail-pass-guide` |
| `onsen` | `/japan-onsen-etiquette-guide` |

Use topic overrides for more specific posts, especially:

- Shinkansen oversized luggage posts -> `/shinkansen-oversized-luggage-guide`
- Luggage delivery posts -> `/japan-luggage-delivery-guide`
- JR Pass luggage posts -> `/japan-rail-pass-guide`
- Tattoo / onsen posts -> `/tattoo-friendly-stays-kansai`
- Private bath posts -> `/private-bath-stays-kansai`
- Vegetarian / vegan / dashi / allergy posts -> `/dietary-restrictions-japan`

## UTM Rules

When adding a link, use:

- `utm_source=threads`
- `utm_medium=social`
- `utm_campaign=<existing utm_campaign>`
- `utm_content=<post_key>`

Example:

```text
https://bespokestayjapan.com/shinkansen-oversized-luggage-guide?utm_source=threads&utm_medium=social&utm_campaign=threads_shinkansen_luggage&utm_content=P001
```

## n8n Workflow Shape

Recommended first workflow:

1. Cron trigger at the posting slots.
2. Read queue from Google Sheets or a CSV exported from the xlsx.
3. Pick the earliest row where `status = ready` and `scheduled_at_jst <= now`.
4. Validate `final_text`, `char_count`, `media_type`, and optional `cta_url`.
5. Compose the post:
   - If `cta_type = none`, post `final_text`.
   - If `cta_type = site_link`, append one short link line.
6. Publish to Threads.
7. Update the row:
   - `status = posted`
   - `threads_post_id`
   - `permalink`
   - `posted_at_jst`
   - increment `attempt_count`
8. On failure:
   - `status = failed`
   - `error_message`
   - `last_attempt_at`
   - increment `attempt_count`

## First Automation Phase

Phase 1 should be conservative:

- Text-only posts.
- No images.
- No automatic rewriting.
- No automatic source claims.
- No automatic reply threads.
- No aggressive product CTAs.

Goal:
Publish the existing reviewed posts reliably and learn which themes earn
replies, saves, profile visits, and link clicks.

## Human Review Before Launch

Before turning on automation:

- Move the xlsx data into Google Sheets or a CSV that n8n can read.
- Confirm all scheduled dates should start from the real launch date, not the
  old draft dates from May 2026.
- Decide whether the first week should be link-light.
- Review the first 21 posts manually.
- Confirm whether Threads API access is available or whether posting must begin
  manually / semi-manually.

## Link Strategy

Do not treat links as the main point of the account.

Good linked-post moments:

- A tip needs a longer explanation.
- A rule changed recently.
- A traveler might need a checklist before booking.
- The post naturally connects to a guide page.

Good no-link moments:

- Short etiquette reminders.
- Trust-building observations.
- Posts designed to earn replies.
- Posts asking travelers what they are worried about.

## Product Funnel Later

Once posts are running:

1. Send a portion of food, onsen, luggage, and stay-planning posts to the free
   sample hub.
2. Use beehiiv to collect the list.
3. Send the Kansai Tattoo-Friendly Stay Kit demand-check email.
4. Build the paid kit only after replies or clicks show demand.

Do not start with product-heavy Threads posting.
