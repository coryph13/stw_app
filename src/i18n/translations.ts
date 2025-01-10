'use client';

import { useParams } from "next/navigation";
import defaultMessages from "@/messages/en.json";
import { useEffect, useState } from "react";
import { getTranslations } from "@/i18n/server";

export function useTranslations(namespace: string) {
    const { locale } = useParams();
    const [translations, setTranlations] = useState<string | null>(defaultMessages[namespace]);

    useEffect(() => {
        getTranslations(locale, namespace).then((t) => {
            setTranlations(t);
        });
    }, [locale]);

    return translations;
}
