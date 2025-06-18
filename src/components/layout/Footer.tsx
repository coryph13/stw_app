import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container">
        {/* Основной контент футера */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* О компании */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              {t('company')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.news')}
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.certificates')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Каталог */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              {t('catalog')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/production" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.production')}
                </Link>
              </li>
              <li>
                <Link href="/catalog/consumer" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.consumer')}
                </Link>
              </li>
              <li>
                <Link href="/catalog/industrial" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.industrial')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              {t('services')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/wholesale" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.wholesale')}
                </Link>
              </li>
              <li>
                <Link href="/services/logistics" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.logistics')}
                </Link>
              </li>
              <li>
                <Link href="/services/storage" className="text-text-muted transition-colors hover:text-accent">
                  {t('navigation.storage')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              {t('contacts')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-text-muted">{t('address')}</p>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray">{t('phone')}</p>
                  <a href="tel:+998901234567" className="text-sm text-text-muted hover:text-accent">
                    +998 90 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray">{t('email')}</p>
                  <a href="mailto:info@stw.uz" className="text-sm text-text-muted hover:text-accent">
                    info@stw.uz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray">{t('workHours')}</p>
                  <p className="text-sm text-text-muted">{t('workSchedule')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-border/50" />

        {/* Нижняя часть футера */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {t('copyright')}
          </p>

          {/* Социальные сети */}
          <div className="flex gap-4">
            <a
              href="https://t.me/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="Telegram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.27-1.13 7.78-1.6 10.32-.2 1.07-.59 1.43-.97 1.47-.82.08-1.45-.54-2.25-1.06-1.25-.82-1.96-1.33-3.17-2.13-1.4-.93-.49-1.44.31-2.28.21-.22 3.86-3.54 3.93-3.84.01-.04.01-.17-.06-.25s-.2-.05-.29-.03c-.12.03-2.09 1.33-5.91 3.91-.56.38-1.07.57-1.53.56-.5-.01-1.47-.28-2.19-.52-.88-.29-1.58-.44-1.52-.93.03-.26.38-.52 1.06-.79 4.14-1.8 6.9-2.99 8.28-3.56 3.95-1.65 4.77-1.94 5.31-1.95.12 0 .38.03.55.18.14.13.18.3.2.45-.01.06-.01.24-.03.38z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}