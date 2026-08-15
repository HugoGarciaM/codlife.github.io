export interface BioethicsStats {
  autonomy: number;        // 0 - 100 (Default: 50)
  beneficence: number;     // 0 - 100 (Default: 50)
  nonMaleficence: number;  // 0 - 100 (Default: 50)
  justice: number;         // 0 - 100 (Default: 50)
  // Secondary metrics
  confidentiality: number; // 0 - 100 (Default: 50)
  consent: number;         // 0 - 100 (Default: 50)
  integrity: number;       // 0 - 100 (Default: 50)
  communication: number;   // 0 - 100 (Default: 50)
}

export type AvatarType = 
  | 'maria_oncology' 
  | 'carlos_trauma' 
  | 'lucia_infectious' 
  | 'roberto_palliative' 
  | 'elena_religious' 
  | 'david_coma' 
  | 'sofia_adolescent' 
  | 'mateo_terminal_family' 
  | 'pedro_triage' 
  | 'donante_transplant' 
  | 'clara_research' 
  | 'ai_diagnostics'
  | 'doctor_mentor';

export type SettingType = 
  | 'emergency' 
  | 'oncology' 
  | 'icu' 
  | 'consultation' 
  | 'ethics_board' 
  | 'surgery' 
  | 'research_lab';

export type DecisionQuality = 'excellent' | 'adequate' | 'questionable' | 'problematic';

export interface CaseOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  quality: DecisionQuality;
  scoreDelta: number;
  statDeltas: Partial<BioethicsStats>;
  resultTitle: string;
  outcomeNarrative: string;
  bioethicalExplanation: string;
  principlesAffected: {
    name: string;
    positive: boolean;
    description: string;
  }[];
  consequenceFlag?: string;
}

export interface ClinicalCase {
  id: number;
  level: 1 | 2 | 3;
  levelName: string;
  title: string;
  subtitle: string;
  patient: {
    name: string;
    age: number | string;
    diagnosis: string;
    location: string;
    vitalsStatus: 'Estable' | 'Grave' | 'Crítico' | 'En observación';
    avatarType: AvatarType;
  };
  setting: SettingType;
  settingName: string;
  clinicalContext: string;
  clinicalData: string[];
  bioethicalDilemma: string;
  question: string;
  options: CaseOption[];
  conditionalConsequences?: {
    requiredFlag: string;
    consequenceNotice: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  conditionDescription: string;
  icon: string;
  color: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface DecisionRecord {
  caseId: number;
  caseTitle: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  optionText: string;
  quality: DecisionQuality;
  scoreDelta: number;
  resultTitle: string;
  timestamp: string;
}

export interface GameState {
  playerName: string;
  studentTitle: string;
  currentCaseIndex: number; // 0 to 11
  score: number; // 0 to 1000
  stats: BioethicsStats;
  consequenceFlags: string[];
  decisionHistory: DecisionRecord[];
  achievements: Achievement[];
  isCompleted: boolean;
  soundEnabled: boolean;
  gameStarted: boolean;
  hintsUsed: number;
}

export type RankTier = 
  | 'ESTUDIANTE NOVATO'
  | 'APRENDIZ ÉTICO'
  | 'PRACTICANTE RESPONSABLE'
  | 'MÉDICO ÍNTEGRO'
  | 'ESPECIALISTA EN BIOÉTICA'
  | 'MAESTRO DE LA BIOÉTICA';

export interface RankInfo {
  tier: RankTier;
  minScore: number;
  maxScore: number;
  color: string;
  badgeBg: string;
  description: string;
}

export type EndingType = 'FINAL_A' | 'FINAL_B' | 'FINAL_C';

export interface GameEnding {
  type: EndingType;
  title: string;
  subtitle: string;
  narrative: string;
  recommendations: string[];
  badgeColor: string;
}
