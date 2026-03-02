import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#334731",
          "green-light": "#4a6342",
          blush: "#F0D7CB",
          "blush-dark": "#e8c9ba",
          cream: "#faf8f6",
          sand: "#e8e2de",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        "header-fade-in": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "nav-in": {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "header-fade-in": "header-fade-in 0.5s ease-out forwards",
        "nav-in": "nav-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
