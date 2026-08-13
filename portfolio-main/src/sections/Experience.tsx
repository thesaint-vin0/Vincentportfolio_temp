import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Spotlight } from '../components/ui/Spotlight';
import { EXPERIENCE } from '../data/experience';
import type { TimelineEntry } from '../data/experience';

const typeConfig = {
  work: { icon: Briefcase, color: 'from-primary-500 to-secondary-500', label: 'Experience' },
  education: { icon: GraduationCap, color: 'from-accent-500 to-primary-500', label: 'Education' },
  certification: { icon: Award, color: 'from-secondary-500 to-accent-500', label: 'Certification' },
};

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const config = typeConfig[entry.type];
  const Icon = config.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
    >
      {/* Node on the line */}
      <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
        <motion.div
          className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${config.color} shadow-glow`}
          whileHover={{ scale: 1.2 }}
        >
          <Icon className="h-4 w-4 text-white" />
        </motion.div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 blur-md opacity-50 -z-10" />
      </div>

      {/* Card */}
      <div className={`ml-14 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${isLeft ? '' : 'md:text-left'}`}>
        <Spotlight className="glass-card glow-border rounded-2xl p-5">
          <div className="relative z-10">
            <span className="inline-block rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-300">
              {config.label}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">{entry.role}</h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5" /> {entry.organization}
            </p>
            <p className="mt-1 font-mono text-xs text-accent-300">{entry.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[10px] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Spotlight>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-dot opacity-15" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="Experience & Education"
          title={<>My <span className="gradient-text">journey</span></>}
          subtitle="The roles, education, and certifications that shaped my career as a developer."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary-500/40 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCE.map((entry, i) => (
              <TimelineCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
