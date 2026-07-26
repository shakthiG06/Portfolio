import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Download, Radio, MapPin, Terminal, Cpu } from 'lucide-react'
import { FaGithub, FaLinkedin, FaPython, FaReact, FaDocker } from 'react-icons/fa6'
import { SiLeetcode, SiPytorch } from 'react-icons/si'
import { Mail } from 'lucide-react'

const roles = [
  'Artificial Intelligence Engineer',
  'Data Scientist & Analyst',
  'Full Stack Software Developer',
  'Cloud & ML System Architect',
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/shakthiG06', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shakthi-g-6633ab315/', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ShakthiGuru/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:shakthi6731@gmail.com', label: 'Email' },
]

const techStack = [
  { name: 'Python', icon: FaPython },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'React.js', icon: FaReact },
  { name: 'Docker', icon: FaDocker },
]

const TypedRole: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else {
      setDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="font-mono text-[#00CFFF] font-semibold text-sm sm:text-base">
      <span>{displayed}</span>
      <span className="animate-pulse text-[#E11D48] ml-1">█</span>
    </span>
  )
}

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-[#050505] overflow-hidden pt-20"
    >
      {/* ── BACKGROUND HUD & RADAR GRID ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,207,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Rotating Radar Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#00CFFF]/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-[#E11D48]/15 animate-radar pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#FFD166]/10 pointer-events-none" />

        {/* Ambient Glows */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[160px] top-10 left-10 bg-[#00CFFF]/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-[140px] bottom-10 right-10 bg-[#E11D48]/10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          
          {/* Top Banner Line */}
          <motion.div
            className="flex items-center justify-between border-b border-[#00CFFF]/20 pb-3 mb-10 font-mono text-xs text-slate-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#00CFFF]" />
              <span className="text-[#00CFFF] font-bold">THE INITIATIVE COMMAND CENTER</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#FFD166] font-bold">RECRUIT ID: SG-2028</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                STATUS: ACTIVE
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* ── LEFT COLUMN — Recruit Credentials ── */}
            <div className="lg:col-span-7 space-y-6">

              {/* Status Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081020] border border-[#00CFFF]/40 font-mono text-xs text-[#00CFFF] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,207,255,0.2)]">
                  <Radio size={12} className="text-[#E11D48] animate-pulse" />
                  GLOBAL DEFENSE RECRUIT
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/40 font-mono text-[11px] text-[#E11D48] font-bold">
                  LEVEL 4 CLEARANCE
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-2"
              >
                <p className="font-mono text-xs text-slate-400 tracking-widest uppercase">
                  INITIALIZING RECRUIT PROFILE... ACCESS GRANTED
                </p>
                <h1 className="font-outfit font-black tracking-tight text-white leading-tight">
                  <span className="block text-4xl sm:text-5xl md:text-6xl text-slate-200">RECRUIT</span>
                  <span className="block text-6xl sm:text-7xl md:text-8xl text-gradient">SHAKTHI G</span>
                </h1>
              </motion.div>

              {/* Typed Role */}
              <motion.div
                className="flex items-center gap-2 py-1 px-3 bg-[#080d1a] border-l-2 border-[#00CFFF] rounded-r-lg max-w-md"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Cpu size={16} className="text-[#00CFFF] flex-shrink-0" />
                <TypedRole />
              </motion.div>

              {/* Hero Mission Statement */}
              <motion.p
                className="font-inter text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                Transforming complex data patterns into high-impact digital experiences through{' '}
                <span className="text-[#00CFFF] font-semibold">Artificial Intelligence</span>,{' '}
                <span className="text-[#FFD166] font-semibold">Full Stack Architecture</span>, and scalable cloud engineering.
              </motion.p>

              {/* Location */}
              <motion.div
                className="flex items-center gap-2 text-slate-400 text-xs font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MapPin size={14} className="text-[#E11D48]" />
                BASE OF OPERATIONS: Tamil Nadu, India
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <motion.a
                  href="#contact"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#be123c] to-[#9f1239] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(225,29,72,0.6)] border border-[#FFD166]/40 inline-flex items-center gap-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(225,29,72,0.85)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ShieldCheck size={16} />
                  [ ACCESS COMMAND CENTER ]
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="px-7 py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 bg-[#081020] border border-[#00CFFF]/40 text-[#00CFFF] hover:bg-[#00CFFF]/15 transition-all duration-300 shadow-[0_0_20px_rgba(0,207,255,0.2)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={14} />
                  [ DOWNLOAD DOSSIER ]
                </motion.a>
              </motion.div>

              {/* Social Terminals */}
              <motion.div
                className="flex items-center gap-3 pt-3 border-t border-[#00CFFF]/15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500">
                  CONNECTIVITY LINKS
                </span>
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-[#081020] border border-[#00CFFF]/30 flex items-center justify-center text-slate-400 hover:text-[#00CFFF] hover:border-[#00CFFF] hover:bg-[#00CFFF]/15 transition-all duration-300"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN — 3D Holographic Dossier Frame ── */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 80 }}
            >
              <div className="relative">
                {/* Holographic outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#00CFFF]/20 via-[#E11D48]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

                {/* Corner bracket HUD frame */}
                <div className="relative p-2 bg-[#080d1a]/90 rounded-2xl hud-border shadow-[0_0_40px_rgba(0,207,255,0.25)]">
                  
                  {/* Photo Card Container */}
                  <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-xl overflow-hidden border border-[#00CFFF]/30 bg-[#050505]">
                    <img
                      src="/profile.jpg"
                      alt="Recruit Shakthi G"
                      className="w-full h-full object-cover object-top filter contrast-105 brightness-95"
                    />

                    {/* Scanline overlay over photo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00CFFF]/5 to-black/80 pointer-events-none" />

                    {/* HUD Overlay HUD Labels on image */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-[#00CFFF]/40 text-[10px] font-mono text-[#00CFFF] font-bold">
                      SCAN ID: 994-SG
                    </div>

                    {/* Bottom HUD Dossier Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-[#050505]/90 border-t border-[#00CFFF]/30 font-mono">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs font-bold text-white uppercase">SHAKTHI G</p>
                        <span className="text-[10px] text-[#FFD166] font-bold">RECRUIT</span>
                      </div>
                      <p className="text-[11px] text-[#00CFFF]">AI & Data Science Specialist</p>
                      <div className="mt-2 w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#00CFFF] h-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating HUD Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 px-3.5 py-1.5 rounded-lg bg-[#081020]/95 backdrop-blur-md border border-[#FFD166]/50 shadow-[0_0_20px_rgba(255,209,102,0.3)] font-mono text-[10px] font-bold text-[#FFD166] uppercase"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ⚡ PRIMARY: AI ENGINEER
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 px-3.5 py-1.5 rounded-lg bg-[#081020]/95 backdrop-blur-md border border-[#E11D48]/50 shadow-[0_0_20px_rgba(225,29,72,0.3)] font-mono text-[10px] font-bold text-[#E11D48] uppercase"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                >
                  🛡️ SECONDARY: FULL STACK
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM — Tech Ecosystem Readout ── */}
          <motion.div
            className="mt-14 pt-6 border-t border-[#00CFFF]/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase flex-shrink-0 whitespace-nowrap">
                ACTIVE ARSENAL STACK:
              </span>
              <div className="w-px h-4 bg-[#00CFFF]/20 hidden sm:block flex-shrink-0" />
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                {techStack.map(({ name, icon: Icon }) => (
                  <div key={name} className="flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-[#080d1a] px-3 py-1 rounded border border-[#00CFFF]/20">
                    <Icon size={14} className="text-[#00CFFF]" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
