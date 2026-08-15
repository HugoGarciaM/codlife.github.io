import React, { useState, useEffect } from 'react';
import { GameState, CaseOption, BioethicsStats, DecisionRecord } from './types';
import { CLINICAL_CASES } from './data/cases';
import { evaluateAchievements } from './data/achievements';
import { storageManager } from './utils/storage';
import { soundManager } from './utils/audio';

import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { ProfileModal } from './components/ProfileModal';
import { CaseView } from './components/CaseView';
import { DecisionModal } from './components/DecisionModal';
import { AchievementsModal } from './components/AchievementsModal';
import { GlossaryModal } from './components/GlossaryModal';
import { HowToPlayModal } from './components/HowToPlayModal';
import { CreditsModal } from './components/CreditsModal';
import { FinalResultsScreen } from './components/FinalResultsScreen';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() => storageManager.loadGameState());
  const [hasSave, setHasSave] = useState<boolean>(() => storageManager.hasSavedGame());
  const [currentScreen, setCurrentScreen] = useState<'start' | 'game' | 'results'>('start');

  // Modal dialog states
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [showAchievementsModal, setShowAchievementsModal] = useState<boolean>(false);
  const [showGlossaryModal, setShowGlossaryModal] = useState<boolean>(false);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState<boolean>(false);
  const [showCreditsModal, setShowCreditsModal] = useState<boolean>(false);

  // Active decision modal feedback
  const [activeDecisionOption, setActiveDecisionOption] = useState<CaseOption | null>(null);
  const [previousStatsSnapshot, setPreviousStatsSnapshot] = useState<BioethicsStats>(gameState.stats);

  // Sync sound settings with audio engine
  useEffect(() => {
    soundManager.setMuted(!gameState.soundEnabled);
  }, [gameState.soundEnabled]);

  // Check if save exists on mount
  useEffect(() => {
    setHasSave(storageManager.hasSavedGame());
    if (gameState.isCompleted) {
      setCurrentScreen('results');
    }
  }, []);

  const handleToggleSound = () => {
    const updated = storageManager.toggleSound();
    setGameState(updated);
  };

  const handleStartNew = () => {
    setShowProfileModal(true);
  };

  const handleConfirmProfile = (name: string) => {
    const freshState = storageManager.resetGame();
    freshState.playerName = name;
    freshState.studentTitle = 'Interno en formación';
    storageManager.saveGameState(freshState);
    setGameState(freshState);
    setHasSave(true);
    setShowProfileModal(false);
    setCurrentScreen('game');
  };

  const handleContinue = () => {
    const loaded = storageManager.loadGameState();
    setGameState(loaded);
    if (loaded.isCompleted) {
      setCurrentScreen('results');
    } else {
      setCurrentScreen('game');
    }
  };

  const handleResetGame = () => {
    if (window.confirm('¿Deseas reiniciar la simulación? Se restablecerá todo el progreso de tus casos clínicos.')) {
      const reset = storageManager.resetGame();
      setGameState(reset);
      setHasSave(false);
      setActiveDecisionOption(null);
      setCurrentScreen('start');
    }
  };

  const handleSelectOption = (option: CaseOption) => {
    setPreviousStatsSnapshot({ ...gameState.stats });

    // 1. Calculate new stats
    const newStats: BioethicsStats = {
      autonomy: Math.max(0, Math.min(100, gameState.stats.autonomy + (option.statDeltas.autonomy || 0))),
      beneficence: Math.max(0, Math.min(100, gameState.stats.beneficence + (option.statDeltas.beneficence || 0))),
      nonMaleficence: Math.max(0, Math.min(100, gameState.stats.nonMaleficence + (option.statDeltas.nonMaleficence || 0))),
      justice: Math.max(0, Math.min(100, gameState.stats.justice + (option.statDeltas.justice || 0))),
      confidentiality: Math.max(0, Math.min(100, gameState.stats.confidentiality + (option.statDeltas.confidentiality || 0))),
      consent: Math.max(0, Math.min(100, gameState.stats.consent + (option.statDeltas.consent || 0))),
      integrity: Math.max(0, Math.min(100, gameState.stats.integrity + (option.statDeltas.integrity || 0))),
      communication: Math.max(0, Math.min(100, gameState.stats.communication + (option.statDeltas.communication || 0))),
    };

    // 2. Calculate new score (0 to 1000)
    const newScore = Math.max(0, Math.min(1000, gameState.score + option.scoreDelta));

    // 3. Add consequence flag if any
    const updatedFlags = [...gameState.consequenceFlags];
    if (option.consequenceFlag && !updatedFlags.includes(option.consequenceFlag)) {
      updatedFlags.push(option.consequenceFlag);
    }

    // 4. Record decision history
    const currentCase = CLINICAL_CASES[gameState.currentCaseIndex];
    const decisionRecord: DecisionRecord = {
      caseId: currentCase.id,
      caseTitle: currentCase.title,
      selectedOption: option.id,
      optionText: option.text,
      resultTitle: option.resultTitle,
      quality: option.quality,
      scoreDelta: option.scoreDelta,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updatedHistory = [...gameState.decisionHistory, decisionRecord];

    // 5. Evaluate and unlock achievements
    const updatedAchievements = evaluateAchievements(
      gameState.achievements,
      newScore,
      newStats,
      gameState.currentCaseIndex + 1,
      updatedHistory,
      updatedFlags
    );

    const updatedState: GameState = {
      ...gameState,
      score: newScore,
      stats: newStats,
      consequenceFlags: updatedFlags,
      decisionHistory: updatedHistory,
      achievements: updatedAchievements
    };

    setGameState(updatedState);
    storageManager.saveGameState(updatedState);
    setActiveDecisionOption(option);
  };

  const handleProceedFromDecision = () => {
    setActiveDecisionOption(null);
    const nextIndex = gameState.currentCaseIndex + 1;

    if (nextIndex >= CLINICAL_CASES.length) {
      // Completed all 12 cases!
      const finalAchievements = evaluateAchievements(
        gameState.achievements,
        gameState.score,
        gameState.stats,
        CLINICAL_CASES.length,
        gameState.decisionHistory,
        gameState.consequenceFlags
      );

      const finalState: GameState = {
        ...gameState,
        isCompleted: true,
        currentCaseIndex: CLINICAL_CASES.length - 1,
        achievements: finalAchievements
      };

      setGameState(finalState);
      storageManager.saveGameState(finalState);
      setCurrentScreen('results');
    } else {
      const nextState: GameState = {
        ...gameState,
        currentCaseIndex: nextIndex
      };
      setGameState(nextState);
      storageManager.saveGameState(nextState);
    }
  };

  const currentCase = CLINICAL_CASES[gameState.currentCaseIndex] || CLINICAL_CASES[0];
  const isLastCase = gameState.currentCaseIndex >= CLINICAL_CASES.length - 1;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased flex flex-col selection:bg-teal-500 selection:text-slate-950">
      {/* Global Application Header */}
      <Header
        gameState={gameState}
        onToggleSound={handleToggleSound}
        onOpenAchievements={() => setShowAchievementsModal(true)}
        onOpenGlossary={() => setShowGlossaryModal(true)}
        onResetGame={handleResetGame}
      />

      {/* Main Screen Body View Router */}
      <main className="flex-1 flex flex-col">
        {currentScreen === 'start' && (
          <StartScreen
            hasSave={hasSave}
            savedPlayerName={gameState.playerName}
            savedScore={gameState.score}
            onStartNew={handleStartNew}
            onContinue={handleContinue}
            onOpenAchievements={() => setShowAchievementsModal(true)}
            onOpenHowToPlay={() => setShowHowToPlayModal(true)}
            onOpenGlossary={() => setShowGlossaryModal(true)}
            onOpenCredits={() => setShowCreditsModal(true)}
          />
        )}

        {currentScreen === 'game' && (
          <CaseView
            currentCase={currentCase}
            gameState={gameState}
            onSelectOption={handleSelectOption}
          />
        )}

        {currentScreen === 'results' && (
          <FinalResultsScreen
            gameState={gameState}
            onRestart={() => {
              const reset = storageManager.resetGame();
              setGameState(reset);
              setActiveDecisionOption(null);
              setShowProfileModal(true);
            }}
            onOpenGlossary={() => setShowGlossaryModal(true)}
          />
        )}
      </main>

      {/* Decision Outcome & Bioethical Explanation Modal */}
      {activeDecisionOption && (
        <DecisionModal
          option={activeDecisionOption}
          previousStats={previousStatsSnapshot}
          onProceed={handleProceedFromDecision}
          isLastCase={isLastCase}
        />
      )}

      {/* Student Profile Initialization Modal */}
      {showProfileModal && (
        <ProfileModal
          initialName={gameState.playerName || ''}
          onConfirm={handleConfirmProfile}
          onCancel={() => setShowProfileModal(false)}
        />
      )}

      {/* Achievements Gallery Modal */}
      {showAchievementsModal && (
        <AchievementsModal
          achievements={gameState.achievements}
          onClose={() => setShowAchievementsModal(false)}
        />
      )}

      {/* Bioethics Glossary Modal */}
      {showGlossaryModal && (
        <GlossaryModal onClose={() => setShowGlossaryModal(false)} />
      )}

      {/* How To Play Instructions Modal */}
      {showHowToPlayModal && (
        <HowToPlayModal onClose={() => setShowHowToPlayModal(false)} />
      )}

      {/* Credits and Academic References Modal */}
      {showCreditsModal && (
        <CreditsModal onClose={() => setShowCreditsModal(false)} />
      )}
    </div>
  );
}
