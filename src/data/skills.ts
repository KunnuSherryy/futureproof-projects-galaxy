
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 70 },
      { name: 'C++', level: 75 },
      { name: 'C', level: 75 },
      { name: 'Dart', level: 60 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'Flask', level: 70 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'SQLite', level: 80 },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Seaborn', level: 70 },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 85 },
    ],
  },
];
