// components/features/about/AboutCTA.tsx
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function AboutCTA() {
  const t = useTranslations('about.cta');
  const locale = 'ru'; // Получить из контекста

  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-2xl font-bold text-background md:text-heading-2">
            {t('title')}
          </h2>
          
          <p className="mb-8 text-lg text-background/90">
            {t('description')}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}/catalog`}
              className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-3 font-semibold text-accent transition-all hover:bg-background/90"
            >
              {t('buttons.catalog')}
            </Link>
            
            <Link
              href={`/${locale}/contacts`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-background bg-transparent px-8 py-3 font-semibold text-background transition-all hover:bg-background hover:text-accent"
            >
              {t('buttons.contact')}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="font-semibold text-background">{t('contacts.phone')}</p>
              <a href="tel:+998901234567" className="text-background/80 hover:text-background">
                +998 90 123-45-67
              </a>
            </div>

            <div className="text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="font-semibold text-background">{t('contacts.email')}</p>
              <a href="mailto:info@stw.uz" className="text-background/80 hover:text-background">
                info@stw.uz
              </a>
            </div>

            <div className="text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-semibold text-background">{t('contacts.hours')}</p>
              <span className="text-background/80">
                {t('contacts.schedule')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}