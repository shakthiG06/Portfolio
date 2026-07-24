import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { stats } from '../../data/timeline'
import { useTheme } from '../../context/ThemeContext'

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

const About: React.FC = () => {
  const { isDark } = useTheme()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  })

  return (
    <section id="about" className={`section-padding ${isDark ? 'bg-bg-darkSecondary' : 'bg-bg-secondary'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p className="section-tag mb-3" {...fadeUp(0)}>
            Who I Am
          </motion.p>
          <motion.h2 className="section-title" {...fadeUp(0.1)}>
            About{' '}
            <span className="text-gradient">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Decorative */}
          <motion.div
            className="relative flex justify-center"
            {...fadeUp(0.2)}
          >
            <div className="relative w-full max-w-md">
              {/* Main glass card */}
              <div className={`rounded-3xl p-8 ${isDark ? 'glass-dark' : 'glass'} shadow-glass border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}>
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-glow-blue flex-shrink-0 border border-blue-primary/30">
                    <img
                      src="/profile.jpg"
                      alt="Shakthi G"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className={`font-playfair text-xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                      Shakthi G
                    </h3>
                    <p className="font-cormorant italic text-blue-primary text-sm font-medium">
                      AI & Data Science Student
                    </p>
                  </div>
                </div>

                {/* Info cards */}
                {[
                  { label: 'Institution', value: 'KGiSL Institute of Technology' },
                  { label: 'Degree', value: 'B.Tech — AI & Data Science' },
                  { label: 'Location', value: 'Coimbatore, Tamil Nadu' },
                  { label: 'Focus', value: 'AI Engineering & Full Stack Development' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-start justify-between p-3 rounded-xl mb-3 transition-all duration-300
                      ${isDark ? 'bg-blue-primary/5 hover:bg-blue-primary/10' : 'bg-white/50 hover:bg-white/80'}`}
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <p className={`font-inter text-xs ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                        {item.label}
                      </p>
                      <p className={`font-inter text-sm font-medium ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Status */}
                <div className="flex items-center gap-2 mt-4 px-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-inter text-sm text-emerald-500 font-medium">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <div className="space-y-6">
            <motion.div {...fadeUp(0.3)}>
              <h3 className={`font-playfair text-3xl font-bold mb-4 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
                Hello, I'm Shakthi G
              </h3>
              <p className={`font-cormorant italic text-xl text-blue-primary mb-6`}>
                Passionate AI & Data Science student building modern digital solutions.
              </p>
            </motion.div>

            {[
              "I'm an Artificial Intelligence & Data Science student at KGiSL Institute of Technology who loves turning complex ideas into scalable, efficient digital solutions. Whether building AI-powered applications, designing responsive web interfaces, or solving challenging algorithmic problems, I focus on performance, aesthetics, and reliability.",
              "To me, modern software engineering is about bridging computational intelligence with intuitive user experiences. Every project I undertake provides an opportunity to master new paradigms and push technical boundaries.",
              "Outside of core development, I stay engaged with emerging AI models, open-source developments, and architectural patterns.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className={`font-inter text-base leading-relaxed ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
                {...fadeUp(0.3 + i * 0.1)}
              >
                {para}
              </motion.p>
            ))}

            <motion.p
              className={`font-inter text-base leading-relaxed font-medium italic ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}
              {...fadeUp(0.6)}
            >
              "Building high-impact software through artificial intelligence and clean engineering."
            </motion.p>

            {/* CTA */}
            <motion.div className="flex gap-4 pt-4" {...fadeUp(0.7)}>
              <motion.a
                href="#projects"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-3 rounded-xl bg-gradient-blue text-white font-inter font-semibold text-sm shadow-glow-blue"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work →
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className={`px-6 py-3 rounded-xl font-inter font-semibold text-sm border transition-all
                  ${isDark ? 'glass-dark border-blue-primary/30 text-text-darkPrimary hover:text-blue-primary'
                    : 'glass border-blue-primary/30 text-text-primary hover:text-blue-primary'}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl text-center ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'} hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="font-playfair text-3xl font-bold text-gradient mb-1">
                {inView ? (
                  <CountUp end={stat.value} duration={2} delay={i * 0.05} />
                ) : '0'}
                {stat.suffix}
              </div>
              <p className={`font-inter text-xs leading-snug font-medium ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
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
