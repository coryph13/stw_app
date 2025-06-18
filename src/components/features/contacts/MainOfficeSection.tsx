// src/components/contacts/MainOfficeSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { IoLocationSharp, IoCall, IoMail, IoTime } from 'react-icons/io5';

export default function MainOfficeSection() {
  const t = useTranslations('contacts');

  const officeInfo = [
    {
      icon: <IoLocationSharp className="text-accent" size={24} />,
      title: t('office.address'),
      content: 'г. Ташкент, ул. Амира Темура, 108',
    },
    {
      icon: <IoCall className="text-accent" size={24} />,
      title: t('office.phone'),
      content: '+998 71 123 45 67',
    },
    {
      icon: <IoMail className="text-accent" size={24} />,
      title: t('office.email'),
      content: 'info@stw.uz',
    },
    {
      icon: <IoTime className="text-accent" size={24} />,
      title: t('office.hours'),
      content: 'Пн-Пт: 9:00 - 18:00',
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('office.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeInfo.map((item, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-muted">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}