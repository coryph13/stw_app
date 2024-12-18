import { currentLocale } from "@/config";
import { IToken } from "@/types/token";
import { IUser } from "@/types/user";
import { revalidateTag } from "next/cache";

export async function auth(formData: FormData, action : string) {
    // export async function getProducts(): Promise<IProductList> {
    // const locale = currentLocale; // await and set to localStorage

    const response = await fetch(
        action,
        {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
                "Content-Language": currentLocale
            },
            cache: 'force-cache',
            next: {
                revalidate: 3600,
                tags: ['user'],
            },
        }
    );

    // TODO: Revalidate products, decors, collections due to Favorites and Views Count.
    // revalidateTag('user');

    if (response.ok) {
        const token: IToken = await response.json();

        return token
    } else {
        // Handle errors
    }
}

export async function login(formData: FormData) {
    const response = await fetch(
        `http://api.stw.test/v1/auth/login`,
        {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
                "Content-Language": currentLocale
            },
            cache: 'force-cache',
            next: {
                revalidate: 3600,
                tags: ['user'],
            },
        }
    );

    if (response.ok) {
        const token: IToken = await response.json();

        return token
    } else {
        // Handle errors
    }
}
