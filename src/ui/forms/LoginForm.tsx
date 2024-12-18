'use client'

import { login } from "@/lib/auth";

export function LoginForm() {
    return (
        <form action={login}>
            <div>
                <label htmlFor="login">Email</label>
                <input id="login" name="login" type="text" placeholder="Email or Phone Number" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}
