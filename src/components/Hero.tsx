import { RidgeCanvas } from './RidgeCanvas';
import { PhoneMockup } from './PhoneMockup';

const stats = [
  { n: '<30s', l: 'al primer diagnóstico' },
  { n: 'SM-2', l: 'repaso que no olvidas' },
  { n: '1 : 1', l: 'contra tu versión anterior' },
];

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* montaña de fondo, sutil (el protagonista es el mockup) */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <RidgeCanvas />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 80% at 78% 40%, rgba(232,98,42,0.12), transparent 55%), linear-gradient(to bottom, rgba(10,10,10,0.35), rgba(10,10,10,0) 30%, #0E0E0E 96%)',
        }}
      />

      <div className="wrap relative grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:py-10">
        {/* Columna texto */}
        <div className="max-w-[580px]">
          <span className="eyebrow">La física del ascenso</span>
          <h1 className="mt-4 text-[clamp(36px,5.4vw,64px)] font-extrabold leading-[0.98]">
            Llegar es solo el inicio.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #F0732F 20%, #D9A429)' }}
            >
              Quédate en la cima.
            </span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[clamp(16px,1.9vw,19px)] leading-relaxed text-niebla">
            Sabes dónde estás, qué te falta y tu próximo paso. Tu familia ve el avance real.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a href="#descarga" className="btn btn-primary">
              Empieza tu ascenso
            </a>
            <a href="#concepto" className="btn btn-ghost">
              Cómo funciona
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-[26px] font-extrabold leading-none text-blancoA">{s.n}</span>
                <span className="mt-1 font-mono text-[10.5px] uppercase tracking-wide text-niebla2">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna mockup */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </header>
  );
}
