// components/features/about/AboutHero.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function AboutHero() {
  const t = useTranslations('about.hero');
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 1998; // Предполагаем, что компания основана в 1998

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/warehouse-hero.jpg"
          alt="Warehouse"
          width={1920}
          height={1280}
          // fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
      </div>

      {/* Контент */}
      <div className="container relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-heading-1">
            {t('title', { years: yearsInBusiness })}
          </h1>
          <p className="mt-4 text-lg text-gray-light md:text-xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Декоративный элемент снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}