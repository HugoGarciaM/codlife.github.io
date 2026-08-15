import React, { useState } from 'react';
import { GameState } from '../types';
import { getRankForScore } from '../data/achievements';
import { soundManager } from '../utils/audio';
import { EcgMonitor } from './Graphics/EcgMonitor';
import { StatBar } from './StatBar';
import {
  Volume2,
  VolumeX,
  Trophy,
  BookOpen,
  Activity,
  User,
  RotateCcw
} from 'lucide-react';

interface HeaderProps {
  gameState: GameState;
  onToggleSound: () => void;
  onOpenAchievements: () => void;
  onOpenGlossary: () => void;
  onResetGame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  gameState,
  onToggleSound,
  onOpenAchievements,
  onOpenGlossary,
  onResetGame,
}) => {
  const [showStatsDrawer, setShowStatsDrawer] = useState(false);
  const currentRank = getRankForScore(gameState.score);
  const unlockedBadgesCount = gameState.achievements.filter(a => a.unlocked).length;

  const getInitials = (name: string) => {
    if (!name) return 'DR';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-40 w-full glass px-3 sm:px-6 py-2.5 select-none transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: App Logo & Student Avatar Pill */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-[#64ffda]/20 border border-[#64ffda] flex items-center justify-center text-[#64ffda] font-bold text-sm shrink-0 shadow-sm">
            {getInitials(gameState.playerName || 'Dr. Médico')}
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5">
                <span className="text-white">CÓDIGO DE VIDA</span>
                <span className="hidden md:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 font-semibold">
                  Bioética Médica
                </span>
              </span>
            </div>

            {gameState.playerName ? (
              <div className="flex items-center gap-1.5 text-xs truncate">
                <p className="text-[11px] uppercase text-slate-400 font-bold tracking-wider">
                  Estudiante:
                </p>
                <p className="text-xs font-bold text-white truncate">
                  {gameState.playerName}
                </p>
              </div>
            ) : (
              <span className="text-[11px] text-[#64ffda]/80 font-mono">
                Simulador Clínico
              </span>
            )}
          </div>
        </div>

        {/* Center: ECG Heartbeat & Quick 4 Pillars Indicator Grid */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden lg:block">
            <EcgMonitor
              bpm={72 + Math.floor(gameState.score / 60)}
              statusText={gameState.score >= 800 ? 'EXCELENCIA ÉTICA' : 'INTERNADO ACTIVO'}
            />
          </div>

          {/* 4 Pillars Mini Bar Preview (as in design header) */}
          <div className="hidden xl:grid grid-cols-4 gap-4 p-2 rounded-xl bg-[#020c1b]/60 border border-slate-800">
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase font-bold text-slate-400">Autonomía</span>
              <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="stat-bar-fill h-full bg-cyan-400"
                  style={{ width: `${gameState.stats.autonomy}%` }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase font-bold text-slate-400">Beneficencia</span>
              <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="stat-bar-fill h-full bg-emerald-400"
                  style={{ width: `${gameState.stats.beneficence}%` }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase font-bold text-slate-400">No Maleficencia</span>
              <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="stat-bar-fill h-full bg-rose-400"
                  style={{ width: `${gameState.stats.nonMaleficence}%` }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase font-bold text-slate-400">Justicia</span>
              <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="stat-bar-fill h-full bg-amber-400"
                  style={{ width: `${gameState.stats.justice}%` }}
                />
              </div>
            </div>
          </div>

          {/* Score & Rank Display */}
          <div className="text-right flex flex-col justify-center px-3 py-1 bg-[#020c1b]/70 rounded-xl border border-slate-800">
            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
              Puntuación
            </p>
            <p className="text-xl sm:text-2xl font-black font-mono text-[#64ffda] leading-none">
              {gameState.score.toString().padStart(3, '0')}
              <span className="text-[10px] text-slate-500 font-normal ml-1">/1000</span>
            </p>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Stats Drawer Toggle */}
          <button
            id="header-stats-btn"
            onClick={() => {
              soundManager.playClick();
              setShowStatsDrawer(!showStatsDrawer);
            }}
            title="Ver todos los indicadores bioéticos"
            className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 cursor-pointer ${
              showStatsDrawer
                ? 'bg-[#64ffda]/20 border-[#64ffda] text-[#64ffda]'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-[#64ffda]/50'
            }`}
          >
            <Activity size={15} className="text-[#64ffda]" />
            <span className="hidden sm:inline font-medium">Métricas</span>
          </button>

          {/* Achievements Gallery Button */}
          <button
            id="header-achievements-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenAchievements();
            }}
            title="Ver emblemas y logros"
            className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-amber-500/50 hover:bg-slate-800 transition-all flex items-center gap-1 cursor-pointer"
          >
            <Trophy size={15} className="text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-300">
              {unlockedBadgesCount}/10
            </span>
          </button>

          {/* Bioethics Glossary Button */}
          <button
            id="header-glossary-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenGlossary();
            }}
            title="Glosario bioético y marco conceptual"
            className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:bg-slate-800 transition-all cursor-pointer"
          >
            <BookOpen size={15} className="text-cyan-400" />
          </button>

          {/* Sound Toggle Button */}
          <button
            id="header-sound-btn"
            onClick={() => {
              onToggleSound();
              soundManager.playClick();
            }}
            title={gameState.soundEnabled ? 'Silenciar audio' : 'Activar sonido'}
            className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800 transition-all cursor-pointer"
          >
            {gameState.soundEnabled ? (
              <Volume2 size={15} className="text-emerald-400" />
            ) : (
              <VolumeX size={15} className="text-slate-500" />
            )}
          </button>

          {/* Restart Game Button */}
          <button
            id="header-reset-btn"
            onClick={() => {
              soundManager.playClick();
              onResetGame();
            }}
            title="Reiniciar progreso"
            className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-rose-400 hover:bg-rose-950/40 hover:border-rose-800 transition-all cursor-pointer"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Slide-down Stats Full Drawer */}
      {showStatsDrawer && (
        <div className="max-w-7xl mx-auto mt-2.5 pt-3 pb-2 px-3 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#020c1b]/95 rounded-xl p-3 shadow-2xl border border-[#64ffda]/20">
          <StatBar
            label="1. Autonomía"
            value={gameState.stats.autonomy}
            color="sky"
            size="sm"
          />
          <StatBar
            label="2. Beneficencia"
            value={gameState.stats.beneficence}
            color="rose"
            size="sm"
          />
          <StatBar
            label="3. No Maleficencia"
            value={gameState.stats.nonMaleficence}
            color="emerald"
            size="sm"
          />
          <StatBar
            label="4. Justicia"
            value={gameState.stats.justice}
            color="amber"
            size="sm"
          />

          <div className="col-span-2 sm:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800">
            <StatBar
              label="Confidencialidad"
              value={gameState.stats.confidentiality}
              color="purple"
              size="sm"
            />
            <StatBar
              label="Consentimiento"
              value={gameState.stats.consent}
              color="indigo"
              size="sm"
            />
            <StatBar
              label="Integridad"
              value={gameState.stats.integrity}
              color="teal"
              size="sm"
            />
            <StatBar
              label="Comunicación"
              value={gameState.stats.communication}
              color="sky"
              size="sm"
            />
          </div>
        </div>
      )}
    </header>
  );
};
