import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { NAV_LINKS, PERSON } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { useAudio } from '../context/AudioContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggle: toggleTheme } = useTheme();
  const { enabled: audioOn, toggle: toggleAudio } = useAudio();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    NAV_LINKS.forEach(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`section-max section-pad flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass shadow-glass py-3 px-4'
              : 'bg-transparent py-2 px-2'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            data-cursor="hover"
          >
            <div className="relative h-9 w-9 rounded-xl bg-gradient-primary p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-bg">
                <span className="font-display text-base font-bold gradient-text">A</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-primary blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
              {PERSON.name}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ label, href, icon: Icon }) => {
              const id = href.slice(1);
              const active = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    data-cursor="hover"
                    className={`relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-white' : 'text-muted hover:text-white'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 opacity-70" />
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07] border border-white/10"
                        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              data-cursor="hover"
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass text-muted hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleAudio}
              data-cursor="hover"
              aria-label="Toggle background music"
              className="hidden h-9 w-9 items-center justify-center rounded-lg glass text-muted hover:text-white transition-colors sm:flex"
            >
              {audioOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              data-cursor="hover"
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[160] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-bg/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 glass border-l border-white/10 p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-sm font-semibold gradient-text">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="space-y-1">
                {NAV_LINKS.map(({ label, href, icon: Icon }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleClick(e, href)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4 opacity-70" />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl glass px-4 py-3 text-sm text-white"
                >
                  {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  Theme
                </button>
                <button
                  onClick={toggleAudio}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl glass px-4 py-3 text-sm text-white"
                >
                  {audioOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  Audio
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
