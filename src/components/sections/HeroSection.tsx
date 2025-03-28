
import React from 'react';
import { AnimatedText } from '@/components/ui/animated-text';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { ParticleBackground } from '@/components/ui/particle-background';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4 p-2 rounded-full bg-theme-dark-light border border-theme-border">
            <span className="inline-flex h-3 w-3 rounded-full bg-theme-accent animate-pulse-light"></span>
          </div>

          <AnimatedText
            text="Hello, I'm Kunal Sharma"
            className="text-4xl md:text-6xl font-bold mb-6"
            animation="fade-up"
            speed="medium"
            staggerChildren={true}
            splitBy="word"
          />

          <AnimatedText
            text="Computer Science Student & Developer"
            className="text-xl md:text-2xl text-theme-text-muted mb-8"
            animation="fade-up"
            delay={0.3}
            speed="medium"
            staggerChildren={true}
            splitBy="word"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center py-3 px-6 rounded-lg bg-theme-accent text-white hover:bg-theme-accent-light transition-colors animate-fade-up opacity-0"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center py-3 px-6 rounded-lg bg-transparent border border-theme-border hover:border-theme-accent/50 text-theme-text hover:text-theme-accent transition-all animate-fade-up opacity-0"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              Contact Me
            </a>
          </div>

          <div className="flex space-x-6 mb-16">
            <a
              href="https://github.com/kunalsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-muted hover:text-theme-accent transition-colors animate-fade-up opacity-0"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kunalsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-muted hover:text-theme-accent transition-colors animate-fade-up opacity-0"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kunalsharma7003@gmail.com"
              className="text-theme-text-muted hover:text-theme-accent transition-colors animate-fade-up opacity-0"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-theme-text-muted hover:text-theme-text transition-colors animate-bounce-light"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-theme-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
