import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../../data/skills'

const energyLevels: Record<string, number> = {
  Python: 95,
  Django: 90,
  React: 88,
  'Machine Learning': 92,
  'Data Analysis': 92,
  SQL: 90,
  TypeScript: 85,
  Java: 80,
  'Deep Learning': 88,
  NLP: 86,
  'Tailwind CSS': 92,
  Docker: 78,
  Git: 90,
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const active = skillCategories.find(c => c.id === activeCategory)!

  return (
    <section id="skills" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#00CFFF]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.p
            className="section-tag"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            COMBAT READY MODULES
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            TECHNOLOGY <span className="text-gradient">ARSENAL</span>
          </motion.h2>
          <motion.p
            className="font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto text-slate-400 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            High-powered energy modules for AI engineering and full stack deployment
          </motion.p>
        </div>

        {/* Category Selector Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 font-mono text-xs"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        >
          {skillCategories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider
                ${activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#E11D48] to-[#be123c] text-white shadow-[0_0_20px_rgba(225,29,72,0.5)] border border-[#FFD166]/40 scale-105'
                  : 'bg-[#080d1a] text-slate-400 hover:text-white border border-[#00CFFF]/20 hover:border-[#00CFFF]/40'
                }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Energy Modules Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#080d1a] p-8 md:p-10 rounded-2xl border border-[#00CFFF]/30 shadow-[0_0_35px_rgba(0,207,255,0.1)] hud-border"
          >
            <div className="flex items-center justify-between border-b border-[#00CFFF]/20 pb-4 mb-8 font-mono">
              <h3 className="text-xl font-bold text-white flex items-center gap-3 font-outfit">
                <span className="text-2xl">{active.icon}</span>
                {active.title}
              </h3>
              <span className="text-xs text-[#00CFFF] font-bold uppercase tracking-widest">
                {active.skills.length} ARSENAL MODULES
              </span>
            </div>

            {/* Glowing Energy Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {active.skills.map((skill, i) => {
                const level = energyLevels[skill] || 85
                return (
                  <motion.div
                    key={skill}
                    className="p-4 rounded-xl bg-[#050914] border border-[#00CFFF]/15 hover:border-[#00CFFF]/50 transition-all font-mono"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-white tracking-wide">{skill}</span>
                      <span className="text-[11px] text-[#00CFFF] font-bold">{level}% ENERGY</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2.5 rounded-full bg-slate-950 border border-[#00CFFF]/20 overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#00CFFF] via-[#3b82f6] to-[#E11D48] shadow-[0_0_10px_rgba(0,207,255,0.7)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All categories overview grid */}
        <motion.div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="p-5 rounded-xl bg-[#080d1a] border border-[#00CFFF]/20 hover:border-[#E11D48]/50 cursor-pointer group transition-all duration-300 hover:-translate-y-1 font-mono"
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#050914] border border-[#00CFFF]/30 flex items-center justify-center text-xl mb-3 text-white group-hover:bg-[#E11D48] transition-colors">
                {cat.icon}
              </div>
              <h4 className="font-outfit text-base font-bold text-white group-hover:text-[#00CFFF] transition-colors mb-1">
                {cat.title}
              </h4>
              <p className="text-[11px] text-slate-400 mb-3">
                {cat.skills.length} Loaded Capabilities
              </p>
              <div className="flex flex-wrap gap-1">
                {cat.skills.slice(0, 3).map(s => (
                  <span key={s} className="px-2 py-0.5 rounded bg-[#050914] text-[#00CFFF] text-[10px] border border-[#00CFFF]/20">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
