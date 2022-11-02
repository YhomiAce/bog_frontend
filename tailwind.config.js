/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
  {
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
          'contact': "url('/src/components/assets/images/contact.png')",
          'faq': "url('/src/components/assets/images/faq.png')",
          'blog': "url('/src/components/assets/images/blog.png')",
          'shop': "url('/src/components/assets/images/shop.png')",
          'service': "url('/src/components/assets/images/service.png')",
          'about': "url('/src/components/assets/images/about.png')",
          'footer': "url('/src/components/assets/images/footer.png')",
          'terms': "url('/src/components/assets/images/terms.png')",
          'privacy': "url('/src/components/assets/images/privacy.png')",
          'fantastic': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.1)),url('/src/components/images/avatar.jpg')",
          "hero": "linear-gradient(295.54deg, #AFC0FC 17.28%, #3F79AD 70.64%)"
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
)
