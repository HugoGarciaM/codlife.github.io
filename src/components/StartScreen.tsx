import React from 'react';
import { motion } from 'motion/react';
import { HospitalScene } from './Graphics/HospitalScene';
import { soundManager } from '../utils/audio';
import { GameMode } from '../types';
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
  Zap,
  RotateCcw
} from 'lucide-react';

interface StartScreenProps {
  hasSave: boolean;
  savedPlayerName?: string;
  savedScore?: number;
  onStartNew: (mode?: GameMode) => void;
  onContinue: () => void;
  onOpenPracticeMode: () => void;
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
  onOpenPracticeMode,
  onOpenAchievements,
  onOpenHowToPlay,
  onOpenGlossary,
  onOpenCredits
}) => {
  return (
    <div className="relative min-h-[calc(100vh-65px)] w-full flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 py-8 select-none">
      {/* 2D Background Hospital Campus Scene overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        <HospitalScene setting="campus_exterior" />
      </div>

      {/* Radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.15),transparent_60%)] pointer-events-none" />

      {/* Main Hero Header Title */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Medical Cross / Heart Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 animate-float"
        >
          <div className="w-24 h-24 mx-auto rounded-3xl glass flex items-center justify-center text-teal-400 medical-glow-teal p-5">
            <svg className="w-full h-full text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
          className="text-5xl sm:text-7xl font-display font-extrabold tracking-tighter uppercase drop-shadow-2xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"
        >
          CÓDIGO DE VIDA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 uppercase tracking-[0.25em] font-light max-w-2xl"
        >
          Cada decisión tiene consecuencias
        </motion.p>

        {/* 4 Pillars Bioethics Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs"
        >
          <span className="glass px-4 py-1.5 rounded-full text-cyan-300 font-medium flex items-center gap-2 shadow-sm">
            <ShieldCheck size={14} className="text-cyan-400" /> Autonomía
          </span>
          <span className="glass px-4 py-1.5 rounded-full text-teal-300 font-medium flex items-center gap-2 shadow-sm">
            <Heart size={14} className="text-teal-400" /> Beneficencia
          </span>
          <span className="glass px-4 py-1.5 rounded-full text-rose-300 font-medium flex items-center gap-2 shadow-sm">
            <ShieldCheck size={14} className="text-rose-400" /> No Maleficencia
          </span>
          <span className="glass px-4 py-1.5 rounded-full text-amber-300 font-medium flex items-center gap-2 shadow-sm">
            <Scale size={14} className="text-amber-400" /> Justicia
          </span>
        </motion.div>
      </div>

      {/* Main Menu Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full max-w-md mx-auto my-8 flex flex-col gap-3"
      >
        {/* Start Standard Game Button */}
        <button
          id="start-new-game-btn"
          onClick={() => {
            soundManager.playClick();
            onStartNew('standard');
          }}
          className="btn-primary w-full py-3.5 px-6 rounded-2xl font-bold text-white text-base tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-teal-400/20"
        >
          <Play size={20} className="fill-white" />
          <span>CAMPAÑA ESTÁNDAR</span>
        </button>

        {/* Start Challenge Hardcore Mode */}
        <button
          id="start-challenge-game-btn"
          onClick={() => {
            soundManager.playClick();
            onStartNew('challenge');
          }}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-950/80 to-amber-950/80 border border-rose-500/60 hover:border-rose-400 text-rose-200 font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md hover:shadow-rose-900/30"
        >
          <Zap size={18} className="text-rose-400" />
          <span>DESAFÍO ÉTICO (HARDCORE)</span>
        </button>

        {/* Quick Practice Mode Button */}
        <button
          id="quick-practice-btn"
          onClick={() => {
            soundManager.playClick();
            onOpenPracticeMode();
          }}
          className="w-full py-3 px-6 rounded-2xl glass-card text-teal-300 hover:text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-teal-500/10 border-slate-700/60"
        >
          <RotateCcw size={18} className="text-teal-400" />
          <span>PRÁCTICA RÁPIDA (CASOS SUELTOS)</span>
        </button>

        {/* Continue Saved Game Button */}
        {hasSave && (
          <button
            id="continue-game-btn"
            onClick={() => {
              soundManager.playClick();
              onContinue();
            }}
            className="w-full py-3.5 px-6 rounded-2xl glass-card text-teal-400 font-semibold text-sm tracking-wide flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <BookmarkCheck size={20} className="text-teal-400 group-hover:scale-110 transition-transform" />
              <span>CONTINUAR PARTIDA</span>
            </div>
            {savedPlayerName && (
              <span className="text-xs font-mono text-slate-300">
                {savedPlayerName} • {savedScore} pts
              </span>
            )}
          </button>
        )}

        {/* Secondary Menu Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          {/* Achievements Button */}
          <button
            id="menu-achievements-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenAchievements();
            }}
            className="glass-card py-3 px-4 rounded-xl text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Trophy size={18} className="text-amber-400" />
            <span>LOGROS</span>
          </button>

          {/* How to Play Button */}
          <button
            id="menu-how-to-play-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenHowToPlay();
            }}
            className="glass-card py-3 px-4 rounded-xl text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <HelpCircle size={18} className="text-teal-400" />
            <span>CÓMO JUGAR</span>
          </button>

          {/* Glossary Button */}
          <button
            id="menu-glossary-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenGlossary();
            }}
            className="glass-card py-3 px-4 rounded-xl text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <BookOpen size={18} className="text-cyan-400" />
            <span>GLOSARIO</span>
          </button>

          {/* Credits Button */}
          <button
            id="menu-credits-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenCredits();
            }}
            className="glass-card py-3 px-4 rounded-xl text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Award size={18} className="text-purple-400" />
            <span>CRÉDITOS</span>
          </button>
        </div>
      </motion.div>

      {/* Footer Notes */}
      <div className="relative z-10 text-center text-xs text-slate-500 font-mono mt-auto opacity-70">
        Hospital Universitario Central • Programa de Ética y Deontología Médica
      </div>
    </div>
  );
};

