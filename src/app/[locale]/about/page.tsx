import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { AboutAdvantages } from '@/components/features/about/AboutAdvantages';
import { AboutCTA } from '@/components/features/about/AboutCTA';
import { AboutCertificates } from '@/components/features/about/AboutCertificates';
import { AboutClients } from '@/components/features/about/AboutClients';
import { AboutDirections } from '@/components/features/about/AboutDirections';
import { AboutHero } from '@/components/features/about/AboutHero';
import { AboutInfrastructure } from '@/components/features/about/AboutInfrastructure';
import { AboutIntro } from '@/components/features/about/AboutIntro';
import { AboutStats } from '@/components/features/about/AboutStats';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <main className="min-h-screen bg-background">
      {/* Hero секция */}
      <AboutHero />

      {/* О компании */}
      <AboutIntro />

      {/* Наши преимущества */}
      <AboutAdvantages />

      {/* Цифры и факты */}
      <AboutStats />

      {/* Направления деятельности */}
      <AboutDirections />

      {/* Сертификаты и лицензии */}
      <AboutCertificates />

      {/* Наши клиенты */}
      <AboutClients />

      {/* Инфраструктура */}
      <AboutInfrastructure />

      {/* CTA секция */}
      <AboutCTA />
    </main>
  );
}