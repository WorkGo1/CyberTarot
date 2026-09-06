import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberTarot 赛博防内耗塔罗指南 | 当代年轻人情绪投射镜",
  description:
    "专为当代 00 后打工人与学生打造的赛博防内耗指南与情绪投射镜。Y2K 赛博酸性美学、全息物理洗牌动效、4 重 AI 毒舌/治愈人格解读与拍立得社交海报生成。",
  keywords: [
    "塔罗占卜",
    "赛博塔罗",
    "打工人解压",
    "防内耗指南",
    "恋爱脑清醒符",
    "潜台词翻译器",
    "Y2K",
    "AI占卜",
  ],
  authors: [{ name: "CyberTarot Labs" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="bg-dark-bg text-slate-100 min-h-screen cyber-grid-bg antialiased selection:bg-cyber-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
