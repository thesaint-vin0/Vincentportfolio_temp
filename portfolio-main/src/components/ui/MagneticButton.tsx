import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'submit' | 'button';
};

export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  as = 'button',
  href,
  target,
  rel,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setTransform(`translate(${x * strength}px, ${y * strength}px)`);
  };

  const handleLeave = () => setTransform('translate(0px, 0px)');

  const commonProps = {
    ref: ref as never,
    className: `magnetic ${className}`,
    style: { transform },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
  };

  if (as === 'a') {
    return (
      <motion.a
        {...commonProps}
        href={href}
        target={target}
        rel={rel}
        whileTap={{ scale: 0.94 }}
        data-cursor="hover"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...commonProps}
      type={type}
      whileTap={{ scale: 0.94 }}
      data-cursor="hover"
    >
      {children}
    </motion.button>
  );
}
