import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PatientAvatar } from './Graphics/PatientAvatar';
import { BioethicsRadarChart } from './Graphics/BioethicsRadarChart';
import { INITIAL_STATS } from '../utils/storage';
import { StatBar } from './StatBar';
import { soundManager } from '../utils/audio';
import {
  User,
  ShieldCheck,
  Heart,
  Scale,
  Lock,
  FileCheck2,
  Stethoscope,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProfileModalProps {
  initialName?: string;
  onConfirm: (name: string) => void;
  onCancel: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  initialName = '',
  onConfirm,
  onCancel
}) => {
  const [name, setName] = useState(initialName);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) {
      setError('Por favor, introduce tu nombre de estudiante para registrar tu expediente.');
      soundManager.playCaution();
      return;
    }
    soundManager.playSuccess();
    onConfirm(cleanName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden my-auto space-y-5 animate-scale-in"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-[#64ffda] tracking-wider">
              Expediente Académico
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              PERFIL DEL ESTUDIANTE
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] text-xs font-mono font-bold">
            Nivel: Interno
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Avatar & Name Input Row */}
          <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 shadow-inner">
            <div className="w-24 h-28 shrink-0 bg-slate-900/90 rounded-xl p-1 border border-[#64ffda]/30 flex items-center justify-center shadow-inner">
              <PatientAvatar type="doctor_mentor" size="sm" />
            </div>

            <div className="w-full flex-1">
              <label
                htmlFor="student-name-input"
                className="block text-sm font-semibold text-slate-200 mb-1.5"
              >
                Nombre del Estudiante / Médico Interno:
              </label>
              <div className="relative">
                <input
                  id="student-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Ej: Dr. Andrés Morales"
                  maxLength={40}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 rounded-xl text-white placeholder-slate-500 font-medium outline-none transition-all shadow-inner"
                  autoFocus
                />
                <User
                  size={18}
                  className="absolute right-3.5 top-3.5 text-slate-500 pointer-events-none"
                />
              </div>
              {error && (
                <p className="mt-1.5 text-xs text-rose-400 font-medium">{error}</p>
              )}
              <p className="mt-1.5 text-xs text-slate-400">
                Puntuación inicial: <span className="text-[#64ffda] font-bold font-mono">0 pts</span> (Máximo: 1000 pts)
              </p>
            </div>
          </div>

          {/* Starting Indicators Panel */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-2">
              <Sparkles size={14} className="text-[#64ffda]" />
              <span>Indicadores Éticos Iniciales (Punto de Equilibrio: 50/100)</span>
            </h3>

            {/* Radar Chart Initial Preview */}
            <div className="flex items-center justify-center p-3 rounded-2xl bg-slate-900/60 border border-slate-700/50 mb-3 shadow-inner">
              <BioethicsRadarChart stats={INITIAL_STATS} size={220} showLabels={true} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-700/50">
                <StatBar
                  label="Autonomía"
                  value={50}
                  color="sky"
                  icon={<ShieldCheck size={14} className="text-cyan-400" />}
                />
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-700/50">
                <StatBar
                  label="Beneficencia"
                  value={50}
                  color="emerald"
                  icon={<Heart size={14} className="text-emerald-400" />}
                />
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-700/50">
                <StatBar
                  label="No Maleficencia"
                  value={50}
                  color="rose"
                  icon={<ShieldCheck size={14} className="text-rose-400" />}
                />
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-700/50">
                <StatBar
                  label="Justicia"
                  value={50}
                  color="amber"
                  icon={<Scale size={14} className="text-amber-400" />}
                />
              </div>
            </div>

            {/* Secondary Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900/30 border border-slate-700/40">
                <StatBar
                  label="Confidencialidad"
                  value={50}
                  color="purple"
                  size="sm"
                  icon={<Lock size={12} className="text-purple-400" />}
                />
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/30 border border-slate-700/40">
                <StatBar
                  label="Consentimiento"
                  value={50}
                  color="indigo"
                  size="sm"
                  icon={<FileCheck2 size={12} className="text-indigo-400" />}
                />
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/30 border border-slate-700/40">
                <StatBar
                  label="Integridad"
                  value={50}
                  color="teal"
                  size="sm"
                  icon={<Stethoscope size={12} className="text-[#64ffda]" />}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onCancel();
              }}
              className="px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all cursor-pointer border border-slate-700"
            >
              Volver al Menú
            </button>
            <button
              id="confirm-profile-btn"
              type="submit"
              className="btn-primary px-7 py-3 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-all medical-glow flex items-center gap-2 cursor-pointer"
            >
              <span>COMENZAR SIMULACIÓN</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
