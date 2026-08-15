import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BIOETHICS_GLOSSARY, GlossaryTopic } from '../data/glossary';
import { soundManager } from '../utils/audio';
import { BookOpen, X, FileCheck, CheckCircle2 } from 'lucide-react';

interface GlossaryModalProps {
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<GlossaryTopic>(BIOETHICS_GLOSSARY[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020c1b]/85 backdrop-blur-md overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl glass rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden my-auto space-y-5 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda]">
              <BookOpen size={24} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#64ffda]">
                Compendio Académico
              </span>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                GLOSARIO DE BIOÉTICA MÉDICA
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Master-Detail Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 min-h-0 overflow-hidden">
          {/* Topic Selector Sidebar (4 cols) */}
          <div className="md:col-span-4 space-y-2 overflow-y-auto pr-1">
            {BIOETHICS_GLOSSARY.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedTopic(topic);
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#64ffda]/15 border-[#64ffda] text-white shadow-lg ring-1 ring-[#64ffda]'
                      : 'bg-[#020c1b]/60 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-[#64ffda] block mb-0.5">
                    {topic.category}
                  </span>
                  <h4 className="text-sm font-display font-bold leading-snug">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {topic.shortSummary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Topic Detailed Content (8 cols) */}
          <div className="md:col-span-8 bg-[#020c1b]/80 border border-slate-800 rounded-2xl p-5 sm:p-6 overflow-y-auto space-y-5">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#64ffda]/20 border border-[#64ffda] text-[#64ffda] text-xs font-mono font-bold">
                {selectedTopic.category}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-2">
                {selectedTopic.title}
              </h3>
              <p className="text-sm font-medium text-cyan-300/90 italic mt-1">
                {selectedTopic.shortSummary}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400">
                Fundamentación Teórica:
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedTopic.detailedText}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-1.5">
                <FileCheck size={14} />
                <span>Ejemplo en Práctica Clínica:</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "{selectedTopic.clinicalExample}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/40 space-y-1">
              <h4 className="text-xs font-mono font-bold uppercase text-[#64ffda] flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>Regla de Oro Deontológica:</span>
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {selectedTopic.keyRule}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-slate-800 shrink-0">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
          >
            Cerrar Glosario
          </button>
        </div>
      </motion.div>
    </div>
  );
};
