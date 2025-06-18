// src/components/contacts/ManagersSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { IoCall, IoMail } from 'react-icons/io5';

interface Manager {
  id: number;
  name: string;
  position: string;
  region: string;
  phone: string;
  email: string;
  photo?: string;
}

export default function ManagersSection() {
  const t = useTranslations('contacts');

  // Это примерные данные - замените на реальные
  const managers: Manager[] = [
    {
      id: 1,
      name: 'Иван Петров',
      position: 'Региональный менеджер',
      region: 'Ташкент и Ташкентская область',
      phone: '+998 90 123 45 67',
      email: 'i.petrov@stw.uz',
    },
    {
      id: 2,
      name: 'Анна Сидорова',
      position: 'Региональный менеджер',
      region: 'Самарканд и Бухара',
      phone: '+998 90 234 56 78',
      email: 'a.sidorova@stw.uz',
    },
    {
      id: 3,
      name: 'Алексей Иванов',
      position: 'Региональный менеджер',
      region: 'Фергана и Андижан',
      phone: '+998 90 345 67 89',
      email: 'a.ivanov@stw.uz',
    },
    {
      id: 4,
      name: 'Мария Козлова',
      position: 'Региональный менеджер',
      region: 'Хорезм и Каракалпакстан',
      phone: '+998 90 456 78 90',
      email: 'm.kozlova@stw.uz',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('managers.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {managers.map((manager) => (
            <div
              key={manager.id}
              className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-accent">
                    {manager.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-lg">{manager.name}</h3>
                <p className="text-sm text-text-muted">{manager.position}</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-accent">{manager.region}</p>
                <div className="flex items-center gap-2">
                  <IoCall className="text-gray" size={16} />
                  <a href={`tel:${manager.phone}`} className="hover:text-accent transition-colors">
                    {manager.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IoMail className="text-gray" size={16} />
                  <a href={`mailto:${manager.email}`} className="hover:text-accent transition-colors">
                    {manager.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}