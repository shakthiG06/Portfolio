import React from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, Code2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { useGitHubStats } from '../../hooks/useGitHubStats'

// ─── GitHub Card ───────────────────────────────────────────────
const GitHubCard: React.FC = () => {
  const stats = useGitHubStats('shakthig')

  return (
    <motion.div
      className="p-8 rounded-3xl glass-dark border border-blue-500/20 hover:border-blue-500/45 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)] transition-all duration-300 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      whileHover={{ y: -5 }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] text-white">
            <FaGithub size={28} />
          </div>
          <div>
            <h3 className="font-outfit text-xl font-bold text-white">GitHub</h3>
            <a href="https://github.com/shakthiG06" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-blue-300 hover:text-white transition-colors">
              @shakthiG06
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3.5 mb-6">
          {[
            { label: 'Public Repos', value: stats.loading ? '—' : stats.publicRepos, icon: <Code2 size={16} /> },
            { label: 'Followers', value: stats.loading ? '—' : stats.followers, icon: <Star size={16} /> },
            { label: 'Following', value: stats.loading ? '—' : stats.following, icon: <GitFork size={16} /> },
            { label: 'Contributions', value: '500+', icon: '🔥' },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/15">
              <div className="flex items-center gap-1.5 mb-1 text-blue-400">
                {typeof s.icon === 'string' ? <span>{s.icon}</span> : s.icon}
              </div>
              <p className="font-outfit text-2xl font-bold text-white">
                {s.value}
              </p>
              <p className="font-inter text-xs text-slate-300 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Contribution heatmap */}
        <div className="mb-6">
          <p className="font-inter text-xs mb-2 text-blue-300 font-semibold uppercase tracking-wider">
            Contribution Heatmap
          </p>
          <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(24, 1fr)' }}>
            {Array.from({ length: 96 }, (_, i) => {
              const intensity = Math.random()
              return (
                <div
                  key={i}
                  className="rounded-xs transition-colors"
                  style={{
                    width: '100%',
                    paddingBottom: '100%',
                    background: intensity > 0.7
                      ? '#2563eb'
                      : intensity > 0.4
                        ? 'rgba(37, 99, 235, 0.55)'
                        : intensity > 0.15
                          ? 'rgba(37, 99, 235, 0.22)'
                          : 'rgba(255, 255, 255, 0.04)',
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>

      <motion.a
        href="https://github.com/shakthiG06"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-inter text-sm font-semibold shadow-[0_0_20px_rgba(37,99,235,0.45)]"
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
  const problemStats = [
    { label: 'Easy', solved: 45, total: 800, color: '#60a5fa' },
    { label: 'Medium', solved: 30, total: 1700, color: '#3b82f6' },
    { label: 'Hard', solved: 8, total: 700, color: '#1d4ed8' },
  ]

  return (
    <motion.div
      className="p-8 rounded-3xl glass-dark border border-blue-500/20 hover:border-blue-500/45 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)] transition-all duration-300 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] text-white">
            <SiLeetcode size={28} />
          </div>
          <div>
            <h3 className="font-outfit text-xl font-bold text-white">LeetCode</h3>
            <a href="https://leetcode.com/u/ShakthiGuru/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-blue-300 hover:text-white transition-colors">
              @ShakthiGuru
            </a>
          </div>
        </div>

        {/* Total */}
        <div className="p-5 rounded-2xl mb-6 text-center bg-blue-950/30 border border-blue-500/15">
          <p className="font-outfit text-5xl font-black text-gradient">83</p>
          <p className="font-inter text-xs text-slate-300 mt-1 font-semibold uppercase tracking-wider">
            Algorithmic Problems Solved
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-4 mb-6">
          {problemStats.map(s => (
            <div key={s.label}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-inter text-xs font-bold uppercase tracking-wider" style={{ color: s.color }}>{s.label}</span>
                <span className="font-mono text-xs text-slate-300">
                  {s.solved} / {s.total}
                </span>
              </div>
              <div className="h-2 rounded-full bg-blue-950/60 border border-blue-500/15 overflow-hidden">
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
            <span key={b} className="px-3 py-1 rounded-full bg-blue-950/50 text-blue-300 text-xs font-inter font-semibold border border-blue-500/25">
              {b}
            </span>
          ))}
        </div>
      </div>

      <motion.a
        href="https://leetcode.com/u/ShakthiGuru/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-inter text-sm font-semibold shadow-[0_0_20px_rgba(37,99,235,0.45)]"
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
  return (
    <motion.div
      className="p-8 rounded-3xl glass-dark border border-blue-500/20 hover:border-blue-500/45 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)] transition-all duration-300 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] text-white">
            <FaLinkedin size={28} />
          </div>
          <div>
            <h3 className="font-outfit text-xl font-bold text-white">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/shakthi-g-6633ab315/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-blue-300 hover:text-white transition-colors">
              @shakthi-g
            </a>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { emoji: '💼', label: 'Available for Internships & Projects', highlight: true },
            { emoji: '🎓', label: 'B.Tech AI & Data Science Student' },
            { emoji: '🏢', label: 'Full Stack Development Experience' },
            { emoji: '🌍', label: 'Coimbatore, Tamil Nadu, India' },
            { emoji: '🤝', label: 'Connect & Collaborate on LinkedIn' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl font-inter text-xs font-semibold
              ${item.highlight ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300' : 'bg-blue-950/30 border border-blue-500/15 text-slate-200'}`}>
              <span>{item.emoji}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href="https://www.linkedin.com/in/shakthi-g-6633ab315/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-800 to-blue-600 text-white font-inter text-sm font-semibold shadow-[0_0_20px_rgba(37,99,235,0.45)]"
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
  return (
    <section id="coding" className="section-padding bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/7 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-2">
          <motion.p className="section-tag" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            ONLINE ECOSYSTEM
          </motion.p>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Coding & Developer <span className="text-gradient">Profiles</span> <br />
            <span className="font-cormorant italic font-normal text-blue-300 text-xl sm:text-2xl">
              building, coding, and connecting across platforms
            </span>
          </motion.h2>
          <motion.p
            className="font-inter text-base mt-4 max-w-xl mx-auto text-slate-300"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Explore my code repositories, algorithmic problem-solving achievements, and professional network.
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
