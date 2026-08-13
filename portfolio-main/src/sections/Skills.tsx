import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Spotlight } from '../components/ui/Spotlight';
import { useInView } from '../hooks/useInView';
import { SKILLS } from '../data/skills';

function SkillCard({ name, level, icon: Icon, color, index }: {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.04 }}
    >
      <Spotlight className="glass-card glow-border group flex h-full flex-col items-center gap-3 rounded-2xl p-5" color={`${color}22`}>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${color}18`, color }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium text-white/90">{name}</span>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="font-mono text-[10px] text-muted">{level}%</span>
      </Spotlight>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="Skills & Tech"
          title={<>My <span className="gradient-text">toolkit</span></>}
          subtitle="Technologies I use to bring ideas to life — from frontend frameworks to databases and dev tools."
        />

        <div className="mt-16 space-y-12">
          {SKILLS.map((category, catIdx) => (
            <Reveal key={category.title} delay={catIdx * 0.1}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{category.title}</h3>
                <div className="neon-divider flex-1" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
