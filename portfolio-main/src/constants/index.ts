import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Quote,
  Send,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Experience', href: '#experience', icon: GraduationCap },
  { label: 'Testimonials', href: '#testimonials', icon: Quote },
  { label: 'Contact', href: '#contact', icon: Send },
];

export const PERSON = {
  name: 'Anyanwu Vincent',
  role: 'Professional Web Developer',
  tagline: 'I build modern, fast and scalable web applications.',
  location: 'Lagos, Nigeria',
  email: 'vincentanyanwu11@gmail.com',
  phone: '+234 70 113 88 684',
  resumeUrl: '/cv draft.pdf',
  avatar:
    '/images/me.jpg',
};

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/thesaint-vin0', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vincent-anyanwu-72419b354/', icon: 'Linkedin' },
  { label: 'Twitter', href: 'https://x.com/thesaint1042850', icon: 'Twitter' },
  { label: 'Email', href: 'mailto:vincentanyanwu11@gmail.com', icon: 'Mail' },
] as const;

export const EMAILJS_CONFIG = {
  serviceId: 'service_0kd8drk',
  templateId: 'template_cid89wj',
  publicKey: '6cFxrsu9IH44XM9-U',
} as const;


export const TYPING_PHRASES = [
  'Professional Web Developer',
  'React & Three.js Engineer',
  'UI/UX Enthusiast',
  'Creative Developer',
  'Graphics Designer',
  'Sound Producer',
];

export const STATS = [
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'Happy Clients', value: 9, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Technologies', value: 28, suffix: '+' },
] as const;
