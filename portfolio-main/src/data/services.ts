import {
  Code2,
  Smartphone,
  LayoutTemplate,
  Building2,
  ShoppingCart,
  UserCircle2,
  Gauge,
  RefreshCw,
  Plug,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    title: 'Frontend Development',
    description:
      'Crafting pixel-perfect, accessible interfaces with React, TypeScript, and modern tooling.',
    icon: Code2,
    features: ['React & Next.js', 'TypeScript', 'Component systems'],
  },
  {
    title: 'Responsive Websites',
    description:
      'Fluid layouts that look flawless on every device, from phones to ultrawide monitors.',
    icon: Smartphone,
    features: ['Mobile-first', 'Fluid typography', 'Cross-browser'],
  },
  {
    title: 'Landing Pages',
    description:
      'High-converting, animated landing pages engineered to capture attention and drive action.',
    icon: LayoutTemplate,
    features: ['Conversion focused', 'Scroll animation', 'A/B ready'],
  },
  {
    title: 'Business Websites',
    description:
      'Professional, scalable websites that establish credibility and grow with your company.',
    icon: Building2,
    features: ['CMS ready', 'SEO optimized', 'Analytics'],
  },
  {
    title: 'E-commerce',
    description:
      'Complete online stores with secure checkout, inventory, and payment integration.',
    icon: ShoppingCart,
    features: ['PayPal payments', 'Cart & checkout', 'Inventory sync'],
  },
  {
    title: 'Portfolio Websites',
    description:
      'Showcase your work with a cinematic, memorable portfolio that sets you apart.',
    icon: UserCircle2,
    features: ['3D & motion', 'Case studies', 'Custom design'],
  },
  {
    title: 'Performance Optimization',
    description:
      'Make slow sites fly — core web vitals, lazy loading, and bundle optimization.',
    icon: Gauge,
    features: ['90+ Lighthouse', 'Core Web Vitals', 'Bundle analysis'],
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated interfaces into modern, engaging experiences without losing SEO.',
    icon: RefreshCw,
    features: ['UX audit', 'Modern UI', 'Migration safe'],
  },
  {
    title: 'API Integration',
    description:
      'Connect your frontend to any backend, third-party API, or headless CMS seamlessly.',
    icon: Plug,
    features: ['REST & GraphQL', 'Webhooks', 'Auth flows'],
  },
  {
    title: 'Maintenance',
    description:
      'Ongoing support, updates, monitoring, and enhancements to keep things running smoothly.',
    icon: Wrench,
    features: ['Monitoring', 'Security patches', 'Feature updates'],
  },
];
