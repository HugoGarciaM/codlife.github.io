import { Achievement, BioethicsStats, GameEnding, RankInfo, RankTier } from '../types';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'badge_autonomy',
    title: '🏆 Defensor de la Autonomía',
    description: 'Reconoces el valor primordial de la voluntad y autodeterminación del paciente.',
    conditionDescription: 'Alcanza o supera 85 puntos en el indicador de Autonomía.',
    icon: 'ShieldCheck',
    color: '#0ea5e9', // Sky blue
    unlocked: false,
  },
  {
    id: 'badge_beneficence',
    title: '❤️ Médico Benefactor',
    description: 'Orientas tus decisiones al máximo bienestar integral y compasión clínica.',
    conditionDescription: 'Alcanza o supera 85 puntos en el indicador de Beneficencia.',
    icon: 'HeartHandshake',
    color: '#ef4444', // Red
    unlocked: false,
  },
  {
    id: 'badge_non_maleficence',
    title: '🛡️ Guardián del Paciente',
    description: 'Primum non nocere: evitas el ensañamiento terapéutico y previenes el daño.',
    conditionDescription: 'Mantén la No Maleficencia en 85 puntos o más.',
    icon: 'ShieldAlert',
    color: '#10b981', // Emerald
    unlocked: false,
  },
  {
    id: 'badge_justice',
    title: '⚖️ Guardián de la Justicia',
    description: 'Distribuyes recursos con equidad, transparencia e imparcialidad clínica.',
    conditionDescription: 'Alcanza o supera 85 puntos en el indicador de Justicia.',
    icon: 'Scale',
    color: '#f59e0b', // Amber
    unlocked: false,
  },
  {
    id: 'badge_confidentiality',
    title: '🔒 Guardián del Secreto',
    description: 'Custodias la privacidad médica y el secreto profesional de manera intachable.',
    conditionDescription: 'No vulneres el secreto profesional en ningún caso clínico.',
    icon: 'Lock',
    color: '#8b5cf6', // Violet
    unlocked: false,
  },
  {
    id: 'badge_critical_thinking',
    title: '🧠 Pensamiento Crítico',
    description: 'Analizas la complejidad ética sin caer en simplismos ni presiones externas.',
    conditionDescription: 'Toma al menos 7 decisiones de máxima calidad ética (Excelentes).',
    icon: 'Brain',
    color: '#06b6d4', // Cyan
    unlocked: false,
  },
  {
    id: 'badge_integrity',
    title: '🩺 Profesional Íntegro',
    description: 'Rechazas conflictos de interés y mantienes los más altos estándares deontológicos.',
    conditionDescription: 'Alcanza o supera 85 puntos en Integridad Profesional.',
    icon: 'Stethoscope',
    color: '#14b8a6', // Teal
    unlocked: false,
  },
  {
    id: 'badge_consent',
    title: '📋 Experto en Consentimiento',
    description: 'Garantizas procesos de información válidos, comprensibles y no coaccionados.',
    conditionDescription: 'Alcanza o supera 85 puntos en Consentimiento Informado.',
    icon: 'FileCheck2',
    color: '#6366f1', // Indigo
    unlocked: false,
  },
  {
    id: 'badge_completed',
    title: '🏥 Médico Responsable',
    description: 'Has enfrentado y resuelto los 12 casos clínicos del internado universitario.',
    conditionDescription: 'Completa la simulación completa de 12 casos.',
    icon: 'Building2',
    color: '#ec4899', // Pink
    unlocked: false,
  },
  {
    id: 'badge_master',
    title: '👑 Maestro de la Bioética',
    description: 'Has demostrado una excelencia moral y razonamiento bioético excepcional.',
    conditionDescription: 'Finaliza el juego con una puntuación global de 900 o más sobre 1000.',
    icon: 'Crown',
    color: '#eab308', // Gold
    unlocked: false,
  },
];

export const RANKS: RankInfo[] = [
  {
    tier: 'ESTUDIANTE NOVATO',
    minScore: 0,
    maxScore: 199,
    color: '#94a3b8',
    badgeBg: 'bg-slate-700/80 text-slate-200 border-slate-500',
    description: 'Iniciando el camino. Requiere mayor reflexión sobre el impacto moral de sus decisiones clínicas.'
  },
  {
    tier: 'APRENDIZ ÉTICO',
    minScore: 200,
    maxScore: 399,
    color: '#38bdf8',
    badgeBg: 'bg-sky-950/80 text-sky-300 border-sky-600',
    description: 'Comprende los conceptos básicos, aunque aún cede ante dilemas con presiones familiares o institucionales.'
  },
  {
    tier: 'PRACTICANTE RESPONSABLE',
    minScore: 400,
    maxScore: 599,
    color: '#34d399',
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-600',
    description: 'Demuestra criterio clínico sólido y respeto por la dignidad del paciente en situaciones cotidianas.'
  },
  {
    tier: 'MÉDICO ÍNTEGRO',
    minScore: 600,
    maxScore: 799,
    color: '#a78bfa',
    badgeBg: 'bg-purple-950/80 text-purple-300 border-purple-600',
    description: 'Equilibra con maestría la beneficencia con la autonomía del paciente en casos complejos.'
  },
  {
    tier: 'ESPECIALISTA EN BIOÉTICA',
    minScore: 800,
    maxScore: 899,
    color: '#f59e0b',
    badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-500',
    description: 'Capacidad sobresaliente para resolver conflictos éticos avanzados, dilemas de investigación y recursos escasos.'
  },
  {
    tier: 'MAESTRO DE LA BIOÉTICA',
    minScore: 900,
    maxScore: 1000,
    color: '#eab308',
    badgeBg: 'bg-yellow-950/90 text-yellow-300 border-yellow-400',
    description: 'Máxima excelencia deontológica y humanista. Modelo a seguir para futuros médicos y comités hospitalarios.'
  }
];

export function getRankForScore(score: number): RankInfo {
  const clampedScore = Math.max(0, Math.min(1000, score));
  return (
    RANKS.find(r => clampedScore >= r.minScore && clampedScore <= r.maxScore) ||
    RANKS[0]
  );
}

export function evaluateAchievements(
  currentAchievements: Achievement[],
  score: number,
  stats: BioethicsStats,
  casesCompleted: number,
  decisionHistory: Array<{ quality: string }> = [],
  flags: string[] = []
): Achievement[] {
  const excellentDecisionsCount = decisionHistory.filter(d => d.quality === 'excellent').length;
  const confidentialityBreached = flags.includes('breached_confidentiality') || stats.confidentiality < 40;

  return currentAchievements.map(ach => {
    if (ach.unlocked) return ach;

    let shouldUnlock = false;

    switch (ach.id) {
      case 'badge_autonomy':
        shouldUnlock = stats.autonomy >= 85;
        break;
      case 'badge_beneficence':
        shouldUnlock = stats.beneficence >= 85;
        break;
      case 'badge_non_maleficence':
        shouldUnlock = stats.nonMaleficence >= 85;
        break;
      case 'badge_justice':
        shouldUnlock = stats.justice >= 85;
        break;
      case 'badge_confidentiality':
        shouldUnlock = casesCompleted >= 3 && !confidentialityBreached && stats.confidentiality >= 70;
        break;
      case 'badge_critical_thinking':
        shouldUnlock = excellentDecisionsCount >= 6;
        break;
      case 'badge_integrity':
        shouldUnlock = stats.integrity >= 85;
        break;
      case 'badge_consent':
        shouldUnlock = stats.consent >= 85;
        break;
      case 'badge_completed':
        shouldUnlock = casesCompleted >= 12;
        break;
      case 'badge_master':
        shouldUnlock = score >= 900 && casesCompleted >= 12;
        break;
    }

    if (shouldUnlock) {
      return {
        ...ach,
        unlocked: true,
        unlockedAt: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
    }

    return ach;
  });
}

export function determineGameEnding(score: number, stats: BioethicsStats): GameEnding {
  if (score >= 800 && stats.autonomy >= 70 && stats.nonMaleficence >= 70) {
    return {
      type: 'FINAL_A',
      title: 'MAESTRO DE LA BIOÉTICA',
      subtitle: 'Graduación con Honores y Reconocimiento del Comité de Bioética',
      narrative: 'Has demostrado un juicio clínico y ético admirable a lo largo de todo tu internado. Has defendido los derechos inalienables de los pacientes sin descuidar el rigor científico ni la calidez humana. Tu nombre ha sido postulado para el Comité de Ética Asistencial del Hospital Universitario.',
      badgeColor: 'border-yellow-400 bg-yellow-950/40 text-yellow-300',
      recommendations: [
        'Mantén este compromiso de liderazgo ético en tu futura especialización médica.',
        'Sigue promoviendo la deliberación prudente y la toma de decisiones compartida.',
        'Eres un ejemplo del equilibrio entre excelencia técnica y calidez deontológica.'
      ]
    };
  } else if (score >= 450) {
    return {
      type: 'FINAL_B',
      title: 'MÉDICO ÉTICAMENTE RESPONSABLE',
      subtitle: 'Aprobación Satisfactoria de la Práctica Clínica',
      narrative: 'Has completado tu formación con un desempeño positivo y un sincero deseo de procurar el bien de tus pacientes. Aunque en situaciones de alta presión o conflicto familiar tuviste dudas o soluciones intermedias, has demostrado compromiso vocacional y capacidad reflexiva.',
      badgeColor: 'border-teal-400 bg-teal-950/40 text-teal-300',
      recommendations: [
        'Profundiza en la diferenciación entre beneficencia paternalista y autonomía genuina.',
        'Revisa los protocolos de voluntades anticipadas y consentimiento por sustitución.',
        'Excelente base médica: continúa ejercitando el análisis crítico de dilemas morales.'
      ]
    };
  } else {
    return {
      type: 'FINAL_C',
      title: 'DEBES REFLEXIONAR SOBRE TUS DECISIONES',
      subtitle: 'Revisión Deontológica Requerida ante el Decanato',
      narrative: 'Tus decisiones durante las guardias mostraron importantes contradicciones éticas: en varias ocasiones se comprometió la confidencialidad, se forzó la voluntad de pacientes competentes o se incurrió en paternalismo injustificado. La medicina moderna exige que la competencia técnica vaya de la mano con el respeto incondicional a la persona.',
      badgeColor: 'border-rose-400 bg-rose-950/40 text-rose-300',
      recommendations: [
        'Revisa exhaustivamente los 4 principios de Beauchamp y Childress.',
        'Nunca antepongas la comodidad del equipo o la presión familiar al derecho del paciente informado.',
        'El error es una oportunidad formativa: reflexiona sobre cada caso y vuelve a intentarlo.'
      ]
    };
  }
}
