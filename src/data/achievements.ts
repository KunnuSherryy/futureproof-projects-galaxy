
import { Trophy, Award, Code, Users } from 'lucide-react';

export interface StatItem {
  icon: typeof Trophy | typeof Award | typeof Code | typeof Users;
  value: number;
  label: string;
  description: string;
}

export interface Hackathon {
  name: string;
  organizer: string;
  achievement: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ProfessionalLink {
  name: string;
  url: string;
}

export const achievementStats: StatItem[] = [
  { icon: Trophy, value: 21, label: 'Hackathons & Competitions', description: 'Participated In' },
  { icon: Award, value: 6, label: 'Top 10 Finishes', description: 'In Various Competitions' },
  { icon: Code, value: 200, label: 'LeetCode Problems', description: 'Successfully Solved' },
  { icon: Users, value: 1550, label: 'LeetCode Rating', description: 'Top 32% Worldwide' },
];

export const hackathons: Hackathon[] = [
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

export const certifications: Certification[] = [
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

export const professionalLinks: ProfessionalLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/kunalsharma' },
  { name: 'GitHub (Team)', url: 'https://github.com/team-link' },
  { name: 'GitHub (Individual)', url: 'https://github.com/kunalsharma' },
  { name: 'LeetCode', url: 'https://leetcode.com/kunalsharma' },
  { name: 'HackerRank', url: 'https://hackerrank.com/kunalsharma' },
];
