/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Ápice (CLAUDE.md §6), con índigo levantado para contraste
        // sobre negro y un blanco cálido (sesgo naranja, no puro).
        negro: '#0E0E0E',
        carbon: '#141319',
        carbon2: '#1C1A22',
        naranja: '#E8622A',
        naranjaHot: '#F0732F',
        dorado: '#B8860B',
        doradoLit: '#D9A429',
        verde: '#2E9257',
        indigo: '#2A1F7A',
        indigoLit: '#4536B8',
        rojoA: '#C0392B',
        blancoA: '#F7F6F4',
        niebla: '#A8A29A',
        niebla2: '#6F6A63',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1140px',
      },
    },
  },
  plugins: [],
};
