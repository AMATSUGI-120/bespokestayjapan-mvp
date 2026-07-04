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

## Full Published Hotel Link Snapshot

Source: local `data/supabase-hotels-import.json` rows where
`is_published = true`. This is a stable-key working snapshot for the current
site rebuild. It does not write to Supabase.

Summary by detected provider in existing `source_urls` / `booking_url` data:

| Provider | Published hotels with provider present |
| --- | ---: |
| Official / source | 47 |
| Booking.com | 31 |
| Expedia | 12 |
| Hotels.com | 13 |
| Trip.com | 4 |
| Ikyu | 7 |
| Rakuten Travel | 2 |
| Klook | 1 |

Because Booking.com, Trip.com, Expedia, and Hotels.com are currently declined in
Travelpayouts, their exact listing URLs may remain reference links only. Klook
is the only currently usable hotel affiliate provider, and it should only be
added after exact-property verification and successful link generation.

| Stable key | Hotel | City | Existing providers | Affiliate status | Next action |
| --- | --- | --- | --- | --- | --- |
| `lp9fc14` | Kumashu-an Machiya House | Kyoto | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpbffda` | Kyoto Machiya Fukune | Kyoto | Official / source, Booking.com, Expedia | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp9aa59` | Machiya Oozora | Kyoto | Official / source, Booking.com, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp57c39` | Osaka Ryokan Kuramoto | Osaka | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp4feab` | Yamatoya Honten | Osaka | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp1a7bcd` | Machi de kurasu Tengachaya-3 | Osaka | Booking.com, Expedia, Hotels.com, Trip.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp1867c6` | i Osaka Traditional | Osaka | Booking.com, Hotels.com, Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp65557649` | MIMARU Osaka Shinsaibashi West | Osaka | Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp27f874` | TUNE STAY Kyoto | Kyoto | Booking.com, Official / source, Trip.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp65577d96` | MONday Apart Premium KYOTO Station | Kyoto | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6554d780` | Henn na Hotel Premier Kyoto Gojo Karasuma | Kyoto | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp656c3d76` | MIMARU SUITES Kyoto Central | Kyoto | Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp9fed5` | Luck You Kyoto | Kyoto | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpb9595` | Kyoto Ryokan Gion Sano | Kyoto | Booking.com, Expedia, Official / source, Trip.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpb9e0f` | Ryokan KANADE | Kyoto | Official / source, Booking.com, Expedia | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpae62c` | Ryokan Shimizu | Kyoto | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp1c6c11` | Nazuna Kyoto Gosho | Kyoto | Official / source, Ikyu | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6a5c0` | Matsubaya Ryokan | Kyoto | Official / source, Booking.com, Rakuten Travel, Expedia | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpaea34` | Kamishichiken Oku | Kyoto | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp1035eb` | Onya Tachibana | Kyoto | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp65582f45` | Onyado Nono Osaka Yodoyabashi | Osaka | Official / source, Booking.com, Ikyu, Expedia | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp97c81` | Onyado Nono Namba Natural Hot Spring | Osaka | Booking.com, Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpaf7c5` | Hot Spring Osaka Hinode Hotel Nipponbashi | Osaka | Official / source, Booking.com, Expedia | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp657b8af8` | AB Hotel Osaka Sakaisuji Hommachi | Osaka | Official / source, Booking.com, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpabf2f` | Y's HOTEL Shin Osaka | Osaka | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp219b75` | APA Hotel & Resort Midosuji Hommachi Ekimae Tower | Osaka | Official / source, Ikyu | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp65545a6f` | STAY THE KIX | Izumi-Sano | Official / source, Hotels.com, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6554ecdb` | Gummi Apartment | Osaka | Booking.com, Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp27ddc7` | ARlis house Shin Osaka North | Osaka | Official / source, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6554dfc3` | Koti Sopo Universal Bay 1 by Liaison | Osaka | Booking.com, Official / source, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp2515eb` | AFP Tennoji Apartment | Osaka | Expedia, Booking.com, Official / source, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6558f48f` | Ocean Shinsaibashi | Osaka | Official / source, Booking.com, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp656c3dc6` | OMO Kansai Airport by Hoshino Resorts | Izumi-Sano | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp1c71be` | TSUKI Tokyo | Tokyo | Official / source, Ikyu | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp2197e0` | Cyashitsu Ryokan Asakusa | Tokyo | Official / source, Expedia | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp5fb6f` | Ryokan Asakusa Shigetsu | Tokyo | Official / source, Expedia, Hotels.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6579fa5c` | Dormy Inn Premium Ginza | Tokyo | Booking.com, Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp67bfd` | Ochanomizu Hotel Shoryukan | Tokyo | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6555b786` | Ace Hotel Kyoto | Kyoto | Official / source, Ikyu, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpa7230` | Ascott Marunouchi Tokyo | Tokyo | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp94151` | Four Seasons Hotel Kyoto | Kyoto | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp661e3` | Hotel Chinzanso Tokyo | Tokyo | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp3460b8` | Kimpton Shinjuku Tokyo | Tokyo | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpfc294` | Machiya Kaemon Kyoto-sta. | Kyoto | Official / source, Expedia, Ikyu, Trip.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp394d6` | Mandarin Oriental, Tokyo | Tokyo | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp71969` | naokonoza Bettei Umekoji | Kyoto | Official / source, Ikyu, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6557fc1a` | OMO7 Osaka by Hoshino Resorts | Osaka | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp4b5e0` | Shangri-La Tokyo | Tokyo | Official / source, Booking.com | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lpc8f6d` | Riverside Arashiyama | Kyoto | Booking.com, Expedia, Rakuten Travel, Hotels.com, Klook | Klook affiliate override active | Keep verified Klook override. |
| `lp3e709` | The Peninsula Tokyo | Tokyo | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |
| `lp6556de13` | W Osaka | Osaka | Official / source | No active hotel affiliate link | Keep official/reference links; search Klook only when monetization priority warrants manual exact-match verification. |

## Batch 1: Published Hotels, Supabase Numeric ID Order

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

## Japanese Booking References

Japanese booking/reference links are shown separately on hotel profile pages
when detected in `source_urls`.

Current detected providers:

| Provider | Detected count | Notes |
| --- | ---: | --- |
| Rakuten Travel | 2 | Use as Japanese booking reference, not as BSJ reservation support. |
| Jalan | 0 | Add when future source data includes exact listings. |
| Ikyu | 7 in local import snapshot / 8 in earlier live check | Use as Japanese booking reference; some URLs may need manual re-check. |

User-facing position:

- These links may contain useful room, plan, or Japanese listing details.
- BSJ does not book on behalf of users.
- Users should treat them as references before making their own booking decision.

## Notes

- HTTP status `202` on Booking.com was treated as reachable, but Booking.com is
  not usable through Travelpayouts because the connection request is declined.
- HTTP status `429` or `403` on OTA sites may be bot protection, not necessarily
  a broken user-facing page.
- Japanese OTAs such as Rakuten Travel and Ikyu should be treated as reference
  links unless user experience and affiliate handling are separately verified.
- Prefer official hotel links when no active, exact, overseas-friendly affiliate
  link is available.
