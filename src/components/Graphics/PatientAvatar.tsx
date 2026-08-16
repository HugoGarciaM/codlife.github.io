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
    sm: 'w-16 h-20',
    md: 'w-44 h-56',
    lg: 'w-64 h-80',
    full: 'w-full h-full'
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}>
      {/* 
        High-Definition Professional RPG Pixel Art Engine (64x64 Canvas)
        Renders crisp pixel clusters, multi-tone shading, highlights, depth & ambient occlusion.
      */}
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] animate-float"
        style={{ imageRendering: 'pixelated' }}
        shapeRendering="crispEdges"
      >
        {/* Ground Ambient Shadow */}
        <ellipse cx="32" cy="60" rx="20" ry="3" fill="#020617" opacity="0.6" />

        {/* =========================================================
            CASE 01: CARLOS (carlos_trauma) - Adulto en Urgencias (Apendicitis)
            Paleta: Piel (#fff7ed, #fed7aa, #f97316, #ea580c, #7c2d12)
                    Cabello (#312e81, #1e1b4b, #0f172a)
                    Bata (#38bdf8, #0284c7, #0369a1, #0c4a6e)
           ========================================================= */}
        {type === 'carlos_trauma' && (
          <g>
            {/* Hair Cluster with Highlights & Shadows */}
            <rect x="22" y="6" width="20" height="4" fill="#312e81" />
            <rect x="20" y="10" width="24" height="4" fill="#1e1b4b" />
            <rect x="18" y="14" width="6" height="8" fill="#1e1b4b" />
            <rect x="40" y="14" width="6" height="8" fill="#1e1b4b" />
            {/* Hair Highlights */}
            <rect x="24" y="8" width="6" height="2" fill="#6366f1" />
            <rect x="32" y="8" width="4" height="2" fill="#6366f1" />

            {/* Face Base & Midtones */}
            <rect x="24" y="14" width="16" height="4" fill="#ffedd5" />
            <rect x="22" y="18" width="20" height="14" fill="#fed7aa" />
            {/* Cheek Shading & Chin Shadow */}
            <rect x="22" y="28" width="4" height="4" fill="#fdba74" />
            <rect x="38" y="28" width="4" height="4" fill="#fdba74" />
            <rect x="26" y="30" width="12" height="4" fill="#f97316" opacity="0.4" />
            <rect x="28" y="32" width="8" height="2" fill="#ea580c" />

            {/* Worried Slanted Eyebrows */}
            <rect x="24" y="18" width="6" height="2" fill="#0f172a" />
            <rect x="34" y="18" width="6" height="2" fill="#0f172a" />
            <rect x="28" y="17" width="2" height="1" fill="#0f172a" />
            <rect x="34" y="17" width="2" height="1" fill="#0f172a" />

            {/* Expressive Nervous Eyes */}
            <rect x="24" y="21" width="4" height="4" fill="#0f172a" />
            <rect x="36" y="21" width="4" height="4" fill="#0f172a" />
            {/* Pupil Highlights */}
            <rect x="25" y="21" width="2" height="2" fill="#ffffff" />
            <rect x="37" y="21" width="2" height="2" fill="#ffffff" />

            {/* Sweat Drop (Anxiety detail) */}
            <rect x="42" y="18" width="2" height="3" fill="#38bdf8" />

            {/* Nose & Nervous Mouth */}
            <rect x="31" y="24" width="2" height="3" fill="#ea580c" />
            <rect x="28" y="28" width="8" height="2" fill="#9a3412" />

            {/* Neck */}
            <rect x="28" y="34" width="8" height="4" fill="#fed7aa" />
            <rect x="28" y="36" width="8" height="2" fill="#fdba74" />

            {/* Hospital Gown with Folds & Shading */}
            <rect x="18" y="38" width="28" height="18" fill="#0284c7" />
            <rect x="22" y="38" width="20" height="18" fill="#38bdf8" />
            {/* Gown Fold Shading */}
            <rect x="18" y="44" width="4" height="12" fill="#0369a1" />
            <rect x="42" y="44" width="4" height="12" fill="#0369a1" />
            <rect x="28" y="38" width="8" height="6" fill="#0c4a6e" />

            {/* Red Hospital Wristband on left arm */}
            <rect x="14" y="48" width="4" height="4" fill="#ef4444" />
            <rect x="15" y="49" width="2" height="2" fill="#fecaca" />

            {/* Slippers / Feet */}
            <rect x="22" y="56" width="8" height="4" fill="#1e293b" />
            <rect x="34" y="56" width="8" height="4" fill="#1e293b" />
          </g>
        )}

        {/* =========================================================
            CASE 02: MARÍA (maria_oncology) - Oncología / Turbante
            Paleta: Pañuelo (#818cf8, #6366f1, #4f46e5, #3730a3)
                    Piel (#fff7ed, #ffedd5, #fed7aa, #f97316)
                    Manta (#c084fc, #a855f7, #9333ea, #581c87)
           ========================================================= */}
        {type === 'maria_oncology' && (
          <g>
            {/* Patterned Turban Headscarf Volume */}
            <rect x="20" y="6" width="24" height="6" fill="#818cf8" />
            <rect x="16" y="10" width="32" height="8" fill="#6366f1" />
            <rect x="14" y="16" width="6" height="12" fill="#4f46e5" />
            <rect x="44" y="16" width="6" height="12" fill="#4f46e5" />
            {/* Turban Fabric Folds & Highlights */}
            <rect x="22" y="8" width="10" height="2" fill="#c7d2fe" />
            <rect x="28" y="12" width="14" height="2" fill="#3730a3" />

            {/* Serene Elderly Face */}
            <rect x="20" y="18" width="24" height="14" fill="#ffedd5" />
            <rect x="22" y="30" width="20" height="4" fill="#fed7aa" />

            {/* Gentle Closed Eyes (Lashes detail) */}
            <rect x="24" y="24" width="6" height="2" fill="#334155" />
            <rect x="34" y="24" width="6" height="2" fill="#334155" />
            <rect x="24" y="23" width="2" height="1" fill="#64748b" />
            <rect x="38" y="23" width="2" height="1" fill="#64748b" />

            {/* Soft Warm Smile */}
            <rect x="28" y="29" width="8" height="2" fill="#c2410c" />
            <rect x="30" y="30" width="4" height="1" fill="#ea580c" />

            {/* Knitted Cardigan & Lavender Ribbon */}
            <rect x="16" y="34" width="32" height="22" fill="#a855f7" />
            <rect x="20" y="34" width="24" height="22" fill="#c084fc" />
            <rect x="16" y="42" width="6" height="14" fill="#7e22ce" />
            <rect x="42" y="42" width="6" height="14" fill="#7e22ce" />

            {/* Lavender Awareness Ribbon */}
            <rect x="36" y="40" width="4" height="6" fill="#e9d5ff" />
            <rect x="37" y="41" width="2" height="4" fill="#a855f7" />
          </g>
        )}

        {/* =========================================================
            CASE 03: LUCÍA (lucia_infectious) - Joven en Consulta
            Paleta: Cabello (#78350f, #451a03, #292524)
                    Chaqueta (#0f766e, #0d9488, #115e59, #042f2e)
                    Blusa (#ffffff, #f1f5f9, #cbd5e1)
           ========================================================= */}
        {type === 'lucia_infectious' && (
          <g>
            {/* Long Rich Hair Back Volume */}
            <rect x="14" y="8" width="36" height="32" fill="#292524" />
            <rect x="16" y="6" width="32" height="34" fill="#451a03" />

            {/* Face Skin */}
            <rect x="22" y="16" width="20" height="14" fill="#fed7aa" />
            <rect x="24" y="28" width="16" height="4" fill="#fdba74" />

            {/* Front Bangs & Layers */}
            <rect x="18" y="8" width="28" height="8" fill="#78350f" />
            <rect x="20" y="10" width="12" height="4" fill="#b45309" />
            <rect x="16" y="14" width="6" height="18" fill="#78350f" />
            <rect x="42" y="14" width="6" height="18" fill="#78350f" />

            {/* Big Anime RPG Eyes with Double Highlights */}
            <rect x="25" y="20" width="5" height="5" fill="#0f172a" />
            <rect x="34" y="20" width="5" height="5" fill="#0f172a" />
            <rect x="25" y="20" width="2" height="2" fill="#ffffff" />
            <rect x="34" y="20" width="2" height="2" fill="#ffffff" />
            <rect x="28" y="23" width="1" height="1" fill="#38bdf8" />
            <rect x="37" y="23" width="1" height="1" fill="#38bdf8" />

            {/* Lips */}
            <rect x="29" y="27" width="6" height="2" fill="#be123c" />

            {/* Emerald Jacket & White Blouse */}
            <rect x="14" y="32" width="36" height="26" fill="#0d9488" />
            <rect x="26" y="32" width="12" height="14" fill="#ffffff" />
            <rect x="28" y="36" width="8" height="10" fill="#f1f5f9" />

            {/* Jacket Lapels & Shadows */}
            <rect x="14" y="36" width="6" height="22" fill="#0f766e" />
            <rect x="44" y="36" width="6" height="22" fill="#0f766e" />
            <rect x="24" y="46" width="2" height="3" fill="#fbbf24" />
          </g>
        )}

        {/* =========================================================
            CASE 04: ROBERTO (roberto_palliative) - Don Roberto en UCI
            Paleta: Almohada (#f1f5f9, #e2e8f0, #94a3b8)
                    Manta (#93c5fd, #60a5fa, #2563eb, #1e40af)
                    Cánula (#38bdf8, #7dd3fc)
           ========================================================= */}
        {type === 'roberto_palliative' && (
          <g>
            {/* ICU Bed & Pillow Cluster */}
            <rect x="8" y="16" width="48" height="24" fill="#94a3b8" />
            <rect x="10" y="18" width="44" height="20" fill="#f1f5f9" />
            <rect x="12" y="20" width="40" height="16" fill="#ffffff" />

            {/* Silver Hair & Beard */}
            <rect x="18" y="20" width="28" height="6" fill="#cbd5e1" />
            <rect x="16" y="24" width="4" height="12" fill="#e2e8f0" />
            <rect x="44" y="24" width="4" height="12" fill="#e2e8f0" />

            {/* Elderly Face */}
            <rect x="20" y="22" width="24" height="14" fill="#ffedd5" />

            {/* Peaceful Closed Eyes */}
            <rect x="24" y="26" width="6" height="2" fill="#64748b" />
            <rect x="34" y="26" width="6" height="2" fill="#64748b" />

            {/* Oxygen Cannula Line */}
            <rect x="16" y="29" width="32" height="2" fill="#38bdf8" />
            <rect x="30" y="29" width="4" height="3" fill="#7dd3fc" />

            {/* Folded Blue Blanket */}
            <rect x="6" y="38" width="52" height="20" fill="#2563eb" />
            <rect x="6" y="38" width="52" height="4" fill="#60a5fa" />
            <rect x="6" y="48" width="52" height="10" fill="#1e40af" />
          </g>
        )}

        {/* =========================================================
            CASE 05: ELENA (elena_religious) - Voluntades Anticipadas
            Paleta: Vestido (#f59e0b, #d97706, #b45309, #78350f)
                    Carpeta Legal (#fde047, #eab308, #ca8a04)
           ========================================================= */}
        {type === 'elena_religious' && (
          <g>
            {/* Long Dark Braid */}
            <rect x="18" y="8" width="28" height="8" fill="#451a03" />
            <rect x="14" y="14" width="8" height="28" fill="#713f12" />
            <rect x="12" y="24" width="6" height="20" fill="#451a03" />

            {/* Face */}
            <rect x="22" y="14" width="20" height="14" fill="#fed7aa" />
            <rect x="24" y="26" width="16" height="4" fill="#fdba74" />

            {/* Resolute Dignified Eyes & Eyebrows */}
            <rect x="24" y="18" width="6" height="2" fill="#292524" />
            <rect x="34" y="18" width="6" height="2" fill="#292524" />
            <rect x="25" y="20" width="4" height="4" fill="#1c1917" />
            <rect x="35" y="20" width="4" height="4" fill="#1c1917" />

            {/* Mouth */}
            <rect x="29" y="26" width="6" height="2" fill="#7c2d12" />

            {/* Amber Dress & Collar */}
            <rect x="18" y="32" width="28" height="26" fill="#d97706" />
            <rect x="22" y="32" width="20" height="26" fill="#f59e0b" />
            <rect x="26" y="32" width="12" height="6" fill="#fef3c7" />

            {/* Legal Document Folder in hand */}
            <rect x="38" y="36" width="14" height="18" fill="#eab308" />
            <rect x="40" y="38" width="10" height="14" fill="#fde047" />
            <rect x="42" y="42" width="6" height="2" fill="#78350f" />
            <rect x="42" y="46" width="6" height="2" fill="#78350f" />
          </g>
        )}

        {/* =========================================================
            CASE 06: DAVID (david_coma) - Coma Traumatológico
            Paleta: Vendaje (#ffffff, #f1f5f9, #cbd5e1, #fca5a5)
                    Tubo Ventilador (#0284c7, #38bdf8, #bae6fd)
           ========================================================= */}
        {type === 'david_coma' && (
          <g>
            {/* Pillow & Head */}
            <rect x="10" y="14" width="44" height="24" fill="#334155" />
            <rect x="20" y="18" width="24" height="16" fill="#fed7aa" />

            {/* Head Medical Bandage (White & Blood Patch) */}
            <rect x="16" y="12" width="32" height="10" fill="#ffffff" />
            <rect x="16" y="18" width="32" height="4" fill="#e2e8f0" />
            <rect x="36" y="14" width="6" height="6" fill="#fca5a5" />

            {/* Closed Unconscious Eyes */}
            <rect x="24" y="22" width="6" height="2" fill="#475569" />
            <rect x="34" y="22" width="6" height="2" fill="#475569" />

            {/* Endotracheal Intubation Tube */}
            <rect x="30" y="26" width="4" height="14" fill="#38bdf8" />
            <rect x="28" y="26" width="8" height="4" fill="#ffffff" />

            {/* ICU Bed Linen */}
            <rect x="8" y="36" width="48" height="22" fill="#0284c7" />
            <rect x="8" y="36" width="48" height="4" fill="#38bdf8" />
          </g>
        )}

        {/* =========================================================
            CASE 07: SOFÍA (sofia_adolescent) - Adolescente 16 años
            Paleta: Sudadera (#ec4899, #f472b6, #db2777, #831843)
                    Pelo (#18181b, #27272a, #3f3f46)
           ========================================================= */}
        {type === 'sofia_adolescent' && (
          <g>
            {/* Black Ponytail Hair */}
            <rect x="18" y="6" width="28" height="8" fill="#18181b" />
            <rect x="42" y="12" width="8" height="18" fill="#18181b" />
            <rect x="44" y="10" width="4" height="4" fill="#ec4899" />

            {/* Face */}
            <rect x="20" y="14" width="20" height="14" fill="#fed7aa" />
            <rect x="22" y="26" width="16" height="4" fill="#fdba74" />

            {/* Large Anime RPG Eyes */}
            <rect x="23" y="18" width="5" height="5" fill="#0f172a" />
            <rect x="32" y="18" width="5" height="5" fill="#0f172a" />
            <rect x="23" y="18" width="2" height="2" fill="#ffffff" />
            <rect x="32" y="18" width="2" height="2" fill="#ffffff" />

            {/* Smile */}
            <rect x="27" y="25" width="6" height="2" fill="#e11d48" />

            {/* Pink Hoodie */}
            <rect x="14" y="30" width="36" height="28" fill="#ec4899" />
            <rect x="22" y="30" width="20" height="28" fill="#f472b6" />
            {/* Drawstrings */}
            <rect x="28" y="34" width="2" height="12" fill="#ffffff" />
            <rect x="34" y="34" width="2" height="12" fill="#ffffff" />
          </g>
        )}

        {/* =========================================================
            CASE 08: MATEO (mateo_terminal_family) - Profesor Senior
            Paleta: Gafas (#d97706, #f59e0b, #fef08a)
                    Chaqueta (#475569, #334155, #1e293b)
           ========================================================= */}
        {type === 'mateo_terminal_family' && (
          <g>
            {/* Grey Hair at temples */}
            <rect x="18" y="8" width="28" height="6" fill="#94a3b8" />
            <rect x="16" y="12" width="6" height="10" fill="#cbd5e1" />
            <rect x="42" y="12" width="6" height="10" fill="#cbd5e1" />

            {/* Face */}
            <rect x="20" y="12" width="24" height="16" fill="#ffedd5" />

            {/* Gold-Rimmed RPG Glasses */}
            <rect x="22" y="18" width="8" height="6" fill="none" stroke="#d97706" strokeWidth="2" />
            <rect x="34" y="18" width="8" height="6" fill="none" stroke="#d97706" strokeWidth="2" />
            <rect x="30" y="20" width="4" height="2" fill="#d97706" />

            {/* Eyes behind lenses */}
            <rect x="24" y="20" width="4" height="2" fill="#1e293b" />
            <rect x="36" y="20" width="4" height="2" fill="#1e293b" />

            {/* Cardigan & Shirt */}
            <rect x="14" y="32" width="36" height="26" fill="#334155" />
            <rect x="24" y="32" width="16" height="26" fill="#cbd5e1" />
            <rect x="30" y="36" width="4" height="22" fill="#1e293b" />
          </g>
        )}

        {/* =========================================================
            CASE 09: PEDRO (pedro_triage) - Triaje y Balanza Ética
           ========================================================= */}
        {type === 'pedro_triage' && (
          <g>
            {/* Left Patient Silhouette (Pedro 52yo) */}
            <rect x="8" y="24" width="16" height="32" fill="#0284c7" />
            <rect x="12" y="16" width="8" height="10" fill="#fed7aa" />

            {/* Right Patient Silhouette (Don Fernando 84yo) */}
            <rect x="40" y="24" width="16" height="32" fill="#64748b" />
            <rect x="44" y="16" width="8" height="10" fill="#ffedd5" />

            {/* Golden Scale of Justice (Center) */}
            <rect x="30" y="6" width="4" height="38" fill="#f59e0b" />
            <rect x="14" y="10" width="36" height="4" fill="#f59e0b" />
            <rect x="14" y="14" width="2" height="12" fill="#fbbf24" />
            <rect x="48" y="14" width="2" height="12" fill="#fbbf24" />
            <rect x="10" y="26" width="10" height="4" fill="#f59e0b" />
            <rect x="44" y="26" width="10" height="4" fill="#f59e0b" />
          </g>
        )}

        {/* =========================================================
            CASE 10: DONANTE (donante_transplant) - Donante de Órganos
           ========================================================= */}
        {type === 'donante_transplant' && (
          <g>
            {/* Heroic Dark Silhouette Body */}
            <rect x="20" y="10" width="24" height="8" fill="#1e293b" />
            <rect x="18" y="18" width="28" height="20" fill="#1e293b" />
            <rect x="16" y="38" width="32" height="20" fill="#0f172a" />

            {/* Glowing Golden & Red Pixel Heart in Chest */}
            <rect x="28" y="40" width="8" height="4" fill="#ef4444" />
            <rect x="26" y="44" width="12" height="6" fill="#ef4444" />
            <rect x="30" y="50" width="4" height="4" fill="#ef4444" />
            <rect x="30" y="44" width="4" height="2" fill="#fef08a" />

            {/* Golden Laurel Crown Overlay */}
            <rect x="16" y="12" width="4" height="4" fill="#eab308" />
            <rect x="44" y="12" width="4" height="4" fill="#eab308" />
            <rect x="20" y="8" width="24" height="2" fill="#eab308" />
          </g>
        )}

        {/* =========================================================
            CASE 11: CLARA (clara_research) - Investigadora / Ensayos
            Paleta: Cabello Afro (#1c1917, #292524)
                    Piel (#78350f, #92400e, #b45309)
                    Bata (#059669, #10b981, #a7f3d0)
           ========================================================= */}
        {type === 'clara_research' && (
          <g>
            {/* Afro Hair Clusters */}
            <rect x="14" y="4" width="36" height="14" fill="#1c1917" />
            <rect x="12" y="8" width="40" height="14" fill="#292524" />

            {/* Dark Skin */}
            <rect x="20" y="16" width="24" height="14" fill="#92400e" />
            <rect x="22" y="28" width="20" height="4" fill="#78350f" />

            {/* Thoughtful Eyes */}
            <rect x="24" y="20" width="5" height="4" fill="#fafaf9" />
            <rect x="35" y="20" width="5" height="4" fill="#fafaf9" />
            <rect x="26" y="20" width="3" height="4" fill="#1c1917" />
            <rect x="37" y="20" width="3" height="4" fill="#1c1917" />

            {/* Green Lab Coat */}
            <rect x="14" y="32" width="36" height="26" fill="#059669" />
            <rect x="24" y="32" width="16" height="26" fill="#a7f3d0" />

            {/* Research Protocol Clipboard */}
            <rect x="10" y="38" width="10" height="14" fill="#ffffff" />
            <rect x="12" y="42" width="6" height="2" fill="#ef4444" />
            <rect x="12" y="46" width="6" height="2" fill="#059669" />
          </g>
        )}

        {/* =========================================================
            CASE 12: IA DIAGNOSTICS (ai_diagnostics) - Core IA 16-bit
            Paleta: Terminal (#020617, #0f172a, #06b6d4, #38bdf8, #a5f3fc)
           ========================================================= */}
        {type === 'ai_diagnostics' && (
          <g>
            {/* Outer Cyber Terminal Frame */}
            <rect x="8" y="8" width="48" height="48" fill="#020617" />
            <rect x="10" y="10" width="44" height="44" fill="none" stroke="#06b6d4" strokeWidth="2" />

            {/* Screen Display Grid */}
            <rect x="14" y="14" width="36" height="36" fill="#041527" />

            {/* Neural Pixel Core (Glowing Cyan & Blue) */}
            <rect x="26" y="22" width="12" height="12" fill="#082f49" />
            <rect x="28" y="24" width="8" height="8" fill="#06b6d4" />
            <rect x="30" y="26" width="4" height="4" fill="#a5f3fc" />

            {/* Circuit Traces */}
            <rect x="18" y="28" width="8" height="2" fill="#38bdf8" />
            <rect x="38" y="28" width="8" height="2" fill="#38bdf8" />
            <rect x="31" y="16" width="2" height="6" fill="#38bdf8" />
            <rect x="31" y="34" width="2" height="6" fill="#38bdf8" />

            {/* Digital Data Lines */}
            <rect x="18" y="42" width="28" height="2" fill="#38bdf8" />
            <rect x="18" y="46" width="20" height="2" fill="#22d3ee" />
          </g>
        )}

        {/* =========================================================
            DEFAULT: DOCTOR MENTOR (doctor_mentor) - Jugador / Mentor
            Paleta: Bata (#ffffff, #f1f5f9, #cbd5e1)
                    Scrubs (#0d9488, #115e59)
                    Estetoscopio (#334155, #94a3b8)
           ========================================================= */}
        {type === 'doctor_mentor' && (
          <g>
            {/* Dark Professional Hair */}
            <rect x="20" y="8" width="24" height="6" fill="#334155" />
            <rect x="18" y="12" width="28" height="4" fill="#1e293b" />

            {/* Face */}
            <rect x="22" y="14" width="20" height="14" fill="#fed7aa" />
            <rect x="24" y="26" width="16" height="4" fill="#fdba74" />

            {/* Friendly Confident Eyes */}
            <rect x="25" y="18" width="4" height="4" fill="#0f172a" />
            <rect x="35" y="18" width="4" height="4" fill="#0f172a" />
            <rect x="25" y="18" width="2" height="2" fill="#ffffff" />
            <rect x="35" y="18" width="2" height="2" fill="#ffffff" />

            {/* Smile */}
            <rect x="29" y="25" width="6" height="2" fill="#b45309" />

            {/* Doctor White Coat & Teal Scrubs */}
            <rect x="14" y="30" width="36" height="28" fill="#ffffff" />
            <rect x="24" y="30" width="16" height="28" fill="#0d9488" />

            {/* Stethoscope */}
            <rect x="22" y="32" width="4" height="14" fill="#334155" />
            <rect x="38" y="32" width="4" height="14" fill="#334155" />
            <rect x="30" y="44" width="4" height="4" fill="#94a3b8" />
          </g>
        )}
      </svg>
    </div>
  );
};
