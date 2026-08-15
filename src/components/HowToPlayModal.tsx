import React from 'react';
import { motion } from 'motion/react';
import { soundManager } from '../utils/audio';
import {
  HelpCircle,
  X,
  Scale,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';

interface HowToPlayModalProps {
  onClose: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ onClose }) => {
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
            <div className="p-3 rounded-2xl bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda]">
              <HelpCircle size={24} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#64ffda]">
                Instrucciones y Dinámica
              </span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                CÓMO JUGAR: CÓDIGO DE VIDA
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

        {/* Content Body */}
        <div className="overflow-y-auto space-y-4 pr-1 text-sm text-slate-300">
          {/* Section 1: Objective */}
          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-2">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-[#64ffda]" />
              <span>1. Tu Rol como Estudiante de Medicina</span>
            </h3>
            <p className="leading-relaxed text-slate-300">
              Asumes el papel de un <strong>Médico Interno</strong> en el Hospital Universitario. A lo largo de 12 casos clínicos divididos en 3 niveles de complejidad (Fundamentos, Conflictos Clínicos y Bioética Avanzada), te enfrentarás a dilemas con consecuencias humanas, jurídicas y deontológicas reales.
            </p>
          </div>

          {/* Section 2: 4 Fundamental Principles & Stats */}
          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-3">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <Scale size={16} className="text-amber-400" />
              <span>2. Los Cuatro Principios Bioéticos (Beauchamp & Childress)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60">
                <span className="font-bold text-cyan-300 block mb-1">AUTONOMÍA (0-100)</span>
                Respeto inalienable a la voluntad y autodeterminación informada del paciente.
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
                <span className="font-bold text-emerald-300 block mb-1">BENEFICENCIA (0-100)</span>
                Obligación de procurar el mayor bien integral y aliviar el sufrimiento sin paternalismos.
              </div>
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60">
                <span className="font-bold text-rose-300 block mb-1">NO MALEFICENCIA (0-100)</span>
                Primum non nocere: no infligir daño innecesario ni ensañamiento terapéutico fútil.
              </div>
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60">
                <span className="font-bold text-amber-300 block mb-1">JUSTICIA (0-100)</span>
                Distribución equitativa, imparcial y transparente de recursos sanitarios escasos.
              </div>
            </div>
          </div>

          {/* Section 3: Scoring & Consequences */}
          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-2">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <TrendingUp size={16} className="text-[#64ffda]" />
              <span>3. Sistema de Puntuación y Árbol de Consecuencias</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              <li><strong>Decisión Excelente:</strong> +25 puntos globales e incrementos positivos en indicadores.</li>
              <li><strong>Decisión Adecuada:</strong> +15 puntos.</li>
              <li><strong>Decisión Cuestionable:</strong> +5 puntos.</li>
              <li><strong>Decisión Problemática:</strong> -10 puntos y penalizaciones éticas severas.</li>
            </ul>
          </div>

          {/* Section 4: 6 Ranks */}
          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-2">
            <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
              <Award size={16} className="text-amber-400" />
              <span>4. Rangos y Finales del Juego</span>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">0-199: Novato</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-700 text-cyan-300">200-399: Aprendiz</span>
              <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300">400-599: Practicante</span>
              <span className="px-2.5 py-1 rounded bg-purple-950 border border-purple-700 text-purple-300">600-799: Médico Íntegro</span>
              <span className="px-2.5 py-1 rounded bg-amber-950 border border-amber-700 text-amber-300">800-899: Especialista</span>
              <span className="px-2.5 py-1 rounded bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] font-bold">900-1000: Maestro</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-slate-800 shrink-0">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </div>
  );
};
