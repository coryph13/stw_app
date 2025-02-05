'use client'

import { Link, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { LanguageIcon } from '@heroicons/react/24/solid'

import IconSrcEn from 'flag-icons/flags/4x3/gb.svg';
import IconSrcRu from 'flag-icons/flags/4x3/ru.svg';
import IconSrcUz from 'flag-icons/flags/4x3/uz.svg';
import Image from "next/image";
import { useLocale } from "next-intl";

export default function LocaleDropdown({ ...props }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    console.log(locale);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const Locales = [
        { code: 'uz', label: "Oʻzbekcha", src: IconSrcUz },
        { code: 'ru', label: 'Русский', src: IconSrcRu },
        { code: 'en', label: 'English', src: IconSrcEn },
    ];

    let localeClassname = "flex w-full justify-between items-center px-4 py-3 text-md";

    return (
        <div className="flex space-x-10 text-white">
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex items-center justify-center"
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-haspopup="true"
                    >
                        <LanguageIcon
                            className="size-7 text-white dark:text-white hover:text-gray-100 inline-flex items-center justify-center" />
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="absolute right-0 mt-2 w-44 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
                        role="menu"
                        aria-orientation="vertical"
                        tabIndex={-1}
                    >
                        <div className="" role="none">
                            {Locales.map((localeItem) => (
                                <Link
                                    className={localeItem.code !== locale ? localeClassname + ' text-gray-700 hover:bg-gray-700 hover:text-white' : localeClassname + ' text-white bg-gray-700'}
                                    key={localeItem.code}
                                    // href={pathname}
                                    href={'/'}
                                    locale={localeItem.code}>
                                    <span>
                                        <Image src={localeItem.src} width="25" height="19" alt={localeItem.label} />
                                    </span>
                                    <span className="h-[19px]">{localeItem.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
