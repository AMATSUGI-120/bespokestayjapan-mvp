# Hotel External Link Audit

Updated: 2026-07-04 JST

## Purpose

Track whether each published BSJ hotel has accurate external hotel links, which
OTA listings are exact matches, and which links can be converted to affiliate
links.

Do not add hotel affiliate links to `lib/external-links.ts` until:

- The listing is an exact hotel/property match.
- The relevant affiliate program is active and link generation succeeds.
- The link does not conflict with `docs/booking-support-policy.md`.

## Current Travelpayouts Status

Checked under the Travelpayouts project `Bespokestayjapan`.

Hotel OTA programs currently tested:

| Program | Link generation status | Notes |
| --- | --- | --- |
| Booking.com | Declined | Do not use through Travelpayouts. |
| Trip.com | Declined | Exact URLs may remain normal reference links. |
| Expedia | Declined | Exact URLs may remain normal reference links. |
| Hotels.com | Declined | Exact URLs may remain normal reference links. |
| Klook | Works | Can be used after exact property confirmation. |

## Batch 1: Published Hotels, ID Order

Source: read-only Supabase query on `hotels` with `is_published = true`.

| ID | Hotel | City | Existing exact/reference links found | Affiliate status | Next action |
| --- | --- | --- | --- | --- | --- |
| 1 | naokonoza Bettei Umekoji | Kyoto | Official site 200; Booking.com 202; Ikyu URL returned 404 | No active hotel affiliate link | Re-check Ikyu URL manually; search Agoda/Trip/Expedia/Hotels only if needed. |
| 2 | Machiya Kaemon Kyoto-sta. | Kyoto | Expedia URL present but bot returned 429; Trip.com URL 200; Ikyu 200; official fetch errored | Trip.com declined; Expedia declined | Keep official/OTA as references only; do not affiliate yet. |
| 3 | Riverside Arashiyama | Kyoto | Booking.com 202; Expedia 429; Rakuten Travel 200; Hotels.com 200; Klook verified in Chrome | Klook affiliate generated | Added Klook affiliate override for hotel ID `3`. |
| 4 | Ace Hotel Kyoto | Kyoto | Official 200; Ikyu 200; Booking.com 202 | No active hotel affiliate link | Keep official source primary; Booking.com not usable via Travelpayouts. |
| 5 | Four Seasons Hotel Kyoto | Kyoto | Official 200; BringFido reference present | No active hotel affiliate link | Search overseas OTA only if monetization priority changes. |
| 7 | OMO7 Osaka by Hoshino Resorts | Osaka | Official 200; Hoshino policy/source pages present | No active hotel affiliate link | Keep official source primary. |
| 8 | W Osaka | Osaka | Marriott URL returned 403 to bot; official Marriott links present | No active hotel affiliate link | Verify in browser if needed; likely official source only. |
| 9 | Koti Sopo Universal Bay 1 by Liaison | Osaka | Booking.com 202; third-party local hotel mirror 200 | No active hotel affiliate link | Search Klook/Agoda/Trip only if exact match is needed. |
| 10 | Kimpton Shinjuku Tokyo | Tokyo | IHG official 200; Kimpton source pages present | No active hotel affiliate link | Keep official source primary. |
| 11 | The Peninsula Tokyo | Tokyo | Peninsula official returned 403 to bot, likely bot-blocked | No active hotel affiliate link | Browser-verify if used as primary CTA. |

## Verified Affiliate Overrides

| Hotel ID | Hotel | Provider | Affiliate URL | Verification |
| --- | --- | --- | --- | --- |
| 3 | Riverside Arashiyama | Klook | `https://klook.tpk.mx/ZFwA8IjQ` | Chrome displayed Klook exact hotel page with title `Riverside Arashiyama in Kyoto`, address `10 Nakaoshitacho (Nishikyo-ku)`, and room list. |

## Notes

- HTTP status `202` on Booking.com was treated as reachable, but Booking.com is
  not usable through Travelpayouts because the connection request is declined.
- HTTP status `429` or `403` on OTA sites may be bot protection, not necessarily
  a broken user-facing page.
- Japanese OTAs such as Rakuten Travel and Ikyu should be treated as reference
  links unless user experience and affiliate handling are separately verified.
- Prefer official hotel links when no active, exact, overseas-friendly affiliate
  link is available.
