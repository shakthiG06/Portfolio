import React from 'react'
import { motion } from 'framer-motion'
import { timelineItems } from '../../data/timeline'
import { useTheme } from '../../context/ThemeContext'

const Journey: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <section id="journey" className={`section-padding ${isDark ? 'bg-bg-dark' : 'bg-bg-primary'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-tag mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            My Story
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            className={`font-inter text-base mt-4 max-w-xl mx-auto ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            From curious student to full stack developer and artificial intelligence practitioner.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-primary/40 to-transparent hidden md:block" />

          <div className="space-y-12">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <motion.div
                      className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue
                        ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-glow-blue`}>
                          {item.icon}
                        </div>
                        <div>
                          <span className="font-mono text-xs text-blue-primary font-medium tracking-wider">
                            {item.year}
                          </span>
                          <h3 className={`font-playfair text-lg font-bold mt-0.5 mb-2 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                            {item.title}
                          </h3>
                          <p className={`font-inter text-sm leading-relaxed ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <motion.div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} border-2 border-white shadow-glow-blue`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>

          {/* End dot */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center shadow-glow-blue text-white text-sm font-bold">
              🚀
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Journey
