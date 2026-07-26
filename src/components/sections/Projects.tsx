import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { projects } from '../../data/projects'

const statusBadgeStyles: Record<string, string> = {
  SUCCESS: 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.3)]',
  DEPLOYED: 'bg-[#00CFFF]/15 text-[#00CFFF] border-[#00CFFF]/40 shadow-[0_0_12px_rgba(0,207,255,0.3)]',
  COMPLETED: 'bg-[#FFD166]/15 text-[#FFD166] border-[#FFD166]/40 shadow-[0_0_12px_rgba(255,209,102,0.3)]',
  ACTIVE: 'bg-[#E11D48]/15 text-[#E11D48] border-[#E11D48]/40 shadow-[0_0_12px_rgba(225,29,72,0.3)]',
}

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="bg-[#080d1a] border border-[#00CFFF]/25 hover:border-[#E11D48]/60 rounded-2xl overflow-hidden group flex flex-col justify-between hud-border transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      <div>
        {/* Top Mission Header Banner */}
        <div className="h-40 bg-[#050914] relative overflow-hidden flex items-center justify-center border-b border-[#00CFFF]/20">
          {/* Tech Grid Background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,207,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.5) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Operation Name Tag — Top Left */}
          <div className="absolute top-3 left-3 font-mono text-[11px] font-bold text-[#00CFFF] bg-[#081020] px-2.5 py-1 rounded border border-[#00CFFF]/30">
            {project.operationName.toUpperCase()}
          </div>

          {/* Status Badge — Top Right */}
          <div className={`absolute top-3 right-3 font-mono text-[10px] font-black px-2.5 py-0.5 rounded border uppercase tracking-wider ${statusBadgeStyles[project.missionStatus]}`}>
            STATUS: {project.missionStatus}
          </div>

          {/* Project icon */}
          <motion.div
            className="relative z-10 w-16 h-16 rounded-xl bg-[#081020] border border-[#00CFFF]/50 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(0,207,255,0.4)] text-white"
            animate={hovered ? { scale: 1.1, rotate: 3 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3 font-mono">
          <div className="flex items-center justify-between">
            <h3 className="font-outfit text-xl font-bold text-white tracking-wide group-hover:text-[#00CFFF] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="font-inter text-xs leading-relaxed text-slate-300">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded bg-[#050914] text-[10px] font-mono text-[#00CFFF] border border-[#00CFFF]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 pt-0 flex gap-3 font-mono text-xs">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#00CFFF]/30 text-slate-300 hover:border-[#00CFFF] hover:text-[#00CFFF] font-bold transition-all bg-[#050914]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SiGithub size={14} />
          [ CODE ]
        </motion.a>
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#E11D48] text-white font-bold shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:shadow-[0_0_25px_rgba(225,29,72,0.7)] transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink size={14} />
          [ LAUNCH ]
        </motion.a>
      </div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00CFFF]/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.p
            className="section-tag"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            ACTIVE OPERATIONS & PROJECTS
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            MISSION <span className="text-gradient">CONTROL</span>
          </motion.h2>
          <motion.p
            className="font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto text-slate-400 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Tactical deployment of AI platforms, full-stack software, and data pipelines
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub Terminal CTA */}
        <motion.div
          className="text-center mt-16 font-mono"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">
            NEED ACCESS TO ADDITIONAL CODE REPOSITORIES?
          </p>
          <motion.a
            href="https://github.com/shakthiG06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#080d1a] border border-[#00CFFF]/40 text-[#00CFFF] font-bold text-xs uppercase tracking-widest hover:border-[#E11D48] hover:text-[#E11D48] shadow-[0_0_20px_rgba(0,207,255,0.2)] transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Code2 size={16} />
            [ ACCESS GITHUB REPOSITORY TERMINAL ] →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
