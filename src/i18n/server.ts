export async function getTranslations(
    locale: string,
    namespace: string
) {
    const { default: messages } = await import(`@/messages/${locale}.json`);
    return messages[namespace];
}
