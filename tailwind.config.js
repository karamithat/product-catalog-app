/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['DM Sans', "sans-serif"],
      },
      colors: {
        'primary': '#f65d4e',
      },
    },
  },
  plugins: [],
}
