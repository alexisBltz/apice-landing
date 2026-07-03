import { useEffect, useRef } from 'react';

/// **La física del ascenso, hecha canvas.** Cordilleras superpuestas con un
/// sendero punteado que sube hasta la cima y un nodo naranja que asciende por
/// él (el estudiante escalando). Respeta prefers-reduced-motion.
export function RidgeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let dpr = 1;
    let t = 0;
    let raf = 0;

    type Layer = { pts: { x: number; y: number }[]; color: string; apex: number };
    let ranges: Layer[] = [];

    function buildRanges() {
      ranges = [];
      const layers = [
        { amp: 0.3, base: 0.94, jag: 6, color: 'rgba(30,28,38,0.9)' },
        { amp: 0.42, base: 1.02, jag: 5, color: 'rgba(23,22,30,0.95)' },
        { amp: 0.58, base: 1.14, jag: 4, color: 'rgba(14,14,18,1)' },
      ];
      for (const L of layers) {
        const pts: { x: number; y: number }[] = [];
        const n = L.jag;
        for (let i = 0; i <= n; i++) {
          pts.push({ x: i / n, y: L.base - Math.random() * L.amp - L.amp * 0.15 });
        }
        const apex = Math.floor(n * 0.62);
        pts[apex].y = L.base - L.amp - 0.12;
        ranges.push({ pts, color: L.color, apex });
      }
    }

    function ridgeY(pts: { x: number; y: number }[], x: number) {
      const n = pts.length - 1;
      const fx = x * n;
      const i = Math.floor(fx);
      const f = fx - i;
      if (i >= n) return pts[n].y;
      const a = pts[i].y;
      const b = pts[i + 1].y;
      const s = f * f * (3 - 2 * f);
      return a + (b - a) * s;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildRanges();
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Cielo: se aclara hacia la cima (más luz cerca del ápice).
      const g = ctx!.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#211d2b');
      g.addColorStop(0.5, '#16141c');
      g.addColorStop(1, '#0E0E0E');
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, W, H);

      const front = ranges[2];
      const apx = front.pts[front.apex];
      const ax = apx.x * W;
      const ay = ridgeY(front.pts, apx.x) * H;

      const glow = ctx!.createRadialGradient(ax, ay, 0, ax, ay, H * 0.5);
      glow.addColorStop(0, 'rgba(232,98,42,0.16)');
      glow.addColorStop(1, 'rgba(232,98,42,0)');
      ctx!.fillStyle = glow;
      ctx!.fillRect(0, 0, W, H);

      for (const R of ranges) {
        ctx!.beginPath();
        ctx!.moveTo(0, H);
        for (let x = 0; x <= 1.001; x += 0.02) ctx!.lineTo(x * W, ridgeY(R.pts, x) * H);
        ctx!.lineTo(W, H);
        ctx!.closePath();
        ctx!.fillStyle = R.color;
        ctx!.fill();
      }

      // Curvas de nivel sutiles sobre la cordillera del frente.
      ctx!.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx!.lineWidth = 1;
      for (let c = 1; c <= 3; c++) {
        ctx!.beginPath();
        for (let xx = 0; xx <= 1.001; xx += 0.02) {
          const yy = ridgeY(front.pts, xx) * H + c * 26;
          if (xx === 0) ctx!.moveTo(xx * W, yy);
          else ctx!.lineTo(xx * W, yy);
        }
        ctx!.stroke();
      }

      // Sendero de ascenso punteado hasta la cima.
      const startX = 0.08;
      const endX = front.pts[front.apex].x;
      ctx!.save();
      ctx!.setLineDash([2, 9]);
      ctx!.lineWidth = 2;
      ctx!.strokeStyle = 'rgba(232,98,42,0.55)';
      ctx!.beginPath();
      const steps = 60;
      for (let s = 0; s <= steps; s++) {
        const f = s / steps;
        const x = startX + (endX - startX) * f;
        const y = ridgeY(front.pts, x) * H - 10 - Math.sin(f * Math.PI) * 8;
        if (s === 0) ctx!.moveTo(x * W, y);
        else ctx!.lineTo(x * W, y);
      }
      ctx!.stroke();
      ctx!.restore();

      // Nodo naranja que asciende (ida y vuelta suave).
      const progress = reduce ? 1 : Math.sin(t * 0.6) * 0.5 + 0.5;
      const nx = startX + (endX - startX) * progress;
      const ny = ridgeY(front.pts, nx) * H - 10 - Math.sin(progress * Math.PI) * 8;
      const pulse = reduce ? 6 : 6 + Math.sin(t * 3) * 2.2;
      const ng = ctx!.createRadialGradient(nx * W, ny, 0, nx * W, ny, pulse * 3);
      ng.addColorStop(0, 'rgba(240,115,47,0.9)');
      ng.addColorStop(1, 'rgba(240,115,47,0)');
      ctx!.fillStyle = ng;
      ctx!.beginPath();
      ctx!.arc(nx * W, ny, pulse * 3, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = '#F0732F';
      ctx!.beginPath();
      ctx!.arc(nx * W, ny, 4.5, 0, Math.PI * 2);
      ctx!.fill();

      // Chispa dorada fija en la cima.
      ctx!.fillStyle = '#D9A429';
      ctx!.beginPath();
      ctx!.arc(ax, ay - 6, 3, 0, Math.PI * 2);
      ctx!.fill();

      if (!reduce) {
        t += 0.016;
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    const onResize = () => {
      cancelAnimationFrame(raf);
      resize();
      draw();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
