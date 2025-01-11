import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const locale =
        params?.locale ||
        new URL(request.url).searchParams.get('locale') ||
        routing.defaultLocale;
    const t = await getTranslations({ locale, namespace: 'Hello'});

    return NextResponse.json({
        greeting: t('greeting')
    });
}
