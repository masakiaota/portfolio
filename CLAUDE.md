# Next.js ポートフォリオサイト開発計画

## プロジェクト概要
- **目的**: 機械学習エンジニアとしてのポートフォリオサイト作成
- **技術スタック**: Next.js (React), TypeScript推奨
- **ホスティング**: Cloudflare Pages
- **ソース管理**: GitHub
- **開発環境**: MacBook Air (M3)

## 開発環境の確認結果
- **Node.js**: v24.1.0 ✅ (インストール済み)
- **npm**: 11.3.0 ✅ (インストール済み)
- **Git**: 2.39.5 (Apple Git-154) ✅ (インストール済み)
- **yarn**: ❌ (未インストール - npmで代用可能)
- **エディタ**: Cursor (VSCodeの代わりに使用)

## 開発ステップ

### 1. 開発環境のセットアップ
#### 必要なツール
- **Node.js** (v18以上推奨): JavaScriptランタイム
- **npm/yarn**: パッケージマネージャー
- **Cursor**: コードエディタ（VSCodeベースのAI統合エディタ）
- **Git**: バージョン管理

#### インストール確認コマンド
```bash
node --version
npm --version
git --version
```

### 2. Next.jsプロジェクトの初期化
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
```

推奨オプション:
- TypeScript: Yes （型安全性のため）
- ESLint: Yes （コード品質チェック）
- Tailwind CSS: Yes （簡単なスタイリング）
- src/ directory: Yes （構造整理）
- App Router: Yes （最新の機能）

### 3. 基本的なページ構造
```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # ホームページ
│   │   ├── about/
│   │   │   └── page.tsx      # 自己紹介
│   │   ├── projects/
│   │   │   └── page.tsx      # プロジェクト一覧
│   │   └── contact/
│   │       └── page.tsx      # 連絡先
│   └── components/
│       ├── Header.tsx        # ナビゲーション
│       └── Footer.tsx        # フッター
```

### 4. 機械学習エンジニア向けの機能
#### 実装推奨項目
1. **プロジェクトショーケース**
   - 機械学習プロジェクトの説明
   - 使用技術（Python, TensorFlow, PyTorch等）
   - 成果・精度の可視化
   - GitHubリンク

2. **スキルセクション**
   - プログラミング言語
   - MLフレームワーク
   - データ処理ツール
   - クラウドプラットフォーム

3. **ブログ/記事セクション** （オプション）
   - 技術的な知見の共有
   - プロジェクトの詳細説明

### 5. デザインのポイント
- **シンプルで読みやすいレイアウト**
- **ダークモード対応**（技術者に人気）
- **レスポンシブデザイン**（モバイル対応）
- **パフォーマンス重視**（高速表示）

### 6. GitHub連携
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 7. Cloudflare Pages設定
1. Cloudflareダッシュボードでプロジェクト作成
2. GitHubリポジトリを接続
3. ビルド設定:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`

### 8. 継続的デプロイメント
- mainブランチへのpushで自動デプロイ
- プレビューURLでテスト確認

## 開発のヒント

### ウェブ開発初心者向けアドバイス
1. **コンポーネント思考**: UIを小さな部品に分割
2. **状態管理**: ReactのuseStateから始める
3. **CSS**: Tailwind CSSのユーティリティクラスを活用
4. **デバッグ**: ブラウザの開発者ツールを活用

### よくある課題と解決策
- **レイアウト崩れ**: Flexbox/Gridを学習
- **パフォーマンス**: Next.jsのImage最適化を活用
- **SEO**: メタタグとOGP設定

## 参考リソース
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

## 次のステップ
1. 開発環境の確認
2. `npx create-next-app`でプロジェクト作成
3. 基本的なページ作成から開始

## 開発進捗（2025/1/5）

### 完了済みタスク
1. ✅ 開発環境のセットアップ確認
2. ✅ Next.jsプロジェクトの初期化（TypeScript、Tailwind CSS、ESLint設定済み）
3. ✅ 基本的なページ構造の作成
   - Header.tsx、Footer.tsx作成
   - ホームページ実装
   - 自己紹介ページ実装
   - プロジェクト一覧ページ実装（サンプル3件）
   - お問い合わせページ実装

## 開発進捗（2025/1/6）

### 完了済みタスク
1. ✅ シングルページレイアウトへの変更
   - すべてのコンテンツを1ページに統合（Home、About、Projects、Contact）
   - 個別ページファイルを削除
2. ✅ スムーズスクロールナビゲーションの実装
   - ヘッダーのリンクをアンカーリンクに変更
   - スムーズスクロール動作を追加
3. ✅ デザインの改善
   - 各セクションに異なる背景色を適用（視覚的な区切り）
   - ヘッダーをスティッキーに変更
   - フッターに青みがかったグレーのグラデーション（slate-100 to slate-300）
4. ✅ SocialLinksコンポーネントの作成
   - GitHub、LinkedIn、はてなブログ、Kaggleのリンク（要URL更新）
5. ✅ ビルドの成功確認
   - TypeScriptエラーの修正
   - 本番ビルド（`npm run build`）の成功

### 現在の状態
- 開発サーバー起動コマンド: `npm run dev`
- 本番ビルド: `npm run build`
- 本番サーバー起動: `npm run start`
- アクセスURL: http://localhost:3000
- シングルページレイアウトで基本構造完成

### 次回の作業予定
1. デザインの更なる改善
   - レスポンシブデザインの強化（モバイル対応）
   - アニメーションの追加
   - フォントやタイポグラフィの調整
2. コンテンツの充実
   - 実際のプロジェクト情報の追加
   - スキルセクションの詳細化
   - プロフィール写真の追加
3. 機能の追加
   - お問い合わせフォームの実装（メール送信機能）
   - ダークモード対応
   - 多言語対応（日本語/英語）
4. デプロイ準備
   - GitHubリポジトリへのプッシュ
   - Cloudflare Pagesへのデプロイ設定
   - カスタムドメインの設定

### 注意事項
- SocialLinksコンポーネントのURLは仮のもの（要更新）
- お問い合わせフォームは現在送信機能なし（要実装）
- レスポンシブデザインは基本的なものだけ（要強化）

## 開発者情報（2025/1/7）

### ソーシャルメディア・プロフィール
- **GitHub**: https://github.com/masakiaota
- **Kaggle**: https://www.kaggle.com/masakiaota/competitions
- **はてなブログ**: https://aotamasaki.hatenablog.com/
- **LinkedIn**: www.linkedin.com/in/masaki-aota