"use client";

import React from "react";
import { TarotCardData } from "@/data/tarot-cards";

interface TarotCardArtProps {
  card: TarotCardData;
  size?: "sm" | "md" | "lg";
  isReversed?: boolean;
}

export const TarotCardArt: React.FC<TarotCardArtProps> = ({
  card,
  size = "md",
  isReversed = false,
}) => {
  const sizeClasses = {
    sm: "w-16 h-20",
    md: "w-28 h-36",
    lg: "w-36 h-48",
  }[size];

  return (
    <div
      className={`${sizeClasses} relative flex items-center justify-center transition-transform duration-500 select-none ${
        isReversed ? "rotate-180" : ""
      }`}
    >
      <svg
        viewBox="0 0 160 200"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(0,240,255,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 全局赛博渐变 */}
          <linearGradient id="grad-cyan-pink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#FF2E93" />
          </linearGradient>
          <linearGradient id="grad-lime-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF66" />
            <stop offset="100%" stopColor="#E2F952" />
          </linearGradient>
          <linearGradient id="grad-purple-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient id="grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>
          <linearGradient id="grad-fire" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="grad-water" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="glow-neon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 卡牌插画背景框 & 矩阵网络网格 */}
        <rect
          x="4"
          y="4"
          width="152"
          height="192"
          rx="12"
          fill="#060912"
          stroke="#1E293B"
          strokeWidth="1.5"
        />
        <path
          d="M 10 30 H 150 M 10 170 H 150 M 30 10 V 190 M 130 10 V 190"
          stroke="#1E293B"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />

        {/* 动态渲染特定卡面内容 */}
        {renderArtwork(card)}
      </svg>
    </div>
  );
};

function renderArtwork(card: TarotCardData) {
  if (card.arcana === "major") {
    return renderMajorArcana(card.number);
  }
  return renderMinorArcana(card.suit, card.number);
}

// 22 张大阿卡纳定制艺术绘图
function renderMajorArcana(num: number) {
  switch (num) {
    case 0: // 愚者 The Fool
      return (
        <g id="fool-art">
          {/* 悬崖断层 */}
          <path d="M 10 190 L 70 120 L 95 140 L 105 130 L 120 190 Z" fill="#111827" stroke="#00FF66" strokeWidth="1.5" />
          {/* 虚空跃迁门 */}
          <circle cx="115" cy="65" r="30" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4 3" className="animate-spin" />
          <circle cx="115" cy="65" r="16" fill="#00F0FF" fillOpacity="0.2" filter="url(#glow-neon)" />
          {/* 愚者剪影 - 跃步姿态 */}
          <circle cx="68" cy="72" r="8" fill="#E2F952" />
          <path d="M 68 80 L 72 105 L 85 122 M 72 105 L 60 120 M 68 88 L 50 82 M 68 88 L 88 84" stroke="#E2F952" strokeWidth="2.5" strokeLinecap="round" />
          {/* 陪伴数码犬 */}
          <path d="M 42 125 L 48 115 L 56 118 L 54 128 Z" fill="#FF2E93" />
          <text x="80" y="180" textAnchor="middle" fill="#00FF66" fontSize="9" fontFamily="monospace" letterSpacing="2">LEAP OF FAITH</text>
        </g>
      );
    case 1: // 魔术师 The Magician
      return (
        <g id="magician-art">
          {/* 无限符号 ∞ */}
          <path d="M 62 45 C 50 35, 50 55, 62 45 C 74 35, 86 55, 98 45 C 110 35, 110 55, 98 45 C 86 35, 74 55, 62 45" stroke="#00F0FF" strokeWidth="2.5" fill="none" filter="url(#glow-neon)" />
          {/* 四要素漂浮符文 */}
          <polygon points="80,68 86,80 74,80" stroke="#EF4444" fill="#EF4444" fillOpacity="0.4" /> {/* 权杖火 */}
          <path d="M 40 100 Q 48 90 56 100 L 52 112 H 44 Z" stroke="#3B82F6" fill="#3B82F6" fillOpacity="0.4" /> {/* 圣杯水 */}
          <line x1="110" y1="92" x2="124" y2="108" stroke="#00F0FF" strokeWidth="2.5" /> {/* 宝剑风 */}
          <circle cx="80" cy="128" r="9" stroke="#E2F952" strokeWidth="2" fill="#E2F952" fillOpacity="0.3" /> {/* 星币土 */}
          {/* 量子操作台矩阵 */}
          <ellipse cx="80" cy="155" rx="45" ry="14" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="80" y="182" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="monospace">QUANTUM MASTER</text>
        </g>
      );
    case 2: // 女祭司 The High Priestess
      return (
        <g id="priestess-art">
          {/* 双生数据柱 B & J */}
          <rect x="24" y="45" width="16" height="110" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="32" y="105" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold" fontFamily="monospace">B</text>
          <rect x="120" y="45" width="16" height="110" rx="3" fill="#0F172A" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="128" y="105" textAnchor="middle" fill="#F43F5E" fontSize="11" fontWeight="bold" fontFamily="monospace">J</text>
          {/* 神圣月相冠冕 */}
          <path d="M 80 50 A 18 18 0 0 0 80 86 A 12 12 0 0 1 80 50 Z" fill="#38BDF8" filter="url(#glow-neon)" />
          {/* 卷轴矩阵 TORA */}
          <rect x="62" y="110" width="36" height="42" rx="4" fill="#1E293B" stroke="#A855F7" strokeWidth="1.5" />
          <text x="80" y="135" textAnchor="middle" fill="#A855F7" fontSize="10" fontWeight="bold" fontFamily="monospace">TORA</text>
          <text x="80" y="182" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="monospace">INTUITION MATRIX</text>
        </g>
      );
    case 3: // 皇后 The Empress
      return (
        <g id="empress-art">
          {/* 金星爱意符号 ♀ */}
          <circle cx="80" cy="58" r="18" stroke="#FF2E93" strokeWidth="2" fill="#FF2E93" fillOpacity="0.2" filter="url(#glow-neon)" />
          <line x1="80" y1="76" x2="80" y2="102" stroke="#FF2E93" strokeWidth="2.5" />
          <line x1="68" y1="88" x2="92" y2="88" stroke="#FF2E93" strokeWidth="2.5" />
          {/* 赛博花蔓回路 */}
          <path d="M 30 160 Q 55 125 80 145 T 130 160" stroke="#00FF66" strokeWidth="2" fill="none" />
          <circle cx="55" cy="130" r="4" fill="#E2F952" />
          <circle cx="105" cy="130" r="4" fill="#E2F952" />
          <text x="80" y="182" textAnchor="middle" fill="#FF2E93" fontSize="9" fontFamily="monospace">DIVINE CREATION</text>
        </g>
      );
    case 4: // 皇帝 The Emperor
      return (
        <g id="emperor-art">
          {/* 黑曜石立方王座 */}
          <polygon points="40,75 80,50 120,75 120,150 80,170 40,150" stroke="#EF4444" strokeWidth="2" fill="#1F1517" />
          {/* 白羊角图腾 */}
          <path d="M 60 75 Q 50 60 62 55 Q 75 58 78 70 M 100 75 Q 110 60 98 55 Q 85 58 82 70" stroke="#F97316" strokeWidth="2.5" fill="none" />
          {/* 权杖 & 宝球 */}
          <line x1="80" y1="90" x2="80" y2="135" stroke="#EF4444" strokeWidth="3" />
          <circle cx="80" cy="85" r="7" fill="#FBBF24" />
          <text x="80" y="182" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="monospace">ABSOLUTE ORDER</text>
        </g>
      );
    case 5: // 教皇 The Hierophant
      return (
        <g id="hierophant-art">
          {/* 三重十字 */}
          <line x1="80" y1="40" x2="80" y2="125" stroke="#A855F7" strokeWidth="3" />
          <line x1="62" y1="55" x2="98" y2="55" stroke="#A855F7" strokeWidth="2.5" />
          <line x1="68" y1="72" x2="92" y2="72" stroke="#A855F7" strokeWidth="2.5" />
          <line x1="72" y1="88" x2="88" y2="88" stroke="#A855F7" strokeWidth="2.5" />
          {/* 交叉数字密钥 */}
          <line x1="60" y1="135" x2="100" y2="160" stroke="#E2F952" strokeWidth="2" />
          <line x1="100" y1="135" x2="60" y2="160" stroke="#E2F952" strokeWidth="2" />
          <circle cx="60" cy="135" r="4" fill="#060912" stroke="#E2F952" strokeWidth="1.5" />
          <circle cx="100" cy="135" r="4" fill="#060912" stroke="#E2F952" strokeWidth="1.5" />
          <text x="80" y="182" textAnchor="middle" fill="#A855F7" fontSize="9" fontFamily="monospace">SACRED PROTOCOL</text>
        </g>
      );
    case 6: // 恋人 The Lovers
      return (
        <g id="lovers-art">
          {/* 量子纠缠心型双螺旋 */}
          <path d="M 80 70 Q 55 40 45 65 Q 35 95 80 135 Q 125 95 115 65 Q 105 40 80 70 Z" stroke="#FF2E93" strokeWidth="2" fill="#FF2E93" fillOpacity="0.2" filter="url(#glow-neon)" />
          {/* 双人电荷节点 */}
          <circle cx="58" cy="90" r="7" fill="#00F0FF" />
          <circle cx="102" cy="90" r="7" fill="#FF2E93" />
          <path d="M 65 90 C 72 80, 88 100, 95 90" stroke="#E2F952" strokeWidth="2" strokeDasharray="3 2" />
          <text x="80" y="182" textAnchor="middle" fill="#FF2E93" fontSize="9" fontFamily="monospace">QUANTUM BOND</text>
        </g>
      );
    case 7: // 战车 The Chariot
      return (
        <g id="chariot-art">
          {/* 战车护盾与车轮 */}
          <rect x="50" y="70" width="60" height="55" rx="6" fill="#1E293B" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="36" cy="120" r="16" stroke="#00FF66" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="124" cy="120" r="16" stroke="#00FF66" strokeWidth="2" strokeDasharray="4 2" />
          {/* 双生斯芬克斯双星 */}
          <polygon points="56,155 70,135 60,165" fill="#00F0FF" />
          <polygon points="104,155 90,135 100,165" fill="#FF2E93" />
          <polygon points="80,50 90,65 70,65" fill="#E2F952" />
          <text x="80" y="182" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="monospace">OVERDRIVE CHARGE</text>
        </g>
      );
    case 8: // 力量 The Strength
      return (
        <g id="strength-art">
          {/* 顶端无量心智环 */}
          <ellipse cx="80" cy="50" rx="26" ry="12" stroke="#E2F952" strokeWidth="2" fill="none" filter="url(#glow-neon)" />
          {/* 赛博机械雄狮 */}
          <path d="M 45 140 Q 55 90 85 95 Q 115 100 120 135 L 110 155 H 55 Z" fill="#1C1917" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="95" cy="115" r="4" fill="#00FF66" />
          <path d="M 80 85 Q 92 80 102 90" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" />
          <text x="80" y="182" textAnchor="middle" fill="#E2F952" fontSize="9" fontFamily="monospace">GENTLE DOMINION</text>
        </g>
      );
    case 9: // 隐士 The Hermit
      return (
        <g id="hermit-art">
          {/* 六芒星提灯 */}
          <polygon points="80,60 92,80 68,80" stroke="#00F0FF" strokeWidth="1.5" fill="#00F0FF" fillOpacity="0.3" />
          <polygon points="80,86 92,66 68,66" stroke="#00F0FF" strokeWidth="1.5" fill="#00F0FF" fillOpacity="0.3" />
          <rect x="70" y="52" width="20" height="40" rx="3" stroke="#E2F952" strokeWidth="1.5" />
          {/* 智慧之杖 */}
          <line x1="50" y1="40" x2="50" y2="160" stroke="#A855F7" strokeWidth="3" />
          {/* 孤峰与阶梯 */}
          <path d="M 20 170 L 60 145 L 90 155 L 140 130 L 150 190 H 10 Z" fill="#0B0F19" stroke="#334155" strokeWidth="1" />
          <text x="80" y="182" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="monospace">INNER BEACON</text>
        </g>
      );
    case 10: // 命运之轮 Wheel of Fortune
      return (
        <g id="wheel-art">
          {/* 3层量子旋转同心齿轮 */}
          <circle cx="80" cy="95" r="46" stroke="#A855F7" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="80" cy="95" r="30" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="80" cy="95" r="12" fill="#E2F952" />
          {/* 四向符文轮辐 */}
          <line x1="80" y1="50" x2="80" y2="140" stroke="#00FF66" strokeWidth="2" />
          <line x1="35" y1="95" x2="125" y2="95" stroke="#00FF66" strokeWidth="2" />
          <text x="80" y="44" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="bold">T</text>
          <text x="133" y="99" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="bold">A</text>
          <text x="80" y="153" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="bold">R</text>
          <text x="27" y="99" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="bold">O</text>
          <text x="80" y="182" textAnchor="middle" fill="#A855F7" fontSize="9" fontFamily="monospace">QUANTUM PIVOT</text>
        </g>
      );
    case 11: // 正义 The Justice
      return (
        <g id="justice-art">
          {/* 裁决之剑 */}
          <line x1="80" y1="35" x2="80" y2="140" stroke="#00F0FF" strokeWidth="3" filter="url(#glow-neon)" />
          <line x1="65" y1="60" x2="95" y2="60" stroke="#00F0FF" strokeWidth="2.5" />
          {/* 双盘天平 */}
          <line x1="42" y1="75" x2="118" y2="75" stroke="#E2F952" strokeWidth="2" />
          <path d="M 42 75 L 30 110 H 54 Z" fill="#1E293B" stroke="#E2F952" strokeWidth="1.5" />
          <path d="M 118 75 L 106 110 H 130 Z" fill="#1E293B" stroke="#E2F952" strokeWidth="1.5" />
          <text x="80" y="182" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="monospace">ABSOLUTE BALANCE</text>
        </g>
      );
    case 12: // 倒吊人 The Hanged Man
      return (
        <g id="hanged-art">
          {/* 霓虹生命之树木架 */}
          <path d="M 30 35 H 130 M 80 35 V 90" stroke="#00FF66" strokeWidth="3" />
          {/* 倒吊姿态与光环 */}
          <circle cx="80" cy="140" r="16" fill="#00F0FF" fillOpacity="0.3" filter="url(#glow-neon)" />
          <circle cx="80" cy="140" r="7" fill="#E2F952" />
          <path d="M 80 90 L 80 125 M 80 105 L 60 115 M 80 105 L 98 120" stroke="#E2F952" strokeWidth="2" />
          <text x="80" y="182" textAnchor="middle" fill="#00FF66" fontSize="9" fontFamily="monospace">ENLIGHTENED PAUSE</text>
        </g>
      );
    case 13: // 死神 Death
      return (
        <g id="death-art">
          {/* 赛博机械骷髅 */}
          <circle cx="80" cy="80" r="24" stroke="#A855F7" strokeWidth="2" fill="#0F172A" />
          <circle cx="70" cy="76" r="5" fill="#FF2E93" />
          <circle cx="90" cy="76" r="5" fill="#FF2E93" />
          <path d="M 72 94 H 88" stroke="#00F0FF" strokeWidth="2" strokeDasharray="2 2" />
          {/* 黑色死神巨镰 */}
          <path d="M 40 155 Q 70 30 135 45" stroke="#A855F7" strokeWidth="3" fill="none" />
          <line x1="40" y1="160" x2="115" y2="50" stroke="#64748B" strokeWidth="2.5" />
          {/* 重生白蔷薇 */}
          <polygon points="80,120 86,132 74,132" fill="#00FF66" />
          <text x="80" y="182" textAnchor="middle" fill="#FF2E93" fontSize="9" fontFamily="monospace">REBIRTH CYCLE</text>
        </g>
      );
    case 14: // 节制 The Temperance
      return (
        <g id="temperance-art">
          {/* 光子流体双圣杯 */}
          <path d="M 50 75 Q 60 90 70 75 L 68 62 H 52 Z" stroke="#00F0FF" strokeWidth="2" fill="#00F0FF" fillOpacity="0.2" />
          <path d="M 90 125 Q 100 140 110 125 L 108 112 H 92 Z" stroke="#00F0FF" strokeWidth="2" fill="#00F0FF" fillOpacity="0.2" />
          {/* 倾泻流动的能量光束 */}
          <path d="M 60 85 Q 85 95 100 115" stroke="#00FF66" strokeWidth="3" strokeDasharray="4 2" className="animate-pulse" />
          {/* 双翼 */}
          <path d="M 40 55 Q 20 80 40 100 M 120 55 Q 140 80 120 100" stroke="#FF2E93" strokeWidth="2" fill="none" />
          <text x="80" y="182" textAnchor="middle" fill="#00FF66" fontSize="9" fontFamily="monospace">ALCHEMICAL FLOW</text>
        </g>
      );
    case 15: // 恶魔 The Devil
      return (
        <g id="devil-art">
          {/* 倒五角星 */}
          <polygon points="80,72 88,52 68,64 92,64 72,52" stroke="#FF2E93" strokeWidth="1.5" fill="#EF4444" fillOpacity="0.3" />
          {/* 恶魔巨角 */}
          <path d="M 60 70 Q 40 40 55 35 Q 70 50 68 70 M 100 70 Q 120 40 105 35 Q 90 50 92 70" stroke="#EF4444" strokeWidth="2.5" fill="#1C1917" />
          {/* 锁链束缚终端 */}
          <rect x="62" y="115" width="36" height="30" rx="3" fill="#1F2937" stroke="#EF4444" strokeWidth="2" />
          <path d="M 40 140 L 62 130 M 120 140 L 98 130" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 3" />
          <text x="80" y="182" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="monospace">BREAK THE CHAINS</text>
        </g>
      );
    case 16: // 高塔 The Tower
      return (
        <g id="tower-art">
          {/* 闪电劈中赛博大厦 */}
          <path d="M 50 160 L 60 65 L 100 65 L 110 160 Z" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          {/* 飞崩的王冠 */}
          <polygon points="62,60 80,45 98,60 92,65 68,65" fill="#E2F952" stroke="#E2F952" strokeWidth="1.5" />
          {/* 霹雳闪电 */}
          <polygon points="82,25 65,75 85,75 70,125 105,70 88,70 102,25" fill="#00F0FF" filter="url(#glow-neon)" />
          {/* 散落数据块 */}
          <rect x="36" y="90" width="8" height="8" fill="#FF2E93" />
          <rect x="116" y="105" width="8" height="8" fill="#FF2E93" />
          <text x="80" y="182" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="monospace">RADICAL AWAKENING</text>
        </g>
      );
    case 17: // 星星 The Star
      return (
        <g id="star-art">
          {/* 核心八角主星 */}
          <polygon points="80,30 86,50 106,50 90,62 96,82 80,70 64,82 70,62 54,50 74,50" fill="#00F0FF" filter="url(#glow-neon)" />
          {/* 周围 7 颗小卫星 */}
          <circle cx="45" cy="45" r="3" fill="#E2F952" />
          <circle cx="115" cy="45" r="3" fill="#E2F952" />
          <circle cx="35" cy="85" r="3" fill="#E2F952" />
          <circle cx="125" cy="85" r="3" fill="#E2F952" />
          {/* 倾倒星光的双壶 */}
          <path d="M 60 115 Q 75 125 70 155 M 100 115 Q 85 125 90 155" stroke="#00FF66" strokeWidth="2" />
          <text x="80" y="182" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="monospace">HOPE RADIANCE</text>
        </g>
      );
    case 18: // 月亮 The Moon
      return (
        <g id="moon-art">
          {/* 全息日食月相 */}
          <circle cx="80" cy="65" r="26" fill="#FBBF24" />
          <circle cx="90" cy="60" r="22" fill="#060912" />
          {/* 双子警戒塔 */}
          <rect x="25" y="95" width="16" height="60" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />
          <rect x="119" y="95" width="16" height="60" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />
          {/* 潜意识机械灵犬 */}
          <polygon points="50,145 62,130 58,155" fill="#A855F7" />
          <polygon points="110,145 98,130 102,155" fill="#A855F7" />
          <text x="80" y="182" textAnchor="middle" fill="#FBBF24" fontSize="9" fontFamily="monospace">ILLUSION ILLUMINATED</text>
        </g>
      );
    case 19: // 太阳 The Sun
      return (
        <g id="sun-art">
          {/* 太阳耀斑光芒 */}
          <circle cx="80" cy="75" r="28" fill="#E2F952" filter="url(#glow-neon)" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 80 + Math.cos(angle) * 32;
            const y1 = 75 + Math.sin(angle) * 32;
            const x2 = 80 + Math.cos(angle) * 44;
            const y2 = 75 + Math.sin(angle) * 44;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F97316" strokeWidth="2.5" />;
          })}
          {/* 胜利旗帜与生命向日葵 */}
          <path d="M 50 150 Q 80 135 110 150" stroke="#00FF66" strokeWidth="3" />
          <rect x="65" y="125" width="30" height="20" fill="#EF4444" rx="2" />
          <text x="80" y="182" textAnchor="middle" fill="#E2F952" fontSize="9" fontFamily="monospace">SOLAR TRIUMPH</text>
        </g>
      );
    case 20: // 审判 The Judgement
      return (
        <g id="judgement-art">
          {/* 大天使黄金声学号角 */}
          <polygon points="80,50 120,35 125,55 80,60" fill="#FBBF24" />
          <line x1="60" y1="55" x2="80" y2="55" stroke="#FBBF24" strokeWidth="4" />
          {/* 扩散的音波震荡纹 */}
          <path d="M 125 35 Q 145 45 125 55 M 132 30 Q 155 45 132 60" stroke="#00F0FF" strokeWidth="2" fill="none" />
          {/* 觉醒复活的数据网格终端 */}
          <rect x="45" y="120" width="20" height="35" rx="3" fill="#1E293B" stroke="#00FF66" strokeWidth="1.5" />
          <rect x="70" y="110" width="20" height="45" rx="3" fill="#1E293B" stroke="#00FF66" strokeWidth="1.5" />
          <rect x="95" y="120" width="20" height="35" rx="3" fill="#1E293B" stroke="#00FF66" strokeWidth="1.5" />
          <text x="80" y="182" textAnchor="middle" fill="#00FF66" fontSize="9" fontFamily="monospace">QUANTUM ASCENT</text>
        </g>
      );
    case 21: // 世界 The World
      return (
        <g id="world-art">
          {/* 衔尾蛇绿色圆环 */}
          <ellipse cx="80" cy="95" rx="46" ry="54" stroke="#00FF66" strokeWidth="3" strokeDasharray="6 3" filter="url(#glow-neon)" />
          {/* 中心跳跃的宇宙舞者 */}
          <circle cx="80" cy="75" r="7" fill="#00F0FF" />
          <line x1="80" y1="82" x2="80" y2="115" stroke="#E2F952" strokeWidth="2.5" />
          <line x1="60" y1="92" x2="100" y2="92" stroke="#FF2E93" strokeWidth="2" />
          <line x1="80" y1="115" x2="68" y2="135" stroke="#E2F952" strokeWidth="2.5" />
          <line x1="80" y1="115" x2="92" y2="135" stroke="#E2F952" strokeWidth="2.5" />
          {/* 四角守护四神兽芯片 */}
          <circle cx="28" cy="30" r="6" fill="#EF4444" />
          <circle cx="132" cy="30" r="6" fill="#3B82F6" />
          <circle cx="28" cy="165" r="6" fill="#F59E0B" />
          <circle cx="132" cy="165" r="6" fill="#A855F7" />
          <text x="80" y="182" textAnchor="middle" fill="#00FF66" fontSize="9" fontFamily="monospace">HOLISTIC REALM</text>
        </g>
      );
    default:
      return null;
  }
}

// 56 张小阿卡纳（权杖/圣杯/宝剑/星币 x 1~14）定制艺术绘图
function renderMinorArcana(suit?: string, num: number = 1) {
  const isCourt = num >= 11;
  const courtTitles: Record<number, string> = {
    11: "PAGE · 侍从",
    12: "KNIGHT · 骑士",
    13: "QUEEN · 王后",
    14: "KING · 国王",
  };

  // 1. 权杖组 (Wands / 火 / 等离子能量棒)
  if (suit === "wands") {
    return (
      <g id="wands-matrix">
        {isCourt ? (
          <g>
            <circle cx="80" cy="70" r="26" stroke="#EF4444" strokeWidth="2" fill="#EF4444" fillOpacity="0.2" filter="url(#glow-neon)" />
            <polygon points="80,45 88,60 72,60" fill="#F59E0B" />
            <line x1="80" y1="65" x2="80" y2="135" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
            <line x1="55" y1="95" x2="105" y2="95" stroke="#FBBF24" strokeWidth="2.5" />
            <text x="80" y="160" textAnchor="middle" fill="#F97316" fontSize="10" fontWeight="bold" fontFamily="monospace">
              {courtTitles[num]}
            </text>
          </g>
        ) : (
          <g>
            {/* 根据数字渲染等离子权杖阵列 */}
            {renderWandRods(num)}
            <text x="80" y="175" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="monospace">
              {num === 1 ? "ACE OF WANDS" : `WANDS // 0${num}`}
            </text>
          </g>
        )}
      </g>
    );
  }

  // 2. 圣杯组 (Cups / 水 / 量子流体杯)
  if (suit === "cups") {
    return (
      <g id="cups-matrix">
        {isCourt ? (
          <g>
            <ellipse cx="80" cy="65" rx="30" ry="16" stroke="#00F0FF" strokeWidth="2" fill="#00F0FF" fillOpacity="0.2" filter="url(#glow-neon)" />
            <path d="M 50 65 Q 80 120 110 65 L 105 115 H 55 Z" stroke="#3B82F6" strokeWidth="2" fill="#0F172A" />
            <line x1="80" y1="115" x2="80" y2="140" stroke="#3B82F6" strokeWidth="3" />
            <rect x="65" y="140" width="30" height="6" rx="2" fill="#00F0FF" />
            <text x="80" y="165" textAnchor="middle" fill="#00F0FF" fontSize="10" fontWeight="bold" fontFamily="monospace">
              {courtTitles[num]}
            </text>
          </g>
        ) : (
          <g>
            {renderCupVessels(num)}
            <text x="80" y="175" textAnchor="middle" fill="#00F0FF" fontSize="10" fontFamily="monospace">
              {num === 1 ? "ACE OF CUPS" : `CUPS // 0${num}`}
            </text>
          </g>
        )}
      </g>
    );
  }

  // 3. 宝剑组 (Swords / 风 / 高频激光刀)
  if (suit === "swords") {
    return (
      <g id="swords-matrix">
        {isCourt ? (
          <g>
            <polygon points="80,35 95,75 80,68 65,75" fill="#00F0FF" filter="url(#glow-neon)" />
            <line x1="80" y1="40" x2="80" y2="140" stroke="#00F0FF" strokeWidth="3" />
            <line x1="60" y1="115" x2="100" y2="115" stroke="#A855F7" strokeWidth="3" />
            <circle cx="80" cy="145" r="4" fill="#E2F952" />
            <text x="80" y="165" textAnchor="middle" fill="#00F0FF" fontSize="10" fontWeight="bold" fontFamily="monospace">
              {courtTitles[num]}
            </text>
          </g>
        ) : (
          <g>
            {renderSwordsBlades(num)}
            <text x="80" y="175" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="monospace">
              {num === 1 ? "ACE OF SWORDS" : `SWORDS // 0${num}`}
            </text>
          </g>
        )}
      </g>
    );
  }

  // 4. 星币组 (Pentacles / 土 / 全息加密代币与微芯片)
  return (
    <g id="pentacles-matrix">
      {isCourt ? (
        <g>
          <circle cx="80" cy="75" r="30" stroke="#00FF66" strokeWidth="2.5" fill="#060912" filter="url(#glow-neon)" />
          <polygon points="80,55 86,72 104,72 89,82 95,98 80,88 65,98 71,82 56,72 74,72" fill="#E2F952" />
          <circle cx="80" cy="75" r="10" stroke="#00FF66" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="80" y="165" textAnchor="middle" fill="#00FF66" fontSize="10" fontWeight="bold" fontFamily="monospace">
            {courtTitles[num]}
          </text>
        </g>
      ) : (
        <g>
          {renderPentaclesCoins(num)}
          <text x="80" y="175" textAnchor="middle" fill="#00FF66" fontSize="10" fontFamily="monospace">
            {num === 1 ? "ACE OF PENTACLES" : `PENTACLES // 0${num}`}
          </text>
        </g>
      )}
    </g>
  );
}

// 辅助排列函数：权杖棒阵列
function renderWandRods(count: number) {
  if (count === 1) {
    return (
      <g>
        <line x1="80" y1="40" x2="80" y2="150" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" filter="url(#glow-neon)" />
        <circle cx="80" cy="38" r="7" fill="#FBBF24" />
        <path d="M 68 80 Q 80 70 92 80" stroke="#F59E0B" strokeWidth="2" />
      </g>
    );
  }
  // 多个权杖散布或交叉
  const rods = [];
  const spread = Math.min(count, 10);
  for (let i = 0; i < spread; i++) {
    const x = 40 + (i * 80) / Math.max(spread - 1, 1);
    const angle = ((i - spread / 2) * 8);
    rods.push(
      <g key={i} transform={`rotate(${angle} ${x} 95)`}>
        <line x1={x} y1="50" x2={x} y2="140" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={x} cy="48" r="3" fill="#FBBF24" />
      </g>
    );
  }
  return <g>{rods}</g>;
}

// 辅助排列函数：圣杯流体杯阵列
function renderCupVessels(count: number) {
  if (count === 1) {
    return (
      <g>
        <path d="M 55 60 Q 80 115 105 60 L 98 120 H 62 Z" fill="#00F0FF" fillOpacity="0.2" stroke="#00F0FF" strokeWidth="2.5" filter="url(#glow-neon)" />
        <line x1="80" y1="120" x2="80" y2="145" stroke="#3B82F6" strokeWidth="3" />
        <ellipse cx="80" cy="145" rx="20" ry="5" fill="#3B82F6" />
        <circle cx="80" cy="50" r="5" fill="#E2F952" />
      </g>
    );
  }
  const cups = [];
  const cols = count <= 4 ? count : Math.ceil(count / 2);
  for (let i = 0; i < count; i++) {
    const row = count > 4 && i >= cols ? 1 : 0;
    const col = count > 4 && i >= cols ? i - cols : i;
    const totalInRow = row === 0 ? cols : count - cols;
    const x = 50 + (col * 60) / Math.max(totalInRow - 1, 1);
    const y = row === 0 ? (count > 4 ? 70 : 95) : 125;
    cups.push(
      <g key={i} transform={`translate(${x - 12}, ${y - 12})`}>
        <path d="M 4 4 Q 12 18 20 4 L 17 16 H 7 Z" fill="#00F0FF" fillOpacity="0.3" stroke="#00F0FF" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="12" y2="22" stroke="#3B82F6" strokeWidth="1.5" />
      </g>
    );
  }
  return <g>{cups}</g>;
}

// 辅助排列函数：宝剑刀阵
function renderSwordsBlades(count: number) {
  if (count === 1) {
    return (
      <g>
        <line x1="80" y1="35" x2="80" y2="145" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" filter="url(#glow-neon)" />
        <line x1="62" y1="120" x2="98" y2="120" stroke="#E2F952" strokeWidth="2.5" />
        <circle cx="80" cy="148" r="4" fill="#00F0FF" />
      </g>
    );
  }
  const blades = [];
  for (let i = 0; i < count; i++) {
    const x = 36 + (i * 88) / (count - 1);
    const crossed = count >= 3 && i % 2 === 1;
    blades.push(
      <g key={i} transform={crossed ? `rotate(15 ${x} 95)` : `rotate(-10 ${x} 95)`}>
        <line x1={x} y1="50" x2={x} y2="140" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <line x1={x - 6} y1="125" x2={x + 6} y2="125" stroke="#E2F952" strokeWidth="1.5" />
      </g>
    );
  }
  return <g>{blades}</g>;
}

// 辅助排列函数：星币矩阵
function renderPentaclesCoins(count: number) {
  if (count === 1) {
    return (
      <g>
        <circle cx="80" cy="95" r="34" stroke="#00FF66" strokeWidth="2.5" fill="#060912" filter="url(#glow-neon)" />
        <polygon points="80,68 87,88 108,88 91,100 97,120 80,108 63,120 69,100 52,88 73,88" fill="#E2F952" fillOpacity="0.8" />
        <circle cx="80" cy="95" r="14" stroke="#00FF66" strokeWidth="1.5" strokeDasharray="3 2" />
      </g>
    );
  }
  const coins = [];
  const rows = count <= 3 ? 1 : count <= 6 ? 2 : 3;
  const perRow = Math.ceil(count / rows);
  for (let i = 0; i < count; i++) {
    const r = Math.floor(i / perRow);
    const c = i % perRow;
    const x = 45 + (c * 70) / Math.max(perRow - 1, 1);
    const y = 65 + (r * 70) / Math.max(rows - 1, 1);
    coins.push(
      <g key={i}>
        <circle cx={x} cy={y} r="10" fill="#060912" stroke="#00FF66" strokeWidth="1.5" />
        <polygon points={`${x},${y-5} ${x+2},${y-1} ${x+6},${y-1} ${x+3},${y+2} ${x+4},${y+6} ${x},${y+3} ${x-4},${y+6} ${x-3},${y+2} ${x-6},${y-1} ${x-2},${y-1}`} fill="#E2F952" />
      </g>
    );
  }
  return <g>{coins}</g>;
}
