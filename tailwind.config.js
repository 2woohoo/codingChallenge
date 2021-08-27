module.exports = {
  purge: [
    '*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bebas': 'Bebas Neue',
        'condensed': 'Roboto Condensed'
      },
      colors: {
        'lavendar': '#BB94E3',
        'lavendar-dark': 'B88AE8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
