import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { useTheme } from '../../context/ThemeContext'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/shakthig', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/shakthig', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ShakthiGuru/', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:shakthi6731@gmail.com', label: 'Email' },
]

const Footer: React.FC = () => {
  const { isDark } = useTheme()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={`relative pt-20 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden
      ${isDark ? 'bg-bg-darkSecondary' : 'bg-bg-secondary'}`}>
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-blue opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-blue-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="font-playfair text-4xl font-bold text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shakthi G
            </motion.h3>
            <p className={`font-inter text-sm leading-relaxed ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
              AI & Data Science Student · Full Stack Developer · Building intelligent, performant digital experiences.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isDark ? 'bg-blue-primary/10 text-text-darkSecondary hover:bg-blue-primary/20 hover:text-blue-primary'
                      : 'bg-blue-primary/10 text-text-secondary hover:bg-blue-primary/20 hover:text-blue-primary'}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-playfair text-lg font-semibold mb-4 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`font-inter text-sm transition-colors duration-200 w-fit
                    ${isDark ? 'text-text-darkSecondary hover:text-blue-primary' : 'text-text-secondary hover:text-blue-primary'}`}
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-playfair text-lg font-semibold mb-4 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className={`font-inter text-sm ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                📍 Coimbatore, Tamil Nadu, India
              </p>
              <a
                href="mailto:shakthi6731@gmail.com"
                className="font-inter text-sm text-blue-primary hover:text-blue-accent transition-colors"
              >
                ✉️ shakthi6731@gmail.com
              </a>
              <p className={`font-inter text-sm ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                🎓 KGiSL Institute of Technology
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-inter text-sm text-emerald-500">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4
          ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}>
          <motion.p
            className={`font-inter text-sm flex items-center gap-1.5 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Designed & Developed with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-blue-primary fill-blue-primary" />
            </motion.span>
            by <span className="text-gradient font-semibold ml-1">Shakthi G</span>
          </motion.p>

          <p className={`font-mono text-xs ${isDark ? 'text-text-darkSecondary/60' : 'text-text-secondary/60'}`}>
            © {new Date().getFullYear()} · All Rights Reserved
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-2xl bg-gradient-blue text-white flex items-center justify-center shadow-glow-blue z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
