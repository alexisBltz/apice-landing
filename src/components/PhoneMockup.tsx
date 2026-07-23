const orbitItems = [
  { label: 'MISIONES', icon: '⚑', x: '17%', y: '26%', color: '#E8627E' },
  { label: 'PREMIUM', icon: '◇', x: '72%', y: '26%', color: '#8B6EFF' },
  { label: 'CURSOS', icon: '△', x: '12%', y: '53%', color: '#25C3E6' },
  { label: 'TUTOR ION', icon: '▣', x: '77%', y: '53%', color: '#D9A429' },
];

export function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-[300px] max-w-full sm:w-[330px]"
      style={{ animation: 'apiceFloat 6s ease-in-out infinite' }}
    >
      <div
        className="absolute -inset-12 -z-10 rounded-full opacity-80 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(232,98,42,.25), rgba(69,54,184,.12) 45%, transparent 70%)' }}
      />
      <div
        className="relative overflow-hidden rounded-[42px] border-[6px] border-[#282632]"
        style={{ background: '#08080D', boxShadow: '0 44px 100px -28px rgba(0,0,0,.95)' }}
      >
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#17161D]" />
        <div className="relative min-h-[650px] overflow-hidden px-3 pb-5 pt-9 app-grid">
          <div className="flex items-stretch justify-between gap-1.5">
            <MetricChip icon="🔥" value="7" label="RACHA" tone="#E8622A" />
            <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dorado/55 bg-dorado/[.08] px-2 py-1 text-center">
              <span className="font-display text-[10px] font-extrabold uppercase leading-tight text-doradoLit">
                Faltan 24 días
              </span>
              <span className="font-mono text-[5.5px] uppercase tracking-[.16em] text-doradoLit/70">
                CEPRUNSA · II fase
              </span>
            </div>
            <MetricChip icon="⚡" value="8" label="IMPULSOS" tone="#F0732F" />
          </div>

          <div className="relative mt-5 h-[330px]">
            <div className="absolute left-1/2 top-[45%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigoLit/20" />
            <div className="absolute left-1/2 top-[45%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-naranja/15" />
            {orbitItems.map((item) => (
              <div
                key={item.label}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: item.x, top: item.y }}
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-[18px_12px_17px_14px] border bg-black/70 font-display text-xl font-black"
                  style={{ color: item.color, borderColor: item.color, boxShadow: `0 0 18px ${item.color}44` }}
                >
                  {item.icon}
                </div>
                <span className="mt-1.5 whitespace-nowrap font-mono text-[6px] font-bold tracking-wider text-white/75">
                  {item.label}
                </span>
              </div>
            ))}

            <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative grid h-[132px] w-[132px] place-items-center rounded-full border-[8px] border-[#3B3B42] bg-[#111118] shadow-[0_0_45px_rgba(69,54,184,.32)]">
                <div className="absolute inset-2 rounded-full border border-white/10" />
                <div className="absolute left-7 top-[55px] h-7 w-3 rounded-full bg-[#3A8CFF] shadow-[0_0_14px_#3A8CFF]" />
                <div className="absolute right-7 top-[55px] h-7 w-3 rounded-full bg-[#3A8CFF] shadow-[0_0_14px_#3A8CFF]" />
                <span className="absolute bottom-3 font-mono text-[6px] uppercase tracking-[.22em] text-white/45">ION</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <span className="font-mono text-[6px] uppercase tracking-[.28em] text-white/45">
              Recuperación
            </span>
            <div className="font-display text-[46px] font-black leading-none text-[#FF515F] text-glow-red">
              6.9%
            </div>
            <p className="mt-1 font-mono text-[6px] uppercase tracking-[.18em] text-white/45">
              Completa misiones para ganar Impulsos
            </p>
          </div>

          <button className="mx-auto mt-5 flex items-center gap-2 rounded-xl border border-cyan-400/70 bg-cyan-400/[.08] px-5 py-2 font-display text-[9px] font-extrabold uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.14)]">
            <span>▦</span> Centro de mando
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricChip({
  icon,
  value,
  label,
  tone,
}: {
  icon: string;
  value: string;
  label: string;
  tone: string;
}) {
  return (
    <div
      className="flex min-w-[66px] items-center gap-1 rounded-xl border bg-black/55 px-2 py-1"
      style={{ borderColor: `${tone}99` }}
    >
      <span className="text-[11px]">{icon}</span>
      <div>
        <div className="font-display text-[13px] font-black leading-none text-white">{value}</div>
        <div className="font-mono text-[5px] tracking-wider" style={{ color: tone }}>{label}</div>
      </div>
    </div>
  );
}
