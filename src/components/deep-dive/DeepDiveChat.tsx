"use client";

import React, { useState } from "react";
import { PERSONAS, PersonaId, ScenarioContext, generateDeepDiveResponse } from "@/lib/ai-engine";
import { soundManager } from "@/lib/audio-synthesizer";
import { Send, Sparkles, MessageCircle } from "lucide-react";

interface DeepDiveChatProps {
  personaId: PersonaId;
  context: ScenarioContext;
}

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

export const DeepDiveChat: React.FC<DeepDiveChatProps> = ({
  personaId,
  context,
}) => {
  const persona = PERSONAS[personaId];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const maxRounds = 3;
  const currentRound = messages.filter((m) => m.sender === "user").length;

  const handleSendQuestion = (questionText: string) => {
    if (!questionText.trim() || currentRound >= maxRounds || isTyping) return;

    soundManager.playButtonClick();
    soundManager.triggerHaptic(30);

    const newMsgs: ChatMessage[] = [...messages, { sender: "user", text: questionText }];
    setMessages(newMsgs);
    setInputVal("");
    setIsTyping(true);

    // 模拟思考并生成回应
    setTimeout(() => {
      const reply = generateDeepDiveResponse(questionText, personaId, context);
      setMessages([...newMsgs, { sender: "ai", text: reply }]);
      setIsTyping(false);
      soundManager.playChimeSound();
    }, 600);
  };

  return (
    <div className="w-full mt-6 p-5 rounded-2xl bg-dark-card/90 border border-dark-border/90 shadow-xl flex flex-col gap-4">
      {/* 头部指示条 */}
      <div className="flex items-center justify-between border-b border-dark-border/80 pb-3">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-cyber-cyan" />
          <h4 className="text-sm font-bold text-white font-display">
            基于当前牌阵与【{persona.name}】深度追问 (Deep Dive)
          </h4>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-dark-surface border border-slate-700 text-slate-300">
          追问进度: {currentRound}/{maxRounds} 轮
        </span>
      </div>

      {/* 快捷追问选项芯片 */}
      {currentRound < maxRounds && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-slate-400 font-mono py-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyber-yellow" />
            推荐追问:
          </span>
          {persona.presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuestion(q)}
              disabled={isTyping}
              className="text-xs px-3 py-1.5 rounded-lg bg-dark-surface hover:bg-dark-hover border border-dark-border hover:border-slate-600 text-slate-300 hover:text-white transition-all cursor-pointer text-left"
            >
              “{q}”
            </button>
          ))}
        </div>
      )}

      {/* 聊天气泡历史 */}
      {messages.length > 0 && (
        <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-1">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-cyber-lime/20 border border-cyber-lime/40 text-slate-100 rounded-tr-none"
                    : "bg-dark-surface border border-dark-border text-slate-200 rounded-tl-none"
                }`}
              >
                {msg.sender === "ai" && (
                  <div
                    className="text-[11px] font-mono font-bold mb-1 flex items-center gap-1"
                    style={{ color: persona.accentColor }}
                  >
                    <span>{persona.name}</span>
                  </div>
                )}
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono italic animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime animate-bounce" />
              {persona.name} 正在快速组织毒舌/治愈金句...
            </div>
          )}
        </div>
      )}

      {/* 输入框或额度耗尽提示 */}
      {currentRound < maxRounds ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendQuestion(inputVal);
          }}
          className="flex items-center gap-2 mt-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={`继续向${persona.name}提问（如：那我该怎么回微信？）...`}
            disabled={isTyping}
            className="flex-1 px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyber-lime transition-all"
          />
          <button
            type="submit"
            disabled={!inputVal.trim() || isTyping}
            className="px-4 py-2.5 rounded-xl bg-cyber-lime text-black font-bold font-display text-sm flex items-center gap-1.5 hover:opacity-90 disabled:opacity-40 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            追问
          </button>
        </form>
      ) : (
        <div className="text-center py-2 text-xs font-mono text-slate-500 border-t border-dark-border/60">
          已完成本轮 3 次深度追问 · 牌阵能量已完全释放 · 建议保存分享卡片或休息片刻
        </div>
      )}
    </div>
  );
};

