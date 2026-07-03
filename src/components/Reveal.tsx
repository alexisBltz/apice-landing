import type { ReactNode } from 'react';
import { useReveal } from './useReveal';

/// Envuelve contenido con una animación de entrada al hacer scroll.
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(26px)',
        transition: 'opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
