import React from 'react';
import { motion } from 'motion/react';
import { Achievement } from '../types';
import { BadgeIcon } from './Graphics/BadgeIcon';
import { soundManager } from '../utils/audio';
import { Trophy, X, CheckCircle2, LockKeyhole, Sparkles } from 'lucide-react';

interface AchievementsModalProps {
  achievements: Achievement[];
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  achievements,
  onClose
}) => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const progressPercent = Math.round((unlockedCount / achievements.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020c1b]/85 backdrop-blur-md overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl glass rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden my-auto space-y-5 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-950/60 border border-amber-500/60 text-amber-400">
              <Trophy size={24} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-400">
                Reconocimiento Deontológico
              </span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                GALERÍA DE EMBLEMAS Y LOGROS
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="p-4 rounded-2xl bg-[#020c1b]/80 border border-slate-800 shrink-0">
          <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
            <span className="text-slate-300 flex items-center gap-2">
              <Sparkles size={14} className="text-[#64ffda]" />
              <span>Colección Médica: {unlockedCount} de 10 Emblemas</span>
            </span>
            <span className="text-[#64ffda]">{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="stat-bar-fill h-full bg-gradient-to-r from-cyan-400 to-[#64ffda] rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 10 Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto pr-1 flex-1">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                ach.unlocked
                  ? 'bg-[#020c1b]/80 border-[#64ffda]/40 shadow-lg'
                  : 'bg-[#020c1b]/30 border-slate-800/80 opacity-60'
              }`}
            >
              <div className="shrink-0 pt-0.5">
                <BadgeIcon id={ach.id} unlocked={ach.unlocked} size="md" />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className={`text-sm font-display font-bold truncate ${
                      ach.unlocked ? 'text-white' : 'text-slate-400'
                    }`}
                  >
                    {ach.title}
                  </h3>

                  {ach.unlocked ? (
                    <span className="px-2 py-0.5 rounded-full bg-[#64ffda]/20 border border-[#64ffda] text-[10px] font-mono font-bold text-[#64ffda] shrink-0 flex items-center gap-1">
                      <CheckCircle2 size={10} />
                      {ach.unlockedAt || 'Desbloqueado'}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500 shrink-0 flex items-center gap-1">
                      <LockKeyhole size={10} />
                      Bloqueado
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>

                <div className="pt-1 text-[11px] font-mono text-cyan-300/80">
                  <span className="text-slate-400 font-sans">Requisito: </span>
                  {ach.conditionDescription}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="flex justify-end pt-3 border-t border-slate-800 shrink-0">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
          >
            Cerrar Galería
          </button>
        </div>
      </motion.div>
    </div>
  );
};
