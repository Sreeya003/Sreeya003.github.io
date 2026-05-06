/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f1c',
        paper: '#fdfdfb',
        rule: '#e7e5e0',
        cobalt: {
          50: '#eef2ff',
          100: '#dbe3ff',
          500: '#3b5bdb',
          600: '#2a45c8',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#0a1f5c',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
