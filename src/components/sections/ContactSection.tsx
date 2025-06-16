'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInVariants } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: formRef, controls: formControls } = useScrollAnimation();

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={fadeInVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900"
        >
          お問い合わせ
        </motion.h2>
        
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formControls}
          variants={fadeInVariants}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}