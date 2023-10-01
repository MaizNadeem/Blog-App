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
                background: {
                    50: "#f4f4f4",
                    100: "#f0f0f0",
                    200: "#ececec",
                    300: "#e8e8e8",
                    400: "#e4e4e4",
                    500: "#e0e0e0",
                    600: "#dcdcdc",
                    700: "#d8d8d8",
                    800: "#d4d4d4",
                    900: "#d0d0d0",
                    DEFAULT: "#FFFFFF",
                },
                foreground: "#11181C",
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
                background: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#EEEEEE",
                    300: "#E0E0E0",
                    400: "#BDBDBD",
                    500: "#9E9E9E",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                    DEFAULT: "#121212",
                },
                foreground: "#ECEDEE",
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
