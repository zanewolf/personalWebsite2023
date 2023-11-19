npm run dev
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'serif':['Libre Baskerville']

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: '#777777',
        secondary: {
          100: "#212121",
          200: '#0ab5b9', //datavizstuff
          300: '#b95dfa', //webstuff
          400: '#40ce03', //scistuff
          500:'#ee18b6',
          600:'#032470',
          700:'#080605'
        }
      },
    },
  },
  plugins: [],
}
