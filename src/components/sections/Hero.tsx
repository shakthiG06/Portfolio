import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Mail, Download, ChevronDown, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { useTheme } from '../../context/ThemeContext'

const roles = [
  'AI & Data Science Student',
  'Full Stack Developer',
  'Machine Learning Engineer',
  'Problem Solver',
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/shakthiG06', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shakthi-g-6633ab315/', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ShakthiGuru/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:shakthi6731@gmail.com', label: 'Email' },
]

// Animated typing role
const TypedRole: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="text-gradient font-semibold">
      {displayed}
      <span className="animate-pulse text-blue-primary">|</span>
    </span>
  )
}

// Animated gradient background
const AnimatedBackground: React.FC = () => {
  const blobs = [
    { color: 'rgba(59,130,246,0.18)', size: '600px', top: '-10%', left: '-10%', delay: 0 },
    { color: 'rgba(96,165,250,0.15)', size: '500px', top: '40%', right: '-5%', delay: 1 },
    { color: 'rgba(30,64,175,0.10)', size: '400px', bottom: '-5%', left: '30%', delay: 2 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            top: blob.top,
            left: (blob as any).left,
            right: (blob as any).right,
            bottom: (blob as any).bottom,
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 12 + i * 3,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

// Floating stars
const FloatingStars: React.FC = () => {
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-blue-primary/40"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

const Hero: React.FC = () => {
  const { isDark } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const imgX = useTransform(springX, [-1, 1], [-15, 15])
  const imgY = useTransform(springY, [-1, 1], [-15, 15])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth - 0.5) * 2)
      mouseY.set((e.clientY / innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section
      id="home"
      ref={containerRef}
      className={`relative min-h-screen flex items-center section-padding overflow-hidden
        ${isDark ? 'bg-bg-dark' : 'bg-bg-primary'}`}
    >
      <AnimatedBackground />
      <FloatingStars />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 lg:pt-0 relative z-10">
        {/* LEFT — Text */}
        <div className="space-y-8">
          {/* Tag */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue border border-blue-primary/30 font-inter text-blue-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={`font-playfair text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight
              ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
              I'm{' '}
              <span className="text-gradient-royal">Shakthi G</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div
            className={`font-inter text-xl md:text-2xl min-h-[2rem]
              ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <TypedRole />
          </motion.div>

          {/* Description */}
          <motion.p
            className={`font-inter text-base md:text-lg leading-relaxed max-w-xl
              ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Engineering intelligent, scalable solutions by integrating{' '}
            <span className="text-blue-primary font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-blue-primary font-semibold">Full Stack Architecture</span>, and modern UI engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 py-4 rounded-2xl bg-gradient-blue text-white font-inter font-semibold text-sm shadow-glow-blue inline-flex items-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(59,130,246,0.6)' }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className={`px-8 py-4 rounded-2xl font-inter font-semibold text-sm inline-flex items-center gap-2 border transition-all duration-300
                ${isDark
                  ? 'glass-dark border-blue-primary/30 text-text-darkPrimary hover:border-blue-primary/60 hover:text-blue-primary'
                  : 'glass border-blue-primary/30 text-text-primary hover:border-blue-primary/60 hover:text-blue-primary'
                }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={16} />
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 py-4 rounded-2xl font-inter font-semibold text-sm text-blue-primary hover:text-blue-accent transition-colors duration-300 inline-flex items-center gap-2 font-medium"
              whileHover={{ scale: 1.04, x: 4 }}
              whileTap={{ scale: 0.96 }}
            >
              Contact Me →
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span className={`font-inter text-xs tracking-widest uppercase font-semibold ${isDark ? 'text-text-darkSecondary/60' : 'text-text-secondary/60'}`}>
              Find me on
            </span>
            <div className="w-8 h-px bg-blue-primary/30" />
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                  ${isDark
                    ? 'bg-blue-primary/10 text-text-darkSecondary hover:bg-blue-primary/20 hover:text-blue-primary'
                    : 'bg-blue-primary/10 text-text-secondary hover:bg-blue-primary/20 hover:text-blue-primary'
                  }`}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 80 }}
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-primary/20 via-blue-accent/20 to-blue-deep/20 blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {/* Rotating border */}
            <motion.div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-primary/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image container */}
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow-blue-lg border-2 border-blue-primary/30"
              style={{ x: imgX, y: imgY }}
            >
              <img
                src="/profile.jpg"
                alt="Shakthi G"
                className="w-full h-full object-cover object-top"
              />
              {/* Glass overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-blue border border-blue-primary/30 shadow-glow-blue"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-inter text-xs font-semibold text-blue-primary">AI Engineer</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass-blue border border-blue-primary/30 shadow-glow-blue"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="font-inter text-xs font-semibold text-blue-primary">Full Stack Dev</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className={`font-inter text-xs tracking-widest uppercase font-semibold ${isDark ? 'text-text-darkSecondary/50' : 'text-text-secondary/50'}`}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-blue-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
