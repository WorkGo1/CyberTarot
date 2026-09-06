"use client";

import React from "react";

interface MarkdownTextProps {
  content: string;
  className?: string;
}

export const MarkdownText: React.FC<MarkdownTextProps> = ({ content, className = "" }) => {
  if (!content) return null;

  // 按行切分处理 Markdown
  const lines = content.split("\n");

  return (
    <div className={`space-y-2 text-xs sm:text-sm leading-relaxed ${className}`}>
      {lines.map((rawLine, idx) => {
        const line = rawLine.trim();
        if (!line) return <div key={idx} className="h-1.5" />;

        // 1. 处理无序列表 (- 或 * 或 •)
        if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("• ")) {
          const itemText = line.replace(/^[-*•]\s+/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-lime mt-1.5 shrink-0" />
              <span className="text-slate-200">{renderFormattedInline(itemText)}</span>
            </div>
          );
        }

        // 2. 处理有序列表 (1. 2.)
        const orderedMatch = line.match(/^(\d+)\.\s+(.*)/);
        if (orderedMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="font-mono text-cyber-yellow font-bold shrink-0">
                {orderedMatch[1]}.
              </span>
              <span className="text-slate-200">{renderFormattedInline(orderedMatch[2])}</span>
            </div>
          );
        }

        // 3. 处理引用 (> )
        if (line.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="pl-3 py-1 my-1 border-l-2 border-cyber-pink bg-rose-950/20 text-slate-300 italic rounded-r"
            >
              {renderFormattedInline(line.replace(/^>\s+/, ""))}
            </blockquote>
          );
        }

        // 4. 处理三级标题 (### )
        if (line.startsWith("### ") || line.startsWith("## ")) {
          const title = line.replace(/^#+\s+/, "");
          return (
            <h4 key={idx} className="text-sm sm:text-base font-bold text-white font-display pt-1">
              {renderFormattedInline(title)}
            </h4>
          );
        }

        // 5. 普通段落
        return (
          <p key={idx} className="text-slate-300">
            {renderFormattedInline(line)}
          </p>
        );
      })}
    </div>
  );
};

// 行内高亮解析：**粗体**、`代码/关键词`
function renderFormattedInline(text: string) {
  // 分割粗体与反引号
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="text-white font-bold bg-white/10 px-1 py-0.2 rounded mx-0.5">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="text-cyber-cyan font-mono text-[11px] bg-cyber-cyan/10 px-1.5 py-0.5 rounded border border-cyber-cyan/30 mx-0.5"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

