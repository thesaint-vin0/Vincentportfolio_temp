import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Spotlight } from '../components/ui/Spotlight';
import { TESTIMONIALS } from '../data/testimonials';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative section-pad py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="section-max relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What clients <span className="gradient-text">say</span></>}
          subtitle="Don't take my word for it — here's what people I've worked with have to say."
        />

        <div className="relative mt-16">
          <div className="relative min-h-[20rem] sm:min-h-[18rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Spotlight className="glass-card glow-border mx-auto max-w-3xl rounded-3xl p-8 sm:p-10">
                  <div className="relative z-10">
                    <Quote className="h-10 w-10 text-primary-500/40" />
                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                      ))}
                    </div>
                    <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                    <div className="mt-7 flex items-center gap-4">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-500/40"
                      />
                      <div>
                        <p className="font-display text-base font-semibold text-white">
                          {current.name}
                        </p>
                        <p className="text-sm text-muted">{current.role}</p>
                      </div>
                    </div>
                  </div>
                </Spotlight>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              data-cursor="hover"
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  data-cursor="hover"
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? 'w-8 bg-gradient-primary'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              data-cursor="hover"
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
