// src/components/home/AdvantagesSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { 
  IoShieldCheckmark, 
  IoRocket, 
  IoPricetag, 
  IoCube,
  IoEarth,
  IoHeadset
} from 'react-icons/io5';

export default function AdvantagesSection() {
  const t = useTranslations('home.advantages');

  const advantages = [
    {
      icon: <IoShieldCheckmark size={40} />,
      titleKey: 'quality.title',
      descriptionKey: 'quality.description',
      defaultTitle: 'Гарантия качества',
      defaultDescription: 'Вся продукция сертифицирована и соответствует международным стандартам',
    },
    {
      icon: <IoRocket size={40} />,
      titleKey: 'delivery.title',
      descriptionKey: 'delivery.description',
      defaultTitle: 'Быстрая доставка',
      defaultDescription: 'Доставка по всему Узбекистану в кратчайшие сроки',
    },
    {
      icon: <IoPricetag size={40} />,
      titleKey: 'prices.title',
      descriptionKey: 'prices.description',
      defaultTitle: 'Лучшие цены',
      defaultDescription: 'Прямые поставки от производителей без посредников',
    },
    {
      icon: <IoCube size={40} />,
      titleKey: 'stock.title',
      descriptionKey: 'stock.description',
      defaultTitle: 'Всегда в наличии',
      defaultDescription: 'Большой склад с постоянным наличием популярных позиций',
    },
    {
      icon: <IoEarth size={40} />,
      titleKey: 'eco.title',
      descriptionKey: 'eco.description',
      defaultTitle: 'Экологичность',
      defaultDescription: 'Только экологически чистые материалы для вашего здоровья',
    },
    {
      icon: <IoHeadset size={40} />,
      titleKey: 'support.title',
      descriptionKey: 'support.description',
      defaultTitle: 'Поддержка 24/7',
      defaultDescription: 'Профессиональная консультация и техническая поддержка',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 70px)`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Иконка */}
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <div className="text-accent">
                  {advantage.icon}
                </div>
              </div>
              
              {/* Контент */}
              <h3 className="text-xl font-bold mb-3">
                {t(advantage.titleKey)}
              </h3>
              <p className="text-text-muted">
                {t(advantage.descriptionKey)}
              </p>
              
              {/* Декоративный элемент */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}