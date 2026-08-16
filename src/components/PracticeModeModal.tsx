import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINICAL_CASES } from '../data/cases';
import { ClinicalCase } from '../types';
import { soundManager } from '../utils/audio';
import { Stethoscope, X, ChevronRight, Zap, ShieldAlert, Award } from 'lucide-react';

interface PracticeModeModalProps {
  onSelectCase: (caseIndex: number) => void;
  onClose: () => void;
}

export const PracticeModeModal: React.FC<PracticeModeModalProps> = ({
  onSelectCase,
  onClose,
}) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[85vh] glass-card rounded-2xl overflow-hidden shadow-2xl border border-teal-500/40 flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300">
                <Zap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-display font-extrabold text-white">
                  Modo Práctica Rápida
                </h3>
                <p className="text-xs text-slate-400">
                  Selecciona cualquier expediente clínico para practicar la toma de decisiones.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cases List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3 custom-scrollbar">
            {CLINICAL_CASES.map((c, index) => (
              <button
                key={c.id}
                onClick={() => {
                  soundManager.playClick();
                  onSelectCase(index);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="w-full text-left p-4 rounded-xl glass-card hover:bg-teal-500/10 border border-slate-800 hover:border-teal-500/50 transition-all flex items-center justify-between group cursor-pointer shadow-md"
              >
                <div className="flex items-start gap-3 min-w-0 flex-1 pr-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-teal-300 shrink-0 group-hover:border-teal-400">
                    #{c.id.toString().padStart(2, '0')}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-950/60 border border-teal-500/30 text-teal-300">
                        {c.levelName}
                      </span>
                      {c.isUrgent && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/40 text-rose-300 flex items-center gap-1">
                          <ShieldAlert size={10} /> Código Rojo
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-white truncate">
                      {c.title}
                    </h4>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {c.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-semibold text-teal-400 hidden sm:inline group-hover:underline">
                    Iniciar caso
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/80 text-center">
            <p className="text-xs text-slate-400">
              💡 El modo práctica te permite simular casos individuales sin modificar tu guardado de campaña principal.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
