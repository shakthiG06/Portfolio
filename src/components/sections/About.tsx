import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { stats } from '../../data/timeline'
import { Brain, Code, Cpu, ShieldCheck, Database, BarChart2 } from 'lucide-react'

const CountUp: React.FC<{ end: number; duration?: number; delay?: number }> = ({ end, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, delay])

  return <>{count}</>
}

const specializations = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    desc: 'Neural networks, machine learning algorithms, and intelligent model fine-tuning.',
  },
  {
    icon: Database,
    title: 'Data Science & Analytics',
    desc: 'Exploratory data analysis, insights visualization, and Python data engineering.',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    desc: 'Scalable frontend architectures paired with fast backend APIs and databases.',
  },
  {
    icon: BarChart2,
    title: 'Data Analysis & Insights',
    desc: 'Exploratory data analysis, statistical modeling, data visualization, and reporting with Python & SQL.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    desc: 'Predictive analytics, NLP models, scikit-learn, and model deployment pipelines.',
  },
  {
    icon: ShieldCheck,
    title: 'Database Systems',
    desc: 'Relational & non-relational database design, query optimization, and REST data security.',
  },
]

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  })

  return (
    <section id="about" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background ambient HUD elements */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#00CFFF]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#E11D48]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.p className="section-tag" {...fadeUp(0)}>
            CLASSIFIED PROFILE
          </motion.p>
          <motion.h2 className="section-title" {...fadeUp(0.1)}>
            RECRUIT <span className="text-gradient">DOSSIER</span>
          </motion.h2>
          <motion.p
            className="font-mono text-slate-400 text-xs sm:text-sm max-w-xl mx-auto pt-1 tracking-wider uppercase"
            {...fadeUp(0.2)}
          >
            Clearance Level: Active AI Engineer Candidate • ID: SG-2028
          </motion.p>
        </div>

        {/* Dossier Card & Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Tactical Profile Card */}
          <motion.div className="lg:col-span-5 flex justify-center" {...fadeUp(0.2)}>
            <div className="w-full max-w-md rounded-2xl p-7 bg-[#080d1a] hud-border shadow-[0_0_35px_rgba(0,207,255,0.15)] relative font-mono">
              <div className="flex items-center justify-between border-b border-[#00CFFF]/20 pb-4 mb-6">
                <span className="text-xs text-[#E11D48] font-bold tracking-widest uppercase">CLASSIFIED PROFILE</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  ACTIVE
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-[#00CFFF]/40 shadow-[0_0_20px_rgba(0,207,255,0.3)]">
                  <img src="/profile.jpg" alt="Shakthi G" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-bold text-white">Shakthi G</h3>
                  <p className="text-[#00CFFF] text-xs font-semibold">
                    AI & Data Science Specialist
                  </p>
                </div>
              </div>

              {[
                { label: 'NAME', value: 'Shakthi G' },
                { label: 'ROLE', value: 'AI & Data Science Student' },
                { label: 'STATUS', value: 'Active Candidate' },
                { label: 'BASE', value: 'Tamil Nadu, India' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg mb-2.5 bg-[#050914] border border-[#00CFFF]/15"
                >
                  <span className="text-[11px] text-slate-400 font-bold">{item.label}</span>
                  <span className="text-xs font-bold text-white">{item.value}</span>
                </div>
              ))}

              {/* Mission Statement Box */}
              <div className="mt-5 p-4 rounded-lg bg-[#0c1428] border border-[#FFD166]/30">
                <p className="text-[10px] text-[#FFD166] font-bold tracking-widest uppercase mb-1">
                  MISSION DIRECTIVE
                </p>
                <p className="font-inter text-xs text-slate-300 italic leading-relaxed">
                  "To build intelligent software that empowers people, solves meaningful problems, and creates a positive impact through innovation."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div {...fadeUp(0.3)}>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white mb-2">
                Recruit Biography
              </h3>
              <div className="w-16 h-1 bg-[#E11D48] rounded mb-4" />
            </motion.div>

            <motion.p className="font-inter text-base text-slate-300 leading-relaxed" {...fadeUp(0.4)}>
              I am a passionate AI & Data Science undergraduate who enjoys building technology that solves real-world problems. My journey began with curiosity about how intelligent systems work, and it has evolved into developing AI applications, full-stack web platforms, and data-driven solutions.
            </motion.p>

            <motion.p className="font-inter text-base text-slate-300 leading-relaxed" {...fadeUp(0.5)}>
              I believe great software is more than clean code—it should create meaningful experiences, solve practical challenges, and make people's lives easier. Whether I'm designing an AI-powered application, developing scalable web platforms, or performing data analysis, I enjoy learning, experimenting, and continuously improving my skills.
            </motion.p>

            {/* Tactical Philosophy Banner */}
            <motion.div
              className="p-5 rounded-xl bg-[#080d1a] border-l-4 border-[#00CFFF] border-t border-b border-r border-[#00CFFF]/20 font-mono text-xs text-slate-300 space-y-1.5"
              {...fadeUp(0.55)}
            >
              <p className="text-[#FFD166] font-bold">OPERATIONAL PHILOSOPHY:</p>
              <p>• Every problem has a pattern.</p>
              <p>• Every dataset tells a story.</p>
              <p>• Every algorithm creates an opportunity.</p>
              <p className="text-[#00CFFF] font-bold pt-1">
                My mission is to transform those opportunities into impactful solutions.
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4 pt-2" {...fadeUp(0.6)}>
              <motion.a
                href="#projects"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-3 rounded-lg bg-[#E11D48] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(225,29,72,0.5)]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                [ VIEW MISSIONS ]
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-3 rounded-lg bg-[#081020] border border-[#00CFFF]/40 text-[#00CFFF] font-mono font-bold text-xs uppercase tracking-wider"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                [ INITIATE CONTACT ]
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* 6 Specialization Cards */}
        <div className="mb-20">
          <div className="text-center mb-10 space-y-1">
            <span className="font-mono text-xs text-[#00CFFF] font-bold uppercase tracking-widest">
              PRIMARY CAPABILITIES
            </span>
            <h3 className="font-outfit text-2xl font-bold text-white">Core Specializations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-xl bg-[#080d1a] border border-[#00CFFF]/20 hover:border-[#00CFFF]/60 hover:shadow-[0_0_25px_rgba(0,207,255,0.2)] transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center mb-4 text-[#00CFFF] group-hover:bg-[#E11D48] group-hover:text-white group-hover:border-[#E11D48] transition-all duration-300">
                    <Icon size={24} />
                  </div>

                  <h4 className="font-outfit text-lg font-bold text-white mb-2 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Metric Mission Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 font-mono">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-xl text-center bg-[#080d1a] border border-[#00CFFF]/20 hover:border-[#E11D48]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="font-outfit text-3xl font-black text-[#00CFFF] mb-1">
                {inView ? (
                  <CountUp end={stat.value} duration={2} delay={i * 0.05} />
                ) : '0'}
                {stat.suffix}
              </div>
              <p className="text-[11px] leading-snug font-bold text-slate-300 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
