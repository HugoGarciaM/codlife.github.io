import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GameState } from '../types';
import { getRankForScore } from '../data/achievements';
import { BioethicsRadarChart } from './Graphics/BioethicsRadarChart';
import { soundManager } from '../utils/audio';
import { Award, Printer, X, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  gameState: GameState;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  gameState,
  onClose
}) => {
  const rank = getRankForScore(gameState.score);
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const verificationCode = `CDV-${Math.abs(gameState.score * 7919).toString(36).toUpperCase()}-${Date.now().toString(36).slice(-4).toUpperCase()}`;

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden shadow-2xl border border-amber-500/40 p-6 sm:p-10 space-y-6 my-auto print:border-none print:shadow-none print:bg-white print:text-black print:w-full print:max-w-none"
        >
          {/* Close & Print Action Bar (Hidden during print) */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400">
              <Award size={18} />
              <span>Acreditación Médica Institucional</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <Printer size={16} />
                <span>Imprimir / Guardar en PDF</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Certificate Main Document Frame */}
          <div className="relative border-4 border-double border-amber-500/60 p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 text-center space-y-6 print:bg-white print:text-black print:border-amber-700">
            {/* Header Badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-lg">
                <Award size={36} />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-400 print:text-amber-700">
                HOSPITAL UNIVERSITARIO CENTRAL • DEPARTAMENTO DE BIOÉTICA
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 print:text-black">
                CERTIFICADO DE EXCELENCIA
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-widest mt-1 print:text-slate-600">
                EN TOMA DE DECISIONES CLÍNICAS Y DEONTOLOGÍA MÉDICA
              </p>
            </div>

            {/* Recipient */}
            <div className="py-4 space-y-2 border-y border-amber-500/30 print:border-slate-300">
              <p className="text-sm text-slate-300 italic print:text-slate-700">Se otorga el presente diploma de honor a:</p>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-wide print:text-black">
                {gameState.playerName || 'Dr. Médico Interno'}
              </h2>
              <p className="text-sm font-mono text-teal-400 font-bold print:text-teal-700">
                {gameState.studentTitle}
              </p>
            </div>

            {/* Narrative Statement */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto print:text-slate-800">
              Por haber completado con éxito la simulación de dilemas clínicos de alta complejidad en **Código de Vida**, demostrando un juicio profesional guiado por el respeto a los derechos del paciente y el rigor principialista.
            </p>

            {/* Stats Grid & Radar Chart Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/80 border border-slate-800 print:bg-slate-100 print:border-slate-300">
                <span className="text-xs font-mono font-bold uppercase text-slate-400">Puntuación Final</span>
                <span className="text-4xl font-mono font-extrabold text-amber-400 print:text-amber-700">{gameState.score} / 1000</span>
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 mt-2">
                  {rank.tier}
                </span>
              </div>

              <div className="flex items-center justify-center">
                <BioethicsRadarChart stats={gameState.stats} size={180} showLabels={false} />
              </div>
            </div>

            {/* Signature & Verification Line */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 print:border-slate-300 print:text-slate-700">
              <div className="text-left">
                <p className="font-bold text-slate-200 print:text-black">Código de Verificación:</p>
                <p className="text-amber-400 font-mono print:text-amber-700">{verificationCode}</p>
              </div>

              <div className="text-center sm:text-right">
                <div className="w-40 border-b border-slate-500 mb-1 mx-auto sm:ml-auto" />
                <p className="font-bold text-slate-200 print:text-black">Comité de Bioética Asistencial</p>
                <p className="text-[10px]">Expedido el {currentDate}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
