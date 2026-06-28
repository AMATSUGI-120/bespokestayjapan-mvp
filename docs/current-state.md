# Bespoke Stay Japan - Current State

Updated: 2026-06-28 JST

## Project Goal

Bespoke Stay Japan is being changed from a LiteAPI hotel booking MVP into a
Japan stay information DB and guide media for foreign travelers and foreign
residents.

The site should answer practical stay questions that normal booking sites often
hide or make difficult to compare:
- Tattoo and bath policy details
- Private bath, public bath, and room bath differences
- Dietary restriction handling
- Luggage storage, luggage delivery, and large luggage concerns
- Pet-friendly stay requirements
- Kitchen, laundry, and long-stay suitability
- Family suitability
- English support
- Verified notes, source links, and caution notes

## Current Product Direction

The site is not meant to be a booking engine.

Hotel pages should remain, but they should be researched hotel profiles rather
than reservation pages. External links can point to official sites, Rakuten
Travel, Jalan, Google Maps, or other references where useful.

Main monetization is expected to come later from adjacent travel needs:
- eSIM
- Luggage delivery or storage
- Airport transfer
- Private tours and experiences
- Travel insurance
- Practical PDF/Sheet/Map kits
- Future custom research or planning support

## Current Stack

- Next.js App Router
- Supabase
- PostHog
- GitHub repository: `AMATSUGI-120/bespokestayjapan-mvp`

## Important Data Notes

- Supabase table: `hotels`
- Published hotel filter: `is_published = true`
- `category_tags` is `text[]`
- Hotel photos should no longer be assumed as the primary design dependency.
- Future hotel identity should not depend on LiteAPI if avoidable.
- Legacy fields such as `liteapi_id` may still exist from the MVP stage.

Known imported data status from the latest checked import:
- Total hotel rows: 52
- Published hotels: 51
- Unpublished hotels: 1

Known category counts:
- `english-friendly`: 43
- `family-friendly`: 39
- `luggage-friendly`: 37
- `private-bath`: 27
- `tattoo-consideration`: 20
- `self-catering`: 18
- `pet-friendly`: 14
- `food-friendly`: 9
- `private-villa`: 7
- `access-friendly`: 7
- `tattoo-friendly`: 2

## Current Route Model

Core:
- `/`
- `/stays`
- `/stays/[condition]`
- `/hotels/[slug]`

Legacy:
- `/stays/[liteapi_id]` may redirect to `/hotels/[slug]`

Guide pages already planned or implemented:
- `/guides`
- `/tattoo-friendly-stays-kansai`
- `/private-bath-stays-kansai`
- `/shinkansen-oversized-luggage-guide`
- `/japan-luggage-delivery-guide`
- `/dietary-restrictions-japan`
- `/ryokan-stay-guide`
- `/japan-ic-card-guide`

## Current Design Direction

Photo-less or photo-optional design is now acceptable and likely preferred.

Direction:
- Mobile-first
- Text-based guide feel
- Clear icons and labels
- Quiet editorial styling
- Practical, source-aware copy
- Similar in spirit to text-first travel references, not to booking sites

Avoid:
- Booking comparison UI
- Teal SaaS buttons
- Emoji-heavy tourism design
- Generic landing-page hero patterns
- Stereotyped Japan visuals

## Product Kit Direction

The first likely product is:

`Kansai Tattoo-Friendly Stay Kit`

Expected contents:
- Tattoo traveler stay-planning guide
- Private bath, room bath, and public bath explanation
- Caution around "tattoo OK" wording
- Kansai candidate hotel list
- Confirmed and needs-confirmation points
- Google Map
- Google Sheet comparison table
- English hotel inquiry template
- Pre-booking checklist
- Related luggage, eSIM, and bath/onsen links

Guide pages should allow soft product teasers, but articles should still be
useful without purchase.

## Portfolio Snapshot

The old LiteAPI booking MVP was preserved for portfolio purposes:
- Tag: `portfolio-liteapi-booking-mvp`
- Branch: `portfolio/liteapi-booking-mvp`
- GitHub Release: `LiteAPI Hotel Booking MVP`

The current main branch can continue toward the information DB/media direction.

## Data Workflow

Typical hotel CSV workflow:

```bash
npm run validate:hotels -- --input /tmp/bsj_hotels.csv
npm run convert:hotels -- --input /tmp/bsj_hotels.csv --output data/supabase-hotels-import.json --preview data/supabase-hotels-import-preview.md
npm run import:hotels
```

Only run the live import after explicit approval.

## Recent Verification

Latest known state:
- `npm run build` passed after recent site changes.
- Mobile checks were performed around 390px width for key pages and overflow
  fixes were added.

## Recommended Next Work

1. Strengthen guide articles as landing pages for Threads and Pinterest.
2. Expand practical templates, especially hotel inquiry examples.
3. Continue removing remaining booking-site language.
4. Add product teaser destinations when Gumroad or another storefront is ready.
5. Later, consider a low-pressure custom research/planning service page.

## Exploration Rules

Before scanning the repo, read this file. Then use targeted `rg` searches.

Avoid opening:
- `.next`
- `node_modules`
- Full generated JSON exports
- Large CSVs
- Build artifacts

Prefer small file ranges and existing shared components.
