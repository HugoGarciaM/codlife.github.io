import React from 'react';
import { motion } from 'motion/react';
import { HospitalScene } from './Graphics/HospitalScene';
import { soundManager } from '../utils/audio';
import {
  Play,
  BookmarkCheck,
  Trophy,
  HelpCircle,
  Award,
  BookOpen,
  Heart,
  Scale,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface StartScreenProps {
  hasSave: boolean;
  savedPlayerName?: string;
  savedScore?: number;
  onStartNew: () => void;
  onContinue: () => void;
  onOpenAchievements: () => void;
  onOpenHowToPlay: () => void;
  onOpenGlossary: () => void;
  onOpenCredits: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  hasSave,
  savedPlayerName,
  savedScore,
  onStartNew,
  onContinue,
  onOpenAchievements,
  onOpenHowToPlay,
  onOpenGlossary,
  onOpenCredits
}) => {
  return (
    <div className="relative min-h-[calc(100vh-65px)] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0d2538] via-[#051424] to-[#020c1b] px-4 py-8 select-none">
      {/* 2D Background Hospital Campus Scene overlay */}
      <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
        <HospitalScene setting="campus_exterior" />
      </div>

      {/* Radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00d2ff18,transparent_60%)] pointer-events-none" />

      {/* Main Hero Header Title */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Medical Cross / Heart Icon from Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl glass flex items-center justify-center text-[#64ffda] medical-glow shadow-2xl p-4">
            <svg className="w-full h-full text-[#64ffda]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5v14M5 12h14" strokeOpacity="0.5" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-display font-extrabold tracking-tighter text-white uppercase drop-shadow-2xl mb-2"
        >
          CÓDIGO DE VIDA
        </motion.h1>

        {/* Subtitle with Immersive UI styling */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#64ffda] uppercase tracking-[0.25em] font-light max-w-2xl"
        >
          Cada decisión tiene consecuencias
        </motion.p>

        {/* 4 Pillars Bioethics Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs"
        >
          <span className="glass px-3 py-1 rounded-full text-cyan-300 font-medium flex items-center gap-1.5 shadow-sm">
            <ShieldCheck size={13} className="text-cyan-400" /> Autonomía
          </span>
          <span className="glass px-3 py-1 rounded-full text-emerald-300 font-medium flex items-center gap-1.5 shadow-sm">
            <Heart size={13} className="text-emerald-400" /> Beneficencia
          </span>
          <span className="glass px-3 py-1 rounded-full text-rose-300 font-medium flex items-center gap-1.5 shadow-sm">
            <ShieldCheck size={13} className="text-rose-400" /> No Maleficencia
          </span>
          <span className="glass px-3 py-1 rounded-full text-amber-300 font-medium flex items-center gap-1.5 shadow-sm">
            <Scale size={13} className="text-amber-400" /> Justicia
          </span>
        </motion.div>
      </div>

      {/* Main Menu Action Buttons matching Immersive UI */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full max-w-sm mx-auto my-8 flex flex-col gap-3.5"
      >
        {/* Start New Game Button with btn-primary and medical-glow */}
        <button
          id="start-new-game-btn"
          onClick={() => {
            soundManager.playClick();
            onStartNew();
          }}
          className="btn-primary w-full py-4 px-8 rounded-xl font-bold text-white text-lg tracking-wider uppercase medical-glow flex items-center justify-center gap-3 cursor-pointer"
        >
          <Play size={20} className="fill-white" />
          <span>INICIAR SIMULACIÓN</span>
        </button>

        {/* Continue Saved Game Button */}
        {hasSave && (
          <button
            id="continue-game-btn"
            onClick={() => {
              soundManager.playClick();
              onContinue();
            }}
            className="w-full py-3.5 px-6 rounded-xl glass hover:bg-slate-800/80 border border-[#64ffda]/40 hover:border-[#64ffda] text-[#64ffda] font-semibold text-sm tracking-wide transition-all shadow-lg flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <BookmarkCheck size={18} className="text-[#64ffda]" />
              <span>CONTINUAR PARTIDA</span>
            </div>
            {savedPlayerName && (
              <span className="text-xs font-mono text-slate-300">
                {savedPlayerName} • {savedScore} pts
              </span>
            )}
          </button>
        )}

        {/* Secondary Menu Buttons matching Immersive UI */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* Achievements Button */}
          <button
            id="menu-achievements-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenAchievements();
            }}
            className="bg-slate-800/50 hover:bg-slate-800 py-3 px-4 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Trophy size={16} className="text-amber-400" />
            <span>LOGROS</span>
          </button>

          {/* How to Play Button */}
          <button
            id="menu-how-to-play-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenHowToPlay();
            }}
            className="bg-slate-800/50 hover:bg-slate-800 py-3 px-4 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <HelpCircle size={16} className="text-[#64ffda]" />
            <span>CÓMO JUGAR</span>
          </button>

          {/* Glossary Button */}
          <button
            id="menu-glossary-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenGlossary();
            }}
            className="bg-slate-800/50 hover:bg-slate-800 py-3 px-4 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <BookOpen size={16} className="text-cyan-400" />
            <span>GLOSARIO</span>
          </button>

          {/* Credits Button */}
          <button
            id="menu-credits-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenCredits();
            }}
            className="bg-slate-800/50 hover:bg-slate-800 py-3 px-4 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Award size={16} className="text-purple-400" />
            <span>CRÉDITOS</span>
          </button>
        </div>
      </motion.div>

      {/* Footer Notes */}
      <div className="relative z-10 text-center text-xs text-slate-400 font-mono">
        Hospital Universitario Central • Programa de Ética y Deontología Médica
      </div>
    </div>
  );
};
