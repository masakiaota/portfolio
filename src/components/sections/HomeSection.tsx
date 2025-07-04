'use client';

import SocialLinks from '@/components/SocialLinks';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

export default function HomeSection() {
  return (
    <section id="home" className="py-12 sm:py-16 md:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight"
            >
              Masaki Aota
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-700 leading-tight"
            >
              Machine Learning Engineer <br className="sm:hidden" />
              & Data Scientist
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed"
            >
              Kaggle Master | AtCoder水色
            </motion.p>
            
            <motion.div 
              variants={imageVariants}
              className="mb-6 sm:mb-8"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative overflow-hidden rounded-full">
                <picture>
                  <source
                    srcSet="/profile-48.webp 48w, /profile-96.webp 96w, /profile-192.webp 192w, /profile-384.webp 384w"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                    type="image/webp"
                  />
                  <img
                    src="/profile-192.jpg"
                    alt="Masaki Aota"
                    width={192}
                    height={192}
                    className="object-cover scale-150"
                  />
                </picture>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >
              <SocialLinks className="[&>a]:bg-slate-100 [&>a]:w-12 [&>a]:h-12 [&>a]:rounded-full [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:hover:bg-slate-200 [&>a]:text-slate-600 [&>a:hover]:text-slate-900" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}