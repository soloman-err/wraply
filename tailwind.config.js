/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#669084',
        secondary: '#436a7b',
        accent: '#dd9134',
      },
    },
  },
  plugins: [],
};
