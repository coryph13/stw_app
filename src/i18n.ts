import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/config";

export default getRequestConfig(async ({locale}) => {
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (
            await (locale === 'ru'
                ? import ('../messages/ru.json')
                : import (`../messages/${locale}.json`))
        ).default,
        // messages: (await import(`../messages/${locale}.json`)).default,
        timeZone: 'Asia/Tashkent'
    }
})