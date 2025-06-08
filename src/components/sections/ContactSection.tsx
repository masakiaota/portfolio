import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 leading-tight text-slate-900">お問い合わせ</h2>
        <ContactForm />
      </div>
    </section>
  );
}