import { Logo } from './Logo';
import { Reveal } from './Reveal';

export function Cierre() {
  return (
    <section id="descarga" className="relative py-28 text-center">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Rumbo a la UNSA</span>
          <h2 className="mt-4 text-[clamp(34px,6vw,68px)] leading-none">
            Tu ascenso
            <br />
            empieza hoy.
          </h2>
          <p className="mx-auto my-[22px] mb-[34px] max-w-[46ch] text-lg text-niebla">
            Sabes dónde estás. Sabes qué te falta. Sabes a dónde vas. Descarga Ápice y da el primer paso.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="#" className="btn btn-primary" aria-label="Descargar en Google Play">
              Descargar en Google Play
            </a>
            <a href="#concepto" className="btn btn-ghost">
              Ver de nuevo cómo funciona
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-[40px_0_56px] pb-14 pt-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-blancoA">
            <Logo size={24} />
            Ápice
          </a>
          <p className="mt-2.5 text-[13px] text-niebla2">Preparación preuniversitaria UNSA · Arequipa, Perú</p>
        </div>
        <div className="flex gap-[22px]">
          <a href="#precios" className="text-[13.5px] text-niebla transition hover:text-blancoA">
            Precios
          </a>
          <a href="/privacidad" className="text-[13.5px] text-niebla transition hover:text-blancoA">
            Privacidad
          </a>
          <a href="https://wa.me/51936224203" className="text-[13.5px] text-niebla transition hover:text-blancoA">
            Soporte
          </a>
        </div>
      </div>
      <div className="wrap mt-6">
        <p className="text-[12px] text-niebla2">
          © 2026 Ápice. Llegar es solo el inicio; quedarse en la cima es el verdadero objetivo.
        </p>
      </div>
    </footer>
  );
}
