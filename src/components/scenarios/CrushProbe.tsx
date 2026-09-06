"use client";

import React, { useState } from "react";
import { TarotCardData, drawRandomCards } from "@/data/tarot-cards";
import { PersonaId, generateSmartInterpretation, InterpretationResult } from "@/lib/ai-engine";
import { TarotCard } from "@/components/card/TarotCard";
import { RitualDeck } from "@/components/card/RitualDeck";
import { DeepDiveChat } from "@/components/deep-dive/DeepDiveChat";
import { SocialCardModal } from "@/components/share/SocialCardModal";
import { HeartCrack, HeartHandshake, Sparkles, Share2, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface CrushProbeProps {
  personaId: PersonaId;
}

export const CrushProbe: React.FC<CrushProbeProps> = ({ personaId }) => {
  const [subMode, setSubMode] = useState<"probe" | "clear-mind">("probe");
  const [drawnCards, setDrawnCards] = useState<
    { card: TarotCardData; isReversed: boolean; positionName: string }[] | null
  >(null);
  const [interpretation, setInterpretation] = useState<InterpretationResult | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleCardsDrawn = () => {
    if (subMode === "probe") {
      const raw = drawRandomCards(3);
      const spread = [
        { card: raw[0].card, isReversed: raw[0].isReversed, positionName: "1. TA目前的状态" },
        { card: raw[1].card, isReversed: raw[1].isReversed, positionName: "2. 对你的真实感受" },
        { card: raw[2].card, isReversed: raw[2].isReversed, positionName: "3. 未来阻碍与走向" },
      ];
      setDrawnCards(spread);
      const interp = generateSmartInterpretation(personaId, {
        scenarioId: "crush",
        scenarioName: "Crush 意图探针",
        drawnCards: spread,
      });
      setInterpretation(interp);
    } else {
      const raw = drawRandomCards(1);
      const spread = [
        { card: raw[0].card, isReversed: raw[0].isReversed, positionName: "恋爱脑清醒符" },
      ];
      setDrawnCards(spread);
      const interp = generateSmartInterpretation(personaId, {
        scenarioId: "crush",
        scenarioName: "恋爱脑清醒符",
        drawnCards: spread,
      });
      setInterpretation(interp);
    }

    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 }, colors: ["#FF2E93", "#A855F7", "#00F0FF"] });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setDrawnCards(null);
    setInterpretation(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 玩法子切换 */}
      <div className="flex rounded-xl bg-dark-surface p-1 border border-dark-border">
        <button
          onClick={() => {
            setSubMode("probe");
            handleReset();
          }}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            subMode === "probe"
              ? "bg-cyber-pink text-white shadow-neon-pink/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          💘 Crush 意图探针 (3张牌)
        </button>
        <button
          onClick={() => {
            setSubMode("clear-mind");
            handleReset();
          }}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            subMode === "clear-mind"
              ? "bg-cyber-purple text-white shadow-lg"
              : "text-slate-400 hover:text-white"
          }`}
        >
          🧊 恋爱脑清醒符 (断联/复合测试)
        </button>
      </div>

      {!drawnCards ? (
        <div className="w-full max-w-md">
          <RitualDeck
            onCardsDrawn={handleCardsDrawn}
            requiredCardCount={subMode === "probe" ? 3 : 1}
          />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
          {/* 卡牌阵列 */}
          <div
            className={`grid gap-4 w-full justify-items-center ${
              subMode === "probe"
                ? "grid-cols-1 sm:grid-cols-3 max-w-2xl"
                : "grid-cols-1 max-w-xs"
            }`}
          >
            {drawnCards.map((item, idx) => (
              <TarotCard
                key={idx}
                card={item.card}
                isReversed={item.isReversed}
                isFlipped={true}
                size={subMode === "probe" ? "sm" : "lg"}
                label={item.positionName}
              />
            ))}
          </div>

          {/* 解读结果 */}
          {interpretation && (
            <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-4 shadow-xl">
              <div className="p-4 rounded-xl bg-gradient-to-r from-dark-surface to-dark-hover border-l-4 border-cyber-pink">
                <p className="text-sm sm:text-base font-bold text-white font-display leading-relaxed">
                  {interpretation.oneLiner}
                </p>
              </div>

              {subMode === "probe" && drawnCards.length === 3 && (
                <div className="flex flex-col gap-2.5">
                  <div className="p-3 rounded-xl bg-dark-surface border border-slate-800 text-xs">
                    <span className="font-bold text-cyber-cyan block mb-1">
                      ① TA目前的状态 (【{drawnCards[0].card.nameCn}】):
                    </span>
                    {drawnCards[0].card.loveVibe[drawnCards[0].isReversed ? "reversed" : "upright"]}
                  </div>
                  <div className="p-3 rounded-xl bg-dark-surface border border-cyber-pink/40 text-xs">
                    <span className="font-bold text-cyber-pink block mb-1">
                      ② 对你的真实感受 (【{drawnCards[1].card.nameCn}】):
                    </span>
                    {drawnCards[1].card.loveVibe.crushState}
                  </div>
                  <div className="p-3 rounded-xl bg-dark-surface border border-cyber-yellow/40 text-xs">
                    <span className="font-bold text-cyber-yellow block mb-1">
                      ③ 未来走向与破局 (【{drawnCards[2].card.nameCn}】):
                    </span>
                    {drawnCards[2].card.loveVibe[drawnCards[2].isReversed ? "reversed" : "upright"]}
                  </div>
                </div>
              )}

              {subMode === "clear-mind" && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    【清醒剂现状剖析】
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {interpretation.situationAnalysis}
                  </p>
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-cyber-pink/10 border border-cyber-pink/30 text-xs sm:text-sm text-slate-200">
                <span className="font-mono font-bold text-cyber-pink block mb-1">
                  【泼冷水/清醒 Action Item】
                </span>
                {interpretation.actionItem}
              </div>

              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-yellow shrink-0" />
                <span>
                  <strong>能量小锦囊：</strong> {interpretation.luckyBonus}
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyber-pink to-rose-500 text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-neon-pink/30 hover:shadow-neon-pink/60 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  生成清醒符分享海报
                </button>
                <button
                  onClick={handleReset}
                  className="py-2.5 px-4 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border text-slate-300 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  重新洗牌
                </button>
              </div>
            </div>
          )}

          {/* 深度多轮追问 */}
          <div className="w-full max-w-xl">
            <DeepDiveChat
              personaId={personaId}
              context={{
                scenarioId: "crush",
                scenarioName: subMode === "probe" ? "Crush 意图探针" : "恋爱脑清醒符",
                drawnCards: drawnCards,
              }}
            />
          </div>

          {/* 分享弹窗 */}
          {showShareModal && interpretation && (
            <SocialCardModal
              card={drawnCards[0].card}
              isReversed={drawnCards[0].isReversed}
              personaId={personaId}
              scenarioName={subMode === "probe" ? "Crush 意图探针" : "恋爱脑清醒符"}
              oneLiner={interpretation.oneLiner}
              actionItem={interpretation.actionItem}
              onClose={() => setShowShareModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

