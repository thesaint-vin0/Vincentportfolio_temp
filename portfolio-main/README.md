# Alex Morgan — 3D Interactive Portfolio

A premium, award-style 3D interactive portfolio for a professional web developer. Built with React, Three.js, Framer Motion, and modern web technologies to deliver a cinematic, high-performance experience.

## Features

- **3D Hero Scene** — Animated Three.js scene with floating geometric shapes, a distorted holographic core, wireframe shell, orbiting objects, and a particle system with mouse parallax.
- **Custom Animated Cursor** — Dual-layer cursor (outer ring + inner dot) with spring physics that reacts to interactive elements.
- **Smooth Scroll** — Lenis-powered smooth scrolling across the entire page.
- **Glassmorphism UI** — Frosted glass cards with backdrop blur, glow borders, and neon dividers throughout.
- **Animated Sections** — Hero, About, Skills, Services, Projects, Experience, Testimonials, and Contact — each with scroll-triggered reveal animations.
- **Interactive Skills** — Floating animated cards with progress indicators and brand icons for 20+ technologies.
- **Project Filtering** — Animated category filtering with layout transitions using Framer Motion's `AnimatePresence`.
- **Vertical Timeline** — Alternating animated timeline for experience, education, and certifications.
- **Testimonials Carousel** — Animated glass-card carousel with dot indicators and directional transitions.
- **Contact Form** — Glassmorphism form with EmailJS integration, loading/success/error states, and success animation.
- **Extras** — Scroll progress bar, loading screen, theme switcher, background music toggle, animated blobs, spotlight mouse effect, magnetic buttons, animated typing effect, and animated stat counters.
- **Performance** — Lazy loading, code splitting, Suspense boundaries, optimized Three.js rendering, and responsive across all viewports.
- **SEO** — React Helmet meta tags, Open Graph, Twitter cards, and semantic HTML.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D | Three.js + React Three Fiber + Drei |
| Animation | Framer Motion + GSAP |
| Smooth Scroll | Lenis |
| Routing | React Router |
| Forms | EmailJS |
| Icons | Lucide React + React Icons |
| SEO | React Helmet Async |

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts automatically. Open the local URL shown in the terminal.

## EmailJS Setup

To enable the contact form:

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Set up a service, email template, and get your public key
3. Update `src/constants/index.ts` with your credentials:

```ts
export const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
};
```

## Customization

All content is data-driven. Edit the files in `src/data/` and `src/constants/` to personalize:

- **`constants/index.ts`** — Name, role, tagline, social links, stats, typing phrases
- **`data/skills.ts`** — Skill categories, names, levels, icons
- **`data/services.ts`** — Service offerings
- **`data/projects.ts`** — Portfolio projects with categories, images, tech stack
- **`data/experience.ts`** — Timeline entries (work, education, certifications)
- **`data/testimonials.ts`** — Client testimonials

## Folder Structure

```
src/
  assets/          Static assets
  components/      Shared UI + Three.js components
    three/         React Three Fiber scene components
    ui/            Reusable UI primitives (cursor, buttons, etc.)
  sections/        Page sections (Hero, About, Skills, ...)
  pages/           Route-level pages
  hooks/           Custom React hooks
  utils/           Utility functions
  data/            Content data (skills, projects, etc.)
  constants/       App constants (nav, person, config)
  context/         React context providers (theme, audio)
  styles/          Additional stylesheets
```

## Build

```bash
npm run build
```

Produces an optimized production build in `dist/`.

## License

MIT — free to use as a template for your own portfolio.
