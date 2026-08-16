import React, { useEffect, useRef } from 'react';
import { soundManager } from '../../utils/audio';

interface EcgMonitorProps {
  vitalsStatus?: 'Estable' | 'Grave' | 'Crítico' | 'En observación';
  customBpm?: number;
}

export const EcgMonitor: React.FC<EcgMonitorProps> = ({
  vitalsStatus = 'Estable',
  customBpm
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Map vital status to BPM, color, and label
  const getEcgConfig = () => {
    switch (vitalsStatus) {
      case 'Crítico':
        return {
          bpm: customBpm || 156,
          label: 'ARRITMIA ALERTA',
          color: '#f43f5e', // Rose 500
          shadowColor: '#e11d48',
          cycleLength: 35
        };
      case 'Grave':
        return {
          bpm: customBpm || 112,
          label: 'TAQUICARDIA',
          color: '#f59e0b', // Amber 500
          shadowColor: '#d97706',
          cycleLength: 48
        };
      default:
        return {
          bpm: customBpm || 72,
          label: 'RITMO SINUSAL',
          color: '#10b981', // Emerald 500
          shadowColor: '#059669',
          cycleLength: 70
        };
    }
  };

  const config = getEcgConfig();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let x = 0;
    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;
    const points: number[] = new Array(width).fill(midY);

    let cycleStep = 0;

    const render = () => {
      // Fade out background trailing effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Grid lines background
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 8;
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

      // ECG Wave Cycle Calculation
      cycleStep = (cycleStep + 1) % config.cycleLength;
      let newY = midY;

      // PQRST Wave points
      const pPeak = Math.floor(config.cycleLength * 0.15);
      const qDip = Math.floor(config.cycleLength * 0.32);
      const rPeak = Math.floor(config.cycleLength * 0.36);
      const sDip = Math.floor(config.cycleLength * 0.40);
      const tWave = Math.floor(config.cycleLength * 0.55);

      if (cycleStep === pPeak) newY = midY - 3;
      else if (cycleStep === qDip) newY = midY + 4;
      else if (cycleStep === rPeak) {
        newY = midY - 18; // Peak R spike
        // Trigger heartbeat sound effect at R-peak
        soundManager.playHeartbeat();
      }
      else if (cycleStep === sDip) newY = midY + 8;
      else if (cycleStep === tWave) newY = midY - 5;

      // Add small jitter for critical status
      if (vitalsStatus === 'Crítico') {
        newY += (Math.random() - 0.5) * 3;
      } else {
        newY += (Math.random() - 0.5) * 0.5;
      }

      points[x] = newY;

      // Draw trace line
      ctx.beginPath();
      ctx.strokeStyle = config.color;
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 6;
      ctx.shadowColor = config.shadowColor;

      for (let i = 0; i < width; i++) {
        if (i === 0) {
          ctx.moveTo(i, points[i]);
        } else {
          ctx.lineTo(i, points[i]);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw cursor scanning dot
      ctx.fillStyle = config.color;
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
  }, [vitalsStatus, customBpm, config.cycleLength]);

  return (
    <div
      id="ecg-monitor-box"
      className="flex items-center gap-2.5 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md"
    >
      <canvas
        ref={canvasRef}
        width={110}
        height={30}
        className="rounded-lg bg-slate-950 block border border-slate-900"
      />
      <div className="flex flex-col text-left leading-tight">
        <span
          className="text-xs font-mono font-extrabold tracking-wider"
          style={{ color: config.color }}
        >
          {config.bpm} BPM
        </span>
        <span
          className="text-[9px] font-mono font-bold tracking-tighter truncate max-w-[90px]"
          style={{ color: config.color }}
        >
          {config.label}
        </span>
      </div>
    </div>
  );
};

