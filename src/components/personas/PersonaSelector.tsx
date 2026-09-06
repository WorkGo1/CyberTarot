"use client";

import React from "react";
import { PERSONAS, PersonaId } from "@/lib/ai-engine";
import { soundManager } from "@/lib/audio-synthesizer";
import { MessageSquareQuote, HeartHandshake, Briefcase, Eye } from "lucide-react";

interface PersonaSelectorProps {
  selectedPersona: PersonaId;
  onSelectPersona: (id: PersonaId) => void;
}

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({
  selectedPersona,
  onSelectPersona,
}) => {
  const personaList = Object.values(PERSONAS);

  const getPersonaIcon = (id: PersonaId) => {
    switch (id) {
      case "bestie":
        return <MessageSquareQuote className="w-4 h-4 text-cyber-pink" />;
      case "healer":
        return <HeartHandshake className="w-4 h-4 text-cyber-green" />;
      case "strategist":
        return <Briefcase className="w-4 h-4 text-cyber-cyan" />;
      case "oracle":
        return <Eye className="w-4 h-4 text-cyber-purple" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime" />
          自选 AI 占卜师人格 (AI Oracle Persona)
        </label>
        <span className="text-[11px] font-mono text-slate-500">不同人格具有专属语调与思维视角</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {personaList.map((p) => {
          const isSelected = selectedPersona === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                soundManager.playButtonClick();
                soundManager.triggerHaptic(20);
                onSelectPersona(p.id);
              }}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                isSelected
                  ? "bg-dark-card border-slate-300/80 shadow-lg"
                  : "bg-dark-surface/80 border-dark-border/80 hover:border-slate-700 hover:bg-dark-card/60"
              }`}
              style={{
                borderColor: isSelected ? p.accentColor : undefined,
                boxShadow: isSelected ? `0 0 15px ${p.accentColor}33` : undefined,
              }}
            >
              {/* 顶部标签与图标 */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  {getPersonaIcon(p.id)}
                  <span className="text-xs font-bold text-white font-display">
                    {p.name}
                  </span>
                </div>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold"
                  style={{
                    backgroundColor: `${p.accentColor}22`,
                    color: p.accentColor,
                  }}
                >
                  {p.badge}
                </span>
              </div>

              {/* 简短描述 */}
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {p.tagline}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

