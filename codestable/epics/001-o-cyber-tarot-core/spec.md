---
kind: epic
title: "Epic 001: CyberTarot 核心玩法与赛博仪式感系统实现"
status: completed
created: 2026-09-06
---

# Epic 001: CyberTarot 核心玩法与赛博仪式感系统实现

> **读者：** 推进和审阅 CyberTarot MVP 首期全流程实现的开发人员。  
> **目标：** 从零搭建完整的赛博防内耗塔罗 Web 平台，交付现代 00 后高认同感、高沉浸感的情绪投射与占卜体验。

---

## 这条线要改变什么

本项目处于从 0 到 1 阶段。本次 Epic 001 已完整建立：
1. **完整 78 张塔罗现代意象知识库**（22 大阿卡纳 + 56 小阿卡纳，涵盖正逆位、现代职场/情感/日常人话映射）；
2. **Y2K 赛博酸性与黑曜石全息视觉体系**（严格遵循 `ui-ux-pro-max` 规范与 `design-system/cybertarot/MASTER.md`）；
3. **沉浸式物理交互与声效引擎**（洗牌扇形动效、切牌对调、3D 透视翻牌、Web Audio API 合成音效、移动端震动）；
4. **五大高频场景矩阵**（每日班味运势、老板/同事潜台词翻译器、离职跳槽二选一、Crush 意图探针、赛博抛硬币）；
5. **四重 AI 占卜师人格引擎**（毒舌闺蜜、温柔大姐姐/猫猫、硬核职场军师、神秘赛博巫师）及 1~3 轮 Deep Dive 即时追问；
6. **社交裂变海报生成器**（拍立得/小红书风格、一键下载图片与复制）；
7. **赛博能量树洞**（匿名投掷与打捞卡片、共振留言）。

- 来源 Vision：`codestable/vision/index.md`
- 关联 Spec：`codestable/spec/index.md`

---

## 推进切片与完成证据

- [x] **Slice 1: 项目基础架构与设计系统搭建**
  - Next.js 15 + React 19 + TypeScript + Tailwind CSS
  - 导入字体与主题变量（Cyber-Acid、Phosphor/Lucide Icons、音效合成驱动）
- [x] **Slice 2: 塔罗 78 张核心数据模型与现代语义库**
  - 22 大阿卡纳 + 56 小阿卡纳，现代标签、正逆位关键词、职场/情感/金句映射 (`src/data/tarot-cards.ts`)
- [x] **Slice 3: 物理动效与声效触感系统**
  - 3D 卡牌翻转、洗牌散牌动效、切牌交互 (`src/components/card/TarotCard.tsx`, `src/components/card/RitualDeck.tsx`)
  - Web Audio 空间音效（洗牌刷刷声、落牌脆响、揭牌鸣音）+ Haptic 震动 (`src/lib/audio-synthesizer.ts`)
- [x] **Slice 4: 五大场景玩法与排盘逻辑**
  - 每日班味运势（单牌 + 班味指数 + 宜忌，`src/components/scenarios/DailyVibe.tsx`）
  - 潜台词翻译器（3牌：表面/潜台词/应对，`src/components/scenarios/SubtextTranslator.tsx`）
  - 离职跳槽二选一（左右分支对比牌阵，`src/components/scenarios/JobBranch.tsx`）
  - Crush 意图探针（3牌：TA状态/感受/阻碍，`src/components/scenarios/CrushProbe.tsx`）
  - 赛博抛硬币（1牌决策，`src/components/scenarios/DecisionCoin.tsx`）
- [x] **Slice 5: 四大 AI 人格解读与 Deep Dive 追问引擎**
  - 内置离线高情商响应引擎 + 自定义 API Key (BYOK) 接入 (`src/lib/ai-engine.ts`)
  - 1~3 轮即时快捷追问与自由对话 (`src/components/deep-dive/DeepDiveChat.tsx`)
- [x] **Slice 6: 拍立得社交裂变卡片与赛博能量树洞**
  - 拍立得/小红书质感卡片即时生成与高清下载 (`src/components/share/SocialCardModal.tsx`)
  - 能量树洞投递与打捞展示 (`src/components/tree-hole/CyberTreeHoleModal.tsx`)
- [x] **Slice 7: 全面端到端验证与响应式适配**
  - `npm run build` 生产构建成功，静态生成通过，本地服务稳定启动在 `http://localhost:3088`。

---

## 验收结论

五大场景交互顺畅，物理动效与音效触感完整呈现，4 大 AI 人格特征鲜明，拍立得海报生成与导出工作正常，已达到交付标准。
