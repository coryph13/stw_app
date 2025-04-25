import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                gray: 'var(--gray)',
                'gray-dark': 'var(--gray-dark)',
                'gray-light': 'var(--gray-light)',
                border: 'var(--border)',
                accent: 'var(--accent)',
                muted: 'var(--muted)',
                'text-muted': 'var(--text-muted)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Raleway', 'sans-serif'],
            },
            fontSize: {
                'heading-1': ['48px', { lineHeight: '1.2' }],
                'heading-2': ['32px', { lineHeight: '1.3' }],
                'base': ['16px', { lineHeight: '1.5' }],
                'small': ['14px', { lineHeight: '1.4' }],
                'tiny': ['12px', { lineHeight: '1.3' }],
            },
            screens: {
                xs: '360px',
                sm: '480px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.25rem',
                    md: '2rem',
                    lg: '2.5rem',
                    xl: '3rem',
                    '2xl': '4rem',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
