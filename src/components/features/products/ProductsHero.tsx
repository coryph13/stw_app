// src/components/products/ProductsHero.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function ProductsHero() {
  const t = useTranslations('products');

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}