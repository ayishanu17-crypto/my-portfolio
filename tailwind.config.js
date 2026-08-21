/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',      // base background
        ink: '#0A0A0B',        // primary text
        muted: '#6B7280',      // secondary text
        line: '#E7E7EA',       // hairline borders
        accent: '#1D4ED8',     // single restrained accent (indigo)
        'accent-soft': '#EEF2FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
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
