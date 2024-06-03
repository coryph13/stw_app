'use client'

import SearchBarProvider from "@/context/SearchBarContext";
import { ThemeProvider } from "next-themes"

export function Providers({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" >
            <SearchBarProvider>
                {children}
            </SearchBarProvider>
        </ThemeProvider>
    );
};

