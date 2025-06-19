// src/components/home/AboutSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IoCheckmarkCircle, IoTrendingUp, IoPeople, IoGlobe } from 'react-icons/io5';
import CountUp from '@/components/ui/CountUp';

export default function AboutSection() {
  const t = useTranslations('home.about');

  const stats = [
    {
      icon: <IoTrendingUp className="text-accent" size={32} />,
      value: 15,
      suffix: '+',
      label: t('stats.yearsExperience'),
    },
    {
      icon: <IoPeople className="text-accent" size={32} />,
      value: 500,
      suffix: '+',
      label: t('stats.clients'),
    },
    {
      icon: <IoGlobe className="text-accent" size={32} />,
      value: 8,
      suffix: '',
      label: t('stats.regions'),
    },
  ];

  const features = [
    t('features.quality'),
    t('features.prices'),
    t('features.delivery'),
    t('features.support'),
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - контент */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-text-muted mb-6">
              {t('description')}
            </p>
            <p className="text-text-muted mb-8">
              {t('mission')}
            </p>
            
            {/* Преимущества */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <IoCheckmarkCircle className="text-accent flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              {t('learnMore')}
              <span>→</span>
            </Link>
          </div>

          {/* Правая часть - статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 text-center lg:text-left lg:flex lg:items-center lg:gap-4"
              >
                <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}