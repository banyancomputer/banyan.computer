module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000000",
      white: '#ffffff',
      blue: {
        '400': '#419BBF',
        '500': '#394873',
        '600': '#2C3F59',
        '700': '#070C26'
      },
      red: {
        '400': '#F21B1B',
        '700': '#8C1414'
      },
      yellow: '#F29F05',
      green: '#2E5959'
    },
    fontFamily: {
      serif: "'Martel', serif"
    },
    extend: {
    },
  },
  plugins: [],
}
