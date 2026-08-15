import React from 'react';

interface StatBarProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
  color?: 'sky' | 'rose' | 'emerald' | 'amber' | 'purple' | 'teal' | 'indigo';
  size?: 'sm' | 'md';
  showNumber?: boolean;
  delta?: number;
}

export const StatBar: React.FC<StatBarProps> = ({
  label,
  value,
  icon,
  color = 'teal',
  size = 'md',
  showNumber = true,
  delta
}) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  const colorStyles = {
    sky: {
      bar: 'bg-cyan-400',
      text: 'text-cyan-300',
    },
    rose: {
      bar: 'bg-rose-400',
      text: 'text-rose-300',
    },
    emerald: {
      bar: 'bg-emerald-400',
      text: 'text-emerald-300',
    },
    amber: {
      bar: 'bg-amber-400',
      text: 'text-amber-300',
    },
    purple: {
      bar: 'bg-purple-400',
      text: 'text-purple-300',
    },
    teal: {
      bar: 'bg-[#64ffda]',
      text: 'text-[#64ffda]',
    },
    indigo: {
      bar: 'bg-indigo-400',
      text: 'text-indigo-300',
    }
  };

  const currentTheme = colorStyles[color] || colorStyles.teal;

  return (
    <div className="w-full flex flex-col gap-1 select-none">
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="flex items-center gap-1.5 text-slate-300">
          {icon}
          <span className="truncate tracking-wider uppercase text-[10px] font-bold text-slate-400">
            {label}
          </span>
        </span>
        <div className="flex items-center gap-1.5 font-mono">
          {delta !== undefined && delta !== 0 && (
            <span
              className={`text-[10px] font-bold ${
                delta > 0 ? 'text-[#64ffda]' : 'text-rose-400'
              }`}
            >
              {delta > 0 ? `+${delta}` : delta}
            </span>
          )}
          {showNumber && (
            <span className={`text-xs font-bold font-mono ${currentTheme.text}`}>
              {clampedValue}
              <span className="text-[10px] text-slate-500 font-normal">/100</span>
            </span>
          )}
        </div>
      </div>

      {/* Progress Track */}
      <div
        className={`w-full bg-slate-800/80 rounded-full overflow-hidden ${
          size === 'sm' ? 'h-1.5' : 'h-2'
        }`}
      >
        <div
          className={`stat-bar-fill h-full rounded-full ${currentTheme.bar}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
