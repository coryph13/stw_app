import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
    children: React.ReactNode
    params: {locale: string}
}

export default function Products({children, params: {locale}}: Props) {
    unstable_setRequestLocale(locale);

    // const t = useTranslations('IndexPage');

    return (
        <>
            Products Page
        </>
    );
}