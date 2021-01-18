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
        primary: '#8ad429',
        background: {
          100: '#fff'
        }
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
