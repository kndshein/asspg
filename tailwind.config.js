/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    minWidth: {
      200: '200px',
    },
    screens: {
      sm: '450px',
    },
    extend: {},
  },
  plugins: [],
};
