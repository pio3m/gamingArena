/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'neon-blue': '#00f3ff',
          'neon-pink': '#ff00ff',
        },
      },
    },
    plugins: [],
  }