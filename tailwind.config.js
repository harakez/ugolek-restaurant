/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'gray': {
            900: '#1a1a1a',
            800: '#2d2d2d',
          },
          'orange': {
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
          },
          'beige': {
            100: '#fef7ed',
            200: '#fed7aa',
          }
        }
      },
    },
    plugins: [],
  }