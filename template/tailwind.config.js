/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// import { Dimensions } from 'react-native';
// const { Dimensions } = require('react-native');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      gray: {
        1000: '#121314',
        900: '#1A1A1A',
        800: '#222428',
        700: '#5E5E5E',
        600: '#424242',
        500: '#737373',
        400: '#8E8E8E',
        300: '#CCCCCC',
        200: '#DDDDDD',
        100: '#E7E7E7',
      },
    },
    fontFamily: {
      // FONT: ['Plus Jakarta Sans'],
      // FONT_BOLD: ['Plus Jakarta Sans'],
      // FONT_SEMIBOLD: ['Plus Jakarta Sans'],
      // FONT_MEDIUM: ['Plus Jakarta Sans'],
      // FONT_REGULAR: ['Plus Jakarta Sans'],
    },
    fontWeight: {
      REGULAR: '400',
      SEMI_BOLD: '600',
      BOLD: '700',
      EXTRA_BOLD: '900',
    },
    fontSize: {
      FONT_8: 8,
      FONT_10: 10,
      FONT_12: 12,
      FONT_14: 14,
      FONT_16: 16,
      FONT_18: 18,
      FONT_20: 20,
      FONT_22: 22,
      FONT_24: 24,
      FONT_26: 26,
      FONT_28: 28,
      FONT_30: 30,
      FONT_32: 32,
      FONT_34: 34,
    },
  },
  plugins: [],
};
