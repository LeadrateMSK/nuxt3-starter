/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './components/**/*/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {},
      screens: {},
      fontFamily: {}
    },
  },
  plugins: [],
};
