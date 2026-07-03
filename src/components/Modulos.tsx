import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Feat = {
  title: string;
  body: string;
  icon: ReactNode;
  tint: string;
  badge?: { text: string; kind: 'ai' | 'prem' };
};

const feats: Feat[] = [
  {
    title: 'Ruta de Ascenso',
    body: 'Tu home es una montaña que escalas. Cada materia es una ladera: verde si la dominas, roja si es tu debilidad. Ves de un vistazo dónde estás.',
    tint: 'rgba(232,98,42,0.14)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 20 L10 8 L15 15 L21 5" stroke="#E8622A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="5" r="2.2" fill="#E8622A" />
      </svg>
    ),
  },
  {
    title: 'Diagnóstico adaptativo',
    body: 'Prioriza donde el peso en el examen es alto y tu acierto bajo. No estudias más: estudias lo que mueve la aguja. Proyección de puntaje incluida.',
    tint: 'rgba(46,146,87,0.16)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 14 a8 8 0 1 0 16 0" stroke="#2E9257" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 14 V6" stroke="#2E9257" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 6 l4 3" stroke="#2E9257" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Tutor Ápice con IA',
    body: 'Pregúntale cualquier duda: explica paso a paso, no da la respuesta seca. Genera resúmenes de cualquier tema en segundos.',
    tint: 'rgba(232,98,42,0.14)',
    badge: { text: 'Con IA · Premium', kind: 'ai' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 l2.2 5.6 L20 9 l-4.4 3.4 L17 18 l-5-3.2 L7 18 l1.4-5.6 L4 9 l5.8-.4Z" stroke="#E8622A" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Aclimatación',
    body: 'Cada pregunta que fallas se vuelve una carta de repaso con repetición espaciada (el algoritmo de Anki). Tu mazo se arma solo con tus errores reales.',
    tint: 'rgba(46,146,87,0.16)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="#2E9257" strokeWidth="2.1" />
        <path d="M8 10 h5 M8 14 h8" stroke="#2E9257" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Simulacros reales',
    body: 'Exámenes cronometrados tipo UNSA. Sin pistas, como el día real. El resultado alimenta tu diagnóstico y tu proyección.',
    tint: 'rgba(184,134,11,0.16)',
    badge: { text: 'Premium', kind: 'prem' },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="#D9A429" strokeWidth="2.1" />
        <path d="M12 7 v5 l3.2 2" stroke="#D9A429" strokeWidth="2.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Impulsos',
    body: 'La moneda que el padre recarga y el estudiante gasta en refuerzo dirigido y simulacros. Inversión con impacto medible, no gasto al azar.',
    tint: 'rgba(232,98,42,0.14)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 3 L5 13 h5 l-1 8 8-10 h-5 l1-8Z" stroke="#E8622A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Badge({ text, kind }: { text: string; kind: 'ai' | 'prem' }) {
  const cls =
    kind === 'ai'
      ? 'bg-naranja/[0.14] text-naranja border-naranja/40'
      : 'bg-dorado/[0.16] text-doradoLit border-dorado/40';
  return (
    <span className={`mt-3.5 inline-block rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider ${cls}`}>
      {text}
    </span>
  );
}

export function Modulos() {
  return (
    <section id="modulos" className="pb-24 pt-5">
      <div className="wrap">
        <Reveal className="mb-[52px] max-w-[640px]">
          <span className="eyebrow">Seis instrumentos, un ascenso</span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            Todo lo que necesitas para escalar — y quedarte arriba.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 70}>
              <div className="group h-full rounded-[18px] border border-white/10 bg-carbon p-[26px_24px_28px] transition hover:-translate-y-1 hover:border-naranja/40 hover:bg-carbon2">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-[13px]" style={{ background: f.tint }}>
                  {f.icon}
                </div>
                <h3 className="mb-2 text-[18.5px]">{f.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-niebla">{f.body}</p>
                {f.badge && <Badge text={f.badge.text} kind={f.badge.kind} />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
