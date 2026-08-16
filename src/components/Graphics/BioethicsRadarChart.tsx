import React from 'react';
import { motion } from 'motion/react';
import { BioethicsStats } from '../../types';

interface BioethicsRadarChartProps {
  stats: BioethicsStats;
  size?: number; // width/height in px (default 300)
  showLabels?: boolean;
}

export const BioethicsRadarChart: React.FC<BioethicsRadarChartProps> = ({
  stats,
  size = 300,
  showLabels = true
}) => {
  const cx = 150;
  const cy = 150;
  const maxR = 100; // max radius for 100%

  // 8 axes configuration
  const axes = [
    { key: 'autonomy', label: 'Autonomía', color: '#22d3ee', val: stats.autonomy },
    { key: 'beneficence', label: 'Beneficencia', color: '#2dd4bf', val: stats.beneficence },
    { key: 'nonMaleficence', label: 'No Maleficencia', color: '#fb7185', val: stats.nonMaleficence },
    { key: 'justice', label: 'Justicia', color: '#fbbf24', val: stats.justice },
    { key: 'consent', label: 'Consentimiento', color: '#a78bfa', val: stats.consent },
    { key: 'confidentiality', label: 'Confidencialidad', color: '#818cf8', val: stats.confidentiality },
    { key: 'integrity', label: 'Integridad', color: '#38bdf8', val: stats.integrity },
    { key: 'communication', label: 'Comunicación', color: '#34d399', val: stats.communication },
  ];

  const totalAxes = axes.length;

  // Calculate (x, y) coordinates for a given axis index and radius value (0-100)
  const getCoordinates = (index: number, value: number) => {
    const angle = (index * 2 * Math.PI) / totalAxes - Math.PI / 2;
    const r = (Math.max(0, Math.min(100, value)) / 100) * maxR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x, y, angle };
  };

  // Generate SVG polygon points string for a given level (e.g. 25, 50, 75, 100)
  const getGridPolygonPoints = (levelValue: number) => {
    return axes
      .map((_, i) => {
        const { x, y } = getCoordinates(i, levelValue);
        return `${x},${y}`;
      })
      .join(' ');
  };

  // Generate player stat polygon points string
  const statPoints = axes
    .map((axis, i) => {
      const { x, y } = getCoordinates(i, axis.val);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      <svg
        viewBox="0 0 300 300"
        style={{ width: size, height: size }}
        className="drop-shadow-[0_0_20px_rgba(20,184,166,0.2)]"
      >
        <defs>
          <radialGradient id="radarAreaGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.15" />
          </radialGradient>
          <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Background Circle */}
        <circle cx={cx} cy={cy} r={maxR + 5} fill="#020617" opacity="0.6" />

        {/* Concentric Grid Polygons (25%, 50%, 75%, 100%) */}
        {[25, 50, 75, 100].map((level) => (
          <polygon
            key={`grid-level-${level}`}
            points={getGridPolygonPoints(level)}
            fill="none"
            stroke="#334155"
            strokeWidth={level === 50 || level === 100 ? "1.5" : "0.8"}
            strokeDasharray={level === 50 ? "3 3" : undefined}
            opacity="0.6"
          />
        ))}

        {/* Axis Spokes from Center */}
        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, 100);
          return (
            <line
              key={`axis-line-${axis.key}`}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#334155"
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}

        {/* Dynamic Player Stats Polygon Area with Animation */}
        <motion.polygon
          initial={{ points: getGridPolygonPoints(0) }}
          animate={{ points: statPoints }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          fill="url(#radarAreaGradient)"
          stroke="#2dd4bf"
          strokeWidth="2.5"
          filter="url(#radarGlow)"
        />

        {/* Stat Nodes & Value Dots */}
        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, axis.val);
          return (
            <g key={`node-${axis.key}`}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill={axis.color}
                stroke="#020617"
                strokeWidth="1.5"
                className="transition-all duration-500"
              />
              <circle cx={x} cy={y} r="1.5" fill="#ffffff" />
            </g>
          );
        })}

        {/* Axis Labels and Values */}
        {showLabels &&
          axes.map((axis, i) => {
            const { x, y, angle } = getCoordinates(i, 118);
            const isRight = Math.cos(angle) > 0.1;
            const isLeft = Math.cos(angle) < -0.1;
            const textAnchor = isRight ? 'start' : isLeft ? 'end' : 'middle';

            return (
              <g key={`label-${axis.key}`}>
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fill={axis.color}
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="monospace"
                  className="drop-shadow-md"
                >
                  {axis.label}
                </text>
                <text
                  x={x}
                  y={y + 11}
                  textAnchor={textAnchor}
                  fill="#f8fafc"
                  fontSize="9"
                  fontWeight="extrabold"
                  fontFamily="monospace"
                >
                  {Math.round(axis.val)}%
                </text>
              </g>
            );
          })}
      </svg>
    </div>
  );
};
