// components/features/about/AboutCertificates.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const certificates = [
  { id: 1, image: '/images/certificates/iso9001.jpg', title: 'ISO 9001:2015' },
  { id: 2, image: '/images/certificates/iso14001.jpg', title: 'ISO 14001:2015' },
  { id: 3, image: '/images/certificates/gost.jpg', title: 'ГОСТ Р' },
  { id: 4, image: '/images/certificates/quality.jpg', title: 'Сертификат качества' },
  { id: 5, image: '/images/certificates/partner.jpg', title: 'Партнерский сертификат' },
];

export function AboutCertificates() {
  const t = useTranslations('about.certificates');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-heading-2">
          {t('title')}
        </h2>

        <div className="mx-auto max-w-4xl">
          {/* Слайдер для мобильных */}
          <div className="relative md:hidden">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {certificates.map((cert) => (
                  <div key={cert.id} className="w-full flex-shrink-0">
                    <div className="relative mx-auto h-64 w-48">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <p className="mt-2 text-center text-sm text-text-muted">{cert.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Кнопки навигации */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg"
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Сетка для десктопа */}
          <div className="hidden grid-cols-3 gap-6 md:grid lg:grid-cols-5">
            {certificates.map((cert) => (
              <div key={cert.id} className="group cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-lg border border-border bg-muted p-4 transition-all hover:border-accent hover:shadow-lg">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-text-muted">{cert.title}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}