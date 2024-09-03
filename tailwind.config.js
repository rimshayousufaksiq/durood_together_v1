/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 // tailwind.config.js
  theme: {
    extend: {
      maxWidth: {
        'custom': '700px', // Add your custom width here
      },
    },
  },
  plugins: [],
}