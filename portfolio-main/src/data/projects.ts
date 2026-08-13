export type Project = {
  id: number;
  title: string;
  category: 'Business' | 'Dashboard' | 'E-commerce' | 'Portfolio' | 'SaaS' | 'Landing Page';
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

export const PROJECT_CATEGORIES = [
  'All',
  'Business',
  'Dashboard',
  'E-commerce',
  'Portfolio',
  'SaaS',
  'Landing Page',
] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Pulse Analytics',
    category: 'SaaS',
    description:
      'A real-time analytics platform with live charts, team workspaces, and AI-powered insights for modern product teams.',
    image:
      '/images/pulse.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/thesaint-vin0/ANALYTICS1',
    demo: 'https://thesaint-vin0.github.io/ANALYTICS1/',
  },
  {
    id: 2,
    title: 'Vast Nation',
    category: 'E-commerce',
    description:
      'A headless storefront with instant search, Paypal checkout, and a product viewer that boosted conversions by 33%.',
    image:
      '/images/vast.png',
    tech: ['HTML', 'PayPal', 'CSS', 'JS', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Pulse Dashboard',
    category: 'Dashboard',
    description:
      'An operations control center with customizable widgets, real-time data streams, and granular role-based access.',
    image:
      '/images/screenshot 2025-11-20 091852.png',
    tech: ['React', 'Redux', 'Express', 'WebSocket'],
    github: 'https://github.com/',
    demo: 'https://',
  },
  {
    id: 4,
    title: 'Atlas Business',
    category: 'Business',
    description:
      'A corporate website for a B2B consultancy with a CMS, case studies, and a animated storytelling homepage.',
    image:
      '/images/screenshot 2025-11-20 091852.png',
    tech: ['Next.js', 'Sanity CMS', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    title: 'Portfolio Template',
    category: 'Portfolio',
    description:
      'An award-style portfolio for a programmer.',
    image:
      '/images/portfolio.png',
    tech: ['React', 'Three.js', 'GSAP', 'Lenis'],
    github: 'https://github.com/thesaint-vin0/vincent1portfolio',
    demo: 'https://vincentportfolio-three.vercel.app/',
  },
  {
    id: 6,
    title: 'NOVA',
    category: 'Landing Page',
    description:
      'A high-converting product launch page with scroll-triggered storytelling and an interactive pricing widget.',
    image:
      '/images/nova.png',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/thesaint-vin0/NOVA',
    demo: 'https://nova-seven-olive.vercel.app/',
  },
];
