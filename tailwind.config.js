/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'transmission-lines': "url('/public/transmission-bg.png')",
      },
    },
  },
  plugins: [],
};