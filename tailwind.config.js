module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whatsapp_bg: '#e5ded8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
