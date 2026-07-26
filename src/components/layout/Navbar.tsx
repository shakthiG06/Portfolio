import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShieldAlert, FileText } from 'lucide-react'

const navLinks = [
  { label: 'Headquarters', shortLabel: 'HQ', href: '#home', icon: '🏠' },
  { label: 'Recruit Profile', shortLabel: 'Recruit', href: '#about', icon: '👤' },
  { label: 'Missions', shortLabel: 'Missions', href: '#projects', icon: '🚀' },
  { label: 'Arsenal', shortLabel: 'Arsenal', href: '#skills', icon: '⚙' },
  { label: 'Achievements', shortLabel: 'Intel', href: '#experience', icon: '🏆' },
  { label: 'Communication', shortLabel: 'Comms', href: '#contact', icon: '📡' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#00CFFF]/20 shadow-[0_4px_30px_rgba(0,207,255,0.1)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo — Initiative Emblem */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-3 cursor-pointer flex-shrink-0 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#081020] border border-[#00CFFF]/50 flex items-center justify-center text-[#00CFFF] font-black shadow-[0_0_15px_rgba(0,207,255,0.4)] group-hover:border-[#E11D48] group-hover:text-[#E11D48] transition-colors">
                <ShieldAlert size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit text-base font-extrabold tracking-widest text-white leading-none">
                  THE INITIATIVE
                </span>
                <span className="font-mono text-[10px] text-[#00CFFF] font-semibold tracking-wider">
                  COMMAND CENTER
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1.5 bg-[#080d1a]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#00CFFF]/20">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 flex items-center gap-1.5
                      ${isActive
                        ? 'text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200 font-medium'
                      }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 rounded-full bg-[#00CFFF]/15 border border-[#00CFFF]/40 shadow-[0_0_12px_rgba(0,207,255,0.3)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="text-xs relative z-10">{link.icon}</span>
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                )
              })}
            </nav>

            {/* Right — Recruit Dossier CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.a
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#be123c] text-white text-xs font-bold font-mono tracking-wider shadow-[0_0_18px_rgba(225,29,72,0.5)] border border-[#FFD166]/40 hover:shadow-[0_0_25px_rgba(225,29,72,0.8)] transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FileText size={14} />
                DOSSIER
              </motion.a>

              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 border border-[#00CFFF]/30 bg-[#081020]"
                whileTap={{ scale: 0.92 }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-[#050505]/98 backdrop-blur-xl border-b border-[#00CFFF]/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1.5 font-mono text-xs">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-all flex items-center gap-2.5
                    ${activeSection === link.href.replace('#', '')
                      ? 'bg-[#00CFFF]/15 text-[#00CFFF] border border-[#00CFFF]/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#E11D48] text-white text-xs font-bold tracking-wider"
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 }}
              >
                <FileText size={14} />
                DOWNLOAD RECRUIT DOSSIER
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
