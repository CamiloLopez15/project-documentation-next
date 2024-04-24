import type { Config } from "tailwindcss";
import animations from "tailwindcss-animated";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-dark-gray": "#C4C4C4",
                "primary-dark-orange": "#FCA311",
                "primary-light-blue": "#339AF0",
            },
            backgroundColor: {
                "primary-dark": "#FCA311",
                "primary-light": "#339AF0",
            },
            keyframes: {
                reflection: {
                    "0%, 100%": { transform: "scaleX(1)" },
                    "50%": { transform: "scaleX(-1)" },
                },
            },
            animation: {
                reflection: "reflection 0.5s ease-in-out",
            },
        },
    },
    plugins: [animations],
};
export default config;
