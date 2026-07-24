import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const NotFound: React.FC = () => {
  const { isDark } = useTheme()

  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${10 + i * 8}%`,
    delay: i * 0.5,
    duration: 5 + Math.random() * 4,
    size: 4 + Math.random() * 4,
  }))

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-bg-dark' : 'bg-bg-primary'} overflow-hidden relative`}>
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-accent/15 blur-3xl animate-float-slow pointer-events-none" />

      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20 blur-[1px] pointer-events-none"
          style={{ left: p.left, top: '-20px', width: `${p.size}px`, height: `${p.size}px` }}
          animate={{ y: '110vh', opacity: [0.8, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="text-center z-10 px-6">
        {/* 404 text */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 12 }}
          className="mb-6"
        >
          <h1 className="font-playfair text-[10rem] font-black leading-none text-gradient opacity-90 select-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.h2
          className={`font-playfair text-3xl font-bold mb-4 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className={`font-inter text-base mb-8 max-w-md mx-auto ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          The page you are looking for does not exist or has been moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-blue text-white font-inter font-semibold text-sm shadow-glow-blue"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
