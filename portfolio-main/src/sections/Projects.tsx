import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Spotlight } from '../components/ui/Spotlight';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

export function Projects() {
  const [active, setActive] = useState<(typeof PROJECT_CATEGORIES)[number]>('All');

  const filtered = useMemo(
    () =>
      active === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active),
    [active],
  );

  return (
    <section id="projects" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected <span className="gradient-text">work</span></>}
          subtitle="A handful of projects I'm proud of — each crafted with care, performance, and attention to detail."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="hover"
              className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                active === cat ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-primary shadow-glow"
                  transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Spotlight className="glass-card glow-border group h-full overflow-hidden rounded-2xl">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg/40 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-200">
                      {project.category}
                    </span>

                    {/* Hover overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-bg/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        aria-label="View source on GitHub"
                        className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white hover:scale-110 transition-transform"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        aria-label="View live demo"
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative z-10 p-5">
                    <h3 className="flex items-center justify-between font-display text-lg font-semibold text-white">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:text-primary-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[10px] text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Spotlight>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
