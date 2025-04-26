'use client';

import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 text-center">
      <div>
        <h1 className="font-heading text-heading-1 text-foreground mb-4">
          {t('heading')}
        </h1>
        <p className="text-base text-text-muted mb-8">{t('description')}</p>
        <a
          href="/"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-background hover:bg-accent-dark transition"
        >
          {t('back-to-home')}
        </a>
      </div>
    </div>
  );
}
