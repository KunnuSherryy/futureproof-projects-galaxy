
import React, { useState } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { AnimatedText } from '@/components/ui/animated-text';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'RTI Query Automation System',
      description: 'Innovative platform for transforming user queries into structured RTI requests with Machine Learning-based department prediction and secure OTP verification.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'OTP Verification'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      githubLink: '#',
      category: 'ml',
    },
    {
      title: 'Medical Charges Predictor',
      description: 'Developed sophisticated Linear Regression model for medical expense prediction with 80% accuracy using advanced data preprocessing techniques.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      githubLink: '#',
      category: 'ml',
    },
    {
      title: 'Database Aggregator',
      description: 'Created unified data aggregation system with seamless integration of multiple database platforms and efficient data retrieval across PostgreSQL, MongoDB, and SQLite.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      githubLink: '#',
      category: 'backend',
    },
    {
      title: 'Food Recipe Website',
      description: 'Developed a recipe-sharing platform where users can save, add, and customize recipes with a user-friendly interface for recipe creation and interaction.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      githubLink: '#',
      liveLink: '#',
      category: 'fullstack',
    },
    {
      title: 'Kya Sochra Hai',
      description: 'Created an EJS-based idea-sharing platform for viewing and liking thoughts with a minimalist digital space for users to express and interact with ideas.',
      technologies: ['EJS', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      githubLink: '#',
      liveLink: '#',
      category: 'fullstack',
    },
    {
      title: 'Pizza Delivery System',
      description: 'Designed and developed a comprehensive Pizza Delivery System with secure JWT authentication mechanism and real-time order tracking functionality.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React'],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      githubLink: '#',
      category: 'fullstack',
    },
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'backend', label: 'Backend' },
    { value: 'ml', label: 'Machine Learning' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-theme-dark-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedText
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold mb-4"
            animation="fade-up"
            speed="medium"
          />
          <div className="h-1 w-20 bg-theme-accent mx-auto mb-6"></div>
          <AnimatedText
            text="A collection of my recent works showcasing my skills in various technologies."
            className="text-theme-text-muted"
            animation="fade-up"
            delay={0.3}
            speed="medium"
          />
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-theme-accent text-white'
                  : 'bg-theme-dark text-theme-text-muted hover:bg-theme-dark/70'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-theme-text-muted">
            These are just a few of my projects. More are available on my GitHub.
          </p>
          <a
            href="https://github.com/kunalsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded-lg border border-theme-border hover:border-theme-accent text-theme-text-muted hover:text-theme-accent transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
