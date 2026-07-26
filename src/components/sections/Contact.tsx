import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Download, CheckCircle, Radio, ShieldCheck } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

// ⚠️ EmailJS Credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const socials = [
  { icon: FaGithub, href: 'https://github.com/shakthiG06', label: 'GitHub Terminal' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shakthi-g-6633ab315/', label: 'LinkedIn Channel' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ShakthiGuru/', label: 'LeetCode Node' },
  { icon: Mail, href: 'mailto:shakthi6731@gmail.com', label: 'Direct Mail' },
]

const Contact: React.FC = () => {
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
      toast.error('Please complete required communication fields.', { icon: '⚠️' })
      return
    }
    setSending(true)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      toast.success("Transmission received! Recruit Shakthi will respond shortly.", { icon: '📡' })
    } catch {
      toast.error('Direct comms failed. Please email shakthi6731@gmail.com.', { icon: '❌' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-[#050505] relative overflow-hidden">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#080d1a',
          color: '#f8fafc',
          border: '1px solid rgba(0,207,255,0.4)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
        }
      }} />

      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00CFFF]/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E11D48]/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Command CTA Banner */}
        <motion.div
          className="mb-16 p-8 md:p-12 rounded-2xl relative overflow-hidden bg-[#080d1a] border border-[#00CFFF]/30 shadow-[0_0_50px_rgba(0,207,255,0.12)] hud-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 font-mono">
              <span className="text-xs font-bold tracking-widest text-[#E11D48] uppercase flex items-center gap-2">
                <Radio size={14} className="animate-pulse text-[#E11D48]" />
                COMMUNICATION LINK READY
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Need an AI Engineer?
              </h2>
              <p className="font-inter text-xs text-slate-300 max-w-md">
                Available for AI systems engineering, full-stack projects, and strategic technical recruitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 font-mono">
              <motion.a
                href="#contact-form"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-7 py-3.5 rounded-lg bg-[#E11D48] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(225,29,72,0.6)] text-center flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <ShieldCheck size={16} />
                [ CONNECT ]
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="px-7 py-3.5 rounded-lg bg-[#050914] border border-[#00CFFF]/40 text-[#00CFFF] font-bold text-xs uppercase tracking-wider flex items-center gap-2 justify-center transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download size={14} />
                [ DOSSIER ]
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.p
            className="section-tag"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            TRANSMISSION TERMINAL
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            COMMAND <span className="text-gradient">CENTER</span>
          </motion.h2>
          <motion.p
            className="font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto text-slate-400 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Direct transmission channel for opportunities, internships, and technical inquiries
          </motion.p>
        </div>

        {/* Main grid */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start font-mono">

          {/* LEFT — Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Agent Profile Card */}
            <div className="p-6 rounded-2xl bg-[#080d1a] border border-[#00CFFF]/25 hud-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#00CFFF]/40 flex-shrink-0">
                  <img src="/profile.jpg" alt="Shakthi G" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-white">Shakthi G</h3>
                  <p className="text-xs text-[#00CFFF] font-bold">Recruit ID: SG-2028</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center text-[#00CFFF]">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">DIRECT COMM EMAIL</p>
                    <a href="mailto:shakthi6731@gmail.com" className="font-bold text-white hover:text-[#00CFFF] transition-colors">
                      shakthi6731@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center text-[#00CFFF]">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">BASE LOCATION</p>
                    <p className="font-bold text-white">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#00CFFF]/15 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-emerald-400 font-bold">RECRUITMENT STATUS: OPEN</span>
              </div>
            </div>

            {/* Connectivity Channels Grid */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#080d1a] border border-[#00CFFF]/20 hover:border-[#E11D48]/50 flex items-center gap-2.5 transition-all group"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center text-[#00CFFF] group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                    <Icon size={14} />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-[#00CFFF] transition-colors">{label.split(' ')[0]}</span>
                </motion.a>
              ))}
            </div>

            {/* Mission Capabilities */}
            <div className="p-5 rounded-xl bg-[#080d1a] border border-[#00CFFF]/20 text-xs space-y-2">
              <h4 className="font-outfit text-sm font-bold text-white mb-2">MISSION CAPABILITIES</h4>
              {[
                'AI/ML model development & integration',
                'Full-stack web application engineering',
                'REST API design & microservices',
                'Data analysis & visualization pipelines',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle size={14} className="text-[#00CFFF] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 rounded-2xl bg-[#080d1a] border border-[#00CFFF]/30 shadow-[0_0_35px_rgba(0,207,255,0.1)] hud-border">
              <h3 className="font-outfit text-2xl font-bold text-white mb-1">Initiate Communication</h3>
              <p className="text-xs text-slate-400 mb-6 uppercase tracking-wider">
                TRANSMIT ENCRYPTED MESSAGE TO RECRUIT SHAKTHI G
              </p>

              {sent ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#E11D48] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(225,29,72,0.6)]">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white mb-1">TRANSMISSION RECEIVED!</h3>
                  <p className="text-xs text-slate-300">Recruit Shakthi will evaluate your message shortly.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-2 rounded bg-[#050914] border border-[#00CFFF]/40 text-[#00CFFF] text-xs font-bold uppercase tracking-wider"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-[#00CFFF] font-bold uppercase tracking-wider mb-1.5 block">
                        CANDIDATE / RECRUITER NAME *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Nick Fury"
                        className="w-full px-4 py-3 rounded bg-[#050914] border border-[#00CFFF]/25 text-white placeholder-slate-600 outline-none focus:border-[#00CFFF]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#00CFFF] font-bold uppercase tracking-wider mb-1.5 block">
                        COMMUNICATION EMAIL *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="recruiter@initiative.org"
                        className="w-full px-4 py-3 rounded bg-[#050914] border border-[#00CFFF]/25 text-white placeholder-slate-600 outline-none focus:border-[#00CFFF]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#00CFFF] font-bold uppercase tracking-wider mb-1.5 block">
                      MISSION SUBJECT
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="AI Engineering Role / Project Collaboration"
                      className="w-full px-4 py-3 rounded bg-[#050914] border border-[#00CFFF]/25 text-white placeholder-slate-600 outline-none focus:border-[#00CFFF]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-[#00CFFF] font-bold uppercase tracking-wider mb-1.5 block">
                      TRANSMISSION DETAILS *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Provide mission parameters, team requirements, or project details..."
                      className="w-full px-4 py-3 rounded bg-[#050914] border border-[#00CFFF]/25 text-white placeholder-slate-600 outline-none focus:border-[#00CFFF] resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-[#E11D48] via-[#be123c] to-[#9f1239] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(225,29,72,0.6)] disabled:opacity-60"
                    whileHover={!sending ? { scale: 1.02, boxShadow: '0 0 35px rgba(225,29,72,0.85)' } : {}}
                    whileTap={!sending ? { scale: 0.98 } : {}}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        [ INITIATE CONNECTION ]
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
