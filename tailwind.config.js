/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      fontWeight: {
        'normal': 400,
      },
    },
  },
  plugins: [],
}

