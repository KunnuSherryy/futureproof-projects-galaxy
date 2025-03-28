
import React, { useState, useRef } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { AnimatedText } from '@/components/ui/animated-text';
import { projects, projectFilters, getFilteredProjects } from '@/data/projects';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;

  const filteredProjects = getFilteredProjects(activeFilter);

  return (
    <section 
      id="projects" 
      className="py-20 bg-theme-dark-light"
      ref={sectionRef}
    >
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
          {projectFilters.map((filter, index) => (
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
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-theme-text-muted">No projects found in this category.</p>
          </div>
        )}

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
