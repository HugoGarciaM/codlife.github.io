import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  ShieldAlert,
  Scale,
  Lock,
  Brain,
  Stethoscope,
  FileCheck2,
  Building2,
  Crown,
  LockKeyhole
} from 'lucide-react';

interface BadgeIconProps {
  id: string;
  unlocked: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  id,
  unlocked,
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: { box: 'w-10 h-10', icon: 18 },
    md: { box: 'w-16 h-16', icon: 28 },
    lg: { box: 'w-24 h-24', icon: 42 }
  };

  const getIcon = () => {
    const iconSize = sizeMap[size].icon;
    switch (id) {
      case 'badge_autonomy':
        return <ShieldCheck size={iconSize} className="text-sky-400" />;
      case 'badge_beneficence':
        return <HeartHandshake size={iconSize} className="text-rose-400" />;
      case 'badge_non_maleficence':
        return <ShieldAlert size={iconSize} className="text-emerald-400" />;
      case 'badge_justice':
        return <Scale size={iconSize} className="text-amber-400" />;
      case 'badge_confidentiality':
        return <Lock size={iconSize} className="text-purple-400" />;
      case 'badge_critical_thinking':
        return <Brain size={iconSize} className="text-cyan-400" />;
      case 'badge_integrity':
        return <Stethoscope size={iconSize} className="text-teal-400" />;
      case 'badge_consent':
        return <FileCheck2 size={iconSize} className="text-indigo-400" />;
      case 'badge_completed':
        return <Building2 size={iconSize} className="text-pink-400" />;
      case 'badge_master':
        return <Crown size={iconSize} className="text-yellow-300" />;
      default:
        return <ShieldCheck size={iconSize} className="text-teal-400" />;
    }
  };

  if (!unlocked) {
    return (
      <div
        className={`relative ${sizeMap[size].box} rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center grayscale opacity-45 shadow-inner ${className}`}
      >
        <LockKeyhole size={sizeMap[size].icon} className="text-slate-600" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${sizeMap[size].box} rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-teal-500/40 flex items-center justify-center shadow-lg shadow-teal-950/40 ring-1 ring-white/10 ${className}`}
    >
      <div className="absolute inset-0 bg-teal-500/10 rounded-2xl filter blur-sm" />
      <div className="relative z-10">{getIcon()}</div>
    </div>
  );
};
