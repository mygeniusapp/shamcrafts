/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AF6A3E',    // Terracotta/Copper
        accent: '#CDB38C',      // Pale Gold/Sand
        neutral: {
          900: '#3A2A1A',       // Deep Coffee
        },
        surface: '#FAF6ED',     // Pale Beige
        background: '#FFFFFF',  // Pure White
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}