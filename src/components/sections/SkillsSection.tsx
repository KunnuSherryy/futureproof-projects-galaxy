
import React from 'react';
import { AnimatedText } from '@/components/ui/animated-text';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { skillCategories } from '@/data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-theme-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedText
            text="Technical Skills"
            className="text-3xl md:text-4xl font-bold mb-4"
            animation="fade-up"
            speed="medium"
          />
          <div className="h-1 w-20 bg-theme-accent mx-auto mb-6"></div>
          <AnimatedText
            text="Expertise across various programming languages, frameworks, and technical domains."
            className="text-theme-text-muted"
            animation="fade-up"
            delay={0.3}
            speed="medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              title={category.title}
              skills={category.skills}
              delay={categoryIndex * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;

  return (
    <div 
      ref={ref}
      className="glass-card p-6 opacity-0 transform translate-y-4"
      style={{
        animation: isVisible ? `fade-up 0.6s ${delay}s forwards ease-out` : 'none',
      }}
    >
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span className="text-theme-accent">{skill.level}%</span>
            </div>
            <div className="w-full bg-theme-dark-light rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-theme-accent to-theme-accent-light h-2.5 rounded-full"
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transition: `width 1s ${delay + 0.2 + skillIndex * 0.1}s ease-out`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
