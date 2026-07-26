import React from 'react'
import { motion } from 'framer-motion'
import { timelineItems } from '../../data/timeline'

const Journey: React.FC = () => {
  return (
    <section id="journey" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00CFFF]/30 to-transparent pointer-events-none hidden md:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.p
            className="section-tag"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            OPERATIONS TIMELINE
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            MISSION <span className="text-gradient">LOG</span>
          </motion.h2>
          <motion.p
            className="font-mono text-slate-400 text-xs sm:text-sm max-w-xl mx-auto pt-1 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Sequential milestones from initiation to advanced AI deployment
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-10">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      className="p-6 sm:p-7 rounded-xl bg-[#080d1a] border border-[#00CFFF]/25 hover:border-[#E11D48]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.2)] group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#050914] border border-[#00CFFF]/40 flex items-center justify-center text-xl flex-shrink-0 text-[#00CFFF] group-hover:bg-[#E11D48] group-hover:text-white group-hover:border-[#E11D48] transition-all">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
                            <span className="font-bold text-[#FFD166] bg-[#050914] px-2.5 py-0.5 rounded border border-[#FFD166]/30">
                              LOG YEAR: {item.year}
                            </span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase">OP-0{item.id}</span>
                          </div>
                          <h3 className="font-outfit text-xl font-bold mb-2 text-white group-hover:text-[#00CFFF] transition-colors">
                            {item.title}
                          </h3>
                          <p className="font-inter text-xs leading-relaxed text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot / Radar ping */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[#050505] border-2 border-[#00CFFF] shadow-[0_0_15px_rgba(0,207,255,0.8)] relative flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#E11D48]" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>

          {/* End marker */}
          <motion.div
            className="flex flex-col items-center justify-center mt-12 space-y-2 font-mono"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-[#080d1a] border-2 border-[#E11D48] flex items-center justify-center text-[#FFD166] shadow-[0_0_25px_rgba(225,29,72,0.5)] text-lg">
              ⚡
            </div>
            <span className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest">
              FUTURE OBJECTIVE: BECOME AN AI ENGINEER
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Journey
