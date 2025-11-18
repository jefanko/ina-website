/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#F77F00', // Warna utama Anda
        'brand-dark': '#D97706', // Oranye yang lebih gelap & tenang untuk gradasi/hover
      },
      backgroundImage: {
        'transmission-lines': "url('./public/transmission-bg.png')",
      },
    },
  },
  plugins: [],
};