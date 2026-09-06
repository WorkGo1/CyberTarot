import { TarotCardData } from "@/data/tarot-cards";

export type PersonaId = "bestie" | "healer" | "strategist" | "oracle";

export interface PersonaProfile {
  id: PersonaId;
  name: string;
  badge: string;
  tagline: string;
  accentColor: string;
  vibeText: string;
  tonePrompt: string;
  presetQuestions: string[];
}

export const PERSONAS: Record<PersonaId, PersonaProfile> = {
  bestie: {
    id: "bestie",
    name: "毒舌嘴替闺蜜",
    badge: "辛辣嘴替",
    tagline: "专治恋爱脑与职场受虐，翻着白眼替你打抱不平",
    accentColor: "#FF2E93",
    vibeText: "疯狂输出大实话、带热梗、扎心但真护短",
    tonePrompt:
      "你是一位精通塔罗象征学与当代青年心理学的【毒舌嘴替闺蜜】。性格辛辣一针见血，疯狂吐槽但极其护短，拒绝说教和传统神秘学套话，多用当代网络流行语境（如：恋爱脑、纯牛马、画大饼、已读乱回、情绪价值等）。",
    presetQuestions: [
      "那我接下来该怎么回TA微信？",
      "今天能准点下班不被老板抓包吗？",
      "TA到底是不是纯海王/钓鱼佬？",
      "我要不要直接开麦跟傻X对线？",
    ],
  },
  healer: {
    id: "healer",
    name: "温柔治愈大姐姐",
    badge: "情绪解药",
    tagline: "无条件接纳你的委屈与疲惫，像一杯温热可可",
    accentColor: "#10E775",
    vibeText: "情绪价值拉满、温柔抚慰、心理学共情抚平内耗",
    tonePrompt:
      "你是一位温暖睿智的【温柔治愈大姐姐】。充满母性与包容力，懂得年轻人的不容易。擅长用柔和又有力量的语言抚平焦虑，提供心理学视角的深层共情，肯定用户的每一个付出与感受，给予最坚定的精神依靠。",
    presetQuestions: [
      "我是不是真的很差劲、很失败？",
      "心里好累好难受，该怎么调节？",
      "如果我选择放弃，会被大家责怪吗？",
      "怎样才能停止内耗，让自己睡个好觉？",
    ],
  },
  strategist: {
    id: "strategist",
    name: "硬核职场军师",
    badge: "利益至上",
    tagline: "收起眼泪算清利益账本，只给可落地的破局SOP",
    accentColor: "#00F0FF",
    vibeText: "冷峻理性、现实主义算盘、精准博弈与风险控制",
    tonePrompt:
      "你是一位经历过职场腥风血雨的【硬核职场军师】。理性客观、冷酷现实主义，不讲虚幻情怀，全从个人利益最大化、风险敞口、职业筹码与SOP行动项（Action Items）出发，帮助用户在博弈中占得先机。",
    presetQuestions: [
      "现在提离职，最佳谈判策略是什么？",
      "怎么在不撕破脸的前提下拒绝甩锅？",
      "这件事会不会影响我年终绩效和升职？",
      "如何试探出领导对我的真实底线？",
    ],
  },
  oracle: {
    id: "oracle",
    name: "神秘赛博巫师",
    badge: "高维全息",
    tagline: "穿透因果与潜意识投影，俯瞰人生命题的宏观星轨",
    accentColor: "#A855F7",
    vibeText: "荣格心理学原型、意识流象征解构、哲学高维视角",
    tonePrompt:
      "你是一位连接量子意识与荣格心理原型的【神秘赛博巫师】。富有哲理和高维视角的洞察，将塔罗的象征学符号与赛博时代的数字虚无相结合，引导用户观察内在潜意识与集体无意识的卡点，重塑能量场。",
    presetQuestions: [
      "这次卡点在向我揭示怎样的命运功课？",
      "我的潜意识底层究竟在恐惧什么？",
      "宇宙正在借由这件事重塑我的什么能力？",
      "如何看清这段关系的灵魂契约？",
    ],
  },
};

export interface InterpretationResult {
  oneLiner: string;
  situationAnalysis: string;
  actionItem: string;
  luckyBonus: string;
  fullMarkdown: string;
  source?: "ai" | "local";
  modelName?: string;
  errorMessage?: string;
}

export interface ScenarioContext {
  scenarioId: "daily-vibe" | "subtext" | "job-branch" | "crush" | "decision-coin" | "general";
  scenarioName: string;
  userQuestion?: string;
  drawnCards: {
    card: TarotCardData;
    isReversed: boolean;
    positionName?: string;
  }[];
}

/**
 * 离线高智能解读组装引擎
 * 即使无网络或未配置 API Key，依然能生成质量极高、严丝合缝的当代 00 后风格解读
 */
export function generateSmartInterpretation(
  personaId: PersonaId,
  context: ScenarioContext
): InterpretationResult {
  const persona = PERSONAS[personaId];
  const primary = context.drawnCards[0];
  const card = primary.card;
  const isRev = primary.isReversed;
  const orientation = isRev ? "逆位" : "正位";

  let oneLiner = "";
  let situationAnalysis = "";
  let actionItem = "";
  let luckyBonus = card.luckyBonus;

  // 1. 定调一句话
  if (personaId === "bestie") {
    oneLiner = isRev
      ? `【${card.nameCn}·逆位】快醒醒宝贝！别硬撑了，你的能量条早就欠费停机了！`
      : `【${card.nameCn}·正位】听本宫一句劝：把头抬起来，该发疯发疯，世界没你想的那么大不了！`;
  } else if (personaId === "healer") {
    oneLiner = isRev
      ? `【${card.nameCn}·逆位】抱抱你，辛苦了。现在允许自己停下来，你已经做得足够好了。`
      : `【${card.nameCn}·正位】感受到了吗？宇宙正在温柔地接住你，顺随内心的微风吧。`;
  } else if (personaId === "strategist") {
    oneLiner = isRev
      ? `【${card.nameCn}·逆位】盘面指标严重预警。当前风险收益比已失衡，切忌盲目下注。`
      : `【${card.nameCn}·正位】战略突破窗口已打开。守住核心筹码，立即执行第一阶段方案。`;
  } else {
    oneLiner = isRev
      ? `【${card.nameCn}·逆位】逆流的量子波正在震荡你的执念。破碎的不是世界，而是你陈旧的坐标系。`
      : `【${card.nameCn}·正位】原型之火已然点亮。牌面投影显示，你正站在觉醒与跃迁的关键奇点。`;
  }

  // 2. 现状分析结合场景
  const keywords = (isRev ? card.reversedKeywords : card.uprightKeywords).join(" / ");

  if (context.scenarioId === "subtext") {
    const q = context.userQuestion || "领导/同事那句话";
    situationAnalysis =
      personaId === "bestie"
        ? `针对对方说的“${q}”，${card.nameCn}（${orientation}）直接撕开伪装：${card.workplaceVibe.subtextMeaning}。关键字【${keywords}】告诉我们，对方其实是在试探你的软肋，别傻乎乎当真！`
        : personaId === "strategist"
        ? `就“${q}”进行话术解构：此情境表面符合【${keywords}】，深层动因是：${card.workplaceVibe.subtextMeaning}。切勿情绪化反击，必须按权责边界建立防火墙。`
        : `对方说“${q}”，内在能量折射出【${keywords}】。${card.workplaceVibe.subtextMeaning}，请先护住自己的心力，不被外部噪音扰乱节奏。`;
  } else if (context.scenarioId === "crush") {
    situationAnalysis =
      personaId === "bestie"
        ? `测TA的意图？牌面【${card.nameCn}·${orientation}】太赤裸了！${card.loveVibe.crushState}。关键词是【${keywords}】。我劝你赶紧收起你的大慈大悲菩萨心肠，看看TA配不配！`
        : personaId === "healer"
        ? `在感情这条路上，【${card.nameCn}·${orientation}】像一面清澈的镜子。${card.loveVibe.crushState}。关键词【${keywords}】提醒我们，爱人之前，先给自己的心筑好安全的暖巢。`
        : `情感动态推演显示为【${keywords}】。现实阻力与倾向：${card.loveVibe.crushState}。建议保留 40% 的情感安全边际，不可全仓压入。`;
  } else if (context.scenarioId === "job-branch") {
    situationAnalysis =
      personaId === "strategist"
        ? `决策天平推演：当前位置呈现【${card.nameCn}·${orientation}】，核心关键词【${keywords}】。${card.workplaceVibe[isRev ? "reversed" : "upright"]}。若考虑下一步，必须先计算沉默成本与机会成本比率。`
        : `纠结留在原职还是跳槽？牌面【${card.nameCn}·${orientation}】给出的真相是：${card.workplaceVibe[isRev ? "reversed" : "upright"]}。你不是缺选择，你是害怕承担选错的代价。`;
  } else if (context.scenarioId === "decision-coin") {
    situationAnalysis = `关于这个决断，${card.nameCn}（${orientation}）显示支持倾向为 ${card.decisionVibe.percentage}%。避坑关键点：${card.decisionVibe.caution}`;
  } else {
    // 每日日常/班味
    situationAnalysis =
      personaId === "bestie"
        ? `今天今日份班味指数直接飙到 ${card.banweiIndex}%！牌面显示【${keywords}】。${card.workplaceVibe[isRev ? "reversed" : "upright"]}。记住，摸鱼是打工人的神圣权利，摸到的每一分钟都是纯利润！`
        : personaId === "healer"
        ? `今天的能量指数是 ${100 - card.banweiIndex}% 的纯净度。牌面【${card.nameCn}】带着【${keywords}】的讯息。${card.loveVibe[isRev ? "reversed" : "upright"]}。无论今天遇到什么，记得世界上最重要的事是你开开心心。`
        : `今日能量场基准：风险指数 ${card.banweiIndex}%。核心特征【${keywords}】。${card.workplaceVibe[isRev ? "reversed" : "upright"]}。保持战术定力，按部就班推进最核心任务。`;
  }

  // 3. 行动建议 (Action Item)
  if (personaId === "bestie") {
    actionItem = `👉 ${card.actionItem}。还有，去洗手间摸鱼 10 分钟，别给自己找苦吃！`;
  } else if (personaId === "strategist") {
    actionItem = `👉 落地SOP：${card.actionItem}。严格记录交付节点与事实依据。`;
  } else if (personaId === "healer") {
    actionItem = `👉 温柔小任务：${card.actionItem}。今晚对自己好一点，你值得一切美好。`;
  } else {
    actionItem = `👉 破除幻象法门：${card.actionItem}。将焦点从客体收回本体。`;
  }

  const fullMarkdown = `
### ${oneLiner}

**【现状深度剖析】**  
${situationAnalysis}

**【${persona.name}的 Action Item】**  
${actionItem}

**【今日转运小彩蛋】**  
✨ ${luckyBonus}
`.trim();

  return {
    oneLiner,
    situationAnalysis,
    actionItem,
    luckyBonus,
    fullMarkdown,
    source: "local",
  };
}

/**
 * 规范化 API Base URL
 */
export function normalizeApiBaseUrl(rawUrl: string): string {
  let url = (rawUrl || "").trim();
  if (!url) return "https://api.openai.com/v1";
  url = url.replace(/\/+$/, "");
  if (url.endsWith("/chat/completions")) {
    url = url.substring(0, url.length - "/chat/completions".length).replace(/\/+$/, "");
  }
  if (
    !url.endsWith("/v1") &&
    (url.includes("deepseek.com") ||
      url.includes("openai.com") ||
      url.includes("siliconflow.cn") ||
      url.includes("moonshot.cn"))
  ) {
    url = `${url}/v1`;
  }
  return url;
}

export interface ApiTestResult {
  success: boolean;
  latencyMs?: number;
  message: string;
  errorCode?: string;
}

/**
 * 在前端直接测试大模型 API 连通性
 */
export async function testApiConnection(
  apiKey: string,
  rawBaseUrl?: string,
  modelName?: string
): Promise<ApiTestResult> {
  const key = apiKey.trim();
  if (!key) {
    return {
      success: false,
      message: "未填写 API Key，请先输入 Key 后再测试连通性",
      errorCode: "NO_KEY",
    };
  }

  const baseUrl = normalizeApiBaseUrl(rawBaseUrl || "");
  const model = (modelName || "").trim() || "deepseek-chat";
  const startTime = Date.now();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s 快速探测

    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: "user", content: "hi" }],
        max_tokens: 5,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const latency = Date.now() - startTime;

    if (!res.ok) {
      let errDetail = "";
      try {
        const errJson = await res.json();
        errDetail = errJson?.error?.message || JSON.stringify(errJson);
      } catch {
        errDetail = await res.text();
      }

      if (res.status === 401) {
        return {
          success: false,
          errorCode: "401",
          message: `身份验证失败 (401 Unauthorized)。请核对 API Key 是否正确或余额充足。\n服务端提示: ${errDetail}`,
        };
      }
      if (res.status === 404) {
        return {
          success: false,
          errorCode: "404",
          message: `端点未找到 (404 Not Found)。当前尝试请求: ${baseUrl}/chat/completions。请检查 Base URL 是否正确。\n服务端提示: ${errDetail}`,
        };
      }
      return {
        success: false,
        errorCode: String(res.status),
        message: `HTTP 状态异常 [${res.status}]: ${errDetail || res.statusText}`,
      };
    }

    const data = await res.json();
    if (data?.choices?.[0]?.message) {
      return {
        success: true,
        latencyMs: latency,
        message: `连通成功！往返耗时 ${latency}ms，模型 [${model}] 正常响应。`,
      };
    } else {
      return {
        success: false,
        errorCode: "INVALID_FORMAT",
        message: "接口返回格式异常，未包含 choices[0].message",
      };
    }
  } catch (err: any) {
    if (err?.name === "AbortError") {
      return {
        success: false,
        errorCode: "TIMEOUT",
        message: "探测请求超时 (20秒)。请检查网络代理或 Base URL 是否通畅。",
      };
    }
    if (err?.message?.includes("Failed to fetch") || err?.name === "TypeError") {
      return {
        success: false,
        errorCode: "CORS_OR_NETWORK",
        message:
          "跨域或网络被拦截 (CORS Error)。由于 CyberTarot 纯静态运行于浏览器，目标端点必须配置允许跨域 (Access-Control-Allow-Origin: *)。建议使用支持 CORS 的大模型中转或反向代理。",
      };
    }
    return {
      success: false,
      errorCode: "UNKNOWN",
      message: `请求异常: ${err?.message || String(err)}`,
    };
  }
}

/**
 * 智能调度：检测是否配置真实大模型 API Key
 * 有 Key ➔ 真实 AI 深度思考接管专属 Action Item；无 Key 或调用异常 ➔ 本地智能引擎兜底
 * 超时时间统一设为 120,000ms (2分钟)
 */
export async function getTarotInterpretation(
  personaId: PersonaId,
  context: ScenarioContext
): Promise<InterpretationResult> {
  const fallback = generateSmartInterpretation(personaId, context);
  if (typeof window === "undefined") return fallback;

  const apiKey = localStorage.getItem("cybertarot_api_key")?.trim();
  if (!apiKey) return fallback;

  const rawBaseUrl = localStorage.getItem("cybertarot_base_url")?.trim() || "";
  const baseUrl = normalizeApiBaseUrl(rawBaseUrl);
  const modelName = localStorage.getItem("cybertarot_model")?.trim() || "deepseek-chat";

  const persona = PERSONAS[personaId];
  const cardsDesc = context.drawnCards
    .map(
      (c) =>
        `${c.positionName || "卡牌"}: ${c.card.nameCn} (${c.card.nameEn}) - ${
          c.isReversed ? "逆位" : "正位"
        } [关键词: ${(c.isReversed ? c.card.reversedKeywords : c.card.uprightKeywords).join(", ")}]`
    )
    .join("\n");

  const systemPrompt = `你是一位精通塔罗象征学与当代青年心理学的【${persona.name}】。
角色设定：${persona.tonePrompt}
风格要求：拒绝晦涩神秘学和说教，多用当代00后/年轻打工人流行语境（如恋爱脑、牛马、摸鱼、情绪价值、已读乱回等），字数控制在 200-300 字内。
可适当使用 Markdown 格式（粗体、列表、引用）让输出更具呼吸感与层次。

输出要求严格分为以下 4 块，每块用对应标题：
【牌面一句话定调】：一句带梗或扎心的话总结。
【现状深度剖析】：指出用户当前的心理卡点或现实困境。
【AI专属建议】：给出一个具体的、可操作的现实小建议 (Action Item)，语言鲜活。
【今日转运小彩蛋】：随机附赠一个微小开心的转运小动作。`;

  const userContent = `用户场景：${context.scenarioName}
用户面对的问题/情况：${context.userQuestion || "今日整体运势与生活困扰"}
抽取的牌阵：
${cardsDesc}`;

  try {
    const controller = new AbortController();
    // 超时设置为 2 分钟 (120,000 ms)
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent },
        ],
        temperature: 0.8,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      let errText = "";
      try {
        const errJson = await res.json();
        errText = errJson?.error?.message || JSON.stringify(errJson);
      } catch {
        errText = await res.text();
      }
      console.warn("LLM API returned error, fallback to local:", res.status, errText);
      return {
        ...fallback,
        errorMessage: `API 响应异常 [${res.status}]: ${errText.slice(0, 100)}`,
      };
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    if (!text) {
      return fallback;
    }

    const oneLinerMatch = text.match(/【牌面一句话定调】[：:]?\s*([^\n]+)/);
    const situationMatch = text.match(/【现状深度剖析】[：:]?\s*([\s\S]+?)(?=【AI专属建议】|$)/);
    const actionMatch = text.match(/【AI专属建议】[：:]?\s*([\s\S]+?)(?=【今日转运小彩蛋】|$)/);
    const luckyMatch = text.match(/【今日转运小彩蛋】[：:]?\s*([\s\S]+?)$/);

    return {
      oneLiner: oneLinerMatch ? oneLinerMatch[1].trim() : fallback.oneLiner,
      situationAnalysis: situationMatch ? situationMatch[1].trim() : fallback.situationAnalysis,
      actionItem: actionMatch ? actionMatch[1].trim() : fallback.actionItem,
      luckyBonus: luckyMatch ? luckyMatch[1].trim() : fallback.luckyBonus,
      fullMarkdown: text,
      source: "ai",
      modelName,
    };
  } catch (err: any) {
    console.warn("LLM API fetch failed, fallback to local:", err);
    return {
      ...fallback,
      errorMessage: err?.name === "AbortError" ? "API 请求超时(2分钟)" : (err?.message || "网络调用异常"),
    };
  }
}

/**
 * 追问 (Deep Dive) 智能回应引擎
 */
export function generateDeepDiveResponse(
  question: string,
  personaId: PersonaId,
  context: ScenarioContext
): string {
  const card = context.drawnCards[0]?.card;
  const cardName = card ? card.nameCn : "命运之轮";

  if (personaId === "bestie") {
    return `（翻了个漂亮的白眼）哎哟我的宝，你问“${question}”？你手里拿着【${cardName}】还用纠结吗！大不了就当场发疯或者已读乱回。成年人的世界里，谁认真谁就输了，你先问问你自己爽不爽！听我的，先冷他/它三个小时，该吃吃该喝喝，天塌下来有个子高的顶着！💅`;
  } else if (personaId === "healer") {
    return `我太理解你此刻为什么会问“${question}”了，因为你的心正在悬空着寻找一个落脚点。【${cardName}】想告诉你的是，不要苛责自己必须立刻给出完美的答案。慢慢来，把手放在心口深呼吸三次，听听身体最真实的声音，无论你怎么选，我都站在你这边。🍵`;
  } else if (personaId === "strategist") {
    return `针对“${question}”这一变量，结合当前牌面【${cardName}】给出的推演：核心不是意气用事，而是评估底牌。如果选择妥协，你的风险敞口将扩大 30%；如果果断切断，虽然短期有震荡，但长期能守住主动权。执行建议：保留所有书面证据，给自己设立 48 小时观察期，不打无准备之仗。♟️`;
  } else {
    return `在以太场域中，你的问题“${question}”与【${cardName}】的几何象征产生了共鸣。所谓的困局，不过是你意识投影在物质界的一场全息游戏。当你不再将力量赋予外部的评价系统，答案早已自然显现。放下对确定性的贪恋，答案就在静默的呼吸之间。🔮`;
  }
}

export async function getDeepDiveResponse(
  question: string,
  personaId: PersonaId,
  context: ScenarioContext
): Promise<string> {
  const fallback = generateDeepDiveResponse(question, personaId, context);
  if (typeof window === "undefined") return fallback;

  const apiKey = localStorage.getItem("cybertarot_api_key")?.trim();
  if (!apiKey) return fallback;

  const rawBaseUrl = localStorage.getItem("cybertarot_base_url")?.trim() || "";
  const baseUrl = normalizeApiBaseUrl(rawBaseUrl);
  const modelName = localStorage.getItem("cybertarot_model")?.trim() || "deepseek-chat";
  const persona = PERSONAS[personaId];

  const cardsDesc = context.drawnCards
    .map((c) => `${c.card.nameCn} (${c.isReversed ? "逆位" : "正位"})`)
    .join(", ");

  const systemPrompt = `你是一位精通塔罗象征学与当代青年心理学的【${persona.name}】。
说话语气风格：${persona.tonePrompt}
当前牌阵是：${cardsDesc}。
请以该人格的口吻，针对用户的追问给出直接、辛辣/温柔、有洞察力的回应，字数在 150-250 字左右。请适当使用 Markdown 格式（如加粗核心词、分段）提升可读性。`;

  try {
    const controller = new AbortController();
    // 追问同样设置为 2 分钟 (120,000 ms) 超时
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        temperature: 0.8,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    if (!res.ok) return fallback;

    const data = await res.json();
    return data?.choices?.[0]?.message?.content?.trim() || fallback;
  } catch {
    return fallback;
  }
}


