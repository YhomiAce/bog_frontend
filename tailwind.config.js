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
          '100': '6%',
          '102': '600px',
          '103': '550px',
          '70' : '70vh',
          '90' : '90vh',
        },
        backgroundImage: {
          'profile': "linear-gradient(to right, rgba(105, 76, 87, 1),rgba(0, 0, 0, 0.2))",
          'login': "url('/src/components/assets/images/login.png')",
          'contact': "url('/src/components/assets/images/contact.png')",
          'faq': "url('/src/components/assets/images/faq.png')",
          'blog': "url('/src/components/assets/images/blog.png')",
          'about-bg': "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1667571654/BOG/about-bg_zg8vup.png')",
          'shop': "url('/src/components/assets/images/shop.png')",
          'service': "url('/src/components/assets/images/service.png')",
          'about': "url('/src/components/assets/images/about.png')",
          'order': "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1667989518/BOG/order-bg_mmwm28.png')",
          'jot': "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1668168466/BOG/jot-bg_1_ixbffh.png')",
          'footer': "url('/src/components/assets/images/footer.png')",
          'terms': "url('/src/components/assets/images/terms.png')",
          'privacy': "url('/src/components/assets/images/privacy.png')",
          'bap': "linear-gradient(to right bottom, rgba(236, 139, 32, .5),rgba(236, 139, 32, .5)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669132417/BOG/blog2_lmtl44.png')",
          "hero": "linear-gradient(295.54deg, #AFC0FC 17.28%, #3F79AD 70.64%)",
          "app": "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1670844719/BOG/Frame_466442_qfurti.png')",
          'calc': "linear-gradient(to right bottom,rgba(63, 121, 173, 1),rgba(0, 0, 0, .8)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1672394241/BOG/calc_p82zp6.jpg')",
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
