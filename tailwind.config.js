/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['var(--font-comic)', 'Comic Neue', 'Comic Sans MS', 'cursive'],
        'spider': ['var(--font-spider)', 'Bangers', 'Impact', 'cursive'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 3s linear infinite',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-fast': 'pulse 0.5s ease-in-out infinite',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      }
    },
  },
  plugins: [],
}