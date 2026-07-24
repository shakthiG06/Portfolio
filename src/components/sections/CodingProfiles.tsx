import React from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, Code2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { useGitHubStats } from '../../hooks/useGitHubStats'
import { useTheme } from '../../context/ThemeContext'

// ─── GitHub Card ───────────────────────────────────────────────
const GitHubCard: React.FC = () => {
  const { isDark } = useTheme()
  const stats = useGitHubStats('shakthig')

  return (
    <motion.div
      className={`p-8 rounded-3xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'} h-full`}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg">
          <FaGithub size={28} className="text-white" />
        </div>
        <div>
          <h3 className={`font-playfair text-xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>GitHub</h3>
          <a href="https://github.com/shakthig" target="_blank" rel="noopener noreferrer"
            className="font-mono text-sm text-blue-primary hover:text-blue-accent transition-colors">
            @shakthig
          </a>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { label: 'Public Repos', value: stats.loading ? '—' : stats.publicRepos, icon: <Code2 size={16} /> },
          { label: 'Followers', value: stats.loading ? '—' : stats.followers, icon: <Star size={16} /> },
          { label: 'Following', value: stats.loading ? '—' : stats.following, icon: <GitFork size={16} /> },
          { label: 'Contributions', value: '500+', icon: '🔥' },
        ].map((s, i) => (
          <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-blue-primary/5' : 'bg-white/50'}`}>
            <div className="flex items-center gap-1.5 mb-1 text-blue-primary">
              {typeof s.icon === 'string' ? <span>{s.icon}</span> : s.icon}
            </div>
            <p className={`font-playfair text-2xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
              {s.value}
            </p>
            <p className={`font-inter text-xs ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Contribution heatmap visual (decorative) */}
      <div className="mb-4">
        <p className={`font-inter text-xs mb-2 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
          Contribution Activity
        </p>
        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(24, 1fr)' }}>
          {Array.from({ length: 96 }, (_, i) => {
            const intensity = Math.random()
            return (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  width: '100%',
                  paddingBottom: '100%',
                  background: intensity > 0.7
                    ? '#3B82F6'
                    : intensity > 0.4
                      ? 'rgba(59,130,246,0.5)'
                      : intensity > 0.1
                        ? 'rgba(59,130,246,0.15)'
                        : isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                }}
              />
            )
          })}
        </div>
      </div>

      <motion.a
        href="https://github.com/shakthig"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white font-inter text-sm font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaGithub size={16} />
        View GitHub Profile
      </motion.a>
    </motion.div>
  )
}

// ─── LeetCode Card ─────────────────────────────────────────────
const LeetCodeCard: React.FC = () => {
  const { isDark } = useTheme()

  const problemStats = [
    { label: 'Easy', solved: 45, total: 800, color: '#22c55e' },
    { label: 'Medium', solved: 30, total: 1700, color: '#f59e0b' },
    { label: 'Hard', solved: 8, total: 700, color: '#ef4444' },
  ]

  return (
    <motion.div
      className={`p-8 rounded-3xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'} h-full`}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg">
          <SiLeetcode size={28} className="text-white" />
        </div>
        <div>
          <h3 className={`font-playfair text-xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>LeetCode</h3>
          <a href="https://leetcode.com/u/ShakthiGuru/" target="_blank" rel="noopener noreferrer"
            className="font-mono text-sm text-blue-primary hover:text-blue-accent transition-colors">
            @ShakthiGuru
          </a>
        </div>
      </div>

      {/* Total */}
      <div className={`p-4 rounded-2xl mb-6 text-center ${isDark ? 'bg-blue-primary/5' : 'bg-white/50'}`}>
        <p className="font-playfair text-5xl font-bold text-gradient">83</p>
        <p className={`font-inter text-sm mt-1 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
          Problems Solved
        </p>
      </div>

      {/* Breakdown */}
      <div className="space-y-4 mb-6">
        {problemStats.map(s => (
          <div key={s.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-sm font-medium" style={{ color: s.color }}>{s.label}</span>
              <span className={`font-mono text-xs ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
                {s.solved} / {s.total}
              </span>
            </div>
            <div className={`h-2 rounded-full ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: s.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(s.solved / s.total) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['🏅 50 Days Badge', '⚡ Speed Solver', '🔥 Streak Master'].map(b => (
          <span key={b} className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-inter font-medium border border-amber-500/20">
            {b}
          </span>
        ))}
      </div>

      <motion.a
        href="https://leetcode.com/u/ShakthiGuru/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-inter text-sm font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <SiLeetcode size={16} />
        View LeetCode Profile
      </motion.a>
    </motion.div>
  )
}

// ─── LinkedIn Card ─────────────────────────────────────────────
const LinkedInCard: React.FC = () => {
  const { isDark } = useTheme()
  return (
    <motion.div
      className={`p-8 rounded-3xl ${isDark ? 'glass-dark' : 'glass'} border ${isDark ? 'border-blue-primary/10' : 'border-blue-primary/15'}`}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-lg">
          <FaLinkedin size={28} className="text-white" />
        </div>
        <div>
          <h3 className={`font-playfair text-xl font-bold ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>LinkedIn</h3>
          <a href="https://linkedin.com/in/shakthig" target="_blank" rel="noopener noreferrer"
            className="font-mono text-sm text-blue-primary hover:text-blue-accent transition-colors">
            @shakthig
          </a>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { emoji: '💼', label: 'Open to Opportunities', highlight: true },
          { emoji: '🎓', label: 'B.Tech AI & Data Science Student' },
          { emoji: '🏢', label: 'Full Stack Intern Experience' },
          { emoji: '🌍', label: 'Coimbatore, Tamil Nadu, India' },
          { emoji: '🤝', label: 'Let\'s Connect & Collaborate!' },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-3 p-3 rounded-xl font-inter text-sm
            ${item.highlight ? 'bg-emerald-500/10 border border-emerald-500/20' : isDark ? 'bg-blue-primary/5' : 'bg-white/50'}
            ${item.highlight ? 'text-emerald-600' : isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
            <span>{item.emoji}</span>
            {item.label}
          </div>
        ))}
      </div>

      <motion.a
        href="https://linkedin.com/in/shakthig"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-inter text-sm font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaLinkedin size={16} />
        View LinkedIn Profile
      </motion.a>
    </motion.div>
  )
}

// ─── Main Component ────────────────────────────────────────────
const CodingProfiles: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <section id="coding" className={`section-padding ${isDark ? 'bg-bg-dark' : 'bg-bg-primary'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p className="section-tag mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            My Digital Presence
          </motion.p>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Coding <span className="text-gradient">Profiles</span>
          </motion.h2>
          <motion.p
            className={`font-inter text-base mt-4 max-w-xl mx-auto ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Find me across the developer universe — building, coding, and connecting. 🌐
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GitHubCard />
          <LeetCodeCard />
          <LinkedInCard />
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
