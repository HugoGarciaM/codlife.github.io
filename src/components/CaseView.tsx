import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ClinicalCase, CaseOption, GameState } from '../types';
import { HospitalScene } from './Graphics/HospitalScene';
import { PatientAvatar } from './Graphics/PatientAvatar';
import { BadgeIcon } from './Graphics/BadgeIcon';
import { soundManager } from '../utils/audio';
import {
  AlertTriangle,
  FileText,
  HelpCircle,
  Stethoscope,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Trophy,
  Sparkles
} from 'lucide-react';

interface CaseViewProps {
  currentCase: ClinicalCase;
  gameState: GameState;
  onSelectOption: (option: CaseOption) => void;
}

export const CaseView: React.FC<CaseViewProps> = ({
  currentCase,
  gameState,
  onSelectOption
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Check if any past consequence flags trigger notes in this case
  const activeConsequenceNotes = currentCase.conditionalConsequences?.filter(cc =>
    gameState.consequenceFlags.includes(cc.requiredFlag)
  );

  const getVitalsBadgeColor = (status: string) => {
    switch (status) {
      case 'Crítico':
        return 'bg-rose-950/90 text-rose-300 border-rose-600 animate-pulse';
      case 'Grave':
        return 'bg-amber-950/90 text-amber-300 border-amber-600';
      default:
        return 'bg-emerald-950/90 text-emerald-300 border-emerald-600';
    }
  };

  const handleOptionClick = (option: CaseOption) => {
    setSelectedOptionId(option.id);
    soundManager.playClick();
    onSelectOption(option);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 select-none space-y-4">
      {/* Level Progression Indicator Bar with Glass style */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 glass p-3 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] font-mono font-bold text-xs">
            {currentCase.levelName}
          </span>
          <span className="text-xs font-semibold text-slate-300 hidden md:inline">
            Caso {currentCase.id} de 12
          </span>
        </div>

        {/* 12 Case Progress Dots */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {Array.from({ length: 12 }).map((_, idx) => {
            const caseNum = idx + 1;
            const isCompleted = idx < gameState.currentCaseIndex;
            const isCurrent = idx === gameState.currentCaseIndex;

            return (
              <div
                key={`case-dot-${caseNum}`}
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-[#64ffda] text-[#020c1b] shadow-lg medical-glow ring-2 ring-[#64ffda]'
                    : isCompleted
                    ? 'bg-[#64ffda]/20 border border-[#64ffda]/60 text-[#64ffda]'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-500'
                }`}
                title={`Caso ${caseNum}`}
              >
                {isCompleted ? <CheckCircle2 size={13} /> : caseNum}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Layout following Immersive UI 2/3 Scene + 1/3 Choices arrangement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column (7 cols): Visual Scene, Location Tag, Patient ID & Clinical Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-4"
        >
          {/* Glass Scene Box with Location Badge */}
          <div className="glass rounded-2xl flex flex-col relative overflow-hidden shadow-2xl">
            <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-slate-800/20 to-transparent flex items-end justify-center p-4">
              {/* Background hospital setting */}
              <div className="absolute inset-0 opacity-80">
                <HospitalScene setting={currentCase.setting} />
              </div>

              {/* Ambient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent pointer-events-none" />

              {/* 2D Character Avatar */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <PatientAvatar type={currentCase.patient.avatarType} size="lg" />
              </div>

              {/* Location Tag as in Design HTML */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#64ffda] text-[#020c1b] text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                {currentCase.settingName}
              </div>

              {/* Vitals Pill Top Right */}
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`px-3 py-1 rounded-lg border text-xs font-mono font-bold uppercase shadow ${getVitalsBadgeColor(
                    currentCase.patient.vitalsStatus
                  )}`}
                >
                  {currentCase.patient.vitalsStatus}
                </span>
              </div>
            </div>

            {/* Narrative & Case Details Panel */}
            <div className="p-6 bg-slate-900/90 border-t border-slate-800 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#64ffda] mb-1">
                  <FileText size={14} />
                  <span>EXPEDIENTE CLÍNICO #{currentCase.id.toString().padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  {currentCase.title}
                </h3>
                <p className="text-xs text-[#64ffda] font-medium mt-0.5">
                  {currentCase.subtitle}
                </p>
              </div>

              {/* Story context */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#020c1b]/60 p-3.5 rounded-xl border border-slate-800">
                {currentCase.clinicalContext}
              </p>

              {/* Clinical key points */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold uppercase text-slate-400 flex items-center gap-1.5">
                  <Stethoscope size={14} className="text-[#64ffda]" />
                  <span>Datos Clínicos del Paciente ({currentCase.patient.name}, {currentCase.patient.age}):</span>
                </div>
                <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
                  {currentCase.clinicalData.map((dataItem, i) => (
                    <li
                      key={`cd-${i}`}
                      className="flex items-start gap-2 bg-[#020c1b]/40 p-2 rounded-lg border border-slate-800/80"
                    >
                      <span className="text-[#64ffda] font-bold">•</span>
                      <span>{dataItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Central Dilemma Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-teal-950/50 to-slate-950 border border-[#64ffda]/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#64ffda] uppercase mb-1">
                  <ShieldAlert size={14} />
                  <span>Dilema Ético Principal:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic">
                  "{currentCase.bioethicalDilemma}"
                </p>
              </div>

              {/* Dynamic past consequences notice */}
              {activeConsequenceNotes && activeConsequenceNotes.length > 0 && (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-600/70 text-amber-200 text-xs flex items-start gap-2">
                  <AlertTriangle size={15} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Advertencia del Comité Ético: </span>
                    {activeConsequenceNotes[0].consequenceNotice}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Decision Prompt, Choices & Recent Badges Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Question Title */}
          <div className="glass p-4 rounded-xl flex items-center gap-2">
            <HelpCircle size={18} className="text-[#64ffda] shrink-0" />
            <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
              {currentCase.question}
            </h4>
          </div>

          {/* Choices Panel */}
          <div className="flex-1 flex flex-col gap-3">
            {currentCase.options.map((option) => (
              <button
                key={option.id}
                id={`case-option-${option.id}`}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => soundManager.playHover()}
                className={`glass p-4 rounded-xl text-left hover:bg-[#64ffda]/10 transition-all duration-200 border cursor-pointer flex items-start gap-3 group ${
                  selectedOptionId === option.id
                    ? 'border-[#64ffda] bg-[#64ffda]/20 ring-2 ring-[#64ffda] medical-glow'
                    : 'border-slate-700 hover:border-[#64ffda] text-slate-300'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 group-hover:border-[#64ffda] flex items-center justify-center text-xs font-bold font-mono text-[#64ffda] shrink-0 transition-colors">
                  {option.id}
                </div>

                <div className="flex-1 min-w-0 pt-0.5">
                  <span className="block text-[#64ffda] text-xs font-bold mb-1">
                    OPCIÓN {option.id}
                  </span>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white leading-snug">
                    {option.text}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-600 group-hover:text-[#64ffda] shrink-0 mt-1 transition-all group-hover:translate-x-1"
                />
              </button>
            ))}
          </div>

          {/* Emblemas Recientes Card from Design */}
          <div className="glass p-4 rounded-xl">
            <h4 className="text-xs uppercase text-slate-400 font-bold mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Trophy size={14} className="text-amber-400" />
                <span>Emblemas Médicos</span>
              </span>
              <span className="text-xs font-mono text-[#64ffda]">
                {gameState.achievements.filter(a => a.unlocked).length}/10
              </span>
            </h4>

            <div className="grid grid-cols-5 gap-2">
              {gameState.achievements.slice(0, 5).map((ach) => (
                <div
                  key={ach.id}
                  className="flex items-center justify-center p-1 rounded-lg bg-slate-800/40 border border-slate-700/60"
                  title={ach.title}
                >
                  <BadgeIcon id={ach.id} unlocked={ach.unlocked} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
