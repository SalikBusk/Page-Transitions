/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#FCFAF1",
        dark: "#2F2F2F",
      },
    },
  },
  plugins: [],
}