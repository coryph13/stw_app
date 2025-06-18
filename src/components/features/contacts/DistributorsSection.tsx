// src/components/contacts/DistributorsSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IoLocationSharp, IoCall, IoBusiness } from 'react-icons/io5';

interface Distributor {
  id: number;
  company: string;
  region: string;
  address: string;
  phone: string;
  workingHours: string;
}

export default function DistributorsSection() {
  const t = useTranslations('contacts');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { value: 'all', label: t('distributors.allRegions') },
    { value: 'tashkent', label: 'Ташкент' },
    { value: 'samarkand', label: 'Самарканд' },
    { value: 'bukhara', label: 'Бухара' },
    { value: 'fergana', label: 'Фергана' },
    { value: 'andijan', label: 'Андижан' },
    { value: 'namangan', label: 'Наманган' },
    { value: 'khorezm', label: 'Хорезм' },
  ];

  const distributors: Distributor[] = [
    {
      id: 1,
      company: 'ООО "Торговый Дом Восток"',
      region: 'tashkent',
      address: 'г. Ташкент, ул. Беруни, 45',
      phone: '+998 71 234 56 78',
      workingHours: '9:00 - 18:00',
    },
    {
      id: 2,
      company: 'ИП "СамТрейд"',
      region: 'samarkand',
      address: 'г. Самарканд, ул. Регистан, 12',
      phone: '+998 66 234 56 78',
      workingHours: '8:00 - 17:00',
    },
    {
      id: 3,
      company: 'ООО "Бухара-Дистрибьюшн"',
      region: 'bukhara',
      address: 'г. Бухара, ул. Навои, 78',
      phone: '+998 65 234 56 78',
      workingHours: '9:00 - 18:00',
    },
    {
      id: 4,
      company: 'ИП "Фергана Трейдинг"',
      region: 'fergana',
      address: 'г. Фергана, ул. Алишера Навои, 34',
      phone: '+998 73 234 56 78',
      workingHours: '8:30 - 17:30',
    },
  ];

  const filteredDistributors = selectedRegion === 'all' 
    ? distributors 
    : distributors.filter(d => d.region === selectedRegion);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t('distributors.title')}
        </h2>
        
        {/* Фильтр по регионам */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((region) => (
            <button
              key={region.value}
              onClick={() => setSelectedRegion(region.value)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedRegion === region.value
                  ? 'bg-accent text-white'
                  : 'bg-background hover:bg-accent/10 border border-border'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* Список дистрибьюторов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDistributors.map((distributor) => (
            <div
              key={distributor.id}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <IoBusiness className="text-accent flex-shrink-0" size={24} />
                <h3 className="font-bold text-lg">{distributor.company}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <IoLocationSharp className="text-gray flex-shrink-0 mt-1" size={16} />
                  <p>{distributor.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-gray flex-shrink-0" size={16} />
                  <a 
                    href={`tel:${distributor.phone}`} 
                    className="hover:text-accent transition-colors"
                  >
                    {distributor.phone}
                  </a>
                </div>
                <p className="text-text-muted">
                  {t('distributors.workingHours')}: {distributor.workingHours}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredDistributors.length === 0 && (
          <p className="text-center text-text-muted">
            {t('distributors.noResults')}
          </p>
        )}
      </div>
    </section>
  );
}