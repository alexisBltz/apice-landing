import { Reveal } from './Reveal';

type Cell = { t: string; k: 'yes' | 'no' | 'partial' };
const rows: { cap: string; academia: Cell; apps: Cell; apice: Cell }[] = [
  { cap: 'Práctica alineada a la UNSA', academia: { t: 'Media', k: 'partial' }, apps: { t: 'Sí', k: 'yes' }, apice: { t: 'Muy alta', k: 'yes' } },
  { cap: 'Diagnóstico adaptativo', academia: { t: 'No', k: 'no' }, apps: { t: 'Básico', k: 'partial' }, apice: { t: 'Profundo', k: 'yes' } },
  { cap: 'Tutor con IA + resúmenes', academia: { t: 'No', k: 'no' }, apps: { t: 'Algunas', k: 'partial' }, apice: { t: 'Sí', k: 'yes' } },
  { cap: 'Repaso espaciado de tus errores', academia: { t: 'No', k: 'no' }, apps: { t: 'Genérico', k: 'partial' }, apice: { t: 'Automático', k: 'yes' } },
  { cap: 'Dashboard para el padre en vivo', academia: { t: 'No', k: 'no' }, apps: { t: 'No', k: 'no' }, apice: { t: 'Exclusivo', k: 'yes' } },
  { cap: 'Economía familiar de Impulsos', academia: { t: 'No', k: 'no' }, apps: { t: 'No', k: 'no' }, apice: { t: 'Exclusivo', k: 'yes' } },
];

function color(k: Cell['k']) {
  return k === 'yes' ? 'text-verde font-bold' : k === 'partial' ? 'text-doradoLit' : 'text-niebla2';
}

export function Comparativa() {
  return (
    <section id="mercado" className="py-24">
      <div className="wrap">
        <Reveal className="mb-[52px] max-w-[640px]">
          <span className="eyebrow">Dónde nos separamos</span>
          <h2 className="mt-3.5 text-[clamp(28px,4.4vw,46px)] leading-[1.05]">
            Otras apps tienen preguntas. Ninguna tiene el puente.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-niebla">
            La ventaja no está en tener un banco. Está en cómo se convierte en rutina para el estudiante y en
            evidencia para quien paga.
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-[18px] border border-white/10">
            <table className="w-full min-w-[620px] border-collapse">
              <thead>
                <tr>
                  {['Capacidad', 'Academia', 'Otras apps', 'Ápice'].map((h, i) => (
                    <th
                      key={h}
                      className={`border-b border-white/10 bg-carbon px-[18px] py-4 text-left font-mono text-[11.5px] uppercase tracking-wider ${
                        i === 3 ? 'text-naranja' : 'text-niebla'
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.cap}>
                    <td className="border-b border-white/10 px-[18px] py-4 text-[14.5px] text-niebla">{r.cap}</td>
                    <td className={`border-b border-white/10 px-[18px] py-4 text-[14.5px] ${color(r.academia.k)}`}>{r.academia.t}</td>
                    <td className={`border-b border-white/10 px-[18px] py-4 text-[14.5px] ${color(r.apps.k)}`}>{r.apps.t}</td>
                    <td className={`border-b border-white/10 bg-naranja/[0.06] px-[18px] py-4 text-[14.5px] ${color(r.apice.k)}`}>{r.apice.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
