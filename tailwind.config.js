/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './rate/index.html'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        mkamain: '#3680ff'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}