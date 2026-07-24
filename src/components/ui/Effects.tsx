import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Loading Screen ────────────────────────────────────────────
const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShow(false)
            setTimeout(onComplete, 600)
          }, 400)
          return 100
        }
        return prev + Math.random() * 8 + 2
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  // Floating particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 4,
    size: 4 + Math.random() * 6,
  }))

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Particles */}
          {particles.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-blue-500/30 blur-[1px] pointer-events-none"
              style={{ left: p.left, top: '-20px', width: `${p.size}px`, height: `${p.size}px` }}
              animate={{ y: '110vh', opacity: [0.8, 0.4, 0] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Center Content */}
          <div className="flex flex-col items-center gap-8 z-10">
            {/* SG Initials */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.6)]">
                <span className="font-playfair text-5xl font-bold text-white tracking-wide">SG</span>
              </div>
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-8px] rounded-full border-2 border-dashed border-blue-300/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            </motion.div>

            {/* Name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="font-playfair text-3xl font-bold text-gradient mb-1">Shakthi G</h1>
              <p className="font-inter text-xs font-semibold tracking-widest text-text-secondary uppercase">
                Loading Experience
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-64 h-1 rounded-full bg-blue-100 dark:bg-slate-800 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-blue"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </motion.div>

            {/* Progress number */}
            <motion.span
              className="font-mono text-sm text-blue-primary/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Custom Cursor ─────────────────────────────────────────────
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      requestAnimationFrame(animate)
    }

    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [data-cursor="hover"], input, textarea')) {
        setIsHovering(true)
      }
    }
    const onMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseEnter)
    document.addEventListener('mouseout', onMouseLeave)
    const raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseEnter)
      document.removeEventListener('mouseout', onMouseLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'hover' : ''}`} />
    </>
  )
}

// ─── Scroll Progress ───────────────────────────────────────────
export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
  )
}

// ─── Floating Particles ────────────────────────────────────────
export const FloatingPetals: React.FC<{ count?: number }> = ({ count = 15 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    size: 3 + Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20 blur-[1px]"
          style={{ left: p.left, top: '-20px', width: `${p.size}px`, height: `${p.size}px` }}
          animate={{ y: '110vh', x: [0, 20, -15, 25, 0], opacity: [0, 0.6, 0.4, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// ─── Sparkles ─────────────────────────────────────────────────
export const SparkleEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative inline-block">
      {children}
    </span>
  )
}

export default LoadingScreen
