import ThemeSwitch from "@/components/ThemeSwitch";
import LogoFilled from "@/ui/LogoFilled";
import Link from "next/link";

export default function Header () {
    return (
        <header>
            <div className="hidden md:block bg-oxblue-950 dark:bg-white text-white dark:text-oxblue-950">
                <div className="lg:container lg:mx-auto">
                    <ul className="flex flex-row-reverse list-none">
                        <li className="p-2">
                            <ThemeSwitch />
                        </li>
                        <li className="p-2">
                            <Link className="ur ur-white text-sm" href="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="ur ur-white text-sm" href="/">
                                English
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white">
                <LogoFilled className="logo logo-filled h-8 w-full fill-oxblue-800 dark:fill-white" />
            </div> */}
        </header>
    )
}