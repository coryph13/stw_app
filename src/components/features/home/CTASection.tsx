// src/components/home/CTASection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IoCall, IoMail } from 'react-icons/io5';

export default function CTASection() {
  const t = useTranslations('home.cta');

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-accent text-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105"
            >
              {t('getConsultation')}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-accent transition-all"
            >
              {t('viewCatalog')}
            </Link>
          </div>
          
          {/* Контактная информация */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
            <a 
              href="tel:+998711234567" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IoCall size={20} />
              <span>+998 71 123 45 67</span>
            </a>
            <a 
              href="mailto:info@stw.uz" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IoMail size={20} />
              <span>info@stw.uz</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}