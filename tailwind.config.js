/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "bgBlue": "var(--blue)",
        
      },
      textColor:{
        "textBlue": "var(--blue)",
        "textGreen": "var(--green)",
        "textRed": "var(--red)",
        "textYellow": "var(--yellow)",
        "textGray": "var(--gray)",
        "textBlack": "var(--black)",
        "textWhite": "var(--white)",
        skin : {
          base: "var(--color-text-base)",
        }
      }
    },
  },
  variants:{
    extend: {
      
    }
  },
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}

