const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customBlue: {
          100: '#f5f7ff',
          200: '#e0e8ff',
          300: '#7280a7',
          400: '#3829e0',
          500: '#1f2f56',
        },
      },
      screens: {
        sm: '376px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
