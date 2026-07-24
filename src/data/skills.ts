// ─── Skills Data ───────────────────────────────────────────────
export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-blue-600 to-indigo-700',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: '🤖',
    color: 'from-indigo-600 to-blue-500',
    skills: [
      'Machine Learning', 'Deep Learning', 'NLP', 'Prompt Engineering',
      'Data Analysis', 'EDA', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React', 'Django', 'Django REST Framework', 'Tailwind CSS', 'Bootstrap',
      'REST API', 'JWT Authentication', 'SQLite', 'MySQL', 'PostgreSQL',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-sky-500 to-blue-600',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Power BI', 'Tableau', 'Figma', 'Vercel'],
  },
]
