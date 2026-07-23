import { RidgeCanvas } from './RidgeCanvas';
import { IonHero } from './IonHero';

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

      <div className="wrap relative grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-7 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2 lg:py-8">
        {/* Columna texto */}
        <div className="relative z-10 max-w-[610px]">
          <span className="eyebrow">La física del ascenso</span>
          <h1 className="mt-4 text-[clamp(40px,5.2vw,72px)] font-extrabold leading-[0.94]">
            No estudies a ciegas.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #F0732F 20%, #D9A429)' }}
            >
              Escala con dirección.
            </span>
          </h1>
          <p className="mt-6 max-w-[44ch] text-[clamp(16px,1.7vw,19px)] leading-relaxed text-niebla">
            ION convierte cada error en una ruta clara. Tú sabes qué reforzar y tu familia ve evidencia real
            del ascenso.
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

        {/* Núcleo inteligente de ION */}
        <div className="relative flex justify-center lg:justify-end">
          <IonHero />
        </div>
      </div>
    </header>
  );
}
