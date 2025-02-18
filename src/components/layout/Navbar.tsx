'use client';

import LocaleDropdown from './LocaleDropdown';
import NavLinks from './NavLinks';
import Logo from './Logo';
import SearchBtn from './SearchBtn';

import { IoMdClose } from 'react-icons/io';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import { useState } from 'react';
import { Btn } from '../ui/Btn';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const textColor = `text-gray-300 hover:text-black dark:text-white dark:hover:text-gray-300`;

  return (
    // <nav className="fixed flex h-16 w-full items-center justify-between bg-gray-900 px-4">
    //   <Logo />
    //   <NavLinks />
    //   <LocaleDropdown />
    //   <SearchBtn />
    //   {/* <ProfileDropdown /> */}
    // </nav>
    <nav
      className={`bg-white p-4 shadow-md shadow-black dark:bg-black dark:shadow-white`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className={`${textColor}`}
          >
            Home
          </Link>{' '}
          <Link
            href="/about"
            className={`${textColor}`}
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Btn variant="outline">Login</Btn>
          <Btn>Sign Up</Btn>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoMdClose className={`${textColor}`} size={`1.5rem`} />
          ) : (
            <IoMdMenu className={`${textColor}`} size={`1.5rem`} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <Link href="/" className={`${textColor}`}>Home</Link>
          <Link href="/about" className={`${textColor}`}>About</Link>
          <Btn variant="outline">Login</Btn>
          <Btn>Sign Up</Btn>
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
