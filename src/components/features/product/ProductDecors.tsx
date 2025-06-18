// src/components/product/ProductDecors.tsx
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

interface Decor {
  slug: string;
  code: string;
  name: string;
  description?: string;
  image?: string;
  sort: number;
  pattern?: {
    slug: string;
    name: string;
    description?: string;
    image?: string;
  };
  shade?: {
    slug: string;
    name: string;
    description?: string;
    hex?: string;
  };
  textures?: Array<{
    slug: string;
    name: string;
    description?: string;
    image?: string;
  }>;
}

interface ProductDecorsProps {
  decors: Decor[];
}

export default function ProductDecors({ decors }: ProductDecorsProps) {
  const t = useTranslations('product');
  const [selectedDecor, setSelectedDecor] = useState(0);

  if (!decors || decors.length === 0) return null;

  const currentDecor = decors[selectedDecor];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          {t('decors.title')}
        </h2>

        {/* Превью декоров */}
        {decors.length > 1 && (
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {decors.map((decor, index) => (
              <button
                key={decor.slug}
                onClick={() => setSelectedDecor(index)}
                className={`flex-shrink-0 relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedDecor === index 
                    ? 'border-accent scale-105' 
                    : 'border-border hover:border-gray'
                }`}
              >
                {decor.image ? (
                  <Image
                    src={decor.image}
                    alt={decor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-light flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Информация о выбранном декоре */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Изображение декора */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            {currentDecor.image ? (
              <Image
                src={currentDecor.image}
                alt={currentDecor.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl">🎨</span>
              </div>
            )}
          </div>

          {/* Детали декора */}
          <div>
            <h3 className="text-xl font-bold mb-2">{currentDecor.name}</h3>
            {currentDecor.code && (
              <p className="text-sm text-text-muted mb-4">
                {t('decors.code')}: {currentDecor.code}
              </p>
            )}

            {currentDecor.description && (
              <p className="text-text-muted mb-6">{currentDecor.description}</p>
            )}

            {/* Паттерн */}
            {currentDecor.pattern && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">{t('decors.pattern')}:</h4>
                <div className="flex items-center gap-3">
                  {currentDecor.pattern.image && (
                    <div className="relative w-12 h-12 rounded overflow-hidden">
                      <Image
                        src={currentDecor.pattern.image}
                        alt={currentDecor.pattern.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{currentDecor.pattern.name}</p>
                    {currentDecor.pattern.description && (
                      <p className="text-sm text-text-muted">{currentDecor.pattern.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Оттенок */}
            {currentDecor.shade && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">{t('decors.shade')}:</h4>
                <div className="flex items-center gap-3">
                  {currentDecor.shade.hex && (
                    <div 
                      className="w-12 h-12 rounded border border-border"
                      style={{ backgroundColor: currentDecor.shade.hex }}
                    />
                  )}
                  <div>
                    <p className="font-medium">{currentDecor.shade.name}</p>
                    {currentDecor.shade.description && (
                      <p className="text-sm text-text-muted">{currentDecor.shade.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Текстуры */}
            {currentDecor.textures && currentDecor.textures.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">{t('decors.textures')}:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentDecor.textures.map((texture) => (
                    <div key={texture.slug} className="flex items-center gap-2">
                      {texture.image && (
                        <div className="relative w-10 h-10 rounded overflow-hidden">
                          <Image
                            src={texture.image}
                            alt={texture.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="text-sm">{texture.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}