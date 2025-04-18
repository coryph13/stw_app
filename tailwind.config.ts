import type { Config } from "tailwindcss";

export default {
    content: [
        // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // screens: {
        //     sm: '480px',
        //     md: '768px',
        //     lg: '976px',
        //     xl: '1440px',
        // },
        // colors: {
        //     'blue': '#1fb6ff',
        //     'purple': '#7e5bef',
        //     'pink': '#ff49db',
        //     'orange': '#ff7849',
        //     'green': '#13ce66',
        //     'yellow': '#ffc82c',
        //     'gray-dark': '#273444',
        //     'gray': '#8492a6',
        //     'gray-light': '#d3dce6',
        // },
        // fontFamily: {
        //     sans: ['Graphik', 'sans-serif'],
        //     serif: ['Merriweather', 'serif'],
        // },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: '#D8CDB5',    // Тёплый бежевый
                dark: '#2E2B27',       // Тёмный серо-коричневый
                accent: '#A18755',     // Латунный
                light: '#F4F1EA',      // Светлый фон
                hover: '#3A3733',      // Цвет при наведении
            },
            // spacing: {
            //     '128': '32rem',
            //     '144': '36rem',
            // },
            // borderRadius: {
            //     '4xl': '2rem',
            // },
        },
        darkMode: 'class'
    },
    plugins: [],
} satisfies Config;
