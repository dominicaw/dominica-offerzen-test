module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'in-production': '#00A9C9',
      'background': '#F6F6F6',
      'border': '#E0E0E0',
      'grey': '#767676',
      'black': '#212121',
      'white': '#FFFFFF',
      'light-green': '#BCDA84',
      'dark-green': '#00434B',
      'white-smoke': '#f5f8f8',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
