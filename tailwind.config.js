module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        't-blue': '#3935FF',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/background.jpg')",
        'hero-avt': "url('/src/img/avt.jpg')",
      },
    },
  },
  plugins: [],
}