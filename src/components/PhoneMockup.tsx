/// Mockup del teléfono mostrando la Ruta de Ascenso de la app — la primera
/// impresión es el producto mismo. Estático (no canvas) para que sea nítido y
/// ligero; flota con un leve balanceo.
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] max-w-full sm:w-[310px]" style={{ animation: 'apiceFloat 6s ease-in-out infinite' }}>
      {/* halo detrás */}
      <div
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(232,98,42,0.28), transparent 65%)' }}
      />
      {/* frame */}
      <div
        className="relative overflow-hidden rounded-[42px] border-[6px] border-[#2A2833] shadow-2xl"
        style={{ background: '#0E0E0E', boxShadow: '0 40px 90px -30px rgba(0,0,0,0.9)' }}
      >
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1a1920]" />

        {/* pantalla */}
        <div className="relative px-4 pb-5 pt-8" style={{ background: 'linear-gradient(to bottom, #0E0E0E, #17151d 55%, #211d2b)' }}>
          {/* header */}
          <div className="mb-3 flex items-center justify-between">
            <span className="font-sans text-[13px] font-semibold text-blancoA/85">Hola, Diego</span>
            <div className="h-6 w-6 rounded-lg bg-white/5" />
          </div>

          {/* chips racha + altura */}
          <div className="mb-3 flex gap-2">
            <div className="flex items-center gap-1.5 rounded-xl border border-naranja/50 bg-naranja/[0.14] px-2.5 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8622A"><path d="M12 2c1 3-1 4-1 6a3 3 0 0 0 6 0c0-1 1 2 1 4a6 6 0 1 1-12 0c0-3 3-4 3-7 0-1 2-2 3-3Z" /></svg>
              <div className="leading-none">
                <div className="font-display text-[15px] font-extrabold text-blancoA">14</div>
                <div className="font-sans text-[7.5px] uppercase tracking-wide text-naranja">días</div>
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5">
              <div className="flex justify-between">
                <span className="font-sans text-[8px] font-bold uppercase tracking-wide text-blancoA/80">Altura 3 240 m</span>
                <span className="font-mono text-[7px] text-niebla2">/ 5 822</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: '56%', background: '#2E9257' }} />
              </div>
            </div>
          </div>

          {/* mini ruta de ascenso */}
          <div className="relative h-[188px] overflow-hidden rounded-2xl border border-white/[0.06]" style={{ background: 'radial-gradient(120% 90% at 50% 0%, #262233, #131118)' }}>
            <svg viewBox="0 0 200 190" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              {/* curvas de nivel */}
              <path d="M0 60 Q100 20 200 60" stroke="rgba(255,255,255,0.05)" fill="none" strokeWidth="1" />
              <path d="M0 95 Q100 55 200 95" stroke="rgba(255,255,255,0.05)" fill="none" strokeWidth="1" />
              {/* sendero */}
              <path d="M40 170 L70 132 L120 132 L95 92 L140 92 L112 44" stroke="rgba(46,146,87,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M112 44 L100 20" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="3 5" strokeLinecap="round" />
            </svg>
            {/* nodos */}
            {[
              { x: 40, y: 170, c: '#2E9257', ic: '✓' },
              { x: 70, y: 132, c: '#8B1A1A', ic: '!' },
              { x: 120, y: 132, c: '#E8622A', ic: '▲', big: true },
              { x: 95, y: 92, c: '#5A5A60', ic: '' },
              { x: 140, y: 92, c: '#5A5A60', ic: '' },
              { x: 100, y: 20, c: '#D9A429', ic: '★' },
            ].map((n, i) => (
              <div
                key={i}
                className="absolute grid place-items-center rounded-[10px] text-[10px] font-bold text-white"
                style={{
                  left: `${(n.x / 200) * 100}%`,
                  top: `${(n.y / 190) * 100}%`,
                  width: n.big ? 30 : 22,
                  height: n.big ? 30 : 22,
                  transform: 'translate(-50%,-50%)',
                  background: `${n.c}${n.ic ? '' : '22'}`,
                  border: `1.5px solid ${n.c}`,
                  boxShadow: n.big ? `0 0 0 5px ${n.c}33` : 'none',
                  borderRadius: '11px 8px 9px 12px',
                }}
              >
                {n.ic}
              </div>
            ))}
          </div>

          {/* card próximo paso */}
          <div className="mt-3 rounded-2xl p-3" style={{ background: 'linear-gradient(135deg, #F0732F, #C74A18)' }}>
            <div className="font-sans text-[8px] font-bold uppercase tracking-widest text-white/80">Próximo paso</div>
            <div className="mt-0.5 font-display text-[14px] font-extrabold leading-tight text-white">Revancha en Historia</div>
            <div className="mt-2 inline-flex items-center gap-1 rounded-lg bg-black/25 px-2.5 py-1 font-sans text-[10px] font-bold text-white">
              Subir <span>↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
