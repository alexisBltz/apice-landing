import { Reveal } from './Reveal';
import { useReveal } from './useReveal';

const bars = [
  { lab: 'Química', pct: 88, color: '#2E9257' },
  { lab: 'Matemática', pct: 74, color: '#2E9257' },
  { lab: 'Biología', pct: 61, color: '#B8860B' },
  { lab: 'Historia', pct: 38, color: '#C0392B' },
];

export function Puente() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);
  return (
    <section
      id="puente"
      className="border-y border-white/10 py-24"
      style={{
        background:
          'radial-gradient(90% 120% at 15% 0%, rgba(42,31,122,0.55), rgba(10,10,10,0) 60%), radial-gradient(90% 120% at 100% 100%, rgba(232,98,42,0.18), rgba(10,10,10,0) 55%)',
      }}
    >
      <div className="wrap grid grid-cols-1 items-center gap-[60px] md:grid-cols-2">
        <Reveal>
          <span className="eyebrow" style={{ color: '#4536B8' }}>
            El puente · para el apoderado
          </span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            Deja de preguntar "¿estudiaste hoy?". Ahora lo sabes.
          </h2>
          <p className="mt-[18px] text-[17px] leading-[1.65] text-niebla">
            El Parent Dashboard es el corazón de Ápice y lo que ninguna otra app peruana tiene: el avance real
            de tu hijo, en tiempo real. Curva semanal por materia, alertas cuando una zona entra en rojo, y una
            recomendación concreta de dónde invertir.
          </p>
          <p className="mt-[18px] text-[17px] leading-[1.65] text-niebla">
            No vendemos una app. Vendemos <strong className="text-blancoA">certeza sobre tu inversión</strong>.
          </p>
        </Reveal>

        <div ref={ref} className="rounded-[22px] border border-white/10 p-[26px]" style={{ background: 'linear-gradient(160deg, #1C1A22, #141319)' }}>
          {bars.map((b) => (
            <div key={b.lab} className="mb-4 flex items-center gap-3">
              <span className="w-[90px] font-mono text-xs capitalize text-niebla">{b.lab}</span>
              <div className="h-[9px] flex-1 overflow-hidden rounded-md bg-white/[0.07]">
                <i
                  className="block h-full rounded-md"
                  style={{
                    background: b.color,
                    width: shown ? `${b.pct}%` : '0%',
                    transition: 'width 1.1s cubic-bezier(.2,.8,.2,1)',
                  }}
                />
              </div>
              <span className="w-[42px] text-right font-mono text-xs tabular-nums text-blancoA">{b.pct}%</span>
            </div>
          ))}
          <p className="mt-2 font-mono text-[13px] text-niebla2">
            ▲ Diego subió 22 puntos en Química esta semana. Historia lleva 3 días sin práctica — recomendamos
            reforzar.
          </p>
        </div>
      </div>
    </section>
  );
}
