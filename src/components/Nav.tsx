import { Logo } from './Logo';

const links = [
  { href: '#concepto', label: 'Concepto' },
  { href: '#experiencia', label: 'ION e Impulsos' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#puente', label: 'Para padres' },
  { href: '#mercado', label: 'Comparativa' },
  { href: '#precios', label: 'Precios' },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-negro/70 backdrop-blur-lg">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-extrabold" aria-label="Ápice, inicio">
          <span className="text-blancoA">
            <Logo size={26} />
          </span>
          Ápice
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-niebla transition hover:text-blancoA">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#descarga" className="btn btn-primary px-4 py-2.5 text-sm">
          Descargar
        </a>
      </div>
    </nav>
  );
}
