// Logo with text

import LogoFilled from "@/ui/LogoFilled";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiAlignLeft, FiAlignRight, FiMenu, FiSearch, FiX } from "react-icons/fi";
import ThemeSwitch from "@/components/ThemeSwitch";
import Search from "@/components/Search";

export default function Main() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { key: 1, link: 'products', text: 'Products' },
        { key: 2, link: 'decors',   text: 'Decors' },
        { key: 3, link: 'purposes', text: 'Purposes' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white">
            <div className="lg:container lg:mx-auto flex w-full flex-wrap items-center justify-between h-20">
                <div className="flex items-center justify-between md:w-auto w-full">
                    <a href="/" className="flex items-center py-5 px-2 flex-1">
                        <LogoFilled className="logo logo-filled h-8 fill-oxblue-800 dark:fill-white mb-2" />
                    </a>

                    {/* Mobile Navbar Button */}
                    <div className="md:hidden flex items-center">
                        <FiSearch className="cursor-pointer w-6 h-6 mr-4"></FiSearch>
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
                        ? 'md:hidden bg-white dark:bg-oxblue-950 fixed top-20 bottom-0 left-0 right-0'
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
                        <Search></Search>
                    </button>
                </div>
            </div>
        </nav>
    );
}


{/* <nav class="border-gray-200">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" class="flex">
        <svg class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg>
            <span class="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
            <a href="#" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Dropdown <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                    </li>
                    </ul>
                    <div class="py-1">
                    <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </div>
                </div>
            </li>
            <li>
            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
            </li>
            <li>
            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Pricing</a>
            </li>
            <li>
            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
            </li>
        </ul>
        </div>
    </div>
</nav> */}