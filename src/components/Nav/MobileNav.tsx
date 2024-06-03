'use client'
// Logo with text

import FilledLogo from "@/components/Logo/FilledLogo";
import { Locale } from "@/config";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeSwitch from "@/components/Button/ThemeSwitch";
import SearchButton from "@/components/Button/SearchButton";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function MobileNav() {
    const [nav, setNav] = React.useState(false);
    const t = useTranslations('MobileMenu');
    const locale = useLocale() as Locale;

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { key: 1, link: 'products', text: t('Products') },
        { key: 2, link: 'decors',   text: t('Decors') },
        { key: 3, link: 'purposes', text: t('Purposes') },
    ];

    return (
        <nav className="sticky top-0 z-20 bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white">
            <div className="lg:container lg:mx-auto flex w-full flex-wrap items-center justify-between h-20">
                <div className="flex items-center justify-between md:w-auto w-full">
                    <a href="/" className="flex items-center py-5 px-2 flex-1">
                        <FilledLogo className="logo logo-filled h-8 fill-oxblue-800 dark:fill-white mb-2" />
                    </a>

                    {/* Mobile Navbar Button */}
                    <div className="md:hidden flex items-center">
                        <SearchButton />
                        <ThemeSwitch />
                        <div className="mobile-menu-button" onClick={handleNav}>
                            {nav
                                ? <FiX className="cursor-pointer w-6 h-6 mr-2" />
                                : <FiMenu className="cursor-pointer w-6 h-6 mr-2" />
                            }
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation Menu */}
                <ul className="hidden md:flex list-none">
                    {navItems.map(item => (
                        <li className="px-4 py-2 mt-2" key={item.key}>
                            <Link className="ur ur-dark font-semibold" href={item.link}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Menu */}
                <ul className={
                    nav
                        ? 'ease-in-out duration-300 md:hidden bg-white dark:bg-oxblue-950 fixed top-20 bottom-0 left-0 right-0 overflow-hidden'
                        : 'ease-in-out duration-500 bg-white dark:bg-oxblue-950 w-[100%] fixed top-20 bottom-[100%] left-0 overflow-hidden'
                }>
                    {navItems.map(item => (
                        <li className="px-4 py-2" key={item.key}>
                            <Link className="ur ur-dark font-semibold" href={item.link}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center justify-between md:w-auto w-full">    
                    <button>
                        <SearchButton />
                    </button>
                </div>
            </div>
        </nav>
    );
}