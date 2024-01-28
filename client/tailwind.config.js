/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { 'buttonShadow': '0px 5px 4px 0px rgba(39, 53, 62, 0.3)' },
      backgroundImage: {
        'blueGradient': 'linear-gradient(258deg, #00C5FF 0%, #007B9F 100%)',
        'oldCouple': 'url(../../assets/images/bg-2.png)'
      },
      content: {
        'whiteArrow': 'url("../../assets/images/white-arrow.svg")',
      }
    },
    colors: {
      'brightSkyBlue': '#00c5ff',
      'dark': '#27353E',
      'white': '#fff',
      'orangeYellow': '#ffb100',
      'pumpkinOrange': '#ff7200',
      'darkWhite': '#f3f3f3',
      'gray': '#c6c6c6',
      'steel': '#7e868b',
      'coolBlue': '#428fcd',
      'aquaMarine': '#34ddb3',
      'transparent': 'transparent'
    },
  },
  plugins: [],
}

