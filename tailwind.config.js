/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/swiper/swiper-bundle.min.css"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

