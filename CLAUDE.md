# BespokeStay Japan - Project Context

## プロジェクト概要
ペット対応ホテル予約サイト。Next.js + Vercel + LiteAPI + Stripe構成。

## 技術スタック
- Next.js 16 (App Router)
- LiteAPI Payment SDK（Stripe経由）
- Vercel（デプロイ）
- TypeScript

## 重要な実装メモ

### LiteAPI
- margin: 15（整数）をRates APIに渡す
- targetElement: "#liteapi-payment-form"（#必須）
- apiKey: "live" と publicKey: "live" 両方必要
- prebookIdの有効期限は数分のため、Payボタン直前にprebook呼び出し

### 決済フロー
1. Book Now → ゲスト情報入力
2. Continue to Payment（即時遷移、API呼び出しなし）
3. Proceed to Payment → prebook API → SDK起動
4. Pay → /booking/success → /api/book呼び出し

### 未解決の問題
- marginがStripe請求金額に反映されていない（Johnに問い合わせ中）

### CSP設定
next.config.tsにStripe・LiteAPIのドメインを明示的に追加済み

@AGENTS.md
