// src/components/product/ProductSpecifications.tsx
'use client';

import { useTranslations } from 'next-intl';

interface ProductSpecificationsProps {
  specs: any; // Используем any для гибкости с разными типами спецификаций
}

export default function ProductSpecifications({ specs }: ProductSpecificationsProps) {
  const t = useTranslations('product');

  if (!specs) return null;

  // Функция для получения отображаемого значения
  const getSpecValue = (spec: any) => {
    if (!spec) return '-';
    if (typeof spec === 'object' && spec.value) {
      return spec.description || spec.value;
    }
    return spec;
  };

  // Базовые характеристики, общие для многих типов продуктов
  const commonSpecs = [
    { key: 'base_material', label: t('specs.baseMaterial') },
    { key: 'density', label: t('specs.density') },
    { key: 'emission_class', label: t('specs.emissionClass') },
    { key: 'moisture_resistance', label: t('specs.moistureResistance') },
    { key: 'surface_durability', label: t('specs.surfaceDurability') },
    { key: 'print_technology', label: t('specs.printTechnology') },
  ];

  // Специфичные характеристики для клея
  const glueSpecs = [
    { key: 'viscosity', label: t('specs.viscosity') },
    { key: 'open_time', label: t('specs.openTime') },
    { key: 'full_cure_time', label: t('specs.fullCureTime') },
    { key: 'package', label: t('specs.package') },
  ];

  // Определяем, какие характеристики показывать
  const specsToShow = specs.__typename === 'GlueSpec' 
    ? [...commonSpecs.slice(0, 4), ...glueSpecs] 
    : commonSpecs;

  // Фильтруем только существующие характеристики
  const availableSpecs = specsToShow.filter(spec => specs[spec.key]);

  if (availableSpecs.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          {t('specs.title')}
        </h2>
        
        <div className="bg-muted rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody>
              {availableSpecs.map((spec, index) => (
                <tr 
                  key={spec.key}
                  className={`border-b border-border ${index % 2 === 0 ? 'bg-background' : ''}`}
                >
                  <td className="px-6 py-4 font-medium w-1/2">
                    {spec.label}
                  </td>
                  <td className="px-6 py-4">
                    {getSpecValue(specs[spec.key])}
                  </td>
                </tr>
              ))}
              
              {/* Цвет для клея */}
              {specs.color && (
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-medium w-1/2">
                    {t('specs.color')}
                  </td>
                  <td className="px-6 py-4">
                    {specs.color.name}
                  </td>
                </tr>
              )}
              
              {/* Текстура */}
              {specs.texture && (
                <tr className="border-b border-border">
                  <td className="px-6 py-4 font-medium w-1/2">
                    {t('specs.texture')}
                  </td>
                  <td className="px-6 py-4">
                    {specs.texture.name}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}