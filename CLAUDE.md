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

- **目的**: 機械学習エンジニアとしてのポートフォリオサイト作成
- **技術スタック**: Next.js (React), TypeScript, Tailwind CSS
- **ホスティング**: Cloudflare Pages
- **ソース管理**: GitHub
- **開発環境**: MacBook Air (M3)

## 現在のアーキテクチャ

### 構成
- **シングルページアプリケーション**: すべてのコンテンツが`src/app/page.tsx`に統合
- **スムーズスクロールナビゲーション**: アンカーリンクによるセクション間移動
- **レスポンシブデザイン**: Tailwind CSSによるモバイル対応

### ディレクトリ構造
```
src/
├── app/
│   ├── page.tsx      # メインページ（全セクション統合）
│   ├── layout.tsx    # ルートレイアウト
│   ├── globals.css   # グローバルスタイル + カスタム背景色
│   └── favicon.ico
└── components/
    ├── Header.tsx    # スティッキーヘッダー
    ├── Footer.tsx    # フッター
    └── SocialLinks.tsx # ソーシャルメディアリンク
```

### 主要セクション構成
1. **Home** (#home): ヒーローセクション、プロフィール写真、ソーシャルリンク
2. **About** (#about): 自己紹介、スキルセット（4つのカード形式）
3. **Projects** (#projects): プロジェクト一覧（12のプロジェクト、カードグリッド表示）
4. **Publications** (#publications): 出版物・登場書籍（3つの出版物）
5. **Contact** (#contact): お問い合わせフォーム（未実装）

### 技術設定
- **TypeScript**: `@/*`エイリアスで`./src/*`へのパスマッピング、strict mode有効
- **Tailwind CSS**: v4使用、ユーティリティクラスベースのスタイリング
- **Next.js**: 15.3.3、App Router使用、Turbopack対応

### 現在のデザイン仕様
- **背景色構成**:
  - Home、Projects、Contact: `bg-light-gray` (#FCFCFC) - ほぼ白だが微妙にグレー
  - About、Publications: `bg-slate-50` - 薄いグレー
- **フォント**: 日本語フォント最適化済み（Hiragino, Meiryo等）
- **カードレイアウト**: flexboxによる高さ揃え、統一スタイリング

## デプロイ設定

### GitHub連携
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Cloudflare Pages設定
1. Cloudflareダッシュボードでプロジェクト作成
2. GitHubリポジトリを接続
3. ビルド設定:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
4. 継続的デプロイメント: mainブランチへのpushで自動デプロイ

## 開発進捗

### 完了済みフェーズ
1. ✅ **フェーズ1: 基本コンテンツの充実**
   - 実際のプロジェクト情報とスキル詳細を追加
   - プロフィール写真の配置とスタイリング
   - ソーシャルリンクの実装

2. ✅ **フェーズ2: デザイン基盤強化**
   - カードレイアウトの最適化（統一スタイル、flexbox高さ揃え）
   - タイポグラフィとフォントの最適化（日本語フォント、見出し階層）
   - カラーパレットの統一とコントラスト改善（カスタム背景色実装）

### 現在進行中
- **フェーズ8: デプロイ準備**
  - GitHubリポジトリへのプッシュ
  - Cloudflare Pagesへのデプロイ設定
  - カスタムドメインの設定

### 次の予定作業
1. フェーズ4: お問い合わせフォーム実装
2. セクション間の余白とレイアウト最適化
3. アニメーション・インタラクション追加

### 注意事項
- お問い合わせフォームは現在送信機能なし（要実装）

## 開発者情報

### ソーシャルメディア・プロフィール
- **GitHub**: https://github.com/masakiaota
- **Kaggle**: https://www.kaggle.com/masakiaota/competitions
- **はてなブログ**: https://aotamasaki.hatenablog.com/
- **LinkedIn**: www.linkedin.com/in/masaki-aota