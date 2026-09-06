"use client";

import React, { useEffect, useRef, useState } from "react";
import { TarotCardData } from "@/data/tarot-cards";
import { PERSONAS, PersonaId } from "@/lib/ai-engine";
import { soundManager } from "@/lib/audio-synthesizer";
import { Download, Copy, X, Sparkles, Check } from "lucide-react";
import { toPng } from "html-to-image";
import QRCode from "qrcode";

interface SocialCardModalProps {
  card: TarotCardData;
  isReversed: boolean;
  personaId: PersonaId;
  scenarioName: string;
  oneLiner: string;
  actionItem: string;
  onClose: () => void;
}

export const SocialCardModal: React.FC<SocialCardModalProps> = ({
  card,
  isReversed,
  personaId,
  scenarioName,
  oneLiner,
  actionItem,
  onClose,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const persona = PERSONAS[personaId];
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    // 生成动态二维码
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://cybertarot.app";
    QRCode.toDataURL(currentUrl, {
      width: 140,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    }).then(setQrCodeUrl);
  }, []);

  // 下载高清海报
  const handleDownloadImage = async () => {
    if (!cardRef.current || isExporting) return;
    setIsExporting(true);
    soundManager.playButtonClick();

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2, // 2x 高清视网膜质量
      });

      const link = document.createElement("a");
      link.download = `CyberTarot-${card.nameEn}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      soundManager.playChimeSound();
    } catch (err) {
      console.error("Failed to generate image:", err);
    } finally {
      setIsExporting(false);
    }
  };

  // 复制文本
  const handleCopyText = () => {
    const text = `【CyberTarot · ${scenarioName}】\n今日抽牌：${card.nameCn}（${isReversed ? "逆位" : "正位"}）\n今日定调：${card.memeQuote}\n行动建议：${actionItem}\n—— 来自${persona.name}的赛博防内耗指南`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    soundManager.playButtonClick();
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-sm w-full flex flex-col items-center gap-4 my-auto">
        {/* 顶部工具栏 */}
        <div className="w-full flex justify-between items-center text-slate-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyber-yellow" />
            <span className="text-sm font-bold font-display text-white">
              小红书 / 朋友圈风拍立得卡片
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 待导出的拍立得卡片主体 (3:4 比例设计) */}
        <div
          ref={cardRef}
          className="w-full bg-[#FAFAFA] text-slate-900 rounded-3xl p-5 shadow-2xl flex flex-col justify-between border-4 border-[#08090C] relative overflow-hidden"
          style={{ minHeight: "520px" }}
        >
          {/* Y2K 酸性顶部小贴纸 */}
          <div className="flex justify-between items-center mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#08090C] text-cyber-lime font-mono text-[10px] font-bold tracking-wider">
              ✦ CYBER TAROT LAB ✦
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
              {new Date().toLocaleDateString("zh-CN")}
            </span>
          </div>

          {/* 卡牌插画展示框 (仿宝丽来照片框) */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-[#0F1218] border-2 border-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-20 holographic-foil" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`text-3xl font-bold font-display tracking-wider mb-1 ${
                  isReversed ? "text-cyber-pink" : "text-cyber-lime"
                }`}
              >
                {card.nameCn}
              </div>
              <div className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-2">
                {card.nameEn} · {isReversed ? "REVERSED" : "UPRIGHT"}
              </div>
              <div className="flex gap-1.5">
                {(isReversed ? card.reversedKeywords : card.uprightKeywords).slice(0, 3).map((kw, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* 场景印章 */}
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-cyber-yellow/90 text-black font-mono text-[9px] font-extrabold uppercase rotate-[-6deg]">
              {scenarioName}
            </div>
          </div>

          {/* 中间核心人设金句 */}
          <div className="my-4 text-center">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
              今日人设 / TODAY'S MOOD
            </div>
            <div className="text-base sm:text-lg font-black font-display text-black leading-snug tracking-tight">
              “{card.memeQuote}”
            </div>
          </div>

          {/* 破局指引 */}
          <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed mb-3">
            <div className="font-bold text-[11px] text-slate-900 mb-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-pink" />
              {persona.name}清醒建议：
            </div>
            {actionItem}
          </div>

          {/* 底部：二维码与专属印章 */}
          <div className="flex justify-between items-center pt-2 border-t-2 border-dashed border-slate-200">
            <div className="flex items-center gap-2">
              {qrCodeUrl ? (
                <img
                  src={qrCodeUrl}
                  alt="QR Code"
                  className="w-12 h-12 rounded-lg border border-slate-300"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-slate-200" />
              )}
              <div className="flex flex-col text-[9px] text-slate-500 font-mono">
                <span className="font-bold text-slate-800">赛博防内耗指南</span>
                <span>扫码抽取今日清醒符</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div
                className="text-[10px] font-mono px-2 py-0.5 rounded font-extrabold"
                style={{ backgroundColor: `${persona.accentColor}22`, color: persona.accentColor }}
              >
                {persona.badge}
              </div>
              <span className="text-[9px] font-mono text-slate-400 mt-0.5">CYBER VERIFIED</span>
            </div>
          </div>
        </div>

        {/* 底部操作按钮 */}
        <div className="flex gap-3 w-full">
          <button
            onClick={handleDownloadImage}
            disabled={isExporting}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyber-lime to-emerald-400 text-black font-bold font-display text-sm flex items-center justify-center gap-2 shadow-neon-green/30 hover:shadow-neon-green/60 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            {isExporting ? "正在生成高清海报..." : "一键保存海报 (PNG)"}
          </button>
          <button
            onClick={handleCopyText}
            className="py-3 px-4 rounded-xl bg-dark-card hover:bg-dark-hover border border-dark-border text-slate-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            {isCopied ? <Check className="w-4 h-4 text-cyber-lime" /> : <Copy className="w-4 h-4" />}
            {isCopied ? "已复制" : "复制文案"}
          </button>
        </div>
      </div>
    </div>
  );
};

