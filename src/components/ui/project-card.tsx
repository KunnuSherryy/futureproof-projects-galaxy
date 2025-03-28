
import React, { useState } from 'react';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProjectById } from '@/data/projects';
import { ProjectDetailsDialog } from './project-details-dialog';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubLink,
  liveLink,
  className,
  style,
}: ProjectCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  // Find project by title to get full details
  const projectId = title.toLowerCase().replace(/\s+/g, '-');
  const project = getProjectById(projectId);
  
  return (
    <>
      <div 
        className={cn(
          'group relative overflow-hidden rounded-xl bg-card-gradient border border-theme-border transition-all duration-300 hover:border-theme-accent/50 hover:shadow-lg hover:shadow-theme-accent/10 hover:-translate-y-1',
          className
        )}
        style={style}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-theme-text group-hover:text-gradient transition-colors duration-300">
              {title}
            </h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsDetailsOpen(true)}
                className="text-theme-text-muted hover:text-theme-accent transition-colors"
                aria-label={`View details for ${title}`}
              >
                <Maximize2 size={18} />
              </button>
              {githubLink && (
                <a 
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-muted hover:text-theme-accent transition-colors"
                  aria-label={`GitHub repository for ${title}`}
                >
                  <Github size={18} />
                </a>
              )}
              {liveLink && (
                <a 
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-muted hover:text-theme-accent transition-colors"
                  aria-label={`Live demo for ${title}`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {image && (
            <div className="relative h-40 mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setIsDetailsOpen(true)}>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}

          <p className="text-theme-text-muted mb-4 flex-grow line-clamp-3">{description}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-theme-dark-light text-theme-text-muted border border-theme-border"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-theme-dark-light text-theme-text-muted border border-theme-border">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-theme-accent/0 via-theme-accent to-theme-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
      
      <ProjectDetailsDialog 
        project={project || null}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />
    </>
  );
}
