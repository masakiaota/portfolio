# Repository Guidelines

## プロジェクト構成
- `src/app/`: エントリ（`layout.tsx`/`page.tsx`/`globals.css`）。
- `src/components/`: 再利用UI。各セクションは `components/sections/` 配下。
- `public/`: 画像・静的ファイル（`.webp` 推奨）。
- 出力: `.next/`（ビルド）、`out/`（`output: 'export'` の静的書き出し）。

## 開発・ビルド・動作確認
- `npm run dev`: 開発サーバ（Turbopack, `http://localhost:3000`）。
- `npm run build`: 本番ビルド（実行すると dev が停止。必要時のみ）。
- `npm run start`: 本番サーバ起動（静的ホスティングでは通常不要）。
- `npm run lint`: ESLint（Next.js 推奨設定）。
- Cloudflare Pages が `main` への push で自動デプロイ。

## コーディング規約
- 言語: TypeScript + React 19 + Next.js 15（App Router）。
- インデント: 2 スペース。1 ファイル 1 コンポーネントを基本。
- 命名: コンポーネントは PascalCase（例: `Header.tsx`）、フック/ユーティリティは camelCase（例: `useScrollSpy.ts`）。
- スタイリング: Tailwind CSS v4（ユーティリティ優先、過度な inline style 回避）。
- 画像: `public/` 配下に配置し `.webp` を使用。

## テスト方針
- 現状ユニットテスト未整備。追加する場合は React Testing Library + Vitest を推奨。
- 配置例: `src/__tests__/**`、命名: `*.test.tsx`。
- ネットワーク/タイマーはモックし、UI の決定的な振る舞いを検証。

## コミット・PR ガイドライン
- コミット: 簡潔・命令形。エージェント名や絵文字は不要。
  - 例: `fix: スクロール位置のオフセットを修正` / `feat: EmailJS を統合`。
- PR: 目的・主変更点・スクリーンショット（UI）・関連 Issue を明記。
- マージ前に `npm run lint` を通し、必要に応じ `npm run build` をローカル確認。

## セキュリティと設定
- 機密は `.env.local` のみに保管（`.env.sample` 参照）。秘密情報はコミット禁止。
- クライアントで必要な値のみ `NEXT_PUBLIC_` 接頭辞を使用。
- `next.config.ts` は `output: 'export'` と `images.unoptimized: true` で静的配信に最適化。

## エージェント向け注意事項
- ユーザーは基本的に `npm run dev` を起動中。ビルドは必ず事前確認のうえ実行。
- 既存デザイン（ヘッダー色など）は尊重。大幅変更は提案→合意後に実施。
