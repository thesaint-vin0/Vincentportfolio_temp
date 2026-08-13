import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { PERSON } from '../constants';

const Hero = lazy(() => import('../sections/Hero').then((m) => ({ default: m.Hero })));
const About = lazy(() => import('../sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('../sections/Skills').then((m) => ({ default: m.Skills })));
const Services = lazy(() => import('../sections/Services').then((m) => ({ default: m.Services })));
const Projects = lazy(() => import('../sections/Projects').then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import('../sections/Experience').then((m) => ({ default: m.Experience })));
const Testimonials = lazy(() => import('../sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const Contact = lazy(() => import('../sections/Contact').then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="min-h-[40vh] flex items-center justify-center" aria-hidden />;
}

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{PERSON.name} — {PERSON.role}</title>
        <meta
          name="description"
          content={`${PERSON.name} is a ${PERSON.role.toLowerCase()} building modern, fast and scalable web applications. Specializing in React, TypeScript, Three.js, and creative web experiences.`}
        />
        <meta name="author" content={PERSON.name} />
        <meta property="og:title" content={`${PERSON.name} — ${PERSON.role}`} />
        <meta property="og:description" content={PERSON.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PERSON.name} — ${PERSON.role}`} />
        <meta name="twitter:description" content={PERSON.tagline} />
      </Helmet>

      <Suspense fallback={<SectionFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
}
