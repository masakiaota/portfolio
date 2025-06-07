'use client';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-black">
              Masaki Aota
            </h1>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Machine Learning Engineer & Data Scientist
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Kaggle Master | AtCoder水色
            </p>
            {/* プロフィール写真のダミー */}
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">写真</span>
              </div>
            </div>
            {/* ソーシャルアイコン */}
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/masakiaota" className="text-gray-600 hover:text-gray-900 transition group relative" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a href="https://www.kaggle.com/masakiaota/competitions" className="text-gray-600 hover:text-gray-900 transition group relative" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Kaggle
                </span>
              </a>
              <a href="https://aotamasaki.hatenablog.com/" className="text-gray-600 hover:text-gray-900 transition group relative" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 300 300" fill="currentColor">
                    <path d="M149.999 248.909c-54.537 0-98.906-44.367-98.906-98.909 0-54.537 44.369-98.909 98.906-98.909 54.545 0 98.908 44.372 98.908 98.909 0 54.542-44.363 98.909-98.908 98.909zm0-185.238c-47.601 0-86.33 38.723-86.33 86.329 0 47.605 38.729 86.332 86.33 86.332 47.61 0 86.338-38.727 86.338-86.332 0-47.606-38.728-86.329-86.338-86.329zM161.52 101.16c-4.832-9.785-7.783-19.3-9.273-24.845v70.055c2.447.917 4.197 3.257 4.197 6.021 0 3.559-2.887 6.442-6.443 6.442-3.56 0-6.443-2.885-6.443-6.442 0-2.896 1.925-5.317 4.558-6.131v-70.019c-1.485 5.531-4.438 15.092-9.293 24.919-7.571 15.314-17.009 28.823-17.009 28.823l6.036 82.598s5.736 6.401 22.31 6.41h.023c16.573-.009 22.312-6.41 22.312-6.41l6.035-82.598c-.003 0-9.441-13.508-17.01-28.823z"/>
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  はてなブログ
                </span>
              </a>
              <a href="https://www.linkedin.com/in/masaki-aota" className="text-gray-600 hover:text-gray-900 transition group relative" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">自己紹介</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              早稲田大学大学院卒業後、2021年より大手メディア企業で機械学習エンジニア・データサイエンティストとして活動しています。
              生存分析、LTV計算、画像処理、自然言語処理など幅広い分野での業務経験があります。
            </p>
            <p className="text-lg text-gray-700 mb-8">
              研究開発部署ではPoCに従事し、新機能の実装や年間数千万円規模のコスト削減を達成。
              現在はB2B事業部署で、自然言語処理を活用したシステム開発に携わっています。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">プログラミング言語</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Python</li>
                  <li>• SQL</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">※ 業務に必要な言語はキャッチアップします。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">クラウドプラットフォーム</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google Cloud Platform
                    <ul className="ml-4 mt-1">
                      <li className="text-sm">- Professional Data Engineer</li>
                    </ul>
                  </li>
                  <li>• AWS
                    <ul className="ml-4 mt-1">
                      <li className="text-sm">- Solutions Architect Associate</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">機械学習フレームワーク</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• PyTorch/Transformers</li>
                  <li>• Scikit-learn</li>
                  <li>• OpenCV</li>
                  <li>• Ultralytics</li>
                  <li>• vLLM</li>
                  <li>• Streamlit/Gradio</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">データ処理ライブラリ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pandas/Polars</li>
                  <li>• NumPy</li>
                  <li>• Matplotlib</li>
                  <li>• Jupyter</li>
                  <li>• wandb</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">プロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">サブスク事業の価値計算</h3>
              <p className="text-gray-700 mb-4">
                生存分析や金融工学の手法を用いて事業価値を統計的・金融工学的に妥当な手法で算出。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQL</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">生存分析</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Dashboard</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">ドメイン特化OCR機能開発</h3>
              <p className="text-gray-700 mb-4">
                自社データに特化した高精度OCRエンジンを開発。プロダクションレベルのコード整備と高速化を実現。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cython</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OpenCV</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CircleCI</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">画像圧縮最適化</h3>
              <p className="text-gray-700 mb-4">
                画質を維持した圧縮率の最適化により年間数千万円規模のクラウド利用料削減を実現。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS Lambda</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">wandb</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">画像処理</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Deep Learning画像最適化</h3>
              <p className="text-gray-700 mb-4">
                深層学習による画像処理でコスト削減可能性を実証。デモ用iOSアプリを作成し、ユーザー体験を損なわないことも検証。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ONNX</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">iOS</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">画像データ前処理自動化</h3>
              <p className="text-gray-700 mb-4">
                自社データに特化した深層学習モデルを作成。既製品より精度の高い前処理パイプラインを構築し、後段処理における人件費を削減。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Transformers</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Ultralytics</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Label Studio</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">言語処理基盤の構築</h3>
              <p className="text-gray-700 mb-4">
                自社の言語処理基盤を構築中。大規模言語モデルを活用したシステム開発に従事。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Transformers</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LLM</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">AIコーディング文化の布教</h3>
              <p className="text-gray-700 mb-4">
                自社チームにAIコーディング文化を布教。ちなみにこのサイトは100%自然言語指示によるAIコーディングで作成されている。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cursor</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GitHub Copilot</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Claude Code</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">政治資金収支報告書の情報抽出</h3>
              <p className="text-gray-700 mb-4">
                OCRやLLMを活用した政治資金収支報告書からの情報抽出システムを開発。
                <span className="text-blue-600 underline decoration-dotted cursor-help relative group ml-1">
                  学会発表・論文投稿を実施
                  <div className="absolute left-0 top-6 w-80 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="space-y-2">
                      <a 
                        href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2023/0/JSAI2023_2H1OS3a01/_article/-char/ja/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-300 hover:text-blue-100 transition pointer-events-auto"
                      >
                        • JSAI2023論文
                      </a>
                      <a 
                        href="https://www.jaesnet.org/archives/report-archives/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-300 hover:text-blue-100 transition pointer-events-auto"
                      >
                        • 選挙学会発表
                      </a>
                    </div>
                  </div>
                </span>。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OCR</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LLM</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Label Studio</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">自社プロダクト掲載の広告分析</h3>
              <p className="text-gray-700 mb-4">
                広告の滞在率に影響する要素を分析、広告関係者へ知見を共有。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Label Studio</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Google Cloud Vision API</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">データ分析コンペティション</h3>
              <p className="text-gray-700 mb-4">
                Kaggleを中心とした機械学習コンペティションで
                <span className="text-blue-600 underline decoration-dotted cursor-help relative group mx-1">
                  複数回入賞
                  <div className="absolute left-0 top-6 w-96 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="space-y-1">
                      <p>• Kaggle U.S. Patent Phrase Matching: 金メダル (8位)</p>
                      <p>• Kaggle Feedback Prize - ELL: 金メダル (15位)</p>
                      <p>• Solafune 衛星画像超解像度化: 優勝 (1位)</p>
                    </div>
                  </div>
                </span>。深層学習を用いた自然言語・画像処理分野で実績。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Transformers</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">wandb</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">競技プログラミング</h3>
              <p className="text-gray-700 mb-4">
                半数以上のIT企業において、アルゴリズム能力についてはカンストと言える実力。AtCoder Algorithm: 水色 (最高: 1356)。Huristicへ参加するタイミングを伺っている。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cython</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NumPy</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PyPy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私が登場する出版物セクション */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">私が登場する出版物</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">謝辞掲載</h3>
              <p className="text-lg text-gray-700 mb-2">
                「PolarsとPandasで学ぶ データ処理アイデアレシピ55」
              </p>
              <p className="text-gray-600 mb-3">著者: 冨山 吉孝、早川 裕樹、齋藤 慎一朗</p>
              <p className="text-gray-700 mb-4">
                本書の謝辞に掲載いただきました。データ処理に関する知見の共有や技術的なフィードバックを行いました。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://bookclub.kodansha.co.jp/product?item=0000398238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  公式サイト
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.amazon.co.jp/Polars%E3%81%A8pandas%E3%81%A7%E5%AD%A6%E3%81%B6-%E3%83%87%E3%83%BC%E3%82%BF%E5%87%A6%E7%90%86%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%83%AC%E3%82%B7%E3%83%9455-KS%E6%83%85%E5%A0%B1%E7%A7%91%E5%AD%A6%E5%B0%82%E9%96%80%E6%9B%B8-%E5%86%A8%E5%B1%B1-%E5%90%89%E5%AD%9D/dp/4065369800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  Amazonで見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">インタビュー掲載</h3>
              <p className="text-lg text-gray-700 mb-2">
                「目指せメダリスト！Kaggle実験管理術 着実にコンペで成果を出すためのノウハウ」
              </p>
              <p className="text-gray-600 mb-3">著者: 髙橋 正憲、篠田 裕之<br />協力: 坂本 龍士郎</p>
              <p className="text-gray-700 mb-4">
                Kaggleでの実験管理に関するインタビューが掲載されました。効率的な実験管理手法について語っています。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.shoeisha.co.jp/book/detail/9784798187464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  公式サイト
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.amazon.co.jp/%E7%9B%AE%E6%8C%87%E3%81%9B%E3%83%A1%E3%83%80%E3%83%AA%E3%82%B9%E3%83%88%EF%BC%81Kaggle%E5%AE%9F%E9%A8%93%E7%AE%A1%E7%90%86%E8%A1%93-%E7%9D%80%E5%AE%9F%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%9A%E3%81%A7%E6%88%90%E6%9E%9C%E3%82%92%E5%87%BA%E3%81%99%E3%81%9F%E3%82%81%E3%81%AE%E3%83%8E%E3%82%A6%E3%83%8F%E3%82%A6-%E9%AB%98%E6%A9%8B-%E6%AD%A3%E6%86%B2/dp/4798187453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  Amazonで見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">ブログ引用</h3>
              <p className="text-lg text-gray-700 mb-2">
                「機械学習を解釈する技術〜予測力と説明力を両立する実践テクニック」
              </p>
              <p className="text-gray-600 mb-3">著者: 森下 光之助</p>
              <p className="text-gray-700 mb-4">
                執筆したブログ記事が本書で引用されました。機械学習モデルの解釈性に関する技術的な考察が参考文献として取り上げられています。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://gihyo.jp/book/2021/978-4-297-12226-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  公式サイト
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.amazon.co.jp/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%82%92%E8%A7%A3%E9%87%88%E3%81%99%E3%82%8B%E6%8A%80%E8%A1%93%E3%80%9C%E4%BA%88%E6%B8%AC%E5%8A%9B%E3%81%A8%E8%AA%AC%E6%98%8E%E5%8A%9B%E3%82%92%E4%B8%A1%E7%AB%8B%E3%81%99%E3%82%8B%E5%AE%9F%E8%B7%B5%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-%E6%A3%AE%E4%B8%8B-%E5%85%89%E4%B9%8B%E5%8A%A9/dp/429712226X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  Amazonで見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-3 rounded-md hover:bg-[#002244] transition font-medium"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}