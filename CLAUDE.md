# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

```bash
# 開発サーバー起動（Turbopack使用）
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# リント実行
npm run lint
```

### 重要な注意事項
- ユーザーは常に `npm run dev` で開発サーバーを起動し、UIの変化を監視している
- **npm run build を実行すると開発サーバーが停止するため、基本的に実行しない**
- ビルドが必要な場合は、ユーザーから指示があった場合のみ実行する
- 自発的にビルドを実行したい場合は、必ずユーザーに確認を取ること

### Gitコミットガイドライン
- **コミットメッセージは短くシンプルに**: 数行程度で要点のみ
- **Claude Code情報は含めない**: 🤖マークやCo-Authored-Byは不要
- **例**: `カードレイアウト改善` `お問い合わせフォーム実装` など

## プロジェクト概要

- **目的**: 機械学習エンジニアとしてのポートフォリオサイト
- **技術スタック**: Next.js 15.3.3 (React), TypeScript, Tailwind CSS v4
- **ホスティング**: Cloudflare Pages
- **公開URL**: https://masakiaota.pages.dev/
- **リポジトリ**: https://github.com/masakiaota/portfolio

## アーキテクチャ

### 構成
- **シングルページアプリケーション**: セクション別コンポーネントを`src/app/page.tsx`で統合
- **スムーズスクロールナビゲーション**: アンカーリンクによるセクション間移動
- **レスポンシブデザイン**: Tailwind CSSによるモバイル対応

### ディレクトリ構造
```
src/
├── app/
│   ├── page.tsx      # メインページ（セクションコンポーネント統合）
│   ├── layout.tsx    # ルートレイアウト + SEO/OGP設定
│   ├── globals.css   # グローバルスタイル + カスタム背景色
│   └── favicon.ico
└── components/
    ├── sections/     # 各セクションコンポーネント
    │   ├── HomeSection.tsx       # ヒーローセクション
    │   ├── AboutSection.tsx      # 自己紹介・スキル
    │   ├── ProjectsSection.tsx   # プロジェクト一覧
    │   ├── PublicationsSection.tsx # 出版物
    │   └── ContactSection.tsx    # お問い合わせフォーム
    ├── Header.tsx    # スティッキーヘッダー
    ├── Footer.tsx    # フッター
    ├── SocialLinks.tsx # ソーシャルメディアリンク
    └── ContactForm.tsx # お問い合わせフォーム（EmailJS）
```

### 主要セクション
1. **Home** (#home): ヒーロー、プロフィール写真、ソーシャルリンク
2. **About** (#about): 自己紹介、スキルセット（4つのカード）
3. **Projects** (#projects): プロジェクト一覧（12のプロジェクト、グリッド表示）
4. **Publications** (#publications): 出版物・書籍（3つ）
5. **Contact** (#contact): お問い合わせフォーム（EmailJS実装済み）

### 技術設定
- **TypeScript**: `@/*`エイリアスで`./src/*`へのパスマッピング、strict mode有効
- **Tailwind CSS**: v4使用、ユーティリティクラスベース
- **Next.js**: App Router、Turbopack対応
- **SEO**: メタタグ、OGP、Twitter Cards完備
- **画像最適化**: WebP形式、複数サイズ対応

### デザイン仕様
- **背景色**:
  - Home、Projects、Contact: `bg-light-gray` (#FCFCFC)
  - About、Publications: `bg-slate-50`
- **フォント**: 日本語フォント最適化済み
- **カードレイアウト**: flexboxによる高さ揃え

## デプロイ設定

### 通常のデプロイ手順
```bash
git add .
git commit -m "コミットメッセージ"
git push origin main
```

### Cloudflare Pages設定
- Framework preset: Next.js
- Build command: `npm run build`
- Build output directory: `.next`
- 継続的デプロイメント: mainブランチへのpushで自動デプロイ

## 重要な設定・機能

### EmailJS設定
- サービス: `aotamasakimail+fromportfolio@gmail.com`
- お問い合わせフォームで使用中

### 画像最適化
- プロフィール画像: WebP形式、複数サイズ（48px, 96px, 192px, 384px）
- Faviconセット: 16px, 32px, 48px, 192px, 512px + manifest.json

### SEO/OGP設定
- 基本メタタグ完備（description, keywords, canonical等）
- Open Graph Protocol対応
- Twitter Cards対応
- 日本語最適化済み

## 開発者情報

### ソーシャルリンク
- **GitHub**: https://github.com/masakiaota
- **Kaggle**: https://www.kaggle.com/masakiaota/competitions
- **はてなブログ**: https://aotamasaki.hatenablog.com/
- **LinkedIn**: www.linkedin.com/in/masaki-aota

### メモ
- ヘッダーの色はお気に入りなので変更しない
- 基本機能は完成済み、追加開発の必要性は低い