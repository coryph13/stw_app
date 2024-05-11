'use client'

// import Header from "@/components/Header";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Nav/Main";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {

    const callAPI = async () => {
        try {
            const res = await fetch(
                `http://api.stw.test/formats`,
                {
                    method: 'GET',
                    headers: {
                        'X-localization': 'ru',
                    }
                }
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    let test = callAPI();

    return (
        <>
            <Header />
            <Main />
            <Hero />
        </>
    );
}