import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, ShieldCheck } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'

const quickLinks = [
  { label: 'Headquarters', href: '#home' },
  { label: 'Recruit Profile', href: '#about' },
  { label: 'Missions', href: '#projects' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Achievements', href: '#experience' },
  { label: 'Communication', href: '#contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/shakthiG06', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shakthi-g-6633ab315/', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ShakthiGuru/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:shakthi6731@gmail.com', label: 'Email' },
]

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative pt-16 pb-12 px-6 md:px-12 lg:px-24 bg-[#03050a] overflow-hidden border-t border-[#00CFFF]/20 font-mono">
      {/* Accent gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E11D48] via-[#FFD166] to-[#00CFFF]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* FINAL SCENE BANNER */}
        <motion.div
          className="mb-16 p-8 rounded-2xl bg-[#080d1a] border border-[#E11D48]/40 text-center space-y-3 hud-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold text-[#E11D48] tracking-[0.3em] uppercase">
            MISSION COMPLETE
          </span>
          <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
            Thank you for accessing <span className="text-gradient">The Initiative.</span>
          </h3>
          <p className="text-xs text-slate-400">
            The next mission starts now.
          </p>
          <div className="pt-2">
            <motion.a
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#E11D48] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(225,29,72,0.6)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <ShieldCheck size={16} />
              [ RECRUIT ME ]
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-xs">
          
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-outfit text-xl font-black text-white tracking-widest">
              THE INITIATIVE
            </h3>
            <p className="text-[#00CFFF] text-xs font-bold">
              Recruit ID: SG-2028 · Shakthi G
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-sm font-inter">
              B.Tech Artificial Intelligence & Data Science · AI Engineer & Full Stack Developer. Building intelligent solutions to solve world-scale problems.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#080d1a] border border-[#00CFFF]/30 text-slate-300 hover:text-[#00CFFF] hover:border-[#00CFFF] flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#FFD166] mb-3">
              Initiative Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-[#00CFFF] transition-colors w-fit text-xs"
                  whileHover={{ x: 4 }}
                >
                  ▶ {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#FFD166] mb-3">
              Base Location & Comms
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300">
                <span className="text-[#E11D48]">📍</span> Base: Tamil Nadu, India
              </p>
              <a
                href="mailto:shakthi6731@gmail.com"
                className="text-[#00CFFF] hover:text-white transition-colors block font-bold"
              >
                <span className="text-[#00CFFF]">✉️</span> shakthi6731@gmail.com
              </a>
              <p className="text-slate-300">
                <span className="text-[#FFD166]">🎓</span> KGiSL Institute of Technology
              </p>
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-[#00CFFF]/15">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-bold uppercase">Candidate Clearance: Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#00CFFF]/15 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            THE INITIATIVE COMMAND CENTER · RECRUIT PORTFOLIO
          </p>

          <p>
            © {new Date().getFullYear()} Shakthi G. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 px-4 py-2.5 rounded-lg bg-[#080d1a] border border-[#00CFFF]/50 text-[#00CFFF] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(0,207,255,0.3)] z-40"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp size={14} />
        [ HQ ]
      </motion.button>
    </footer>
  )
}

export default Footer
