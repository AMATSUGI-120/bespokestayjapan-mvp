# Bespoke Stay Japan

Bespoke Stay Japan is a researched Japan stay information database for travelers with specific practical needs.

It is not a booking-first hotel site. The core product is structured stay information: tattoo and bath notes, luggage support, kitchen/self-catering context, pet policies, family suitability, English support, access notes, verified sources, and planning caveats.

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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
