import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
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
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
          ${scrolled
            ? 'w-[90%] max-w-4xl'
            : 'w-[95%] max-w-5xl'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <div className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500
          ${isDark ? 'glass-dark' : 'glass'}
          ${scrolled ? 'shadow-glow-blue' : 'shadow-glass'}`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="font-playfair text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SG
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 rounded-xl font-inter text-sm font-medium transition-colors duration-300
                  ${activeSection === link.href.replace('#', '')
                    ? 'text-blue-primary'
                    : isDark ? 'text-text-darkSecondary hover:text-blue-primary' : 'text-text-secondary hover:text-blue-primary'
                  }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-xl bg-blue-primary/10 border border-blue-primary/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300
                ${isDark ? 'bg-blue-primary/20 text-blue-primary' : 'bg-blue-50 text-text-secondary hover:text-blue-primary'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-blue text-white text-sm font-medium font-inter shadow-glow-blue"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59,130,246,0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={14} />
              Resume
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={`mt-2 rounded-2xl overflow-hidden ${isDark ? 'glass-dark' : 'glass'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-3 rounded-xl text-left font-inter text-sm font-medium transition-colors duration-200
                      ${activeSection === link.href.replace('#', '')
                        ? 'bg-blue-primary/15 text-blue-primary'
                        : isDark ? 'text-text-darkSecondary hover:text-blue-primary hover:bg-blue-primary/10'
                          : 'text-text-secondary hover:text-blue-primary hover:bg-blue-primary/10'
                      }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  href="/resume.pdf"
                  download
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-blue text-white text-sm font-medium"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Download size={14} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar
