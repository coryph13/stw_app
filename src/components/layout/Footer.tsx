import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-800 py-8 text-foreground">
      {/* Links Section */}
      <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:text-left">
        <div className="LinksSection w-full">
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/contacts"
                className="text-text-muted hover:text-accent"
              >
                {t('Contacts')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-text-muted hover:text-accent">
                {t('About')}
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-text-muted hover:text-accent"
              >
                {t('PrivacyPolicy')}
              </Link>
            </li>
            <li>
              <div className="flex justify-center space-x-4 md:justify-start">
                <Link
                  href="https://facebook.com"
                  className="text-text-muted hover:text-accent"
                >
                  Facebook
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-text-muted hover:text-accent"
                >
                  Twitter
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Rights Section */}
      <div className="container mx-auto mt-8 text-center text-sm text-text-muted">
        <p>
          &copy; {new Date().getFullYear()} {t('Rights')}
        </p>
      </div>
    </footer>
  );
}
