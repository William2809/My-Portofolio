/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      }
    },
    colors: {
      background: {
        100: "#232323",
        200: "#063137",
        300: "#1F332C",
      },
      white: "#FFFFFF",
      primary: {
        100: "#32BDDC",
        200: "#166F83",
      },
      neutral: {
        100: "#999999",
        200: "#CCCCCC",
      },
      linkedin: "#0088CC",
      whatsapp: "#12EB0C",
      base: "#383838",
      primarywl: "#DAF7FB",
      neutralwl: {
        100: "#50D8EC",
        200: "#0B5A65",
        300: "#05414A",
      },
      primarylc: "#98F576",
      neutrallc: {
        100: "#325247",
        200: "#457263",
        300: "#05414A",
      },
      photo: "#057A94",

    },
    fontSize: {
      "14": "14px",
      "16": "16px",
      "18": "18px",
      "20": "20px",
      "24": "24px",
      "32": "32px",
      "36": "36px",
      "42": "42px",
    }
  },


  plugins: [],
};