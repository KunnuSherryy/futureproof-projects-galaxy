
import React from 'react';
import { AnimatedText } from '@/components/ui/animated-text';
import { Download, Mail, Laptop, Brain, GraduationCap, Award } from 'lucide-react';

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
              <div>
                <h4 className="font-medium">B.Tech in Computer Science & Engineering</h4>
                <p className="text-theme-text-muted">Guru Gobind Singh Indraprastha University (2023 - 2027)</p>
                <p className="text-sm text-theme-accent">Current CGPA: 9.00</p>
              </div>
              <div>
                <h4 className="font-medium">Class XII (CBSE)</h4>
                <p className="text-theme-text-muted">93.2% - Demonstrated consistent academic excellence</p>
              </div>
              <div>
                <h4 className="font-medium">Class X (CBSE)</h4>
                <p className="text-theme-text-muted">92.8% - Strong foundational academic performance</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-theme-accent/10 rounded-lg mr-4">
                <Laptop className="text-theme-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div>
              <h4 className="font-medium">Software Developer Intern</h4>
              <p className="text-theme-text-muted">Oasis Infobyte (June - July 2024)</p>
              <ul className="mt-2 space-y-2 text-theme-text-muted">
                <li className="flex">
                  <span className="text-theme-accent mr-2">•</span>
                  <span>Designed and developed a Pizza Delivery System</span>
                </li>
                <li className="flex">
                  <span className="text-theme-accent mr-2">•</span>
                  <span>Implemented backend infrastructure using Node.js and Express</span>
                </li>
                <li className="flex">
                  <span className="text-theme-accent mr-2">•</span>
                  <span>Developed secure JWT authentication mechanism</span>
                </li>
                <li className="flex">
                  <span className="text-theme-accent mr-2">•</span>
                  <span>Created real-time order tracking functionality</span>
                </li>
                <li className="flex">
                  <span className="text-theme-accent mr-2">•</span>
                  <span>Optimized database queries for enhanced performance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-6 transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-theme-accent/10 rounded-lg mr-4">
                <Brain className="text-theme-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Professional Summary</h3>
            </div>
            <p className="text-theme-text-muted mb-4">
              A dynamic and innovative Computer Science student with a passion for technology and problem-solving. Combining strong academic performance with practical skills in software development, web technologies, and machine learning.
            </p>
            <p className="text-theme-text-muted">
              Proven ability to develop complex projects, participate in hackathons, and continuously expand technical expertise across multiple domains.
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
              <div>
                <h4 className="font-medium">Human Resource Representative</h4>
                <p className="text-theme-text-muted">Teaddle Media (2024 - Present)</p>
                <p className="text-sm text-theme-text-muted">Manage internal human resource initiatives and support team recruitment.</p>
              </div>
              <div>
                <h4 className="font-medium">Tech & Design Member</h4>
                <p className="text-theme-text-muted">Namespace Community, BPIT (2023 - 2024)</p>
                <p className="text-sm text-theme-text-muted">Contributed to community technology and design projects.</p>
              </div>
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
