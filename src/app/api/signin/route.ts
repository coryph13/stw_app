import { baseApiUrl } from "@/config";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function POST(request: Request, {
    params
}: {
    params: {
        locale: string;
    }
}) {
    const { login, password } = await request.json();
    const url = new URL('/auth/login', baseApiUrl);
    const locale =
        params?.locale ||
        new URL(request.url).searchParams.get('locale') ||
        routing.defaultLocale;
    const t = await getTranslations({ locale, namespace: 'Auth' });
    const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify({
            login,
            password
        }),
        headers: {
            "Content-Type": "application/json",
            "Content-Language": locale
        },
    }

    const tokenResponse: SignInResponse = await fetch(
        url,
        options,
    ).then((res) => res.json())
}
