/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'school-primary': '#00418c',
          'school-dark': '#002b5c', 
          'school-light': '#e6f0fa',
        },
      },
    },
    plugins: [],
  }