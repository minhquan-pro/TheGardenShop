/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep forest green - màu chính của The Garden
        primary: {
          50: '#f0f7f0',
          100: '#d8ecd8',
          200: '#b3d9b3',
          300: '#7bbf7b',
          400: '#4da04d',
          500: '#2A5C2A',
          600: '#1f4a1f',
          700: '#183918',
          800: '#122a12',
          900: '#0c1f0c',
          DEFAULT: '#2A5C2A',
        },
        // Warm gold - màu phụ
        secondary: {
          50: '#fdf9ee',
          100: '#f9f0d0',
          200: '#f2dfa0',
          300: '#e8c966',
          400: '#C9A84C',
          500: '#b8913a',
          600: '#9a7530',
          700: '#7d5e25',
          DEFAULT: '#C9A84C',
        },
        cream: '#F8F4ED',
        dark: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
