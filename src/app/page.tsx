"use client";

import React, { useState } from "react";
import { PersonaId } from "@/lib/ai-engine";
import { soundManager } from "@/lib/audio-synthesizer";
import { PersonaSelector } from "@/components/personas/PersonaSelector";
import { DailyVibe } from "@/components/scenarios/DailyVibe";
import { SubtextTranslator } from "@/components/scenarios/SubtextTranslator";
import { JobBranch } from "@/components/scenarios/JobBranch";
import { CrushProbe } from "@/components/scenarios/CrushProbe";
import { DecisionCoin } from "@/components/scenarios/DecisionCoin";
import { CyberTreeHoleModal } from "@/components/tree-hole/CyberTreeHoleModal";
import { SettingsModal } from "@/components/settings/SettingsModal";
import {
  Sparkles,
  Coffee,
  MessageSquare,
  GitBranch,
  Heart,
  CircleDot,
  Radio,
  Settings,
  Volume2,
  VolumeX,
} from "lucide-react";

type ScenarioTab = "daily-vibe" | "subtext" | "job-branch" | "crush" | "decision-coin";

export default function Home() {
  const [activeTab, setActiveTab] = useState<ScenarioTab>("daily-vibe");
  const [selectedPersona, setSelectedPersona] = useState<PersonaId>("bestie");
  const [showTreeHole, setShowTreeHole] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const handleTabChange = (tab: ScenarioTab) => {
    soundManager.playButtonClick();
    soundManager.triggerHaptic(20);
    setActiveTab(tab);
  };

  const handleToggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    soundManager.enabled = next;
    if (next) soundManager.playButtonClick();
  };

  const scenarioTabs = [
    {
      id: "daily-vibe" as ScenarioTab,
      name: "今日班味运势",
      subtext: "每日一抽 / 情绪天气",
      icon: Coffee,
      color: "text-cyber-lime",
    },
    {
      id: "subtext" as ScenarioTab,
      name: "潜台词翻译器",
      subtext: "老板同事黑话解码",
      icon: MessageSquare,
      color: "text-cyber-cyan",
    },
    {
      id: "job-branch" as ScenarioTab,
      name: "离职跳槽天平",
      subtext: "走留二选一分支对比",
      icon: GitBranch,
      color: "text-cyber-yellow",
    },
    {
      id: "crush" as ScenarioTab,
      name: "Crush 意图探针",
      subtext: "暧昧推演 / 恋爱脑清醒",
      icon: Heart,
      color: "text-cyber-pink",
    },
    {
      id: "decision-coin" as ScenarioTab,
      name: "赛博抛硬币",
      subtext: "纠结星人微型决策",
      icon: CircleDot,
      color: "text-cyber-purple",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-3 sm:p-6 max-w-5xl mx-auto">
      {/* 顶部导航与品牌栏 */}
      <header className="w-full flex justify-between items-center py-3 border-b border-dark-border/80 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyber-lime to-cyber-cyan flex items-center justify-center shadow-neon-green/40">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black font-display tracking-wide text-white">
                CYBER TAROT
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-cyber-lime/10 text-cyber-lime border border-cyber-lime/30 font-bold">
                00's 防内耗指南
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400">
              赛博防内耗指南 & 情绪投射镜
            </p>
          </div>
        </div>

        {/* 顶部右侧功能入口 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundManager.playButtonClick();
              setShowTreeHole(true);
            }}
            className="px-3 py-1.5 rounded-xl bg-dark-card hover:bg-dark-hover border border-cyber-lime/40 text-cyber-lime text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="hidden sm:inline">赛博能量池</span>
            <span className="sm:hidden">树洞</span>
          </button>

          <button
            onClick={handleToggleAudio}
            title={audioEnabled ? "静音" : "开启声效"}
            className="p-2 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            {audioEnabled ? (
              <Volume2 className="w-4 h-4 text-cyber-lime" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          <button
            onClick={() => {
              soundManager.playButtonClick();
              setShowSettings(true);
            }}
            title="偏好与API设置"
            className="p-2 rounded-xl bg-dark-surface hover:bg-dark-card border border-dark-border text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 主体交互内容区 */}
      <div className="w-full flex flex-col gap-6 items-center flex-1">
        {/* 场景矩阵切换标签页 (Matrix Navigation) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {scenarioTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-dark-card border-cyber-lime/80 shadow-neon-green/20"
                    : "bg-dark-surface/80 border-dark-border/80 hover:border-slate-700 hover:bg-dark-card/60"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <IconComponent
                    className={`w-4 h-4 ${isActive ? "text-cyber-lime" : tab.color}`}
                  />
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime animate-ping" />
                  )}
                </div>
                <div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-display ${
                      isActive ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {tab.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 truncate">
                    {tab.subtext}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 占卜师人格选择器 */}
        <div className="w-full">
          <PersonaSelector
            selectedPersona={selectedPersona}
            onSelectPersona={setSelectedPersona}
          />
        </div>

        {/* 当前活跃场景视图 */}
        <div className="w-full py-2">
          {activeTab === "daily-vibe" && <DailyVibe personaId={selectedPersona} />}
          {activeTab === "subtext" && (
            <SubtextTranslator personaId={selectedPersona} />
          )}
          {activeTab === "job-branch" && <JobBranch personaId={selectedPersona} />}
          {activeTab === "crush" && <CrushProbe personaId={selectedPersona} />}
          {activeTab === "decision-coin" && (
            <DecisionCoin personaId={selectedPersona} />
          )}
        </div>
      </div>

      {/* 底部声明与版权 */}
      <footer className="w-full border-t border-dark-border/80 mt-12 pt-6 pb-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-mono text-slate-400">
            CYBER TAROT LAB © {new Date().getFullYear()} · 当代打工人赛博防内耗指南
          </p>
          <p className="text-[11px] text-slate-500">
            本应用纯属现代心理投射解压与情绪抚慰，拒绝封建迷信与玄学因果论。
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
          <span>78 ARCANA MATRIX</span>
          <span>•</span>
          <span>WEB AUDIO SYNTH</span>
          <span>•</span>
          <span>00'S ANTI-FRICTION</span>
        </div>
      </footer>

      {/* 弹窗模态框 */}
      {showTreeHole && (
        <CyberTreeHoleModal onClose={() => setShowTreeHole(false)} />
      )}
      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </main>
  );
}

