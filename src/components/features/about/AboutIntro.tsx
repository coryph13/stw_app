// components/features/about/AboutIntro.tsx
import { useTranslations } from 'next-intl';

export function AboutIntro() {
  const t = useTranslations('about.intro');

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-heading-2">
            {t('title')}
          </h2>
          
          <div className="space-y-6 text-base leading-relaxed text-gray md:text-lg">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
          </div>

          {/* Ключевые области */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted p-6 text-center">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {t('areas.production')}
              </h3>
              <p className="text-sm text-text-muted">{t('areas.productionDesc')}</p>
            </div>
            
            <div className="rounded-lg border border-border bg-muted p-6 text-center">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {t('areas.distribution')}
              </h3>
              <p className="text-sm text-text-muted">{t('areas.distributionDesc')}</p>
            </div>
            
            <div className="rounded-lg border border-border bg-muted p-6 text-center">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {t('areas.logistics')}
              </h3>
              <p className="text-sm text-text-muted">{t('areas.logisticsDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}