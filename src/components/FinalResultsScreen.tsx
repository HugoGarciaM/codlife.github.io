import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { GameState } from '../types';
import { getRankForScore, determineGameEnding } from '../data/achievements';
import { StatBar } from './StatBar';
import { BadgeIcon } from './Graphics/BadgeIcon';
import { soundManager } from '../utils/audio';
import {
  Trophy,
  Award,
  ShieldCheck,
  Heart,
  Scale,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Printer,
  FileText,
  User,
  BookOpen
} from 'lucide-react';

interface FinalResultsScreenProps {
  gameState: GameState;
  onRestart: () => void;
  onOpenGlossary: () => void;
}

export const FinalResultsScreen: React.FC<FinalResultsScreenProps> = ({
  gameState,
  onRestart,
  onOpenGlossary
}) => {
  const currentRank = getRankForScore(gameState.score);
  const ending = determineGameEnding(gameState.score, gameState.stats);
  const unlockedBadges = gameState.achievements.filter(a => a.unlocked);

  useEffect(() => {
    soundManager.playVictory();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 select-none space-y-8 print:p-0 print:bg-white print:text-black">
      {/* Celebration Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#64ffda]/15 border border-[#64ffda] text-[#64ffda] text-xs font-mono uppercase tracking-wider">
          <Sparkles size={14} />
          <span>Hospital Universitario Central • Evaluación Deontológica Final</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
          SIMULACIÓN COMPLETADA
        </h1>

        <div className="text-lg sm:text-xl font-medium text-slate-300 flex items-center justify-center gap-2">
          <User size={20} className="text-[#64ffda]" />
          <span className="text-white font-bold">{gameState.playerName}</span>
          <span className="text-slate-500">•</span>
          <span className="text-[#64ffda]">{gameState.studentTitle}</span>
        </div>
      </motion.div>

      {/* Main Score & Rank Showcase Card with Glass & Immersive UI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-3xl p-6 sm:p-10 border border-[#64ffda]/30 shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        {/* Left Score Gauge (5 cols) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#020c1b]/80 border border-slate-800">
          <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-1">
            Puntuación Deontológica Final
          </span>
          <div className="text-5xl sm:text-6xl font-display font-black font-mono text-[#64ffda] leading-none my-2 drop-shadow-md">
            {gameState.score}
            <span className="text-xl text-slate-500 font-normal">/1000</span>
          </div>

          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-slate-200">
            <Trophy size={14} className="text-amber-400" />
            <span>Nivel: {currentRank.tier}</span>
          </div>
        </div>

        {/* Right Ending Narrative (7 cols) */}
        <div className="md:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#64ffda]">
            <Award size={16} />
            <span>Dictamen del Comité de Ética Asistencial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
            {ending.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#020c1b]/60 p-4 rounded-xl border border-slate-800">
            {ending.narrative}
          </p>
        </div>
      </motion.div>

      {/* 8 Bioethical Metrics Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass rounded-3xl p-6 sm:p-8 space-y-5"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
            <ShieldCheck size={20} className="text-[#64ffda]" />
            <span>Balance de los 8 Indicadores Deontológicos</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">Escala de 0 a 100</span>
        </div>

        {/* 4 Beauchamp Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#020c1b]/80 border border-slate-800">
            <StatBar
              label="Autonomía"
              value={gameState.stats.autonomy}
              color="sky"
              icon={<ShieldCheck size={16} className="text-cyan-400" />}
            />
          </div>
          <div className="p-4 rounded-2xl bg-[#020c1b]/80 border border-slate-800">
            <StatBar
              label="Beneficencia"
              value={gameState.stats.beneficence}
              color="emerald"
              icon={<Heart size={16} className="text-emerald-400" />}
            />
          </div>
          <div className="p-4 rounded-2xl bg-[#020c1b]/80 border border-slate-800">
            <StatBar
              label="No Maleficencia"
              value={gameState.stats.nonMaleficence}
              color="rose"
              icon={<ShieldCheck size={16} className="text-rose-400" />}
            />
          </div>
          <div className="p-4 rounded-2xl bg-[#020c1b]/80 border border-slate-800">
            <StatBar
              label="Justicia"
              value={gameState.stats.justice}
              color="amber"
              icon={<Scale size={16} className="text-amber-400" />}
            />
          </div>
        </div>

        {/* 4 Complementary Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-slate-800/80">
          <div className="p-3.5 rounded-2xl bg-[#020c1b]/60 border border-slate-800/80">
            <StatBar
              label="Confidencialidad"
              value={gameState.stats.confidentiality}
              color="purple"
              size="sm"
            />
          </div>
          <div className="p-3.5 rounded-2xl bg-[#020c1b]/60 border border-slate-800/80">
            <StatBar
              label="Consentimiento"
              value={gameState.stats.consent}
              color="indigo"
              size="sm"
            />
          </div>
          <div className="p-3.5 rounded-2xl bg-[#020c1b]/60 border border-slate-800/80">
            <StatBar
              label="Integridad"
              value={gameState.stats.integrity}
              color="teal"
              size="sm"
            />
          </div>
          <div className="p-3.5 rounded-2xl bg-[#020c1b]/60 border border-slate-800/80">
            <StatBar
              label="Comunicación"
              value={gameState.stats.communication}
              color="sky"
              size="sm"
            />
          </div>
        </div>
      </motion.div>

      {/* Unlocked Badges Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass rounded-3xl p-6 sm:p-8 space-y-4"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
            <Trophy size={20} className="text-amber-400" />
            <span>Emblemas Obtenidos ({unlockedBadges.length} de 10)</span>
          </h3>
          <span className="text-xs font-mono text-[#64ffda]">
            {Math.round((unlockedBadges.length / 10) * 100)}% Completado
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {gameState.achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center gap-2 ${
                ach.unlocked
                  ? 'bg-[#020c1b]/80 border-[#64ffda]/40 shadow-md'
                  : 'bg-[#020c1b]/30 border-slate-800/80 opacity-40'
              }`}
            >
              <BadgeIcon id={ach.id} unlocked={ach.unlocked} size="md" />
              <span
                className={`text-xs font-bold font-display line-clamp-1 ${
                  ach.unlocked ? 'text-white' : 'text-slate-500'
                }`}
              >
                {ach.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decision Audit Trail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass rounded-3xl p-6 sm:p-8 space-y-4"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
            <FileText size={20} className="text-[#64ffda]" />
            <span>Historial y Auditoría de Decisiones Clínicas</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">12 Casos Auditados</span>
        </div>

        <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
          {gameState.decisionHistory.map((decision, index) => {
            const isPos = decision.scoreDelta >= 15;
            const isNegative = decision.scoreDelta < 0;

            return (
              <div
                key={`audit-${index}`}
                className="p-3.5 rounded-2xl bg-[#020c1b]/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold shrink-0 ${
                      isPos
                        ? 'bg-[#64ffda]/20 text-[#64ffda]'
                        : isNegative
                        ? 'bg-rose-950 text-rose-300'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    #{decision.caseId}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {decision.caseTitle}
                    </h4>
                    <p className="text-slate-300 mt-0.5">
                      <span className="text-slate-400">Elección: </span>
                      {decision.optionText}
                    </p>
                    <p className="text-[#64ffda] text-[11px] mt-0.5 italic">
                      {decision.resultTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <span
                    className={`font-mono font-bold px-2.5 py-1 rounded-lg border ${
                      decision.scoreDelta > 0
                        ? 'bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda]'
                        : decision.scoreDelta === 0
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : 'bg-rose-950/60 border-rose-800 text-rose-300'
                    }`}
                  >
                    {decision.scoreDelta > 0 ? `+${decision.scoreDelta}` : decision.scoreDelta} pts
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 print:hidden">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenGlossary();
            }}
            className="px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-sm font-medium cursor-pointer"
          >
            <BookOpen size={16} className="text-cyan-400" />
            <span>Consultar Glosario</span>
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              handlePrint();
            }}
            className="px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Printer size={16} className="text-[#64ffda]" />
            <span>Guardar / Imprimir Certificado</span>
          </button>
        </div>

        <button
          onClick={() => {
            soundManager.playClick();
            onRestart();
          }}
          className="btn-primary px-8 py-3.5 rounded-xl font-bold text-white text-sm uppercase tracking-wider medical-glow flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <RotateCcw size={16} />
          <span>JUGAR DE NUEVO</span>
        </button>
      </div>
    </div>
  );
};
