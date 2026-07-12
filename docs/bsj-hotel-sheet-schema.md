# BSJ Hotel Sheet Schema

This document defines the standard Google Sheet structure for future Bespoke Stay Japan hotel research.

BSJ is not a booking site. The hotel sheet should support a researched stay information database for travelers with specific practical needs.

## Core Rule

Keep three layers separate:

1. Candidate data: what the hotel is and where it came from.
2. Research and verification data: what was checked, where, and how confident we are.
3. Public listing data: the text and tags that should appear on the website.

The website should mainly use the public listing layer. Research columns support trust, quality control, and future re-check workflows.

## Required Public Listing Columns

These columns should exist for every hotel intended for publication.

| Column | Required | Purpose |
| --- | --- | --- |
| `final_publication_status` | yes | Publication gate. Publish only `ready_for_listing`. |
| `final_listing_priority` | recommended | Editorial priority: `high`, `medium`, `low`. |
| `listing_title` | yes | Public profile title. Can include a descriptive phrase after `—`. |
| `listing_short_description` | yes | 1-2 sentence public summary for cards and profile intro. |
| `listing_key_highlights` | yes | Compact pipe-separated or sentence-style highlights. |
| `listing_best_for` | yes | Who this stay is useful for. |
| `listing_condition_details` | yes | Main researched condition explanation. |
| `listing_access_summary` | recommended | Station, elevator, stairs, movement, location constraints. |
| `listing_luggage_summary` | recommended | Luggage storage, delivery, large-bag practicality. |
| `listing_kitchen_summary` | conditionally required | Required when using `self-catering` or long-stay positioning. |
| `listing_bath_summary` | recommended | Private bath, room bath, shared bath, onsen/tattoo relevance. |
| `listing_english_support_summary` | recommended | English site, staff, check-in support, emergency support. |
| `listing_rules_summary` | recommended | House rules, check-in windows, smoking, curfew, children, pets. |
| `listing_verified_notes` | yes | What is confirmed and from what type of source. |
| `listing_caution_notes` | yes | User-facing caveats. Keep factual and not alarmist. |
| `listing_category_tags` | yes | Pipe-separated canonical tags. |
| `listing_source_urls` | yes | Pipe-separated source URLs used for the profile. |

## Candidate Columns

These columns help identify, dedupe, and route hotel candidates.

| Column | Purpose |
| --- | --- |
| `hotel_name` | Original hotel/property name from research source. |
| `city` | City used for filtering and display. |
| `area` | Neighborhood, ward, district, station area, or region. |
| `prefecture` | Recommended future field for stable prefecture-level grouping. Not required by the current DB yet. |
| `address` | Address when available. |
| `source_query` | Search/query/source batch that produced the candidate. |
| `dedupe_key` | Stable dedupe key. Prefer non-LiteAPI keys going forward. |
| `duplicate_skipped` | Whether the row was skipped as a duplicate. |
| `duplicate_reason` | Why the row was skipped. |

## Stable ID Policy

Current legacy data uses `liteapi_id`. New hotel research should not depend on LiteAPI.

Recommended future column:

| Column | Purpose |
| --- | --- |
| `hotel_key` | Internal stable key, independent of LiteAPI. Example: `kyoto-kumashu-an-machiya-house`. |

Transition rule:

- Existing rows may keep `liteapi_id` for import compatibility.
- New rows should include `hotel_key`.
- Import scripts read `hotel_key` first, then legacy `liteapi_id`. The Supabase column is still named `liteapi_id` for compatibility.
- Public URLs should use generated/profile slugs, not LiteAPI IDs.

## Research And Verification Columns

These columns should be maintained for quality control and future re-check loops.

| Column | Purpose |
| --- | --- |
| `official_site_url` | Official hotel/property/operator website. |
| `official_booking_url` | Official booking or reservation page, if relevant. Not necessarily a CTA. |
| `official_source_urls` | Source URLs found during official research. |
| `official_source_summary` | Summary of official/public source findings. |
| `official_pet_status` | Pet policy status. |
| `official_tattoo_status` | Tattoo/bath policy status. |
| `official_private_bath_status` | Private bath availability/status. |
| `official_kitchen_status` | Kitchen/self-catering status. |
| `official_luggage_status` | Luggage storage/delivery status. |
| `official_access_status` | Access/elevator/stairs/station status. |
| `official_food_status` | Food restriction/meal status. |
| `official_confidence` | `high`, `medium`, or `low`. |
| `official_researched_at` | Date/time official research was completed. |
| `manual_verification_status` | Human verification state. |
| `manual_verification_date` | Date of human verification. |
| `manual_verification_method` | Phone, email, website, official reply, etc. |
| `manual_verification_raw_memo` | Raw internal notes. Not public copy. |
| `phone_check_needed` | Whether human phone/email confirmation is needed. |
| `phone_check_reason` | Why confirmation is needed. |
| `questions_to_confirm` | Specific questions for the human confirmation loop. |

## Research Date And Recheck Columns

These columns should be included in the Google Sheet even before the website DB
schema is changed. They support trust display, operations, and n8n reminders.

| Column | Purpose |
| --- | --- |
| `last_researched_at` | Last date BSJ reviewed official sources, OTA notes, maps, and surrounding practical context. |
| `last_directly_confirmed_at` | Last date BSJ received a direct email/phone/official reply from the property or operator. Blank if not directly confirmed. |
| `last_content_updated_at` | Last date the public BSJ profile copy was updated. |
| `recheck_due_at` | Next date the hotel should be reviewed again. Used for n8n reminders. |
| `source_recheck_due_at` | Next date source URLs should be checked for broken links or changed content. |
| `human_check_due_at` | Due date for a human phone/email confirmation task. |
| `follow_up_due_at` | Due date for a follow-up if a property has not replied. |
| `confirmation_status` | Public-facing confirmation status. See allowed values below. |
| `confirmation_status_note` | Short internal note explaining why the status was chosen. |
| `direct_confirmation_method` | `email`, `phone`, `official_reply`, `official_page`, or blank. |
| `direct_confirmation_source` | Name/email/phone/source of the confirmation if appropriate for internal tracking. |
| `direct_confirmation_public_summary` | Short public-safe summary of the direct confirmation, if it should appear on the profile. |

Recommended `confirmation_status` values:

| Value | Meaning |
| --- | --- |
| `official_source` | Confirmed from an official hotel/operator page, but not directly contacted. |
| `direct_confirmed` | Confirmed by direct email/phone/official reply. |
| `needs_human_check` | Important point is unclear and needs human confirmation. |
| `review_hint_only` | Found in reviews or third-party sources only. Do not present as confirmed. |
| `conflicting_sources` | Official, OTA, category site, or review sources conflict. |
| `outdated` | Source exists but appears old or needs rechecking before relying on it. |

Suggested public display:

```text
Research notes
Checked from official sources: July 12, 2026
Direct hotel confirmation: pending
Page updated: July 12, 2026
```

If `last_directly_confirmed_at` is blank, do not imply the hotel directly
confirmed the claim. Use language such as "Direct confirmation: not yet" or
"Direct confirmation: pending" only if that fits the page tone.

## Publication Status Values

Use `final_publication_status` as the website gate.

| Value | Meaning | Website behavior |
| --- | --- | --- |
| `ready_for_listing` | Public copy is complete enough to publish. | Eligible for import/display. |
| `needs_phone_check` | Good candidate but key claims need confirmation. | Do not publish unless manually approved. |
| `needs_manual_review` | Needs editorial review or cleanup. | Do not publish. |
| `deprioritize` | Low priority or weak fit. | Do not publish by default. |
| blank | Not yet processed. | Do not publish. |

## Canonical Category Tags

Use these tags in `listing_category_tags`, separated by ` | `.

| Tag | Meaning |
| --- | --- |
| `pet-friendly` | Pet policy is relevant and reasonably clear. |
| `tattoo-friendly` | Stronger tattoo-friendly signal. Use cautiously. |
| `tattoo-consideration` | Tattoo-related bath/access notes exist, but require nuance or confirmation. |
| `private-villa` | Entire home/villa/machiya/private-use stay. |
| `self-catering` | Meaningful kitchen or meal-prep capability. |
| `private-bath` | Private bath, room bath, or private bathing arrangement. |
| `luggage-friendly` | Storage, delivery, station proximity, or large-bag practicality. |
| `english-friendly` | English site/staff/check-in support or international guest support. |
| `family-friendly` | Suitable for families, children, groups, or multi-bed stays. |
| `food-friendly` | Useful for food restrictions, self-catering, or flexible meal planning. |
| `access-friendly` | Clearer access information or easier movement. Not a wheelchair-accessibility guarantee. |

Avoid creating near-duplicate tags unless there is a planned page for them.

Normalize:

- `tattoo-friendly-private-bath` -> `tattoo-friendly | private-bath` or `tattoo-consideration | private-bath`
- `English-friendly` -> `english-friendly`
- `private-villas` -> `private-villa`

## Website Field Mapping

Current website/Supabase fields should map from Sheet fields as follows.

| Sheet field | Supabase/display field |
| --- | --- |
| `listing_title` | `name` |
| `city` | `city` |
| `area` | `area` |
| `listing_short_description` | `short_description` |
| `listing_key_highlights` | `key_highlights` |
| `listing_best_for` | `best_for` |
| `listing_condition_details` | `condition_details` |
| `listing_access_summary` | `access_summary` |
| `listing_luggage_summary` | `luggage_summary` |
| `listing_kitchen_summary` | `kitchen_summary` |
| `listing_bath_summary` | `bath_summary` |
| `listing_english_support_summary` | `english_support_summary` |
| `listing_rules_summary` | `rules_summary` |
| `listing_verified_notes` | `verified_notes` |
| `listing_caution_notes` | `caution_notes` |
| `listing_category_tags` | `category_tags` as `text[]` |
| `listing_source_urls` | `source_urls` |
| first URL from `listing_source_urls` or official URL | current `booking_url` compatibility field |
| `final_publication_status` | `final_publication_status` |
| `final_listing_priority` | `final_listing_priority` |

The current `booking_url` field should be treated as a compatibility field for external/source links, not as a booking-first CTA.

## Public Copy Guidelines

Cards:

- Show a short hotel/profile name. If `listing_title` contains `—`, the card can use the part before `—`.
- Show city/area.
- Show 2-4 category tags.
- Show `listing_short_description` or a shortened `listing_best_for`.
- Show `listing_caution_notes` as "Good to know" in 1-2 lines.

Profile pages:

- Use the full `listing_title` or a clean heading plus subtitle.
- Lead with `listing_short_description`.
- Make `listing_condition_details` the main content.
- Show summaries as separate sections: Access, Luggage, Kitchen, Bath, English support, Rules.
- Show `listing_verified_notes` as trust-building evidence.
- Show `listing_caution_notes` in a visible but calm "Good to know" section.
- Put `listing_source_urls` near the end as Sources.

## Minimum Row To Publish

A hotel should not be imported/displayed unless these are complete:

- `final_publication_status = ready_for_listing`
- `hotel_name` or `listing_title`
- `city`
- `area`
- `listing_short_description`
- `listing_best_for`
- `listing_condition_details`
- `listing_verified_notes`
- `listing_caution_notes`
- `listing_category_tags`
- `listing_source_urls`
- `last_researched_at`
- `confirmation_status`

Condition-specific minimums:

- `self-catering` requires `listing_kitchen_summary`.
- `private-bath`, `tattoo-friendly`, or `tattoo-consideration` requires `listing_bath_summary`.
- `luggage-friendly` requires `listing_luggage_summary`.
- `access-friendly` requires `listing_access_summary` and cautious wording.
- `food-friendly` requires either `listing_kitchen_summary`, `official_food_status`, or a clear food-related explanation.

## What Not To Store As Public Copy

Do not expose these directly on the website:

- raw AI research prompts
- raw LiteAPI payloads
- internal phone scripts
- manual raw memos
- unresolved contradiction notes
- low-confidence claims without a public caution

They can remain in the research layer for internal workflows.
