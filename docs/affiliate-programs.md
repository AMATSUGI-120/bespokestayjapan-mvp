# Affiliate Programs

Updated: 2026-07-04 JST

## Current Position

Bespoke Stay Japan can use affiliate links where they naturally help the reader,
but the site should not return to a booking-engine or price-comparison framing.

Good placements:
- Hotel profile sidebars
- Practical guide pages
- Product-kit support links
- Luggage, eSIM, transfer, insurance, and activity guides

Avoid:
- "Book now" as the primary site CTA
- Price-comparison tables as the main UX
- Affiliate links that replace verification notes or caveats

## Code Location

Hotel external links are centralized in:

```txt
lib/external-links.ts
components/ExternalSourceLink.tsx
```

Future Travelpayouts, OTA, or direct affiliate URLs should be added through
`AFFILIATE_LINK_OVERRIDES` in `lib/external-links.ts`, not directly inside page
components.

## Travelpayouts Status Checked

Travelpayouts project:

```txt
Bespokestayjapan
```

Confirmed visible program terms in Travelpayouts:

| Program | Status / Notes | Visible reward |
| --- | --- | --- |
| Booking.com | Connection request shown as declined when generating a link | 3-5%, flights EUR 1.5 |
| Trip.com | Visible in catalog | 1-5.5% |
| Agoda | Visible in catalog | 6% |
| Expedia | Visible in catalog | 1.35-3.6% |
| Hotels.com | Visible in catalog | 1.35-3.6% |
| GetYourGuide | Visible in catalog | 8% |
| Viator | Visible in catalog | 8% |
| Klook | Available in My Programs | 2-5%; temporary higher rates were visible |
| Airalo | Available in My Programs | 12% |
| Yesim | Available in My Programs | 18% |
| Saily | Available in My Programs | 15% |
| Radical Storage | Available in My Programs | 8%; temporary higher rate was visible |
| Kiwitaxi | Available in My Programs | 9-11% |
| Welcome Pickups | Available in My Programs | 8-9% |
| intui.travel | Available in My Programs | 10% |

## Practical Priority

1. Use direct hotel/source links until a hotel OTA program is confirmed active.
2. Add confirmed affiliate overrides one hotel or provider at a time.
3. Prioritize adjacent travel links first:
   - eSIM: Airalo, Saily, Yesim
   - Luggage: Radical Storage
   - Transfers: Kiwitaxi, Welcome Pickups, intui.travel
   - Activities: Klook, GetYourGuide, Viator
4. Re-check hotel programs before placing hotel OTA affiliate links.

## Compliance Notes

- Use `rel="sponsored"` for affiliate links.
- Keep user-facing CTAs practical, such as "Check booking options".
- Keep hotel notes and caveats visible before external booking links.
- Do not use Booking.com links through Travelpayouts while the connection is
  declined.
