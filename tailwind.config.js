/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FFF8F3',
          card: '#FFFFFF',
          border: '#F3E8E2',
          highlight: '#FFF0E8',
        },
        accent: {
          pink: '#F472B6',
          coral: '#FB7185',
          lavender: '#A78BFA',
          mint: '#34D399',
          sky: '#38BDF8',
          gold: '#FBBF24',
        },
        zeta: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        glow: '0 0 20px rgba(244, 114, 182, 0.15)',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
