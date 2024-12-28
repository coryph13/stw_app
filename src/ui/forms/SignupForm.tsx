'use client'

import { sign_up } from "@/actions/auth";
import { FormEvent, useState } from "react";

export function SignupForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        try {
            const response = await sign_up(new FormData(event.currentTarget));

            const data = await response.json();
            console.log(data, localStorage.getItem('token'));
        } catch (error) {
            setError(error.message)
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Name" />
            </div>
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
