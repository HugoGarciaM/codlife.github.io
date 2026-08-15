import React, { useEffect, useRef } from 'react';

interface EcgMonitorProps {
  bpm?: number;
  statusText?: string;
  statusColor?: string;
}

export const EcgMonitor: React.FC<EcgMonitorProps> = ({
  bpm = 74,
  statusText = 'RITMO SINUSAL',
  statusColor = 'text-emerald-400'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let x = 0;
    const points: number[] = [];
    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    for (let i = 0; i < width; i++) {
      points[i] = midY;
    }

    let cycleStep = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(6, 11, 25, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Grid background
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 10;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Generate ECG wave shape
      cycleStep = (cycleStep + 1) % 65;
      let newY = midY;
      if (cycleStep === 10) newY = midY - 3; // P wave
      else if (cycleStep === 12) newY = midY + 2;
      else if (cycleStep === 22) newY = midY + 4; // Q
      else if (cycleStep === 24) newY = midY - 18; // R peak
      else if (cycleStep === 26) newY = midY + 8; // S
      else if (cycleStep === 36) newY = midY - 6; // T wave
      else if (cycleStep === 39) newY = midY + 1;

      // Small jitter
      newY += (Math.random() - 0.5) * 0.8;

      points[x] = newY;

      // Draw trace
      ctx.beginPath();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#10b981';

      for (let i = 0; i < width; i++) {
        const px = i;
        const py = points[i];
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw cursor dot
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(x, points[x], 2.5, 0, Math.PI * 2);
      ctx.fill();

      x = (x + 1) % width;
      points[x] = midY;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [bpm]);

  return (
    <div id="ecg-monitor-box" className="flex items-center gap-2 bg-slate-950/80 border border-emerald-950 px-2.5 py-1 rounded-lg shadow-inner">
      <canvas
        ref={canvasRef}
        width={110}
        height={28}
        className="rounded bg-slate-950 block"
      />
      <div className="flex flex-col text-left leading-tight">
        <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold tracking-wider">
          {bpm} BPM
        </span>
        <span className={`text-[9px] font-mono ${statusColor} tracking-tighter truncate max-w-[80px]`}>
          {statusText}
        </span>
      </div>
    </div>
  );
};
