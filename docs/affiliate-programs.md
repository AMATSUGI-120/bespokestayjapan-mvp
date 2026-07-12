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
| Trip.com | Connection request shown as declined when generating a link | 1-5.5% |
| Agoda | Visible in catalog | 6% |
| Expedia | Connection request shown as declined when generating a link | 1.35-3.6% |
| Hotels.com | Connection request shown as declined when generating a link | 1.35-3.6% |
| GetYourGuide | Visible but currently unavailable for the BSJ project until stable monthly traffic is available for at least three consecutive months | 8% |
| Viator | Visible but currently unavailable for the BSJ project until stable monthly traffic is available for at least three consecutive months | 8% |
| Klook | Available in My Programs | 2-5%; temporary 10% rates for Tours & Sightseeing / Activities & Experiences were visible through Sep 30, 2026 |
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
   - Activities: Klook now; GetYourGuide and Viator after traffic-based approval
4. Re-check hotel programs before placing hotel OTA affiliate links.

Current first hotel affiliate override:

```txt
Hotel ID 3 / Riverside Arashiyama / Klook / https://klook.tpk.mx/ZFwA8IjQ
```

See `docs/hotel-external-link-audit.md` for the ongoing hotel-by-hotel audit.

Current guide/service affiliate links:

| Service | URL | Primary placement |
| --- | --- | --- |
| Airalo Japan eSIM | `https://airalo.tpk.mx/ztsQtMmA` | IC card / connectivity planning context |
| Saily Japan eSIM | `https://saily.tpk.mx/5RWqVnM8` | IC card / connectivity planning context |
| Yesim Japan eSIM | `https://yesim.tpk.mx/oj7KCPUG` | IC card / connectivity planning context |
| Radical Storage Japan | `https://radicalstorage.tpk.mx/bz9wL4jy` | Luggage storage / hands-light travel context |
| Kiwitaxi Japan | `https://kiwitaxi.tpk.mx/0f91KlnQ` | Airport or private transfer context |
| Klook Japan activities | `https://klook.tpk.mx/zakGjLwG` | Japan activities / bath, ryokan, local experience context |

## Experience Affiliate Page Rule

For experience articles, prioritize useful public content first:

- Explain the main bookable activity category in the article.
- Use active Klook links where the category fits and the activity is commissionable.
- Treat GetYourGuide and Viator as future link targets until the BSJ project is approved.
- Do not hide safety, cancellation, age, or accessibility warnings behind email signup.
- Use email signup for deeper practical notes: meeting point checks, luggage suitability,
  restroom notes, food-need prompts, review-reading checklists, and comparison sheets.
- Keep CTAs practical, such as "Browse Japan activities on Klook" or "Get the practical
  checklist before booking".

## Compliance Notes

- Use `rel="sponsored"` for affiliate links.
- Keep user-facing CTAs practical, such as "Check booking options".
- Keep hotel notes and caveats visible before external booking links.
- Do not use Booking.com links through Travelpayouts while the connection is
  declined.
- Do not use Trip.com, Expedia, or Hotels.com through Travelpayouts while their
  connection requests are declined.
