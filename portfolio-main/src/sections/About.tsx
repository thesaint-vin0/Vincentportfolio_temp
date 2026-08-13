import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Mail, Coffee } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Spotlight } from '../components/ui/Spotlight';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { PERSON, STATS } from '../constants';

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold gradient-text sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  const highlights = [
    'Clean, maintainable, well-documented code',
    'Performance-first mindset (90+ Lighthouse)',
    'Pixel-perfect, accessible, responsive UI',
    '3D, motion & creative web experiences',
  ];

  return (
    <section id="about" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-dot opacity-20 mask-fade-b" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="About Me"
          title={<>The developer behind the <span className="gradient-text">pixels</span></>}
          subtitle="A passionate Mechatronics Engineer(Full-Stack Web developer) who blends technical precision with creative vision to build experiences people remember."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-5">
          {/* Image */}
          <Reveal className="lg:col-span-2" y={50}>
            <Spotlight className="glass-card glow-border group aspect-[4/5] rounded-3xl p-2">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={PERSON.avatar}
                  alt={PERSON.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                  <p className="font-display text-lg font-semibold">{PERSON.name}</p>
                  <p className="text-sm text-muted">{PERSON.role}</p>
                </div>
              </div>
            </Spotlight>
          </Reveal>

          {/* Bio */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/85">
                I&apos;m a {PERSON.role.toLowerCase()} with 3+ years of experience building
                websites that are fast, beautiful, and scalable. I specialize in React,
                TypeScript, and creative web technologies like Three.js and GSAP.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From SaaS dashboards to award-style portfolios, I obsess over the details
                that turn a good website into a great one — micro-interactions, performance,
                and that feeling when everything just clicks.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-400" /> {PERSON.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary-400" /> {PERSON.email}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-primary-400" /> Fueled by espresso or sprite
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="mt-20 grid grid-cols-2 gap-8 rounded-3xl glass-card glow-border p-10 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                start={inView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
