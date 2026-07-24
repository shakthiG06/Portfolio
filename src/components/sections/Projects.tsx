import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { projects } from '../../data/projects'
import { useTheme } from '../../context/ThemeContext'

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const { isDark } = useTheme()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`project-card ${isDark ? 'glass-dark' : 'glass'} rounded-3xl overflow-hidden group flex flex-col justify-between`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div>
        {/* Top gradient banner */}
        <div className={`h-44 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Project icon */}
          <motion.div
            className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-3xl shadow-lg"
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.icon}
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="font-inter text-xs text-white font-semibold">Featured</span>
            </div>
          )}

          {/* Shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={hovered ? { x: ['−100%', '200%'] } : { x: '-100%' }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`font-playfair text-xl font-bold mb-2.5 ${isDark ? 'text-text-darkPrimary' : 'text-text-primary'}`}>
            {project.title}
          </h3>
          <p className={`font-inter text-sm leading-relaxed mb-4 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-inter font-medium bg-blue-primary/10 text-blue-primary border border-blue-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-6 pt-0 flex gap-3">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border font-inter text-sm font-medium transition-all duration-300
            ${isDark
              ? 'border-blue-primary/20 text-text-darkSecondary hover:border-blue-primary/50 hover:text-blue-primary'
              : 'border-blue-primary/20 text-text-secondary hover:border-blue-primary/50 hover:text-blue-primary'
            }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SiGithub size={15} />
          GitHub
        </motion.a>
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-blue text-white font-inter text-sm font-medium shadow-glow-blue"
          whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(59,130,246,0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink size={15} />
          Live Demo
        </motion.a>
      </div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <section id="projects" className={`section-padding ${isDark ? 'bg-bg-dark' : 'bg-bg-primary'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-tag mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            What I've Built
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            className={`font-inter text-base mt-4 max-w-xl mx-auto ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            A showcase of real-world AI systems, full-stack applications, and data platforms.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className={`font-inter text-sm mb-4 ${isDark ? 'text-text-darkSecondary' : 'text-text-secondary'}`}>
            Want to explore more code repositories? Check out my GitHub profile.
          </p>
          <motion.a
            href="https://github.com/shakthig"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl border font-inter font-semibold text-sm transition-all duration-300
              ${isDark
                ? 'glass-dark border-blue-primary/20 text-text-darkPrimary hover:text-blue-primary hover:border-blue-primary/50'
                : 'glass border-blue-primary/20 text-text-primary hover:text-blue-primary hover:border-blue-primary/50'
              }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Code2 size={18} />
            View All on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
