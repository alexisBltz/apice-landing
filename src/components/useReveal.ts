import { useEffect, useRef, useState } from 'react';

/// Revela un elemento cuando entra al viewport (scroll reveal). Devuelve una
/// ref para el nodo y un booleano `shown`.
export function useReveal<T extends HTMLElement>(threshold = 0.16) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}
