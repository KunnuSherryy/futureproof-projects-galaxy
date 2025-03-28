
import React from 'react';
import { AnimatedText } from '@/components/ui/animated-text';
import { Download, Mail, Laptop, Brain, GraduationCap, Award } from 'lucide-react';
import { educationData, experienceData, positionsData, professionalSummary } from '@/data/about';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-theme-dark-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedText
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-4"
            animation="fade-up"
            speed="medium"
          />
          <div className="h-1 w-20 bg-theme-accent mx-auto mb-6"></div>
          <AnimatedText
            text="A passionate Computer Science student with expertise across various technical domains."
            className="text-theme-text-muted"
            animation="fade-up"
            delay={0.3}
            speed="medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-theme-accent/10 rounded-lg mr-4">
                <GraduationCap className="text-theme-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {educationData.map((education, index) => (
                <div key={index}>
                  <h4 className="font-medium">{education.degree}</h4>
                  {education.institution && (
                    <p className="text-theme-text-muted">{education.institution} ({education.period})</p>
                  )}
                  {education.gpa && (
                    <p className="text-sm text-theme-accent">Current CGPA: {education.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-theme-accent/10 rounded-lg mr-4">
                <Laptop className="text-theme-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            {experienceData.map((experience, index) => (
              <div key={index}>
                <h4 className="font-medium">{experience.position}</h4>
                <p className="text-theme-text-muted">{experience.company} ({experience.period})</p>
                <ul className="mt-2 space-y-2 text-theme-text-muted">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex">
                      <span className="text-theme-accent mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-theme-accent/10 rounded-lg mr-4">
                <Brain className="text-theme-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Professional Summary</h3>
            </div>
            <p className="text-theme-text-muted">
              {professionalSummary}
            </p>
          </div>

          <div className="glass-card p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-theme-accent/10 rounded-lg mr-4">
                <Award className="text-theme-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Positions & Responsibilities</h3>
            </div>
            <div className="space-y-4">
              {positionsData.map((position, index) => (
                <div key={index}>
                  <h4 className="font-medium">{position.title}</h4>
                  <p className="text-theme-text-muted">{position.organization} ({position.period})</p>
                  <p className="text-sm text-theme-text-muted">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center py-3 px-6 rounded-lg bg-theme-accent text-white hover:bg-theme-accent-light transition-colors"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
