// src/components/product/ProductFormats.tsx
'use client';

import { useTranslations } from 'next-intl';
import { IoCube } from 'react-icons/io5';

interface Format {
  slug: string;
  width: number;
  height: number;
  thickness: number;
  unit: {
    slug: string;
    name: string;
    short_name: string;
    type: string;
  };
}

interface ProductFormatsProps {
  formats: Format[];
}

export default function ProductFormats({ formats }: ProductFormatsProps) {
  const t = useTranslations('product');

  if (!formats || formats.length === 0) return null;

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          {t('formats.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formats.map((format) => (
            <div
              key={format.slug}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <IoCube className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">
                    {format.width} × {format.height} × {format.thickness} {format.unit.short_name}
                  </h3>
                  <div className="space-y-1 text-sm text-text-muted">
                    <p>{t('formats.width')}: {format.width} {format.unit.short_name}</p>
                    <p>{t('formats.height')}: {format.height} {format.unit.short_name}</p>
                    <p>{t('formats.thickness')}: {format.thickness} {format.unit.short_name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}