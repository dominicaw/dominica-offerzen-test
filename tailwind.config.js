module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent:        'transparent',
      current:            'currentColor',
      'white':            '#FFFFFF',
      'oxford-blue':      '#343951',
      'cornflower-blue':  '#5EA5EE',
      'scooter':          '#3f3cbb',
      'jungle-green':     '#34B96F',
      'mandy':            '#E25C59',
      'white-ice':        '#D9EEF8',
      'jumbo':            '#7C7C80',
      'gray-chateau':     '#A6ACAF',
      'mystic':           '#E4EBEF',
      'catskill-white':   '#EEF3F6',
      'athens-gray':      '#F9FAFB',
    },
    extend: {
      spacing: {
        '12px': '12px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
