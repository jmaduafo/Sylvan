/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '0px',

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '992px',
      // => @media (min-width: 992px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1320px',
      // => @media (min-width: 1320px) { ... }

      '2xl': '1660px',
      // => @media (min-width: 1920px) { ... } 
    },
    fontFamily: {
      'sans': 'Lato, sans-serif',
      'serif': 'Rigata, serif',
    },
    backgroundImage: {
      'footer-pic': "url('./assets/footer-pic.jpg')",
      'hero-pic': "url('./assets/hero-image.jpg')",
      'hero-pic2': "url('./assets/hero-pic2.jpg')",
      'hero-pic3': "url('./assets/hero-pic3.jpg')",
      'hero-pic4': "url('./assets/hero-pic4.jpg')",
      'chocolateGradient': "linear-gradient(180deg, rgba(46, 22, 8, 0.10) 0%, rgba(46, 22, 8, 0.60) 100%)"
    },
    extend: {
      colors: {
        olive: "#716C4F",
        cream: "#F9F1E6",
        sienna: "#9B4F17",
        chocolate: "#2E1608",
        creamOpaque: "rgba(249, 241, 230, 0.30)",
        chocolateOpaque: "rgba(249, 241, 230, 0.30)",
        siennaOpaque: "rgba(155, 79, 23, 0.30)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
