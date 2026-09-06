"use client";

import React, { useState } from "react";
import { TarotCardData, drawRandomCards } from "@/data/tarot-cards";
import { PersonaId, getTarotInterpretation, generateSmartInterpretation, InterpretationResult } from "@/lib/ai-engine";
import { TarotCard } from "@/components/card/TarotCard";
import { RitualDeck } from "@/components/card/RitualDeck";
import { DeepDiveChat } from "@/components/deep-dive/DeepDiveChat";
import { SocialCardModal } from "@/components/share/SocialCardModal";
import { GitBranch, Scale, Share2, RotateCcw, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface JobBranchProps {
  personaId: PersonaId;
}

export const JobBranch: React.FC<JobBranchProps> = ({ personaId }) => {
  const [drawnCards, setDrawnCards] = useState<
    { card: TarotCardData; isReversed: boolean; positionName: string }[] | null
  >(null);
  const [interpretation, setInterpretation] = useState<InterpretationResult | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  // 抽 4 张牌 (左分支2张 + 右分支2张)
  const handleCardsDrawn = async () => {
    const raw = drawRandomCards(4);
    const spread = [
      { card: raw[0].card, isReversed: raw[0].isReversed, positionName: "留在原岗 · 能量消耗" },
      { card: raw[1].card, isReversed: raw[1].isReversed, positionName: "留在原岗 · 半年预期" },
      { card: raw[2].card, isReversed: raw[2].isReversed, positionName: "跳槽裸辞 · 风险敞口" },
      { card: raw[3].card, isReversed: raw[3].isReversed, positionName: "跳槽裸辞 · 机遇回血" },
    ];
    setDrawnCards(spread);

    const context = {
      scenarioId: "job-branch" as const,
      scenarioName: "离职/跳槽二选一牌阵",
      drawnCards: spread,
    };

    const localInterp = generateSmartInterpretation(personaId, context);
    setInterpretation(localInterp);

    const realInterp = await getTarotInterpretation(personaId, context);
    setInterpretation(realInterp);

    try {
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.7 }, colors: ["#E2F952", "#FF2E93", "#00FF66"] });
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
      {/* 专区介绍提示 */}
      <div className="w-full max-w-xl p-4 rounded-2xl bg-dark-card border border-dark-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <GitBranch className="w-5 h-5 text-cyber-yellow" />
          <div>
            <h4 className="text-sm font-bold text-white font-display">
              纠结打工人决策天平 · 离职跳槽二选一
            </h4>
            <p className="text-xs text-slate-400">
              分支牌阵对比：左边走留在原岗位 vs 右边走跳槽裸辞
            </p>
          </div>
        </div>
        <Scale className="w-5 h-5 text-cyber-lime" />
      </div>

      {!drawnCards ? (
        <div className="w-full max-w-md">
          <RitualDeck onCardsDrawn={handleCardsDrawn} requiredCardCount={4} />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
          {/* 左右分支展示容器 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            {/* 左分支：留在原岗位 */}
            <div className="p-4 rounded-2xl bg-dark-card/90 border border-slate-700/80 flex flex-col items-center gap-3">
              <span className="text-xs font-mono font-bold text-cyber-cyan px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30">
                PATH A: 留在原岗位
              </span>
              <div className="flex gap-3 justify-center">
                <TarotCard
                  card={drawnCards[0].card}
                  isReversed={drawnCards[0].isReversed}
                  isFlipped={true}
                  size="sm"
                  label={drawnCards[0].positionName}
                />
                <TarotCard
                  card={drawnCards[1].card}
                  isReversed={drawnCards[1].isReversed}
                  isFlipped={true}
                  size="sm"
                  label={drawnCards[1].positionName}
                />
              </div>
              <div className="text-xs text-slate-300 leading-relaxed bg-dark-surface p-3 rounded-xl border border-dark-border w-full mt-1">
                <strong>综合预期：</strong> 能量负荷 {drawnCards[0].card.banweiIndex}%，
                {drawnCards[1].card.workplaceVibe[drawnCards[1].isReversed ? "reversed" : "upright"]}
              </div>
            </div>

            {/* 右分支：跳槽或裸辞 */}
            <div className="p-4 rounded-2xl bg-dark-card/90 border border-cyber-pink/40 flex flex-col items-center gap-3 shadow-neon-pink/10">
              <span className="text-xs font-mono font-bold text-cyber-pink px-3 py-1 rounded-full bg-cyber-pink/10 border border-cyber-pink/30">
                PATH B: 跳槽 / 裸辞
              </span>
              <div className="flex gap-3 justify-center">
                <TarotCard
                  card={drawnCards[2].card}
                  isReversed={drawnCards[2].isReversed}
                  isFlipped={true}
                  size="sm"
                  label={drawnCards[2].positionName}
                />
                <TarotCard
                  card={drawnCards[3].card}
                  isReversed={drawnCards[3].isReversed}
                  isFlipped={true}
                  size="sm"
                  label={drawnCards[3].positionName}
                />
              </div>
              <div className="text-xs text-slate-300 leading-relaxed bg-dark-surface p-3 rounded-xl border border-dark-border w-full mt-1">
                <strong>突破机遇：</strong> 成功破局率 {drawnCards[3].card.decisionVibe.percentage}%，
                {drawnCards[3].card.workplaceVibe[drawnCards[3].isReversed ? "reversed" : "upright"]}
              </div>
            </div>
          </div>

          {/* AI 综合解读 */}
          {interpretation && (
            <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-4 shadow-xl">
              <div className="p-4 rounded-xl bg-gradient-to-r from-dark-surface to-dark-hover border-l-4 border-cyber-yellow">
                <p className="text-sm sm:text-base font-bold text-white font-display leading-relaxed">
                  {interpretation.oneLiner}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-slate-400 font-semibold">【决策天平量化评估】</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {interpretation.situationAnalysis}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyber-yellow/10 border border-cyber-yellow/30 text-xs sm:text-sm text-slate-200">
                <span className="font-mono font-bold text-cyber-yellow block mb-1">
                  【决断 Action Item】
                </span>
                {interpretation.actionItem}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyber-yellow to-amber-400 text-black font-display font-bold text-sm flex items-center justify-center gap-2 shadow-neon-yellow/30 hover:shadow-neon-yellow/60 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  生成二选一决断海报
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
                scenarioId: "job-branch",
                scenarioName: "离职/跳槽二选一牌阵",
                drawnCards: drawnCards,
              }}
            />
          </div>

          {/* 分享弹窗 */}
          {showShareModal && interpretation && (
            <SocialCardModal
              card={drawnCards[3].card}
              isReversed={drawnCards[3].isReversed}
              personaId={personaId}
              scenarioName="离职/跳槽二选一"
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

