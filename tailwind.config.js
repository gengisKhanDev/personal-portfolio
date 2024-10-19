import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundColor: {
        algo: {
          100: '#13151a',
        },
      },
    },
  },
  mode: 'jit', // Just-in-time mode (para asegurar que Tailwind compile todo en desarrollo)
  plugins: [
    flowbite.plugin(),
  ],
}
