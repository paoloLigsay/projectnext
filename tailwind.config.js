/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif']
      }
    },
    screens: {
      // => @media (min-width: 320) { ... }
      xs: '320px',
      // => @media (min-width: 768) { ... }
      sm: '768px',
      // => @media (min-width: 1088px) { ... }
      lg: '1088px',
      // => @media (min-width: 1920px) { ... }
      xl: '1920px'
    }
  },
  plugins: []
};
