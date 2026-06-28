# AGENTS.md - Bespoke Stay Japan

## Next.js Note

This project uses a modern Next.js version. Before changing framework-specific
APIs or conventions, inspect the local docs or existing code patterns instead
of relying only on memory.

Read this before broad repo exploration. Keep future context compact by checking
`docs/current-state.md` and `docs/ai-working-rules.md` first.

## Product Direction

Bespoke Stay Japan is no longer a LiteAPI hotel booking site. It is a researched
Japan stay information DB and guide media for foreign travelers and foreign
residents with practical stay constraints.

Primary value:
- Condition-based hotel/stay information.
- Researched notes from Japanese sources and hotel policies.
- Clear caveats before booking.
- Guide pages that receive SEO, Threads, and Pinterest traffic.

Do not reintroduce booking-engine framing unless explicitly requested.

## Current Stack

- Next.js App Router
- Supabase
- PostHog
- Tailwind/CSS-based quiet editorial UI

## Do Not Change Unless Explicitly Asked

- Supabase schema
- Import scripts
- Seed scripts
- Existing published hotel data
- External tracking/analytics behavior

## Do Not Reintroduce

- LiteAPI search, rates, prebook, book, or payment flows
- "Book now" as the main site CTA
- Price-comparison UI
- Teal SaaS/travel-comparison styling
- Emoji-heavy travel UI
- Required hotel-photo layouts

Hotel pages should read as researched stay profiles, not reservation pages.

## Data Rules

- Show only published hotels: `is_published = true`.
- `hotels.category_tags` is `text[]`.
- Published listing/profile pages should avoid rows without usable display data.
- Legacy `liteapi_id` may still exist in old code/data, but future work should
  prefer stable slugs or hotel keys where available.
- External hotel links should be treated as source/official/reference links, not
  as the core revenue model.

## Main Route Model

- `/` - top page and condition entry points
- `/stays` - published stay list
- `/stays/[condition]` - condition/category listings
- `/hotels/[slug]` - researched hotel profile
- Guide pages for SEO/social traffic, such as tattoo, private bath, luggage,
  dietary restrictions, ryokan, IC card, and similar practical topics

## Design Direction

- Text-first, mobile-first, quiet editorial guide.
- Photo-less or photo-optional layouts are acceptable.
- Use icons, labels, concise summaries, cards, and practical sections.
- Avoid generic SaaS landing page patterns.
- Avoid stereotyped Japan visuals such as torii/sakura/calligraphy/red-black
  motifs unless there is a concrete editorial reason.

## Token-Saving Rules

- Read `docs/current-state.md` and `docs/ai-working-rules.md` first.
- Use `rg` and targeted file reads.
- Do not read `.next`, `node_modules`, full generated JSON, large CSVs, or build
  artifacts unless necessary.
- Prefer `docs/current-state.md` for project status before scanning the repo.
- Prefer existing shared components and data helpers before creating new ones.
- For data questions, inspect scripts and small previews before opening full
  exports.

## Useful Commands

- `npm run build`
- `npm run validate:hotels -- --input <csv>`
- `npm run convert:hotels -- --input <csv> --output data/supabase-hotels-import.json --preview data/supabase-hotels-import-preview.md`
- `npm run import:hotels` only after explicit approval for live DB writes
