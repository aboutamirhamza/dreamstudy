/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      spacing:{
        primary: "1320px",
      },

      colors:{
        'primary-blue': "#080D41",
        'header-primary': '#282828',
        'header-secondary': '#3E3E3E',
        'apply-background': '#F6F9FE',
        'we-offer-background': '#F1F4F9',
        'icon-color': '#1B9FCB',
        'footer-heading-text': '#080D41',
      },

      screens:{
        'extrasmall': "320px",
      },

      backgroundImage:{
        'dream-study-section': "url('./assets/bg_image.jpg')",
      },

      fontFamily:{
        'roboto': '"Roboto", sans-serif',
        'public': '"Public Sans", sans-serif',
        'aldrich': '"Aldrich", sans-serif',
      },
      
    },
  },
  plugins: [],
}

