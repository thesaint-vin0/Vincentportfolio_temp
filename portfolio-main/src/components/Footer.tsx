import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { PERSON, NAV_LINKS } from '../constants';

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'Email', href: `mailto:${PERSON.email}`, icon: Mail },
];

export function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative section-pad pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px shimmer-line" />

      <div className="section-max relative">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-bg">
                  <span className="font-display text-base font-bold gradient-text">A</span>
                </div>
              </div>
              <span className="font-display text-lg font-semibold">{PERSON.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {PERSON.role} crafting premium digital experiences with modern web technology.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-muted hover:text-white transition-colors"
                    data-cursor="hover"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Get in touch
            </h4>
            <a
              href={`mailto:${PERSON.email}`}
              className="text-sm text-muted hover:text-white transition-colors"
              data-cursor="hover"
            >
              {PERSON.email}
            </a>
            <p className="mt-2 text-sm text-muted">{PERSON.location}</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-medium text-white shadow-glow hover:shadow-glow-lg transition-all"
              data-cursor="hover"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-muted">
            © {new Date().getFullYear()} {PERSON.name}. Built with
            <Heart className="h-3 w-3 fill-primary-400 text-primary-400" />
            and React.
          </p>
          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="group flex items-center gap-2 rounded-xl glass px-4 py-2 text-xs font-medium text-muted hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      data-cursor="hover"
      className="fixed bottom-6 right-6 z-[140] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white shadow-glow-lg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
