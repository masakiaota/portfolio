import Card from '@/components/Card';

export default function AboutSection() {
  return (
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
            <Card
              title="プログラミング言語"
              footer={<p className="text-sm text-slate-600">※ 業務に必要な言語はキャッチアップします。</p>}
            >
              <ul className="space-y-2 text-slate-700 mb-4">
                <li>• Python</li>
                <li>• SQL</li>
              </ul>
            </Card>

            <Card title="クラウドプラットフォーム">
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
            </Card>

            <Card title="機械学習フレームワーク">
              <ul className="space-y-2 text-slate-700">
                <li>• PyTorch/Transformers</li>
                <li>• Scikit-learn</li>
                <li>• OpenCV</li>
                <li>• Ultralytics</li>
                <li>• vLLM</li>
                <li>• Streamlit/Gradio</li>
              </ul>
            </Card>

            <Card title="データ処理ライブラリ">
              <ul className="space-y-2 text-slate-700">
                <li>• Pandas/Polars</li>
                <li>• NumPy</li>
                <li>• Matplotlib</li>
                <li>• Jupyter</li>
                <li>• wandb</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}