/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'template-parts/**/*.php',
    'index.php',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-guinda": "linear-gradient(90deg, hsla(3, 78%, 95%, 1) 0%, hsla(3, 78%, 95%, 1) 50%, hsla(0, 73%, 90%, 1) 100%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '3rem',
          '2xl': '6rem',
        }
      },
      fontFamily: {
        'pinyon': ["Pinyon Script", 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        "base-5": "#fef0f0",
        "base-10": "#feecec",
        "base-50": "#EBAE9D",
        "base-100": "#BE7B6B",
        "base-200": "#D9D0BF",
        "base-300": "#ffe5e6",
        'accent': "#D3A58E",
        "neutral": "#AE7F76",
        "neutral-50": "#7a958c",
        "neutral-100": "#E7858F"
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        '.font-main': {
          fontSize: "calc(52px + (58 - 52) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.font-secondary': {
          fontSize: "calc(28px + (34 - 28) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.font-base100': {
          fontSize: "calc(20px + (24 - 20) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.font-base200': {
          fontSize: "calc(18px + (22 - 18) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.parrafo': {
          fontSize: "calc(15px + (18 - 15) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.small': {
          fontSize: "calc(13px + (14 - 13) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
        '.font-btn': {
          fontSize: "calc(16px + (16 - 16) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.4
        },
      })
    })
  ],
}

