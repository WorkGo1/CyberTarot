"use client";

import React, { useState } from "react";
import { TarotCardData, drawRandomCards } from "@/data/tarot-cards";
import { PersonaId, PERSONAS, getTarotInterpretation, generateSmartInterpretation, InterpretationResult } from "@/lib/ai-engine";
import { TarotCard } from "@/components/card/TarotCard";
import { RitualDeck } from "@/components/card/RitualDeck";
import { DeepDiveChat } from "@/components/deep-dive/DeepDiveChat";
import { SocialCardModal } from "@/components/share/SocialCardModal";
import { MarkdownText } from "@/components/ui/MarkdownText";
import { Coffee, ShieldAlert, Sparkles, Share2, RotateCcw, Flame, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface DailyVibeProps {
  personaId: PersonaId;
}

export const DailyVibe: React.FC<DailyVibeProps> = ({ personaId }) => {
  const [subMode, setSubMode] = useState<"banwei" | "energy">("banwei");
  const [drawn, setDrawn] = useState<{ card: TarotCardData; isReversed: boolean } | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [interpretation, setInterpretation] = useState<InterpretationResult | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // 抽牌
  const handleCardsDrawn = async () => {
    const cards = drawRandomCards(1);
    const primary = cards[0];
    setDrawn(primary);
    setIsFlipped(true);

    const context = {
      scenarioId: "daily-vibe" as const,
      scenarioName: subMode === "banwei" ? "打工人今日班味运势" : "情绪能量签",
      drawnCards: [{ card: primary.card, isReversed: primary.isReversed, positionName: "今日核心能量" }],
    };

    // 先用本地引擎秒出结果，若有 API Key 则异步被真实 AI 接管覆盖
    const localInterp = generateSmartInterpretation(personaId, context);
    setInterpretation(localInterp);

    const hasApiKey = typeof window !== "undefined" && !!localStorage.getItem("cybertarot_api_key")?.trim();
    if (hasApiKey) {
      setIsAiLoading(true);
      try {
        const realInterp = await getTarotInterpretation(personaId, context);
        setInterpretation(realInterp);
      } finally {
        setIsAiLoading(false);
      }
    }

    // 庆祝纸屑
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#00FF66", "#FF2E93", "#00F0FF", "#E2F952"],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setDrawn(null);
    setIsFlipped(false);
    setInterpretation(null);
    setIsAiLoading(false);
  };

  // 生成今日宜忌
  const getDosAndDonts = (card: TarotCardData, isRev: boolean) => {
    if (isRev) {
      return {
        dos: ["戴耳机假装很忙", "准点拎包闪退", "喝一杯全冰少糖黑咖"],
        donts: ["主动接新需求", "在电梯里和老板对视", "跟傻子据理力争"],
      };
    }
    return {
      dos: ["开麦提出大胆方案", "点一份热乎的午餐", "给靠谱的同事点赞"],
      donts: ["深夜为工作失眠", "陷入自我怀疑", "盲目承诺加班"],
    };
  };

  const dosAndDonts = drawn ? getDosAndDonts(drawn.card, drawn.isReversed) : null;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* 子玩法切换 */}
      <div className="flex rounded-xl bg-dark-surface p-1 border border-dark-border">
        <button
          onClick={() => {
            setSubMode("banwei");
            handleReset();
          }}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            subMode === "banwei"
              ? "bg-cyber-lime text-black shadow-neon-green/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          ☕ 打工人今日班味运势
        </button>
        <button
          onClick={() => {
            setSubMode("energy");
            handleReset();
          }}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            subMode === "energy"
              ? "bg-cyber-pink text-white shadow-neon-pink/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          ✨ 极简情绪能量签
        </button>
      </div>

      {/* 未抽牌状态：展示洗牌切牌控台 */}
      {!drawn ? (
        <div className="w-full max-w-md">
          <RitualDeck onCardsDrawn={handleCardsDrawn} requiredCardCount={1} />
        </div>
      ) : (
        /* 已抽牌状态：展示卡牌与多维结构化解读 */
        <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
          {/* 卡牌中心展示 */}
          <div className="flex flex-col items-center">
            <TarotCard
              card={drawn.card}
              isReversed={drawn.isReversed}
              isFlipped={isFlipped}
              size="lg"
              label={subMode === "banwei" ? "今日班味投射" : "今日宇宙背景辐射"}
            />
          </div>

          {/* 班味指标仪表板 (如果是班味模式) */}
          {subMode === "banwei" && (
            <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-cyber-yellow" />
                  <span className="text-sm font-bold font-display text-white">今日班味指数 (Banwei Index)</span>
                </div>
                <span className="text-lg font-mono font-black text-cyber-lime">
                  {drawn.card.banweiIndex}%
                </span>
              </div>

              {/* 进度条 */}
              <div className="w-full h-3 rounded-full bg-dark-surface overflow-hidden border border-slate-800">
                <div
                  className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-cyber-lime via-cyber-yellow to-cyber-pink"
                  style={{ width: `${drawn.card.banweiIndex}%` }}
                />
              </div>

              {/* 宜忌贴纸 */}
              {dosAndDonts && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-cyber-lime/40 flex flex-col gap-1.5">
                    <span className="text-xs font-mono font-bold text-cyber-lime flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5" />
                      今日宜 (DO)
                    </span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {dosAndDonts.dos.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyber-lime" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-950/20 border border-cyber-pink/40 flex flex-col gap-1.5">
                    <span className="text-xs font-mono font-bold text-cyber-pink flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      今日忌 (DON'T)
                    </span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {dosAndDonts.donts.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyber-pink" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 解读结果呈现卡片 */}
          {interpretation && (
            <div className="w-full max-w-xl p-5 rounded-2xl bg-dark-card border border-dark-border flex flex-col gap-4 shadow-xl">
              {/* 定调金句 */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-dark-surface to-dark-hover border-l-4 border-cyber-lime">
                <p className="text-sm sm:text-base font-bold text-white font-display leading-relaxed">
                  {interpretation.oneLiner}
                </p>
              </div>

              {/* 深度现状剖析 */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-slate-400 font-semibold">【现状深度剖析】</span>
                <div className="text-xs sm:text-sm text-slate-300">
                  <MarkdownText content={interpretation.situationAnalysis} />
                </div>
              </div>

              {/* AI 思考中可视化提示 */}
              {isAiLoading && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-dark-surface via-purple-950/20 to-dark-surface border border-cyber-pink/50 animate-pulse flex flex-col gap-2 shadow-neon-pink/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyber-pink animate-ping" />
                      <span className="text-xs font-mono font-bold text-cyber-pink">
                        🔮 【{PERSONAS[personaId].name}】正在连线大模型深度思考中...
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">最长等待2分钟</span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-cyber-pink shrink-0" />
                    正在结合抽取的牌意与【{PERSONAS[personaId].name}】的独特人格，为您量身定制专属破局 Action Item...
                  </p>
                </div>
              )}

              {/* Action Item */}
              <div className="p-4 rounded-xl bg-cyber-lime/10 border border-cyber-lime/30 text-xs sm:text-sm text-slate-200 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-cyber-lime">
                    【Action Item · 今日破局小动作】
                  </span>
                  {interpretation.source === "ai" ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40 shadow-sm flex items-center gap-1">
                      ✨ AI 专属建议 · {interpretation.modelName || "原生模型"}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                      ⚡ 本地智能引擎
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-slate-200">
                  <MarkdownText content={interpretation.actionItem} />
                </div>
                {interpretation.errorMessage && (
                  <div className="text-[11px] font-mono text-amber-400/90 pt-1 border-t border-slate-800/80">
                    ⚠️ 提示: {interpretation.errorMessage}（已由高情商本地引擎完美呈现）
                  </div>
                )}
              </div>

              {/* 幸运补给 */}
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-yellow shrink-0" />
                <span>
                  <strong>今日转运小彩蛋：</strong> {interpretation.luckyBonus}
                </span>
              </div>

              {/* 按钮操作组 */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyber-lime to-emerald-400 text-black font-display font-bold text-sm flex items-center justify-center gap-2 shadow-neon-green/30 hover:shadow-neon-green/60 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  生成小红书/朋友圈分享卡片
                </button>
                <button
                  onClick={handleReset}
                  className="py-2.5 px-4 rounded-xl bg-dark-surface hover:bg-dark-hover border border-dark-border text-slate-300 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  重新抽牌
                </button>
              </div>
            </div>
          )}

          {/* 深度多轮追问组件 */}
          {drawn && (
            <div className="w-full max-w-xl">
              <DeepDiveChat
                personaId={personaId}
                context={{
                  scenarioId: "daily-vibe",
                  scenarioName: subMode === "banwei" ? "打工人今日班味运势" : "情绪能量签",
                  drawnCards: [{ card: drawn.card, isReversed: drawn.isReversed }],
                }}
              />
            </div>
          )}

          {/* 分享模态框 */}
          {showShareModal && interpretation && (
            <SocialCardModal
              card={drawn.card}
              isReversed={drawn.isReversed}
              personaId={personaId}
              scenarioName={subMode === "banwei" ? "打工人今日班味运势" : "情绪能量签"}
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

