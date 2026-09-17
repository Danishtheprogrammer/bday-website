/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /(bg|text|border|shadow)-(bubu|dudu)-(50|100|200|300|400|500|600)/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blush: '#ffb6c1',
        lavender: '#e6e6fa',
        softgold: '#f9e5a6',
        bubu: {
          50:  '#FFF0F5',
          100: '#FFE4EC',
          200: '#FFD1DC',
          300: '#FFD6E0',
          400: '#FF8FA3',
          500: '#FF6F91',
          600: '#D6336C',
        },
        dudu: {
          50:  '#F0FDFC',
          100: '#E0FBFC',
          200: '#CDEDF6',
          300: '#B8E8E0',
          400: '#7FDBDA',
          500: '#4FB6B0',
          600: '#1F8A85',
        },
      }
    },
  },
  plugins: [],
}