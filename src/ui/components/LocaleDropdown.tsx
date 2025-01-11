'use client'

import { Link, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { LanguageIcon } from '@heroicons/react/24/solid'

export default function LocaleDropdown({ ...props }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const Locales = [
        { code: 'uz', label: "Oʻzbekcha", flag: '🇺🇿' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'en', label: 'English', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    ];

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
                        <LanguageIcon className="size-7 text-white dark:text-white hover:text-gray-100 inline-flex items-center justify-center" />
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
                        role="menu"
                        aria-orientation="vertical"
                        tabIndex={-1}
                    >
                        <div className="py-1" role="none">
                            {Locales.map((localeItem) => (
                                <Link
                                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    key={localeItem.code}
                                    // href={pathname}
                                    href={'/'}
                                    locale={localeItem.code}>
                                    <span className="mr-2">{localeItem.flag}</span>
                                    {localeItem.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
