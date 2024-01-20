/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

