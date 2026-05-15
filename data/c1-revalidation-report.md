# C1 Fallback List — 再検証レポート

**実行日時:** 2026-05-15  
**検証対象:** data/c1-external-fallback-list.json（12件）  
**検証条件:** `/api/stays/[liteapi_id]/rates` と同一ロジック

---

## 方法

元の C1 判定は **固定日 2026-06-15/2026-06-16 の1日程のみ** で行われていました。  
今回は以下の5日程で全件を再検証し、**いずれか1日程でも rates が返れば `rates_available_now`** と判定しました。

| ラベル | 日程 | 備考 |
|---|---|---|
| `ui_default_30d` | 2026-06-14/15 | UI デフォルト（今日+30日）|
| `original_c1_dates` | 2026-06-15/16 | 元 C1 判定日程 |
| `jun_01` | 2026-06-01/02 | 6月上旬 |
| `jul_01` | 2026-07-01/02 | 7月上旬 |
| `jul_15` | 2026-07-15/16 | 7月中旬 |

---

## サマリー

| 分類 | 件数 |
|---|---|
| `rates_available_now`（旧 C2 誤分類） | **2件** |
| `still_external_fallback`（真の外部 CTA のみ） | **10件** |
| `error_or_needs_review` | 0件 |

---

## rates_available_now — 2件（旧 C1 は誤分類: 実態は C2）

元の C1 判定は 2026-06-15 のみ在庫ゼロだったため C1 扱いになっていましたが、  
他の日程では rates が返るため、実態は **日程依存の C2**（在庫あり）です。  
これらは Check Availability UI の通常フローで対応できます。

### lpbffda — Kyoto Machiya Fukune

**都市:** 京都 / Nakagyo-ku  
**タグ:** private-villa, private-bath, luggage-friendly, English-friendly

| 日程ラベル | checkin | プラン数 | 最安値 |
|---|---|---|---|
| ui_default_30d | 2026-06-14 | **146** | — |
| original_c1_dates | 2026-06-15 | 0 | — |
| jun_01 | 2026-06-01 | **32** | — |
| jul_01 | 2026-07-01 | **166** | — |
| jul_15 | 2026-07-15 | **48** | — |

→ 2026-06-15 のみ在庫ゼロ（その他は多数プランあり）。旧 C1 判定は誤り。

---

### lp5fb6f — Ryokan Asakusa Shigetsu

**都市:** 東京 / Asakusa / Taito-ku  
**タグ:** private-bath, tattoo-consideration, luggage-friendly, English-friendly, access-friendly

| 日程ラベル | checkin | プラン数 | 最安値 |
|---|---|---|---|
| ui_default_30d | 2026-06-14 | **24** | — |
| original_c1_dates | 2026-06-15 | 0 | — |
| jun_01 | 2026-06-01 | 0 | — |
| jul_01 | 2026-07-01 | **10** | — |
| jul_15 | 2026-07-15 | **14** | — |

→ 2026-06-15 および 6月1日は在庫ゼロだが、他の日程では rates あり。旧 C1 判定は誤り。

---

## still_external_fallback — 10件（真の外部 CTA のみ）

5日程全てで roomTypes = 0。LiteAPI rates API では予約不可。  
`booking_url` への外部 CTA（OTA / 公式サイト）を表示する設計を維持します。

| liteapi_id | 名前 | 都市 | タグ（抜粋） |
|---|---|---|---|
| `lpb9595` | Kyoto Ryokan Gion Sano | 京都 | luggage-friendly, private-bath |
| `lp1035eb` | Onya Tachibana | 京都 | private-bath, tattoo-consideration |
| `lp9fc14` | Kumashu-an Machiya House | 京都 | private-villa, self-catering |
| `lp6558f48f` | Ocean Shinsaibashi | 大阪 | self-catering, private-bath |
| `lp6554dfc3` | Koti Sopo Universal Bay 1 | 大阪 | self-catering, luggage-friendly |
| `lp6554ecdb` | Gummi Apartment | 大阪 | self-catering, private-bath |
| `lp27ddc7` | ARlis house Shin Osaka North | 大阪 | self-catering, private-bath |
| `lp2515eb` | AFP Tennoji Apartment | 大阪 | self-catering, private-bath |
| `lp1a7bcd` | Machi de kurasu Tengachaya-3 | 大阪 | private-villa, self-catering |
| `lp1867c6` | i Osaka Traditional | 大阪 | self-catering, private-bath |

---

## 判明した問題点：旧 C1 分類の精度

元の booking-readiness 調査は **固定日 2026-06-15/2026-06-16 の1日程** で判定していたため、  
「その日程だけ在庫ゼロ」のホテルを C1（data-only）と誤分類していました。

| 元分類 | 実態 | 件数 |
|---|---|---|
| C1（data-only, never bookable） | 実際は C2（日程依存の在庫なし）→ 他日程は bookable | 2件 |
| C1（data-only, never bookable） | 真の外部 fallback のみ（5日程全て空） | 10件 |

---

## 推奨アクション

| 対象 | アクション |
|---|---|
| `lpbffda` / `lp5fb6f` | `c1-external-fallback-list` から除外。Check Availability UI の通常フローへ移行。 |
| 残り 10件 | 引き続き外部 CTA のみ表示。`still_external_fallback` として管理。 |
| 将来の booking-readiness 調査 | 固定1日程ではなく、複数日程（最低3日程）でテストすることを推奨。 |

---

## 詳細データ

`data/c1-revalidation-report.json` に全件の by_date_window データを保存しました。
