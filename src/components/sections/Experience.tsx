import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, CheckCircle2, GraduationCap } from 'lucide-react'
import { achievements } from '../../data/timeline'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#00CFFF]/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.p className="section-tag" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            FIELD INTELLIGENCE
          </motion.p>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            EXPERIENCE & <span className="text-gradient">ACHIEVEMENTS</span>
          </motion.h2>
          <motion.p className="font-mono text-slate-400 text-xs sm:text-sm max-w-xl mx-auto pt-1 uppercase tracking-wider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Proven field capability in production software & competitive hackathons
          </motion.p>
        </div>

        {/* Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* LEFT — Value Prop */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-[#080d1a] p-7 rounded-2xl border border-[#00CFFF]/25 hud-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 font-mono">
              <span className="text-xs font-bold tracking-widest text-[#E11D48] uppercase">
                FIELD CAPABILITIES
              </span>
              <h3 className="font-outfit text-2xl font-bold text-white leading-tight">
                High-Impact Execution.<br />
                <span className="text-[#00CFFF] text-lg">
                  Battle-tested skills.
                </span>
              </h3>

              <div className="space-y-3 pt-3">
                {[
                  'Production-ready AI & ML models',
                  'Full stack React & REST API engineering',
                  'JWT security & database architectures',
                  'Clean code & performance optimization',
                  'Agile collaboration & hackathons',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-[#00CFFF] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 font-mono">
              <motion.a
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="w-full py-3.5 rounded-lg bg-[#E11D48] text-white font-bold text-xs uppercase tracking-widest text-center block shadow-[0_0_20px_rgba(225,29,72,0.5)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                [ RECRUIT SHAKTHI NOW ] →
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT — Role Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Internship */}
            <motion.div
              className="bg-[#080d1a] rounded-2xl p-7 border-2 border-[#E11D48]/50 shadow-[0_0_30px_rgba(225,29,72,0.2)] relative flex flex-col justify-between group overflow-hidden font-mono"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-b-md bg-[#E11D48] text-white text-[10px] font-black uppercase tracking-widest">
                PRIMARY ASSIGNMENT
              </div>

              <div className="pt-3 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#050914] border border-[#E11D48]/40 flex items-center justify-center text-[#E11D48]">
                    <Briefcase size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-[#FFD166] bg-[#050914] px-2.5 py-0.5 rounded border border-[#FFD166]/30">
                    2025 · INTERNSHIP
                  </span>
                </div>

                <div>
                  <h4 className="font-outfit text-xl font-bold text-white group-hover:text-[#00CFFF] transition-colors">
                    Full Stack Developer Intern
                  </h4>
                  <p className="text-xs text-[#00CFFF] font-bold mt-0.5">
                    AI-Powered Web Applications
                  </p>
                </div>

                <p className="font-inter text-xs text-slate-300 leading-relaxed">
                  Worked as a Full Stack Intern developing production-ready AI applications, building JWT authentication systems, REST microservices, and responsive user interfaces.
                </p>

                <div className="space-y-1.5 pt-1 text-[11px] text-slate-300">
                  {[
                    'Built AI web apps & model pipelines',
                    'Designed REST APIs & JWT Auth',
                    'Responsive React & Tailwind frontend',
                    'Optimized code & deployed microservices',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#E11D48]">▶</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: B.Tech Degree */}
            <motion.div
              className="bg-[#080d1a] rounded-2xl p-7 border border-[#00CFFF]/25 hover:border-[#00CFFF]/60 transition-all duration-300 flex flex-col justify-between group font-mono"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center text-[#00CFFF]">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-[#00CFFF] bg-[#050914] px-2.5 py-0.5 rounded border border-[#00CFFF]/20">
                    2024 – 2028
                  </span>
                </div>

                <div>
                  <h4 className="font-outfit text-xl font-bold text-white group-hover:text-[#00CFFF] transition-colors">
                    B.Tech AI & Data Science
                  </h4>
                  <p className="text-xs text-[#00CFFF] font-bold mt-0.5">
                    KGiSL Institute of Technology
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-[#E11D48]" /> Coimbatore, Tamil Nadu
                  </p>
                </div>

                <p className="font-inter text-xs text-slate-300 leading-relaxed">
                  Specializing in artificial intelligence, machine learning algorithms, deep learning models, data science analytics, and full-stack software development.
                </p>

                <div className="space-y-1.5 pt-1 text-[11px] text-slate-300">
                  {[
                    'Core ML & Deep Learning coursework',
                    'Hackathon participant & builder',
                    'Data Structures & Algorithms mastery',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#00CFFF]">▶</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Achievements Cards Floating */}
        <div>
          <div className="text-center mb-10 space-y-1 font-mono">
            <span className="text-xs text-[#FFD166] font-bold uppercase tracking-widest">
              HONORS & RECOGNITION
            </span>
            <h3 className="font-outfit text-2xl font-bold text-white">Global Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                className="p-6 rounded-xl bg-[#080d1a] border border-[#00CFFF]/20 hover:border-[#FFD166]/60 hover:shadow-[0_0_25px_rgba(255,209,102,0.15)] transition-all duration-300 group hud-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center text-xl mb-3 text-[#FFD166] group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                  {ach.icon}
                </div>
                <h4 className="font-outfit text-lg font-bold text-white mb-1.5 group-hover:text-[#00CFFF] transition-colors">
                  🏆 {ach.title}
                </h4>
                <p className="font-inter text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
