import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileNav from "@/components/Nav/MobileNav";
import SearchBar from "@/components/SearchBar";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: {locale: string}
}

export default function IndexPage({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('IndexPage');

    return (
        <>
            <Header />
            <MobileNav />
            <Hero />
            <SearchBar />
        </>
    );
}