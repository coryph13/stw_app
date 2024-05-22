'use client'

import { createContext } from "react";
import { ThemeProvider } from "next-themes"
import StoreProvider from "@/lib/providers/StoreProvider";

export function Providers({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <StoreProvider>
            <ThemeProvider attribute="class" defaultTheme="light" >
                {children}
            </ThemeProvider>
        </StoreProvider>
    );
};

