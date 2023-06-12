/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#FF9800',
        ternary: '#8BC34A'
      },
    },
  },
  plugins: [],
}