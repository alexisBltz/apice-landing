import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Capa = {
  tag: string;
  color: string;
  title: string;
  body: string;
  lens: ReactNode;
};

// El "lente" de cada capa: el estudiante ve una montaña, el padre ve
// telemetría, la app ve el sistema. La tensión visual naif/preciso del PRD.
const capas: Capa[] = [
  {
    tag: 'Estudiante',
    color: '#E8622A',
    title: 'Una misión, no un castigo',
    body: 'Racha, misiones, dominio. El progreso se siente real y quieres seguir subiendo.',
    lens: (
      <svg viewBox="0 0 120 60" className="h-full w-full">
        <path d="M2 56 L34 20 L52 38 L78 10 L118 56 Z" fill="rgba(232,98,42,0.12)" />
        <path d="M2 56 L34 20 L52 38 L78 10 L118 56" fill="none" stroke="#E8622A" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="78" cy="10" r="3.4" fill="#E8622A" />
        <path d="M8 50 L30 30 L48 44" stroke="rgba(232,98,42,0.4)" strokeWidth="1" strokeDasharray="2 4" fill="none" />
      </svg>
    ),
  },
  {
    tag: 'Apoderado',
    color: '#4536B8',
    title: 'Evidencia, no promesas',
    body: 'Curva semanal, alertas de zona roja y dónde invertir. Tu inversión, en datos.',
    lens: (
      <svg viewBox="0 0 120 60" className="h-full w-full">
        {[
          [12, 34],
          [30, 22],
          [48, 40],
          [66, 16],
          [84, 26],
          [102, 12],
        ].map(([x, h], i) => (
          <rect key={i} x={x} y={56 - h} width="10" height={h} rx="2" fill={i === 3 ? '#8B1A1A' : '#4536B8'} opacity={i === 3 ? 0.9 : 0.75} />
        ))}
        <path d="M17 22 L35 27 L53 18 L71 24 L89 15 L107 20" stroke="#D9A429" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'El sistema',
    color: '#D9A429',
    title: 'Sabe qué necesitas antes que tú',
    body: 'Detecta tus patrones de error y concentra la práctica donde más sube tu puntaje.',
    lens: (
      <svg viewBox="0 0 120 60" className="h-full w-full">
        {[
          [20, 20],
          [60, 12],
          [95, 28],
          [40, 46],
          [82, 48],
        ].map(([x, y], i) => (
          <g key={i}>
            {i > 0 && (
              <line x1={x} y1={y} x2={[20, 60, 95, 40, 82][(i - 1) % 5]} y2={[20, 12, 28, 46, 48][(i - 1) % 5]} stroke="rgba(217,164,41,0.3)" strokeWidth="1" />
            )}
          </g>
        ))}
        {[
          [20, 20],
          [60, 12],
          [95, 28],
          [40, 46],
          [82, 48],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 1 ? 4.5 : 3} fill="#D9A429" opacity={i === 1 ? 1 : 0.7} />
        ))}
      </svg>
    ),
  },
];

export function Concepto() {
  return (
    <section id="concepto" className="py-24">
      <div className="wrap">
        <Reveal className="mb-[52px] max-w-[660px]">
          <span className="eyebrow">La física del ascenso</span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            El ápice: el punto de máximo potencial.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-niebla">
            Ápice mira el mismo ascenso desde tres lentes a la vez.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {capas.map((c, i) => (
            <Reveal key={c.tag} delay={i * 90}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 transition duration-300 hover:border-white/20"
                style={{ background: 'linear-gradient(165deg, #1C1A22, #131218)' }}
              >
                {/* el lente */}
                <div
                  className="relative h-[104px] overflow-hidden border-b border-white/[0.06] p-5"
                  style={{ background: `radial-gradient(120% 140% at 50% 0%, ${c.color}22, transparent 70%)` }}
                >
                  {c.lens}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[11px] uppercase" style={{ letterSpacing: '0.16em', color: c.color }}>
                    {c.tag}
                  </span>
                  <h3 className="mb-2.5 mt-3 text-[21px]">{c.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-niebla">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
