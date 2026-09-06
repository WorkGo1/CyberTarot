"use client";

import React, { useState } from "react";
import { TarotCardData, drawRandomCards } from "@/data/tarot-cards";
import { PersonaId, getTarotInterpretation, generateSmartInterpretation, InterpretationResult } from "@/lib/ai-engine";
import { TarotCard } from "@/components/card/TarotCard";
import { RitualDeck } from "@/components/card/RitualDeck";
import { DeepDiveChat } from "@/components/deep-dive/DeepDiveChat";
import { SocialCardModal } from "@/components/share/SocialCardModal";
import { CircleDot, Sparkles, Share2, RotateCcw, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface DecisionCoinProps {
  personaId: PersonaId;
}

const PRESET_DECISIONS = [
  "要不要冲动消费买这件大衣？",
  "今晚的社交聚会到底去不去？",
  "要不要现在就主动给TA发消息？",
  "今天下班后要不要去健身房？",
  "今天到底要不要点这杯奶茶？",
];

export const DecisionCoin: React.FC<DecisionCoinProps> = ({ personaId }) => {
  const [question, setQuestion] = useState("要不要冲动消费买这件大衣？");
  const [drawn, setDrawn] = useState<{ card: TarotCardData; isReversed: boolean } | null>(null);
  const [interpretation, setInterpretation] = useState<InterpretationResult | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleCardsDrawn = async () => {
    const raw = drawRandomCards(1);
    const primary = raw[0];
    setDrawn(primary);

    const context = {
      scenarioId: "decision-coin" as const,
      scenarioName: "赛博抛硬币",
      userQuestion: question,
      drawnCards: [{ card: primary.card, isReversed: primary.isReversed, positionName: "决断核心" }],
    };

    const localInterp = generateSmartInterpretation(personaId, context);
    setInterpretation(localInterp);

    const realInterp = await getTarotInterpretation(personaId, context);
    setInterpretation(realInterp);

    try {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 }, colors: ["#00FF66", "#00F0FF", "#E2F952"] });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setDrawn(null);
    setInterpretation(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 决策输入与预设 */}
      <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-3">
        <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-semibold">
          <CircleDot className="w-4 h-4 text-cyber-yellow" />
          纠结星人提问（输入一件让你犹豫不决的小事）：
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="例如：“今晚社交局到底去不去”..."
          className="px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyber-yellow transition-all"
        />

        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="text-[11px] font-mono text-slate-500 py-1">热门纠结：</span>
          {PRESET_DECISIONS.map((preset, i) => (
            <button
              key={i}
              onClick={() => setQuestion(preset)}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-dark-surface hover:bg-dark-hover border border-dark-border text-slate-300 transition-colors cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {!drawn ? (
        <div className="w-full max-w-md">
          <RitualDeck onCardsDrawn={handleCardsDrawn} requiredCardCount={1} />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
          {/* 单牌展示 */}
          <div className="flex flex-col items-center">
            <TarotCard
              card={drawn.card}
              isReversed={drawn.isReversed}
              isFlipped={true}
              size="lg"
              label="决断之镜"
            />
          </div>

          {/* 决策结果指示牌 */}
          <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-4 shadow-xl">
            {/* 顶栏倾向性 */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-dark-surface border border-dark-border">
              <div className="flex items-center gap-2.5">
                {drawn.card.decisionVibe.recommendation === "GO" && (
                  <CheckCircle2 className="w-6 h-6 text-cyber-lime" />
                )}
                {drawn.card.decisionVibe.recommendation === "HOLD" && (
                  <AlertTriangle className="w-6 h-6 text-cyber-yellow" />
                )}
                {drawn.card.decisionVibe.recommendation === "RUN" && (
                  <XCircle className="w-6 h-6 text-cyber-pink" />
                )}
                <div>
                  <div className="text-xs font-mono text-slate-400">决断倾向 (AI DECISION)</div>
                  <div
                    className={`text-lg font-bold font-display ${
                      drawn.card.decisionVibe.recommendation === "GO"
                        ? "text-cyber-lime"
                        : drawn.card.decisionVibe.recommendation === "HOLD"
                        ? "text-cyber-yellow"
                        : "text-cyber-pink"
                    }`}
                  >
                    {drawn.card.decisionVibe.recommendation === "GO" && "冲！坚决执行 (GO)"}
                    {drawn.card.decisionVibe.recommendation === "HOLD" && "等等！按兵不动 (HOLD)"}
                    {drawn.card.decisionVibe.recommendation === "RUN" && "快跑！千万别干 (RUN)"}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono text-slate-400">支持率</div>
                <div className="text-xl font-black font-mono text-white">
                  {drawn.card.decisionVibe.percentage}%
                </div>
              </div>
            </div>

            {/* 避坑提醒 */}
            <div className="p-3 rounded-xl bg-rose-950/20 border border-cyber-pink/30 text-xs text-slate-200">
              <span className="text-cyber-pink font-mono font-bold block mb-1">
                ⚠️ 核心避坑点 (Key Caution):
              </span>
              {drawn.card.decisionVibe.caution}
            </div>

            {/* AI 人格解读金句 */}
            {interpretation && (
              <div className="p-3.5 rounded-xl bg-dark-surface border border-dark-border text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>{interpretation.oneLiner}</strong>
                <p className="mt-1.5 text-xs text-slate-400">{interpretation.actionItem}</p>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => setShowShareModal(true)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyber-lime to-emerald-400 text-black font-display font-bold text-sm flex items-center justify-center gap-2 shadow-neon-green/30 hover:shadow-neon-green/60 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                生成决断结果卡片
              </button>
              <button
                onClick={handleReset}
                className="py-2.5 px-4 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border text-slate-300 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                换个问题抛硬币
              </button>
            </div>
          </div>

          {/* 深度多轮追问 */}
          <div className="w-full max-w-xl">
            <DeepDiveChat
              personaId={personaId}
              context={{
                scenarioId: "decision-coin",
                scenarioName: "赛博抛硬币",
                userQuestion: question,
                drawnCards: [drawn],
              }}
            />
          </div>

          {/* 分享弹窗 */}
          {showShareModal && interpretation && (
            <SocialCardModal
              card={drawn.card}
              isReversed={drawn.isReversed}
              personaId={personaId}
              scenarioName="赛博抛硬币"
              oneLiner={`问题：“${question}” ➔ 决断：${drawn.card.decisionVibe.recommendation} (${drawn.card.decisionVibe.percentage}%)`}
              actionItem={drawn.card.decisionVibe.caution}
              onClose={() => setShowShareModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

