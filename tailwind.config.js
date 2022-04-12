module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // From color hunt https://colorhunt.co/palette/8d8daadfdfdef7f5f2f56d91
        primary: '#8D8DAA',
        secondary: '#F56D91',
        neutral: '#DFDFDE',
        white: '#F7F5F2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
