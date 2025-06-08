# Masaki Aota Portfolio

機械学習エンジニア・データサイエンティストのポートフォリオサイト

🌐 **公開URL**: https://masakiaota.pages.dev/

## 概要

このプロジェクトは、機械学習エンジニアとしての経歴、スキル、プロジェクト実績、出版物などを紹介するポートフォリオサイトです。Next.js 15とTailwind CSS v4を使用した高速でレスポンシブなシングルページアプリケーションとして構築されています。

### 主な特徴

- 📱 レスポンシブデザイン対応
- ⚡ Turbopackによる高速開発環境
- 🎨 Tailwind CSS v4による洗練されたUI
- 📧 EmailJS統合によるお問い合わせフォーム
- 🔍 SEO最適化（メタタグ、OGP、Twitter Cards対応）
- 🖼️ WebP形式による画像最適化
- 🌏 日本語タイポグラフィ最適化

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) 15.3.3 (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/) 5
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI**: [React](https://react.dev/) 19
- **メール送信**: [EmailJS](https://www.emailjs.com/)
- **ホスティング**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **フォント**: Geist Sans/Mono（日本語フォント最適化済み）

## プロジェクト構成

```
src/
├── app/
│   ├── page.tsx           # メインページ（全セクション統合）
│   ├── layout.tsx         # ルートレイアウト + メタデータ設定
│   ├── globals.css        # グローバルスタイル
│   └── favicon.ico
├── components/
│   ├── sections/          # 各セクションコンポーネント
│   │   ├── HomeSection.tsx        # ヒーローセクション
│   │   ├── AboutSection.tsx       # 自己紹介・スキル
│   │   ├── ProjectsSection.tsx    # プロジェクト一覧
│   │   ├── PublicationsSection.tsx # 出版物
│   │   └── ContactSection.tsx     # お問い合わせ
│   ├── Header.tsx         # スティッキーヘッダー
│   ├── Footer.tsx         # フッター
│   ├── ContactForm.tsx    # お問い合わせフォーム
│   └── その他UIコンポーネント
public/
├── profile*.webp          # プロフィール画像（複数サイズ）
└── favicon関連ファイル
```

## セットアップ

### 前提条件

- Node.js 18以降
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/masakiaota/portfolio.git
cd portfolio

# 依存関係のインストール
npm install
```

### 環境変数の設定

お問い合わせフォーム機能を使用する場合は、以下の環境変数を`.env.local`に設定してください：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 開発

```bash
# 開発サーバーの起動（Turbopack使用）
npm run dev
```

http://localhost:3000 でアプリケーションが起動します。

### コマンド

```bash
# 本番ビルド（静的サイト生成）
npm run build

# 本番サーバーの起動
npm run start

# コード品質チェック
npm run lint
```

## デプロイ

このサイトはCloudflare Pagesでホスティングされています。mainブランチへのプッシュで自動デプロイが実行されます。


## カスタマイズ

### セクションの編集

各セクションは`src/components/sections/`内の独立したコンポーネントとして実装されています：

- `HomeSection.tsx`: プロフィール写真、肩書き、ソーシャルリンク
- `AboutSection.tsx`: 自己紹介文、スキルカード
- `ProjectsSection.tsx`: プロジェクト実績（12項目）
- `PublicationsSection.tsx`: 出版物・書籍
- `ContactSection.tsx`: お問い合わせフォーム

## トラブルシューティング

### ビルドエラーが発生する場合

```bash
# node_modulesとキャッシュをクリア
rm -rf node_modules .next
npm install
npm run build
```

### EmailJSが動作しない場合

1. 環境変数が正しく設定されているか確認
2. EmailJSダッシュボードでサービスが有効になっているか確認
3. ブラウザのコンソールでエラーを確認

## ライセンス

このプロジェクトは個人のポートフォリオサイトです。コードの参照は自由ですが、コンテンツ（テキスト、画像、個人情報）の無断使用はご遠慮ください。

## 作者

**Masaki Aota**

- 🌐 Website: https://masakiaota.pages.dev/
- 💻 GitHub: [@masakiaota](https://github.com/masakiaota)
- 🏆 Kaggle: [@masakiaota](https://www.kaggle.com/masakiaota)
- 📝 Blog: [はてなブログ](https://aotamasaki.hatenablog.com/)
- 💼 LinkedIn: [Masaki Aota](https://www.linkedin.com/in/masaki-aota)

---
