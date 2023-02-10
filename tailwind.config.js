/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-photo': "url()",

      }
    },
  },
  plugins: [require("daisyui")],
}
