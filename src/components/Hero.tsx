import { RidgeCanvas } from './RidgeCanvas';

const stats = [
  { n: '<30s', l: 'Al primer diagnóstico' },
  { n: '5 822 m', l: 'Tu altura hacia el Misti' },
  { n: '1 : 1', l: 'Contra tu versión anterior' },
];

export function Hero() {
  return (
    <header id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <RidgeCanvas />
      {/* Difuminado para fundir el canvas con el fondo y dar legibilidad */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 8%, rgba(20,19,25,0) 40%, rgba(10,10,10,0.55) 100%), linear-gradient(to bottom, rgba(10,10,10,0) 55%, #0E0E0E 98%)',
        }}
      />
      <div className="wrap relative z-[2] max-w-[760px] py-[60px] pb-24">
        <span className="eyebrow">Preparación para el examen de admisión · UNSA · Arequipa</span>
        <h1 className="mt-[18px] text-[clamp(40px,8.2vw,92px)] font-extrabold leading-[0.98]">
          Llegar es solo el inicio.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, #F0732F, #D9A429)' }}
          >
            Quédate en la cima.
          </span>
        </h1>
        <p className="my-8 max-w-[54ch] text-[clamp(16px,2.3vw,20px)] leading-relaxed text-niebla">
          Ápice no es una academia en el bolsillo. Es el sistema que le dice al estudiante{' '}
          <strong className="text-blancoA">dónde está, qué le falta y cuál es su próximo paso</strong> — y al
          padre, evidencia verificable del avance. La física del ascenso, hecha app.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="#descarga" className="btn btn-primary">
            Empieza tu ascenso
          </a>
          <a href="#concepto" className="btn btn-ghost">
            Cómo funciona
          </a>
        </div>
        <div className="mt-11 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.l} className="flex flex-col">
              <span className="font-display text-3xl font-extrabold text-blancoA">{s.n}</span>
              <span className="font-mono text-[11.5px] uppercase tracking-wide text-niebla2">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
