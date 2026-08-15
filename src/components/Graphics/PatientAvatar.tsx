import React from 'react';
import { AvatarType } from '../../types';

interface PatientAvatarProps {
  type: AvatarType;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const PatientAvatar: React.FC<PatientAvatarProps> = ({
  type,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-36 h-48',
    lg: 'w-52 h-64',
    full: 'w-full h-full'
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full drop-shadow-xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="skinBase" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fba36e" />
          </radialGradient>
          <radialGradient id="skinDark" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </radialGradient>
          <radialGradient id="skinElderly" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="100%" stopColor="#fed7aa" />
          </radialGradient>
          <linearGradient id="gownBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="coatWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Character Halo Glow */}
        <circle cx="100" cy="110" r="70" fill="#38bdf8" opacity="0.12" filter="url(#softGlow)" />

        {/* Case 01: Carlos - Adult Male in hospital emergency */}
        {type === 'carlos_trauma' && (
          <g>
            {/* Body / Hospital Gown */}
            <path d="M40 240 L60 140 L140 140 L160 240 Z" fill="url(#gownBlue)" />
            {/* Gown collar */}
            <polygon points="100,165 75,140 125,140" fill="#0369a1" />
            {/* Neck */}
            <rect x="85" y="115" width="30" height="30" rx="4" fill="url(#skinBase)" />
            {/* Head */}
            <ellipse cx="100" cy="85" rx="34" ry="40" fill="url(#skinBase)" />
            {/* Dark Hair */}
            <path d="M66 75 C66 45, 134 45, 134 75 C130 55, 70 55, 66 75 Z" fill="#1e293b" />
            <path d="M66 75 L68 95 L74 80 Z" fill="#1e293b" />
            <path d="M134 75 L132 95 L126 80 Z" fill="#1e293b" />
            {/* Eyes - Worried */}
            <ellipse cx="86" cy="82" rx="4" ry="4" fill="#1e293b" />
            <ellipse cx="114" cy="82" rx="4" ry="4" fill="#1e293b" />
            {/* Eyebrows - Questioning */}
            <path d="M80 72 Q86 68 92 74" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M108 74 Q114 68 120 72" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
            {/* Nose & Mouth */}
            <path d="M100 84 L97 93 L103 93" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
            <path d="M92 104 Q100 100 108 104" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
            {/* Hospital Wristband */}
            <rect x="42" y="210" width="12" height="18" rx="2" fill="#ef4444" />
          </g>
        )}

        {/* Case 02: María - Mature Female in Oncology */}
        {type === 'maria_oncology' && (
          <g>
            {/* Soft Warm Shawl and gown */}
            <path d="M35 240 L58 135 L142 135 L165 240 Z" fill="#6366f1" />
            <path d="M50 145 Q100 180 150 145 L155 240 L45 240 Z" fill="#a5b4fc" opacity="0.6" />
            {/* Headscarf / Turban */}
            <ellipse cx="100" cy="82" rx="38" ry="42" fill="#818cf8" />
            <path d="M62 82 Q100 100 138 82 L138 70 Q100 50 62 70 Z" fill="#4f46e5" />
            {/* Face */}
            <ellipse cx="100" cy="90" rx="30" ry="34" fill="url(#skinElderly)" />
            {/* Delicate eyes - serene yet tired */}
            <path d="M84 90 Q89 86 94 90" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M106 90 Q111 86 116 90" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
            {/* Soft serene smile */}
            <path d="M92 110 Q100 116 108 110" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
            {/* Lavender awareness ribbon on shawl */}
            <path d="M140 180 Q145 170 150 180 L142 195 L148 195 Z" fill="#c084fc" />
          </g>
        )}

        {/* Case 03: Lucía - Young Woman in Consultation */}
        {type === 'lucia_infectious' && (
          <g>
            {/* Smart Casual Coat */}
            <path d="M40 240 L60 138 L140 138 L160 240 Z" fill="#0f766e" />
            {/* Blouse */}
            <polygon points="100,160 80,138 120,138" fill="#ccfbf1" />
            {/* Neck */}
            <rect x="88" y="115" width="24" height="26" rx="3" fill="url(#skinBase)" />
            {/* Long Hair Back */}
            <path d="M58 80 C50 140, 60 190, 70 200 L130 200 C140 190, 150 140, 142 80 Z" fill="#451a03" />
            {/* Face */}
            <ellipse cx="100" cy="85" rx="30" ry="36" fill="url(#skinBase)" />
            {/* Front Hair */}
            <path d="M68 70 C75 48, 125 48, 132 70 C120 58, 80 58, 68 70 Z" fill="#78350f" />
            {/* Expressive attentive eyes */}
            <ellipse cx="88" cy="83" rx="4.5" ry="4.5" fill="#1e293b" />
            <ellipse cx="112" cy="83" rx="4.5" ry="4.5" fill="#1e293b" />
            <circle cx="89.5" cy="81.5" r="1.5" fill="#ffffff" />
            <circle cx="113.5" cy="81.5" r="1.5" fill="#ffffff" />
            <path d="M94 104 Q100 102 106 104" fill="none" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* Case 04: Don Roberto - Elderly ICU patient */}
        {type === 'roberto_palliative' && (
          <g>
            {/* ICU Bed Linen */}
            <rect x="20" y="180" width="160" height="60" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M45 180 L65 135 L135 135 L155 180 Z" fill="#93c5fd" />
            {/* Head resting on pillow */}
            <ellipse cx="100" cy="80" rx="48" ry="40" fill="#e2e8f0" />
            <ellipse cx="100" cy="82" rx="32" ry="38" fill="url(#skinElderly)" />
            {/* White/Silver Hair */}
            <path d="M68 78 C68 50, 132 50, 132 78 C126 62, 74 62, 68 78 Z" fill="#e2e8f0" />
            {/* Gentle Closed Eyes (Comfort/Peace) */}
            <path d="M84 84 Q89 88 94 84" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M106 84 Q111 88 116 84" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
            {/* Soft Breathing Prongs / Gentle Cannula */}
            <path d="M72 90 Q100 96 128 90" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
            <rect x="94" y="93" width="12" height="4" rx="2" fill="#38bdf8" opacity="0.8" />
          </g>
        )}

        {/* Case 05: Elena - Postpartum Female with Conviction */}
        {type === 'elena_religious' && (
          <g>
            <path d="M40 240 L60 135 L140 135 L160 240 Z" fill="#d97706" />
            <polygon points="100,165 80,135 120,135" fill="#fef3c7" />
            {/* Braided Hair */}
            <path d="M65 75 C60 140, 68 190, 72 210 L128 210 C132 190, 140 140, 135 75 Z" fill="#713f12" />
            <ellipse cx="100" cy="85" rx="31" ry="36" fill="url(#skinBase)" />
            <path d="M68 70 Q100 50 132 70 Z" fill="#854d0e" />
            {/* Firm, Dignified Gaze */}
            <ellipse cx="87" cy="82" rx="4" ry="4" fill="#292524" />
            <ellipse cx="113" cy="82" rx="4" ry="4" fill="#292524" />
            <line x1="82" y1="74" x2="94" y2="74" stroke="#44403c" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="106" y1="74" x2="118" y2="74" stroke="#44403c" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M93 103 L107 103" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
            {/* Legal Folder Badge */}
            <rect x="135" y="170" width="22" height="30" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
            <line x1="140" y1="178" x2="152" y2="178" stroke="#854d0e" strokeWidth="1.5" />
            <line x1="140" y1="184" x2="150" y2="184" stroke="#854d0e" strokeWidth="1.5" />
          </g>
        )}

        {/* Case 06: David - Coma Trauma Patient */}
        {type === 'david_coma' && (
          <g>
            <rect x="25" y="170" width="150" height="70" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <path d="M45 170 L65 130 L135 130 L155 170 Z" fill="#0284c7" />
            <ellipse cx="100" cy="80" rx="45" ry="38" fill="#334155" />
            <ellipse cx="100" cy="82" rx="32" ry="37" fill="url(#skinBase)" />
            {/* Head Bandage / Trauma Dressing */}
            <path d="M68 62 L132 62 L130 78 L70 78 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="110" y="65" width="14" height="10" fill="#fca5a5" opacity="0.6" />
            {/* Closed Eyes */}
            <line x1="84" y1="86" x2="94" y2="86" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="106" y1="86" x2="116" y2="86" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            {/* Endotracheal Tube */}
            <rect x="96" y="98" width="8" height="36" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="91" y="99" width="18" height="6" rx="2" fill="#f8fafc" />
          </g>
        )}

        {/* Case 07: Sofía - Adolescent 16yo */}
        {type === 'sofia_adolescent' && (
          <g>
            {/* Casual Hoodie */}
            <path d="M40 240 L58 135 L142 135 L160 240 Z" fill="#ec4899" />
            <circle cx="100" cy="140" r="14" fill="#f472b6" />
            {/* Ponytail Hair */}
            <ellipse cx="130" cy="70" rx="14" ry="24" fill="#18181b" />
            <ellipse cx="100" cy="85" rx="30" ry="35" fill="url(#skinBase)" />
            <path d="M70 72 C75 52, 125 52, 130 72 Z" fill="#18181b" />
            {/* Young, bright eyes */}
            <ellipse cx="88" cy="82" rx="4.5" ry="4.5" fill="#0f172a" />
            <ellipse cx="112" cy="82" rx="4.5" ry="4.5" fill="#0f172a" />
            <circle cx="90" cy="80" r="1.5" fill="#ffffff" />
            <circle cx="114" cy="80" r="1.5" fill="#ffffff" />
            <path d="M93 103 Q100 106 107 103" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* Case 08: Mateo - Elderly Teacher with Family */}
        {type === 'mateo_terminal_family' && (
          <g>
            {/* Hospital Gown with cardigan */}
            <path d="M40 240 L58 135 L142 135 L160 240 Z" fill="#475569" />
            <polygon points="100,165 80,135 120,135" fill="#94a3b8" />
            {/* Head */}
            <ellipse cx="100" cy="85" rx="32" ry="38" fill="url(#skinElderly)" />
            {/* Grey Hair at temples */}
            <path d="M68 85 Q68 55 100 55 Q132 55 132 85 Q125 65 100 65 Q75 65 68 85 Z" fill="#94a3b8" />
            {/* Glasses */}
            <rect x="80" y="76" width="16" height="12" rx="3" fill="none" stroke="#d97706" strokeWidth="2" />
            <rect x="104" y="76" width="16" height="12" rx="3" fill="none" stroke="#d97706" strokeWidth="2" />
            <line x1="96" y1="82" x2="104" y2="82" stroke="#d97706" strokeWidth="2" />
            {/* Wise, seeking truth eyes */}
            <circle cx="88" cy="82" r="3" fill="#1e293b" />
            <circle cx="112" cy="82" r="3" fill="#1e293b" />
            <path d="M94 105 L106 105" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* Case 09: Pedro - Triage Crisis */}
        {type === 'pedro_triage' && (
          <g>
            {/* Two Patient Silhouettes balancing on a Scale */}
            <path d="M30 240 L50 160 L95 160 L110 240 Z" fill="#0284c7" />
            <ellipse cx="72" cy="125" rx="20" ry="24" fill="url(#skinBase)" />
            <path d="M90 240 L105 160 L150 160 L170 240 Z" fill="#64748b" />
            <ellipse cx="128" cy="125" rx="20" ry="24" fill="url(#skinElderly)" />
            {/* Scale of Justice Overlay in center */}
            <g transform="translate(70, 30)">
              <line x1="30" y1="10" x2="30" y2="60" stroke="#f59e0b" strokeWidth="3" />
              <line x1="5" y1="20" x2="55" y2="20" stroke="#f59e0b" strokeWidth="2.5" />
              {/* Pans */}
              <polygon points="5,20 -5,35 15,35" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
              <polygon points="55,20 45,35 65,35" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            </g>
          </g>
        )}

        {/* Case 10: Donante - Organ Donation & Transplant */}
        {type === 'donante_transplant' && (
          <g>
            {/* Donor silhouette with glowing Heart / Gift symbol */}
            <path d="M40 240 L60 135 L140 135 L160 240 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="100" cy="85" rx="32" ry="38" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Glowing Golden Heart of Life in chest */}
            <g transform="translate(80, 145)" filter="url(#softGlow)">
              <path
                d="M20 10 C10 0, 0 10, 20 30 C40 10, 30 0, 20 10 Z"
                fill="#ef4444"
                stroke="#fecaca"
                strokeWidth="1.5"
              />
              <circle cx="20" cy="18" r="4" fill="#fef08a" />
            </g>
            {/* Laurel of Honor */}
            <path d="M60 90 Q100 40 140 90" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="4 2" />
          </g>
        )}

        {/* Case 11: Clara - Research Ethics */}
        {type === 'clara_research' && (
          <g>
            <path d="M40 240 L60 135 L140 135 L160 240 Z" fill="#065f46" />
            <polygon points="100,165 80,135 120,135" fill="#a7f3d0" />
            <ellipse cx="100" cy="85" rx="31" ry="36" fill="url(#skinDark)" />
            {/* Curly hair */}
            <circle cx="70" cy="65" r="14" fill="#1c1917" />
            <circle cx="100" cy="55" r="15" fill="#1c1917" />
            <circle cx="130" cy="65" r="14" fill="#1c1917" />
            {/* Thoughtful Eyes */}
            <ellipse cx="88" cy="83" rx="4" ry="4" fill="#fafaf9" />
            <ellipse cx="112" cy="83" rx="4" ry="4" fill="#fafaf9" />
            <circle cx="88" cy="83" r="2.5" fill="#1c1917" />
            <circle cx="112" cy="83" r="2.5" fill="#1c1917" />
            {/* Research Protocol Document in hand */}
            <rect x="35" y="170" width="28" height="38" rx="3" fill="#f8fafc" stroke="#059669" strokeWidth="1.5" />
            <line x1="40" y1="180" x2="58" y2="180" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="40" y1="188" x2="58" y2="188" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="40" y1="196" x2="52" y2="196" stroke="#94a3b8" strokeWidth="1.5" />
          </g>
        )}

        {/* Case 12: AI Diagnostics System / Neural Core */}
        {type === 'ai_diagnostics' && (
          <g>
            {/* Futuristic AI Clinical Terminal */}
            <rect x="30" y="30" width="140" height="170" rx="14" fill="#020617" stroke="#06b6d4" strokeWidth="3" filter="url(#softGlow)" />
            {/* Neural Matrix Display */}
            <rect x="42" y="42" width="116" height="146" rx="8" fill="#041527" />
            {/* Microchip Circuitry */}
            <circle cx="100" cy="95" r="28" fill="#082f49" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="100" cy="95" r="12" fill="#06b6d4" filter="url(#softGlow)" />
            {/* Connecting node lines */}
            <line x1="100" y1="67" x2="100" y2="48" stroke="#38bdf8" strokeWidth="2" />
            <line x1="100" y1="123" x2="100" y2="148" stroke="#38bdf8" strokeWidth="2" />
            <line x1="72" y1="95" x2="50" y2="95" stroke="#38bdf8" strokeWidth="2" />
            <line x1="128" y1="95" x2="150" y2="95" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="100" cy="48" r="4" fill="#38bdf8" />
            <circle cx="100" cy="148" r="4" fill="#38bdf8" />
            <circle cx="50" cy="95" r="4" fill="#38bdf8" />
            <circle cx="150" cy="95" r="4" fill="#38bdf8" />
            <text x="100" y="172" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
              MEDIPREDICT-AI
            </text>
          </g>
        )}

        {/* Doctor Mentor / Player default */}
        {type === 'doctor_mentor' && (
          <g>
            {/* Medical White Coat */}
            <path d="M40 240 L58 135 L142 135 L160 240 Z" fill="url(#coatWhite)" stroke="#94a3b8" strokeWidth="1" />
            {/* Teal Scrubs Inner */}
            <polygon points="100,165 75,135 125,135" fill="#0d9488" />
            {/* Stethoscope */}
            <path d="M72 135 Q100 190 128 135" fill="none" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="188" r="6" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
            {/* Head */}
            <ellipse cx="100" cy="85" rx="31" ry="36" fill="url(#skinBase)" />
            {/* Hair */}
            <path d="M68 75 C68 45, 132 45, 132 75 C124 58, 76 58, 68 75 Z" fill="#334155" />
            {/* Friendly, Professional Eyes */}
            <ellipse cx="88" cy="82" rx="4" ry="4" fill="#0f172a" />
            <ellipse cx="112" cy="82" rx="4" ry="4" fill="#0f172a" />
            <circle cx="89.5" cy="80.5" r="1.5" fill="#ffffff" />
            <circle cx="113.5" cy="80.5" r="1.5" fill="#ffffff" />
            {/* Confident gentle smile */}
            <path d="M92 102 Q100 108 108 102" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
            {/* ID Badge on Coat */}
            <rect x="62" y="170" width="16" height="24" rx="2" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="1.5" />
            <line x1="65" y1="176" x2="75" y2="176" stroke="#0284c7" strokeWidth="2" />
          </g>
        )}
      </svg>
    </div>
  );
};
