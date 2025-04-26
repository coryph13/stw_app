import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="mt-4 p-4 text-center text-foreground">
      <p>
        &copy; {new Date().getFullYear()} {t('Rights')}
      </p>
    </footer>
  );
}
