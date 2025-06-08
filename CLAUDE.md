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
- **シングルページアプリケーション**: セクション別コンポーネントを`src/app/page.tsx`で統合
- **スムーズスクロールナビゲーション**: アンカーリンクによるセクション間移動
- **レスポンシブデザイン**: Tailwind CSSによるモバイル対応

### ディレクトリ構造
```
src/
├── app/
│   ├── page.tsx      # メインページ（セクションコンポーネント統合）
│   ├── layout.tsx    # ルートレイアウト
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

### 主要セクション構成
1. **Home** (#home): ヒーローセクション、プロフィール写真、ソーシャルリンク
2. **About** (#about): 自己紹介、スキルセット（4つのカード形式）
3. **Projects** (#projects): プロジェクト一覧（12のプロジェクト、カードグリッド表示）
4. **Publications** (#publications): 出版物・登場書籍（3つの出版物）
5. **Contact** (#contact): お問い合わせフォーム（EmailJS実装済み）

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
git commit -m "コミットメッセージ"
git push origin main
```
**リポジトリURL**: https://github.com/masakiaota/portfolio

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

### 完了済みフェーズ（続き）
3. ✅ **フェーズ8: デプロイ準備**
   - GitHubリポジトリへのプッシュ（SSH認証設定）
   - Cloudflare Pagesへのデプロイ設定（Static Export対応）
   - **公開URL**: https://masakiaota.pages.dev/

4. ✅ **フェーズ4: 機能拡張**
   - お問い合わせフォーム実装（EmailJS）
   - メール送信機能（aotamasakimail+fromportfolio@gmail.com）
   - フォームバリデーションと送信状態管理

5. ✅ **フェーズ5: コンポーネント分割・保守性向上**
   - 巨大な`page.tsx`を各セクション別コンポーネントに分割
   - `src/components/sections/`ディレクトリでの管理
   - コンポーネントベースの構造による保守性向上

6. ✅ **フェーズ6: favicon作成**
   - 複数サイズのfavicon生成（16px, 32px, 48px, 192px, 512px）
   - manifest.json対応
   - Apple Touch Icon対応

7. ✅ **フェーズ7: プロフィール画像最適化**
   - WebP形式への変換によるファイルサイズ98%削減
   - 複数サイズ対応（48px, 96px, 192px, 384px）
   - パフォーマンス向上

### 次の予定作業（優先度順）

#### 優先度：高（すぐにやるべき）
1. **基本的なメタタグ拡張** - SEO基盤、OGP対応

#### 優先度：中（できればやりたい）
2. **英語版対応** - 国際展開を考えるなら重要、i18n実装
3. **sitemap.xml生成** - SEO向上、Next.jsで自動生成可能
4. **robots.txt作成** - SEO基盤
5. **Twitter Cards対応** - ソーシャル共有時の見栄え

#### 優先度：低（時間があれば）
6. **構造化データ(JSON-LD)実装** - 高度なSEO、時間がかかる

## 開発者情報

### ソーシャルメディア・プロフィール
- **GitHub**: https://github.com/masakiaota
- **Kaggle**: https://www.kaggle.com/masakiaota/competitions
- **はてなブログ**: https://aotamasaki.hatenablog.com/
- **LinkedIn**: www.linkedin.com/in/masaki-aota

### Memories
- ヘッダーの色はお気に入りなので変更しない