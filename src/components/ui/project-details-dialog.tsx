
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectDetailsDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailsDialog({ 
  project, 
  open, 
  onOpenChange 
}: ProjectDetailsDialogProps) {
  if (!project) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-theme-dark-light border-theme-border text-theme-text max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-theme-text">{project.title}</DialogTitle>
          <DialogDescription className="text-theme-text-muted mt-2">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {project.image && (
            <div className="w-full h-64 mb-6 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-theme-text-muted">{project.description}</p>
            
            <h3 className="text-xl font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-sm px-3 py-1 rounded-full bg-theme-dark text-theme-text-muted border border-theme-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              {project.githubLink && (
                <Button 
                  variant="outline"
                  className="border-theme-border text-theme-text hover:bg-theme-accent/10 hover:text-theme-accent"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github className="mr-2" size={18} />
                  View Source
                </Button>
              )}
              
              {project.liveLink && (
                <Button 
                  variant="outline"
                  className="border-theme-border text-theme-text hover:bg-theme-accent/10 hover:text-theme-accent"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  <ExternalLink className="mr-2" size={18} />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
