/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8f9fb',
          100: '#f0f2f7',
          200: '#dce2f0',
          300: '#c8cfe8',
          400: '#a1aed8',
          500: '#7a8dc8',
          600: '#1a2a4e',
          700: '#0f1a2e',
          800: '#0a0f1f',
          900: '#050810',
        },
        steel: {
          50: '#f8f9fa',
          100: '#eef1f6',
          200: '#dfe5ed',
          300: '#cbd4e3',
          400: '#a8b8d1',
          500: '#7a89a3',
          600: '#5a6b7f',
          700: '#404b5e',
          800: '#2a303e',
          900: '#1a1f2a',
        },
        accent: {
          orange: '#ff6b35',
          amber: '#ffa500',
          bright: '#ff8c00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
        '4xl': ['40px', { lineHeight: '48px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['56px', { lineHeight: '64px' }],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        slideDown: 'slideDown 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.5)' },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0f1f 0%, #1a2a4e 100%)',
        'gradient-navy': 'linear-gradient(180deg, #0f1a2e 0%, #1a2a4e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff6b35 0%, #ff8c00 100%)',
        'grid-pattern': 'linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
