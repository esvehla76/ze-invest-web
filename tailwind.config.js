/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
