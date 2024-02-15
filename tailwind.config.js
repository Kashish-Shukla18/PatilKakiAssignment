/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-sage': '#B2AC88',
      },
    },
      screens:{
        ssm:'360px',
        sm:'640px',
        md:'768px',
        lg:'1024px',
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
