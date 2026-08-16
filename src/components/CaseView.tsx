import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ClinicalCase, CaseOption, GameState, InquiryQuestion } from '../types';
import { HospitalScene } from './Graphics/HospitalScene';
import { PatientAvatar } from './Graphics/PatientAvatar';
import { BadgeIcon } from './Graphics/BadgeIcon';
import { EcgMonitor } from './Graphics/EcgMonitor';
import { CommitteeModal } from './CommitteeModal';
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
  MessageSquare,
  Clock,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface CaseViewProps {
  currentCase: ClinicalCase;
  gameState: GameState;
  onSelectOption: (option: CaseOption) => void;
  onUseCommitteeConsultation?: () => void;
}

export const CaseView: React.FC<CaseViewProps> = ({
  currentCase,
  gameState,
  onSelectOption,
  onUseCommitteeConsultation
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [revealedInquiries, setRevealedInquiries] = useState<string[]>([]);
  const [showCommitteeModal, setShowCommitteeModal] = useState<boolean>(false);

  // Determine timer logic for Emergency Code Red cases or Challenge mode
  const isChallenge = gameState.gameMode === 'challenge';
  const hasTimer = currentCase.isUrgent || isChallenge;
  const initialTime = currentCase.timeLimitSeconds || (isChallenge ? 40 : 45);
  const [timeLeft, setTimeLeft] = useState<number | null>(hasTimer ? initialTime : null);

  // Reset local state when case changes
  useEffect(() => {
    setSelectedOptionId(null);
    setRevealedInquiries([]);
    setShowCommitteeModal(false);
    if (hasTimer) {
      setTimeLeft(initialTime);
    } else {
      setTimeLeft(null);
    }
  }, [currentCase.id, gameState.gameMode]);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft === null || selectedOptionId !== null) return;

    if (timeLeft <= 0) {
      soundManager.playTimeWarning();
      const defaultOpt = currentCase.options.find(o => o.id === (currentCase.defaultOptionId || 'A')) || currentCase.options[0];
      handleOptionClick(defaultOpt);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : 0));
      if (timeLeft <= 10) {
        soundManager.playTick();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selectedOptionId, currentCase]);

  // Keyboard Shortcuts Listener Effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input fields
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (selectedOptionId || showCommitteeModal) return;

      const key = e.key.toUpperCase();
      if (key === '1' || key === 'A') {
        const opt = currentCase.options.find(o => o.id === 'A');
        if (opt) handleOptionClick(opt);
      } else if (key === '2' || key === 'B') {
        const opt = currentCase.options.find(o => o.id === 'B');
        if (opt) handleOptionClick(opt);
      } else if (key === '3' || key === 'C') {
        const opt = currentCase.options.find(o => o.id === 'C');
        if (opt) handleOptionClick(opt);
      } else if (key === '4' || key === 'D') {
        const opt = currentCase.options.find(o => o.id === 'D');
        if (opt) handleOptionClick(opt);
      } else if (key === 'K') {
        handleOpenCommittee();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCase, selectedOptionId, showCommitteeModal, gameState.committeeConsultationsLeft]);

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
    if (selectedOptionId) return;
    setSelectedOptionId(option.id);
    soundManager.playClick();
    onSelectOption(option);
  };

  const handleToggleInquiry = (inquiryId: string) => {
    if (!revealedInquiries.includes(inquiryId)) {
      soundManager.playClick();
      setRevealedInquiries(prev => [...prev, inquiryId]);
    }
  };

  const handleOpenCommittee = () => {
    if (gameState.committeeConsultationsLeft <= 0 || isChallenge) return;
    soundManager.playCommitteeConsult();
    setShowCommitteeModal(true);
    if (onUseCommitteeConsultation) {
      onUseCommitteeConsultation();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 select-none space-y-4">
      {/* Top Bar with Case Progress & Game Mode / Emergency Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 glass-card p-3 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] font-mono font-bold text-xs">
            {currentCase.levelName}
          </span>
          <span className="text-xs font-semibold text-slate-300 hidden md:inline">
            Caso {currentCase.id} de 12
          </span>

          {isChallenge && (
            <span className="px-2.5 py-1 rounded-lg bg-rose-950/80 border border-rose-500 text-rose-300 font-mono font-bold text-xs flex items-center gap-1 shadow">
              <Zap size={13} /> Desafío Ético
            </span>
          )}
        </div>

        {/* Committee Consultation & Timer Actions */}
        <div className="flex items-center gap-3">
          {/* Emergency Countdown Timer Widget */}
          {hasTimer && timeLeft !== null && (
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-xl border text-xs font-mono font-bold transition-all shadow ${
                timeLeft <= 10
                  ? 'bg-rose-950/90 text-rose-300 border-rose-500 animate-pulse'
                  : 'bg-amber-950/80 text-amber-300 border-amber-500/80'
              }`}
            >
              <Clock size={14} className="shrink-0" />
              <span>CÓDIGO ROJO: {timeLeft}s</span>
            </div>
          )}

          {/* Bioethics Committee Button */}
          {!isChallenge && currentCase.bioethicalHint && (
            <button
              onClick={handleOpenCommittee}
              disabled={gameState.committeeConsultationsLeft <= 0}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-bold transition-all shadow ${
                gameState.committeeConsultationsLeft > 0
                  ? 'bg-teal-950/80 hover:bg-teal-900 border-teal-400 text-teal-300 cursor-pointer hover:shadow-teal-400/20'
                  : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
              title="Consultar Comité de Bioética"
            >
              <ShieldCheck size={14} />
              <span>Consultar Comité</span>
              <span className="ml-1 px-1.5 py-0.2 rounded bg-teal-400 text-slate-950 text-[10px] font-mono font-extrabold">
                {gameState.committeeConsultationsLeft}
              </span>
            </button>
          )}

          {/* 12 Case Progress Dots */}
          <div className="hidden sm:flex items-center gap-1.5">
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
          <div className="glass-card rounded-2xl flex flex-col relative overflow-hidden shadow-2xl">
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

              {/* Location Tag */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#64ffda] text-[#020c1b] text-xs font-bold rounded-lg uppercase tracking-wider shadow-md">
                {currentCase.settingName}
              </div>

              {/* Vitals Pill & Animated ECG Monitor Top Right */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <EcgMonitor vitalsStatus={currentCase.patient.vitalsStatus} />
                <span
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold uppercase shadow ${getVitalsBadgeColor(
                    currentCase.patient.vitalsStatus
                  )}`}
                >
                  {currentCase.patient.vitalsStatus}
                </span>
              </div>
            </div>

            {/* Narrative & Case Details Panel */}
            <div className="p-6 bg-slate-900/50 border-t border-slate-700/50 space-y-4">
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
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-700/50 shadow-inner">
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
                      className="flex items-start gap-2 bg-slate-950/40 p-2 rounded-lg border border-slate-700/50 shadow-inner"
                    >
                      <span className="text-[#64ffda] font-bold">•</span>
                      <span>{dataItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Anamnesis / Inquiry Questions Section */}
              {currentCase.inquiryQuestions && currentCase.inquiryQuestions.length > 0 && (
                <div className="space-y-2 pt-1 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono font-bold uppercase text-teal-300">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-teal-400" />
                      <span>Fase de Anamnesis — Indagación Médica</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      Haz clic para hacer preguntas previas
                    </span>
                  </div>

                  <div className="space-y-2">
                    {currentCase.inquiryQuestions.map((iq) => {
                      const isRevealed = revealedInquiries.includes(iq.id);
                      return (
                        <div
                          key={iq.id}
                          className={`p-3 rounded-xl border text-xs transition-all ${
                            isRevealed
                              ? 'bg-teal-950/30 border-teal-500/40 text-slate-200'
                              : 'bg-slate-950/50 hover:bg-slate-900 border-slate-800 text-slate-400 cursor-pointer'
                          }`}
                          onClick={() => handleToggleInquiry(iq.id)}
                        >
                          <div className="flex items-center justify-between font-bold text-teal-300 mb-1">
                            <span className="flex items-center gap-1.5">
                              <Info size={13} />
                              <span>[{iq.category || 'Consulta'}]: {iq.question}</span>
                            </span>
                            {!isRevealed && (
                              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">
                                Preguntar
                              </span>
                            )}
                          </div>
                          {isRevealed && (
                            <p className="mt-1 pl-2 border-l-2 border-teal-400 text-slate-200 italic">
                              "{iq.answer}"
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Central Dilemma Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-teal-950/40 to-slate-950/40 border border-teal-500/30 shadow-inner">
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
          <div className="glass-card p-4 rounded-xl flex items-center gap-2 shadow-md">
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
                className={`glass-card p-4 rounded-xl text-left hover:bg-teal-400/10 transition-all duration-300 border cursor-pointer flex items-start gap-3 group shadow-md ${
                  selectedOptionId === option.id
                    ? 'border-teal-400 bg-teal-400/20 ring-1 ring-teal-400 medical-glow'
                    : 'border-slate-700/50 hover:border-teal-400/50 text-slate-300 hover:shadow-lg hover:-translate-y-1'
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

          {/* Emblemas Recientes Card */}
          <div className="glass-card p-4 rounded-xl shadow-md">
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

      {/* Bioethics Committee Advice Modal */}
      {showCommitteeModal && currentCase.bioethicalHint && (
        <CommitteeModal
          hintText={currentCase.bioethicalHint}
          consultationsLeft={gameState.committeeConsultationsLeft}
          onClose={() => setShowCommitteeModal(false)}
        />
      )}
    </div>
  );
};

