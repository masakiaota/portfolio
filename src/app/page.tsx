'use client';

import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section id="home" className="py-12 sm:py-16 md:py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Masaki Aota
              </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-700 leading-tight">
              Machine Learning Engineer & Data Scientist
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Kaggle Master | AtCoder水色
            </p>
            {/* プロフィール写真 */}
            <div className="mb-6 sm:mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative overflow-hidden rounded-full">
                <Image
                  src="/profile.JPG"
                  alt="Masaki Aota"
                  width={192}
                  height={192}
                  className="object-cover scale-150"
                />
              </div>
            </div>
            {/* ソーシャルアイコン */}
            <div className="flex justify-center">
              <SocialLinks className="[&>a]:bg-slate-100 [&>a]:w-12 [&>a]:h-12 [&>a]:rounded-full [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:hover:bg-slate-200 [&>a]:text-slate-600 [&>a:hover]:text-slate-900" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900">自己紹介</h2>
            <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
              早稲田大学大学院卒業後、2021年より大手メディア企業で機械学習エンジニア・データサイエンティストとして活動しています。
              生存分析、ABテスト、画像処理、自然言語処理など幅広い分野での業務経験があります。
            </p>
            <p className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed">
              研究開発部署ではPoCに従事し、新機能の実装や年間数千万円規模のコスト削減を達成。
              現在はB2B事業部署で、自然言語処理を活用したシステム開発に携わっています。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">プログラミング言語</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Python</li>
                    <li>• SQL</li>
                  </ul>
                </div>
                <p className="text-sm text-slate-600 mt-auto pt-3">※ 業務に必要な言語はキャッチアップします。</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">クラウドプラットフォーム</h3>
                  <ul className="space-y-2 text-slate-700">
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
                <div className="mt-auto pt-3"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">機械学習フレームワーク</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• PyTorch/Transformers</li>
                    <li>• Scikit-learn</li>
                    <li>• OpenCV</li>
                    <li>• Ultralytics</li>
                    <li>• vLLM</li>
                    <li>• Streamlit/Gradio</li>
                  </ul>
                </div>
                <div className="mt-auto pt-3"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">データ処理ライブラリ</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Pandas/Polars</li>
                    <li>• NumPy</li>
                    <li>• Matplotlib</li>
                    <li>• Jupyter</li>
                    <li>• wandb</li>
                  </ul>
                </div>
                <div className="mt-auto pt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900">プロジェクト</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">サブスク事業の価値計算</h3>
                <p className="text-slate-700 mb-4">
                  生存分析や金融工学の手法を用いて事業価値を統計的・金融工学的に妥当な手法で算出。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">生存分析</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Dashboard</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">ドメイン特化OCR機能開発</h3>
                <p className="text-slate-700 mb-4">
                  自社データに特化した高精度OCRエンジンを開発。プロダクションレベルのコード整備と高速化を実現。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Cython</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">OpenCV</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">CircleCI</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">画像圧縮最適化</h3>
                <p className="text-slate-700 mb-4">
                  画質を維持した圧縮率の最適化により年間数千万円規模のクラウド利用料削減を実現。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">AWS Lambda</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">wandb</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">画像処理</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Deep Learning画像最適化</h3>
                <p className="text-slate-700 mb-4">
                  深層学習による画像処理でコスト削減可能性を実証。デモ用iOSアプリを作成し、ユーザー体験を損なわないことも検証。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PyTorch</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">ONNX</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">iOS</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">画像データ前処理自動化</h3>
                <p className="text-slate-700 mb-4">
                  自社データに特化した深層学習モデルを作成。既製品より精度の高い前処理パイプラインを構築し、後段処理における人件費を削減。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Transformers</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Ultralytics</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Label Studio</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">言語処理基盤の構築</h3>
                <p className="text-slate-700 mb-4">
                  自社の言語処理基盤を構築中。大規模言語モデルを活用したシステム開発に従事。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Transformers</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">LLM</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">AIコーディング文化の布教</h3>
                <p className="text-slate-700 mb-4">
                  自社チームにAIコーディング文化を布教。ちなみにこのサイトは100%自然言語指示によるAIコーディングで作成されている。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Cursor</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">GitHub Copilot</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Claude Code</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">政治資金収支報告書の情報抽出</h3>
                <div className="text-slate-700 mb-4">
                  OCRやLLMを活用した政治資金収支報告書からの情報抽出システムを開発。
                  <span className="text-blue-600 underline decoration-dotted cursor-help relative inline-block group ml-1 pb-1">
                    学会発表・論文投稿を実施
                    <span className="absolute left-0 top-full -mt-1 w-80 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto">
                      <span className="block space-y-2">
                        <a 
                          href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2023/0/JSAI2023_2H1OS3a01/_article/-char/ja/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-300 hover:text-blue-100 transition"
                        >
                          • JSAI2023論文
                        </a>
                        <a 
                          href="https://www.jaesnet.org/archives/report-archives/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-300 hover:text-blue-100 transition"
                        >
                          • 選挙学会発表
                        </a>
                      </span>
                    </span>
                  </span>。
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">OCR</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">LLM</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Label Studio</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">自社プロダクト掲載の広告分析</h3>
                <p className="text-slate-700 mb-4">
                  広告の滞在率に影響する要素を分析、広告関係者へ知見を共有。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Label Studio</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Google Cloud Vision API</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">データ分析コンペティション</h3>
                <div className="text-slate-700 mb-4">
                  Kaggleを中心とした機械学習コンペティションで
                  <span className="text-blue-600 underline decoration-dotted cursor-help relative inline-block group mx-1 pb-1">
                    複数回入賞
                    <span className="absolute left-0 top-full -mt-1 w-96 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto">
                      <span className="block space-y-2">
                        <span className="block">
                          • Kaggle <a 
                            href="https://www.kaggle.com/competitions/us-patent-phrase-to-phrase-matching"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-100 transition"
                          >U.S. Patent Phrase to Phrase Matching</a>: 金メダル (8位)
                        </span>
                        <span className="block">
                          • Kaggle <a 
                            href="https://www.kaggle.com/competitions/feedback-prize-english-language-learning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-100 transition"
                          >Feedback Prize - English Language Learning</a>: 金メダル (15位)
                        </span>
                        <span className="block">
                          • Solafune <a 
                            href="https://solafune.com/ja/competitions/7a1fc5e3-49bd-4ec1-8378-974951398c98?menu=about&tab=overview&modal=%22%22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-100 transition"
                          >衛星画像の5倍超解像度化 (for OSS)</a>: 優勝 (1位)
                        </span>
                        <span className="block">
                          • MUANA <a 
                            href="https://muana.connpass.com/event/287406/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-100 transition"
                          >AIミュージックバトル！『弁財天〜第二幕〜』</a>: 準優勝 (2位)
                        </span>
                      </span>
                    </span>
                  </span>。深層学習を用いた自然言語・画像処理分野で実績。
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Transformers</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">wandb</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">競技プログラミング</h3>
                <p className="text-slate-700 mb-4">
                  半数以上のIT企業において、アルゴリズム能力についてはカンストと言える実力。AtCoder Algorithm: 水色 (最高: 1356)。Heuristicへ参加するタイミングを伺っている。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Cython</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">NumPy</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PyPy</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 私が登場する出版物セクション */}
      <section id="publications" className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900">私が登場する出版物</h2>
            <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">謝辞掲載</h3>
                <p className="text-lg text-slate-700 mb-2">
                  「PolarsとPandasで学ぶ データ処理アイデアレシピ55」
                </p>
                <p className="text-slate-600 mb-3">著者: 冨山 吉孝、早川 裕橹、齋藤 慎一朗</p>
                <p className="text-slate-700 mb-4">
                  本書の謝辞に掲載いただきました。データ処理に関する知見の共有や技術的なフィードバックを行いました。
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href="https://bookclub.kodansha.co.jp/product?item=0000398238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition"
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition"
                >
                  Amazonで見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">インタビュー掲載</h3>
              <p className="text-lg text-slate-700 mb-2">
                「目指せメダリスト！Kaggle実験管理術 着実にコンペで成果を出すためのノウハウ」
              </p>
              <p className="text-slate-600 mb-3">著者: 髙橋 正憲、篠田 裕之<br />協力: 坂本 龍士郎</p>
              <p className="text-slate-700 mb-4">
                Kaggleでの実験管理に関するインタビューが掲載されました。効率的な実験管理手法について語っています。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.shoeisha.co.jp/book/detail/9784798187464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition"
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition"
                >
                  Amazonで見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">ブログ引用</h3>
              <p className="text-lg text-slate-700 mb-2">
                「機械学習を解釈する技術〜予測力と説明力を両立する実践テクニック」
              </p>
              <p className="text-slate-600 mb-3">著者: 森下 光之助</p>
              <p className="text-slate-700 mb-4">
                執筆したブログ記事が本書で引用されました。機械学習モデルの解釈性に関する技術的な考察が参考文献として取り上げられています。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://gihyo.jp/book/2021/978-4-297-12226-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition"
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition"
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
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900">お問い合わせ</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}