'use client';

import LocaleDropdown from '@/components/layout/LocaleDropdown';
import NavLinks from './NavLinks';
import Logo from './Logo';
// import SearchBtn from './SearchBtn';

import { IoMdClose } from 'react-icons/io';
import { IoMdMenu } from 'react-icons/io';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import OutlineLink from './OutlineLink';
import FilledLink from './FilledLink';
import LocaleInline from './LocaleInline';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  useEffect(() => {
    // Закрываем меню при изменении маршрута
    setIsOpen(false);
  }, [pathname]);

  // TODO: Btn заменить обычными Link.
  // TODO: Использовать pathname.startsWith('/about') для того, чтобы все последующие сегменты роута также выделяли пункт навигации (.active)

  return (
    <nav className="p-4 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        <Logo />

        {/* Навигационные ссылки для больших экранов */}
        <div className="hidden space-x-6 md:flex">
          <NavLinks />
        </div>

        {/* Дропдаун для выбора локали */}
        <div className="hidden md:flex">
          <LocaleDropdown />
        </div>

        {/* Кнопки входа и регистрации для больших экранов */}
        <div className="hidden space-x-4 md:flex">
          <OutlineLink href="/login">{t('auth.login')}</OutlineLink>
          <FilledLink href="/register">{t('auth.signUp')}</FilledLink>
        </div>

        {/* Кнопка меню для мобильных экранов */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdClose className="text-foreground" size="1.5rem" />
          ) : (
            <IoMdMenu className="text-foreground" size="1.5rem" />
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 text-center md:hidden">
          <NavLinks />

          <LocaleInline />

          {/* Кнопки входа и регистрации для мобильных экранов */}
          <OutlineLink href="/login">{t('auth.login')}</OutlineLink>
          <FilledLink href="/register">{t('auth.signUp')}</FilledLink>
        </div>
      )}
    </nav>
  );
};

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const isAuthenticated = false; // Example authentication state

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">Brand</div>
//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="text-gray-700 hover:text-black">Home</a>
//           <a href="#" className="text-gray-700 hover:text-black">About</a>
//           <a href="#" className="text-gray-700 hover:text-black">Services</a>
//           <a href="#" className="text-gray-700 hover:text-black">Contact</a>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           {isAuthenticated ? (
//             <Button variant="outline">Profile</Button>
//           ) : (
//             <>
//               <Button variant="outline">Login</Button>
//               <Button variant="outline">Sign Up</Button>
//             </>
//           )}
//         </div>
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//       {isOpen && (
//         <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
//           <a href="#" className="text-gray-700 hover:text-black">Home</a>
//           <a href="#" className="text-gray-700 hover:text-black">About</a>
//           <a href="#" className="text-gray-700 hover:text-black">Services</a>
//           <a href="#" className="text-gray-700 hover:text-black">Contact</a>
//           {isAuthenticated ? (
//             <Button variant="outline">Profile</Button>
//           ) : (
//             <>
//               <Button variant="outline">Login</Button>
//               <Button variant="outline">Sign Up</Button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
