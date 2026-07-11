# AI Working Rules

Use this file as the shared working contract for Codex, Claude Code, or any
other AI assistant working on Bespoke Stay Japan.

## Read Order

1. Read `docs/current-state.md`.
2. Read this file.
3. Use targeted `rg` searches only after the current context is clear.

Do not start with broad repo scans.

## Project Boundary

Bespoke Stay Japan is a Japan stay information DB and guide media, not a hotel
booking engine.

Keep the product focused on:
- Practical stay conditions
- Researched hotel profiles
- Condition/category pages
- Guide articles for SEO, Threads, and Pinterest
- Future practical digital products

For booking-support boundaries, read `docs/booking-support-policy.md`.

## Protected Areas

Do not change these unless the user explicitly asks:
- Supabase schema
- Import scripts
- Seed scripts
- Live hotel data
- Analytics setup

Do not run live database imports without explicit approval.

## Deprecated Direction

Do not rebuild or expand:
- LiteAPI hotel search
- LiteAPI price/rate display
- Prebook/book/payment flows
- Booking-first CTAs
- Travel comparison UI
- Reservation agency or booking-on-behalf-of-user flows

Legacy code can be removed or redirected when it blocks the new information DB
direction, but preserve portfolio references where noted.

## Booking Support Rules

BSJ can help travelers understand and compare Japanese stays, including
Japanese-only listings, but it should not act as the booking intermediary.

Allowed:
- Explain Japanese booking-site information in English.
- Provide hotel inquiry templates.
- Provide booking checklists and comparison sheets.
- Link to official sites, OTAs, Japanese booking references, Google Maps, and
  related services.
- Sell planning kits that help users make their own decisions.

Avoid:
- "We book for you" service copy.
- Taking traveler personal data for reservation submission.
- Entering booking forms on behalf of users.
- Handling accommodation payments, changes, cancellations, or confirmations.
- Copy that implies BSJ guarantees a room, rate, booking result, or hotel
  acceptance.

When unsure, frame the feature as research, translation support, comparison, or
pre-booking preparation rather than reservation handling.

## Design Rules

Default to:
- Mobile-first readability
- Quiet editorial styling
- Text-first and icon-supported layouts
- Small labels instead of loud badges
- Clear caveats and confirmation notes

Avoid:
- Teal SaaS styling
- Emoji-heavy pages
- Generic landing page sections
- Required hotel photos
- Stereotyped Japan visuals

## Content Rules

Write for foreign travelers and foreign residents who need practical clarity.

Use careful language:
- Rules can change.
- Important details should be confirmed directly before booking.
- Accessibility, tattoo policy, dietary support, and pet rules should not be
  overstated.
- Japanese-only booking links should be described as references, not as the main
  foreign-traveler booking path unless the user experience has been verified.

Prefer useful content even when a product teaser is present.

For free samples and paid product boundaries, read
`docs/lead-magnet-product-boundary.md` before adding new downloads, product
teasers, or kit copy.

For Threads posting, routing, or n8n queue work, read
`docs/threads-automation.md` and `data/threads-route-map.json` before editing
post text, CTA URLs, schedules, or automation rules.

## Data Rules

- Published hotel pages should use `is_published = true`.
- `category_tags` is `text[]`.
- Prefer stable slugs or hotel keys for future routing.
- Treat legacy `liteapi_id` as compatibility data, not the future model.
- Do not assume hotel photos are available or licensed for display.

## Hotel Affiliate Link Rules

Before adding or changing hotel affiliate links:

- Read `docs/booking-support-policy.md`.
- Read `docs/hotel-external-link-audit.md`.
- Do not add affiliate links from hotel-name matches alone.
- Confirm exact property match by address, city, facility name, listing context,
  and room/property details where available.
- Only use Travelpayouts hotel links for approved and working programs.
- While Booking.com, Trip.com, Expedia, and Hotels.com are declined in
  Travelpayouts, keep their URLs as normal reference links only.
- For Klook hotel links, verify the exact listing in Klook / Travelpayouts,
  generate the affiliate URL, then add one override at a time in
  `lib/external-links.ts`.
- Do not hard-code hotel affiliate URLs inside page components.
- After adding or changing a hotel affiliate link, update
  `docs/hotel-external-link-audit.md` with evidence and date.
- Use `rel="sponsored"` for affiliate links and keep CTA wording neutral, such
  as "Check booking options".

## Token-Saving Rules

- Use `rg`, `rg --files`, and narrow file reads.
- Avoid opening generated JSON, large CSVs, `.next`, `node_modules`, or build
  outputs.
- Prefer existing components and helpers.
- Summarize planned edits before changing multiple files.
- Run `npm run build` after code changes, not after docs-only changes unless
  specifically requested.

## Suggested Next Work Pattern

For each work session:
1. Confirm the requested target.
2. Identify the smallest affected files.
3. State the edit plan briefly.
4. Implement.
5. Verify.
6. Summarize changed files and remaining risks.

## Recurring Final Reminder

When finishing BSJ work, include these reminders unless the user explicitly asks
for a very short answer:

- After the beehiiv registration URL is available, add it to Vercel as
  `NEXT_PUBLIC_BEEHIIV_PHRASE_CARDS_URL` to enable the
  `/free-japan-phrase-cards` CTA.
- `Ask_Japan_Before_Free_Phrase_Cards_phone.pdf` and
  `threads_posts_combined.xlsx` are intentionally left uncommitted unless the
  user explicitly asks to commit or remove them.
