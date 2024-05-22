import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/app/providers";
import "@/app/globals.css";
import Head from "next/head";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin', 'cyrillic']
});

export const metadata: Metadata = {
  title: "STW",
  description: "STW Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  let className = `${roboto.className} bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white`;

  return (
    <html suppressHydrationWarning>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        </Head>
        <body className={className}>
            <Providers>
                <main>
                    {children}
                </main>
            </Providers>
        </body>
    </html>
  );
}
