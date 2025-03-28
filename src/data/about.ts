
export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Position {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const educationData: Education[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Guru Gobind Singh Indraprastha University',
    period: '2023 - 2027',
    gpa: '9.00',
  },
  {
    degree: 'Class XII (CBSE)',
    institution: '',
    period: '',
    gpa: '93.2%',
  },
  {
    degree: 'Class X (CBSE)',
    institution: '',
    period: '',
    gpa: '92.8%',
  },
];

export const experienceData: Experience[] = [
  {
    position: 'Software Developer Intern',
    company: 'Oasis Infobyte',
    period: 'June - July 2024',
    responsibilities: [
      'Designed and developed a Pizza Delivery System',
      'Implemented backend infrastructure using Node.js and Express',
      'Developed secure JWT authentication mechanism',
      'Created real-time order tracking functionality',
      'Optimized database queries for enhanced performance',
    ],
  },
];

export const positionsData: Position[] = [
  {
    title: 'Human Resource Representative',
    organization: 'Teaddle Media',
    period: '2024 - Present',
    description: 'Manage internal human resource initiatives and support team recruitment.',
  },
  {
    title: 'Tech & Design Member',
    organization: 'Namespace Community, BPIT',
    period: '2023 - 2024',
    description: 'Contributed to community technology and design projects.',
  },
];

export const professionalSummary: string = 
  'A dynamic and innovative Computer Science student with a passion for technology and problem-solving. Combining strong academic performance with practical skills in software development, web technologies, and machine learning. Proven ability to develop complex projects, participate in hackathons, and continuously expand technical expertise across multiple domains.';
