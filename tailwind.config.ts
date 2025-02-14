import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roadRage: ["var(--font-roadRage)"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        Alatsi: ["var(--font-alatsi)"],
      },
      colors: {
        colorBackground: {
          DEFAULT: "hsl(var(--backgroundColor))",
          primary: "hsl(var(--primary))",
          primary2: "hsl(var(--primary2))",
          secoundary: "hsl(var(--secoundary))",
          accent: "hsl(var(--accent))",
          hover: "hsl(var(--hover))",
          foreground: "hsl(var(--foreground))",
          text: "hsl(var(--textsecoundary))",
          card: "hsl(var(--card))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
