import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-gray-800 mt-4 p-4 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} {t('Rights')}
      </p>
    </footer>
  );
}
