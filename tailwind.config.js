module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: '',
  important: false,
  separator: ':',
  darkMode: 'media',
  theme: {
    extend: {
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        background: {
          100: '#fff'
        },
        primary: {
          100: '#D1DAFC',
          200: '#A4B4F9',
          300: '#748AEF',
          400: '#5067DF',
          500: '#1E37CB',
          600: '#1529AE',
          700: '#0F1E92',
          800: '#091475',
          900: '#050D61'
        },
        secondary: {
          100: '#E1FDF6',
          200: '#C3FBF3',
          300: '#A2F3EE',
          400: '#87E6E8',
          500: '#61CDD9',
          600: '#46A5BA',
          700: '#30809C',
          800: '#1E5D7D',
          900: '#124368'
        },
      }
    },
    fontFamily: {
      example: ['Example', 'Arial', 'sans-serif']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  }
}
