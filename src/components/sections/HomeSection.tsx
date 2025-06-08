'use client';

import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

export default function HomeSection() {
  return (
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
            <div className="flex justify-center">
              <SocialLinks className="[&>a]:bg-slate-100 [&>a]:w-12 [&>a]:h-12 [&>a]:rounded-full [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:hover:bg-slate-200 [&>a]:text-slate-600 [&>a:hover]:text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}