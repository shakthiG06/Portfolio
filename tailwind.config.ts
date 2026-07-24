import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F8FAFF',
          secondary: '#EEF2FF',
          dark: '#0A0F1E',
          darkSecondary: '#111827',
        },
        blue: {
          primary: '#3B82F6',
          accent: '#60A5FA',
          deep: '#1E40AF',
          light: '#DBEAFE',
          glow: 'rgba(59,130,246,0.25)',
        },
        gold: '#D4A853',
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          darkPrimary: '#E2E8F0',
          darkSecondary: '#94A3B8',
        },
        glass: {
          light: 'rgba(255,255,255,0.35)',
          border: 'rgba(255,255,255,0.4)',
          dark: 'rgba(10,15,30,0.4)',
          darkBorder: 'rgba(59,130,246,0.15)',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #3B82F6, #60A5FA, #1E40AF)',
        'gradient-royal': 'linear-gradient(135deg, #1E40AF, #3B82F6)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(59,130,246,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(96,165,250,0.25) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(30,64,175,0.15) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(212,168,83,0.12) 0px, transparent 50%)',
        'gradient-mesh-dark': 'radial-gradient(at 40% 20%, rgba(59,130,246,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(96,165,250,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(30,64,175,0.08) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'particle-fall': 'particleFall 8s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(59,130,246,0.7), 0 0 80px rgba(59,130,246,0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        particleFall: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.4)',
        'glow-blue-lg': '0 0 60px rgba(59,130,246,0.5)',
        'glass': '0 8px 32px rgba(59,130,246,0.12)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
