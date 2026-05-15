# Google Places API セットアップ手順

## Step 1: Google Cloud Console でAPIキー取得

### 1. プロジェクト作成・選択

1. https://console.cloud.google.com にアクセス
2. 上部のプロジェクト選択ドロップダウン → 「新しいプロジェクト」
3. プロジェクト名: `bespokestayjapan` → 作成

---

### 2. Places API (New) を有効化

1. 左メニュー → 「APIとサービス」→「ライブラリ」
2. 検索欄に `Places API` と入力
3. 「Places API (New)」（新版）を選択 → 「有効にする」

注意: 旧版「Places API」と新版「Places API (New)」の2つが存在します。新版を使うこと。

---

### 3. 請求先アカウントの設定

APIを使うには請求先アカウントが必須です（無料枠内なら課金なし）。

1. 「お支払い」→「請求先アカウントをリンク」
2. クレジットカード情報を登録
3. 無料枠の目安:
   - Place Photos: 月1,000リクエスト無料
   - Place Details: 月10,000リクエスト無料

---

### 4. APIキーの作成

1. 「APIとサービス」→「認証情報」
2. 「＋認証情報を作成」→「APIキー」
3. 作成されたキーをコピー（後で使用）

---

### 5. APIキーの制限設定（セキュリティ）

作成したキーの「編集」を開く:

アプリケーションの制限:
- 「サーバーからのリクエスト（IPアドレス）」を選択
- VercelのIPは動的なため、今は空でOK

APIの制限:
- 「キーを制限」を選択
- 以下のみ許可: Places API (New)
- 「保存」

---

### 6. 動作確認コマンド

取得したキーで動作確認（ターミナルで実行）:

```bash
curl -s "https://places.googleapis.com/v1/places:searchText" \
  -H "Content-Type: application/json" \
  -H "X-Goog-Api-Key: YOUR_API_KEY" \
  -H "X-Goog-FieldMask: places.displayName,places.id" \
  -d '{"textQuery": "The Thousand Kyoto hotel"}' | python3 -m json.tool
```

places[0].id が返ってきたら成功。

---

## Step 2: Vercel環境変数への追加

Vercelダッシュボード または CLIで追加:

```bash
vercel env add GOOGLE_PLACES_API_KEY
```

または vercel.com → プロジェクト → Settings → Environment Variables:
- Key: GOOGLE_PLACES_API_KEY
- Value: 取得したAPIキー
- Environment: Production, Preview, Development すべてにチェック

---

## Step 3: 実装予定のAPIルート

app/api/hotel-photos/route.ts を新規作成。

処理フロー:
1. ホテル名を受け取る
2. Supabaseのキャッシュを確認（photo_urlsカラム）
3. キャッシュあり → そのまま返す
4. キャッシュなし → Google Places API を叩く
   a. /v1/places:searchText でplace_idを取得
   b. /v1/places/{place_id}/photos で写真参照を取得（最大5件）
   c. 写真URLを組み立て（APIキー付きURL）
   d. Supabaseにキャッシュ保存
   e. URLを返す

---

## Step 4: Supabaseマイグレーション

hotelsテーブルにphoto_urlsカラムを追加:

```sql
ALTER TABLE hotels ADD COLUMN photo_urls TEXT[] DEFAULT NULL;
```

Supabase Dashboard → SQL Editor で実行。

---

## Step 5: HotelCard.tsx の写真表示

- メイン写真1枚を上部に表示
- 複数枚ある場合はスライドショー（前後ボタン）
- 写真なし時のフォールバック: グレーの placeholder + ホテルタイプアイコン

---

## コスト見積もり

1ホテルの検索コスト:
- Place Details（place_id取得）: $5.00 / 1,000リクエスト
- Place Photos（写真URL取得）: $7.00 / 1,000リクエスト × 5枚 = $35.00 / 1,000ホテル

キャッシュ効果（Supabase保存後）:
- 2回目以降はAPI呼び出しゼロ → コスト0
- 実質、新規ホテル追加時のみコスト発生

月間想定コスト（ホテル数100件、新規10件/月の場合）:
- Place Details: 10リクエスト × $0.005 = $0.05
- Place Photos: 10 × 5枚 × $0.007 = $0.35
- 合計: 約$0.40/月（ほぼ無料枠内）
