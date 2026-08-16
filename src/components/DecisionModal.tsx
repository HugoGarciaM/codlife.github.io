import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CaseOption, BioethicsStats } from '../types';
import { soundManager } from '../utils/audio';
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface DecisionModalProps {
  option: CaseOption;
  previousStats: BioethicsStats;
  onProceed: () => void;
  isLastCase: boolean;
}

export const DecisionModal: React.FC<DecisionModalProps> = ({
  option,
  previousStats,
  onProceed,
  isLastCase
}) => {
  useEffect(() => {
    if (option.quality === 'excellent') {
      soundManager.playSuccess();
    } else if (option.quality === 'problematic') {
      soundManager.playCaution();
    } else {
      soundManager.playClick();
    }
  }, [option.quality]);

  const getQualityBadge = () => {
    switch (option.quality) {
      case 'excellent':
        return {
          icon: <CheckCircle size={22} className="text-[#64ffda]" />,
          bg: 'bg-[#64ffda]/20 border-[#64ffda] text-[#64ffda]',
          title: 'DECISIÓN ÉTICAMENTE SÓLIDA'
        };
      case 'adequate':
        return {
          icon: <CheckCircle size={22} className="text-cyan-400" />,
          bg: 'bg-cyan-950/80 border-cyan-500 text-cyan-300',
          title: 'DECISIÓN ADECUADA'
        };
      case 'questionable':
        return {
          icon: <AlertCircle size={22} className="text-amber-400" />,
          bg: 'bg-amber-950/80 border-amber-500 text-amber-300',
          title: 'DECISIÓN ÉTICAMENTE CUESTIONABLE'
        };
      case 'problematic':
        return {
          icon: <XCircle size={22} className="text-rose-400" />,
          bg: 'bg-rose-950/80 border-rose-500 text-rose-300',
          title: 'DECISIÓN PROBLEMÁTICA'
        };
    }
  };

  const badge = getQualityBadge();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-3xl glass-card rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden my-auto space-y-5 animate-scale-in"
      >
        {/* Quality Banner & Score Delta Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl border ${badge.bg}`}>
              {badge.icon}
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-slate-400">
                Evaluación Deontológica
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                {option.resultTitle}
              </h2>
            </div>
          </div>

          {/* Score Badge */}
          <div
            className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-mono font-bold text-base shrink-0 self-start sm:self-auto ${
              option.scoreDelta > 0
                ? 'bg-[#64ffda]/20 border-[#64ffda] text-[#64ffda]'
                : option.scoreDelta === 0
                ? 'bg-slate-800 border-slate-700 text-slate-300'
                : 'bg-rose-950/90 border-rose-600 text-rose-300'
            }`}
          >
            {option.scoreDelta > 0 ? (
              <TrendingUp size={18} className="text-[#64ffda]" />
            ) : (
              <TrendingDown size={18} className="text-rose-400" />
            )}
            <span>
              {option.scoreDelta > 0 ? `+${option.scoreDelta}` : option.scoreDelta} PUNTOS
            </span>
          </div>
        </div>

        {/* 1. What occurred (Outcome Narrative) */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-mono font-bold uppercase text-[#64ffda] flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>1. Consecuencias Asistenciales y Resultado Clínico:</span>
          </h3>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 shadow-inner text-slate-200 text-sm leading-relaxed">
            {option.outcomeNarrative}
          </div>
        </div>

        {/* 2. Stat Deltas Breakdown */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-mono font-bold uppercase text-slate-400">
            2. Modificación de Indicadores Bioéticos:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            {Object.entries(option.statDeltas).map(([key, rawVal]) => {
              const val = Number(rawVal);
              if (isNaN(val) || val === 0) return null;
              const isPos = val > 0;
              return (
                <div
                  key={key}
                  className={`p-2.5 rounded-lg border flex items-center justify-between ${
                    isPos
                      ? 'bg-[#64ffda]/10 border-[#64ffda]/40 text-[#64ffda]'
                      : 'bg-rose-950/40 border-rose-800/80 text-rose-300'
                  }`}
                >
                  <span className="capitalize text-[11px] truncate">
                    {key === 'autonomy'
                      ? 'Autonomía'
                      : key === 'beneficence'
                      ? 'Beneficencia'
                      : key === 'nonMaleficence'
                      ? 'No Maleficencia'
                      : key === 'justice'
                      ? 'Justicia'
                      : key === 'confidentiality'
                      ? 'Confidencialidad'
                      : key === 'consent'
                      ? 'Consentimiento'
                      : key === 'integrity'
                      ? 'Integridad'
                      : 'Comunicación'}
                  </span>
                  <span className="font-bold">
                    {isPos ? `+${val}` : val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Pedagogical Bioethical Reasoning */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-1.5">
            <BookOpen size={14} />
            <span>3. Razonamiento Bioético y Principios Involucrados:</span>
          </h3>
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 shadow-inner text-slate-200 text-sm leading-relaxed space-y-2.5">
            <p>{option.bioethicalExplanation}</p>

            {/* Principles affected breakdown */}
            {option.principlesAffected && option.principlesAffected.length > 0 && (
              <div className="pt-2 border-t border-cyan-900/50 space-y-1.5 text-xs">
                {option.principlesAffected.map((pa, idx) => (
                  <div key={`pa-${idx}`} className="flex items-start gap-2">
                    <span
                      className={`font-bold shrink-0 ${
                        pa.positive ? 'text-[#64ffda]' : 'text-rose-400'
                      }`}
                    >
                      [{pa.name}]:
                    </span>
                    <span className="text-slate-300">{pa.description}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end pt-3 border-t border-slate-700/50">
          <button
            id="modal-continue-btn"
            onClick={() => {
              soundManager.playClick();
              onProceed();
            }}
            className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white text-sm uppercase tracking-wider medical-glow flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>{isLastCase ? 'VER RESULTADOS FINALES' : 'CONTINUAR AL SIGUIENTE CASO'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
