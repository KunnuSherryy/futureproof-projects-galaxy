
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  category: 'fullstack' | 'backend' | 'ml' | 'frontend' | 'other';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rti-automation",
    title: 'RTI Query Automation System',
    description: 'Innovative platform for transforming user queries into structured RTI requests with Machine Learning-based department prediction and secure OTP verification.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'OTP Verification'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    githubLink: '#',
    category: 'ml',
    featured: true,
  },
  {
    id: "medical-charges",
    title: 'Medical Charges Predictor',
    description: 'Developed sophisticated Linear Regression model for medical expense prediction with 80% accuracy using advanced data preprocessing techniques.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    githubLink: '#',
    category: 'ml',
    featured: true,
  },
  {
    id: "database-aggregator",
    title: 'Database Aggregator',
    description: 'Created unified data aggregation system with seamless integration of multiple database platforms and efficient data retrieval across PostgreSQL, MongoDB, and SQLite.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    githubLink: '#',
    category: 'backend',
    featured: true,
  },
  {
    id: "food-recipe",
    title: 'Food Recipe Website',
    description: 'Developed a recipe-sharing platform where users can save, add, and customize recipes with a user-friendly interface for recipe creation and interaction.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
    githubLink: '#',
    liveLink: '#',
    category: 'fullstack',
    featured: true,
  },
  {
    id: "kya-sochra-hai",
    title: 'Kya Sochra Hai',
    description: 'Created an EJS-based idea-sharing platform for viewing and liking thoughts with a minimalist digital space for users to express and interact with ideas.',
    technologies: ['EJS', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    githubLink: '#',
    liveLink: '#',
    category: 'fullstack',
    featured: true,
  },
  {
    id: "pizza-delivery",
    title: 'Pizza Delivery System',
    description: 'Designed and developed a comprehensive Pizza Delivery System with secure JWT authentication mechanism and real-time order tracking functionality.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    githubLink: '#',
    category: 'fullstack',
    featured: true,
  },
]

// Filter functions to use in the project section
export const getFilteredProjects = (filter: string) => {
  if (filter === 'all') return projects;
  return projects.filter(project => project.category === filter);
}

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
}

export const projectFilters = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'other', label: 'Other' },
];
