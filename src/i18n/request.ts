import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    const messages = {
        ...(await import(`@/messages/${locale}/common.json`)).default,
        ...(await import(`@/messages/${locale}/nav.json`)).default,
        ...(await import(`@/messages/${locale}/pages.json`)).default,
    };

    return {
        locale,
        messages
    };
});
