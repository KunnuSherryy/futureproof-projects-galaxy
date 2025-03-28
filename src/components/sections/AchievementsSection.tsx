
import React from 'react';
import { AnimatedText } from '@/components/ui/animated-text';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Trophy, Award, Code, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievementStats = [
    { icon: Trophy, value: 21, label: 'Hackathons & Competitions', description: 'Participated In' },
    { icon: Award, value: 6, label: 'Top 10 Finishes', description: 'In Various Competitions' },
    { icon: Code, value: 200, label: 'LeetCode Problems', description: 'Successfully Solved' },
    { icon: Users, value: 1550, label: 'LeetCode Rating', description: 'Top 32% Worldwide' },
  ];

  const hackathons = [
    {
      name: 'Hack\'24',
      organizer: 'Indraprastha Institute of Information Technology Delhi',
      achievement: 'Top 5',
    },
    {
      name: 'BuildWars',
      organizer: 'Maharaja Agrasen Institute of Technology Delhi',
      achievement: 'Top 6',
    },
    {
      name: 'Smart Delhi Ideathon',
      organizer: 'Vigyan Bhawan',
      achievement: 'Top 30',
    },
    {
      name: 'GDSC Ideathon',
      organizer: 'Bhagwan Parshuram Institute of Technology',
      achievement: 'Top 10',
    },
    {
      name: 'GeekRooms',
      organizer: 'JIMS',
      achievement: 'Participated',
    },
    {
      name: 'HackHazards',
      organizer: 'Regional Tech Event',
      achievement: 'Participated',
    },
  ];

  const certifications = [
    {
      name: 'HackerRank: 4-star Java Certification',
      issuer: 'HackerRank',
      date: '2023',
    },
    {
      name: 'LeetCode: Top 32% (1550+ rating)',
      issuer: 'LeetCode',
      date: '2024',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-theme-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedText
            text="Achievements & Certifications"
            className="text-3xl md:text-4xl font-bold mb-4"
            animation="fade-up"
            speed="medium"
          />
          <div className="h-1 w-20 bg-theme-accent mx-auto mb-6"></div>
          <AnimatedText
            text="Recognition for excellence in hackathons, programming competitions, and professional certifications."
            className="text-theme-text-muted"
            animation="fade-up"
            delay={0.3}
            speed="medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementStats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-6 text-gradient">Hackathons & Competitions</h3>
            <div className="space-y-6">
              {hackathons.map((hackathon, index) => (
                <AchievementCard 
                  key={index} 
                  title={hackathon.name}
                  subtitle={hackathon.organizer}
                  achievement={hackathon.achievement}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Professional Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <CertificationCard 
                    key={index} 
                    name={cert.name}
                    issuer={cert.issuer}
                    date={cert.date}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Professional Links</h3>
              <div className="space-y-4">
                <LinkCard name="LinkedIn" url="https://linkedin.com/in/kunalsharma" index={0} />
                <LinkCard name="GitHub (Team)" url="https://github.com/team-link" index={1} />
                <LinkCard name="GitHub (Individual)" url="https://github.com/kunalsharma" index={2} />
                <LinkCard name="LeetCode" url="https://leetcode.com/kunalsharma" index={3} />
                <LinkCard name="HackerRank" url="https://hackerrank.com/kunalsharma" index={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: React.FC<any>;
    value: number;
    label: string;
    description: string;
  };
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;
  const Icon = stat.icon;
  
  return (
    <div 
      ref={ref}
      className="glass-card p-6 text-center transform transition-all duration-500 opacity-0 translate-y-4"
      style={{
        animation: isVisible ? `fade-up 0.6s ${index * 0.1}s forwards ease-out` : 'none',
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-theme-accent/10 rounded-full">
          <Icon className="text-theme-accent" size={28} />
        </div>
      </div>
      <div className="text-3xl font-bold mb-2">
        <AnimatedCounter 
          end={stat.value} 
          duration={2000} 
          delay={index * 0.1}
          className="text-theme-accent"
        />
      </div>
      <div className="text-lg font-medium">{stat.label}</div>
      <div className="text-sm text-theme-text-muted">{stat.description}</div>
    </div>
  );
};

interface AchievementCardProps {
  title: string;
  subtitle: string;
  achievement: string;
  index: number;
}

const AchievementCard = ({ title, subtitle, achievement, index }: AchievementCardProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;
  
  return (
    <div 
      ref={ref}
      className="flex items-start opacity-0 translate-x-4"
      style={{
        animation: isVisible ? `fade-left 0.6s ${index * 0.1}s forwards ease-out` : 'none',
      }}
    >
      <div className="min-w-8 h-8 flex items-center justify-center rounded-full bg-theme-accent/20 text-theme-accent mr-4">
        {achievement.includes('Top') ? (
          <Trophy size={16} />
        ) : (
          <Award size={16} />
        )}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-theme-text-muted">{subtitle}</p>
        <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
          achievement.includes('Top 5') || achievement.includes('Top 6') || achievement.includes('Top 10')
            ? 'bg-theme-accent/20 text-theme-accent'
            : 'bg-theme-dark text-theme-text-muted'
        }`}>
          {achievement}
        </span>
      </div>
    </div>
  );
};

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  index: number;
}

const CertificationCard = ({ name, issuer, date, index }: CertificationCardProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;
  
  return (
    <div 
      ref={ref}
      className="flex items-start opacity-0 translate-x-4"
      style={{
        animation: isVisible ? `fade-left 0.6s ${index * 0.1 + 0.3}s forwards ease-out` : 'none',
      }}
    >
      <div className="min-w-8 h-8 flex items-center justify-center rounded-full bg-theme-accent/20 text-theme-accent mr-4">
        <Award size={16} />
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-theme-text-muted">{issuer}</p>
        <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full bg-theme-dark text-theme-text-muted">
          {date}
        </span>
      </div>
    </div>
  );
};

interface LinkCardProps {
  name: string;
  url: string;
  index: number;
}

const LinkCard = ({ name, url, index }: LinkCardProps) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;
  
  return (
    <a 
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 rounded-lg bg-theme-dark border border-theme-border hover:border-theme-accent transition-all opacity-0 translate-y-4"
      style={{
        animation: isVisible ? `fade-up 0.5s ${index * 0.1 + 0.5}s forwards ease-out` : 'none',
      }}
    >
      <span className="ml-2">{name}</span>
      <span className="ml-auto text-theme-accent">→</span>
    </a>
  );
};

export default AchievementsSection;
