import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Download, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { useTheme } from '../../context/ThemeContext'

// ⚠️ Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const socials = [
  { icon: FaGithub, href: 'https://github.com/shakthig', label: 'GitHub', color: 'from-slate-700 to-slate-900' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/shakthig', label: 'LinkedIn', color: 'from-blue-600 to-indigo-800' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ShakthiGuru/', label: 'LeetCode', color: 'from-amber-500 to-orange-500' },
  { icon: Mail, href: 'mailto:shakthi6731@gmail.com', label: 'Email', color: 'from-blue-500 to-cyan-500' },
]

const Contact: React.FC = () => {
  const { isDark } = useTheme()
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.', { icon: '⚠️' })
      return
    }
    setSending(true)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      toast.success('Message sent successfully! I\'ll get back to you soon.', { icon: '✅' })
    } catch {
      toast.error('Failed to send. Please try again or email directly.', { icon: '❌' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className={`section-padding ${isDark ? 'bg-bg-darkSecondary' : 'bg-bg-secondary'}`}>
      <Toaster position="top-right" toastOptions={{
        style: {
          background: isDark ? '#111827' : '#F8FAFF',
          color: isDark ? '#E2E8F0' : '#1E293B',
          border: '1px solid rgba(59,130,246,0.3)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
        }
      }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p className="section-tag mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Let's Connect
          </motion.p>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Let's Build Something <span className="text-gradient">Great Together</span>
          </motion.h2>
          <motion.p
            className={`font-inter text-base mt-4 max-w-2xl mx-auto ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            I'm open to discussing AI development, full-stack engineering, internships, and technical collaborations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            {/* Contact Info */}
            <div className={`p-6 rounded-2xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'} space-y-4`}>
              <h3 className={`font-playfair text-xl font-bold mb-4 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                Get In Touch
              </h3>
              {[
                { icon: MapPin, label: 'Location', value: 'Coimbatore, Tamil Nadu, India' },
                { icon: Mail, label: 'Email', value: 'shakthi6731@gmail.com', href: 'mailto:shakthi6731@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-blue-primary" />
                  </div>
                  <div>
                    <p className={`font-inter text-xs ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-inter text-sm text-blue-primary hover:text-blue-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className={`font-inter text-sm ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-inter text-sm text-emerald-500 font-medium">Open to Opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`font-playfair text-lg font-bold mb-4 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                Find Me Online
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${color} text-white font-inter text-sm font-medium`}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume */}
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-blue text-white font-inter font-semibold text-sm shadow-glow-blue"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59,130,246,0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download My Resume
            </motion.a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className={`p-8 rounded-3xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}>
              <h3 className={`font-playfair text-2xl font-bold mb-6 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-inter text-xs mb-1.5 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Shakthi G"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block font-inter text-xs mb-1.5 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block font-inter text-xs mb-1.5 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration, Internship, etc."
                    className="form-input"
                  />
                </div>

                <div>
                  <label className={`block font-inter text-xs mb-1.5 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or inquiry."
                    rows={5}
                    className="form-input resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className={`w-full py-4 rounded-2xl font-inter font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300
                    ${sent
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-blue text-white shadow-glow-blue hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
