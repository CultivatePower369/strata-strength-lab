import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1C3A6A',
          dark: '#0F1E3A',
          light: '#2A4F8C',
          50: '#EEF3FB',
        },
        brand: {
          orange: '#F5922A',
          'orange-dark': '#D97A1A',
          'orange-light': '#F7A84F',
          blue: '#4AAFE8',
          'blue-dark': '#2E8DC7',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(135deg, #0F1E3A 0%, #1C3A6A 50%, #0F1E3A 100%)",
        'cta-pattern':
          "linear-gradient(135deg, #F5922A 0%, #D97A1A 100%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
}

export default config
