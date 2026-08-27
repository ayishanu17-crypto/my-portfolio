/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#0C0C0C',      // base background (oily black)
        ink: '#F4F4F6',        // primary text (near-white on dark)
        muted: '#A1A1AA',      // secondary text
        line: 'rgba(255,255,255,0.10)', // hairline borders
        accent: '#10B981',     // Emerald accent
        'accent-soft': '#0E2B1D', // subtle emerald-tinted surface
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        hand: ['"Cedarville Cursive"', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
