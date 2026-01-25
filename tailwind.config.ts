import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#37ca37',
          green: '#32a057',
        },
        secondary: {
          DEFAULT: '#188bf6',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'Space Grotesk', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
