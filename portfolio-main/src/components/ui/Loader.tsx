import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => onComplete?.(), 450);
      }
      setProgress(Math.min(current, 100));
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-radial" />

      <motion.div
        className="relative mb-8 h-20 w-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-primary-500/40" />
        <div className="absolute inset-2 rounded-xl bg-gradient-primary blur-md opacity-60 animate-pulse-glow" />
        <div className="absolute inset-3 rounded-xl bg-gradient-primary" />
      </motion.div>

      <motion.h1
        className="relative font-display text-2xl font-semibold tracking-tight gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Alex Morgan
      </motion.h1>

      <div className="relative mt-6 h-1 w-56 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="relative mt-3 font-mono text-xs text-muted">
        {Math.round(progress)}%
      </p>
    </motion.div>
  );
}
