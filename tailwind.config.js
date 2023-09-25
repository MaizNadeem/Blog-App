import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
        plugins: [
        nextui({
            themes: {
            light: {
                colors: {
                background: "#FFFFFF", // or DEFAULT
                foreground: "#11181C", // or 50 to 900 DEFAULT
                primary: {
                    50: "#FEFCE8",
                    100: "#FDEDD3",
                    200: "#FBDBA7",
                    300: "#F9C97C",
                    400: "#F7B750",
                    500: "#F5A524",
                    600: "#C4841D",
                    700: "#936316",
                    800: "#62420E",
                    900: "#312107",
                    foreground: "#11181C",
                    DEFAULT: "#F5A524",
                },
                focus: "#F9C97C",
                },
            },
            dark: {
                colors: {
                background: "#121212", // or DEFAULT
                foreground: "#ECEDEE", // or 50 to 900 DEFAULT
                primary: {
                    50: "#FEFCE8",
                    100: "#FDEDD3",
                    200: "#FBDBA7",
                    300: "#F9C97C",
                    400: "#F7B750",
                    500: "#F5A524",
                    600: "#C4841D",
                    700: "#936316",
                    800: "#62420E",
                    900: "#312107",
                    foreground: "#FFFFFF",
                    DEFAULT: "#F5A524",
                },
                focus: "#C4841D",
                },
                // ... rest of the colors
            },
            mytheme: {
                // custom theme
                extend: "dark",
                colors: {
                primary: {
                    DEFAULT: "#BEF264",
                    foreground: "#000000",
                },
                focus: "#BEF264",
                },
            },
            },
        }),
    ],
}
