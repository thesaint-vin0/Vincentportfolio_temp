import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiNetlify,
  SiVscodium,
} from 'react-icons/si';
import { Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

export type Skill = {
  name: string;
  level: number;
  icon: IconType | LucideIcon;
  color: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

import { Server, Database, Wrench, Layout } from 'lucide-react';

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML5', level: 100, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 95, icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', level: 94, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', level: 72, icon: SiTypescript, color: '#3178C6' },
      { name: 'React', level: 70, icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', level: 55, icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', level: 30, icon: SiRedux, color: '#764ABC' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90, icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', level: 88, icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST APIs', level: 92, icon: Code2, color: '#8B5CF6' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 66, icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', level: 74, icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', level: 88, icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 93, icon: SiGit, color: '#F05032' },
      { name: 'GitHub', level: 94, icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', level: 50, icon: SiDocker, color: '#2496ED' },
      { name: 'VS Code', level: 96, icon: SiVscodium, color: '#007ACC' },
      { name: 'Figma', level: 40, icon: SiFigma, color: '#F24E1E' },
      { name: 'Vercel', level: 90, icon: SiVercel, color: '#FFFFFF' },
      { name: 'Netlify', level: 66, icon: SiNetlify, color: '#00C7B7' },
    ],
  },
];
