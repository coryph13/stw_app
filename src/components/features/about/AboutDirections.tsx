// components/features/about/AboutDirections.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const directions = [
  {
    key: 'production',
    image: '/images/about/production.jpg',
    items: ['packaging', 'containers', 'materials'],
  },
  {
    key: 'distribution',
    image: '/images/about/distribution.jpg',
    items: ['consumer', 'industrial', 'construction'],
  },
  {
    key: 'logistics',
    image: '/images/about/logistics.jpg',
    items: ['storage', 'delivery', 'customs'],
  },
];

export function AboutDirections() {
  const t = useTranslations('about.directions');

  return (
    <section className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-heading-2">
          {t('title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {directions.map(({ key, image, items }) => (
            <div key={key} className="group overflow-hidden rounded-lg bg-background shadow-lg transition-shadow hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={t(`${key}.title`)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
                  {t(`${key}.title`)}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-muted">
                  {t(`${key}.description`)}
                </p>
                
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray">
                      <svg className="mr-2 h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t(`${key}.items.${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}