/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Agregar Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Cargar el plugin de Flowbite
  ],
}
