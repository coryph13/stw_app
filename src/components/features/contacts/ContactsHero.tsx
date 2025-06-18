// src/components/contacts/ContactsHero.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function ContactsHero() {
  const t = useTranslations('contacts');

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}