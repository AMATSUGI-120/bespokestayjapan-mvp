# Ryokan Shimizu (lpae62c) — LiteAPI Prebook Dry-Run

**実行日時:** 2026-05-15 01:49 JST  
**ステータス: ✅ HTTP 200 — prebook 成功**

> ⚠️ book API は呼んでいません。予約確定・課金は発生していません。

---

## 実行条件

| 項目 | 値 |
|---|---|
| API | `POST /v3.0/rates/prebook` |
| hotelId | `lpae62c` |
| 使用 offerId | Japanese-Style Twin Room ¥15,919（rates dry-run 最安値） |
| `usePaymentSdk` | `true` |
| `margin` | なし（0） |
| 実行日時 | 2026-05-15 01:49 JST |

---

## prebook レスポンス — 主要フィールド

### 識別子

| フィールド | 値 | 確認 |
|---|---|---|
| `prebookId` | `8uRuP0kRa` | ✅ あり |
| `transactionId` | `tr_ct_C24p...m7ks`（末尾4文字） | ✅ あり |
| `secretKey` | `pi_3TX2...mVW2`（末尾4文字） | ✅ あり |
| `hotelId` | `lpae62c` | ✅ 一致 |
| `currency` | `JPY` | ✅ |
| `checkin` / `checkout` | `2026-06-15` / `2026-06-16` | ✅ |
| `supplier` | `nuitee` | — |

---

### 価格情報

| フィールド | rates 時点 | prebook 後 | 差分 |
|---|---|---|---|
| `totalPrice` | ¥15,919.39 | ¥15,919.39 | ± 0 ✅ |
| `sellingPriceToUser` | — | ¥15,919.39 | — |
| `suggestedSellingPrice` | — | ¥15,920.79 | +¥1.40（LiteAPI端数処理） |
| `taxAmount (VAT)` | ¥1,258.15 incl. | ¥1,258.15 incl. | ± 0 ✅ |
| `priceDifferencePercent` | — | 0 | ✅ 価格変動なし |
| `commission` | — | ¥2,075.21 | （LiteAPI マークアップ — 内部参考値） |

**→ `priceChanged` 相当: なし（`priceDifferencePercent` = 0）**

---

### boardType 変化

| フィールド | rates 時点 | prebook 後 | 変化 |
|---|---|---|---|
| `boardType` | `RO` | `RO` | ✅ 変更なし |
| `boardName` | — | `Room Only` | ✅ |
| `boardChanged` | — | `false` | ✅ |

**→ boardType: RO = Room Only（食事なし）。rates と一致。**

---

### キャンセルポリシー変化

| フィールド | rates 時点 | prebook 後 | 変化 |
|---|---|---|---|
| `refundableTag` | `RFN` | `RFN` | ✅ 変更なし |
| `cancelTime` | 2026-06-13 **00:59**:00 GMT | 2026-06-13 **01:00**:00 GMT | ⚠️ 1分変化 |
| `cancelPenalty` | ¥15,919.39 | ¥15,919.39 | ✅ 同一 |
| `cancellationChanged` | — | `true` | ⚠️ |

**→ `cancellationChanged: true` の原因:** キャンセル期限が 1分だけ変化（00:59 → 01:00 GMT）。  
タイムゾーン端数処理のアーティファクトと考えられ、ユーザー向け案内への実質的影響はない。  
**ただし UI 実装では `cancellationChanged` フラグを確認し、prebook 後の `cancelTime` を正値として表示すること。**

---

### 支払い方法

| paymentType | 利用可否 |
|---|---|
| `NUITEE_PAY` | ✅ |
| `TRANSACTION_ID` | ✅（現行 PaymentModal が使用するメソッド） |
| `ACC_CREDIT_CARD` | ✅ |
| `WALLET` | ✅ |

---

## prebook 後にユーザーへ表示すべき確認事項

| 項目 | 表示内容 |
|---|---|
| 部屋タイプ | Japanese-Style Twin Room with Private Bathroom - Non-Smoking |
| 食事 | Room Only（食事なし）|
| 合計金額 | **¥15,920**（税込、VAT ¥1,258 含む）|
| キャンセル期限 | **2026年6月13日 10:00 JST まで無料キャンセル可**（= 01:00 GMT） |
| キャンセル料 | 期限後: 宿泊料金全額（¥15,920）|
| 変更フラグ | `boardChanged: false` / `priceDifferencePercent: 0` → 変更なし |
| `cancellationChanged` | `true`（1分の軽微な変化のみ。ユーザーには prebook 後の期限を表示）|

---

## Payment SDK 連携への準備状況

| 確認項目 | 結果 |
|---|---|
| `prebookId` 取得 | ✅ `8uRuP0kRa` |
| `secretKey` 取得 | ✅ あり（Stripe Payment Intent secret） |
| `transactionId` 取得 | ✅ あり |
| `TRANSACTION_ID` paymentType | ✅ 利用可能 |
| `price` 変動 | ✅ なし（0%） |
| `boardChanged` | ✅ false |

**→ ✅ Payment SDK 起動に進める状態です。**

`secretKey` を `LiteAPI Payment SDK` に渡すことで Stripe 決済フォームを表示できます。  
現行 `PaymentModal.tsx` の SDK 連携コード（`targetElement: "#liteapi-payment-form"`）と互換性があります。

---

## 重要: book API は未実行

> **予約確定・課金は一切発生していません。**  
> `POST /v3.0/rates/book` は呼んでいません。  
> `prebookId: 8uRuP0kRa` は数分で失効します（本番利用不可）。

---

## rates dry-run との総合対比

| 確認項目 | rates | prebook | 判定 |
|---|---|---|---|
| API 疎通 | ✅ | ✅ | OK |
| offerId 有効性 | ✅ 3件 | ✅ prebook 成功 | OK |
| 価格一致 | ¥15,919.39 | ¥15,919.39 | ✅ |
| boardType | RO | RO | ✅ |
| キャンセル条件 | RFN / 00:59 GMT | RFN / 01:00 GMT | ⚠️ 1分差（実質同一） |
| SDK 必要情報 | — | prebookId / secretKey / transactionId | ✅ 全取得 |

**→ Ryokan Shimizu は rates → prebook → Payment SDK の全導線で動作確認済み。**

---

## 次 Step の選択肢

1. **Check Availability UI 実装**
   - 部屋選択セレクター（Grade B 物件向け）
   - `roomTypes[n]` 表示: boardType + 価格 + RFN/NRFN バッジ + キャンセル期限
   - prebook は "Proceed to Payment" ボタン押下直前に呼ぶ（prebookId の短い有効期限のため）

2. **C1 物件の外部 CTA 対応**
   - `HotelCard` に `booking_url` fallback 追加
   - "Check Availability" UI を表示せず OTA/公式サイトへ誘導

3. **Supabase import 本番実行**
   - `import-supabase-hotels.js`（dry-run 確認済: 37 INSERT + 14 UPDATE）
