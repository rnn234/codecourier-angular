/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'codecourier-dark': '#1a1a1a',
        'codecourier-accent': '#ff6b6b',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}
