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
      'white': '#fff',
      'blue': '#00C5FF',
      'darkBlue': '#27353E',
      'gray': '#7A7A7A',
      'orange': '#FF7200',
      'dark': '#858585',
      'colorBg': '#F3F3F3',
      'transparent': 'transparent'
    },
  },
  plugins: [],
}

