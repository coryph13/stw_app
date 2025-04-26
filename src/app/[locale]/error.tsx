'use client';

import { useEffect } from 'react';
// import { Button } from '@/components/ui/button'; // если используешь
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('ErrorPage'); // ErrorPage — это namespace для переводов

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center space-y-6">
        <h1 className="text-heading-1 font-heading">{t('title')}</h1>
        <p className="text-base text-text-muted">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => reset()}
            className="bg-accent hover:bg-accent-dark text-background font-medium py-2 px-4 rounded-xl transition"
          >
            {t('tryAgain')}
          </button>

          <Link
            href="/"
            className="border border-border text-foreground hover:bg-muted font-medium py-2 px-4 rounded-xl transition"
          >
            {t('backHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
