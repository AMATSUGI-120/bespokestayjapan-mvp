# Ryokan Shimizu (lpae62c) — LiteAPI Rates Dry-Run

**調査日時:** 2026-05-14T16:33:16.139238Z
**テスト日程:** 2026-06-15 → 2026-06-16（1泊 / 大人2名）
**guestNationality:** US（プライマリ）/ JP（比較）
**currency:** JPY

---

## 実行条件

| 項目 | 値 |
|---|---|
| API | `POST /v3.0/hotels/rates` |
| hotelId | `lpae62c` |
| checkin / checkout | 2026-06-15 / 2026-06-16 |
| occupancies | adults: 2（children フィールド省略） |
| currency | JPY |
| guestNationality | US → JP でも比較 |

---

## US 結果 — US（プライマリ）

- **API ステータス:** 正常（roomTypes 3件）

| # | roomName | totalPrice | 税額 | offerId 先頭20文字 | boardType | refundable | cancelDeadline |
|---|---|---|---|---|---|---|---|
| 1 | Japanese-Style Twin Room with Private Bathroom - Non-Smoking | ¥15,919 | ¥1,258 incl. | `3gAWonJzkY-kc3JpZNoB…` | RO | RFN | 2026-06-13 00:59 |
| 2 | Double Room with Private Bathroom - Non-Smoking | ¥17,909 | ¥1,416 incl. | `3gAWonJzkY-kc3JpZNoB…` | BI | RFN | 2026-06-13 00:59 |
| 3 | Japanese-Style Triple Room with Private Bathroom - Non-Smoking | ¥19,898 | ¥1,574 incl. | `3gAWonJzkY-kc3JpZNoB…` | RO | RFN | 2026-06-13 00:59 |

## JP 結果 — JP（比較）

- **API ステータス:** 正常（roomTypes 3件）

| # | roomName | totalPrice | 税額 | offerId 先頭20文字 | boardType | refundable | cancelDeadline |
|---|---|---|---|---|---|---|---|
| 1 | Japanese-Style Twin Room with Private Bathroom - Non-Smoking | ¥15,919 | ¥1,258 incl. | `3gAWonJzkY-kc3JpZNoB…` | RO | RFN | 2026-06-13 00:59 |
| 2 | Double Room with Private Bathroom - Non-Smoking | ¥17,909 | ¥1,416 incl. | `3gAWonJzkY-kc3JpZNoB…` | BI | RFN | 2026-06-13 00:59 |
| 3 | Japanese-Style Triple Room with Private Bathroom - Non-Smoking | ¥19,898 | ¥1,574 incl. | `3gAWonJzkY-kc3JpZNoB…` | RO | RFN | 2026-06-13 00:59 |

## US / JP 差分

| 項目 | US | JP |
|---|---|---|
| roomType 件数 | 3 | 3 |
| 価格一覧 (JPY) | [15919, 17908, 19898] | [15919, 17908, 19898] |
| 差分 | なし（同一） | |

---

## まとめ・分析

### roomType 構造と注意点

- **件数:** 3件（調査対象33件中最小 — 部屋選択UIを最も絞れる）
- **offerId 位置:** `roomTypes[n].offerId`（top-level の長いエンコード文字列）
- **price 位置:** `roomTypes[n].rates[0].retailRate.total[0].amount`
  （`roomTypes[n].price` / `roomTypes[n].retailRate` は null）
- **room name:** `roomTypes[n].name` は null — offerId のペイロード内に埋め込まれているが信頼性低い
  → UI では boardType・価格・キャンセル条件で区別する設計が安全

### 最安値プラン（参考 — 本番では自動選択しない）

| 項目 | 値 |
|---|---|
| roomName | Japanese-Style Twin Room with Private Bathroom - Non-Smoking |
| offerId | `3gAWonJzkY-kc3JpZNoBp0daUVRNTUpYR0EzRENOVEZHWTJUT0…` |
| totalPrice | **¥15,919**（税込 ¥1,258）|
| boardType | RO |
| キャンセル | ✅ 無料キャンセル可（期限: 2026-06-13 00:59 GMT） |

### Refundable プランの有無

- **全3プラン: ✅ RFN（無料キャンセル可）**
- キャンセル期限: 2026-06-13 00:59（GMT）
- 注: 期限超過後のペナルティ = 宿泊料金全額（実質 NRFN と同等）

---

## Check Availability UI に表示すべき項目案

| 項目 | 値の例 | 表示方針 |
|---|---|---|
| プラン番号 | Plan 1 / 2 / 3 | roomName が null のため番号 + boardType + 価格で区別 |
| totalPrice | ¥15,919 | 税込・円固定表示 |
| taxAmount | ¥1,258 incl. | "税込" バッジ |
| boardType | RO / BB | Room Only / 朝食付き 等（null の場合は Room Only と表示） |
| refundableTag | RFN | ✅ 無料キャンセル可 バッジ |
| cancelDeadline | 2026-06-13 00:59 GMT | "〜まで無料キャンセル" 形式 |
| offerId | (非表示) | 内部保持 → ユーザー選択後に prebook へ渡す |

---

## 次 Step: prebook dry-run へ進めるか

**✅ 進められます。**

- 有効な offerId が **3件** 取得できています
- 全プラン RFN — prebook 後に book しなければ課金・予約確定なし
- 参考 offerId 先頭: `3gAWonJzkY-kc3JpZNoBp0daUVRNTUpYR0EzRENOVEZHWTJUT0…`

**推奨手順:**

1. 任意の offerId を使って `POST /rates/prebook`（`usePaymentSdk: true`）
2. `prebookId` / `secretKey` / `transactionId` が返ることを確認する
3. `book` API は呼ばない（prebook まで = 課金・予約確定なし）

> **設計注意:** 本番導線では最安値の自動選択はせず、
> ユーザーが roomType を選択した後に offerId を確定する設計を推奨。

---

## C1 物件との対比

| 物件 | rates API | 推奨導線 |
|---|---|---|
| `lpae62c` Ryokan Shimizu | ✅ 正常（3プラン） | LiteAPI 予約導線 |
| C1 物件 12件 | ❌ hotel not found | `booking_url` への外部 CTA のみ表示 |

> C1 物件では "Check Availability" UI を表示せず、
> `source_urls` の先頭 URL を `booking_url` として外部 CTA（OTA / 公式）へ誘導する設計を推奨します。
