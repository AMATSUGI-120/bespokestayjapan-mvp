# LiteAPI Margin Behavior Check

**実行日時:** 2026-05-15  
**テストホテル:** lpae62c（Ryokan Shimizu）  
**テスト日程:** 2026-07-01 → 2026-07-02（adults: 2, currency: JPY, guestNationality: US）

---

## 結論（3点）

### 1. margin を省略した場合、Account-level Default Markup 15% は自動適用されるか？

**NO — 自動適用されない。**

- `margin` を省略すると、`retailRate.total`（実際の請求額）には 15% が乗らない。
- `suggestedSellingPrice`（推奨販売価格）は 15% 込みの ¥19,900 を返すが、これは**advisory（参考値）のみ**。
- さらに、`margin` 省略では一部の日程でルームタイプが 0 件になることがある（同ホテル・同日程でも margin=0 や margin=15 では 1 件返った）。
- → **`margin` 省略は使用しないこと。**

### 2. margin: 0 を明示した場合、Account-level 15% は維持されるか、無効化されるか？

**無効化される（ネット価格になる）。**

- `margin: 0` → `retailRate.total = ¥17,304`（ネット価格）、commission ≈ ¥0
- Account-level 15% は `request-level margin: 0` に**上書きされる**。
- `suggestedSellingPrice = ¥19,900` は返るが請求額には影響しない。

### 3. Phase 3 の /api/prebook 呼び出し時、margin に何を渡すべきか？

**margin は /api/rates 呼び出し時に決定する — /api/prebook の margin パラメータは価格に影響しない。**

価格は `offerId` にロックされる。prebook の `margin` パラメータは commission フィールドの計算式にのみ使われ、`retailRate.total` や実際の Stripe 請求額を変えない。

| /rates の margin | prebook の margin | 最終請求額 |
|---|---|---|
| 0 | 省略 | ¥17,304（ネット） |
| 0 | 0 | ¥17,304（ネット） |
| 0 | 15 | ¥17,304（ネット、変わらない） |
| 15 | 省略 | ¥19,898（15% 乗せ） |
| 15 | 0 | ¥19,898（ネット、変わらない） |
| 15 | 15 | ¥19,898（15% 乗せ、変わらない） |

---

## Phase 3 への推奨アクション

| 対象 | 推奨 |
|---|---|
| `/api/stays/[liteapi_id]/rates` | `margin: 15` を送る → 15% コミッション込みの価格を `offerId` にロック |
| `/api/stays/[liteapi_id]/prebook` | `margin` パラメータ不要（価格は offerId で確定済み）。送るなら `margin: 0` でも結果は同じ |
| `/api/book`（既存） | 変更不要。offerId の価格は rates 時点で確定 |

**コミッションを取る = /api/rates を `margin: 15` で呼ぶこと。他の何も変えなくてよい。**

---

## テスト詳細

### Rates API 比較

| margin | roomTypes | retailRate.total | suggestedSellingPrice | commission |
|---|---|---|---|---|
| 省略 | **0件**（在庫ゼロ扱い） | — | — | — |
| 0 | 1件 | ¥17,304.43 | ¥19,900.11 | ≈ ¥0 |
| 15 | 1件 | ¥19,898.37 | ¥19,900.11 | ¥2,593.92 |

### Prebook API 比較（margin=0 の offerId から）

| prebook margin | 請求額 | commission |
|---|---|---|
| 省略 | ¥17,304.43 | -¥0.01 |
| 0 | ¥17,304.43 | -¥0.01 |
| 15 | ¥17,304.43 | -¥0.01 |

→ **offerId の価格は変わらない。**

### Prebook API 比較（margin=15 の offerId から）

| prebook margin | 請求額 | commission |
|---|---|---|
| 省略 | ¥19,898.37 | ¥2,593.92 |
| 0 | ¥19,898.37 | ¥2,593.92 |
| 15 | ¥19,898.37 | ¥2,593.92 |

→ **offerId の価格は変わらない。**

---

## 詳細データ

`data/liteapi-margin-behavior-check.json` に全レスポンスの数値を保存。
