// src/components/contacts/WorkingHours.tsx
'use client';

import { useTranslations } from 'next-intl';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

export default function WorkingHours() {
  const t = useTranslations('contacts');

  const schedule = [
    { day: t('schedule.monday'), hours: '9:00 - 18:00', isOpen: true },
    { day: t('schedule.tuesday'), hours: '9:00 - 18:00', isOpen: true },
    { day: t('schedule.wednesday'), hours: '9:00 - 18:00', isOpen: true },
    { day: t('schedule.thursday'), hours: '9:00 - 18:00', isOpen: true },
    { day: t('schedule.friday'), hours: '9:00 - 18:00', isOpen: true },
    { day: t('schedule.saturday'), hours: '10:00 - 15:00', isOpen: true },
    { day: t('schedule.sunday'), hours: t('schedule.closed'), isOpen: false },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t('schedule.title')}
        </h2>
        <div className="bg-muted rounded-lg p-6">
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-md ${
                  item.isOpen ? 'bg-background' : 'bg-gray-dark/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.isOpen ? (
                    <IoCheckmarkCircle className="text-green-500" size={20} />
                  ) : (
                    <IoCloseCircle className="text-red-500" size={20} />
                  )}
                  <span className="font-medium">{item.day}</span>
                </div>
                <span className={item.isOpen ? 'text-foreground' : 'text-text-muted'}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-accent/10 rounded-md">
            <p className="text-sm text-center">
              {t('schedule.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}