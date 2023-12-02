/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fs-12': '12px'
      },
      fontWeight: {
        'fw-400': '400',
        'fw-700': '700'
      },
      fontFamily: {
        'Kumbh': ["'Kumbh Sans', 'serif'"]
      },
      colors: {
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14,88%,65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240,6%,50%)',
        'light-grayish-blue': 'hsl(240,5%,50%)',
      },
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(135deg, hsl(273, 75%, 66%), hsl(240, 73%, 65%))',
      }),
    },
  },
  plugins: [],
}

