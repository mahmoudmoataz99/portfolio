/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body:    ['var(--font-syne)',  'sans-serif'],
        mono:    ['var(--font-vt323)', 'monospace'],
      },
      colors: {
        acid:    '#c8ff00',
        plasma:  '#ff2d78',
        cyber:   '#00fff0',
        void:    '#07000f',
        'void2': '#0d0020',
        violet:  '#8b00ff',
        solar:   '#ff6b00',
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#007bff',
          secondary: '#6c757d',
          success: '#28a745',
          danger: '#dc3545',
          warning: '#ffc107',
          info: '#17a2b8',
        },
      },
      animation: {
        'hue-spin':     'hueSpin 4s linear infinite',
        'blob-morph':   'blobMorph 8s ease-in-out infinite',
        'glitch':       'glitch 3s infinite',
        'float-wild':   'floatWild 6s ease-in-out infinite',
        'rgb-split':    'rgbSplit 2s infinite',
        'scanlines':    'scanlines 8s linear infinite',
        'warp':         'warp 10s ease-in-out infinite',
        'pulse-acid':   'pulseAcid 2s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
      },
      keyframes: {
        hueSpin:    { '0%': { filter: 'hue-rotate(0deg)' }, '100%': { filter: 'hue-rotate(360deg)' } },
        blobMorph:  {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%':     { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%':     { borderRadius: '50% 60% 30% 60% / 40% 30% 60% 50%' },
          '75%':     { borderRadius: '40% 70% 60% 30% / 70% 40% 50% 30%' },
        },
        glitch: {
          '0%,90%,100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-4px, 2px)', filter: 'hue-rotate(90deg)' },
          '94%': { transform: 'translate(4px, -2px)', filter: 'hue-rotate(180deg)' },
          '96%': { transform: 'translate(-2px, -2px)', filter: 'hue-rotate(270deg)' },
          '98%': { transform: 'translate(2px, 2px)' },
        },
        floatWild: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':     { transform: 'translateY(-20px) rotate(5deg)' },
          '66%':     { transform: 'translateY(10px) rotate(-3deg)' },
        },
        rgbSplit: {
          '0%,100%': { textShadow: '2px 0 #ff2d78, -2px 0 #00fff0' },
          '25%':     { textShadow: '-3px 1px #c8ff00, 3px -1px #ff2d78' },
          '50%':     { textShadow: '3px 0 #8b00ff, -3px 0 #c8ff00' },
          '75%':     { textShadow: '-2px -1px #00fff0, 2px 1px #8b00ff' },
        },
        scanlines: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
        warp: {
          '0%,100%': { transform: 'skewX(0deg) scaleY(1)' },
          '25%':     { transform: 'skewX(2deg) scaleY(1.02)' },
          '75%':     { transform: 'skewX(-2deg) scaleY(0.98)' },
        },
        pulseAcid: {
          '0%,100%': { boxShadow: '0 0 20px #c8ff00, 0 0 40px #c8ff00, inset 0 0 20px rgba(200,255,0,0.1)' },
          '50%':     { boxShadow: '0 0 40px #c8ff00, 0 0 80px #c8ff00, inset 0 0 40px rgba(200,255,0,0.2)' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
