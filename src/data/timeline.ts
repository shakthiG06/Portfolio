// ─── Journey Timeline Data ─────────────────────────────────────
export interface TimelineItem {
  id: number
  year: string
  title: string
  description: string
  icon: string
  color: string
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Started B.Tech — AI & Data Science',
    description: 'Joined KGiSL Institute of Technology, Coimbatore. Began my academic journey in Artificial Intelligence & Data Science.',
    icon: '🎓',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 2,
    year: '2024',
    title: 'Mastered Python & Core Foundations',
    description: 'Deep-dived into Python programming, data structures, algorithms, and built a strong foundation for AI development.',
    icon: '🐍',
    color: 'from-indigo-600 to-blue-500',
  },
  {
    id: 3,
    year: '2024',
    title: 'Explored Machine Learning',
    description: 'Studied ML algorithms, worked with Pandas, NumPy, and Scikit-learn. Built first predictive models and EDA projects.',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    year: '2025',
    title: 'Started Full Stack Development',
    description: 'Learned Django, REST APIs, React, and Tailwind CSS. Combined backend intelligence with beautiful frontend design.',
    icon: '🌐',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 5,
    year: '2025',
    title: 'Built AI-Powered Applications',
    description: 'Developed AI Virtual Patient and StudyPilot AI — real-world applications combining LLMs with full-stack development.',
    icon: '✨',
    color: 'from-blue-600 to-sky-400',
  },
  {
    id: 6,
    year: '2025',
    title: 'Participated in Hackathons',
    description: 'Competed in multiple hackathons including NASA Space Apps Challenge. Built TempoWise using satellite data and AI.',
    icon: '🏆',
    color: 'from-amber-500 to-blue-600',
  },
  {
    id: 7,
    year: '2025',
    title: 'Completed Internship',
    description: 'Worked as Full Stack Development Intern — built AI-powered web apps, REST APIs, authentication systems, and deployed production-ready applications.',
    icon: '💼',
    color: 'from-blue-700 to-indigo-900',
  },
  {
    id: 8,
    year: '2025+',
    title: 'Building Intelligent Products',
    description: 'Continuing to build innovative AI + full-stack products. Open to opportunities, collaborations, and making technology more beautiful.',
    icon: '🚀',
    color: 'from-indigo-600 to-blue-600',
  },
]

// ─── Stats Data ────────────────────────────────────────────────
export const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { value: 20, suffix: '+', label: 'Technologies Learned', icon: '⚡' },
  { value: 1, suffix: '+', label: 'Internship', icon: '💼' },
  { value: 3, suffix: '+', label: 'Hackathons', icon: '🏆' },
  { value: 8, suffix: '+', label: 'Certificates', icon: '🎓' },
  { value: 500, suffix: '+', label: 'GitHub Contributions', icon: '💻' },
]

// ─── Achievements Data ─────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: 'NASA Space Apps Challenge',
    description: 'Participated in the global NASA Space Apps Challenge, building TempoWise — an AI-powered satellite data insights platform.',
    icon: '🚀',
    color: 'from-indigo-600 to-blue-700',
  },
  {
    id: 2,
    title: 'Full Stack Development Intern',
    description: 'Completed a professional internship building AI-powered web applications with Django, REST APIs, and React.',
    icon: '💼',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 3,
    title: 'AI Application Builder',
    description: 'Developed multiple production-grade AI applications integrating LLMs, machine learning, and modern web technologies.',
    icon: '🤖',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Hackathon Participant',
    description: 'Competed in 3+ hackathons, demonstrating rapid prototyping, teamwork, and innovative problem-solving under pressure.',
    icon: '⚡',
    color: 'from-amber-500 to-blue-600',
  },
  {
    id: 5,
    title: '8+ Certifications',
    description: 'Earned certificates in AI, Machine Learning, Full Stack Development, and Data Science from leading platforms.',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 6,
    title: 'Continuous Learner',
    description: 'Committed to lifelong learning — constantly exploring new technologies, design patterns, and AI breakthroughs.',
    icon: '📚',
    color: 'from-sky-500 to-blue-600',
  },
]
