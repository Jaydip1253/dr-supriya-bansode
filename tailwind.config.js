/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4E6C3',
          DEFAULT: '#D4AF37',
          dark: '#AA820A',
          metallic: '#C5A059',
          rose: '#DDA094',
          shimmer: '#F9ECC7',
        },
        champagne: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBDDC9',
          300: '#DEC4A4',
          400: '#D1AB80',
          500: '#C5935F',
        },
        pearl: {
          DEFAULT: '#FDFBF7',
          soft: '#F8F5F0',
          card: '#FFFFFF',
          dark: '#141416',
        },
        luxury: {
          dark: '#0C0E12',
          black: '#07080A',
          card: '#161920',
          border: 'rgba(212, 175, 55, 0.25)',
          glow: 'rgba(212, 175, 55, 0.15)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(212, 175, 55, 0.15)',
        'luxury-hover': '0 20px 50px -10px rgba(212, 175, 55, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-gold': '0 8px 32px 0 rgba(212, 175, 55, 0.15)',
        'glow': '0 0 25px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4E6C3 0%, #D4AF37 50%, #AA820A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF2CC 50%, #D4AF37 100%)',
        'rose-gold-gradient': 'linear-gradient(135deg, #F9E2DB 0%, #DDA094 50%, #B76E79 100%)',
        'luxury-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

