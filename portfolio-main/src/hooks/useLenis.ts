import { useEffect, useRef, useState } from 'react';

type LenisInstance = {
  destroy: () => void;
  on: (event: string, cb: (e: { scroll: number; limit: number }) => void) => void;
  raf: (time: number) => void;
  scrollTo: (target: number | string | HTMLElement, opts?: Record<string, unknown>) => void;
};

let lenisSingleton: LenisInstance | null = null;

export function useLenis() {
  const rafRef = useRef<number>(0);
  const [lenis, setLenis] = useState<LenisInstance | null>(null);

  useEffect(() => {
    if (lenisSingleton) {
      setLenis(lenisSingleton);
      return;
    }

    let cancelled = false;
    let instance: LenisInstance | null = null;

    (async () => {
      const Lenis = (await import('lenis')).default;
      if (cancelled) return;

      instance = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      }) as unknown as LenisInstance;

      lenisSingleton = instance;
      setLenis(instance);

      const raf = (time: number) => {
        instance?.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return lenis;
}
