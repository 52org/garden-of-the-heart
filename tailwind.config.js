const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        groundColor: {
          100: '#b99269',
          200: '#b47270',
        },
        btnColor: {
          100: '#c19a85',
          200: '#d27d60',
        },
        borderColor: {
          100: '#e7dfd4',
          200: '#c4bfb9',
        },
        bgColor: {
          100: '#f9f5f2',
        },
        textColor: {
          100: '1d2820',
          200: '#e7dfd4',
        },
      },
      fontFamily: {
        gamja: ['Gamja Flower'],
      },
    },
  },
  plugins: [],
};
