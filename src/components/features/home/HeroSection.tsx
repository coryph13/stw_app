// src/components/home/HeroSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { IoArrowForward, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/home/landing-hero-1.jpg',
    titleKey: 'slide1.title',
    subtitleKey: 'slide1.subtitle',
  },
  {
    id: 2,
    image: '/images/home/landing-hero-2.jpg',
    titleKey: 'slide2.title',
    subtitleKey: 'slide2.subtitle',
  },
  {
    id: 3,
    image: '/images/home/landing-hero-3.jpg',
    titleKey: 'slide3.title',
    subtitleKey: 'slide3.subtitle',
  },
];

export default function HeroSection() {
  const t = useTranslations('home.hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Фоновое изображение или градиент */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Здесь можно добавить Image когда будут реальные изображения */}
            <Image
              src={slide.image}
              alt={slide.titleKey}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Контент */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                {t(slide.titleKey)}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
                {t(slide.subtitleKey)}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all hover:scale-105"
                >
                  {t('viewCatalog')}
                  <IoArrowForward size={20} />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-medium hover:bg-white/20 transition-all border border-white/20"
                >
                  {t('contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Навигация */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <IoChevronBack size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <IoChevronForward size={24} />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}