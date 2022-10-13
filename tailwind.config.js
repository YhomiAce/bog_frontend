/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '101': '94%',
        '100': '6%'
      },
      backgroundImage: {
        'profile': "linear-gradient(to right, rgba(105, 76, 87, 1),rgba(0, 0, 0, 0.2))",
        'login': "url('/src/components/assets/images/login.png')",
        'fantastic': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.1)),url('/src/components/images/avatar.jpg')",
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'body': ['DM Sans', 'sans-serif'],
      'robot': ['Roboto Mono', 'monospace'],
      'header': ['Rubik Dirt', 'cursive'],
      'secondary': ['ABeeZee', 'sans-serif'],
      'primary':['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
