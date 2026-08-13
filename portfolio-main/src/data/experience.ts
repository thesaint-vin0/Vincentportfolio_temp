export type TimelineEntry = {
  id: number;
  type: 'work' | 'education' | 'certification';
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export const EXPERIENCE: TimelineEntry[] = [
  {
    id: 1,
    type: 'work',
    role: 'Senior Frontend Engineer',
    organization: 'Vertex Labs',
    period: '2022 — Present',
    description:
      'Lead the frontend architecture for a suite of B2B SaaS products. Built a design system used across 6 apps and mentored a team of 5 engineers.',
    tags: ['React', 'TypeScript', 'Three.js', 'Design Systems'],
  },
  {
    id: 2,
    type: 'work',
    role: 'Frontend Developer',
    organization: 'Brightwave Studio',
    period: '2020 — 2022',
    description:
      'Delivered 40+ marketing sites and web apps for startups and agencies. Specialized in motion design and performance optimization.',
    tags: ['Next.js', 'GSAP', 'Framer Motion', 'SEO'],
  },
  {
    id: 3,
    type: 'work',
    role: 'Web Developer',
    organization: 'Freelance',
    period: '2018 — 2020',
    description:
      'Built custom websites and e-commerce stores for small businesses, averaging 90+ Lighthouse scores and a 100% client retention rate.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  },
  {
    id: 4,
    type: 'certification',
    role: 'AWS Certified Developer — Associate',
    organization: 'Amazon Web Services',
    period: '2023',
    description:
      'Validated expertise in developing, deploying, and debugging cloud-based applications on AWS.',
    tags: ['AWS', 'Cloud', 'Serverless'],
  },
  {
    id: 5,
    type: 'education',
    role: 'B.Sc. Computer Science',
    organization: 'University of California, Berkeley',
    period: '2014 — 2018',
    description:
      'Graduated with honors. Focused on human-computer interaction, web technologies, and computer graphics.',
    tags: ['CS Fundamentals', 'Graphics', 'HCI'],
  },
];
