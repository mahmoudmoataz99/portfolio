/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        comic: ['var(--font-comic)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        spider: ['var(--font-spider)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
