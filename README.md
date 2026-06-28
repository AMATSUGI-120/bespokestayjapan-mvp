# Bespoke Stay Japan

Bespoke Stay Japan is a researched Japan stay information database for travelers with specific practical needs.

It is not a booking-first hotel site. The core product is structured stay information: tattoo and bath notes, luggage support, kitchen/self-catering context, pet policies, family suitability, English support, access notes, verified sources, and planning caveats.

## Project Direction

The current `main` branch is the information DB/media version of Bespoke Stay Japan.

The product direction is to help foreign travelers and foreign residents compare Japan stays by real constraints, not to operate a booking engine. Public pages are designed around researched hotel profiles, condition-based stay lists, practical guide articles, source links, and future downloadable planning kits.

## Portfolio Snapshot

An earlier version of this project implemented a LiteAPI hotel booking MVP. That booking-oriented version is preserved separately for portfolio/reference purposes:

- Release: [LiteAPI Hotel Booking MVP](https://github.com/AMATSUGI-120/bespokestayjapan-mvp/releases/tag/portfolio-liteapi-booking-mvp)
- Branch: [`portfolio/liteapi-booking-mvp`](https://github.com/AMATSUGI-120/bespokestayjapan-mvp/tree/portfolio/liteapi-booking-mvp)
- Tag: `portfolio-liteapi-booking-mvp`

That snapshot included hotel search, rates/prebook/booking API routes, booking success/cancel pages, payment UI, production safety checks, and analytics. Those flows are intentionally removed from `main` after the project pivot.

## Bespoke Stay Japan Notes

- Hotel research sheet standard: [docs/bsj-hotel-sheet-schema.md](docs/bsj-hotel-sheet-schema.md)
- Public hotel profiles live under `/hotels/[slug]`.
- `/stays/[liteapi_id]` is kept only as a legacy redirect route.
- Existing Supabase field `booking_url` is treated as an external/source-link compatibility field.

## Hotel Data Workflow

Export the Google Sheet as CSV, then run the read-only validation step first:

```bash
npm run validate:hotels -- --input path/to/hotels.csv
```

Convert validated CSV into the Supabase import JSON:

```bash
npm run convert:hotels -- \
  --input path/to/hotels.csv \
  --output data/supabase-hotels-import.json \
  --preview data/supabase-hotels-import-preview.md
```

Preview the Supabase upsert without writing:

```bash
npm run import:hotels -- --dry-run
```

Import a single hotel by stable key:

```bash
npm run import:hotels -- --hotel-key=kyoto-kumashu-an-machiya-house --dry-run
```

Live import requires `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build check:

```bash
npm run build
```

## Current Architecture

- Framework: Next.js App Router
- Database: Supabase
- Main listing page: `/stays`
- Category pages: `/stays/[condition]`
- Hotel profiles: `/hotels/[slug]`
- Legacy route: `/stays/[liteapi_id]` redirects to `/hotels/[slug]`

## Notes

- Do not reintroduce LiteAPI search, rates, payment, or booking flows.
- Do not rely on hotel photos as a required UI element.
- Keep public copy grounded in `listing_*` sheet fields.
- Keep raw research prompts, manual memos, and unresolved internal notes out of public UI.
