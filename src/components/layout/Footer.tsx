
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-theme-dark-light py-12 border-t border-theme-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold text-gradient mb-2">
              Kunal<span className="font-light">Sharma</span>
            </div>
            <p className="text-theme-text-muted max-w-md">
              Computer Science student passionate about technology and problem-solving.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/kunalsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-text-muted hover:text-theme-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kunalsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-text-muted hover:text-theme-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kunalsharma7003@gmail.com"
                className="text-theme-text-muted hover:text-theme-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-theme-text-muted text-sm">
              &copy; {currentYear} Kunal Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-6 p-3 rounded-full bg-theme-accent text-white hover:bg-theme-accent-light transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
