'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useState } from 'react';
// import { LanguageIcon } from '@heroicons/react/24/solid';
// import { GrLanguage } from 'react-icons/gr';
import { IoLanguageSharp } from 'react-icons/io5';

import IconSrcEn from 'flag-icons/flags/4x3/gb.svg';
import IconSrcRu from 'flag-icons/flags/4x3/ru.svg';
import IconSrcUz from 'flag-icons/flags/4x3/uz.svg';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function LocaleDropdown() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const locales = [
    { code: 'uz', label: 'Oʻzbekcha', src: IconSrcUz },
    { code: 'ru', label: 'Русский', src: IconSrcRu },
    { code: 'en', label: 'English', src: IconSrcEn },
  ];

  const localeClassname =
    'flex w-full justify-between items-center px-4 py-3 text-md';

  return (
    <div className="flex space-x-10 text-light">
      <div className="relative inline-block text-left">
        {/* <div>
                    <button
                        type="button"
                        // className="inline-flex items-center justify-center"
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-haspopup="true"
                    >
                    </button>
                </div> */}

        <IoLanguageSharp
          className={`cursor-pointer`}
          onClick={toggleDropdown}
          color={`light`}
          size={`1.75rem`}
        />
        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-44 origin-top-right bg-light text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            tabIndex={-1}
          >
            <div className="" role="none">
              {locales.map(localeItem => (
                <Link
                  className={
                    localeItem.code !== locale
                      ? localeClassname +
                        ' text-gray-700 hover:bg-gray-700 hover:text-light'
                      : localeClassname + ' bg-gray-700 text-light'
                  }
                  key={localeItem.code}
                  // href={pathname}
                  href={`${pathname}`}
                  locale={localeItem.code}
                >
                  <span>
                    <Image
                      src={localeItem.src}
                      width="25"
                      height="19"
                      alt={localeItem.label}
                    />
                  </span>
                  <span className="h-[19px]">{localeItem.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
