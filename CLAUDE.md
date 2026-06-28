# CLAUDE.md - Bespoke Stay Japan

Start with `docs/current-state.md` and `docs/ai-working-rules.md`. They are the
compact handoff files for the project and should prevent repeated full-codebase
scans.

## Working Assumption

Bespoke Stay Japan is being rebuilt from a LiteAPI booking MVP into a practical
Japan stay information database and guide media.

The site should help foreign travelers and foreign residents compare stay
conditions that are hard to understand from normal booking sites:
- Tattoo and bath policies
- Private bath, room bath, and public bath differences
- Dietary restriction handling
- Luggage storage and luggage delivery
- Pet policies
- Kitchen, laundry, and long-stay suitability
- Family suitability
- English support
- Verified notes, unverified points, and caution notes

## Current Technical Direction

- Keep Next.js + Supabase.
- Keep hotel profile pages.
- Remove booking-site behavior and booking-first messaging.
- Use guide pages and condition pages as social/SEO landing pages.
- Use product kit teasers only where contextually relevant.

## Boundaries

Do not change these unless the task explicitly asks:
- Database schema
- Supabase table structure
- Import scripts
- Seed scripts
- Live hotel data

Do not add back:
- LiteAPI booking/search/price flows
- "Book now" centered UX
- Price comparison UI
- Required hotel-photo UI
- Loud teal CTA styling

## Implementation Style

- Small, reversible changes.
- Reuse existing components and helpers.
- Keep mobile readable first.
- Prefer text, icons, labels, and source-backed notes.
- Avoid broad refactors unless needed for the requested change.

## Research And Content Style

For guide pages, write for practical foreign travelers. Avoid overclaiming.
Mention that hotel rules can change and that users should confirm directly
before booking when the issue matters.

Product links can be planned around:
- Kansai Tattoo-Friendly Stay Kit
- Private Bath Stay Map
- Dietary Restriction Travel Kit
- Luggage-Free Travel Kit
- Family Stay Planning Kit
- Pet-Friendly Stay Checklist
- Long-Stay Japan Hotel Checklist

## Token Hygiene

- Read `docs/current-state.md` and `docs/ai-working-rules.md` first.
- Use `rg` for targeted discovery.
- Avoid opening large generated data files.
- Avoid reading build outputs or dependency folders.
- Summarize findings before making broad edits.
