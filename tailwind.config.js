/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#475BE8',
        primarydark: '#1A1D1F',
        secondary: '#5266f2',
        secondarydark: '#000000',
        typo: '#808191'
      }
    },
  },
  plugins: [],
}
