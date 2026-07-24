import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { useTheme } from '../../context/ThemeContext'

const Skills: React.FC = () => {
  const { isDark } = useTheme()
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const active = skillCategories.find(c => c.id === activeCategory)!

  return (
    <section id="skills" className={`section-padding ${isDark ? 'bg-bg-darkSecondary' : 'bg-bg-secondary'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-tag mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            What I Know
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p
            className={`font-inter text-base mt-4 max-w-xl mx-auto ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            A curated collection of technologies and tools I've mastered on my journey. ✨
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        >
          {skillCategories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-inter font-medium text-sm transition-all duration-300
                ${activeCategory === cat.id
                  ? 'bg-gradient-blue text-white shadow-glow-blue'
                  : isDark
                    ? 'glass-dark text-text-darkSecondary hover:text-blue-primary border border-blue-primary/10 hover:border-blue-primary/30'
                    : 'glass text-text-secondary hover:text-blue-primary border border-blue-primary/20 hover:border-blue-primary/40'
                }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category header */}
            <div className="text-center mb-8">
              <h3 className={`font-playfair text-2xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                <span className="mr-2">{active.icon}</span>
                {active.title}
              </h3>
            </div>

            {/* Skills cloud */}
            <div className="flex flex-wrap justify-center gap-3">
              {active.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All categories mini grid */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className={`p-6 rounded-2xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'} cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-4 shadow-glow-blue group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h4 className={`font-playfair text-base font-bold mb-2 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                {cat.title}
              </h4>
              <p className={`font-inter text-xs ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                {cat.skills.length} technologies
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {cat.skills.slice(0, 3).map(s => (
                  <span key={s} className="px-2 py-0.5 rounded-full bg-blue-primary/10 text-blue-primary text-xs font-inter">
                    {s}
                  </span>
                ))}
                {cat.skills.length > 3 && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-primary/10 text-blue-primary text-xs font-inter">
                    +{cat.skills.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
