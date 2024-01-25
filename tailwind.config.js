/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl:'1440px',
        md: '1024px'
      },
      colors: {
        'costum-blue': 'rgba(16, 113, 255, 1)',
        'costum-orange': 'rgba(255, 126, 39, 1)',
        'costum-gray': 'rgba(246, 248, 251, 1)',
        'costum-text-black': 'rgba(12, 12, 12, 1)',
        'star': 'rgba(230, 239, 251, 1)',
        'costum-green': 'rgba(0, 137, 58, 1)',
      },
    },
  },
  plugins: [],
};
