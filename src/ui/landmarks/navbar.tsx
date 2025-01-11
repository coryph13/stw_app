'use client'

import { Link, usePathname } from "@/i18n/routing"
import LocaleDropdown from "@/ui/components/LocaleDropdown";
import { useTranslations } from "next-intl";

export const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;

    const t = useTranslations('Nav');

    const NavLinks = [
        { id: 1, name: t('home'), path: '/' },
        { id: 2, name: t('about'), path: '/about' },
        { id: 3, name: t('blog'), path: '/blog' },
        { id: 4, name: t('products'), path: '/product' }
    ];

    return (
        <nav className="fixed w-full flex justify-between items-center h-16 bg-gray-900 px-4">
            <div className="logo">
                <Link href="/">
                    <p className="text-2xl font-bold text-white">
                        STW
                    </p>
                </Link>
            </div>
            <ul className="flex space-x-10 text-white">
                {NavLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <Link
                                href={link.path}
                                className={
                                    isActive(link.path)
                                        ? 'underline decoration-blue-500 decoration-4'
                                        : ''
                                }
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <LocaleDropdown />
        </nav>
    );

}
