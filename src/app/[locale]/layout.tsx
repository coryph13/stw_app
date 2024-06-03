import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/app/providers";
import "@/styles/global.css";
import Head from "next/head";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/config";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin', 'cyrillic']
});

// export const metadata: Metadata = {
//     title: "STW",
//     description: "STW Group",
// };

type Props = {
    children: React.ReactNode;
    params: {locale: string}
}

export function generateStaticParams() {
    return locales.map((locale) => ({locale}))
}

export async function generateMetadata({
    params: {locale}
}: Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});

    return {
        title: t('title')
    }
}

export default async function LocaleLayout({
    children,
    params: {locale}
}: Props) {
    unstable_setRequestLocale(locale);
    
    const messages = await getMessages();

    const className = `${roboto.className} bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white`;
    return (
        <html lang={locale} suppressHydrationWarning>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            </Head>
            <body className={className}>
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        <main>
                            {children}
                        </main>
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
