"use client";

import React, { useState } from "react";
import { soundManager } from "@/lib/audio-synthesizer";
import { Shuffle, Scissors, Sparkles, Layers } from "lucide-react";

interface RitualDeckProps {
  onCardsDrawn: () => void;
  requiredCardCount?: number;
  isDealing?: boolean;
}

export const RitualDeck: React.FC<RitualDeckProps> = ({
  onCardsDrawn,
  requiredCardCount = 1,
  isDealing = false,
}) => {
  const [step, setStep] = useState<"idle" | "shuffling" | "cutting" | "ready">("idle");
  const [shuffleCount, setShuffleCount] = useState(0);

  // 1. 洗牌动作
  const handleShuffle = () => {
    setStep("shuffling");
    soundManager.playShuffleSound();
    soundManager.triggerHaptic(60);

    setTimeout(() => {
      setStep("cutting");
      setShuffleCount((prev) => prev + 1);
    }, 1200);
  };

  // 2. 切牌动作
  const handleCut = () => {
    soundManager.playCutSound();
    soundManager.triggerHaptic(80);
    setStep("ready");
  };

  // 3. 抽牌开盘
  const handleDeal = () => {
    soundManager.playChimeSound();
    soundManager.triggerHaptic(100);
    onCardsDrawn();
    setStep("idle");
  };

  // 一键快捷仪式
  const handleQuickRitual = () => {
    setStep("shuffling");
    soundManager.playShuffleSound();
    soundManager.triggerHaptic(50);

    setTimeout(() => {
      soundManager.playCutSound();
      setTimeout(() => {
        soundManager.playChimeSound();
        soundManager.triggerHaptic(100);
        onCardsDrawn();
        setStep("idle");
      }, 600);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-dark-card/60 backdrop-blur-md rounded-2xl border border-dark-border/80 shadow-2xl relative overflow-hidden">
      {/* 赛博状态指示条 */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 border-b border-dark-border/60 pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse" />
          <span className="text-cyber-lime font-bold">RITUAL MATRIX</span>
          <span className="text-slate-500">· 78 CARDS READY</span>
        </div>
        <div className="text-[11px] text-slate-400">
          {step === "idle" && "等待开始仪式"}
          {step === "shuffling" && "量子共振洗牌中..."}
          {step === "cutting" && "请点击切牌对调"}
          {step === "ready" && `已就绪 · 准备抽取 ${requiredCardCount} 张`}
        </div>
      </div>

      {/* 牌堆拟真 3D 动画容器 */}
      <div className="relative w-48 h-64 mb-6 flex items-center justify-center perspective-1000">
        {/* 底层阴影 */}
        <div className="absolute w-40 h-56 rounded-xl bg-black/80 blur-xl translate-y-6" />

        {/* 叠放的卡牌层 1 */}
        <div
          className={`absolute w-36 h-52 rounded-xl border border-cyber-border bg-dark-surface shadow-md transition-all duration-500 ${
            step === "shuffling"
              ? "-translate-x-12 rotate-[-18deg] scale-95"
              : step === "cutting"
              ? "-translate-x-8 -translate-y-3 rotate-[-6deg]"
              : "-translate-y-2 translate-x-1 rotate-[1.5deg]"
          }`}
        />

        {/* 叠放的卡牌层 2 */}
        <div
          className={`absolute w-36 h-52 rounded-xl border border-cyber-border bg-dark-surface shadow-md transition-all duration-500 ${
            step === "shuffling"
              ? "translate-x-12 rotate-[18deg] scale-95"
              : step === "cutting"
              ? "translate-x-8 translate-y-3 rotate-[6deg]"
              : "-translate-y-1 -translate-x-1 rotate-[-1.5deg]"
          }`}
        />

        {/* 顶层主牌堆 */}
        <div
          className={`relative w-36 h-52 rounded-xl border-2 border-cyber-lime/60 bg-gradient-to-br from-dark-surface via-dark-card to-black p-3 flex flex-col justify-between items-center shadow-neon-green/30 transition-all duration-500 select-none ${
            step === "shuffling" ? "scale-105 animate-pulse" : ""
          }`}
        >
          <div className="w-full flex justify-between text-[9px] font-mono text-cyber-lime/60">
            <span>78_ARCANA</span>
            <span>SHUFFLE x{shuffleCount}</span>
          </div>

          <div className="w-14 h-14 rounded-full border border-cyber-lime/30 flex items-center justify-center relative">
            <Layers className="w-6 h-6 text-cyber-lime animate-bounce" style={{ animationDuration: "2s" }} />
          </div>

          <div className="text-[10px] font-mono text-slate-400 tracking-wider text-center">
            {step === "cutting" ? "CLICK CUT" : "CYBER TAROT DECK"}
          </div>
        </div>
      </div>

      {/* 仪式感控制按钮组 */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full">
        {step === "idle" && (
          <>
            <button
              onClick={handleShuffle}
              disabled={isDealing}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-lime to-emerald-400 text-black font-bold font-display text-sm tracking-wide shadow-neon-green/30 hover:shadow-neon-green/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <Shuffle className="w-4 h-4" />
              开启洗牌仪式
            </button>
            <button
              onClick={handleQuickRitual}
              disabled={isDealing}
              className="px-4 py-2.5 rounded-xl bg-dark-hover hover:bg-dark-border text-slate-200 font-mono text-xs border border-dark-border/80 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyber-yellow" />
              一键快速开牌
            </button>
          </>
        )}

        {step === "shuffling" && (
          <div className="px-6 py-2 rounded-xl bg-dark-hover text-cyber-lime font-mono text-xs animate-pulse flex items-center gap-2">
            <Shuffle className="w-4 h-4 animate-spin" />
            正在交错洗牌中...
          </div>
        )}

        {step === "cutting" && (
          <button
            onClick={handleCut}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-400 text-black font-bold font-display text-sm shadow-neon-cyan/40 hover:shadow-neon-cyan/60 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <Scissors className="w-4 h-4" />
            完成切牌 (Cut the Deck)
          </button>
        )}

        {step === "ready" && (
          <button
            onClick={handleDeal}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyber-pink to-rose-400 text-white font-bold font-display text-sm shadow-neon-pink/40 hover:shadow-neon-pink/60 transition-all transform hover:-translate-y-0.5 animate-pulse flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyber-yellow" />
            揭示牌阵 (Reveal Spread)
          </button>
        )}
      </div>

      <p className="text-[11px] font-mono text-slate-500 mt-4 text-center">
        💡 真实物理合成声效已加载 · 翻牌带有触感震动反馈
      </p>
    </div>
  );
};

