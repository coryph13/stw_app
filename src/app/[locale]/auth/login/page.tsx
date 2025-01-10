import { LoginForm } from "@/ui/forms/LoginForm";
export default async function Page({
    params
}: {
    params: Promise<{
        locale: string
    }>
}) {
    const { locale } = await params;

    return (
        <LoginForm locale={locale} />
    );
}
