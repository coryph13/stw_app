'use client'

import { login } from "@/actions/auth";
import { getLocale } from "next-intl/server";
import { useParams } from "next/navigation";
import React, { useState, FormEvent } from "react";

// type Error = {
//     message: string;
// }

export function LoginForm({
    params
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const locale = await getLocale();

        setIsLoading(true);
        setError(null);

        try {
            const response = await login(new FormData(event.currentTarget), locale);

            const data = await response.json();
            // console.log(data, localStorage.getItem('token'));
        } catch (e) {
            setError(error)
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="login">Email</label>
                <input id="login" name="login" type="text" placeholder="Email or Phone Number" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
            </button>
        </form>
    );
}
