import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#030712',
          secondary: '#080e1a',
          dark: '#020617',
          darkSecondary: '#0b132b',
          card: '#0f172a',
        },
        blue: {
          primary: '#2563eb',
          accent: '#3b82f6',
          deep: '#1d4ed8',
          light: '#93c5fd',
          cyan: '#06b6d4',
          glow: 'rgba(37,99,235,0.35)',
        },
        pink: {
          primary: '#2563eb',
          accent: '#3b82f6',
          deep: '#1d4ed8',
          light: '#93c5fd',
          glow: 'rgba(37,99,235,0.35)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          darkPrimary: '#f8fafc',
          darkSecondary: '#94a3b8',
          muted: '#64748b',
        },
        glass: {
          light: 'rgba(255,255,255,0.04)',
          border: 'rgba(59,130,246,0.2)',
          dark: 'rgba(11,19,43,0.75)',
          darkBorder: 'rgba(59,130,246,0.25)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #38bdf8 100%)',
        'gradient-pink': 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(37,99,235,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(29,78,216,0.15) 0px, transparent 50%)',
        'gradient-mesh-dark': 'radial-gradient(at 40% 20%, rgba(37,99,235,0.22) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.18) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(29,78,216,0.12) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'particle-fall': 'particleFall 8s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37,99,235,0.35)' },
          '50%': { boxShadow: '0 0 50px rgba(37,99,235,0.7), 0 0 80px rgba(6,182,212,0.4)' },
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
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 35px rgba(37,99,235,0.4)',
        'glow-blue-lg': '0 0 70px rgba(37,99,235,0.5), 0 0 120px rgba(6,182,212,0.25)',
        'glow-pink': '0 0 35px rgba(37,99,235,0.4)',
        'glow-pink-lg': '0 0 70px rgba(37,99,235,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}

export default config

