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
    role: 'Full Stack Developer',
    organization: 'Freelance / Remote',
    period: '2023 — Present',
    description:
      'Leading end-to-end development of web applications for clients worldwide. Specializing in React, Next.js, and Node.js architectures with a focus on performance and scalability.',
    tags: ['React', 'TypeScript', 'Three.js', 'Design Systems'],
  },
  {
    id: 2,
    type: 'work',
    role: 'Frontend Developer',
    organization: 'Freelance / Remote',
    period: '2022',
    description:
      'Built responsive user interfaces with React and Tailwind CSS. Implemented design systems and component libraries. Improved site performance by 40% through optimization',
    tags: ['Next.js', 'GSAP', 'Framer Motion', 'SEO'],
  },
  {
    id: 3,
    type: 'work',
    role: 'Web Developer',
    organization: 'Freelance / Remote',
    period: '2024',
    description:
      'Built custom websites and e-commerce stores for small businesses, averaging 90+ Lighthouse scores and a 100% client retention rate.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  },
  {
    id: 4,
    type: 'certification',
    role: 'Full-Stack Web Developer Certificate',
    organization: 'Udemy',
    period: '2023',
    description:
      'Professional certification covering advanced React patterns, UI/UX design principles, and modern frontend development workflows.',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
  },
  {
    id: 5,
    type: 'education',
    role: 'B.Eng. Mechatronics Engineering',
    organization: 'Bells University Of Technology, Ota, Nigeria',
    period: '2023 — 2028',
    description:
      'Graduated with honors. Focused on web technologies, Mechatronics engineering, and database systems. Active member of the developer community.',
    tags: ['CS Fundamentals', 'HCI'],
  },
];
