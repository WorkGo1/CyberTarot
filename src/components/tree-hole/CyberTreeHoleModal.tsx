"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "@/lib/audio-synthesizer";
import { X, Sparkles, Send, Fish, Heart, Radio } from "lucide-react";

interface TreeHoleItem {
  id: string;
  cardName: string;
  tag: string;
  content: string;
  countEcho: number;
  time: string;
  author: string;
}

const DEFAULT_TREE_HOLE_CARDS: TreeHoleItem[] = [
  {
    id: "1",
    cardName: "宝剑十",
    tag: "打工人共鸣",
    content: "全国今天还有 3420 人抽到了‘宝剑十’，心脏被扎成筛子也没事，正好通风透气，你不是一个人在熬！",
    countEcho: 1842,
    time: "10分钟前",
    author: "北京·生椰拿铁牛马",
  },
  {
    id: "2",
    cardName: "死神·逆位",
    tag: "恋爱脑清醒",
    content: "断联第 18 天，刚才差点手贱去视奸前任的网易云歌单，抽到死神逆位直接一耳光把我抽醒了！从此封心锁爱！",
    countEcho: 923,
    time: "25分钟前",
    author: "上海·绝不上当女大学生",
  },
  {
    id: "3",
    cardName: "魔术师",
    tag: "职场潜台词",
    content: "领导说‘这个新业务交给你锻炼’，翻开牌面是魔术师逆位！果然是没预算没HC的纯坑，果断找借口推了，立省十年寿命！",
    countEcho: 1205,
    time: "1小时前",
    author: "深圳·摸鱼特种兵",
  },
  {
    id: "4",
    cardName: "星星",
    tag: "每日能量签",
    content: "生活虽然破破烂烂，但我今天买了两朵五块钱的向日葵插在工位，突然觉得晚霞好美，世界其实还挺温柔的。",
    countEcho: 2150,
    time: "2小时前",
    author: "成都·喝茶看晚霞",
  },
];

interface CyberTreeHoleModalProps {
  onClose: () => void;
}

export const CyberTreeHoleModal: React.FC<CyberTreeHoleModalProps> = ({ onClose }) => {
  const [posts, setPosts] = useState<TreeHoleItem[]>(DEFAULT_TREE_HOLE_CARDS);
  const [newContent, setNewContent] = useState("");
  const [newCard, setNewCard] = useState("命运之轮");
  const [fishedCard, setFishedCard] = useState<TreeHoleItem | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cybertarot_tree_hole");
    if (saved) {
      try {
        setPosts([...JSON.parse(saved), ...DEFAULT_TREE_HOLE_CARDS]);
      } catch {
        // ignore
      }
    }
  }, []);

  // 投递吐槽/祝福
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    soundManager.playButtonClick();
    soundManager.triggerHaptic(50);

    const newItem: TreeHoleItem = {
      id: Date.now().toString(),
      cardName: newCard,
      tag: "赛博能量投递",
      content: newContent.trim(),
      countEcho: 1,
      time: "刚刚",
      author: "赛博流浪者",
    };

    const updated = [newItem, ...posts];
    setPosts(updated);
    localStorage.setItem("cybertarot_tree_hole", JSON.stringify([newItem]));
    setNewContent("");
    soundManager.playChimeSound();
  };

  // 打捞一张卡片
  const handleFishCard = () => {
    soundManager.playFlipSound();
    soundManager.triggerHaptic(60);
    const randomIndex = Math.floor(Math.random() * posts.length);
    setFishedCard(posts[randomIndex]);
  };

  // 点赞共振
  const handleEcho = (id: string) => {
    soundManager.playButtonClick();
    setPosts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, countEcho: item.countEcho + 1 } : item
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-xl w-full bg-dark-card border border-dark-border rounded-3xl p-6 shadow-2xl flex flex-col gap-5 my-auto">
        {/* 头部 */}
        <div className="flex justify-between items-center border-b border-dark-border/80 pb-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-cyber-lime animate-pulse" />
            <div>
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                赛博能量树洞 · 00后打工人共振池
              </h3>
              <p className="text-xs font-mono text-slate-400">
                匿名投递你的今日发疯/解压吐槽，或打捞同道中人的能量签
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-dark-hover text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 快捷打捞专区 */}
        <div className="bg-dark-surface/90 border border-cyber-cyan/30 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-cyber-cyan font-bold flex items-center gap-1.5">
              <Fish className="w-4 h-4" />
              赛博打捞机 (Cyber Dredge)
            </span>
            <button
              onClick={handleFishCard}
              className="px-3 py-1 rounded-lg bg-cyber-cyan/20 hover:bg-cyber-cyan/30 border border-cyber-cyan/50 text-cyber-cyan text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              随手捞一张
            </button>
          </div>

          {fishedCard ? (
            <div className="p-3 rounded-xl bg-dark-card/90 border border-cyber-lime/40 text-xs text-slate-200 leading-relaxed animate-pulse-glow">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                <span className="text-cyber-lime font-bold">抽中牌：{fishedCard.cardName}</span>
                <span>{fishedCard.author} · {fishedCard.time}</span>
              </div>
              <p className="text-sm font-medium text-white mb-2">“{fishedCard.content}”</p>
              <button
                onClick={() => handleEcho(fishedCard.id)}
                className="text-[11px] font-mono text-cyber-pink hover:text-rose-400 flex items-center gap-1 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                共振 ({fishedCard.countEcho})
              </button>
            </div>
          ) : (
            <p className="text-xs text-slate-500 font-mono text-center py-2">
              点击上方“随手捞一张”，查看今天哪位打工人和你同频共振
            </p>
          )}
        </div>

        {/* 投递表单 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-pink" />
            把一句今日祝福或吐槽丢进池子：
          </label>
          <div className="flex gap-2">
            <select
              value={newCard}
              onChange={(e) => setNewCard(e.target.value)}
              className="px-3 py-2 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-200 font-mono focus:outline-none focus:border-cyber-lime"
            >
              <option value="宝剑十">宝剑十</option>
              <option value="死神">死神</option>
              <option value="愚者">愚者</option>
              <option value="星星">星星</option>
              <option value="魔术师">魔术师</option>
              <option value="太阳">太阳</option>
              <option value="圣杯一">圣杯一</option>
              <option value="权杖十">权杖十</option>
            </select>
            <input
              type="text"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="写下一句给全国打工人的清醒寄语或发疯吐槽..."
              className="flex-1 px-4 py-2 rounded-xl bg-dark-surface border border-dark-border text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyber-lime"
            />
            <button
              type="submit"
              disabled={!newContent.trim()}
              className="px-4 py-2 rounded-xl bg-cyber-pink text-white font-display text-xs font-bold flex items-center gap-1 hover:opacity-90 disabled:opacity-40 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              投递
            </button>
          </div>
        </form>

        {/* 树洞列表 */}
        <div className="flex flex-col gap-2.5 max-h-56 overflow-y-auto pr-1">
          {posts.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-xl bg-dark-surface/70 border border-dark-border/80 flex flex-col gap-1.5"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-dark-card border border-slate-700 text-cyber-yellow">
                  【{item.cardName}】
                </span>
                <span>{item.author} · {item.time}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">{item.content}</p>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1">
                <span>{item.tag}</span>
                <button
                  onClick={() => handleEcho(item.id)}
                  className="flex items-center gap-1 text-slate-400 hover:text-cyber-pink transition-colors cursor-pointer"
                >
                  <Heart className="w-3 h-3" />
                  <span>{item.countEcho}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

