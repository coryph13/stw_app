// src/components/contacts/ContactForm.tsx
'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';

export default function ContactForm() {
  const t = useTranslations('contacts');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t('form.title')}
        </h2>
        <form onSubmit={handleSubmit} className="bg-background rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.name')} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.email')} *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.subject')}
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">{t('form.selectSubject')}</option>
                <option value="general">{t('form.general')}</option>
                <option value="partnership">{t('form.partnership')}</option>
                <option value="support">{t('form.support')}</option>
                <option value="complaint">{t('form.complaint')}</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">
              {t('form.message')} *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full md:w-auto px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          >
            <IoSend size={18} />
            {t('form.send')}
          </button>
        </form>
      </div>
    </section>
  );
}