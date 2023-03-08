/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      minHeight: {
        "1/2": "50%",
      },
      colors: {
        "custom-blue": "#8B3BEB",
      },
    },
  },
  plugins: [],
};
