import { Reveal } from './Reveal';

const cards = [
  {
    tag: 'TUTOR ION',
    title: 'No te da la respuesta. Te ayuda a conquistarla.',
    body: 'ION explica paso a paso, usa la pregunta que estás resolviendo como contexto y convierte la duda en una decisión clara.',
    color: '#D9A429',
    symbol: 'ION',
    bullets: ['Explicaciones razonadas', 'Contexto de cada pregunta', 'Disponible con Premium'],
  },
  {
    tag: 'IMPULSOS',
    title: 'Energía de ascenso que también puedes ganar.',
    body: 'Completa misiones y reclama Impulsos. Úsalos para abrir refuerzos dirigidos o simulacros rápidos sin perder tu trayectoria.',
    color: '#E8622A',
    symbol: '⚡',
    bullets: ['Misiones verificadas', 'Refuerzos en zonas rojas', 'Control visible del saldo'],
  },
  {
    tag: 'PREMIUM',
    title: 'Más herramientas. La misma dirección.',
    body: 'Premium no reemplaza tu esfuerzo: elimina límites, abre simulacros completos y permite que ION acompañe cada tramo difícil.',
    color: '#B8860B',
    symbol: '◇',
    bullets: ['Preguntas ilimitadas', 'Simulacros completos', 'Centro de mando familiar'],
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative py-24">
      <div className="wrap">
        <Reveal className="mx-auto mb-12 max-w-[720px] text-center">
          <span className="eyebrow">El sistema de ascenso</span>
          <h2 className="mt-3.5 text-[clamp(30px,4.6vw,50px)] leading-[1.04]">
            ION te orienta. Los Impulsos te mueven. Premium abre la montaña.
          </h2>
          <p className="mx-auto mt-5 max-w-[60ch] text-niebla">
            Tres capas conectadas a una sola meta: usar mejor cada minuto antes del examen.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.tag} delay={index * 70}>
              <article
                className="group relative h-full overflow-hidden rounded-[26px_20px_24px_30px] border p-6 transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor: `${card.color}55`,
                  background: `radial-gradient(100% 80% at 100% 0%, ${card.color}18, transparent 55%), linear-gradient(155deg,#1C1A22,#111016)`,
                }}
              >
                <div
                  className="mb-8 grid h-14 w-14 place-items-center rounded-[20px_15px_18px_23px] border font-display text-sm font-black"
                  style={{
                    color: card.color,
                    borderColor: `${card.color}AA`,
                    boxShadow: `0 0 24px ${card.color}22`,
                  }}
                >
                  {card.symbol}
                </div>
                <span className="font-mono text-[10px] font-bold tracking-[.22em]" style={{ color: card.color }}>
                  {card.tag}
                </span>
                <h3 className="mt-3 text-[23px] leading-tight">{card.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-niebla">{card.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[13px] text-blancoA/85">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: card.color }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
