// // Initialization for ES Users
// import {
//     Collapse,
//     Ripple,
//     initTWE,
//   } from "tw-elements";

import { Link } from "@/i18n/routing";
import { Navbar } from "@/ui/landmarks/navbar";



//   initTWE({ Collapse, Ripple });

export default function Header() {
    return (
        <header className="">
            <Navbar />
            <hr className="h-16 bg-black"/>
        </header>
    );
}
