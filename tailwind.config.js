/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      peach: '#FFF5F5',
      primary: {
        red: '#FC4832',
        pink: '#F985A0',
        green: '#03A48D',
        redHover: '#DA321E',
      },
      secondary: {
        blue: '#3C3CE5',
        black: '#303030',
        'black-light': '#424242',
        white: '#FFFFFF',
        skyBlue: '#3398F2',
        purple: '#E55AFC',
        yellow: '#FFE03F',
        burgundy: '#B02412',
      },
      yellow: {
        400: '#F7EDE2',
        300: '#F9F1E8',
        200: '#FCF8F3',
      },
      green: {
        400: '#C7DDD2',
        click: '#D8F2E5',
        200: '#E9F1ED',
        100: '#F4F8F6',
      },
      gray: {
        hover: '#F9F9F9',
        400: '#757575',
        300: '#B7B7B7',
        200: '#DBDBDB',
        100: '#EAEAEA',
      },
      'button-state': {
        hover: '#058976',
        default: '#03A48D',
      },
    },
    extend: {
      fontFamily: {
        ballingerMono: ['BallingerMono-Medium', 'sans-serif'],
        ballinger: ['Ballinger-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
