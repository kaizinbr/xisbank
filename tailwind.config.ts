import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            primary: {
                "50": "#fffeea",
                "100": "#fffbc5",
                "200": "#fff785",
                "300": "#ffec46",
                "400": "#ffdd1b",
                "500": "#fbba00",
                "600": "#e29100",
                "700": "#bb6702",
                "800": "#984f08",
                "900": "#7c410b",
                "950": "#482100",
            },
            secondary: {
                "50": "#fef7ec",
                "100": "#fae9cb",
                "200": "#f5d092",
                "300": "#f0b259",
                "400": "#ec9733",
                "500": "#e5781e",
                "600": "#ca5615",
                "700": "#a83b15",
                "800": "#892e17",
                "900": "#712716",
                "950": "#401108",
            },
            "irish-coffee": {
                "50": "#f8f6ee",
                "100": "#efe9d2",
                "200": "#e0d4a8",
                "300": "#ceb876",
                "400": "#bf9f50",
                "500": "#b08b42",
                "600": "#976f37",
                "700": "#7a542e",
                "800": "#66462d",
                "900": "#5a3d2b",
                "950": "#331f15",
            },
            parchment: {
                "50": "#f9f6ed",
                "100": "#f4eed8",
                "200": "#e6d4a2",
                "300": "#d7b86d",
                "400": "#ca9e45",
                "500": "#ba8a38",
                "600": "#a06c2e",
                "700": "#815027",
                "800": "#6c4327",
                "900": "#5d3926",
                "950": "#351e13",
            },
            stone: {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09",
            },
        },
        screens: {
            small: "640px",
            // => @media (min-width: 640px) { ... }

            arquery: "980px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1152px",
            // => @media (min-width: 1280px) { ... }
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },

    plugins: [],
};
export default config;
