/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'vs':'375px',
      'us':'425px',
      'ss':'559px',
      'lg':'1024px',
      'sm':'640px',
      'md':'768px',
      'xl':'1280px'
    }
  },
  plugins: [],
}
