'use client';

import LocaleDropdown from '@/components/layout/LocaleDropdown';
import NavLinks from './NavLinks';
import Logo from './Logo';
import SearchBtn from './SearchBtn';

import { IoMdClose } from 'react-icons/io';
import { IoMdMenu } from 'react-icons/io';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Btn } from '@/components/ui/Btn';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Nav');

  const textClass = `text-dark hover:text-accent dark:text-white dark:hover:text-gray-300`;

  useEffect(() => {
    // Закрываем меню при изменении маршрута
    setIsOpen(false);
  }, [pathname]);

  return (
    // <nav className="fixed flex h-16 w-full items-center justify-between bg-gray-900 px-4">
    //   <Logo />
    //   <NavLinks />
    //   <LocaleDropdown />
    //   <SearchBtn />
    //   {/* <ProfileDropdown /> */}
    // </nav>
    <nav
      className={`bg-light p-4 shadow-md shadow-dark dark:bg-dark dark:shadow-light`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <div className={`hidden space-x-6 md:flex`}>
          <NavLinks textClass={`${textClass}`} />
        </div>

        <LocaleDropdown />
        
        <div className="hidden space-x-4 md:flex">
          <Btn variant="outline">{t('login')}</Btn>
          <Btn>{t('sign-up')}</Btn>
        </div>

        <button
          className="text-light md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdClose className={`${textClass}`} size={`1.5rem`} />
          ) : (
            <IoMdMenu className={`${textClass}`} size={`1.5rem`} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 text-center md:hidden">
          <NavLinks textClass={`${textClass}`} />

          <Btn variant="outline">{t('login')}</Btn>
          <Btn>{t('sign-up')}</Btn>
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
