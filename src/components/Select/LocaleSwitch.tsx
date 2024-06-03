'use client'

import { useLocale, useTranslations } from "next-intl"
import { locales, Locale } from "@/config"
import React from "react"
import { useRouter, usePathname } from "@/navigation"
import { useParams } from "next/navigation"

const LocaleSwitch = ({}: {}) => {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('LocaleSwitch')
    const locale = useLocale()
    const params = useParams();

    const changeLocale = (newLocale: Locale) => {
        router.replace({pathname}, { locale: newLocale });
    }

    return (
        <div>
            <button className="ur ur-white text-sm cursor-pointer">
                {t('locale', {locale: locale})}
            </button>
            <div>
                {locales.map((code) => (
                    <button key={code} value={code} onClick={() => changeLocale(code)}>
                        {t('locale', {locale: code})}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LocaleSwitch