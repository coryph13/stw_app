'use client'

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LocaleLink({ href, ...props}) {
    const { locale } = useParams();
    const localePrefix = locale ? '/' + locale : '';
    return (
        <Link href={`${localePrefix}${href}`} {...props} />
    );
}
