/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#070709',      // base background (dark, matches Projects section)
        ink: '#F4F4F6',        // primary text (near-white on dark)
        muted: '#A1A1AA',      // secondary text
        line: 'rgba(255,255,255,0.10)', // hairline borders
        accent: '#5B8BFF',     // light indigo accent (works on dark)
        'accent-soft': '#1B2645', // subtle indigo-tinted surface
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
