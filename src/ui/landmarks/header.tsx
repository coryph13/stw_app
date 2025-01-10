// // Initialization for ES Users
// import {
//     Collapse,
//     Ripple,
//     initTWE,
//   } from "tw-elements";

import LocaleLink from "@/ui/components/locale-link";


//   initTWE({ Collapse, Ripple });

export default function Header() {
    return (
        <header>
            <nav className="list-none m-0 p-0 overflow-hidden bg-black dark:bg-white">
                <ul>
                    <li className="float-left">
                        <a className="block text-white dark:text-black text-center py-14 px-16 no-udnerline" href="#">LOGO</a>
                    </li>
                    <li className="float-left">
                        <LocaleLink className="block text-white dark:text-black text-center py-14 px-16 no-udnerline" href={'/product'}>Products</LocaleLink>
                    </li>
                    <li className="float-left">
                        <a className="block text-white dark:text-black text-center py-14 px-16 no-udnerline" href="#">About</a>
                    </li>
                    <li className="float-left">
                        <a className="block text-white dark:text-black text-center py-14 px-16 no-udnerline" href="#">Contacts</a>
                    </li>

                    {/* Right */}
                    <li className="active float-right">
                        <a className="block text-white dark:text-black text-center py-14 px-16 no-udnerline" href="#">ThemeSwitcher</a>
                    </li>
                    <li className="active float-right">
                        <a className="block text-white dark:text-black text-center py-14 px-16 no-udnerline" href="#">LangSwitcher</a>
                    </li>
                    <li className="active float-right">
                        <div className="block text-white dark:text-black text-center py-14 px-16 no-udnerline">
                            <input type="search" />
                            <button type="submit"></button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
