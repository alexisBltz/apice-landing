import { useEffect, useRef, useState } from 'react';

const SUMMIT = 5822; // Misti, m.s.n.m.

/// Altímetro fijo (desktop): traduce el avance de scroll en altura ganada, de
/// la base a la cima del Misti. La telemetría del montañismo, aplicada a la
/// página. Se oculta en móvil para no competir con el contenido.
export function AscentProgress() {
  const [pct, setPct] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setPct(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // reduce solo evita la transición CSS; el valor sigue actualizándose
    void reduce;
  }, []);

  const meters = Math.round(pct * SUMMIT);
  const atSummit = pct > 0.985;

  return (
    <div
      aria-hidden="true"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 select-none lg:flex"
      style={{ flexDirection: 'column', alignItems: 'center', gap: '12px' }}
    >
      {/* cota actual */}
      <div className="text-center">
        <div
          className="font-mono text-[13px] font-semibold tabular-nums"
          style={{ color: atSummit ? '#D9A429' : '#F7F6F4' }}
        >
          {meters.toLocaleString('es-PE')} m
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-niebla2">altura</div>
      </div>

      {/* riel vertical */}
      <div className="relative h-[240px] w-[3px] overflow-visible rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
        {/* fill que sube desde abajo */}
        <div
          className="absolute bottom-0 left-0 w-full rounded-full"
          style={{
            height: `${pct * 100}%`,
            background: 'linear-gradient(to top, #E8622A, #D9A429)',
            transition: 'height .15s linear',
          }}
        />
        {/* marcas de altitud */}
        {[0.25, 0.5, 0.75].map((m) => (
          <span
            key={m}
            className="absolute left-1/2 h-[1px] w-[9px] -translate-x-1/2"
            style={{ bottom: `${m * 100}%`, background: 'rgba(255,255,255,0.22)' }}
          />
        ))}
        {/* marcador (escalador) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            bottom: `${pct * 100}%`,
            width: '11px',
            height: '11px',
            marginBottom: '-5px',
            background: atSummit ? '#D9A429' : '#F0732F',
            boxShadow: `0 0 0 4px ${atSummit ? 'rgba(217,164,41,0.3)' : 'rgba(240,115,47,0.3)'}`,
            transition: 'bottom .15s linear',
          }}
        />
      </div>

      {/* cima */}
      <div className="text-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M4 20 L12 5 L20 20" stroke={atSummit ? '#D9A429' : '#6F6A63'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
