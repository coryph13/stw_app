// components/features/about/AboutStats.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

interface Stat {
  key: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  { key: 'years', value: 25, suffix: '+' },
  { key: 'products', value: 10000, suffix: '+' },
  { key: 'clients', value: 500, suffix: '+' },
  { key: 'warehouse', value: 15000, suffix: ' м²' },
  { key: 'regions', value: 85, suffix: '' },
  { key: 'employees', value: 200, suffix: '+' },
];

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-3xl font-bold text-accent md:text-4xl">
      {prefix}{count.toLocaleString('ru-RU')}{suffix}
    </div>
  );
}

export function AboutStats() {
  const t = useTranslations('about.stats');

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-heading-2">
          {t('title')}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {stats.map(({ key, value, suffix, prefix }) => (
            <div key={key} className="text-center">
              <AnimatedCounter 
                end={value} 
                suffix={suffix} 
                prefix={prefix}
              />
              <p className="mt-2 text-base text-text-muted">
                {t(`items.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}