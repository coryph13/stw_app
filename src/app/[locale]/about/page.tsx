'use client';

import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  const PhotoSkeleton = () => (
    <div className="aspect-square w-full animate-pulse rounded-2xl bg-muted" />
  );

  return (
    <div className="container py-8">
      {/* Заголовок страницы */}
      <h1 className="mb-6 font-heading text-heading-1 text-accent">
        {t('heading')}
      </h1>
      <p className="mb-10 max-w-2xl text-base text-text-muted">
        {t('description')}
      </p>

      {/* Миссия */}
      <section className="mb-10">
        <h2 className="mb-4 font-heading text-heading-2 text-accent">
          {t('missionTitle')}
        </h2>
        <p className="max-w-2xl text-base text-text-muted">
          {t('missionDescription')}
        </p>
      </section>

      {/* Ценности */}
      <section className="mb-10">
        <h2 className="mb-4 font-heading text-heading-2 text-accent">
          {t('valuesTitle')}
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-base text-text-muted">
          <li>{t('value1')}</li>
          <li>{t('value2')}</li>
          <li>{t('value3')}</li>
        </ul>
      </section>

      {/* Команда */}
      <section className="mb-10">
        <h2 className="mb-4 font-heading text-heading-2 text-accent">
          {t('teamTitle')}
        </h2>
        <p className="mb-6 max-w-2xl text-base text-text-muted">
          {t('teamDescription')}
        </p>

        {/* Секция для фото */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Suspense fallback={<PhotoSkeleton />}>
            {/* Здесь будут реальные фото */}
            <PhotoSkeleton />
          </Suspense>
          <Suspense fallback={<PhotoSkeleton />}>
            <PhotoSkeleton />
          </Suspense>
          <Suspense fallback={<PhotoSkeleton />}>
            <PhotoSkeleton />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
