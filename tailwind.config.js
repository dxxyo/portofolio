/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Roboto Slab', 'serif'],
    },
    colors: {
      'background': '#C7C2BC',
      'highlight': '#EF4835',
      'head': '#432B2B',
      'off': '#645555',
      'background-white': '#D0D0D0',
    },
    extend: {},
  },
  plugins: [],
}