'use client'

import { signup } from "@/app/actions/auth";

export function SignupForm() {
    return (
      <form action={signup}>
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
        <button type="submit">Sign Up</button>
      </form>
    )
  }
