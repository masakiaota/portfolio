import Card from '@/components/Card';
import Tag from '@/components/Tag';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900">プロジェクト</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
            <ProjectCard
              title="サブスク事業の価値計算"
              description="生存分析や金融工学の手法を用いて事業価値を統計的・金融工学的に妥当な手法で算出。"
              tags={['Python', 'SQL', '生存分析', 'Dashboard']}
            />
            
            <ProjectCard
              title="ドメイン特化OCR機能開発"
              description="自社データに特化した高精度OCRエンジンを開発。プロダクションレベルのコード整備と高速化を実現。"
              tags={['Python', 'Cython', 'OpenCV', 'CircleCI']}
            />
            
            <ProjectCard
              title="画像圧縮最適化"
              description="画質を維持した圧縮率の最適化により年間数千万円規模のクラウド利用料削減を実現。"
              tags={['AWS Lambda', 'Python', 'wandb', '画像処理']}
            />
            
            <ProjectCard
              title="Deep Learning画像最適化"
              description="深層学習による画像処理でコスト削減可能性を実証。デモ用iOSアプリを作成し、ユーザー体験を損なわないことも検証。"
              tags={['PyTorch', 'ONNX', 'iOS']}
            />
            
            <ProjectCard
              title="画像データ前処理自動化"
              description="自社データに特化した深層学習モデルを作成。既製品より精度の高い前処理パイプラインを構築し、後段処理における人件費を削減。"
              tags={['Transformers', 'Ultralytics', 'Label Studio']}
            />
            
            <ProjectCard
              title="言語処理基盤の構築"
              description="自社の言語処理基盤を構築中。大規模言語モデルを活用したシステム開発に従事。"
              tags={['Python', 'Transformers', 'LLM']}
            />
            
            <ProjectCard
              title="AIコーディング文化の布教"
              description="自社チームにAIコーディング文化を布教。ちなみにこのサイトは100%自然言語指示によるAIコーディングで作成されている。"
              tags={['Cursor', 'GitHub Copilot', 'Claude Code']}
            />
            
            <Card
              title="政治資金収支報告書の情報抽出"
              footer={
                <div className="flex flex-wrap gap-2">
                  <Tag>OCR</Tag>
                  <Tag>LLM</Tag>
                  <Tag>Label Studio</Tag>
                </div>
              }
            >
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
            </Card>
            
            <ProjectCard
              title="自社プロダクト掲載の広告分析"
              description="広告の滞在率に影響する要素を分析、広告関係者へ知見を共有。"
              tags={['Python', 'Label Studio', 'Google Cloud Vision API']}
            />
            
            <Card
              title="データ分析コンペティション"
              footer={
                <div className="flex flex-wrap gap-2">
                  <Tag>Python</Tag>
                  <Tag>Transformers</Tag>
                  <Tag>wandb</Tag>
                </div>
              }
            >
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
            </Card>
            
            <ProjectCard
              title="競技プログラミング"
              description="半数以上のIT企業において、アルゴリズム能力についてはカンストと言える実力。AtCoder Algorithm: 水色 (最高: 1356)。Heuristicへ参加するタイミングを伺っている。"
              tags={['Python', 'Cython', 'NumPy', 'PyPy']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}