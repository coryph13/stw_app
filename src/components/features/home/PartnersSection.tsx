// src/components/home/PartnersSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'Kronospan', logo: '/logos/kronospan.png' },
  { id: 2, name: 'Egger', logo: '/logos/egger.png' },
  { id: 3, name: 'Kastamonu', logo: '/logos/kastamonu.png' },
  { id: 4, name: 'Swiss Krono', logo: '/logos/swiss-krono.png' },
  { id: 5, name: 'AGT', logo: '/logos/agt.png' },
  { id: 6, name: 'Starwood', logo: '/logos/starwood.png' },
];

export default function PartnersSection() {
  const t = useTranslations('home.partners');

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Бегущая строка с партнерами */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Дублируем массив для бесшовной анимации */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 px-8"
              >
                <div className="bg-background rounded-lg p-8 h-32 w-48 flex items-center justify-center hover:shadow-lg transition-shadow">
                  {/* Заглушка вместо лого */}
                  <span className="text-2xl font-bold text-gray">{partner.name}</span>
                  {/* Когда будут реальные логотипы:
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Статистика о партнерстве */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <p className="text-text-muted">{t('stats.brands')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">5</div>
            <p className="text-text-muted">{t('stats.countries')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <p className="text-text-muted">{t('stats.certified')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}