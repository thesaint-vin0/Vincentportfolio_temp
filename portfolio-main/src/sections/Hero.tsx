import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, ChevronDown, Sparkles } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { AnimatedBlobs } from '../components/ui/AnimatedBlobs';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { PERSON, TYPING_PHRASES } from '../constants';

const HeroScene = lazy(() =>
  import('../components/three/HeroScene').then((m) => ({ default: m.HeroScene })),
);

export function Hero() {
  const typed = useTypingEffect(TYPING_PHRASES);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Three.js scene background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-radial" />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient + grid overlays */}
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <AnimatedBlobs />

      {/* Content */}
      <div className="section-max section-pad relative z-10 flex flex-col items-center text-center">
        <motion.span
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-primary-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="h-3.5 w-3.5 text-accent-400" />
          Available for freelance & full-time
        </motion.span>

        <motion.p
          className="font-mono text-sm text-muted sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="gradient-text">{PERSON.name}</span>
        </motion.h1>

        <motion.div
          className="mt-4 flex h-9 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-display text-xl font-medium sm:text-3xl">
            <span className="gradient-text-soft">{typed}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary-400 text-2xl sm:text-4xl align-middle" style={{ height: '1em' }} />
          </h2>
        </motion.div>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {PERSON.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <MagneticButton
            as="a"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#projects');
            }}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-shadow"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            as="a"
            href={PERSON.resumeUrl}
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Send className="h-4 w-4" />
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll down"
        data-cursor="hover"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Scroll
        </span>
        <div className="relative flex h-9 w-5 justify-center rounded-full border border-white/20">
          <span className="mt-1.5 h-2 w-1 rounded-full bg-primary-400 animate-scroll-dot" />
        </div>
        <ChevronDown className="h-3 w-3 animate-bounce text-muted" />
      </motion.button>
    </section>
  );
}
