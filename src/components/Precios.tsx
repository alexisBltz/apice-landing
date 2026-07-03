import { Reveal } from './Reveal';

function Check({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
      <path d="M5 12 l4 4 L19 7" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const free = [
  '20 preguntas al día',
  'Diagnóstico inicial y racha',
  'Aclimatación (repaso espaciado)',
  'Vista parcial del dashboard',
];

const premium = [
  'Tutor Ápice con IA — dudas y resúmenes',
  'Preguntas ilimitadas + simulacros',
  'Genera preguntas desde tus PDFs',
  'Dashboard completo para el apoderado',
  'Impulsos activos, sin anuncios',
];

export function Precios() {
  return (
    <section id="precios" className="py-24">
      <div className="wrap">
        <Reveal className="mx-auto mb-[52px] max-w-[640px] text-center">
          <span className="eyebrow">Empieza gratis, convierte cuando veas el mapa</span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            El plan Free deja ver la montaña. Premium te ayuda a cerrarla.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="h-full rounded-[22px] border border-white/10 bg-carbon p-[32px_28px]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-niebla">Free</span>
              <div className="mb-0.5 mt-3 font-display text-[46px] font-extrabold">S/. 0</div>
              <span className="text-sm text-niebla">para siempre</span>
              <ul className="my-[22px] flex flex-col gap-3">
                {free.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
                    <Check color="#2E9257" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#descarga" className="btn btn-ghost w-full">
                Descargar gratis
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div
              className="relative h-full rounded-[22px] border border-dorado/50 p-[32px_28px]"
              style={{ background: 'linear-gradient(165deg, rgba(184,134,11,0.14), #141319)' }}
            >
              <span className="absolute right-5 top-5 rounded-full bg-dorado px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-negro">
                Mejor valor
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-doradoLit">
                Premium · lo activa el apoderado
              </span>
              <div className="mb-0.5 mt-3 font-display text-[46px] font-extrabold">
                S/. 49<span className="text-[20px] text-niebla">/mes</span>
              </div>
              <span className="text-sm text-niebla">o S/. 420 al año · ahorras 29%</span>
              <ul className="my-[22px] flex flex-col gap-3">
                {premium.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
                    <Check color="#D9A429" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#descarga" className="btn btn-primary w-full">
                Activar Premium
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
