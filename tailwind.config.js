/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./public/*.html'],
  theme: {
    fontFamily: {
      'circular-std': ['"Circular Std"', 'sans-serif'],
      'black-lives': ['"a Black Lives"', 'sans-serif'],
      'sf-pro-rounded': ['"SF Pro Rounded"', 'sans-serif'],
    },
    extend: {
      // custom user configuration
      bgGradientDeg: { 75: '75deg' },
      colors: {
        alto: '#d3d3d3',
        gray: '#878787',
        silver: '#b9b9b9',
        dorado: '#5c5c5c',
        mercury: '#e3e3e3',
        martini: '#9b9b9b',
        cardinal: '#af1b3f',
        'torch-red': '#ff003e',
        'wild-sand': '#f7f7f7',
        'mine-shaft': '#333333',
        'success-green': '#00ff0a',
      },
      keyframes: {
        loadingAnimation: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%', marginLeft: 'auto' },
        },
      },
      animation: { loadingAnimation: 'loadingAnimation 5s linear infinite' },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': angle => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(theme('bgGradientDeg', {}), {
            52.48: '52.48deg',
            250.2: '250.2deg',
          }),
        }
      );
    }),
  ],
};
