# LiteAPI Booking Readiness Report

**調査日時:** 2026-05-14T16:13:48.366Z
**テスト日程:** 2026-06-15 → 2026-06-16 (2名)
**対象タグ:** private-villa / self-catering / private-bath
**対象件数:** 33件

## サマリー

| Grade | 分類 | 件数 |
|---|---|---|
| ✅ **A** | booking_ready_private_stay | 0件 |
| 🟡 **B** | rates_available_but_needs_room_selection | 21件 |
| 🔴 **C1** | api_error_or_invalid_hotel | 12件 |
| 🟠 **C2** | no_inventory_on_test_dates | 0件 |
| 🟤 **C3** | incomplete_booking_data | 0件 |
| ⛔ **D** | official_or_ota_fallback_recommended | 0件 |

**追加チェック結果:**

- ✅ **Check 8** — 1 roomType で auto-selection 安全: 0件
- ⚠️ **Check 8** — auto-selection 不安全 (offerId/price 欠落): 0件
- 🐾 **Check 9** — pet 関連 hotelRemarks あり: 0件
- 🔴 **Check 10** — 全 roomType が NRFN（要警告UI）: 0件

> **C2 補足:** C2 は API 正常・在庫なしのため別日程で再調査すれば復活する可能性があります。D とは区別してください。

## 🟡 Grade B — rates_available_but_needs_room_selection (21件)

### STAY THE KIX — Private Apartment with Full Kitchen and Soaking Bath Near Kansai Airport 🏠
- **liteapi_id:** `lp65545a6f`
- **city / area:** Izumi-Sano / Kansai Airport / Izumi-Sano
- **category_tags:** private-villa, self-catering, private-bath, family-friendly
- **判定理由:** 26 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥14,398.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥14,398.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥14,760.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 4 | (unnamed) | ¥14,760.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 5 | (unnamed) | ¥14,777.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥14,777.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥15,897.72 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 8 | (unnamed) | ¥15,897.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥15,919.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥16,310.14 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/15 |
  | 11 | (unnamed) | ¥16,310.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 12 | (unnamed) | ¥16,320.88 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 13 | (unnamed) | ¥16,320.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥16,416.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥16,582.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥16,914.14 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥17,135.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥17,178.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥17,411.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 20 | (unnamed) | ¥17,687.25 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 21 | (unnamed) | ¥17,908.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥18,240.47 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥18,322.84 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥18,406.26 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥18,793.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥18,903.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |

### naokonoza Bettei Umekoji — Rare Pet-Friendly Kyoto Machiya with Private Shigaraki Ceramic Bath 🏠
- **liteapi_id:** `lp71969`
- **city / area:** Kyoto / Umekoji / Tanbaguchi / Kyoto Railway Museum area
- **category_tags:** private-villa, pet-friendly, self-catering, private-bath, family-friendly
- **判定理由:** 51 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥35,562.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥35,619.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥36,342.31 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/15 |
  | 4 | (unnamed) | ¥36,342.31 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/5/15 |
  | 5 | (unnamed) | ¥36,480.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 6 | (unnamed) | ¥36,895.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥36,895.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥37,523.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥37,564.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥37,799.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥37,805.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥37,805.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥38,294.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥38,294.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥38,392.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥38,392.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥38,392.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥38,392.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥38,392.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 20 | (unnamed) | ¥38,392.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 21 | (unnamed) | ¥38,570.48 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥38,644.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 23 | (unnamed) | ¥39,145.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥41,849.85 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/15 |
  | 25 | (unnamed) | ¥41,849.85 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/5/15 |
  | 26 | (unnamed) | ¥43,874.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 27 | (unnamed) | ¥43,916.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 28 | (unnamed) | ¥44,209.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 29 | (unnamed) | ¥44,209.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 30 | (unnamed) | ¥44,209.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 31 | (unnamed) | ¥44,209.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 32 | (unnamed) | ¥44,209.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥44,209.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥44,413.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥44,499.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 36 | (unnamed) | ¥45,078.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥50,658.18 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/15 |
  | 38 | (unnamed) | ¥50,658.18 | `3gAWonJzkY-kc3JpZNoE…` | - | RFN | 2026/5/15 |
  | 39 | (unnamed) | ¥51,405.6 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 40 | (unnamed) | ¥53,063.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 41 | (unnamed) | ¥53,186.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 42 | (unnamed) | ¥53,237.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 43 | (unnamed) | ¥53,515.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 44 | (unnamed) | ¥53,515.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 45 | (unnamed) | ¥53,515.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥53,515.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 47 | (unnamed) | ¥53,515.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 48 | (unnamed) | ¥53,515.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 49 | (unnamed) | ¥60,801.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 50 | (unnamed) | ¥72,961.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 51 | (unnamed) | ¥121,603.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |

### Machiya Oozora — Private Kyoto Townhouse with Full Kitchen and Garden Soaking Tub 🏠
- **liteapi_id:** `lp9aa59`
- **city / area:** Kyoto / Nakagyo-ku
- **category_tags:** private-villa, self-catering, food-friendly, private-bath, luggage-friendly, English-friendly, family-friendly
- **判定理由:** 25 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥30,986.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥30,986.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥31,472.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 4 | (unnamed) | ¥31,472.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 5 | (unnamed) | ¥31,498.29 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/5/31 |
  | 6 | (unnamed) | ¥31,498.29 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/31 |
  | 7 | (unnamed) | ¥31,954.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥31,954.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥32,714.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 10 | (unnamed) | ¥32,747.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 11 | (unnamed) | ¥32,840.56 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 12 | (unnamed) | ¥33,427.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥33,490.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 14 | (unnamed) | ¥37,003.96 | `3gAWonJzkY-kc3JpZNoE…` | - | RFN | 2026/5/31 |
  | 15 | (unnamed) | ¥37,003.96 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/31 |
  | 16 | (unnamed) | ¥37,807.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 17 | (unnamed) | ¥38,581.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 18 | (unnamed) | ¥39,268.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥39,344.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 20 | (unnamed) | ¥46,761.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 21 | (unnamed) | ¥53,063.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 22 | (unnamed) | ¥53,522.85 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/5/31 |
  | 23 | (unnamed) | ¥53,522.85 | `3gAWonJzkY-kc3JpZNoE…` | - | RFN | 2026/5/31 |
  | 24 | (unnamed) | ¥55,806.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 25 | (unnamed) | ¥60,248.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |

### Machiya Kaemon Kyoto-sta. — Pet-Friendly Traditional Townhouse 5 Minutes from Kyoto Station, Dogs at No Extra Charge 🏠
- **liteapi_id:** `lpfc294`
- **city / area:** Kyoto / Kyoto Station / Shimogyo-ku
- **category_tags:** private-villa, pet-friendly, self-catering, private-bath, family-friendly
- **判定理由:** 14 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥59,574.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥59,574.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥59,884.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 4 | (unnamed) | ¥59,884.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 5 | (unnamed) | ¥60,908.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥60,908.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥69,779.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 8 | (unnamed) | ¥69,779.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 9 | (unnamed) | ¥71,240.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥71,378.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 11 | (unnamed) | ¥76,875.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 12 | (unnamed) | ¥76,875.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 13 | (unnamed) | ¥78,482.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥78,634.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |

### TUNE STAY Kyoto — Boutique Hotel Near Kyoto Station with 24-Hour Shared Kitchen
- **liteapi_id:** `lp27f874`
- **city / area:** Kyoto / Kyoto Station / Shimogyo-ku
- **category_tags:** self-catering, food-friendly, private-bath, English-friendly
- **判定理由:** 46 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥7,405.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 2 | (unnamed) | ¥7,434.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 3 | (unnamed) | ¥7,580.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 4 | (unnamed) | ¥7,589.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 5 | (unnamed) | ¥7,801.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 6 | (unnamed) | ¥7,833.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 7 | (unnamed) | ¥8,056.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥8,071.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥8,080.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 10 | (unnamed) | ¥8,088.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 11 | (unnamed) | ¥8,093.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 12 | (unnamed) | ¥8,117.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 13 | (unnamed) | ¥8,147 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 14 | (unnamed) | ¥8,172.04 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 15 | (unnamed) | ¥8,501.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥8,516.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥8,525.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 18 | (unnamed) | ¥8,533.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 19 | (unnamed) | ¥8,540.6 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 20 | (unnamed) | ¥8,566.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 21 | (unnamed) | ¥9,966.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 22 | (unnamed) | ¥10,177.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 23 | (unnamed) | ¥10,197.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 24 | (unnamed) | ¥10,500.78 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 25 | (unnamed) | ¥10,631.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 26 | (unnamed) | ¥10,725.78 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 27 | (unnamed) | ¥11,085.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 28 | (unnamed) | ¥11,679.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 29 | (unnamed) | ¥12,035.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 30 | (unnamed) | ¥12,035.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 31 | (unnamed) | ¥12,779.26 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 32 | (unnamed) | ¥13,166.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 33 | (unnamed) | ¥13,179.48 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 34 | (unnamed) | ¥13,462.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 35 | (unnamed) | ¥13,732.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 36 | (unnamed) | ¥14,659.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 37 | (unnamed) | ¥15,105.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 38 | (unnamed) | ¥15,105.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 39 | (unnamed) | ¥15,188.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥15,225.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 41 | (unnamed) | ¥15,234.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 42 | (unnamed) | ¥16,621.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 43 | (unnamed) | ¥52,058.99 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 44 | (unnamed) | ¥52,096.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 45 | (unnamed) | ¥57,092.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥57,133.47 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |

### MONday Apart Premium KYOTO Station — Apartment Hotel with Full IH Kitchen Near Kyoto Station
- **liteapi_id:** `lp65577d96`
- **city / area:** Kyoto / Kyoto Station / Shimogyo-ku
- **category_tags:** self-catering, food-friendly, luggage-friendly, English-friendly, family-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥18,222.46 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥19,009.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥19,131.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥19,251.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥19,354.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥19,418.34 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥19,418.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥19,418.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥20,063.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥20,499.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 11 | (unnamed) | ¥21,579.69 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 12 | (unnamed) | ¥21,591.66 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥21,783.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 14 | (unnamed) | ¥21,920.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 15 | (unnamed) | ¥22,060.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 16 | (unnamed) | ¥22,178.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 17 | (unnamed) | ¥22,209.84 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥22,245.04 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥22,252.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 20 | (unnamed) | ¥22,252.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 21 | (unnamed) | ¥22,359.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥22,388.97 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥22,474.01 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 24 | (unnamed) | ¥22,529.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥22,650.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥22,724.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 27 | (unnamed) | ¥22,727.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 28 | (unnamed) | ¥22,727.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 29 | (unnamed) | ¥23,069.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 30 | (unnamed) | ¥23,214.97 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 31 | (unnamed) | ¥23,363.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 32 | (unnamed) | ¥23,486.67 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥23,561.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥23,567.26 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥23,567.26 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 36 | (unnamed) | ¥23,646.17 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥23,771 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥24,207.16 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 39 | (unnamed) | ¥24,425.25 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥24,425.25 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 41 | (unnamed) | ¥24,711.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 42 | (unnamed) | ¥24,861.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 43 | (unnamed) | ¥24,861.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 44 | (unnamed) | ¥25,079.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 45 | (unnamed) | ¥25,299.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥25,489.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 47 | (unnamed) | ¥25,652.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 48 | (unnamed) | ¥25,733.75 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 49 | (unnamed) | ¥25,817.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 50 | (unnamed) | ¥25,953.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 51 | (unnamed) | ¥26,021.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 52 | (unnamed) | ¥26,040.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 53 | (unnamed) | ¥26,040.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 54 | (unnamed) | ¥26,160.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 55 | (unnamed) | ¥26,239.84 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 56 | (unnamed) | ¥26,303.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 57 | (unnamed) | ¥26,362.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 58 | (unnamed) | ¥26,387.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 59 | (unnamed) | ¥26,431.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 60 | (unnamed) | ¥26,486.52 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 61 | (unnamed) | ¥26,600.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 62 | (unnamed) | ¥26,770.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 63 | (unnamed) | ¥26,853.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 64 | (unnamed) | ¥26,911.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 65 | (unnamed) | ¥26,912.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 66 | (unnamed) | ¥27,001.9 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 67 | (unnamed) | ¥27,001.9 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 68 | (unnamed) | ¥27,023.54 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 69 | (unnamed) | ¥27,042.24 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 70 | (unnamed) | ¥27,196.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 71 | (unnamed) | ¥27,271.12 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 72 | (unnamed) | ¥27,369.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 73 | (unnamed) | ¥27,514.97 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 74 | (unnamed) | ¥27,604.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 75 | (unnamed) | ¥27,615.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 76 | (unnamed) | ¥27,615.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 77 | (unnamed) | ¥27,615.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 78 | (unnamed) | ¥27,615.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 79 | (unnamed) | ¥27,615.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 80 | (unnamed) | ¥27,691.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 81 | (unnamed) | ¥27,816.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 82 | (unnamed) | ¥27,850.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 83 | (unnamed) | ¥28,004.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 84 | (unnamed) | ¥28,004.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 85 | (unnamed) | ¥28,095.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 86 | (unnamed) | ¥28,350.73 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 87 | (unnamed) | ¥29,004.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 88 | (unnamed) | ¥29,004.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 89 | (unnamed) | ¥29,065.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 90 | (unnamed) | ¥29,618.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 91 | (unnamed) | ¥29,618.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 92 | (unnamed) | ¥29,979.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 93 | (unnamed) | ¥30,078.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 94 | (unnamed) | ¥30,179.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 95 | (unnamed) | ¥30,249.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 96 | (unnamed) | ¥30,772.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 97 | (unnamed) | ¥30,964.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 98 | (unnamed) | ¥31,161.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 99 | (unnamed) | ¥31,360.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 100 | (unnamed) | ¥31,384.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 101 | (unnamed) | ¥31,384.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 102 | (unnamed) | ¥31,526.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 103 | (unnamed) | ¥31,915.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 104 | (unnamed) | ¥31,947.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 105 | (unnamed) | ¥31,947.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 106 | (unnamed) | ¥31,990.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 107 | (unnamed) | ¥32,141.3 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 108 | (unnamed) | ¥32,357.49 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 109 | (unnamed) | ¥32,428.32 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 110 | (unnamed) | ¥33,192.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 111 | (unnamed) | ¥33,192.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 112 | (unnamed) | ¥33,511 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 113 | (unnamed) | ¥33,511 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 114 | (unnamed) | ¥33,511 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 115 | (unnamed) | ¥33,511 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 116 | (unnamed) | ¥33,511 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 117 | (unnamed) | ¥33,511 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 118 | (unnamed) | ¥33,593.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 119 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 120 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 121 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 122 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 123 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 124 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 125 | (unnamed) | ¥33,810.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 126 | (unnamed) | ¥33,810.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 127 | (unnamed) | ¥33,810.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 128 | (unnamed) | ¥33,810.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 129 | (unnamed) | ¥33,810.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 130 | (unnamed) | ¥33,810.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 131 | (unnamed) | ¥33,828.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 132 | (unnamed) | ¥33,898.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 133 | (unnamed) | ¥34,124.2 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 134 | (unnamed) | ¥34,217.57 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 135 | (unnamed) | ¥35,118.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 136 | (unnamed) | ¥35,118.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 137 | (unnamed) | ¥35,678.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 138 | (unnamed) | ¥35,678.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 139 | (unnamed) | ¥35,678.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 140 | (unnamed) | ¥35,678.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 141 | (unnamed) | ¥35,678.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 142 | (unnamed) | ¥35,678.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 143 | (unnamed) | ¥35,764.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 144 | (unnamed) | ¥36,014.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 145 | (unnamed) | ¥36,201.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 146 | (unnamed) | ¥36,243.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 147 | (unnamed) | ¥36,476.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 148 | (unnamed) | ¥36,669.88 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 149 | (unnamed) | ¥36,786.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 150 | (unnamed) | ¥36,793.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 151 | (unnamed) | ¥36,855.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 152 | (unnamed) | ¥37,042.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 153 | (unnamed) | ¥37,292.11 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 154 | (unnamed) | ¥37,652.56 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 155 | (unnamed) | ¥37,652.56 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 156 | (unnamed) | ¥37,946.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 157 | (unnamed) | ¥38,583.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 158 | (unnamed) | ¥38,600.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 159 | (unnamed) | ¥38,829.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 160 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 161 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 162 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 163 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 164 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 165 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 166 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 167 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 168 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 169 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 170 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 171 | (unnamed) | ¥39,260.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 172 | (unnamed) | ¥39,366.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 173 | (unnamed) | ¥39,366.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 174 | (unnamed) | ¥39,410.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 175 | (unnamed) | ¥39,909.11 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 176 | (unnamed) | ¥39,938.69 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 177 | (unnamed) | ¥40,563.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 178 | (unnamed) | ¥40,563.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 179 | (unnamed) | ¥41,039.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 180 | (unnamed) | ¥41,059.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 181 | (unnamed) | ¥41,263.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 182 | (unnamed) | ¥41,265.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 183 | (unnamed) | ¥41,435.69 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 184 | (unnamed) | ¥41,512.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 185 | (unnamed) | ¥41,529.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 186 | (unnamed) | ¥41,794.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 187 | (unnamed) | ¥41,877.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 188 | (unnamed) | ¥42,016.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 189 | (unnamed) | ¥42,157.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 190 | (unnamed) | ¥42,576.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 191 | (unnamed) | ¥43,991.2 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 192 | (unnamed) | ¥44,208.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 193 | (unnamed) | ¥44,492.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 194 | (unnamed) | ¥44,740.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 195 | (unnamed) | ¥44,956.81 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/7 |
  | 196 | (unnamed) | ¥46,522.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 197 | (unnamed) | ¥46,805.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 198 | (unnamed) | ¥47,961.27 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 199 | (unnamed) | ¥48,140.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 200 | (unnamed) | ¥48,190.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |

### Luck You Kyoto — Machiya Ryokan with Complimentary Access to Tattoo-Friendly Sento
- **liteapi_id:** `lp9fed5`
- **city / area:** Kyoto / Gojo / Shimogyo-ku
- **category_tags:** tattoo-consideration, private-bath, English-friendly
- **判定理由:** 21 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥30,504.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥30,504.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥30,676.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 4 | (unnamed) | ¥30,676.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 5 | (unnamed) | ¥30,856.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥30,908.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥31,435.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥31,435.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥33,732.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥33,765.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥33,825.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 12 | (unnamed) | ¥33,831.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 13 | (unnamed) | ¥33,831.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 14 | (unnamed) | ¥36,042.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥37,939.9 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 16 | (unnamed) | ¥63,395.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥63,395.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥63,709.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 19 | (unnamed) | ¥63,709.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 20 | (unnamed) | ¥65,443.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 21 | (unnamed) | ¥65,443.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |

### Ryokan KANADE — Luxury Dining Ryokan with Private Open-Air Baths Near Heian Shrine
- **liteapi_id:** `lpb9e0f`
- **city / area:** Kyoto / Okazaki / Sakyo-ku
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, English-friendly
- **判定理由:** 184 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥28,215.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥28,215.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥28,243.1 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥28,243.1 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥28,293.1 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥28,293.1 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 7 | (unnamed) | ¥28,380.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 8 | (unnamed) | ¥28,380.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 9 | (unnamed) | ¥28,633.62 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 10 | (unnamed) | ¥28,633.62 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 11 | (unnamed) | ¥28,742.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 12 | (unnamed) | ¥28,885.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥28,885.98 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 14 | (unnamed) | ¥29,291.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥29,291.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥29,320.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥29,320.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥29,371.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥29,371.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 20 | (unnamed) | ¥29,455.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 21 | (unnamed) | ¥29,455.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 22 | (unnamed) | ¥29,659.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 23 | (unnamed) | ¥29,703.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 24 | (unnamed) | ¥29,703.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 25 | (unnamed) | ¥29,736.98 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 26 | (unnamed) | ¥29,736.98 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 27 | (unnamed) | ¥29,818.18 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 28 | (unnamed) | ¥29,847.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 29 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 30 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 31 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 32 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 33 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 34 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 35 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 36 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 37 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 38 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 39 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 40 | (unnamed) | ¥29,855.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 41 | (unnamed) | ¥29,941.85 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 42 | (unnamed) | ¥29,986.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 43 | (unnamed) | ¥29,986.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 44 | (unnamed) | ¥29,998.25 | `3gAWonJzkY-kc3JpZNny…` | - | NRFN | - |
  | 45 | (unnamed) | ¥29,998.25 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 46 | (unnamed) | ¥29,998.25 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 47 | (unnamed) | ¥29,998.25 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 48 | (unnamed) | ¥30,160.18 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 49 | (unnamed) | ¥30,177.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 50 | (unnamed) | ¥30,177.41 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 51 | (unnamed) | ¥30,191.15 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 52 | (unnamed) | ¥30,206.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 53 | (unnamed) | ¥30,206.32 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 54 | (unnamed) | ¥30,281.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 55 | (unnamed) | ¥30,281.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 56 | (unnamed) | ¥30,302.99 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 57 | (unnamed) | ¥30,340.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 58 | (unnamed) | ¥30,340.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 59 | (unnamed) | ¥30,370.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 60 | (unnamed) | ¥30,370.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 61 | (unnamed) | ¥30,448.71 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 62 | (unnamed) | ¥30,463.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 63 | (unnamed) | ¥30,519.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 64 | (unnamed) | ¥30,519.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 65 | (unnamed) | ¥30,618.8 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 66 | (unnamed) | ¥30,829.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 67 | (unnamed) | ¥30,829.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 68 | (unnamed) | ¥31,026.7 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 69 | (unnamed) | ¥31,185.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 70 | (unnamed) | ¥31,483.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 71 | (unnamed) | ¥31,809.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 72 | (unnamed) | ¥31,809.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 73 | (unnamed) | ¥31,849.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 74 | (unnamed) | ¥31,849.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 75 | (unnamed) | ¥32,068.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 76 | (unnamed) | ¥32,111.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 77 | (unnamed) | ¥32,111.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 78 | (unnamed) | ¥33,116.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 79 | (unnamed) | ¥33,116.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 80 | (unnamed) | ¥33,116.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 81 | (unnamed) | ¥33,116.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 82 | (unnamed) | ¥33,116.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 83 | (unnamed) | ¥33,116.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 84 | (unnamed) | ¥33,360.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 85 | (unnamed) | ¥33,360.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 86 | (unnamed) | ¥33,360.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 87 | (unnamed) | ¥33,681.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 88 | (unnamed) | ¥33,681.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 89 | (unnamed) | ¥33,681.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 90 | (unnamed) | ¥33,681.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 91 | (unnamed) | ¥33,774.04 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 92 | (unnamed) | ¥33,774.04 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 93 | (unnamed) | ¥33,845.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 94 | (unnamed) | ¥33,845.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 95 | (unnamed) | ¥34,269.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 96 | (unnamed) | ¥34,450.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 97 | (unnamed) | ¥34,450.32 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 98 | (unnamed) | ¥34,758.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 99 | (unnamed) | ¥34,758.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 100 | (unnamed) | ¥34,758.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 101 | (unnamed) | ¥34,758.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 102 | (unnamed) | ¥34,852.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 103 | (unnamed) | ¥34,852.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 104 | (unnamed) | ¥34,923.12 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 105 | (unnamed) | ¥34,923.12 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 106 | (unnamed) | ¥35,329.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 107 | (unnamed) | ¥35,374.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 108 | (unnamed) | ¥35,425.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 109 | (unnamed) | ¥35,425.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 110 | (unnamed) | ¥35,549.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 111 | (unnamed) | ¥35,549.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 112 | (unnamed) | ¥35,583.06 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 113 | (unnamed) | ¥35,591.75 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 114 | (unnamed) | ¥35,767.49 | `3gAWonJzkY-kc3JpZNny…` | - | NRFN | - |
  | 115 | (unnamed) | ¥35,767.49 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 116 | (unnamed) | ¥35,767.49 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 117 | (unnamed) | ¥35,767.49 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 118 | (unnamed) | ¥35,960.65 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 119 | (unnamed) | ¥35,997.57 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 120 | (unnamed) | ¥36,107.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 121 | (unnamed) | ¥36,128.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 122 | (unnamed) | ¥36,319.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 123 | (unnamed) | ¥36,553.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 124 | (unnamed) | ¥36,553.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 125 | (unnamed) | ¥36,884.89 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 126 | (unnamed) | ¥36,887.68 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 127 | (unnamed) | ¥37,093.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 128 | (unnamed) | ¥37,620.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 129 | (unnamed) | ¥38,347.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 130 | (unnamed) | ¥39,663.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 131 | (unnamed) | ¥39,663.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 132 | (unnamed) | ¥39,663.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 133 | (unnamed) | ¥39,796.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 134 | (unnamed) | ¥48,088.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 135 | (unnamed) | ¥57,485.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 136 | (unnamed) | ¥58,590.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 137 | (unnamed) | ¥59,666.73 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 138 | (unnamed) | ¥60,320.37 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 139 | (unnamed) | ¥60,382.3 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 140 | (unnamed) | ¥60,968.54 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 141 | (unnamed) | ¥62,218.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 142 | (unnamed) | ¥62,774.78 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 143 | (unnamed) | ¥63,012.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 144 | (unnamed) | ¥63,153.43 | `3gAWonJzkY-kc3JpZNny…` | - | NRFN | - |
  | 145 | (unnamed) | ¥63,153.43 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 146 | (unnamed) | ¥63,153.43 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 147 | (unnamed) | ¥63,153.43 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 148 | (unnamed) | ¥63,153.43 | `3gAWonJzkY-kc3JpZNn0…` | - | NRFN | - |
  | 149 | (unnamed) | ¥63,874.42 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 150 | (unnamed) | ¥63,912.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 151 | (unnamed) | ¥64,117.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 152 | (unnamed) | ¥65,451.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 153 | (unnamed) | ¥65,451.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 154 | (unnamed) | ¥65,451.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 155 | (unnamed) | ¥65,451.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 156 | (unnamed) | ¥65,451.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 157 | (unnamed) | ¥65,451.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 158 | (unnamed) | ¥65,524.92 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 159 | (unnamed) | ¥66,120.83 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 160 | (unnamed) | ¥66,188.72 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/8 |
  | 161 | (unnamed) | ¥66,387.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 162 | (unnamed) | ¥66,519.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 163 | (unnamed) | ¥66,565.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 164 | (unnamed) | ¥66,582.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 165 | (unnamed) | ¥66,586.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 166 | (unnamed) | ¥66,609.77 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/6 |
  | 167 | (unnamed) | ¥66,748.16 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/9 |
  | 168 | (unnamed) | ¥66,911.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 169 | (unnamed) | ¥66,958.11 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 170 | (unnamed) | ¥67,117.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 171 | (unnamed) | ¥68,259.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 172 | (unnamed) | ¥68,885.01 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 173 | (unnamed) | ¥69,519.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 174 | (unnamed) | ¥69,586.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 175 | (unnamed) | ¥69,586.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 176 | (unnamed) | ¥69,586.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 177 | (unnamed) | ¥69,607.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/9 |
  | 178 | (unnamed) | ¥69,968.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 179 | (unnamed) | ¥70,081.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 180 | (unnamed) | ¥71,906.4 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 181 | (unnamed) | ¥71,906.4 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 182 | (unnamed) | ¥71,906.4 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 183 | (unnamed) | ¥82,911.07 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 184 | (unnamed) | ¥91,202.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |

### Nazuna Kyoto Gosho — Luxury Wagashi Ryokan with Private Garden Baths Near Imperial Palace
- **liteapi_id:** `lp1c6c11`
- **city / area:** Kyoto / Kyoto Gosho / Nakagyo-ku
- **category_tags:** private-bath, tattoo-consideration, English-friendly, food-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥99,702.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 2 | (unnamed) | ¥99,702.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 3 | (unnamed) | ¥99,702.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 4 | (unnamed) | ¥99,702.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 5 | (unnamed) | ¥102,526.39 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/7 |
  | 6 | (unnamed) | ¥102,526.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 7 | (unnamed) | ¥102,526.39 | `3gAWonJzkY-kc3JpZNn9…` | - | RFN | 2026/6/7 |
  | 8 | (unnamed) | ¥102,526.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 9 | (unnamed) | ¥106,649.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 10 | (unnamed) | ¥106,649.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 11 | (unnamed) | ¥106,649.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 12 | (unnamed) | ¥106,649.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 13 | (unnamed) | ¥109,473.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥109,685.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥109,791.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 16 | (unnamed) | ¥109,897.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 17 | (unnamed) | ¥109,987.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 18 | (unnamed) | ¥110,567.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 19 | (unnamed) | ¥110,567.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 20 | (unnamed) | ¥110,567.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 21 | (unnamed) | ¥110,567.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 22 | (unnamed) | ¥110,567.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 23 | (unnamed) | ¥114,315.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥114,479.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 25 | (unnamed) | ¥114,536.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 26 | (unnamed) | ¥114,559.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 27 | (unnamed) | ¥114,559.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 28 | (unnamed) | ¥114,559.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 29 | (unnamed) | ¥114,559.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 30 | (unnamed) | ¥118,814.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 31 | (unnamed) | ¥118,814.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 32 | (unnamed) | ¥118,814.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥118,814.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥119,160.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 35 | (unnamed) | ¥119,160.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 36 | (unnamed) | ¥119,160.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 37 | (unnamed) | ¥119,160.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 38 | (unnamed) | ¥119,928.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 39 | (unnamed) | ¥119,928.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥120,297.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 41 | (unnamed) | ¥120,297.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 42 | (unnamed) | ¥120,827.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 43 | (unnamed) | ¥121,396.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 44 | (unnamed) | ¥121,396.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 45 | (unnamed) | ¥121,396.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 46 | (unnamed) | ¥123,302.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 47 | (unnamed) | ¥123,999.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 48 | (unnamed) | ¥123,999.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 49 | (unnamed) | ¥124,047.31 | `3gAWonJzkY-kc3JpZNn9…` | - | RFN | 2026/6/7 |
  | 50 | (unnamed) | ¥124,047.31 | `3gAWonJzkY-kc3JpZNn_…` | - | RFN | 2026/6/7 |
  | 51 | (unnamed) | ¥129,038.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 52 | (unnamed) | ¥130,335.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 53 | (unnamed) | ¥130,335.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 54 | (unnamed) | ¥130,335.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 55 | (unnamed) | ¥130,335.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 56 | (unnamed) | ¥131,058.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 57 | (unnamed) | ¥131,058.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 58 | (unnamed) | ¥131,058.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 59 | (unnamed) | ¥131,058.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 60 | (unnamed) | ¥131,457.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 61 | (unnamed) | ¥131,688.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 62 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 63 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 64 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 65 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 66 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 67 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 68 | (unnamed) | ¥133,696.25 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 69 | (unnamed) | ¥133,779.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 70 | (unnamed) | ¥133,779.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 71 | (unnamed) | ¥133,779.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 72 | (unnamed) | ¥133,779.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 73 | (unnamed) | ¥133,779.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 74 | (unnamed) | ¥134,140.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 75 | (unnamed) | ¥135,395.07 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 76 | (unnamed) | ¥136,135.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 77 | (unnamed) | ¥136,135.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 78 | (unnamed) | ¥136,135.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 79 | (unnamed) | ¥136,135.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥136,398.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 81 | (unnamed) | ¥136,398.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 82 | (unnamed) | ¥136,398.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 83 | (unnamed) | ¥136,398.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 84 | (unnamed) | ¥138,805.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 85 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 86 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 87 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 88 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 89 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 90 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 91 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 92 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 93 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 94 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 95 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 96 | (unnamed) | ¥139,398.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 97 | (unnamed) | ¥140,424.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 98 | (unnamed) | ¥140,832.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 99 | (unnamed) | ¥141,389.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 100 | (unnamed) | ¥141,389.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 101 | (unnamed) | ¥141,672.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 102 | (unnamed) | ¥141,672.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 103 | (unnamed) | ¥141,728.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 104 | (unnamed) | ¥141,811.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 105 | (unnamed) | ¥142,186.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 106 | (unnamed) | ¥142,507.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 107 | (unnamed) | ¥142,507.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 108 | (unnamed) | ¥144,565.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 109 | (unnamed) | ¥144,781.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 110 | (unnamed) | ¥144,781.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 111 | (unnamed) | ¥146,588.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 112 | (unnamed) | ¥146,757.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 113 | (unnamed) | ¥146,757.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 114 | (unnamed) | ¥146,757.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 115 | (unnamed) | ¥147,424.61 | `3gAWonJzkY-kc3JpZNn4…` | - | NRFN | - |
  | 116 | (unnamed) | ¥147,424.61 | `3gAWonJzkY-kc3JpZNn4…` | - | NRFN | - |
  | 117 | (unnamed) | ¥147,424.61 | `3gAWonJzkY-kc3JpZNn4…` | - | NRFN | - |
  | 118 | (unnamed) | ¥147,424.61 | `3gAWonJzkY-kc3JpZNn6…` | - | NRFN | - |
  | 119 | (unnamed) | ¥148,796.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 120 | (unnamed) | ¥148,796.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 121 | (unnamed) | ¥150,433.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 122 | (unnamed) | ¥152,489.31 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 123 | (unnamed) | ¥152,489.31 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 124 | (unnamed) | ¥152,489.31 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 125 | (unnamed) | ¥154,895.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 126 | (unnamed) | ¥157,696.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 127 | (unnamed) | ¥158,143.76 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 128 | (unnamed) | ¥158,143.76 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 129 | (unnamed) | ¥158,544.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 130 | (unnamed) | ¥158,797.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 131 | (unnamed) | ¥158,943.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 132 | (unnamed) | ¥158,943.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 133 | (unnamed) | ¥158,943.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 134 | (unnamed) | ¥158,943.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 135 | (unnamed) | ¥161,206.78 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 136 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 137 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 138 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 139 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 140 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 141 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 142 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 143 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 144 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 145 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 146 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 147 | (unnamed) | ¥164,890.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 148 | (unnamed) | ¥167,245.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 149 | (unnamed) | ¥167,578.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 150 | (unnamed) | ¥167,746.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 151 | (unnamed) | ¥168,569.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 152 | (unnamed) | ¥169,744.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 153 | (unnamed) | ¥169,744.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 154 | (unnamed) | ¥169,744.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 155 | (unnamed) | ¥169,744.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 156 | (unnamed) | ¥171,002.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 157 | (unnamed) | ¥171,002.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 158 | (unnamed) | ¥171,257.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 159 | (unnamed) | ¥171,257.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 160 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 161 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 162 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 163 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 164 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 165 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 166 | (unnamed) | ¥172,681.43 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 167 | (unnamed) | ¥174,239.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 168 | (unnamed) | ¥175,979.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 169 | (unnamed) | ¥175,979.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 170 | (unnamed) | ¥175,979.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 171 | (unnamed) | ¥175,979.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 172 | (unnamed) | ¥175,979.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 173 | (unnamed) | ¥176,007.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 174 | (unnamed) | ¥176,007.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 175 | (unnamed) | ¥178,626.44 | `3gAWonJzkY-kc3JpZNn6…` | - | NRFN | - |
  | 176 | (unnamed) | ¥179,360.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 177 | (unnamed) | ¥179,360.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 178 | (unnamed) | ¥179,360.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 179 | (unnamed) | ¥179,360.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 180 | (unnamed) | ¥179,544.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 181 | (unnamed) | ¥179,544.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 182 | (unnamed) | ¥179,544.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 183 | (unnamed) | ¥179,544.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 184 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 185 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 186 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 187 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 188 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 189 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 190 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 191 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 192 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 193 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 194 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 195 | (unnamed) | ¥180,048.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 196 | (unnamed) | ¥181,355.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 197 | (unnamed) | ¥186,722.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 198 | (unnamed) | ¥186,722.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 199 | (unnamed) | ¥186,999.56 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 200 | (unnamed) | ¥186,999.56 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |

### Matsubaya Ryokan — Historic Kyoto Inn with Private Reservable Bath, Near Kyoto Station
- **liteapi_id:** `lp6a5c0`
- **city / area:** Kyoto / Central Kyoto / Shimogyo-ku
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, English-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥24,626.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥24,626.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥24,690.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥24,690.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥24,812.78 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 6 | (unnamed) | ¥24,812.78 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 7 | (unnamed) | ¥25,914.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 8 | (unnamed) | ¥25,914.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 9 | (unnamed) | ¥26,287.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥26,287.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥26,340.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 12 | (unnamed) | ¥26,340.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 13 | (unnamed) | ¥26,365.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 14 | (unnamed) | ¥26,413.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥26,413.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥26,469.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥26,469.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥26,495.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 19 | (unnamed) | ¥26,495.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 20 | (unnamed) | ¥26,599.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 21 | (unnamed) | ¥26,599.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 22 | (unnamed) | ¥26,694.66 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥26,757.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥26,891.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 25 | (unnamed) | ¥27,307.42 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥27,358.25 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 27 | (unnamed) | ¥27,495.69 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 28 | (unnamed) | ¥27,755.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 29 | (unnamed) | ¥27,780.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 30 | (unnamed) | ¥27,804.47 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 31 | (unnamed) | ¥27,943.8 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 32 | (unnamed) | ¥27,977.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥27,977.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥27,977.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥28,026.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 36 | (unnamed) | ¥28,026.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥28,026.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥28,165.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 39 | (unnamed) | ¥28,165.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 40 | (unnamed) | ¥28,165.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 41 | (unnamed) | ¥28,256.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 42 | (unnamed) | ¥28,256.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 43 | (unnamed) | ¥28,424.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 44 | (unnamed) | ¥28,424.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 45 | (unnamed) | ¥28,524.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥28,524.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 47 | (unnamed) | ¥28,555.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 48 | (unnamed) | ¥28,555.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 49 | (unnamed) | ¥28,697 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 50 | (unnamed) | ¥28,697 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 51 | (unnamed) | ¥28,751.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 52 | (unnamed) | ¥28,751.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 53 | (unnamed) | ¥28,751.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 54 | (unnamed) | ¥28,751.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 55 | (unnamed) | ¥28,751.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 56 | (unnamed) | ¥28,751.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 57 | (unnamed) | ¥28,850.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 58 | (unnamed) | ¥28,850.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 59 | (unnamed) | ¥28,869.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 60 | (unnamed) | ¥28,869.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 61 | (unnamed) | ¥29,035.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 62 | (unnamed) | ¥29,035.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 63 | (unnamed) | ¥29,147.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 64 | (unnamed) | ¥29,147.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 65 | (unnamed) | ¥29,175.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 66 | (unnamed) | ¥29,175.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 67 | (unnamed) | ¥29,183.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 68 | (unnamed) | ¥29,317.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 69 | (unnamed) | ¥29,317.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 70 | (unnamed) | ¥29,415.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 71 | (unnamed) | ¥29,415.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 72 | (unnamed) | ¥29,472.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 73 | (unnamed) | ¥29,472.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 74 | (unnamed) | ¥29,478.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 75 | (unnamed) | ¥29,478.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 76 | (unnamed) | ¥29,645.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 77 | (unnamed) | ¥29,645.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 78 | (unnamed) | ¥29,766.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 79 | (unnamed) | ¥29,766.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥29,768.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 81 | (unnamed) | ¥29,768.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 82 | (unnamed) | ¥29,794.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 83 | (unnamed) | ¥29,794.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 84 | (unnamed) | ¥29,805.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 85 | (unnamed) | ¥29,805.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 86 | (unnamed) | ¥29,838.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 87 | (unnamed) | ¥29,838.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 88 | (unnamed) | ¥29,876.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 89 | (unnamed) | ¥29,876.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 90 | (unnamed) | ¥29,896.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 91 | (unnamed) | ¥29,896.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 92 | (unnamed) | ¥29,927.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 93 | (unnamed) | ¥29,938.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 94 | (unnamed) | ¥29,938.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 95 | (unnamed) | ¥29,952.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 96 | (unnamed) | ¥29,952.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 97 | (unnamed) | ¥30,044.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 98 | (unnamed) | ¥30,044.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 99 | (unnamed) | ¥30,074.79 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 100 | (unnamed) | ¥30,074.79 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 101 | (unnamed) | ¥30,086.14 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 102 | (unnamed) | ¥30,097.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 103 | (unnamed) | ¥30,097.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 104 | (unnamed) | ¥30,131.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 105 | (unnamed) | ¥30,171.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 106 | (unnamed) | ¥30,171.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 107 | (unnamed) | ¥30,199.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 108 | (unnamed) | ¥30,199.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 109 | (unnamed) | ¥30,282.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 110 | (unnamed) | ¥30,328.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 111 | (unnamed) | ¥30,339.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 112 | (unnamed) | ¥30,339.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 113 | (unnamed) | ¥30,370.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 114 | (unnamed) | ¥30,502.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 115 | (unnamed) | ¥30,502.51 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 116 | (unnamed) | ¥30,523.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 117 | (unnamed) | ¥30,660.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 118 | (unnamed) | ¥30,694.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 119 | (unnamed) | ¥30,824.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 120 | (unnamed) | ¥30,824.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 121 | (unnamed) | ¥30,824.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 122 | (unnamed) | ¥30,848.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 123 | (unnamed) | ¥30,886.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 124 | (unnamed) | ¥30,886.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 125 | (unnamed) | ¥30,977.54 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 126 | (unnamed) | ¥30,977.54 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 127 | (unnamed) | ¥31,007.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 128 | (unnamed) | ¥31,007.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 129 | (unnamed) | ¥31,057.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 130 | (unnamed) | ¥31,057.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 131 | (unnamed) | ¥31,106.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 132 | (unnamed) | ¥31,140.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 133 | (unnamed) | ¥31,147.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 134 | (unnamed) | ¥31,147.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 135 | (unnamed) | ¥31,283.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 136 | (unnamed) | ¥31,289.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 137 | (unnamed) | ¥31,289.82 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 138 | (unnamed) | ¥31,296.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 139 | (unnamed) | ¥31,330.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 140 | (unnamed) | ¥31,360.99 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 141 | (unnamed) | ¥31,382.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 142 | (unnamed) | ¥31,382.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 143 | (unnamed) | ¥31,412.84 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 144 | (unnamed) | ¥31,412.84 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 145 | (unnamed) | ¥31,458.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 146 | (unnamed) | ¥31,458.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 147 | (unnamed) | ¥31,475.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 148 | (unnamed) | ¥31,475.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 149 | (unnamed) | ¥31,475.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 150 | (unnamed) | ¥31,475.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 151 | (unnamed) | ¥31,519.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 152 | (unnamed) | ¥31,535.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 153 | (unnamed) | ¥31,535.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 154 | (unnamed) | ¥31,552.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 155 | (unnamed) | ¥31,552.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 156 | (unnamed) | ¥31,598.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 157 | (unnamed) | ¥31,598.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 158 | (unnamed) | ¥31,598.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 159 | (unnamed) | ¥31,598.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 160 | (unnamed) | ¥31,628.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 161 | (unnamed) | ¥31,628.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 162 | (unnamed) | ¥31,628.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 163 | (unnamed) | ¥31,628.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 164 | (unnamed) | ¥31,645.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 165 | (unnamed) | ¥31,645.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 166 | (unnamed) | ¥31,645.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 167 | (unnamed) | ¥31,645.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 168 | (unnamed) | ¥31,768.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 169 | (unnamed) | ¥31,768.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 170 | (unnamed) | ¥31,768.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 171 | (unnamed) | ¥31,768.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 172 | (unnamed) | ¥31,944.64 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 173 | (unnamed) | ¥31,944.64 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 174 | (unnamed) | ¥32,090.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 175 | (unnamed) | ¥32,090.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 176 | (unnamed) | ¥32,133.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 177 | (unnamed) | ¥32,133.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 178 | (unnamed) | ¥32,133.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 179 | (unnamed) | ¥32,133.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 180 | (unnamed) | ¥32,192.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 181 | (unnamed) | ¥32,192.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 182 | (unnamed) | ¥32,192.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 183 | (unnamed) | ¥32,192.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 184 | (unnamed) | ¥32,258.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 185 | (unnamed) | ¥32,258.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 186 | (unnamed) | ¥32,361.01 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 187 | (unnamed) | ¥32,361.01 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 188 | (unnamed) | ¥32,637.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 189 | (unnamed) | ¥32,637.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 190 | (unnamed) | ¥32,637.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 191 | (unnamed) | ¥32,637.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 192 | (unnamed) | ¥32,637.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 193 | (unnamed) | ¥32,637.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 194 | (unnamed) | ¥32,686.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 195 | (unnamed) | ¥32,731.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 196 | (unnamed) | ¥32,731.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 197 | (unnamed) | ¥33,104.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 198 | (unnamed) | ¥33,104.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 199 | (unnamed) | ¥33,214.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 200 | (unnamed) | ¥33,214.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |

### Kamishichiken Oku — Adults-Only Luxury Ryokan with Private Open-Air Baths in Kyoto's Geisha District
- **liteapi_id:** `lpaea34`
- **city / area:** Kyoto / Kamigyo-ku / Kamishichiken
- **category_tags:** private-bath, tattoo-consideration, English-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥28,020.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 2 | (unnamed) | ¥28,315.42 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥28,397.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 4 | (unnamed) | ¥28,787.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥28,787.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥28,787.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥28,787.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥28,787.57 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥28,800.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 10 | (unnamed) | ¥28,857.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥28,857.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥28,987.18 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥29,283.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥30,728.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥30,934.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 16 | (unnamed) | ¥31,258.47 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥31,289.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥31,289.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥31,289.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 20 | (unnamed) | ¥31,289.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 21 | (unnamed) | ¥31,289.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥31,349.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 23 | (unnamed) | ¥31,488.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥31,488.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥31,506.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥31,804.61 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 27 | (unnamed) | ¥31,985.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 28 | (unnamed) | ¥31,985.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 29 | (unnamed) | ¥31,985.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 30 | (unnamed) | ¥31,985.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 31 | (unnamed) | ¥31,985.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 32 | (unnamed) | ¥32,060.78 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 33 | (unnamed) | ¥32,208.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥32,269.94 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥32,269.94 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 36 | (unnamed) | ¥32,539.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥32,557.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥33,401.04 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 39 | (unnamed) | ¥34,137.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥34,137.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 41 | (unnamed) | ¥34,145.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 42 | (unnamed) | ¥34,765.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 43 | (unnamed) | ¥34,765.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 44 | (unnamed) | ¥34,765.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 45 | (unnamed) | ¥34,765.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥34,765.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 47 | (unnamed) | ¥34,823.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 48 | (unnamed) | ¥35,006.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 49 | (unnamed) | ¥35,044.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 50 | (unnamed) | ¥35,044.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 51 | (unnamed) | ¥35,044.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 52 | (unnamed) | ¥35,044.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 53 | (unnamed) | ¥35,044.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 54 | (unnamed) | ¥35,122.97 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 55 | (unnamed) | ¥35,122.97 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 56 | (unnamed) | ¥35,287.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 57 | (unnamed) | ¥35,366.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 58 | (unnamed) | ¥35,389.17 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 59 | (unnamed) | ¥35,643.82 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 60 | (unnamed) | ¥35,643.82 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 61 | (unnamed) | ¥35,649.77 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 62 | (unnamed) | ¥36,221.26 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 63 | (unnamed) | ¥37,112.48 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 64 | (unnamed) | ¥37,928.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 65 | (unnamed) | ¥38,592.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 66 | (unnamed) | ¥38,847.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 67 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 68 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 69 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 70 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 71 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 72 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 73 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 74 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 75 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 76 | (unnamed) | ¥38,937.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 77 | (unnamed) | ¥39,022.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 78 | (unnamed) | ¥39,022.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 79 | (unnamed) | ¥39,169.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 80 | (unnamed) | ¥39,209.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 81 | (unnamed) | ¥39,430.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 82 | (unnamed) | ¥39,612.93 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 83 | (unnamed) | ¥39,637.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 84 | (unnamed) | ¥40,586.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 85 | (unnamed) | ¥40,781.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 86 | (unnamed) | ¥40,781.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 87 | (unnamed) | ¥40,781.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 88 | (unnamed) | ¥40,781.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 89 | (unnamed) | ¥40,781.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 90 | (unnamed) | ¥41,092.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 91 | (unnamed) | ¥41,198.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 92 | (unnamed) | ¥41,211.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 93 | (unnamed) | ¥41,489.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 94 | (unnamed) | ¥41,550.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 95 | (unnamed) | ¥41,550.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 96 | (unnamed) | ¥41,564.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 97 | (unnamed) | ¥41,564.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 98 | (unnamed) | ¥41,748.07 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 99 | (unnamed) | ¥42,645.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 100 | (unnamed) | ¥42,645.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 101 | (unnamed) | ¥42,645.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 102 | (unnamed) | ¥42,645.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 103 | (unnamed) | ¥42,645.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 104 | (unnamed) | ¥42,827.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 105 | (unnamed) | ¥42,942.61 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 106 | (unnamed) | ¥43,302 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 107 | (unnamed) | ¥43,384.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 108 | (unnamed) | ¥43,535.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 109 | (unnamed) | ¥43,615.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 110 | (unnamed) | ¥44,158.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 111 | (unnamed) | ¥44,287.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 112 | (unnamed) | ¥44,326.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 113 | (unnamed) | ¥44,326.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 114 | (unnamed) | ¥44,326.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 115 | (unnamed) | ¥44,326.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 116 | (unnamed) | ¥44,326.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 117 | (unnamed) | ¥44,636.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 118 | (unnamed) | ¥45,590.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 119 | (unnamed) | ¥45,717.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 120 | (unnamed) | ¥45,717.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 121 | (unnamed) | ¥46,166.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 122 | (unnamed) | ¥46,166.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 123 | (unnamed) | ¥46,226.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 124 | (unnamed) | ¥46,226.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 125 | (unnamed) | ¥46,353.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 126 | (unnamed) | ¥46,353.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 127 | (unnamed) | ¥46,353.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 128 | (unnamed) | ¥46,353.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 129 | (unnamed) | ¥46,353.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 130 | (unnamed) | ¥46,657.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 131 | (unnamed) | ¥46,675.79 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 132 | (unnamed) | ¥47,033.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 133 | (unnamed) | ¥47,155.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 134 | (unnamed) | ¥47,389.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 135 | (unnamed) | ¥47,999.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 136 | (unnamed) | ¥48,363.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 137 | (unnamed) | ¥48,502.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 138 | (unnamed) | ¥48,770.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 139 | (unnamed) | ¥49,554.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 140 | (unnamed) | ¥49,644.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 141 | (unnamed) | ¥49,644.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 142 | (unnamed) | ¥49,644.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 143 | (unnamed) | ¥49,644.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 144 | (unnamed) | ¥49,644.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 145 | (unnamed) | ¥49,729.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 146 | (unnamed) | ¥49,990.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 147 | (unnamed) | ¥50,504.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 148 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 149 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 150 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 151 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 152 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 153 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 154 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 155 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 156 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 157 | (unnamed) | ¥51,916.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 158 | (unnamed) | ¥52,816.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 159 | (unnamed) | ¥55,069.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 160 | (unnamed) | ¥55,069.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 161 | (unnamed) | ¥55,069.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 162 | (unnamed) | ¥55,069.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 163 | (unnamed) | ¥55,069.13 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 164 | (unnamed) | ¥55,171.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 165 | (unnamed) | ¥55,348.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 166 | (unnamed) | ¥55,372.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 167 | (unnamed) | ¥55,372.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 168 | (unnamed) | ¥55,372.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 169 | (unnamed) | ¥55,372.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 170 | (unnamed) | ¥55,372.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 171 | (unnamed) | ¥56,077.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 172 | (unnamed) | ¥56,331.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 173 | (unnamed) | ¥59,205.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 174 | (unnamed) | ¥59,545.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 175 | (unnamed) | ¥59,545.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 176 | (unnamed) | ¥59,545.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 177 | (unnamed) | ¥59,545.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 178 | (unnamed) | ¥59,545.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 179 | (unnamed) | ¥59,960.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 180 | (unnamed) | ¥61,299.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 181 | (unnamed) | ¥61,523.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 182 | (unnamed) | ¥61,523.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 183 | (unnamed) | ¥61,523.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 184 | (unnamed) | ¥61,523.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 185 | (unnamed) | ¥61,523.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 186 | (unnamed) | ¥62,075.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 187 | (unnamed) | ¥62,075.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 188 | (unnamed) | ¥62,448.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 189 | (unnamed) | ¥62,589.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 190 | (unnamed) | ¥62,628.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 191 | (unnamed) | ¥63,546.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 192 | (unnamed) | ¥65,268.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 193 | (unnamed) | ¥65,659.4 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 194 | (unnamed) | ¥65,763.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 195 | (unnamed) | ¥65,802.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 196 | (unnamed) | ¥65,802.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 197 | (unnamed) | ¥65,802.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 198 | (unnamed) | ¥65,802.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 199 | (unnamed) | ¥65,802.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 200 | (unnamed) | ¥66,158.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |

### Riverside Arashiyama — Pet-Friendly Arashiyama Apartments with No Dog Size Limit, Deep Soaking Baths, and Bamboo Grove Walks
- **liteapi_id:** `lpc8f6d`
- **city / area:** Kyoto / Arashiyama / Nishikyo-ku
- **category_tags:** pet-friendly, private-bath, self-catering, luggage-friendly, family-friendly
- **判定理由:** 148 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥13,035.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥13,057.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥13,064.66 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥13,190.66 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥13,205.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥13,261.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥13,261.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥13,525.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥13,603.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥13,632.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥13,710.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥13,765.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥13,808.6 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥13,849.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 15 | (unnamed) | ¥13,890.92 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/12 |
  | 16 | (unnamed) | ¥13,982.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 17 | (unnamed) | ¥14,220.2 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 18 | (unnamed) | ¥14,486.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥14,508.66 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 20 | (unnamed) | ¥15,086.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 21 | (unnamed) | ¥15,166.31 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 22 | (unnamed) | ¥15,338.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥15,353.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥15,383.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 25 | (unnamed) | ¥15,383.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 26 | (unnamed) | ¥15,489.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 27 | (unnamed) | ¥15,521.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 28 | (unnamed) | ¥16,082.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 29 | (unnamed) | ¥16,115.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 30 | (unnamed) | ¥16,118.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 31 | (unnamed) | ¥16,119.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 32 | (unnamed) | ¥16,396.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 33 | (unnamed) | ¥16,556.27 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥16,627.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥16,723.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 36 | (unnamed) | ¥16,907.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥16,951.46 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥16,984.8 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 39 | (unnamed) | ¥17,435.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 40 | (unnamed) | ¥17,455.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 41 | (unnamed) | ¥19,262.41 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/12 |
  | 42 | (unnamed) | ¥20,100.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 43 | (unnamed) | ¥20,101.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 44 | (unnamed) | ¥20,261.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 45 | (unnamed) | ¥20,387.25 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥20,428.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 47 | (unnamed) | ¥20,443.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 48 | (unnamed) | ¥20,448.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 49 | (unnamed) | ¥20,538.04 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 50 | (unnamed) | ¥20,559.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 51 | (unnamed) | ¥20,662.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 52 | (unnamed) | ¥20,724.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 53 | (unnamed) | ¥20,752.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 54 | (unnamed) | ¥20,856.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 55 | (unnamed) | ¥20,907.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 56 | (unnamed) | ¥20,962.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 57 | (unnamed) | ¥21,182.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 58 | (unnamed) | ¥21,213.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 59 | (unnamed) | ¥21,269.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 60 | (unnamed) | ¥21,381.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 61 | (unnamed) | ¥21,478.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 62 | (unnamed) | ¥21,597.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 63 | (unnamed) | ¥21,654.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 64 | (unnamed) | ¥21,679.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 65 | (unnamed) | ¥22,299.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 66 | (unnamed) | ¥22,341.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 67 | (unnamed) | ¥22,838.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 68 | (unnamed) | ¥22,917.04 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 69 | (unnamed) | ¥22,961.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 70 | (unnamed) | ¥22,982.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 71 | (unnamed) | ¥23,476.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 72 | (unnamed) | ¥23,505.73 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 73 | (unnamed) | ¥23,552.04 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 74 | (unnamed) | ¥24,774.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 75 | (unnamed) | ¥25,539.7 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/12 |
  | 76 | (unnamed) | ¥26,227.44 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/12 |
  | 77 | (unnamed) | ¥27,370.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 78 | (unnamed) | ¥27,588.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 79 | (unnamed) | ¥28,205.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥28,259.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 81 | (unnamed) | ¥28,397.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 82 | (unnamed) | ¥28,465.65 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 83 | (unnamed) | ¥28,465.65 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 84 | (unnamed) | ¥28,479.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 85 | (unnamed) | ¥29,063.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 86 | (unnamed) | ¥29,063.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 87 | (unnamed) | ¥29,246.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 88 | (unnamed) | ¥29,472.31 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 89 | (unnamed) | ¥29,506.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 90 | (unnamed) | ¥29,506.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 91 | (unnamed) | ¥29,506.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 92 | (unnamed) | ¥29,532.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 93 | (unnamed) | ¥29,532.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 94 | (unnamed) | ¥29,674.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 95 | (unnamed) | ¥29,674.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 96 | (unnamed) | ¥29,820.86 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/12 |
  | 97 | (unnamed) | ¥29,939.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 98 | (unnamed) | ¥30,006.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 99 | (unnamed) | ¥30,006.66 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 100 | (unnamed) | ¥30,484.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/8 |
  | 101 | (unnamed) | ¥31,122.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 102 | (unnamed) | ¥31,221.01 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 103 | (unnamed) | ¥31,498.29 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/7 |
  | 104 | (unnamed) | ¥32,650.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 105 | (unnamed) | ¥32,650.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 106 | (unnamed) | ¥32,783.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 107 | (unnamed) | ¥32,816.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 108 | (unnamed) | ¥32,868.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 109 | (unnamed) | ¥33,011.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 110 | (unnamed) | ¥33,254.01 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 111 | (unnamed) | ¥33,304.42 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 112 | (unnamed) | ¥33,304.42 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 113 | (unnamed) | ¥33,397.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 114 | (unnamed) | ¥33,460.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 115 | (unnamed) | ¥33,508.9 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 116 | (unnamed) | ¥33,549.2 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 117 | (unnamed) | ¥33,812.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 118 | (unnamed) | ¥33,847.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 119 | (unnamed) | ¥33,847.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 120 | (unnamed) | ¥33,847.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 121 | (unnamed) | ¥33,847.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 122 | (unnamed) | ¥34,015.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 123 | (unnamed) | ¥34,015.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 124 | (unnamed) | ¥34,391.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 125 | (unnamed) | ¥34,391.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 126 | (unnamed) | ¥34,901.56 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 127 | (unnamed) | ¥35,121.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 128 | (unnamed) | ¥35,392.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 129 | (unnamed) | ¥35,434.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 130 | (unnamed) | ¥35,519.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 131 | (unnamed) | ¥36,921.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 132 | (unnamed) | ¥37,309.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 133 | (unnamed) | ¥38,838.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 134 | (unnamed) | ¥38,878.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 135 | (unnamed) | ¥39,249.84 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/7 |
  | 136 | (unnamed) | ¥40,059.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 137 | (unnamed) | ¥40,961.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 138 | (unnamed) | ¥43,247.7 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/12 |
  | 139 | (unnamed) | ¥43,769.69 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 140 | (unnamed) | ¥44,105.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 141 | (unnamed) | ¥44,157.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 142 | (unnamed) | ¥45,131.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 143 | (unnamed) | ¥46,010.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 144 | (unnamed) | ¥48,226.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 145 | (unnamed) | ¥48,668.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 146 | (unnamed) | ¥48,724.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 147 | (unnamed) | ¥49,372.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 148 | (unnamed) | ¥49,423.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |

### MIMARU SUITES Kyoto Central — Premium 85m² Two-Bedroom Suites with Full Kitchen, Near Karasuma Oike
- **liteapi_id:** `lp656c3d76`
- **city / area:** Kyoto / Central Kyoto
- **category_tags:** self-catering, food-friendly, luggage-friendly, English-friendly, family-friendly, access-friendly
- **判定理由:** 37 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥136,494.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 2 | (unnamed) | ¥137,750.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 3 | (unnamed) | ¥138,714.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 4 | (unnamed) | ¥141,778.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥141,923.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥145,653.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥145,653.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥147,105.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥147,105.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥147,510.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥147,510.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥147,558.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 13 | (unnamed) | ¥147,558.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 14 | (unnamed) | ¥149,406.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥149,406.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥149,864.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 17 | (unnamed) | ¥149,864.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 18 | (unnamed) | ¥153,742.12 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 19 | (unnamed) | ¥153,899.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 20 | (unnamed) | ¥156,618.15 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 21 | (unnamed) | ¥156,921.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 22 | (unnamed) | ¥171,732.76 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 23 | (unnamed) | ¥172,385.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 24 | (unnamed) | ¥181,415.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 25 | (unnamed) | ¥181,415.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 26 | (unnamed) | ¥181,415.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 27 | (unnamed) | ¥181,415.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 28 | (unnamed) | ¥181,415.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 29 | (unnamed) | ¥181,415.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 30 | (unnamed) | ¥182,969.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 31 | (unnamed) | ¥184,980.12 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 32 | (unnamed) | ¥185,723.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 33 | (unnamed) | ¥188,359.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 34 | (unnamed) | ¥188,359.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 35 | (unnamed) | ¥195,706.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 36 | (unnamed) | ¥195,706.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 37 | (unnamed) | ¥195,706.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |

### Ryokan Shimizu — Family Ryokan Near Kyoto Station with Private Reserved Baths
- **liteapi_id:** `lpae62c`
- **city / area:** Kyoto / Kyoto Station / Shimogyo-ku
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, English-friendly
- **判定理由:** 3 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥15,919.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 2 | (unnamed) | ¥17,908.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 3 | (unnamed) | ¥19,898.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |

### MIMARU Osaka Shinsaibashi West — Apartment Hotel with Full Kitchen Near Shinsaibashi
- **liteapi_id:** `lp65557649`
- **city / area:** Osaka / Shinsaibashi / Nishi Ward
- **category_tags:** self-catering, food-friendly, luggage-friendly, English-friendly, family-friendly, access-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥40,631.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥40,865.76 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 3 | (unnamed) | ¥42,074.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥42,229.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 5 | (unnamed) | ¥42,443.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 6 | (unnamed) | ¥42,551.84 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥42,770.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥43,181.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥43,181.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥43,181.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥43,181.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥43,181.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥43,360.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 14 | (unnamed) | ¥43,360.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 15 | (unnamed) | ¥43,455.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥43,540.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥43,767.17 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥43,773.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥43,816.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 20 | (unnamed) | ¥44,032.15 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 21 | (unnamed) | ¥44,089.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥44,438.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥44,438.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥44,451.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥44,641.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥44,657.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 27 | (unnamed) | ¥44,657.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 28 | (unnamed) | ¥44,836.73 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 29 | (unnamed) | ¥44,954.94 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 30 | (unnamed) | ¥45,065.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 31 | (unnamed) | ¥45,065.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 32 | (unnamed) | ¥45,333.35 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥45,338.93 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥45,649.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 35 | (unnamed) | ¥46,012.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 36 | (unnamed) | ¥46,060.04 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥46,224.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥46,405.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 39 | (unnamed) | ¥46,405.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 40 | (unnamed) | ¥46,405.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 41 | (unnamed) | ¥46,405.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 42 | (unnamed) | ¥46,405.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 43 | (unnamed) | ¥46,437.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 44 | (unnamed) | ¥46,672.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 45 | (unnamed) | ¥47,038.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 46 | (unnamed) | ¥47,085.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 47 | (unnamed) | ¥47,236.52 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 48 | (unnamed) | ¥47,317.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 49 | (unnamed) | ¥47,458.04 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 50 | (unnamed) | ¥47,501.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 51 | (unnamed) | ¥47,501.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 52 | (unnamed) | ¥47,501.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 53 | (unnamed) | ¥47,501.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 54 | (unnamed) | ¥47,501.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 55 | (unnamed) | ¥47,652.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 56 | (unnamed) | ¥47,697.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 57 | (unnamed) | ¥47,697.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 58 | (unnamed) | ¥47,770.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 59 | (unnamed) | ¥47,797.99 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 60 | (unnamed) | ¥47,896.75 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 61 | (unnamed) | ¥47,901.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 62 | (unnamed) | ¥47,952.19 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 63 | (unnamed) | ¥48,147.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 64 | (unnamed) | ¥48,180.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 65 | (unnamed) | ¥48,194.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 66 | (unnamed) | ¥48,241.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 67 | (unnamed) | ¥48,430.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 68 | (unnamed) | ¥48,495.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 69 | (unnamed) | ¥48,496.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 70 | (unnamed) | ¥48,496.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 71 | (unnamed) | ¥48,496.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 72 | (unnamed) | ¥48,769.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 73 | (unnamed) | ¥48,787.86 | `3gAWonJzkY-kc3JpZNn_…` | - | NRFN | - |
  | 74 | (unnamed) | ¥48,787.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 75 | (unnamed) | ¥48,787.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 76 | (unnamed) | ¥48,787.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 77 | (unnamed) | ¥48,790.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 78 | (unnamed) | ¥48,863.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 79 | (unnamed) | ¥48,875.18 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥48,875.18 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 81 | (unnamed) | ¥48,898.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 82 | (unnamed) | ¥49,124.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 83 | (unnamed) | ¥49,124.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 84 | (unnamed) | ¥49,317.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 85 | (unnamed) | ¥49,374.69 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 86 | (unnamed) | ¥49,425.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 87 | (unnamed) | ¥49,607.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 88 | (unnamed) | ¥49,607.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 89 | (unnamed) | ¥49,625.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 90 | (unnamed) | ¥49,808.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 91 | (unnamed) | ¥49,907.08 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 92 | (unnamed) | ¥49,914.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 93 | (unnamed) | ¥49,914.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 94 | (unnamed) | ¥50,060.03 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 95 | (unnamed) | ¥50,251.46 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 96 | (unnamed) | ¥50,265.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 97 | (unnamed) | ¥50,355.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 98 | (unnamed) | ¥50,563.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 99 | (unnamed) | ¥50,582.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 100 | (unnamed) | ¥50,634.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 101 | (unnamed) | ¥51,046.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 102 | (unnamed) | ¥51,046.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 103 | (unnamed) | ¥51,046.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 104 | (unnamed) | ¥51,046.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 105 | (unnamed) | ¥51,046.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 106 | (unnamed) | ¥51,084.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 107 | (unnamed) | ¥51,670.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 108 | (unnamed) | ¥51,725.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 109 | (unnamed) | ¥51,725.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 110 | (unnamed) | ¥51,740.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 111 | (unnamed) | ¥51,792.79 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 112 | (unnamed) | ¥51,875.34 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 113 | (unnamed) | ¥51,927.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 114 | (unnamed) | ¥52,045.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 115 | (unnamed) | ¥52,072.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 116 | (unnamed) | ¥52,072.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 117 | (unnamed) | ¥52,072.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 118 | (unnamed) | ¥52,205.14 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 119 | (unnamed) | ¥52,547.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 120 | (unnamed) | ¥52,849.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 121 | (unnamed) | ¥52,997.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 122 | (unnamed) | ¥53,285.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 123 | (unnamed) | ¥53,285.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 124 | (unnamed) | ¥53,285.72 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 125 | (unnamed) | ¥53,532.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 126 | (unnamed) | ¥53,624.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 127 | (unnamed) | ¥53,662.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 128 | (unnamed) | ¥53,728.15 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 129 | (unnamed) | ¥53,771.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 130 | (unnamed) | ¥53,803.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 131 | (unnamed) | ¥54,281.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 132 | (unnamed) | ¥54,352.36 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 133 | (unnamed) | ¥54,403.93 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 134 | (unnamed) | ¥54,408.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 135 | (unnamed) | ¥54,589.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 136 | (unnamed) | ¥54,589.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 137 | (unnamed) | ¥54,589.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 138 | (unnamed) | ¥54,589.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 139 | (unnamed) | ¥54,589.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 140 | (unnamed) | ¥54,884.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 141 | (unnamed) | ¥54,884.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 142 | (unnamed) | ¥54,884.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 143 | (unnamed) | ¥54,884.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 144 | (unnamed) | ¥54,884.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 145 | (unnamed) | ¥55,387.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 146 | (unnamed) | ¥55,508.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 147 | (unnamed) | ¥55,621.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 148 | (unnamed) | ¥55,716.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 149 | (unnamed) | ¥55,914.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 150 | (unnamed) | ¥56,195.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 151 | (unnamed) | ¥56,414.34 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 152 | (unnamed) | ¥56,659.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 153 | (unnamed) | ¥56,753.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 154 | (unnamed) | ¥57,220.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 155 | (unnamed) | ¥57,220.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 156 | (unnamed) | ¥57,220.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 157 | (unnamed) | ¥57,513.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 158 | (unnamed) | ¥58,134.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 159 | (unnamed) | ¥58,330.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 160 | (unnamed) | ¥58,339.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 161 | (unnamed) | ¥58,339.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 162 | (unnamed) | ¥58,426.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 163 | (unnamed) | ¥58,983.81 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 164 | (unnamed) | ¥59,544.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 165 | (unnamed) | ¥59,844.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 166 | (unnamed) | ¥60,632.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 167 | (unnamed) | ¥61,288.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 168 | (unnamed) | ¥62,490.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 169 | (unnamed) | ¥62,611.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 170 | (unnamed) | ¥62,673.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 171 | (unnamed) | ¥62,732.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 172 | (unnamed) | ¥62,783.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 173 | (unnamed) | ¥73,558.75 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 174 | (unnamed) | ¥76,960.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 175 | (unnamed) | ¥77,727.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 176 | (unnamed) | ¥77,727.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 177 | (unnamed) | ¥77,727.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 178 | (unnamed) | ¥77,727.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 179 | (unnamed) | ¥77,727.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 180 | (unnamed) | ¥78,049.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 181 | (unnamed) | ¥78,049.39 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 182 | (unnamed) | ¥78,373.46 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 183 | (unnamed) | ¥78,386.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 184 | (unnamed) | ¥78,779.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 185 | (unnamed) | ¥78,788.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 186 | (unnamed) | ¥79,253.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 187 | (unnamed) | ¥79,368.8 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 188 | (unnamed) | ¥79,971.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 189 | (unnamed) | ¥79,971.32 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 190 | (unnamed) | ¥80,013.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 191 | (unnamed) | ¥80,383.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 192 | (unnamed) | ¥80,383.86 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/1 |
  | 193 | (unnamed) | ¥80,703.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 194 | (unnamed) | ¥80,966.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 195 | (unnamed) | ¥81,375.3 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 196 | (unnamed) | ¥82,641.73 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 197 | (unnamed) | ¥82,726.58 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 198 | (unnamed) | ¥83,526.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 199 | (unnamed) | ¥83,526.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 200 | (unnamed) | ¥83,526.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |

### Osaka Ryokan Kuramoto — Traditional Ryokan Near Dotonbori with Private Room Baths
- **liteapi_id:** `lp57c39`
- **city / area:** Osaka / Chuo-ku / Shimanouchi
- **category_tags:** private-bath, tattoo-friendly, luggage-friendly, English-friendly
- **判定理由:** 55 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥29,316.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 2 | (unnamed) | ¥29,466.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 3 | (unnamed) | ¥30,239.44 | `3gAWonJzkY-kc3JpZNn4…` | - | RFN | 2026/6/7 |
  | 4 | (unnamed) | ¥30,239.44 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/7 |
  | 5 | (unnamed) | ¥30,570.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 6 | (unnamed) | ¥30,570.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 7 | (unnamed) | ¥30,725.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥31,034.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 9 | (unnamed) | ¥31,303.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥31,385.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥31,385.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥31,553.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥31,621.07 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 14 | (unnamed) | ¥31,687.26 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥31,715.55 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥31,874.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥32,003.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥32,065.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 19 | (unnamed) | ¥32,432.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 20 | (unnamed) | ¥32,432.76 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 21 | (unnamed) | ¥32,614.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥32,709.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 23 | (unnamed) | ¥34,889.48 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥34,889.48 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥36,337.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥36,407.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 27 | (unnamed) | ¥36,826.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 28 | (unnamed) | ¥36,826.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 29 | (unnamed) | ¥37,031.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 30 | (unnamed) | ¥37,139.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 31 | (unnamed) | ¥38,824.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 32 | (unnamed) | ¥38,824.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 33 | (unnamed) | ¥38,824.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 34 | (unnamed) | ¥39,501.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 35 | (unnamed) | ¥39,503.89 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 36 | (unnamed) | ¥39,696.6 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 37 | (unnamed) | ¥39,789.04 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 38 | (unnamed) | ¥41,682.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 39 | (unnamed) | ¥41,899.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 40 | (unnamed) | ¥42,906.4 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 41 | (unnamed) | ¥42,906.4 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 42 | (unnamed) | ¥43,190.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 43 | (unnamed) | ¥43,190.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 44 | (unnamed) | ¥43,190.02 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 45 | (unnamed) | ¥43,856.47 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥43,943.53 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 47 | (unnamed) | ¥43,945.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 48 | (unnamed) | ¥44,159.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 49 | (unnamed) | ¥44,262.95 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/30 |
  | 50 | (unnamed) | ¥46,106.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 51 | (unnamed) | ¥46,106.73 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 52 | (unnamed) | ¥46,434.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 53 | (unnamed) | ¥46,677.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 54 | (unnamed) | ¥47,662.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 55 | (unnamed) | ¥47,662.42 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |

### TSUKI Tokyo — Boutique Hotel with Private Aomori Cypress Baths and Post-Bath Lounge in Tsukiji
- **liteapi_id:** `lp1c71be`
- **city / area:** Tokyo / Tsukiji / Chuo-ku
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, English-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥25,404.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥25,602.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥25,602.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥25,602.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥25,602.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥25,602.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥25,949.44 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥26,102.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥26,355.46 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥27,060.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥27,096.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥27,146.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥27,357.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥27,357.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥27,357.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥27,357.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥27,357.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥27,570.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 19 | (unnamed) | ¥27,570.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 20 | (unnamed) | ¥27,570.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 21 | (unnamed) | ¥27,570.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 22 | (unnamed) | ¥27,570.37 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 23 | (unnamed) | ¥27,729.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥27,892.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥28,162.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥28,381.26 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 27 | (unnamed) | ¥28,800.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 28 | (unnamed) | ¥28,805 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 29 | (unnamed) | ¥28,810.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 30 | (unnamed) | ¥28,810.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 31 | (unnamed) | ¥28,883.18 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 32 | (unnamed) | ¥28,916.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥28,916.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥28,916.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥28,939.03 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 36 | (unnamed) | ¥29,326.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 37 | (unnamed) | ¥29,356.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥29,375.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 39 | (unnamed) | ¥29,385.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥29,409.95 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 41 | (unnamed) | ¥29,462.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 42 | (unnamed) | ¥29,462.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 43 | (unnamed) | ¥29,462.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 44 | (unnamed) | ¥29,462.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 45 | (unnamed) | ¥29,462.34 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 46 | (unnamed) | ¥29,570.82 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 47 | (unnamed) | ¥29,602.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 48 | (unnamed) | ¥29,639.61 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 49 | (unnamed) | ¥29,680.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 50 | (unnamed) | ¥30,328.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 51 | (unnamed) | ¥30,425.69 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 52 | (unnamed) | ¥30,498.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 53 | (unnamed) | ¥30,558.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 54 | (unnamed) | ¥30,574.81 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 55 | (unnamed) | ¥30,733.79 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 56 | (unnamed) | ¥30,836.63 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/7 |
  | 57 | (unnamed) | ¥30,836.63 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 58 | (unnamed) | ¥30,901.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 59 | (unnamed) | ¥30,901.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 60 | (unnamed) | ¥30,901.06 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 61 | (unnamed) | ¥31,209.8 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 62 | (unnamed) | ¥31,256.61 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 63 | (unnamed) | ¥31,260.34 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 64 | (unnamed) | ¥31,260.34 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 65 | (unnamed) | ¥31,400.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 66 | (unnamed) | ¥31,451.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 67 | (unnamed) | ¥31,451.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 68 | (unnamed) | ¥31,451.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 69 | (unnamed) | ¥31,451.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 70 | (unnamed) | ¥31,451.96 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 71 | (unnamed) | ¥31,500.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 72 | (unnamed) | ¥31,504.2 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 73 | (unnamed) | ¥31,504.2 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 74 | (unnamed) | ¥31,632.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 75 | (unnamed) | ¥31,669.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 76 | (unnamed) | ¥31,713.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 77 | (unnamed) | ¥31,715.71 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 78 | (unnamed) | ¥31,847.48 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 79 | (unnamed) | ¥31,880.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥31,938.15 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 81 | (unnamed) | ¥32,070.1 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 82 | (unnamed) | ¥32,095 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 83 | (unnamed) | ¥32,287.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 84 | (unnamed) | ¥32,377.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 85 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 86 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 87 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 88 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 89 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 90 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 91 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 92 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 93 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 94 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 95 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 96 | (unnamed) | ¥32,575.86 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 97 | (unnamed) | ¥32,673.29 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 98 | (unnamed) | ¥32,772.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 99 | (unnamed) | ¥32,873.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 100 | (unnamed) | ¥32,953.9 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 101 | (unnamed) | ¥32,954.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 102 | (unnamed) | ¥32,954.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 103 | (unnamed) | ¥33,019.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 104 | (unnamed) | ¥33,019.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 105 | (unnamed) | ¥33,051.11 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 106 | (unnamed) | ¥33,100.44 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 107 | (unnamed) | ¥33,105.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/4 |
  | 108 | (unnamed) | ¥33,207.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 109 | (unnamed) | ¥33,207.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 110 | (unnamed) | ¥33,207.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 111 | (unnamed) | ¥33,207.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 112 | (unnamed) | ¥33,207.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 113 | (unnamed) | ¥33,214.93 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 114 | (unnamed) | ¥33,214.93 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 115 | (unnamed) | ¥33,274.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 116 | (unnamed) | ¥33,278.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 117 | (unnamed) | ¥33,363.84 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 118 | (unnamed) | ¥33,371.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 119 | (unnamed) | ¥33,480.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 120 | (unnamed) | ¥33,480.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 121 | (unnamed) | ¥33,480.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 122 | (unnamed) | ¥33,480.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 123 | (unnamed) | ¥33,480.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 124 | (unnamed) | ¥33,480.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 125 | (unnamed) | ¥33,481.37 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 126 | (unnamed) | ¥33,657.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 127 | (unnamed) | ¥33,661.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 128 | (unnamed) | ¥33,663.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 129 | (unnamed) | ¥33,663.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 130 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 131 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 132 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 133 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 134 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 135 | (unnamed) | ¥33,736.65 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 136 | (unnamed) | ¥33,773.78 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 137 | (unnamed) | ¥33,814.05 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 138 | (unnamed) | ¥33,860.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 139 | (unnamed) | ¥33,871.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 140 | (unnamed) | ¥33,871.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 141 | (unnamed) | ¥33,871.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 142 | (unnamed) | ¥33,871.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 143 | (unnamed) | ¥33,871.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 144 | (unnamed) | ¥33,886.82 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 145 | (unnamed) | ¥33,966.97 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 146 | (unnamed) | ¥34,048.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 147 | (unnamed) | ¥34,183.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 148 | (unnamed) | ¥34,290.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 149 | (unnamed) | ¥34,292.06 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 150 | (unnamed) | ¥34,465.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 151 | (unnamed) | ¥34,581.02 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 152 | (unnamed) | ¥34,760.75 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 153 | (unnamed) | ¥34,804.87 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 154 | (unnamed) | ¥34,838.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 155 | (unnamed) | ¥34,838.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 156 | (unnamed) | ¥34,867.38 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 157 | (unnamed) | ¥34,880.8 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 158 | (unnamed) | ¥34,880.8 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 159 | (unnamed) | ¥35,018.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 160 | (unnamed) | ¥35,366.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 161 | (unnamed) | ¥35,366.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 162 | (unnamed) | ¥35,366.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 163 | (unnamed) | ¥35,366.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 164 | (unnamed) | ¥35,366.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 165 | (unnamed) | ¥35,366.09 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 166 | (unnamed) | ¥35,387.79 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 167 | (unnamed) | ¥35,482.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 168 | (unnamed) | ¥35,482.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 169 | (unnamed) | ¥35,482.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 170 | (unnamed) | ¥35,552.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 171 | (unnamed) | ¥35,554.83 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 172 | (unnamed) | ¥35,573.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 173 | (unnamed) | ¥35,619.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 174 | (unnamed) | ¥35,619.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 175 | (unnamed) | ¥35,619.99 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 176 | (unnamed) | ¥35,651.63 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 177 | (unnamed) | ¥35,657.76 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 178 | (unnamed) | ¥35,659.08 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 179 | (unnamed) | ¥35,701.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 180 | (unnamed) | ¥35,763.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 181 | (unnamed) | ¥35,763.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 182 | (unnamed) | ¥35,763.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 183 | (unnamed) | ¥35,763.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 184 | (unnamed) | ¥35,763.15 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 185 | (unnamed) | ¥35,776.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 186 | (unnamed) | ¥35,776.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 187 | (unnamed) | ¥35,776.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 188 | (unnamed) | ¥35,776.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 189 | (unnamed) | ¥35,776.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 190 | (unnamed) | ¥35,776.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 191 | (unnamed) | ¥35,778.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 192 | (unnamed) | ¥35,848.96 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 193 | (unnamed) | ¥35,943.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 194 | (unnamed) | ¥36,029.52 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/5 |
  | 195 | (unnamed) | ¥36,061.17 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 196 | (unnamed) | ¥36,101.28 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 197 | (unnamed) | ¥36,132 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/11 |
  | 198 | (unnamed) | ¥36,295.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 199 | (unnamed) | ¥36,370.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 200 | (unnamed) | ¥36,383.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |

### Dormy Inn Premium Ginza — Natural Hot Spring Hotel with Private Baths and Tattoo Sticker Option
- **liteapi_id:** `lp6579fa5c`
- **city / area:** Tokyo / Ginza / Chuo-ku
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, English-friendly, family-friendly
- **判定理由:** 37 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥26,156.62 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 2 | (unnamed) | ¥28,631.04 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 3 | (unnamed) | ¥28,661.75 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 4 | (unnamed) | ¥30,298.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 5 | (unnamed) | ¥30,332.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 6 | (unnamed) | ¥30,344.59 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 7 | (unnamed) | ¥30,774.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 8 | (unnamed) | ¥31,386.46 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 9 | (unnamed) | ¥34,884.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 10 | (unnamed) | ¥34,884.5 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 11 | (unnamed) | ¥35,032.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 12 | (unnamed) | ¥35,032.88 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 13 | (unnamed) | ¥35,147.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 14 | (unnamed) | ¥35,185.83 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 15 | (unnamed) | ¥36,356.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 16 | (unnamed) | ¥36,396.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 17 | (unnamed) | ¥36,424.32 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 18 | (unnamed) | ¥36,930.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 19 | (unnamed) | ¥36,930.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 20 | (unnamed) | ¥37,003.96 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 21 | (unnamed) | ¥39,602.75 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥40,697.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 23 | (unnamed) | ¥40,873.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 24 | (unnamed) | ¥42,192.55 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 25 | (unnamed) | ¥42,240.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 26 | (unnamed) | ¥42,483.54 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 27 | (unnamed) | ¥42,862.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 28 | (unnamed) | ¥42,910.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 29 | (unnamed) | ¥43,085.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 30 | (unnamed) | ¥49,211.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 31 | (unnamed) | ¥49,250.48 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 32 | (unnamed) | ¥66,120.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 33 | (unnamed) | ¥66,183.51 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 34 | (unnamed) | ¥68,441.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 35 | (unnamed) | ¥68,505.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 36 | (unnamed) | ¥73,080.14 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 37 | (unnamed) | ¥73,148.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |

### Ochanomizu Hotel Shoryukan — Private Hinoki Rotenburo Room for Tattooed Guests, Near Ochanomizu Station
- **liteapi_id:** `lp67bfd`
- **city / area:** Tokyo / Ochanomizu / Chiyoda-ku
- **category_tags:** private-bath, tattoo-consideration, English-friendly, family-friendly
- **判定理由:** 183 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥13,810.79 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 2 | (unnamed) | ¥13,810.79 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 3 | (unnamed) | ¥14,230.13 | `3gAWonJzkY-kc3JpZNoD…` | - | NRFN | - |
  | 4 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 5 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 6 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 7 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 8 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 9 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 10 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 11 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 12 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 13 | (unnamed) | ¥14,400.28 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 14 | (unnamed) | ¥14,657.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥14,657.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥14,667.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 17 | (unnamed) | ¥14,667.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 18 | (unnamed) | ¥14,685.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 19 | (unnamed) | ¥14,685.45 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 20 | (unnamed) | ¥14,769.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 21 | (unnamed) | ¥14,769.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 22 | (unnamed) | ¥14,836.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥14,836.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥14,836.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥14,836.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥14,836.4 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 27 | (unnamed) | ¥15,123.53 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 28 | (unnamed) | ¥15,228.6 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 29 | (unnamed) | ¥15,993.3 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/13 |
  | 30 | (unnamed) | ¥16,006.94 | `3gAWonJzkY-kc3JpZNn4…` | - | RFN | 2026/6/13 |
  | 31 | (unnamed) | ¥16,006.94 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 32 | (unnamed) | ¥16,112.58 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 33 | (unnamed) | ¥16,114.64 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/13 |
  | 34 | (unnamed) | ¥16,114.64 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 35 | (unnamed) | ¥16,397.2 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 36 | (unnamed) | ¥16,397.2 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 37 | (unnamed) | ¥16,490.32 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥16,571.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 39 | (unnamed) | ¥16,571.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 40 | (unnamed) | ¥16,601.49 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 41 | (unnamed) | ¥16,674.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 42 | (unnamed) | ¥16,674.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 43 | (unnamed) | ¥16,674.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 44 | (unnamed) | ¥16,674.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 45 | (unnamed) | ¥16,674.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 46 | (unnamed) | ¥16,740.69 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 47 | (unnamed) | ¥16,799.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 48 | (unnamed) | ¥16,799.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 49 | (unnamed) | ¥16,799.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 50 | (unnamed) | ¥16,799.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 51 | (unnamed) | ¥16,799.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 52 | (unnamed) | ¥16,974.44 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 53 | (unnamed) | ¥16,974.44 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 54 | (unnamed) | ¥16,995.92 | `3gAWonJzkY-kc3JpZNn4…` | - | RFN | 2026/6/12 |
  | 55 | (unnamed) | ¥17,114.45 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/12 |
  | 56 | (unnamed) | ¥17,455.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 57 | (unnamed) | ¥17,455.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 58 | (unnamed) | ¥17,455.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 59 | (unnamed) | ¥17,455.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 60 | (unnamed) | ¥17,455.22 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 61 | (unnamed) | ¥17,792.28 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 62 | (unnamed) | ¥17,914.69 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 63 | (unnamed) | ¥18,658.54 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/13 |
  | 64 | (unnamed) | ¥18,666.43 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 65 | (unnamed) | ¥18,776.47 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 66 | (unnamed) | ¥19,162.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 67 | (unnamed) | ¥19,162.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 68 | (unnamed) | ¥19,332.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 69 | (unnamed) | ¥19,332.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 70 | (unnamed) | ¥19,451.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 71 | (unnamed) | ¥19,451.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 72 | (unnamed) | ¥19,451.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 73 | (unnamed) | ¥19,451.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 74 | (unnamed) | ¥19,451.35 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 75 | (unnamed) | ¥19,568.07 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 76 | (unnamed) | ¥19,568.07 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 77 | (unnamed) | ¥19,568.07 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 78 | (unnamed) | ¥19,568.07 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 79 | (unnamed) | ¥19,817.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥19,817.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 81 | (unnamed) | ¥19,825.79 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/12 |
  | 82 | (unnamed) | ¥19,962.82 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/12 |
  | 83 | (unnamed) | ¥20,298.69 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 84 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 85 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 86 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 87 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 88 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 89 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 90 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 91 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 92 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 93 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 94 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 95 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 96 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 97 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 98 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 99 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 100 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 101 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 102 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 103 | (unnamed) | ¥20,401.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 104 | (unnamed) | ¥20,765.14 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 105 | (unnamed) | ¥20,765.14 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 106 | (unnamed) | ¥20,804.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 107 | (unnamed) | ¥20,804.23 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 108 | (unnamed) | ¥21,163.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 109 | (unnamed) | ¥21,163.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 110 | (unnamed) | ¥21,163.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 111 | (unnamed) | ¥21,163.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 112 | (unnamed) | ¥21,163.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 113 | (unnamed) | ¥21,570.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 114 | (unnamed) | ¥21,718.11 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 115 | (unnamed) | ¥21,972.38 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 116 | (unnamed) | ¥21,972.38 | `3gAWonJzkY-kc3JpZNoC…` | - | RFN | 2026/6/13 |
  | 117 | (unnamed) | ¥22,643.35 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/13 |
  | 118 | (unnamed) | ¥22,670.48 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 119 | (unnamed) | ¥22,670.48 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 120 | (unnamed) | ¥22,801.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 121 | (unnamed) | ¥22,801.87 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 122 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 123 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 124 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 125 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 126 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 127 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 128 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 129 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 130 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 131 | (unnamed) | ¥22,907.68 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 132 | (unnamed) | ¥22,956.47 | `3gAWonJzkY-kc3JpZNoD…` | - | NRFN | - |
  | 133 | (unnamed) | ¥22,956.47 | `3gAWonJzkY-kc3JpZNoD…` | - | NRFN | - |
  | 134 | (unnamed) | ¥23,297.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 135 | (unnamed) | ¥23,297.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 136 | (unnamed) | ¥23,471.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 137 | (unnamed) | ¥23,471.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 138 | (unnamed) | ¥23,608.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 139 | (unnamed) | ¥23,608.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 140 | (unnamed) | ¥23,608.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 141 | (unnamed) | ¥23,608.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 142 | (unnamed) | ¥23,608.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 143 | (unnamed) | ¥23,936.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 144 | (unnamed) | ¥23,936.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 145 | (unnamed) | ¥23,936.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 146 | (unnamed) | ¥23,936.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 147 | (unnamed) | ¥23,936.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 148 | (unnamed) | ¥24,039.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 149 | (unnamed) | ¥24,039.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 150 | (unnamed) | ¥24,063.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 151 | (unnamed) | ¥24,228.85 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 152 | (unnamed) | ¥24,394.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 153 | (unnamed) | ¥24,562.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 154 | (unnamed) | ¥25,439.06 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/13 |
  | 155 | (unnamed) | ¥25,439.06 | `3gAWonJzkY-kc3JpZNoD…` | - | RFN | 2026/6/13 |
  | 156 | (unnamed) | ¥25,455.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 157 | (unnamed) | ¥25,455.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 158 | (unnamed) | ¥25,603.6 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 159 | (unnamed) | ¥25,603.6 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 160 | (unnamed) | ¥26,196.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 161 | (unnamed) | ¥26,196.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 162 | (unnamed) | ¥26,196.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 163 | (unnamed) | ¥26,196.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 164 | (unnamed) | ¥26,367.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 165 | (unnamed) | ¥26,367.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 166 | (unnamed) | ¥26,367.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 167 | (unnamed) | ¥26,367.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 168 | (unnamed) | ¥26,524.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 169 | (unnamed) | ¥26,524.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 170 | (unnamed) | ¥26,524.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 171 | (unnamed) | ¥26,524.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 172 | (unnamed) | ¥26,524.57 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 173 | (unnamed) | ¥26,596.75 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 174 | (unnamed) | ¥26,750.79 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 175 | (unnamed) | ¥27,022.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 176 | (unnamed) | ¥27,022.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 177 | (unnamed) | ¥27,022.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 178 | (unnamed) | ¥27,022.07 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 179 | (unnamed) | ¥27,035.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 180 | (unnamed) | ¥27,222.72 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 181 | (unnamed) | ¥29,102.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 182 | (unnamed) | ¥29,476.62 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 183 | (unnamed) | ¥29,655.11 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |

### Cyashitsu Ryokan Asakusa — Boutique Tea-Room Ryokan with Private Open-Air Bath and Tokyo Skytree Views
- **liteapi_id:** `lp2197e0`
- **city / area:** Tokyo / Asakusa / Taito-ku
- **category_tags:** private-bath, tattoo-consideration, English-friendly
- **判定理由:** 57 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥63,870.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥63,870.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥63,870.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥63,870.33 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 5 | (unnamed) | ¥64,866.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 6 | (unnamed) | ¥64,866.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 7 | (unnamed) | ¥64,866.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 8 | (unnamed) | ¥64,866.19 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 9 | (unnamed) | ¥64,940.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 10 | (unnamed) | ¥64,940.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥64,940.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥64,940.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥65,111.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥65,111.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥65,111.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥65,111.01 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥65,279.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 18 | (unnamed) | ¥65,279.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 19 | (unnamed) | ¥65,279.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 20 | (unnamed) | ¥65,279.74 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/2 |
  | 21 | (unnamed) | ¥66,054.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 22 | (unnamed) | ¥66,054.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 23 | (unnamed) | ¥66,054.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥66,054.62 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥66,733.27 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/6 |
  | 26 | (unnamed) | ¥66,733.27 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 27 | (unnamed) | ¥67,260.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 28 | (unnamed) | ¥67,260.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 29 | (unnamed) | ¥75,698.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 30 | (unnamed) | ¥75,698.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 31 | (unnamed) | ¥77,419.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 32 | (unnamed) | ¥77,419.32 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 33 | (unnamed) | ¥88,176.93 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥88,176.93 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 35 | (unnamed) | ¥89,358.24 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 36 | (unnamed) | ¥89,358.24 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 37 | (unnamed) | ¥89,918.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥89,918.39 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 39 | (unnamed) | ¥90,031.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥90,031.5 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 41 | (unnamed) | ¥90,048.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 42 | (unnamed) | ¥90,048.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 43 | (unnamed) | ¥90,200.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 44 | (unnamed) | ¥90,200.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 45 | (unnamed) | ¥90,722.36 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 46 | (unnamed) | ¥92,212.21 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 47 | (unnamed) | ¥92,212.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 48 | (unnamed) | ¥92,212.21 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 49 | (unnamed) | ¥96,610.59 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 50 | (unnamed) | ¥96,610.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 51 | (unnamed) | ¥103,997.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 52 | (unnamed) | ¥103,997.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 53 | (unnamed) | ¥103,997.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 54 | (unnamed) | ¥106,206.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 55 | (unnamed) | ¥106,206.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/7 |
  | 56 | (unnamed) | ¥106,206.22 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |
  | 57 | (unnamed) | ¥125,747.91 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/15 |

### Ascott Marunouchi Tokyo — Luxury Dog-Friendly Serviced Apartments with Full Kitchen, Directly Connected to Otemachi Station
- **liteapi_id:** `lpa7230`
- **city / area:** Tokyo / Marunouchi / Otemachi
- **category_tags:** pet-friendly, self-catering, luggage-friendly, English-friendly, family-friendly
- **判定理由:** 200 roomTypes returned — room selection UI recommended before booking

  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |
  |---|---|---|---|---|---|---|
  | 1 | (unnamed) | ¥79,598.44 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 2 | (unnamed) | ¥82,621.16 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 3 | (unnamed) | ¥82,621.16 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 4 | (unnamed) | ¥83,373.31 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 5 | (unnamed) | ¥83,919.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 6 | (unnamed) | ¥83,919.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 7 | (unnamed) | ¥83,919.63 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 8 | (unnamed) | ¥84,280.7 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 9 | (unnamed) | ¥85,568.03 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 10 | (unnamed) | ¥86,387.85 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 11 | (unnamed) | ¥86,588.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 12 | (unnamed) | ¥86,588.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 13 | (unnamed) | ¥87,106.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 14 | (unnamed) | ¥87,106.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 15 | (unnamed) | ¥87,106.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 16 | (unnamed) | ¥87,106.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 17 | (unnamed) | ¥87,106.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 18 | (unnamed) | ¥87,106.91 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 19 | (unnamed) | ¥87,347.48 | `3gAWonJzkY-kc3JpZNn_…` | - | NRFN | - |
  | 20 | (unnamed) | ¥87,347.48 | `3gAWonJzkY-kc3JpZNn_…` | - | NRFN | - |
  | 21 | (unnamed) | ¥87,347.48 | `3gAWonJzkY-kc3JpZNn_…` | - | NRFN | - |
  | 22 | (unnamed) | ¥87,347.48 | `3gAWonJzkY-kc3JpZNn_…` | - | NRFN | - |
  | 23 | (unnamed) | ¥87,451.12 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 24 | (unnamed) | ¥87,481.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 25 | (unnamed) | ¥88,297 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 26 | (unnamed) | ¥88,297 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 27 | (unnamed) | ¥88,334.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 28 | (unnamed) | ¥88,334.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 29 | (unnamed) | ¥88,334.97 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 30 | (unnamed) | ¥88,541.54 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 31 | (unnamed) | ¥88,740.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 32 | (unnamed) | ¥88,818.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 33 | (unnamed) | ¥88,818.23 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 34 | (unnamed) | ¥89,460.44 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 35 | (unnamed) | ¥89,460.44 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 36 | (unnamed) | ¥89,542.35 | `3gAWonJzkY-kc3JpZNn4…` | - | RFN | 2026/5/31 |
  | 37 | (unnamed) | ¥89,668.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 38 | (unnamed) | ¥89,668.89 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 39 | (unnamed) | ¥89,875.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 40 | (unnamed) | ¥89,875.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 41 | (unnamed) | ¥89,875.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 42 | (unnamed) | ¥89,875.45 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 43 | (unnamed) | ¥90,071.02 | `3gAWonJzkY-kc3JpZNn4…` | - | RFN | 2026/5/31 |
  | 44 | (unnamed) | ¥90,320.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 45 | (unnamed) | ¥90,320.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 46 | (unnamed) | ¥90,320.24 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 47 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 48 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 49 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 50 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 51 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 52 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 53 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 54 | (unnamed) | ¥90,665.31 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 55 | (unnamed) | ¥90,722.36 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 56 | (unnamed) | ¥90,843.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 57 | (unnamed) | ¥90,843.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 58 | (unnamed) | ¥90,843.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 59 | (unnamed) | ¥90,933.05 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 60 | (unnamed) | ¥91,552.79 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 61 | (unnamed) | ¥91,691.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 62 | (unnamed) | ¥91,691.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 63 | (unnamed) | ¥91,691.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 64 | (unnamed) | ¥91,691.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 65 | (unnamed) | ¥91,691.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 66 | (unnamed) | ¥91,691.49 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 67 | (unnamed) | ¥91,812.77 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 68 | (unnamed) | ¥91,995.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 69 | (unnamed) | ¥91,995.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 70 | (unnamed) | ¥92,094.49 | `3gAWonJzkY-kc3JpZNn8…` | - | NRFN | - |
  | 71 | (unnamed) | ¥92,199.14 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 72 | (unnamed) | ¥92,199.14 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 73 | (unnamed) | ¥92,199.14 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 74 | (unnamed) | ¥92,199.14 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 75 | (unnamed) | ¥92,351.07 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/6 |
  | 76 | (unnamed) | ¥92,859.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 77 | (unnamed) | ¥92,859.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 78 | (unnamed) | ¥92,859.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 79 | (unnamed) | ¥92,859.56 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 80 | (unnamed) | ¥92,943.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 81 | (unnamed) | ¥92,943.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 82 | (unnamed) | ¥92,976.71 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 83 | (unnamed) | ¥93,492.48 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 84 | (unnamed) | ¥93,492.48 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 85 | (unnamed) | ¥93,507.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 86 | (unnamed) | ¥93,507.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 87 | (unnamed) | ¥93,507.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 88 | (unnamed) | ¥93,507.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 89 | (unnamed) | ¥93,507.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 90 | (unnamed) | ¥93,507.53 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 91 | (unnamed) | ¥93,896.42 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 92 | (unnamed) | ¥93,993.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 93 | (unnamed) | ¥94,168.2 | `3gAWonJzkY-kc3JpZNn4…` | - | RFN | 2026/5/31 |
  | 94 | (unnamed) | ¥94,168.2 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/5/31 |
  | 95 | (unnamed) | ¥94,270.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 96 | (unnamed) | ¥94,270.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 97 | (unnamed) | ¥94,270.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 98 | (unnamed) | ¥94,270.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 99 | (unnamed) | ¥94,270.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 100 | (unnamed) | ¥94,270.59 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 101 | (unnamed) | ¥94,388.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 102 | (unnamed) | ¥94,388.29 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 103 | (unnamed) | ¥94,548.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 104 | (unnamed) | ¥94,548.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 105 | (unnamed) | ¥94,548.98 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 106 | (unnamed) | ¥94,548.98 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 107 | (unnamed) | ¥94,735.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 108 | (unnamed) | ¥94,735.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 109 | (unnamed) | ¥94,735.58 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 110 | (unnamed) | ¥94,784.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 111 | (unnamed) | ¥94,784.37 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 112 | (unnamed) | ¥95,091.58 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 113 | (unnamed) | ¥95,091.58 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 114 | (unnamed) | ¥95,344.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 115 | (unnamed) | ¥95,344.68 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 116 | (unnamed) | ¥95,520.18 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 117 | (unnamed) | ¥95,594.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 118 | (unnamed) | ¥95,594.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 119 | (unnamed) | ¥95,594.13 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 120 | (unnamed) | ¥95,690.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 121 | (unnamed) | ¥95,690.25 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/6 |
  | 122 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 123 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 124 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 125 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 126 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 127 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 128 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 129 | (unnamed) | ¥95,701.3 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 130 | (unnamed) | ¥96,029.72 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/5/31 |
  | 131 | (unnamed) | ¥96,257.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 132 | (unnamed) | ¥96,257.74 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 133 | (unnamed) | ¥96,286.61 | `3gAWonJzkY-kc3JpZNn9…` | - | NRFN | - |
  | 134 | (unnamed) | ¥96,286.61 | `3gAWonJzkY-kc3JpZNn_…` | - | NRFN | - |
  | 135 | (unnamed) | ¥96,468.62 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 136 | (unnamed) | ¥96,597.48 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/5/31 |
  | 137 | (unnamed) | ¥96,972.02 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 138 | (unnamed) | ¥97,076 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 139 | (unnamed) | ¥97,462.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 140 | (unnamed) | ¥97,462.43 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 141 | (unnamed) | ¥97,482.92 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 142 | (unnamed) | ¥97,521.92 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 143 | (unnamed) | ¥97,642.27 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 144 | (unnamed) | ¥97,727.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 145 | (unnamed) | ¥97,727.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 146 | (unnamed) | ¥97,727.41 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 147 | (unnamed) | ¥97,744.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 148 | (unnamed) | ¥97,744.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 149 | (unnamed) | ¥97,929.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 150 | (unnamed) | ¥97,929.38 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 151 | (unnamed) | ¥98,092.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 152 | (unnamed) | ¥98,092.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 153 | (unnamed) | ¥98,092.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 154 | (unnamed) | ¥98,092.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 155 | (unnamed) | ¥98,092.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 156 | (unnamed) | ¥98,092.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 157 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 158 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 159 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 160 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 161 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 162 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 163 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 164 | (unnamed) | ¥98,137.67 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 165 | (unnamed) | ¥98,573.33 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/12 |
  | 166 | (unnamed) | ¥98,704.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 167 | (unnamed) | ¥98,704.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 168 | (unnamed) | ¥98,704.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 169 | (unnamed) | ¥98,704.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 170 | (unnamed) | ¥98,791.41 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 171 | (unnamed) | ¥98,837.94 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/11 |
  | 172 | (unnamed) | ¥99,203.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 173 | (unnamed) | ¥99,203.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 174 | (unnamed) | ¥99,203.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 175 | (unnamed) | ¥99,203.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 176 | (unnamed) | ¥99,203.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 177 | (unnamed) | ¥99,203.59 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 178 | (unnamed) | ¥99,430.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 179 | (unnamed) | ¥99,430.7 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 180 | (unnamed) | ¥99,524.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 181 | (unnamed) | ¥99,524.1 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/13 |
  | 182 | (unnamed) | ¥99,683.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 183 | (unnamed) | ¥99,683.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 184 | (unnamed) | ¥99,683.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 185 | (unnamed) | ¥99,683.86 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 186 | (unnamed) | ¥99,806.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/10 |
  | 187 | (unnamed) | ¥100,018.93 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 188 | (unnamed) | ¥100,018.93 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/5/31 |
  | 189 | (unnamed) | ¥100,097.57 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/11 |
  | 190 | (unnamed) | ¥100,097.57 | `3gAWonJzkY-kc3JpZNn6…` | - | RFN | 2026/6/11 |
  | 191 | (unnamed) | ¥100,132.86 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 192 | (unnamed) | ¥100,132.86 | `3gAWonJzkY-kc3JpZNoC…` | - | NRFN | - |
  | 193 | (unnamed) | ¥100,346.69 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 194 | (unnamed) | ¥100,346.69 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 195 | (unnamed) | ¥100,346.69 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 196 | (unnamed) | ¥100,346.69 | `3gAWonJzkY-kc3JpZNn8…` | - | RFN | 2026/6/13 |
  | 197 | (unnamed) | ¥100,657.14 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 198 | (unnamed) | ¥100,765.09 | `3gAWonJzkY-kc3JpZNoB…` | - | NRFN | - |
  | 199 | (unnamed) | ¥100,977.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |
  | 200 | (unnamed) | ¥100,977.16 | `3gAWonJzkY-kc3JpZNoB…` | - | RFN | 2026/6/1 |

## 🔴 Grade C1 — api_error_or_invalid_hotel (12件)

### Kyoto Machiya Fukune — Private Machiya Suite with Rotenburo Garden Bath 🏠
- **liteapi_id:** `lpbffda`
- **city / area:** Kyoto / Nakagyo-ku
- **category_tags:** private-villa, private-bath, luggage-friendly, English-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Kyoto Ryokan Gion Sano — Traditional Ryokan with Elevator and Luggage Storage in Southern Higashiyama
- **liteapi_id:** `lpb9595`
- **city / area:** Kyoto / Gion / Higashiyama-ku
- **category_tags:** luggage-friendly, private-bath, English-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Onya Tachibana — Ryokan with Private Hot Tub Bathrooms, 250m from Nijo Station
- **liteapi_id:** `lp1035eb`
- **city / area:** Kyoto / Nijo / Nakagyo Ward
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Kumashu-an Machiya House — Private Kyoto Townhouse with Full Kitchen Near Nijo Castle 🏠
- **liteapi_id:** `lp9fc14`
- **city / area:** Kyoto / Nakagyo-ku
- **category_tags:** private-villa, self-catering, luggage-friendly, English-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Ocean Shinsaibashi — Apartment with Full Kitchen and Deep Soaking Bath Near Dotonbori
- **liteapi_id:** `lp6558f48f`
- **city / area:** Osaka / Shinsaibashi / Shimanouchi
- **category_tags:** self-catering, private-bath, English-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Koti Sopo Universal Bay 1 by Liaison — Self-Catering Apartment 4 Minutes from Nishikujo Station, 2 Stops to USJ
- **liteapi_id:** `lp6554dfc3`
- **city / area:** Osaka / Konohana / Nishikujo
- **category_tags:** self-catering, luggage-friendly, English-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Gummi Apartment — Self-Catering Kitchen Near USJ, Konohana-ku Osaka
- **liteapi_id:** `lp6554ecdb`
- **city / area:** Osaka / Konohana / USJ Area
- **category_tags:** self-catering, private-bath, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### ARlis house Shin Osaka North — Apartment Hotel with Full Stocked Kitchen and Private Soaking Bath Near Shin-Osaka
- **liteapi_id:** `lp27ddc7`
- **city / area:** Osaka / Shin-Osaka / Higashimikuni
- **category_tags:** self-catering, food-friendly, private-bath, English-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### AFP Tennoji Apartment — 30-Unit Self-Catering Complex with Full Kitchen and Private Soaking Bath, 1 Min from Showacho Station
- **liteapi_id:** `lp2515eb`
- **city / area:** Osaka / Tennoji / Abeno
- **category_tags:** self-catering, food-friendly, private-bath, luggage-friendly, English-friendly, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Machi de kurasu Tengachaya-3 — Private Holiday Home with Kitchen and Soaking Bath Near Tengachaya Station 🏠
- **liteapi_id:** `lp1a7bcd`
- **city / area:** Osaka / Nishinari-ku / Tengachaya
- **category_tags:** private-villa, self-catering, private-bath, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### i Osaka Traditional — Guesthouse with Kitchen, Private Baths, and On-Site Italian-Korean Restaurant
- **liteapi_id:** `lp1867c6`
- **city / area:** Osaka / Kitakagaya
- **category_tags:** self-catering, food-friendly, private-bath, family-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

### Ryokan Asakusa Shigetsu — Traditional Tokyo Ryokan with Private Bathrooms Near Senso-ji
- **liteapi_id:** `lp5fb6f`
- **city / area:** Tokyo / Asakusa / Taito-ku
- **category_tags:** private-bath, tattoo-consideration, luggage-friendly, English-friendly, access-friendly
- **判定理由:** Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): Hotel not found in rates response (invalid liteapi_id or sold out)
- **エラー:** `Hotel not found in rates response (invalid liteapi_id or sold out)`

## ✅ Booking-Ready ホテル一覧 (Grade A)

*Grade A のホテルはありませんでした。*
