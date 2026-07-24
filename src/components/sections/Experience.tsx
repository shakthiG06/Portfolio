import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { achievements } from '../../data/timeline'

const Experience: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <section id="experience" className={`section-padding ${isDark ? 'bg-bg-darkSecondary' : 'bg-bg-secondary'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p className="section-tag mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            My Career
          </motion.p>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Experience & <span className="text-gradient">Education</span>
          </motion.h2>
        </div>

        {/* Experience */}
        <motion.div
          className={`p-8 rounded-3xl mb-8 ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-blue flex items-center justify-center shadow-glow-blue flex-shrink-0">
              <Briefcase size={28} className="text-white" />
            </div>

            <div className="flex-1">
              {/* Role */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className={`font-playfair text-2xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                    Full Stack Development Intern
                  </h3>
                  <p className="font-cormorant italic text-blue-primary text-lg mt-1">
                    AI-Powered Web Applications
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 font-mono text-xs text-blue-primary">
                    <Calendar size={12} /> 2025
                  </span>
                  <span className="flex items-center gap-2 font-inter text-xs text-text-secondary">
                    <MapPin size={12} /> Coimbatore, India
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className={`font-inter text-sm leading-relaxed mb-4 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                Worked as a Full Stack Developer Intern, building production-ready AI-powered web applications, designing and implementing REST APIs, setting up JWT authentication systems, and developing responsive frontend interfaces with modern frameworks.
              </p>

              {/* Key contributions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '🤖 Built AI-powered web applications',
                  '🔗 Designed REST APIs & microservices',
                  '🔐 JWT authentication systems',
                  '🎨 Responsive frontend development',
                  '🐛 Debugging & code optimization',
                  '🚀 Application deployment & CI/CD',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-sm font-inter
                      ${isDark ? 'bg-blue-primary/5' : 'bg-white/50'} ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className={`p-8 rounded-3xl mb-16 ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-royal flex items-center justify-center shadow-glow-blue flex-shrink-0 text-3xl">
              🎓
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className={`font-playfair text-2xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                    Bachelor of Technology
                  </h3>
                  <p className="font-cormorant italic text-blue-primary text-lg mt-1">
                    Artificial Intelligence & Data Science
                  </p>
                  <p className={`font-inter text-sm mt-1 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                    KGiSL Institute of Technology, Coimbatore
                  </p>
                </div>
                <div>
                  <span className="flex items-center gap-2 font-mono text-xs text-blue-primary">
                    <Calendar size={12} /> 2024 – 2028
                  </span>
                </div>
              </div>
              <p className={`font-inter text-sm leading-relaxed ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                Pursuing B.Tech in Artificial Intelligence & Data Science with a focus on machine learning, deep learning, full-stack development, and data engineering. Actively building AI applications and participating in hackathons throughout the program.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <div>
          <div className="text-center mb-10">
            <motion.p className="section-tag mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Milestones
            </motion.p>
            <motion.h3 className={`font-playfair text-3xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Achievements & <span className="text-gradient">Recognition</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                className={`p-6 rounded-2xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'} hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-1 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-glow-blue`}>
                  {ach.icon}
                </div>
                <h4 className={`font-playfair text-base font-bold mb-2 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                  {ach.title}
                </h4>
                <p className={`font-inter text-xs leading-relaxed ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
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
