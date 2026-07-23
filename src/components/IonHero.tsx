import { useRef } from 'react';

export function IonHero() {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage || event.pointerType === 'touch') return;

    const bounds = stage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    stage.style.setProperty('--ion-x', `${x * 10}px`);
    stage.style.setProperty('--ion-y', `${y * 8}px`);
  }

  function resetParallax() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty('--ion-x', '0px');
    stage.style.setProperty('--ion-y', '0px');
  }

  return (
    <div
      ref={stageRef}
      className="ion-stage relative mx-auto aspect-square w-full max-w-[590px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      aria-label="ION analiza tu progreso y prepara tu siguiente misión"
    >
      <div className="ion-ambient absolute inset-[10%] rounded-full" />
      <div className="ion-grid absolute inset-[7%] rounded-full" />

      <div className="ion-orbit ion-orbit-outer absolute inset-[3%] rounded-full">
        <span className="ion-node ion-node-orange" />
        <span className="ion-node ion-node-cyan" />
      </div>
      <div className="ion-orbit ion-orbit-middle absolute inset-[12%] rounded-full">
        <span className="ion-node ion-node-violet" />
      </div>
      <div className="ion-orbit ion-orbit-inner absolute inset-[20%] rounded-full" />

      <div className="ion-scan absolute inset-[14%] overflow-hidden rounded-full">
        <span />
      </div>

      <div className="ion-core absolute inset-[15%]">
        <div className="ion-halo absolute inset-[5%] rounded-full" />
        <img
          src="/ion.png"
          alt="ION, tutor inteligente de Ápice"
          className="relative z-10 h-full w-full rounded-full object-cover"
        />
        <div className="ion-glass absolute inset-0 z-20 rounded-full" />
      </div>

      <div className="ion-chip ion-chip-analysis absolute left-[1%] top-[20%] z-30">
        <span className="ion-chip-dot bg-naranja" />
        <span>
          <small>ION ANALIZA</small>
          Zona roja detectada
        </span>
      </div>

      <div className="ion-chip ion-chip-mission absolute bottom-[18%] right-0 z-30">
        <span className="ion-chip-dot bg-cyan-400" />
        <span>
          <small>SIGUIENTE MISIÓN</small>
          Refuerzo listo
        </span>
      </div>

      <div className="ion-status absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
        </span>
        <span>ION EN LÍNEA</span>
        <span className="ion-status-divider" />
        <span className="hidden sm:inline">RUTA PERSONALIZADA</span>
      </div>
    </div>
  );
}
