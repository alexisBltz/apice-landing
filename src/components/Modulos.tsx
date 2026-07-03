import type { ReactNode } from 'react';
import { useReveal } from './useReveal';

type Station = {
  alt: string;
  title: string;
  body: string;
  icon: ReactNode;
  accent: string;
  badge?: string;
};

// Estaciones del ascenso, de la base a la cima. La cota de altitud es el hilo
// narrativo: subes conforme avanzas por la página.
const stations: Station[] = [
  {
    alt: '1 200 m',
    title: 'Ruta de Ascenso',
    accent: '#E8622A',
    body: 'Tu home es una montaña. Cada materia, una ladera: verde si la dominas, roja si es tu debilidad.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 20 L10 8 L15 15 L21 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="5" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    alt: '2 100 m',
    title: 'Diagnóstico adaptativo',
    accent: '#2E9257',
    body: 'No estudias más: estudias lo que mueve la aguja. Con proyección de tu puntaje real.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 14 a8 8 0 1 0 16 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 14 V6 M12 6 l4 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    alt: '3 000 m',
    title: 'Aclimatación',
    accent: '#2E9257',
    body: 'Cada error se vuelve una carta de repaso espaciado. Tu mazo se arma solo, con tus fallos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="2.1" />
        <path d="M8 10 h5 M8 14 h8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    alt: '3 900 m',
    title: 'Tutor Ápice con IA',
    accent: '#E8622A',
    badge: 'Con IA',
    body: 'Resuelve tus dudas paso a paso y te arma resúmenes de cualquier tema en segundos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 l2.2 5.6 L20 9 l-4.4 3.4 L17 18 l-5-3.2 L7 18 l1.4-5.6 L4 9 l5.8-.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    alt: '4 700 m',
    title: 'Simulacros reales',
    accent: '#D9A429',
    badge: 'Premium',
    body: 'Cronometrados, sin pistas, como el día real. Y ajustan tu proyección.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2.1" />
        <path d="M12 7 v5 l3.2 2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    alt: '5 822 m',
    title: 'Cima — Impulsos',
    accent: '#D9A429',
    body: 'La moneda que el apoderado recarga y el estudiante invierte en refuerzo. La cima se conquista en familia.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 3 L5 13 h5 l-1 8 8-10 h-5 l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Station({ s, index }: { s: Station; index: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.35);
  const left = index % 2 === 0; // alterna lado (sendero zigzag)
  const isSummit = index === stations.length - 1;

  return (
    <div
      ref={ref}
      className="relative grid items-center gap-x-6"
      style={{
        gridTemplateColumns: 'minmax(0,1fr) 64px minmax(0,1fr)',
      }}
    >
      {/* Tarjeta — ocupa un lado; el otro queda vacío (zigzag) */}
      <div
        className={left ? 'md:col-start-1 md:text-right' : 'md:col-start-3'}
        style={{
          gridColumn: left ? undefined : '3',
          opacity: shown ? 1 : 0,
          transform: shown ? 'none' : `translateX(${left ? -28 : 28}px)`,
          transition: 'opacity .6s cubic-bezier(.2,.7,.2,1), transform .6s cubic-bezier(.2,.7,.2,1)',
        }}
      >
        <div
          className="group inline-block w-full rounded-[20px] border p-6 text-left transition duration-300"
          style={{
            borderColor: shown ? `${s.accent}55` : 'rgba(255,255,255,0.08)',
            background: 'linear-gradient(160deg, #1C1A22, #131218)',
            boxShadow: shown ? `0 24px 60px -30px ${s.accent}66` : 'none',
          }}
        >
          <div className={`mb-3 flex items-center gap-3 ${left ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <span className="font-mono text-[12px] tracking-widest" style={{ color: s.accent }}>
              {s.alt}
            </span>
            {s.badge && (
              <span
                className="rounded-full border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider"
                style={{ color: s.accent, borderColor: `${s.accent}66`, background: `${s.accent}18` }}
              >
                {s.badge}
              </span>
            )}
          </div>
          <h3 className="text-[21px]" style={isSummit ? { color: '#D9A429' } : undefined}>
            {s.title}
          </h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-niebla">{s.body}</p>
        </div>
      </div>

      {/* Nodo central del sendero */}
      <div className="col-start-2 flex justify-center" style={{ gridColumn: '2' }}>
        <div
          className="relative grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500"
          style={{
            color: '#fff',
            background: shown ? s.accent : '#26242e',
            boxShadow: shown ? `0 0 0 6px ${s.accent}22, 0 10px 30px -6px ${s.accent}88` : 'none',
            transform: shown ? 'scale(1)' : 'scale(0.6)',
            borderRadius: '22px 16px 20px 26px',
          }}
        >
          {s.icon}
        </div>
      </div>
    </div>
  );
}

export function Modulos() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.05);
  return (
    <section id="modulos" className="pb-28 pt-6">
      <div className="wrap">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <span className="eyebrow">Estación por estación</span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            No es una lista de funciones. Es un ascenso.
          </h2>
        </div>

        {/* Sendero: línea central que se "llena" al entrar en vista */}
        <div ref={ref} className="relative mx-auto max-w-[900px]">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 md:block"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden w-[3px] -translate-x-1/2 md:block"
            style={{
              height: shown ? '100%' : '0%',
              background: 'linear-gradient(to bottom, #E8622A, #2E9257 45%, #D9A429)',
              transition: 'height 1.6s cubic-bezier(.4,0,.2,1)',
            }}
          />
          <div className="flex flex-col gap-10 md:gap-6">
            {stations.map((s, i) => (
              <Station key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
