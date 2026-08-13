import { useRef } from 'react';
import type { HTMLAttributes } from 'react';

type SpotlightProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  color?: string;
  size?: number;
};

export function Spotlight({
  children,
  className = '',
  color = 'rgba(99, 102, 241, 0.14)',
  size = 500,
  ...rest
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    el.style.setProperty('--spotlight-size', `${size}px`);
    el.style.setProperty('--spotlight-color', color);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight group ${className}`}
      style={
        {
          '--spotlight-size': `${size}px`,
          '--spotlight-color': color,
        } as React.CSSProperties
      }
      {...rest}
    >
      {/* override the spotlight ::before with custom props */}
      <style>{`
        .spotlight::before {
          background: radial-gradient(
            var(--spotlight-size, 500px) circle at var(--mx, 50%) var(--my, 50%),
            var(--spotlight-color, rgba(99,102,241,0.14)),
            transparent 40%
          ) !important;
        }
      `}</style>
      {children}
    </div>
  );
}
