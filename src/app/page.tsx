'use client';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-black">
              機械学習エンジニア
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              AIとデータサイエンスで課題を解決
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-[#003366] text-white px-8 py-3 rounded-md hover:bg-[#002244] transition font-medium"
              >
                プロジェクトを見る
              </a>
              <a
                href="#contact"
                className="border border-[#003366] text-[#003366] px-8 py-3 rounded-md hover:bg-gray-50 transition font-medium"
              >
                お問い合わせ
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
            <p className="text-lg text-gray-700 mb-8">
              機械学習エンジニアとして、データから価値を創造することに情熱を注いでいます。
              画像認識、自然言語処理、時系列予測など、幅広い分野での実務経験があります。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">プログラミング言語</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Python</li>
                  <li>• R</li>
                  <li>• SQL</li>
                  <li>• JavaScript/TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">機械学習フレームワーク</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• TensorFlow</li>
                  <li>• PyTorch</li>
                  <li>• scikit-learn</li>
                  <li>• Keras</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">データ処理ツール</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pandas</li>
                  <li>• NumPy</li>
                  <li>• Apache Spark</li>
                  <li>• Jupyter</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">クラウドプラットフォーム</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• AWS</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Azure</li>
                  <li>• Docker/Kubernetes</li>
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
              <h3 className="text-xl font-semibold mb-3">画像分類システム</h3>
              <p className="text-gray-700 mb-4">
                深層学習を用いた高精度な画像分類システムの開発。製造業の品質検査に応用。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CNN</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
              <p className="text-sm text-gray-600">精度: 98.5%</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">需要予測モデル</h3>
              <p className="text-gray-700 mb-4">
                時系列データを活用した小売業向け需要予測システム。在庫最適化に貢献。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LSTM</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Prophet</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
              <p className="text-sm text-gray-600">精度: 92.3%</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">自然言語処理API</h3>
              <p className="text-gray-700 mb-4">
                BERTを活用した感情分析APIの開発。カスタマーサポートの効率化を実現。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">BERT</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
              </div>
              <p className="text-sm text-gray-600">精度: 89.7%</p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-gray-50">
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
            <div className="mt-8 text-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}