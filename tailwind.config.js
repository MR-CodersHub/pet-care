/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(var(--primary-light))',
          DEFAULT: 'rgb(var(--primary))',
          dark: 'rgb(var(--primary-dark))',
        },
        accent: {
          teal: 'rgb(var(--accent-teal))',
          sage: 'rgb(var(--accent-sage))',
          cream: 'rgb(var(--bg-main))',
        },
        dark: 'rgb(var(--bg-dark-fixed))',
        card: 'rgb(var(--bg-card))'
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

