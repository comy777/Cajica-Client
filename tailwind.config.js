/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto Condensed", "sans-serif"],
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1636px",
    },
  },
  plugins: [],
};
