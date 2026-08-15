import React from 'react';
import { SettingType } from '../../types';

interface HospitalSceneProps {
  setting: SettingType | 'campus_exterior';
  className?: string;
  subtleAnimation?: boolean;
}

export const HospitalScene: React.FC<HospitalSceneProps> = ({
  setting,
  className = '',
}) => {
  if (setting === 'campus_exterior') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-slate-950 select-none ${className}`}>
        <svg
          viewBox="0 0 1000 560"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#091326" />
              <stop offset="60%" stopColor="#0f2b48" />
              <stop offset="100%" stopColor="#1a365d" />
            </linearGradient>

            <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Night Sky & Stars */}
          <rect width="1000" height="560" fill="url(#skyGrad)" />
          
          <g fill="#93c5fd" opacity="0.6">
            <circle cx="80" cy="50" r="1.5" />
            <circle cx="220" cy="80" r="1" />
            <circle cx="340" cy="40" r="2" />
            <circle cx="480" cy="70" r="1.5" />
            <circle cx="650" cy="45" r="1" />
            <circle cx="780" cy="85" r="2" />
            <circle cx="910" cy="60" r="1.5" />
          </g>

          {/* Distant City Skyline */}
          <path
            d="M0 380 L60 380 L60 320 L120 320 L120 360 L180 360 L180 290 L240 290 L240 370 L300 370 L300 330 L360 330 L360 390 L600 390 L600 310 L680 310 L680 350 L780 350 L780 280 L860 280 L860 380 L1000 380 L1000 560 L0 560 Z"
            fill="#091428"
            opacity="0.7"
          />

          {/* Main Hospital University Building */}
          {/* Main Tower Left */}
          <rect x="180" y="140" width="220" height="280" rx="4" fill="url(#buildingGrad)" stroke="#334155" strokeWidth="2" />
          {/* Main Tower Central & Glass Atrium */}
          <rect x="360" y="100" width="280" height="320" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          {/* East Wing */}
          <rect x="600" y="160" width="200" height="260" rx="4" fill="url(#buildingGrad)" stroke="#334155" strokeWidth="2" />

          {/* Central Glass Facade & Helipad Structure */}
          <rect x="420" y="140" width="160" height="280" fill="url(#glassGrad)" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" />

          {/* Windows Grid Left Tower */}
          {Array.from({ length: 5 }).map((_, row) => (
            <g key={`w-left-${row}`}>
              {Array.from({ length: 4 }).map((_, col) => {
                const isLit = (row + col) % 2 === 0 || row === 1;
                return (
                  <rect
                    key={`wl-${row}-${col}`}
                    x={200 + col * 45}
                    y={160 + row * 45}
                    width="26"
                    height="28"
                    rx="2"
                    fill={isLit ? '#fef08a' : '#1e3a5f'}
                    opacity={isLit ? 0.85 : 0.6}
                  />
                );
              })}
            </g>
          ))}

          {/* Windows Grid East Wing */}
          {Array.from({ length: 4 }).map((_, row) => (
            <g key={`w-east-${row}`}>
              {Array.from({ length: 3 }).map((_, col) => {
                const isLit = (row * 2 + col) % 3 === 0;
                return (
                  <rect
                    key={`we-${row}-${col}`}
                    x={630 + col * 50}
                    y={180 + row * 48}
                    width="28"
                    height="30"
                    rx="2"
                    fill={isLit ? '#bae6fd' : '#1e3a5f'}
                    opacity={isLit ? 0.9 : 0.6}
                  />
                );
              })}
            </g>
          ))}

          {/* Helipad on Top of Center */}
          <rect x="460" y="76" width="80" height="24" rx="3" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <circle cx="500" cy="88" r="9" fill="none" stroke="#f8fafc" strokeWidth="2" />
          <text x="500" y="92" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="monospace">H</text>

          {/* Hospital Logo & Red Cross Sign */}
          <rect x="440" y="108" width="120" height="24" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <g transform="translate(450, 112)">
            {/* Red Cross Symbol */}
            <rect x="6" y="2" width="4" height="12" fill="#ef4444" rx="1" filter="url(#glow)" />
            <rect x="2" y="6" width="12" height="4" fill="#ef4444" rx="1" filter="url(#glow)" />
          </g>
          <text x="510" y="124" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="bold" letterSpacing="1.5" fontFamily="sans-serif">
            HOSPITAL UNIVERSITARIO
          </text>

          {/* Ground & Campus Plaza */}
          <path d="M0 420 L1000 420 L1000 560 L0 560 Z" fill="#0b1320" />
          <path d="M0 460 L1000 460 L1000 560 L0 560 Z" fill="#060c16" />

          {/* Entrance Canopy */}
          <polygon points="380,420 620,420 650,450 350,450" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Glass Doors Glowing */}
          <rect x="440" y="424" width="120" height="36" fill="#38bdf8" opacity="0.75" filter="url(#glow)" />
          <line x1="500" y1="424" x2="500" y2="460" stroke="#0f172a" strokeWidth="2" />

          {/* Emergency Bay Sign Right */}
          <rect x="680" y="390" width="110" height="30" rx="3" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
          <text x="735" y="410" textAnchor="middle" fill="#fecaca" fontSize="10" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">
            + URGENCIAS
          </text>

          {/* Ambulance parked in bay */}
          <g transform="translate(710, 430)">
            {/* Ambulance Body */}
            <rect x="0" y="10" width="75" height="32" rx="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
            <rect x="52" y="14" width="22" height="18" rx="2" fill="#38bdf8" opacity="0.8" />
            {/* Red Stripe */}
            <rect x="0" y="24" width="75" height="6" fill="#dc2626" />
            {/* Wheels */}
            <circle cx="16" cy="42" r="7" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <circle cx="58" cy="42" r="7" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            {/* Flashing Light */}
            <circle cx="36" cy="8" r="4" fill="#38bdf8" filter="url(#glow)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="44" cy="8" r="4" fill="#ef4444" filter="url(#glow)">
              <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Campus Greenery Trees */}
          <g>
            <path d="M120 460 Q135 370 150 460 Z" fill="#065f46" stroke="#047857" strokeWidth="1" />
            <path d="M100 470 Q115 390 130 470 Z" fill="#047857" />
            <path d="M840 460 Q855 380 870 460 Z" fill="#065f46" stroke="#047857" strokeWidth="1" />
            <path d="M860 470 Q875 400 890 470 Z" fill="#047857" />
          </g>

          {/* Street lamps with glowing light cones */}
          <g>
            <line x1="280" y1="460" x2="280" y2="410" stroke="#64748b" strokeWidth="3" />
            <circle cx="280" cy="408" r="4" fill="#fef08a" filter="url(#glow)" />
            <polygon points="280,410 240,480 320,480" fill="#fef08a" opacity="0.08" />

            <line x1="660" y1="460" x2="660" y2="410" stroke="#64748b" strokeWidth="3" />
            <circle cx="660" cy="408" r="4" fill="#fef08a" filter="url(#glow)" />
            <polygon points="660,410 620,480 700,480" fill="#fef08a" opacity="0.08" />
          </g>
        </svg>
      </div>
    );
  }

  // Room interiors based on setting type
  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-900 select-none ${className}`}>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#0b1120" />
          </linearGradient>
          <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="curtainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0369a1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
          </linearGradient>
          <filter id="intGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Room Base Walls & Floor */}
        <rect width="800" height="340" fill="url(#wallGrad)" />
        <rect y="340" width="800" height="160" fill="url(#floorGrad)" />
        
        {/* Floor Wall Baseboard */}
        <line x1="0" y1="340" x2="800" y2="340" stroke="#334155" strokeWidth="3" />
        <line x1="0" y1="343" x2="800" y2="343" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />

        {/* Architectural Ceiling Lighting Strip */}
        <rect x="150" y="0" width="500" height="16" fill="#f8fafc" opacity="0.8" rx="2" filter="url(#intGlow)" />
        <polygon points="150,16 650,16 750,340 50,340" fill="#f8fafc" opacity="0.04" />

        {/* Hospital Window with city twilight view */}
        <g transform="translate(560, 60)">
          <rect width="180" height="180" rx="6" fill="#091830" stroke="#475569" strokeWidth="4" />
          {/* Sky inside window */}
          <rect x="6" y="6" width="168" height="168" rx="4" fill="#0f2b48" />
          {/* Distant building silhouette */}
          <rect x="20" y="80" width="40" height="90" fill="#081426" />
          <rect x="70" y="60" width="50" height="110" fill="#081426" />
          <rect x="130" y="100" width="35" height="70" fill="#081426" />
          {/* Star dots */}
          <circle cx="45" cy="30" r="1.5" fill="#f8fafc" opacity="0.8" />
          <circle cx="120" cy="25" r="1.5" fill="#f8fafc" opacity="0.8" />
          {/* Window divider cross */}
          <line x1="90" y1="6" x2="90" y2="174" stroke="#475569" strokeWidth="3" />
          <line x1="6" y1="90" x2="174" y2="90" stroke="#475569" strokeWidth="3" />
        </g>

        {/* Setting Specific Backdrop Details */}
        {setting === 'emergency' && (
          <g>
            {/* Red Emergency Sign */}
            <rect x="60" y="40" width="150" height="34" rx="4" fill="#450a0a" stroke="#dc2626" strokeWidth="2" />
            <text x="135" y="62" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              🚨 BOX VITAL TRAUMA
            </text>
            {/* Defibrillator mounted on wall */}
            <rect x="70" y="90" width="60" height="70" rx="6" fill="#991b1b" stroke="#f87171" strokeWidth="2" />
            <circle cx="100" cy="120" r="14" fill="#450a0a" />
            <path d="M100 110 L94 122 L100 122 L98 130 L106 118 L100 118 Z" fill="#fef08a" />
            <text x="100" y="152" textAnchor="middle" fill="#fecaca" fontSize="8" fontWeight="bold">DESFIB</text>
            {/* Oxygen and Vacuum Wall Ports */}
            <g transform="translate(160, 100)">
              <circle cx="10" cy="15" r="8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="30" cy="15" r="8" fill="#eab308" stroke="#fde047" strokeWidth="1.5" />
              <circle cx="50" cy="15" r="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            </g>
          </g>
        )}

        {setting === 'icu' && (
          <g>
            {/* ICU Vital Signs Multi-Monitor */}
            <g transform="translate(60, 50)">
              <rect width="210" height="140" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="4" />
              <rect x="8" y="8" width="194" height="124" rx="4" fill="#060f1e" />
              {/* Green ECG wave */}
              <path d="M15 40 L60 40 L65 25 L70 55 L75 35 L80 40 L190 40" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="175" y="32" fill="#10b981" fontSize="13" fontWeight="bold" fontFamily="monospace">76</text>
              {/* Cyan SpO2 wave */}
              <path d="M15 75 Q40 65 65 75 T115 75 T165 75 L190 75" fill="none" stroke="#06b6d4" strokeWidth="2" />
              <text x="175" y="70" fill="#06b6d4" fontSize="13" fontWeight="bold" fontFamily="monospace">98%</text>
              {/* Yellow Blood Pressure */}
              <text x="20" y="112" fill="#eab308" fontSize="12" fontWeight="bold" fontFamily="monospace">PA: 124/78 (93)</text>
              <text x="145" y="112" fill="#a855f7" fontSize="11" fontWeight="bold" fontFamily="monospace">T: 36.8°C</text>
            </g>
            {/* IV Infusion Pump Rack */}
            <g transform="translate(290, 80)">
              <line x1="25" y1="0" x2="25" y2="300" stroke="#64748b" strokeWidth="4" />
              <rect x="5" y="60" width="40" height="60" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="10" y="70" width="30" height="20" rx="2" fill="#0284c7" opacity="0.8" />
              <circle cx="25" cy="105" r="5" fill="#10b981" />
            </g>
          </g>
        )}

        {setting === 'oncology' && (
          <g>
            {/* Soft Warm Lighting Oncology Suite */}
            <rect x="60" y="45" width="140" height="30" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="130" y="65" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              🎗️ ONCOLOGÍA MÉDICA
            </text>
            {/* Infusion bag with delicate stand */}
            <g transform="translate(80, 95)">
              <line x1="30" y1="0" x2="30" y2="280" stroke="#94a3b8" strokeWidth="3" />
              {/* IV Bag */}
              <rect x="18" y="20" width="24" height="40" rx="6" fill="#e0f2fe" opacity="0.8" stroke="#38bdf8" strokeWidth="1" />
              <line x1="30" y1="60" x2="30" y2="120" stroke="#e0f2fe" strokeWidth="1.5" />
            </g>
          </g>
        )}

        {setting === 'ethics_board' && (
          <g>
            {/* Hospital Ethics Committee Room */}
            <rect x="60" y="45" width="220" height="34" rx="4" fill="#142618" stroke="#22c55e" strokeWidth="1.5" />
            <text x="170" y="67" textAnchor="middle" fill="#bbf7d0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              ⚖️ COMITÉ DE BIOÉTICA ASISTENCIAL
            </text>
            {/* Bookcase / Bioethics Codes on shelf */}
            <rect x="60" y="95" width="180" height="120" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
            <line x1="60" y1="155" x2="240" y2="155" stroke="#334155" strokeWidth="2" />
            {/* Books */}
            <rect x="70" y="110" width="16" height="45" rx="1" fill="#ef4444" />
            <rect x="88" y="105" width="20" height="50" rx="1" fill="#3b82f6" />
            <rect x="110" y="115" width="14" height="40" rx="1" fill="#10b981" />
            <rect x="126" y="108" width="18" height="47" rx="1" fill="#f59e0b" />
            <rect x="75" y="170" width="45" height="15" rx="1" fill="#8b5cf6" />
            <rect x="75" y="188" width="50" height="16" rx="1" fill="#06b6d4" />
          </g>
        )}

        {setting === 'surgery' && (
          <g>
            {/* Surgical Lamp */}
            <g transform="translate(180, 20)">
              <circle cx="80" cy="50" r="45" fill="#f8fafc" opacity="0.9" filter="url(#intGlow)" />
              <circle cx="80" cy="50" r="35" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="65" cy="40" r="10" fill="#fef08a" opacity="0.8" />
              <circle cx="95" cy="40" r="10" fill="#fef08a" opacity="0.8" />
              <circle cx="80" cy="65" r="10" fill="#fef08a" opacity="0.8" />
              {/* Cone of Light */}
              <polygon points="40,90 120,90 220,340 -20,340" fill="#f8fafc" opacity="0.1" />
            </g>
          </g>
        )}

        {setting === 'research_lab' && (
          <g>
            {/* Research Lab Board */}
            <rect x="60" y="45" width="200" height="34" rx="4" fill="#0c2d3a" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="160" y="67" textAnchor="middle" fill="#a5f3fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              🔬 ENSAYOS Y BIOTECNOLOGÍA
            </text>
            {/* Microscope & Lab Glassware on shelf */}
            <g transform="translate(70, 95)">
              <rect width="180" height="110" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              {/* Flasks with glowing compounds */}
              <polygon points="120,180 140,180 145,200 115,200" fill="#06b6d4" opacity="0.8" />
              <polygon points="150,175 170,175 178,200 142,200" fill="#a855f7" opacity="0.8" />
            </g>
          </g>
        )}

        {/* Hospital Medical Privacy Curtain */}
        <path
          d="M0 0 C40 80, 20 180, 50 340 L0 340 Z"
          fill="url(#curtainGrad)"
        />
      </svg>
    </div>
  );
};
