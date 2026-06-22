/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#5f6368',
        dark: '#1a1a1a',
        'dark-card': '#2d2d2d',
        'dark-border': '#404040'
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}
