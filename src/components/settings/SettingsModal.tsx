"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "@/lib/audio-synthesizer";
import { X, Volume2, VolumeX, Smartphone, Key, Cpu, ShieldCheck } from "lucide-react";

interface SettingsModalProps {
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [modelName, setModelName] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setAudioEnabled(soundManager.enabled);
    setHapticEnabled(soundManager.hapticEnabled);

    const savedKey = localStorage.getItem("cybertarot_api_key") || "";
    const savedUrl = localStorage.getItem("cybertarot_base_url") || "";
    const savedModel = localStorage.getItem("cybertarot_model") || "";
    setApiKey(savedKey);
    setBaseUrl(savedUrl);
    setModelName(savedModel);
  }, []);

  const handleToggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    soundManager.enabled = next;
    if (next) soundManager.playButtonClick();
  };

  const handleToggleHaptic = () => {
    const next = !hapticEnabled;
    setHapticEnabled(next);
    soundManager.hapticEnabled = next;
    if (next) soundManager.triggerHaptic(50);
  };

  const handleSaveApiSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("cybertarot_api_key", apiKey.trim());
    localStorage.setItem("cybertarot_base_url", baseUrl.trim());
    localStorage.setItem("cybertarot_model", modelName.trim());
    soundManager.playChimeSound();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-md w-full bg-dark-card border border-dark-border rounded-3xl p-6 shadow-2xl flex flex-col gap-5 my-auto">
        {/* 头部 */}
        <div className="flex justify-between items-center border-b border-dark-border/80 pb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyber-lime" />
            <h3 className="text-base font-bold text-white font-display">
              赛博偏好与模型配置 (Settings)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-dark-hover text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 交互声学与触觉控制 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
            仪式感触感开关
          </h4>

          <div className="flex items-center justify-between p-3 rounded-xl bg-dark-surface border border-dark-border">
            <div className="flex items-center gap-2.5">
              {audioEnabled ? (
                <Volume2 className="w-4 h-4 text-cyber-lime" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200">Web Audio 物理合成音效</span>
                <span className="text-[10px] text-slate-500">洗牌摩擦声、切牌与3D翻牌和弦</span>
              </div>
            </div>
            <button
              onClick={handleToggleAudio}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                audioEnabled ? "bg-cyber-lime" : "bg-dark-border"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-black transition-transform absolute top-1 ${
                  audioEnabled ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-dark-surface border border-dark-border">
            <div className="flex items-center gap-2.5">
              <Smartphone className={`w-4 h-4 ${hapticEnabled ? "text-cyber-cyan" : "text-slate-500"}`} />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200">手机端触感震动 (Haptics)</span>
                <span className="text-[10px] text-slate-500">洗牌与翻牌时的轻微触觉反馈</span>
              </div>
            </div>
            <button
              onClick={handleToggleHaptic}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                hapticEnabled ? "bg-cyber-cyan" : "bg-dark-border"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-black transition-transform absolute top-1 ${
                  hapticEnabled ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 自定义大模型 API 接入 (BYOK) */}
        <form onSubmit={handleSaveApiSettings} className="flex flex-col gap-3 border-t border-dark-border/80 pt-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-cyber-yellow" />
              自定义大模型 (BYOK 选项)
            </h4>
            <span className="text-[10px] font-mono text-cyber-lime flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              内置免配引擎已激活
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            默认使用开箱即用的高情商离线生成引擎（包含 78 张现代网梗牌意与 4 大 AI 人格）。如需接入原生模型（如 OpenAI、DeepSeek、Gemini），可在此填入 Key。
          </p>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-mono text-slate-400">API Key:</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-... (选填，留空则使用内置高情商引擎)"
              className="px-3 py-2 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyber-lime font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono text-slate-400">Base URL (选填):</label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://api.openai.com/v1"
                className="px-3 py-2 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyber-lime font-mono"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono text-slate-400">Model Name (选填):</label>
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="deepseek-chat / gpt-4o"
                className="px-3 py-2 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyber-lime font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 py-2.5 px-4 rounded-xl bg-dark-hover hover:bg-slate-700 text-white font-mono text-xs font-bold transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
          >
            {saveSuccess ? "✓ 配置已保存在本地" : "保存配置至本地浏览器"}
          </button>
        </form>
      </div>
    </div>
  );
};

