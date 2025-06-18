// src/components/products/ProductsFilters.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

interface FilterSection {
  title: string;
  key: string;
  options: { value: string; label: string }[];
}

export default function ProductsFilters() {
  const t = useTranslations('products');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'manufacturer']);

  // Примерные фильтры - замените на реальные данные
  const filterSections: FilterSection[] = [
    {
      title: t('filters.category'),
      key: 'category',
      options: [
        { value: 'ldsp', label: 'ЛДСП' },
        { value: 'lmdf', label: 'ЛМДФ' },
        { value: 'flooring', label: 'Напольные покрытия' },
        { value: 'tabletop', label: 'Столешницы' },
        { value: 'dsp', label: 'ДСП' },
        { value: 'mdf', label: 'МДФ' },
        { value: 'hdf', label: 'ХДФ' },
        { value: 'glue', label: 'Клей' },
      ],
    },
    {
      title: t('filters.manufacturer'),
      key: 'manufacturer',
      options: [
        { value: 'kronospan', label: 'Kronospan' },
        { value: 'egger', label: 'Egger' },
        { value: 'kastamonu', label: 'Kastamonu' },
        { value: 'swiss-krono', label: 'Swiss Krono' },
      ],
    },
  ];

  const toggleSection = (key: string) => {
    setExpandedSections(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    
    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/products');
  };

  const hasActiveFilters = searchParams.toString().length > 0;

  return (
    <div className="bg-muted rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{t('filters.title')}</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-accent hover:underline"
          >
            {t('filters.clear')}
          </button>
        )}
      </div>

      <div className="space-y-4">
        {filterSections.map((section) => (
          <div key={section.key} className="border-b border-border pb-4">
            <button
              onClick={() => toggleSection(section.key)}
              className="flex items-center justify-between w-full text-left py-2"
            >
              <span className="font-medium">{section.title}</span>
              {expandedSections.includes(section.key) ? (
                <IoChevronUp className="text-gray" size={20} />
              ) : (
                <IoChevronDown className="text-gray" size={20} />
              )}
            </button>
            
            {expandedSections.includes(section.key) && (
              <div className="mt-2 space-y-2">
                {section.options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors"
                  >
                    <input
                      type="radio"
                      name={section.key}
                      value={option.value}
                      checked={searchParams.get(section.key) === option.value}
                      onChange={() => handleFilterChange(section.key, option.value)}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}