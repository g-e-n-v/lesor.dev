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
      },
    },
  },
  plugins: [],
  safelist: [
    "text-blue-500",
    "text-orange-500",
    "text-gray-500",
    "text-brown-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-purple-500",
    "text-pink-500",
    "text-red-500",
    "bg-blue-300",
    "bg-orange-300",
    "bg-gray-300",
    "bg-brown-300",
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-red-300",
  ],
};
