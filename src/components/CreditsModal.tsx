import React from 'react';
import { motion } from 'motion/react';
import { soundManager } from '../utils/audio';
import { Award, X, BookOpen, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface CreditsModalProps {
  onClose: () => void;
}

export const CreditsModal: React.FC<CreditsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020c1b]/85 backdrop-blur-md overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-3xl glass rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden my-auto space-y-5 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/60 text-purple-400">
              <Award size={24} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-purple-400">
                Créditos Académicos
              </span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                CÓDIGO DE VIDA • CRÉDITOS
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

        {/* Body Content */}
        <div className="overflow-y-auto space-y-4 pr-1 text-sm text-slate-300">
          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={16} className="text-[#64ffda]" />
              <span>Proyecto Educativo de Simulación Clínica</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>"Código de Vida: Cada decisión tiene consecuencias"</strong> es un simulador interactivo de toma de decisiones éticas diseñado para estudiantes de Medicina, Enfermería y Ciencias de la Salud.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={16} />
              <span>Marcos Teóricos y Normativos de Referencia</span>
            </h3>
            <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
              <li>Tom L. Beauchamp & James F. Childress (<em>Principles of Biomedical Ethics</em>).</li>
              <li>Declaración Universal sobre Bioética y Derechos Humanos (UNESCO, 2005).</li>
              <li>Convenio de Oviedo sobre Derechos Humanos y Biomedicina (1997).</li>
              <li>Código de Deontología Médica y Guía de Ética Médica de la AMM.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-[#020c1b]/70 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <Heart size={16} />
              <span>Agradecimientos y Propósito</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dedicado a todos los docentes de Bioética y a los profesionales sanitarios que día a día ponderan la técnica con el respeto incondicional por la dignidad humana.
            </p>
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
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
