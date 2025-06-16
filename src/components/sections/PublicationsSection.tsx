'use client';

import Card from '@/components/Card';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInVariants, staggerChildrenVariants } from '@/hooks/useScrollAnimation';

export default function PublicationsSection() {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation();

  return (
    <section id="publications" className="py-12 sm:py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            ref={titleRef}
            initial="hidden"
            animate={titleControls}
            variants={fadeInVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900"
          >
            私が登場する出版物
          </motion.h2>
          
          <motion.div 
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={staggerChildrenVariants}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div variants={fadeInVariants}>
              <Card
                title="謝辞掲載"
                footer={
                  <div className="flex flex-wrap gap-4">
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
                  }
                >
                <p className="text-lg text-slate-700 mb-2">
                  「PolarsとPandasで学ぶ データ処理アイデアレシピ55」
                </p>
                <p className="text-slate-600 mb-3">著者: 冨山 吉孝、早川 裕橹、齋藤 慎一朗</p>
                <p className="text-slate-700 mb-4">
                  本書の謝辞に掲載いただきました。データ処理に関する知見の共有や技術的なフィードバックを行いました。
                </p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInVariants}>
              <Card
                title="インタビュー掲載"
                footer={
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
                    }
                  >
                  <p className="text-lg text-slate-700 mb-2">
                    「目指せメダリスト！Kaggle実験管理術 着実にコンペで成果を出すためのノウハウ」
                  </p>
                  <p className="text-slate-600 mb-3">著者: 髙橋 正憲、篠田 裕之<br />協力: 坂本 龍士郎</p>
                  <p className="text-slate-700 mb-4">
                    Kaggleでの実験管理に関するインタビューが掲載されました。効率的な実験管理手法について語っています。
                  </p>
                </Card>
              </motion.div>
            
            <motion.div variants={fadeInVariants}>
              <Card
                title="ブログ引用"
                footer={
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
                    }
                  >
                  <p className="text-lg text-slate-700 mb-2">
                    「機械学習を解釈する技術〜予測力と説明力を両立する実践テクニック」
                  </p>
                  <p className="text-slate-600 mb-3">著者: 森下 光之助</p>
                  <p className="text-slate-700 mb-4">
                    執筆したブログ記事が本書で引用されました。機械学習モデルの解釈性に関する技術的な考察が参考文献として取り上げられています。
                  </p>
                </Card>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}