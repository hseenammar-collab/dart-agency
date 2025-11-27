import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #DAA520, #FFD700, #DAA520)',
        'gradient-gold-dark': 'linear-gradient(135deg, #B8860B, #DAA520, #B8860B)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        '3d': '0 10px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)',
        '3d-hover': '0 20px 60px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4)',
        'neon': '0 0 20px rgba(var(--accent-rgb), 0.5), 0 0 40px rgba(var(--accent-rgb), 0.3)',
        'gold': '0 4px 20px rgba(218, 165, 32, 0.3)',
        'gold-lg': '0 8px 40px rgba(218, 165, 32, 0.4)',
        'gold-glow': '0 0 30px rgba(218, 165, 32, 0.5), 0 0 60px rgba(218, 165, 32, 0.3)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        gold: {
          DEFAULT: '#DAA520',
          light: '#FFD700',
          dark: '#B8860B',
          50: '#FFF9E6',
          100: '#FFF0CC',
          200: '#FFE099',
          300: '#FFD066',
          400: '#FFC033',
          500: '#DAA520',
          600: '#B8860B',
          700: '#8B6914',
          800: '#5E4A0F',
          900: '#312707',
        },
        navy: {
          DEFAULT: '#0A1628',
          light: '#152238',
          dark: '#050B14',
          50: '#E8EDF5',
          100: '#C5D1E5',
          200: '#8FA3C5',
          300: '#5975A5',
          400: '#2A4A7A',
          500: '#152238',
          600: '#0A1628',
          700: '#050B14',
          800: '#030710',
          900: '#01030A',
        },
        'dart-red': {
          DEFAULT: '#E63946',
          light: '#F25C68',
          dark: '#C42836',
          50: '#FEE8EA',
          100: '#FDD1D5',
          200: '#FAA3AA',
          300: '#F77580',
          400: '#F54755',
          500: '#E63946',
          600: '#C42836',
          700: '#9E202C',
          800: '#781821',
          900: '#521016',
        },
        'dart-black': {
          DEFAULT: '#1D1D1D',
          light: '#2D2D2D',
          dark: '#0D0D0D',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(218, 165, 32, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(218, 165, 32, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'count-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
