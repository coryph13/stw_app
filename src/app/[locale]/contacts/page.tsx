'use client';

import { useTranslations } from 'next-intl';

export default function ContactsPage() {
  const t = useTranslations('ContactsPage');

  return (
    <div className="container min-h-screen py-8">
      <h1 className="mb-6 font-heading text-heading-1 text-accent">
        {t('heading')}
      </h1>
      <p className="mb-10 max-w-2xl text-base text-text-muted">
        {t('description')}
      </p>

      <section className="mb-10">
        <h2 className="mb-4 font-heading text-heading-2 text-accent">
          {t('contactTitle')}
        </h2>
        <ul className="space-y-4 text-base text-text-muted">
          <li>
            <span className="font-bold text-accent">{t('addressLabel')}:</span>{' '}
            {t('address')}
          </li>
          <li>
            <span className="font-bold text-accent">{t('phoneLabel')}:</span>{' '}
            {t('phone')}
          </li>
          <li>
            <span className="font-bold text-accent">{t('emailLabel')}:</span>{' '}
            {t('email')}
          </li>
        </ul>
      </section>
    </div>
  );
}
