import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Cinematic Boot Loading Screen ────────────────────────────
const bootLogs = [
  'Initializing Global Network...',
  'Loading AI Systems...',
  'Scanning Candidate...',
  'Verifying Security Clearance (SG-2028)...',
  'Access Granted.'
]

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logIndex, setLogIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex(prev => {
        if (prev < bootLogs.length - 1) return prev + 1
        clearInterval(logInterval)
        return prev
      })
    }, 550)

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval)
          setTimeout(() => {
            setShow(false)
            setTimeout(onComplete, 600)
          }, 500)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 60)

    return () => {
      clearInterval(logInterval)
      clearInterval(progInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center p-6 select-none font-mono"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#00CFFF 1px, transparent 1px), linear-gradient(90deg, #00CFFF 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-8">
            {/* Holographic Logo / Crest */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="w-28 h-28 rounded-full border-2 border-dashed border-[#00CFFF]/40 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner Crimson ring */}
              <motion.div
                className="absolute w-20 h-20 rounded-full border border-[#E11D48]/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              />

              {/* Core Icon */}
              <div className="absolute w-14 h-14 rounded-xl bg-[#081020] border border-[#00CFFF]/60 flex items-center justify-center text-[#00CFFF] font-outfit font-black text-xl shadow-[0_0_25px_rgba(0,207,255,0.5)]">
                SG
              </div>
            </motion.div>

            {/* Initiative Header */}
            <div className="text-center space-y-1">
              <span className="text-[#E11D48] text-xs font-bold tracking-[0.3em] uppercase">
                THE INITIATIVE • RECRUIT PORTFOLIO
              </span>
              <h1 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
                COMMAND CENTER
              </h1>
            </div>

            {/* Boot Log Console */}
            <div className="w-full bg-[#080d1a] rounded-xl border border-[#00CFFF]/25 p-4 text-xs space-y-2 h-36 flex flex-col justify-end shadow-[0_0_30px_rgba(0,207,255,0.08)]">
              {bootLogs.slice(0, logIndex + 1).map((log, idx) => (
                <motion.div
                  key={log}
                  className={`flex items-center gap-2 ${idx === bootLogs.length - 1 ? 'text-[#FFD166] font-bold' : 'text-slate-300'}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#00CFFF]">▶</span>
                  <span>{log}</span>
                </motion.div>
              ))}
              <div className="text-[#00CFFF] animate-pulse text-[11px]">_</div>
            </div>

            {/* Progress Bar & Readout */}
            <div className="w-full space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="text-[#00CFFF] font-bold">SYSTEM STATUS</span>
                <span className="text-[#FFD166] font-mono">{Math.min(Math.round(progress), 100)}%</span>
              </div>

              <div className="w-full h-2 rounded-full bg-[#080d1a] border border-[#00CFFF]/20 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#E11D48] via-[#FFD166] to-[#00CFFF] shadow-[0_0_15px_rgba(0,207,255,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Custom Glowing Cursor ──────────────────────────────────────
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
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
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

// ─── Scroll Progress Bar ────────────────────────────────────────
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

// ─── StarField Background Effect ────────────────────────────────
export const StarField: React.FC<{ count?: number }> = ({ count = 35 }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 1 + Math.random() * 2.5,
    opacity: 0.2 + Math.random() * 0.7,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {stars.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(0,207,255,0.8)]"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
          }}
          animate={{ opacity: [s.opacity, 0.1, s.opacity] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ─── Film Grain & Scanline Component ─────────────────────────────
export const FilmGrain: React.FC = () => {
  return (
    <>
      <div className="scanline-overlay" />
      <div className="vignette-overlay" />
    </>
  )
}

// Legacy exports for compatibility
export const FloatingPetals = StarField

export default LoadingScreen
