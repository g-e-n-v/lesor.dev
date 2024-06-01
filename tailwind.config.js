const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.sans],
        monaspace: ["var(--font-monaspace)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brown: {
          50: "#efebe9",
          100: "#d7ccc8",
          200: "#bcaaa4",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#5d4037",
          800: "#4e342e",
          900: "#3e2723",
        },
      },

      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        base: "15px",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.25rem",
        headline: "3.875rem",
        subheadline: "2rem",
      },
      keyframes: {
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "looping-tag": "loop 100s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
  safelist: ["blue", "orange", "gray", "brown", "yellow", "purple", "green", "red", "pink"].reduce(
    (classNames, color) => [
      ...classNames,
      `text-${color}-500`,
      `bg-${color}-300`,
      `bg-${color}-600/10`,
      `text-${color}-400`,
    ],
    []
  ),
};
