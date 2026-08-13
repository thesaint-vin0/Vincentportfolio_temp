import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 420, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="hover"], input, textarea');
      setHovering(Boolean(interactive));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{ x, y }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-400/70"
          animate={{
            width: hovering ? 56 : 34,
            height: hovering ? 56 : 34,
            scale: clicking ? 0.8 : 1,
            borderColor: hovering ? 'rgba(6,182,212,0.9)' : 'rgba(129,140,248,0.7)',
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 shadow-glow-accent"
          animate={{
            width: hovering ? 10 : 7,
            height: hovering ? 10 : 7,
            opacity: hovering ? 1 : 0.9,
          }}
        />
      </motion.div>
    </>
  );
}
