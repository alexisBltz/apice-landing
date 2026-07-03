import { Reveal } from './Reveal';

const capas = [
  {
    key: 'est',
    tag: 'El estudiante · emocional',
    color: '#E8622A',
    title: 'Está en una misión, no en un castigo',
    body: 'Racha activa, misiones, niveles de dominio. El lenguaje del juego sin la trivialidad del juego: quiero avanzar porque el progreso se siente real.',
  },
  {
    key: 'pad',
    tag: 'El padre · racional',
    color: '#4536B8',
    title: 'Ve evidencia, no promesas',
    body: 'Curva de avance semanal, alertas de zona roja, recomendaciones de inversión basadas en el diagnóstico real. La inversión se convierte en datos verificables.',
  },
  {
    key: 'app',
    tag: 'La app · sistémico',
    color: '#D9A429',
    title: 'Sabe qué necesitas antes que tú',
    body: 'El Diagnostic Engine no repite preguntas al azar: detecta patrones de error y concentra la práctica donde el impacto en tu puntaje final es mayor.',
  },
];

export function Concepto() {
  return (
    <section id="concepto" className="py-24">
      <div className="wrap">
        <Reveal className="mb-[52px] max-w-[640px]">
          <span className="eyebrow">La física del ascenso</span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            En física, el ápice es el punto donde la trayectoria cambia. El de máximo potencial.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-niebla">
            Cada pregunta resuelta suma velocidad. Cada materia dominada corrige la curva. Ápice opera en tres
            capas al mismo tiempo — y toda decisión responde a una de ellas.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {capas.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <div
                className="relative h-full overflow-hidden rounded-[18px] border border-white/10 p-[30px_26px]"
                style={{ background: 'linear-gradient(160deg, #1C1A22, #141319)' }}
              >
                <span className="absolute inset-y-0 left-0 w-[3px]" style={{ background: c.color }} />
                <span className="font-mono text-[11px] uppercase" style={{ letterSpacing: '0.18em', color: c.color }}>
                  {c.tag}
                </span>
                <h3 className="my-2.5 mt-3.5 text-[22px]">{c.title}</h3>
                <p className="text-[15px] leading-relaxed text-niebla">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
