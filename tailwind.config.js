/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#0E141B',
        primary: '#00C8FF',
        text: {
          base: '#E6EEF5',
          muted: '#A3B3C2',
        },
        accent: '#34D399',
        purple: '#A855F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(0,200,255,.35)',
        'neon-sm': '0 0 12px rgba(0,200,255,.25)',
        glow: '0 0 20px rgba(52,211,153,.3)',
        'purple-sm': '0 0 12px rgba(168,85,247,.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite alternate',
        'draw-line': 'drawLine 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseNeon: {
          '0%': { boxShadow: '0 0 12px rgba(0,200,255,.25)' },
          '100%': { boxShadow: '0 0 24px rgba(0,200,255,.35)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        200: '200ms',
        250: '250ms',
      },
    },
  },
  plugins: [],
};
