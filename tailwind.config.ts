import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'abbey' : {
            '50': '#f5f5f6',
            '100': '#e6e6e7',
            '200': '#cfd0d2',
            '300': '#aeafb2',
            '400': '#85858b',
            '500': '#6a6a70',
            '600': '#5a5a60',
            '700': '#4d4d51',
            '800': '#444447', // Main
            '900': '#3b3b3e',
            '950': '#262527',
        },
        'oxblue' : {
            '50': '#f5f6f6',
            '100': '#e4e7e9',
            '200': '#cdd2d4',
            '300': '#aab3b6',
            '400': '#7f8b91',
            '500': '#647076',
            '600': '#565f64',
            '700': '#495055',
            '800': '#414649',
            '900': '#3d4144', // Main
            '950': '#232629',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
  darkMode: 'class',
};
export default config;
