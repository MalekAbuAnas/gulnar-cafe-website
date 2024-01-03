/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'g-brown': '#c2884f',
      'g-green': '#298a81',
    },
    fontFamily: {
      yeseva: ['Yeseva One', 'serif'],
    },
    backgroundImage:{
      'hero-bg': "url('/client/src/assets/bg/Kahve.jpg')",
    },
  },
  plugins: [],
}