import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X, Sparkles, AlertCircle } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface CommitteeModalProps {
  hintText: string;
  consultationsLeft: number;
  onClose: () => void;
}

export const CommitteeModal: React.FC<CommitteeModalProps> = ({
  hintText,
  consultationsLeft,
  onClose,
}) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg glass-card rounded-2xl overflow-hidden shadow-2xl border border-teal-500/40 p-6 space-y-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-lg font-display font-extrabold text-white">
                  Dictamen del Comité de Bioética
                </h3>
                <p className="text-xs text-teal-400 font-mono">
                  Orientación Deontológica y Principialista
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

          {/* Body content */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-teal-950/40 to-slate-900/60 border border-teal-500/30 text-slate-200 text-sm leading-relaxed flex items-start gap-3">
              <Sparkles size={20} className="text-teal-300 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-mono uppercase font-bold text-teal-400 mb-1">
                  Recomendación Ética Neutral:
                </span>
                <p className="italic">{hintText}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="flex items-center gap-1.5">
                <AlertCircle size={14} className="text-amber-400" />
                <span>Consultas disponibles restantes:</span>
              </span>
              <span className="font-mono font-bold text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/40">
                {consultationsLeft} restantes
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="w-full py-2.5 px-4 bg-teal-400 text-slate-950 font-bold text-sm rounded-xl hover:bg-teal-300 transition-all shadow-lg hover:shadow-teal-400/20"
            >
              Comprendido, regresar al caso
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
