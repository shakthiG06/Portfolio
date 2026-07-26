// ─── Project / Mission Data ──────────────────────────────────────
export interface Project {
  id: number
  operationName: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  demo: string
  image: string
  featured: boolean
  color: string
  icon: string
  missionStatus: 'SUCCESS' | 'DEPLOYED' | 'COMPLETED' | 'ACTIVE'
}

export const projects: Project[] = [
  {
    id: 1,
    operationName: 'Operation PsySim',
    title: 'AI Virtual Patient',
    description: 'Developed an AI Virtual Patient platform for psychology students to practice real-life patient interactions in a safe digital environment.',
    longDescription:
      'Uses AI-generated conversations, patient scenarios, and performance evaluation to improve practical learning for psychology students.',
    tech: ['Django', 'Python', 'React', 'Tailwind CSS', 'SQLite', 'REST API', 'LLM'],
    github: 'https://github.com/shakthig',
    demo: '#',
    image: '',
    featured: true,
    color: 'from-blue-600 to-indigo-700',
    icon: '🧠',
    missionStatus: 'SUCCESS',
  },
  {
    id: 2,
    operationName: 'Operation StudyPilot',
    title: 'StudyPilot AI',
    description: 'Built an AI-powered study planner that creates personalized learning schedules, tracks daily progress, and manages subjects.',
    longDescription:
      'Generates personalized study schedules, tracks progress, and manages subjects, chapters, and revisions using AI-driven recommendations.',
    tech: ['React', 'Django REST Framework', 'JWT', 'SQLite', 'TypeScript'],
    github: 'https://github.com/shakthig',
    demo: '#',
    image: '',
    featured: true,
    color: 'from-sky-500 to-blue-600',
    icon: '📚',
    missionStatus: 'ACTIVE',
  },
  {
    id: 3,
    operationName: 'Operation FarmConnect',
    title: 'Local Marketplace for Farmers',
    description: 'Build a marketplace connecting farmers directly with customers, promoting fair pricing without intermediaries.',
    longDescription:
      'Supports local farming communities through product listings, category browsing, secure authentication, and direct order management.',
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/shakthig',
    demo: '#',
    image: '',
    featured: true,
    color: 'from-blue-700 to-teal-700',
    icon: '🌾',
    missionStatus: 'DEPLOYED',
  },
  {
    id: 4,
    operationName: 'Operation MusicHub',
    title: 'Music Academy Website',
    description: 'Create a modern website for a music academy to showcase courses, instructors, events, and admission info.',
    longDescription:
      'Provides an engaging online presence for students interested in music education with course catalogs and instructor profiles.',
    tech: ['Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/shakthig',
    demo: '#',
    image: '',
    featured: false,
    color: 'from-indigo-600 to-blue-700',
    icon: '🎵',
    missionStatus: 'COMPLETED',
  },
  {
    id: 5,
    operationName: 'Operation Nova',
    title: 'PMS Nova',
    description: 'Built a project management system that helps teams organize projects, manage tasks, monitor milestones, and track progress.',
    longDescription:
      'Features task assignment, milestone tracking, team collaboration, and real-time progress dashboards for development workflows.',
    tech: ['Django', 'Python', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/shakthig',
    demo: '#',
    image: '',
    featured: false,
    color: 'from-blue-500 to-cyan-500',
    icon: '📊',
    missionStatus: 'DEPLOYED',
  },
  {
    id: 6,
    operationName: 'Operation TempoWise',
    title: 'TempoWise (NASA Space Apps)',
    description: 'Developed an AI-powered application during NASA Space Apps Challenge visualizing satellite and environmental data.',
    longDescription:
      'Uses satellite data and APIs to provide environmental monitoring and interactive climate insights through an intuitive dashboard.',
    tech: ['Python', 'Flask', 'NASA API', 'OpenAQ API', 'Bootstrap'],
    github: 'https://github.com/shakthig',
    demo: '#',
    image: '',
    featured: true,
    color: 'from-indigo-700 to-blue-900',
    icon: '🛰️',
    missionStatus: 'SUCCESS',
  },
]
