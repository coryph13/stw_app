// components/features/about/AboutInfrastructure.tsx
import { useTranslations } from 'next-intl';
// import Image from 'next/image';

const infrastructure = [
  {
    key: 'production',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    stats: ['3', '50000', '100+'],
  },
  {
    key: 'warehouse',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    stats: ['15000', '5', 'A'],
  },
  {
    key: 'transport',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    stats: ['50+', '24/7', 'GPS'],
  },
];

export function AboutInfrastructure() {
  const t = useTranslations('about.infrastructure');

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-heading-2">
          {t('title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {infrastructure.map(({ key, icon, stats }) => (
            <div key={key} className="text-center">
              <div className="mx-auto mb-6 inline-flex rounded-full bg-accent/10 p-6 text-accent">
                {icon}
              </div>
              
              <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
                {t(`${key}.title`)}
              </h3>
              
              <p className="mb-6 text-text-muted">
                {t(`${key}.description`)}
              </p>

              <div className="space-y-2">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg bg-muted px-4 py-2">
                    <span className="text-sm text-text-muted">
                      {t(`${key}.stats.${index}.label`)}
                    </span>
                    <span className="font-semibold text-accent">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <p className="text-center text-gray">
            {t('footer')}
          </p>
        </div>
      </div>
    </section>
  );
}