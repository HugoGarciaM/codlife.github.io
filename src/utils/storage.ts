import { BioethicsStats, GameState } from '../types';
import { INITIAL_ACHIEVEMENTS } from '../data/achievements';

const STORAGE_KEY = 'codigo_de_vida_save_v1';

export const INITIAL_STATS: BioethicsStats = {
  autonomy: 50,
  beneficence: 50,
  nonMaleficence: 50,
  justice: 50,
  confidentiality: 50,
  consent: 50,
  integrity: 50,
  communication: 50,
};

export const INITIAL_GAME_STATE: GameState = {
  playerName: '',
  studentTitle: 'Interno en formación',
  currentCaseIndex: 0,
  score: 0,
  stats: INITIAL_STATS,
  consequenceFlags: [],
  decisionHistory: [],
  achievements: INITIAL_ACHIEVEMENTS,
  isCompleted: false,
  soundEnabled: true,
  gameStarted: false,
  hintsUsed: 0,
  gameMode: 'standard',
  committeeConsultationsLeft: 2,
};

export const storageManager = {
  saveGameState(state: GameState): boolean {
    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem(STORAGE_KEY, serialized);
      return true;
    } catch (err) {
      console.error('Error saving game state to localStorage:', err);
      return false;
    }
  },

  loadGameState(): GameState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...INITIAL_GAME_STATE };
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && parsed.stats) {
        return {
          ...INITIAL_GAME_STATE,
          ...parsed,
          stats: { ...INITIAL_STATS, ...parsed.stats },
          achievements: parsed.achievements || INITIAL_ACHIEVEMENTS,
        } as GameState;
      }
      return { ...INITIAL_GAME_STATE };
    } catch (err) {
      console.error('Error loading game state from localStorage:', err);
      return { ...INITIAL_GAME_STATE };
    }
  },

  hasSavedGame(): boolean {
    try {
      const saved = this.loadGameState();
      return !!(
        saved &&
        saved.playerName &&
        (saved.currentCaseIndex > 0 ||
          saved.score > 0 ||
          saved.decisionHistory.length > 0)
      );
    } catch {
      return false;
    }
  },

  clearGameState(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error('Error clearing game state:', err);
    }
  },

  resetGame(): GameState {
    const fresh = { ...INITIAL_GAME_STATE, stats: { ...INITIAL_STATS }, achievements: [...INITIAL_ACHIEVEMENTS] };
    this.saveGameState(fresh);
    return fresh;
  },

  toggleSound(): GameState {
    const current = this.loadGameState();
    const updated = { ...current, soundEnabled: !current.soundEnabled };
    this.saveGameState(updated);
    return updated;
  }
};
