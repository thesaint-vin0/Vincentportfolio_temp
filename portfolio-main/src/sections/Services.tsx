import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Spotlight } from '../components/ui/Spotlight';
import { SERVICES } from '../data/services';

export function Services() {
  return (
    <section id="services" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-dot opacity-15" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="Services"
          title={<>What I <span className="gradient-text">do best</span></>}
          subtitle="End-to-end web development services tailored to your goals — from concept to launch and beyond."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Spotlight
                className="glass-card glow-border group relative h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
                size={400}
              >
                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/70">
                        <Check className="h-3.5 w-3.5 text-accent-400" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-primary-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Glow accent on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
