/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00a8cc',
        seablue: {
          400: '#ADD8E6',
        },
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}
