/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
        emoji: ['"Apple Color Emoji"', '"Segoe UI Emoji"', '"Noto Color Emoji"', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#d4a843',
          500: '#c8a84b',
          600: '#b8963e',
        },
      },
    },
  },
  plugins: [],
}
