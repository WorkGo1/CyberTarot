"use client";

import React, { useState } from "react";
import { TarotCardData, drawRandomCards } from "@/data/tarot-cards";
import { PersonaId, getTarotInterpretation, generateSmartInterpretation, InterpretationResult } from "@/lib/ai-engine";
import { TarotCard } from "@/components/card/TarotCard";
import { RitualDeck } from "@/components/card/RitualDeck";
import { DeepDiveChat } from "@/components/deep-dive/DeepDiveChat";
import { SocialCardModal } from "@/components/share/SocialCardModal";
import { MessageSquare, Sparkles, Share2, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface SubtextTranslatorProps {
  personaId: PersonaId;
}

const PRESET_SUBTEXTS = [
  "你最近工作挺清闲啊？",
  "这个方案你再回去好好想想。",
  "大家要有大局观和奉献精神。",
  "我原则上是支持你的方案的。",
  "能者多劳，这个项目你带着做做。",
];

export const SubtextTranslator: React.FC<SubtextTranslatorProps> = ({ personaId }) => {
  const [question, setQuestion] = useState("你最近工作挺清闲啊？");
  const [drawnCards, setDrawnCards] = useState<
    { card: TarotCardData; isReversed: boolean; positionName: string }[] | null
  >(null);
  const [interpretation, setInterpretation] = useState<InterpretationResult | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  // 抽 3 张牌
  const handleCardsDrawn = async () => {
    const raw = drawRandomCards(3);
    const spread = [
      { card: raw[0].card, isReversed: raw[0].isReversed, positionName: "1. 表面态度 (Surface)" },
      { card: raw[1].card, isReversed: raw[1].isReversed, positionName: "2. 深层潜台词 (Subtext)" },
      { card: raw[2].card, isReversed: raw[2].isReversed, positionName: "3. 高情商应对 (Strategy)" },
    ];
    setDrawnCards(spread);

    const context = {
      scenarioId: "subtext" as const,
      scenarioName: "老板/同事潜台词翻译器",
      userQuestion: question,
      drawnCards: spread,
    };

    const localInterp = generateSmartInterpretation(personaId, context);
    setInterpretation(localInterp);

    const realInterp = await getTarotInterpretation(personaId, context);
    setInterpretation(realInterp);

    try {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 }, colors: ["#00F0FF", "#00FF66", "#E2F952"] });
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
      {/* 潜台词输入与预设芯片 */}
      <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-3">
        <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-semibold">
          <MessageSquare className="w-4 h-4 text-cyber-cyan" />
          输入领导/同事让你内耗的那句话：
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="例如：“这个方案你再好好想想”..."
          className="px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyber-cyan transition-all"
        />

        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="text-[11px] font-mono text-slate-500 py-1">高频黑话：</span>
          {PRESET_SUBTEXTS.map((preset, i) => (
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

      {/* 未抽牌：仪式控台 */}
      {!drawnCards ? (
        <div className="w-full max-w-md">
          <RitualDeck onCardsDrawn={handleCardsDrawn} requiredCardCount={3} />
        </div>
      ) : (
        /* 已抽牌：3牌阵列展示 */
        <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
          {/* 3 张牌阵列 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl justify-items-center">
            {drawnCards.map((item, idx) => (
              <TarotCard
                key={idx}
                card={item.card}
                isReversed={item.isReversed}
                isFlipped={true}
                size="sm"
                label={item.positionName}
              />
            ))}
          </div>

          {/* 翻译解读结果 */}
          {interpretation && (
            <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-4 shadow-xl">
              <div className="p-4 rounded-xl bg-gradient-to-r from-dark-surface to-dark-hover border-l-4 border-cyber-cyan">
                <span className="text-xs font-mono text-cyber-cyan font-bold block mb-1">
                  目标话术：“{question}”
                </span>
                <p className="text-sm sm:text-base font-bold text-white font-display leading-relaxed">
                  {interpretation.oneLiner}
                </p>
              </div>

              {/* 3层解构 */}
              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-dark-surface border border-slate-800 flex flex-col gap-1">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    ① 表面伪装态度 (【{drawnCards[0].card.nameCn}】{drawnCards[0].isReversed ? "逆位" : "正位"}):
                  </span>
                  <p className="text-xs text-slate-300">
                    {drawnCards[0].card.workplaceVibe[drawnCards[0].isReversed ? "reversed" : "upright"]}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-dark-surface border border-cyber-pink/40 flex flex-col gap-1">
                  <span className="text-xs font-mono font-bold text-cyber-pink">
                    ② 真实潜台词 (【{drawnCards[1].card.nameCn}】{drawnCards[1].isReversed ? "逆位" : "正位"}):
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    {drawnCards[1].card.workplaceVibe.subtextMeaning}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-dark-surface border border-cyber-lime/40 flex flex-col gap-1">
                  <span className="text-xs font-mono font-bold text-cyber-lime">
                    ③ 高情商摸鱼/防雷策略 (【{drawnCards[2].card.nameCn}】{drawnCards[2].isReversed ? "逆位" : "正位"}):
                  </span>
                  <p className="text-xs text-slate-300">
                    {drawnCards[2].card.actionItem}
                  </p>
                </div>
              </div>

              {/* 幸运补给 */}
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-yellow shrink-0" />
                <span><strong>防甩锅锦囊：</strong>{interpretation.luckyBonus}</span>
              </div>

              {/* 操作按钮组 */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-400 text-black font-display font-bold text-sm flex items-center justify-center gap-2 shadow-neon-cyan/30 hover:shadow-neon-cyan/60 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  生成潜台词解密海报
                </button>
                <button
                  onClick={handleReset}
                  className="py-2.5 px-4 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border text-slate-300 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  换句话测测
                </button>
              </div>
            </div>
          )}

          {/* 深度多轮追问 */}
          <div className="w-full max-w-xl">
            <DeepDiveChat
              personaId={personaId}
              context={{
                scenarioId: "subtext",
                scenarioName: "老板/同事潜台词翻译器",
                userQuestion: question,
                drawnCards: drawnCards,
              }}
            />
          </div>

          {/* 分享弹窗 */}
          {showShareModal && interpretation && (
            <SocialCardModal
              card={drawnCards[1].card}
              isReversed={drawnCards[1].isReversed}
              personaId={personaId}
              scenarioName="老板潜台词翻译器"
              oneLiner={`原话：“${question}” ➔ 真相：${drawnCards[1].card.workplaceVibe.subtextMeaning}`}
              actionItem={drawnCards[2].card.actionItem}
              onClose={() => setShowShareModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

