/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#6a4105',
        'background': '#f5f0e9',
      }, 
      fontFamily: {
        default: ['"Source Sans Pro"']
      },
    },
  },
  plugins: [],
}
