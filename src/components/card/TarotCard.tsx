"use client";

import React, { useState } from "react";
import { TarotCardData } from "@/data/tarot-cards";
import { soundManager } from "@/lib/audio-synthesizer";
import { TarotCardArt } from "./TarotCardArt";
import { 
  Sparkles, 
  Compass, 
  Moon, 
  Crown, 
  Shield, 
  Scroll, 
  Heart, 
  Zap, 
  Flame, 
  Repeat, 
  Scale, 
  Skull, 
  Sliders, 
  AlertTriangle, 
  Sun, 
  Bell, 
  Globe, 
  Users, 
  Feather, 
  Coins, 
  Lock,
  Crosshair
} from "lucide-react";

interface TarotCardProps {
  card: TarotCardData;
  isReversed?: boolean;
  isFlipped?: boolean;
  onFlip?: () => void;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  label?: string;
}

// 映射卡牌图标
function renderCardIcon(iconName: string, className: string) {
  const props = { className };
  switch (iconName) {
    case "Sparkles": return <Sparkles {...props} />;
    case "Compass": return <Compass {...props} />;
    case "Moon": return <Moon {...props} />;
    case "Crown": return <Crown {...props} />;
    case "Shield": return <Shield {...props} />;
    case "Scroll": return <Scroll {...props} />;
    case "Heart": return <Heart {...props} />;
    case "Zap": return <Zap {...props} />;
    case "Flame": return <Flame {...props} />;
    case "Repeat": return <Repeat {...props} />;
    case "Scale": return <Scale {...props} />;
    case "Skull": return <Skull {...props} />;
    case "Sliders": return <Sliders {...props} />;
    case "AlertTriangle": return <AlertTriangle {...props} />;
    case "Sun": return <Sun {...props} />;
    case "Bell": return <Bell {...props} />;
    case "Globe": return <Globe {...props} />;
    case "Users": return <Users {...props} />;
    case "Feather": return <Feather {...props} />;
    case "Coins": return <Coins {...props} />;
    case "Lock": return <Lock {...props} />;
    case "Crosshair": return <Crosshair {...props} />;
    default: return <Sparkles {...props} />;
  }
}

export const TarotCard: React.FC<TarotCardProps> = ({
  card,
  isReversed = false,
  isFlipped = false,
  onFlip,
  size = "md",
  interactive = true,
  label,
}) => {
  const [internalFlipped, setInternalFlipped] = useState(isFlipped);
  const flipped = onFlip ? isFlipped : internalFlipped;

  const handleClick = () => {
    if (!interactive) return;
    soundManager.playFlipSound();
    soundManager.triggerHaptic(40);
    if (onFlip) {
      onFlip();
    } else {
      setInternalFlipped(!internalFlipped);
    }
  };

  // 尺寸规划
  const sizeClasses = {
    sm: "w-28 h-44 text-xs",
    md: "w-44 h-72 text-sm",
    lg: "w-56 h-92 text-base",
  }[size];

  // 元素颜色
  const elementColors: Record<string, string> = {
    fire: "text-red-400 border-red-500/40 bg-red-950/20",
    water: "text-blue-400 border-blue-500/40 bg-blue-950/20",
    air: "text-cyber-yellow border-cyber-yellow/40 bg-yellow-950/20",
    earth: "text-cyber-lime border-cyber-lime/40 bg-emerald-950/20",
    spirit: "text-purple-400 border-purple-500/40 bg-purple-950/20",
  };

  return (
    <div className="flex flex-col items-center gap-2 group">
      {label && (
        <span className="text-xs font-mono tracking-wider text-cyber-lime/80 uppercase font-semibold bg-dark-card/90 px-2.5 py-0.5 rounded-full border border-cyber-lime/30 shadow-sm">
          {label}
        </span>
      )}

      <div
        onClick={handleClick}
        className={`relative ${sizeClasses} perspective-1000 ${
          interactive ? "cursor-pointer select-none transition-transform duration-300 hover:scale-105" : ""
        }`}
        role="button"
        tabIndex={interactive ? 0 : -1}
        aria-label={`${card.nameCn} ${isReversed ? "逆位" : "正位"}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <div
          className={`w-full h-full duration-700 transform-style-3d transition-transform relative rounded-xl shadow-2xl ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* ================= 卡背 (Back of Card) ================= */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl border-2 border-cyber-border/80 bg-gradient-to-br from-dark-surface via-dark-card to-[#07090E] p-3 flex flex-col justify-between overflow-hidden shadow-neon-green/20">
            {/* 全息反光膜 */}
            <div className="absolute inset-0 opacity-15 holographic-foil animate-shimmer pointer-events-none" />
            
            {/* 四角几何符文 */}
            <div className="flex justify-between items-center text-[10px] font-mono text-cyber-lime/50">
              <span>CYBER</span>
              <span className="animate-pulse text-cyber-pink font-bold">▲ 78</span>
              <span>TAROT</span>
            </div>

            {/* 卡背中心几何电路与赛博星盘 */}
            <div className="relative my-auto flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyber-lime/30 flex items-center justify-center p-2 relative">
                <div className="absolute inset-0 rounded-full border border-dashed border-cyber-cyan/40 animate-spin" style={{ animationDuration: "16s" }} />
                <div className="w-10 h-10 rounded-lg border border-cyber-pink/40 rotate-45 flex items-center justify-center bg-dark-bg/60">
                  <Compass className="w-5 h-5 text-cyber-lime -rotate-45" />
                </div>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                {interactive ? "TAP TO REVEAL" : "CYBER REALM"}
              </span>
            </div>

            {/* 底部条形码与版本标识 */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-slate-800/80 pt-1.5">
              <span>ORACLE_V2.6</span>
              <span className="text-cyber-cyan/60">00'S VIBE</span>
            </div>
          </div>

          {/* ================= 卡面 (Front of Card) ================= */}
          <div
            className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl border-2 bg-gradient-to-b from-dark-surface to-[#0a0d14] p-3 flex flex-col justify-between overflow-hidden shadow-2xl ${
              isReversed
                ? "border-cyber-pink/60 shadow-neon-pink/20"
                : "border-cyber-lime/60 shadow-neon-green/20"
            }`}
          >
            {/* 顶部标识：序号与正逆位 */}
            <div className="flex justify-between items-center text-xs font-mono border-b border-dark-border/60 pb-1">
              <span className="text-slate-400 font-bold">
                {card.arcana === "major" ? `NO.${card.number}` : `${card.suit?.toUpperCase()}`}
              </span>
              <span
                className={`px-1.5 py-0.2 rounded font-mono text-[10px] font-bold ${
                  isReversed
                    ? "bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40"
                    : "bg-cyber-lime/20 text-cyber-lime border border-cyber-lime/40"
                }`}
              >
                {isReversed ? "REVERSED · 逆位" : "UPRIGHT · 正位"}
              </span>
            </div>

            {/* 中心现代象征插画 */}
            <div className="flex flex-col items-center justify-center my-auto w-full">
              <TarotCardArt card={card} size={size} isReversed={isReversed} />
            </div>

            {/* 卡牌名称 */}
            <div className="text-center">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide font-display">
                {card.nameCn}
              </h3>
              <p className="text-[10px] font-mono text-slate-400 tracking-wider">
                {card.nameEn}
              </p>
            </div>

            {/* 底部现代关键词标签 */}
            <div className="border-t border-dark-border/60 pt-1.5 flex flex-wrap gap-1 justify-center">
              {(isReversed ? card.reversedKeywords : card.uprightKeywords).slice(0, 2).map((kw, i) => (
                <span
                  key={i}
                  className="text-[9px] px-1.5 py-0.5 rounded bg-dark-hover/80 text-slate-300 font-mono"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

