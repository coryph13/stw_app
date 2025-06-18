// src/components/contacts/SocialLinks.tsx
'use client';

import { useTranslations } from 'next-intl';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoLinkedin } from 'react-icons/io5';
import { FaTelegram } from 'react-icons/fa';

export default function SocialLinks() {
  const t = useTranslations('contacts');

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <IoLogoFacebook size={24} />,
      url: 'https://facebook.com/stwuz',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: <IoLogoInstagram size={24} />,
      url: 'https://instagram.com/stwuz',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600',
    },
    {
      name: 'Telegram',
      icon: <FaTelegram size={24} />,
      url: 'https://t.me/stwuz',
      color: 'hover:bg-blue-500',
    },
    {
      name: 'YouTube',
      icon: <IoLogoYoutube size={24} />,
      url: 'https://youtube.com/@stwuz',
      color: 'hover:bg-red-600',
    },
    {
      name: 'LinkedIn',
      icon: <IoLogoLinkedin size={24} />,
      url: 'https://linkedin.com/company/stwuz',
      color: 'hover:bg-blue-700',
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t('social.title')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border text-foreground transition-all hover:text-white hover:scale-110 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-center mt-6 text-text-muted">
          {t('social.followUs')}
        </p>
      </div>
    </section>
  );
}