/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ze-green': '#4E7C2D',
        'ze-blue': '#3B7CA4',
        'ze-beige': '#DCCDB7',
      }
    },
  },
  plugins: [],
}
