'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Nav/Main";
import Search from "@/components/Search";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <Hero />
            <Search />
        </>
    );
}