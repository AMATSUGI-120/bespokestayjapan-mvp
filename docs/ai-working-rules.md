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

## Data Rules

- Published hotel pages should use `is_published = true`.
- `category_tags` is `text[]`.
- Prefer stable slugs or hotel keys for future routing.
- Treat legacy `liteapi_id` as compatibility data, not the future model.
- Do not assume hotel photos are available or licensed for display.

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
