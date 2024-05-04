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
        primary: {
          1: "#010C15",
          2: "#011627",
          3: "#011221",
        },
        secondary: {
          1: "#607B96",
          2: "#3C9D93",
          3: "#4D5BCE",
          4: "#FFFFFF",
          5: "#E5E9F0",
        },
        accent: {
          1: "#FEA55F",
          2: "#43D9AD",
          3: "#E99287",
          4: "#C98BDF",
        },
        stroke: "#1E2D3D",
        gradient: {
          1: "#4D5BCE",
          2: "#43D9AD",
        },
      },
      aspectRatio: {
        A4: "21 / 29.7",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        base: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        headline: "3.875rem",
        subheadline: "2rem",
      },
    },
  },
  plugins: [],
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
