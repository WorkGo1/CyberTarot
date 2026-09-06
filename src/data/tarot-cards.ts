export interface TarotCardData {
  id: string;
  nameEn: string;
  nameCn: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  number: number;
  element: "fire" | "water" | "air" | "earth" | "spirit";
  icon: string;
  // 核心现代解构
  uprightKeywords: string[];
  reversedKeywords: string[];
  workplaceVibe: {
    upright: string;
    reversed: string;
    subtextMeaning: string;
  };
  loveVibe: {
    upright: string;
    reversed: string;
    crushState: string;
  };
  decisionVibe: {
    recommendation: "GO" | "HOLD" | "RUN";
    percentage: number;
    caution: string;
  };
  memeQuote: string;
  actionItem: string;
  luckyBonus: string;
  banweiIndex: number; // 0 - 100 班味指数
}

export const TAROT_CARDS: TarotCardData[] = [
  // ================= 22 大阿卡纳 =================
  {
    id: "major-0",
    nameEn: "The Fool",
    nameCn: "愚者",
    arcana: "major",
    number: 0,
    element: "air",
    icon: "Compass",
    uprightKeywords: ["大胆开麦", "纯粹新生", "零包袱开局", "裸辞底气"],
    reversedKeywords: ["无脑硬冲", "踩中隐形大坑", "盲目狂热", "交学费现场"],
    workplaceVibe: {
      upright: "初生牛犊不怕虎，没有背调包袱，敢于提出打破常规的野路子方案。",
      reversed: "盲目接下无人敢碰的烂摊子，缺乏防甩锅意识，容易成了背锅第一人。",
      subtextMeaning: "表面看是给你探索空间，实际是领导自己也没想通，找你试水探雷。",
    },
    loveVibe: {
      upright: "不设限的心动，带着纯粹的少年感去接触，享受当下无负担的火花。",
      reversed: "被对方若即若离钓成翘嘴，完全不看现实差距，恋爱脑严重超标。",
      crushState: "TA目前沉浸在自己的自由宇宙里，享受无拘无束，暂未考虑深度绑定。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 85,
      caution: "别带沉重包袱，但至少留一份退路底牌。",
    },
    memeQuote: "人生是旷野，不是轨道；大不了明天就去卖烤肠！",
    actionItem: "把微信签名改成‘休眠中’，给大脑预留 30 分钟绝对空白期。",
    luckyBonus: "今天买杯生椰拿铁，少糖加冰，给能量加满。",
    banweiIndex: 20,
  },
  {
    id: "major-1",
    nameEn: "The Magician",
    nameCn: "魔术师",
    arcana: "major",
    number: 1,
    element: "air",
    icon: "Sparkles",
    uprightKeywords: ["全能操盘", "资源拉满", "降维沟通", "掌控全场"],
    reversedKeywords: ["画饼大师", "过度承诺", "偷换概念", "翻车预兆"],
    workplaceVibe: {
      upright: "手头资源已经齐备，掌握核心技能，跨部门沟通如鱼得水，正是破局良机。",
      reversed: "方案PPT花里胡哨但落地全凭想象，小心牛皮吹太大收不了场。",
      subtextMeaning: "‘你能力很强，多做点’翻译：便宜又好使的工具人，不压榨你压榨谁？",
    },
    loveVibe: {
      upright: "主动出击的情话高手，能精准捕捉你的情绪共振点，互动火花四射。",
      reversed: "小心套路深似海的养鱼达人，把暧昧当成技术展示，诚意打折。",
      crushState: "TA对你很有表达欲，也擅长展现自身优势，正在测试你的反应阈值。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 90,
      caution: "动手能力强，但别被第一步的虚假繁荣冲昏头脑。",
    },
    memeQuote: "只要PPT做得够帅，甲方就觉得我有通天手段。",
    actionItem: "把你的关键诉求用 3 点式清单发给对方，拒绝长篇大论。",
    luckyBonus: "整理一下桌面，把闲置的废纸和咖啡杯全部扔掉。",
    banweiIndex: 45,
  },
  {
    id: "major-2",
    nameEn: "The High Priestess",
    nameCn: "女祭司",
    arcana: "major",
    number: 2,
    element: "water",
    icon: "Moon",
    uprightKeywords: ["静观其变", "直觉拉满", "暗中观察", "人间清醒"],
    reversedKeywords: ["内耗成疾", "冷暴力输出", "胡思乱想", "信息闭塞"],
    workplaceVibe: {
      upright: "不参与办公室站队与八卦，冷眼旁观局势，敏锐直觉比数据报表更准。",
      reversed: "心里憋了一万句吐槽却维持表面客气，憋到深夜乳腺增生。",
      subtextMeaning: "‘这事以后再说’翻译：大概率无限搁置，别再傻傻去追问找不痛快了。",
    },
    loveVibe: {
      upright: "保持神秘与高价值姿态，无需患得患失，懂你的人自会看穿你的坚韧。",
      reversed: "进入单方面心理推拉，疯狂复盘聊天记录的标点符号，纯属自己折磨自己。",
      crushState: "TA态度内敛克制，表面波澜不惊，实际在暗中考量你是否真正契合。",
    },
    decisionVibe: {
      recommendation: "HOLD",
      percentage: 40,
      caution: "敌不动我不动，水面之下的真相还没浮出水面。",
    },
    memeQuote: "本座不说话不是没意见，是在用意念给你下降头。",
    actionItem: "关掉朋友圈入口 24 小时，戒断社交窥探欲。",
    luckyBonus: "点一根香薰或喷一次柑橘调香水，深呼吸 3 次。",
    banweiIndex: 30,
  },
  {
    id: "major-3",
    nameEn: "The Empress",
    nameCn: "皇后",
    arcana: "major",
    number: 3,
    element: "earth",
    icon: "Crown",
    uprightKeywords: ["物质丰盛", "情绪自洽", "生活品质", "享受当下"],
    reversedKeywords: ["冲动剁手", "沉溺舒适圈", "能量透支", "娇惯拖延"],
    workplaceVibe: {
      upright: "团队里的大奶妈与润滑剂，既能交出有美感的工作成果，又能把工位装扮得像咖啡厅。",
      reversed: "无节制摸鱼导致deadline前疯狂赶工，把钱花在毫无意义的解压伪消费上。",
      subtextMeaning: "‘大家像一家人’翻译：别跟我谈钱，谈钱伤感情，准备自愿无偿加班吧。",
    },
    loveVibe: {
      upright: "被爱包裹的安全感，感情中充满滋养与包容，双方都能舒服地做自己。",
      reversed: "过度索取情绪价值，或者毫无原则地倒贴牺牲，把对方喂成巨婴。",
      crushState: "TA对你印象极好，觉得和你相处很治愈轻松，舒适感拉满。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 80,
      caution: "悦己至上，但确认你的信用卡账单能不能兜底。",
    },
    memeQuote: "工资是受苦补贴，花掉它才叫犒劳人间小神仙。",
    actionItem: "今晚下班去吃一顿真正热气腾腾的饭，禁止外卖糊弄。",
    luckyBonus: "给工位放一朵新鲜切花，哪怕只是路边买的一朵洋桔梗。",
    banweiIndex: 15,
  },
  {
    id: "major-4",
    nameEn: "The Emperor",
    nameCn: "皇帝",
    arcana: "major",
    number: 4,
    element: "fire",
    icon: "Shield",
    uprightKeywords: ["秩序确立", "拍板定案", "雷厉风行", "边界分明"],
    reversedKeywords: ["爹味说教", "控制狂发作", "死板僵化", "职场PUA"],
    workplaceVibe: {
      upright: "建立清晰的工作边界和交付SOP，该拒绝的甩锅果断拒绝，气场两米八。",
      reversed: "遇到极度死脑筋的微操管理领导，或者自己陷入非黑即白的固执。",
      subtextMeaning: "‘我这是为你好’翻译：按我毫无逻辑的个人喜好改，不要挑战我的权威。",
    },
    loveVibe: {
      upright: "踏实靠谱的依靠感，说话算数，用实际行动为你遮风挡雨。",
      reversed: "典型的爹系说教男/女，总想改造你的生活习惯，沟通像下达指标。",
      crushState: "TA掌控欲较强，节奏必须由TA主导，不喜欢不可控的变数。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 75,
      caution: "用规则和流程保护自己，严禁感情用事。",
    },
    memeQuote: "成年人最大的自律，是不跟认知不在一个维度的人争辩。",
    actionItem: "梳理手头待办事项，挑出最难的一件事，限定 45 分钟死磕到底。",
    luckyBonus: "把椅子靠背调直，坐直身体，给脊椎一点尊重。",
    banweiIndex: 65,
  },
  {
    id: "major-5",
    nameEn: "The Hierophant",
    nameCn: "教皇",
    arcana: "major",
    number: 5,
    element: "earth",
    icon: "Scroll",
    uprightKeywords: ["名校/大厂光环", "体制庇护", "正统路径", "导师引路"],
    reversedKeywords: ["教条枷锁", "形式主义", "道德绑架", "过时规则"],
    workplaceVibe: {
      upright: "遵从组织既有规则，寻求前辈或业务导师背书，走正统路线阻力最小。",
      reversed: "充斥着毫无意义的形式主义周报与对齐会，思想被禁锢在制度牢笼里。",
      subtextMeaning: "‘要遵循公司价值观’翻译：无条件服从加班和降本增效，别问为什么。",
    },
    loveVibe: {
      upright: "传统门当户对与家人认可的稳定模式，奔着结婚或长期契约而去。",
      reversed: "被世俗标准绑架，因为年龄或催婚而妥协，灵魂毫无交集。",
      crushState: "TA思想偏保守审慎，更看重背景真实、家庭观念与现实匹配度。",
    },
    decisionVibe: {
      recommendation: "HOLD",
      percentage: 50,
      caution: "若选考公/体制/规矩，就要承受代价；若选自由，就别贪恋安稳。",
    },
    memeQuote: "大家都在假装认真开会，只有投影仪在认真耗电。",
    actionItem: "删掉手机里一个两周没看过的行业群，减少无用信息轰炸。",
    luckyBonus: "向一位真正尊敬的前辈请教一个具体的业务瓶颈问题。",
    banweiIndex: 60,
  },
  {
    id: "major-6",
    nameEn: "The Lovers",
    nameCn: "恋人",
    arcana: "major",
    number: 6,
    element: "air",
    icon: "Heart",
    uprightKeywords: ["灵魂双向奔赴", "重大二选一", "价值观契合", "蜜月期"],
    reversedKeywords: ["纠结内耗", "两头下注", "同床异梦", "价值观崩塌"],
    workplaceVibe: {
      upright: "找到配合绝佳的战友，分工默契；或面临两个极有吸引力的Offer决断。",
      reversed: "纠结于‘留在温水原职’还是‘跳槽冒险’，既要又要，消耗自身精力。",
      subtextMeaning: "‘我很看好你和某某合作’翻译：把你们绑定，成了皆大欢喜，败了互相甩锅。",
    },
    loveVibe: {
      upright: "眼神拉丝的双向奔赴，聊天聊到凌晨三点都不困，纯度极高的高山流水。",
      reversed: "发现对方手机里隐藏的养鱼苗头，或者自己犹豫不决吊着别人。",
      crushState: "TA对你有极强的好感与吸引力，正处于感情升温的黄金窗口期。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 95,
      caution: "听从内心的第一直觉，选择让你眼睛发亮的那条路。",
    },
    memeQuote: "智者不入爱河，可你一笑，我连退学/辞职申请都写好了。",
    actionItem: "对那个总是带给你正反馈的人，真诚地说一句‘有你在真好’。",
    luckyBonus: "今天买两份小甜品，一份分给同频的朋友。",
    banweiIndex: 10,
  },
  {
    id: "major-7",
    nameEn: "The Chariot",
    nameCn: "战车",
    arcana: "major",
    number: 7,
    element: "water",
    icon: "Zap",
    uprightKeywords: ["目标必达", "杀出重围", "情绪死死按住", "猛烈推进"],
    reversedKeywords: ["失控翻车", "方向跑偏", "内耗爆缸", "疲劳驾驶"],
    workplaceVibe: {
      upright: "顶住各方压力咬死目标，横冲直撞破除阻碍，是带头冲业绩的战神时刻。",
      reversed: "用力过猛导致身体或情绪先崩盘，盲目推进错误的战略导致车毁人亡。",
      subtextMeaning: "‘这次战役必须拿下’翻译：不计代价，而代价往往是你的发量和周末。",
    },
    loveVibe: {
      upright: "直球追爱，打消一切犹豫，霸道而真诚地向对方表露心意。",
      reversed: "自我感动式的狂轰滥炸，根本不管对方感受，把追求变成压迫。",
      crushState: "TA当下正处于打拼阶段，事业心压过恋爱脑，需要能并肩同频的人。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 85,
      caution: "油门踩到底之前，先看清前方拐角有没有测速和悬崖。",
    },
    memeQuote: "只要我跑得够快，打工的悲伤就追不上我。",
    actionItem: "把你的待办砍掉一半，只留最重要的第一优先级集中歼灭。",
    luckyBonus: "下班后快走 20 分钟或慢跑出汗，把恶气排出去。",
    banweiIndex: 70,
  },
  {
    id: "major-8",
    nameEn: "Strength",
    nameCn: "力量",
    arcana: "major",
    number: 8,
    element: "fire",
    icon: "Flame",
    uprightKeywords: ["以柔克刚", "情绪驯服", "内心坚定", "不战而屈人之兵"],
    reversedKeywords: ["狂躁暴走", "自我怀疑", "精力枯竭", "被兽性反噬"],
    workplaceVibe: {
      upright: "面对难缠的客户或暴躁老板，用顶级情商和深沉定力轻松化解危机。",
      reversed: "面对不公待遇瞬间破防，在工作群里开麦对轰，伤敌八百自损一千。",
      subtextMeaning: "‘我们要有耐心感化对方’翻译：我不敢得罪对方，只能让你去当炮灰受气。",
    },
    loveVibe: {
      upright: "用温柔包容对方的棱角，建立在互相敬畏基础上的长久羁绊。",
      reversed: "被对方的暴躁脾气或冷漠压制，陷入习惯性自责‘是不是我做错了’。",
      crushState: "TA外表坚硬有防备，内心其实很吃温柔坚定这一套，谁能包容谁能赢。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 80,
      caution: "真正的力量是微笑面对蠢货，而不是跟蠢货泥潭摔跤。",
    },
    memeQuote: "成年人的体面，是在脑子里杀他一百遍，嘴上依然说‘好的收到’。",
    actionItem: "当你想要发飙时，先倒数 10 秒并喝一口温水。",
    luckyBonus: "去撸一下街边的猫或者抱抱自家的宠物。",
    banweiIndex: 40,
  },
  {
    id: "major-9",
    nameEn: "The Hermit",
    nameCn: "隐士",
    arcana: "major",
    number: 9,
    element: "earth",
    icon: "Lantern",
    uprightKeywords: ["闭关深造", "深度独处", "提灯求索", "拒绝低质社交"],
    reversedKeywords: ["孤僻自闭", "脱节社会", "钻牛角尖", "固步自封"],
    workplaceVibe: {
      upright: "戴上降噪耳机进入心流，沉淀核心技能，在混乱局势中找到清晰解题路径。",
      reversed: "埋头苦干从不抬头看天，成果被嘴甜的同事抢走，自己委屈到落泪。",
      subtextMeaning: "‘你自己先深入研究一下’翻译：我不管，也给不了指导，出了事你自己担。",
    },
    loveVibe: {
      upright: "享受高质量的单身时光，先搞懂自己想要什么，再决定要不要入局。",
      reversed: "把自己封锁在高墙里，一边渴望亲密关系一边疯狂推开所有人。",
      crushState: "TA目前属于封闭期，个人世界自洽，很难被外人轻易破防。",
    },
    decisionVibe: {
      recommendation: "HOLD",
      percentage: 45,
      caution: "适合自己思考，不适合仓促签约或公开表态。",
    },
    memeQuote: "只要我不回微信，世界上就没有人能给我派活。",
    actionItem: "今晚拒绝无效社交聚会，早点回家看一部高分电影。",
    luckyBonus: "准备一个静音时钟或番茄钟，体验 25 分钟不看手机的专注。",
    banweiIndex: 25,
  },
  {
    id: "major-10",
    nameEn: "Wheel of Fortune",
    nameCn: "命运之轮",
    arcana: "major",
    number: 10,
    element: "fire",
    icon: "Repeat",
    uprightKeywords: ["风向转变", "时代红利", "顺风局", "转机已至"],
    reversedKeywords: ["水逆当头", "被动挨打", "周期低谷", "徒劳挣扎"],
    workplaceVibe: {
      upright: "部门重组或新赛道开启，原本卡住的项目突然迎来东风，势不可挡。",
      reversed: "撞上行业缩招或高层博弈，非个人能力问题，要学会接受周期低谷。",
      subtextMeaning: "‘大环境变了，我们要灵活拥抱变化’翻译：准备降薪、转岗或者裁员。",
    },
    loveVibe: {
      upright: "命中注定的宿命感相遇，天时地利人和，机缘巧合把你们推到一起。",
      reversed: "错的时间遇到对的人，缘分像抓不住的沙，强求只会伤痕累累。",
      crushState: "TA身边可能正在经历生活或工作的大变动，状态波动极不稳定。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 85,
      caution: "借势起飞，但记住站在风口上别得意忘形。",
    },
    memeQuote: "风口来了猪都能飞，风停了猪得自己学会撑降落伞。",
    actionItem: "把一直拖着没办的一张卡或退款流程今天点了，会有意外顺畅的惊喜。",
    luckyBonus: "买张彩票或刮刮乐，无论中不中都换来一份好心情。",
    banweiIndex: 35,
  },
  {
    id: "major-11",
    nameEn: "Justice",
    nameCn: "正义",
    arcana: "major",
    number: 11,
    element: "air",
    icon: "Scale",
    uprightKeywords: ["权责清晰", "合同法律", "清醒算账", "因果报应"],
    reversedKeywords: ["背锅不公", "双标对待", "利益倾轧", "合同陷阱"],
    workplaceVibe: {
      upright: "一切按字面协议和制度来，留存好邮件微信沟通记录，依法维护自己权益。",
      reversed: "遭遇干活最多拿钱最少的双标待遇，或者公司在离职补偿上玩阴招。",
      subtextMeaning: "‘绩效评估是公平客观的’翻译：我早就定好了评级，指标只是事后找补。",
    },
    loveVibe: {
      upright: "势均力敌、权利平等的健康关系，付出与收获保持动态平衡。",
      reversed: "单方面的情感债务，你在拼命给，对方在白嫖，天平早已崩塌。",
      crushState: "TA极为理性挑剔，在拿小本本暗中记录你的言行举止与现实条件。",
    },
    decisionVibe: {
      recommendation: "HOLD",
      percentage: 50,
      caution: "签任何字、打任何款之前，把合同条款从头到尾读三遍。",
    },
    memeQuote: "可以讲感情，但首先把我的加班费算清。",
    actionItem: "备份工作沟通记录与重要成果证明，以备不时之需。",
    luckyBonus: "喝一杯温黑咖啡，用理智驱散大脑迷雾。",
    banweiIndex: 55,
  },
  {
    id: "major-12",
    nameEn: "The Hanged Man",
    nameCn: "倒吊人",
    arcana: "major",
    number: 12,
    element: "water",
    icon: "Anchor",
    uprightKeywords: ["换位思考", "自愿蛰伏", "顿悟新视角", "延迟满足"],
    reversedKeywords: ["无效牺牲", "受害者心态", "自我感动", "被绑架死磕"],
    workplaceVibe: {
      upright: "暂时退居二线看清全局，跳出打工人常规视角，从老板视角反向解题。",
      reversed: "天天无偿加班感动了自己，年终考核却是个C，纯属无效白给。",
      subtextMeaning: "‘大家要有奉献精神’翻译：我想拿年终奖，需要你们无偿献出生命时长。",
    },
    loveVibe: {
      upright: "退一步海阔天空，懂得包容对方的难处，用长远视角经营感情。",
      reversed: "苦情戏演上瘾，以为‘只要我对他好他总会感动’，其实对方只想逃跑。",
      crushState: "TA陷入卡顿停滞期，不知道该进还是退，正在被动观望。",
    },
    decisionVibe: {
      recommendation: "HOLD",
      percentage: 35,
      caution: "别瞎折腾，现在任何主动冲锋都是徒增阻力，以静制动。",
    },
    memeQuote: "你的自我牺牲，在资本家眼里甚至不如一杯倒掉的凉白开。",
    actionItem: "把今天‘我不得不做’的事，换个主语‘我选择做’，心态立马逆转。",
    luckyBonus: "做一个倒立或靠墙倒箭式瑜伽动作，让血液反流清醒一下。",
    banweiIndex: 50,
  },
  {
    id: "major-13",
    nameEn: "Death",
    nameCn: "死神",
    arcana: "major",
    number: 13,
    element: "water",
    icon: "Skull",
    uprightKeywords: ["彻底斩断", "绝地新生", "断舍离", "版本大更新"],
    reversedKeywords: ["苟延残喘", "抗拒现实", "执迷不悟", "拖泥带水"],
    workplaceVibe: {
      upright: "旧模式彻底失效，主动斩断没有前途的烂项目或垃圾公司，迎来新生。",
      reversed: "明知道公司快黄了还在自欺欺人，不敢跳槽，最后被动裁员措手不及。",
      subtextMeaning: "‘项目暂停调整’翻译：别等了，该项目已死，有事烧纸，赶紧找退路。",
    },
    loveVibe: {
      upright: "不体面的纠缠终于落幕，彻底删除拉黑，重新夺回人生的控制权。",
      reversed: "三番五次视奸前任动态，反复求复合又反复被羞辱，精神自虐。",
      crushState: "TA与过去的情感纠葛或某种生活模式正在经历痛苦决裂，无暇顾及新火花。",
    },
    decisionVibe: {
      recommendation: "RUN",
      percentage: 15,
      caution: "死抓着烂摊子不放就是对未来的犯罪，立刻止损！",
    },
    memeQuote: "旧的不去，新的怎么带劲？原地火化前尘往事！",
    actionItem: "清空手机相册里的无用截屏和前任的废旧聊天记录，一键删除！",
    luckyBonus: "换一套全新的床单被套，迎接全新的能量场。",
    banweiIndex: 80,
  },
  {
    id: "major-14",
    nameEn: "Temperance",
    nameCn: "节制",
    arcana: "major",
    number: 14,
    element: "fire",
    icon: "Sliders",
    uprightKeywords: ["动态平衡", "跨界融合", "身心疗愈", "水乳交融"],
    reversedKeywords: ["失衡崩溃", "报复性熬夜", "极端情绪", "沟通短路"],
    workplaceVibe: {
      upright: "高超的跨部门协调大师，既能满足业务方需求，又能守住技术底线，拿捏极好。",
      reversed: "生活和工作严重失衡，白天喝浓缩咖啡续命，晚上靠褪黑素和酒麻醉。",
      subtextMeaning: "‘找个平衡点’翻译：既要多快好省，又不能多花一分钱预算。",
    },
    loveVibe: {
      upright: "细水长流的相处模式，情绪稳定互补，像温水一样舒服恒久。",
      reversed: "冷热交替，时而热情如火时而冷若冰霜，把双方的心力消耗殆尽。",
      crushState: "TA是个极其讲究节奏感的人，不喜突飞猛进，需要温和递进。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 75,
      caution: "采取折中中庸策略，千万别走极端。",
    },
    memeQuote: "白天是情绪稳定的成年人，夜晚是网易云十级学者。",
    actionItem: "今晚 11 点前务必关灯放下手机，哪怕睡不着也闭目养神。",
    luckyBonus: "喝一杯温热的枸杞红枣茶或洋甘菊茶。",
    banweiIndex: 30,
  },
  {
    id: "major-15",
    nameEn: "The Devil",
    nameCn: "恶魔",
    arcana: "major",
    number: 15,
    element: "earth",
    icon: "Flame",
    uprightKeywords: ["物质欲望", "致命诱惑", "精神禁锢", "明知故犯"],
    reversedKeywords: ["打破枷锁", "觉醒反弹", "戒断成瘾", "夺回主权"],
    workplaceVibe: {
      upright: "被高薪但高压有毒的工作绑架，像戴着黄金手铐的牛马，身心俱疲却不敢走。",
      reversed: "终于看穿了所谓年终大饼的骗局，不再被加班文化绑架，准点提包跑路。",
      subtextMeaning: "‘年轻人不要太看重钱’翻译：我想用情怀骗你白干，我自己的豪车房贷全靠你。",
    },
    loveVibe: {
      upright: "荷尔蒙支配的肉体吸引或畸形依恋，明知对方是渣男/海王却舍不得放手。",
      reversed: "一瞬间祛魅！突然发现对方既普通又油腻，狠狠摘掉八百层恋爱脑滤镜。",
      crushState: "TA充满吸引力但目的并不纯粹，可能贪恋情绪供给或肉体，非长久良配。",
    },
    decisionVibe: {
      recommendation: "RUN",
      percentage: 20,
      caution: "你以为你在占便宜，实际上你正在成为别人的盘中餐。",
    },
    memeQuote: "世上本无枷锁，是月薪两万给它镀了层金。",
    actionItem: "算一算你为了这份工作多花的医药费和打车费，看清真实时薪。",
    luckyBonus: "退订一个你每个月自动扣费却没怎么用的会员APP。",
    banweiIndex: 90,
  },
  {
    id: "major-16",
    nameEn: "The Tower",
    nameCn: "高塔",
    arcana: "major",
    number: 16,
    element: "fire",
    icon: "AlertTriangle",
    uprightKeywords: ["平地惊雷", "崩盘破产", "滤镜粉碎", "毁灭即新生"],
    reversedKeywords: ["悬崖勒马", "勉强避雷", "心有余悸", "重建序幕"],
    workplaceVibe: {
      upright: "突发黑天鹅事件！架构大地震、服务器炸库、领导突然被带走，秩序瞬间归零。",
      reversed: "雷声大雨点小，险险避开大坑，但核心地基已经松动，必须提早找退路。",
      subtextMeaning: "‘组织架构优化通知’翻译：各位自求多福，明天上午去HR办公室领纸箱。",
    },
    loveVibe: {
      upright: "突然发现出轨/聊骚/隐瞒的惊天秘密，心中的神像瞬间碎了一地。",
      reversed: "冷战濒临破裂，虽然暂时维持没分，但信任已经有了无法弥合的裂痕。",
      crushState: "TA的世界正在发生剧烈震荡，情绪随时会暴走，千万别去当炮灰。",
    },
    decisionVibe: {
      recommendation: "RUN",
      percentage: 5,
      caution: "别去危房下躲雨，有多远跑多远！",
    },
    memeQuote: "天塌下来有高个子顶着，高个子跑了咱们就原地趴下。",
    actionItem: "把你的重要个人文件和作品集拷贝到私人移动硬盘里。",
    luckyBonus: "吃一块高纯度黑巧克力，稳住多巴胺防线。",
    banweiIndex: 95,
  },
  {
    id: "major-17",
    nameEn: "The Star",
    nameCn: "星星",
    arcana: "major",
    number: 17,
    element: "air",
    icon: "Star",
    uprightKeywords: ["希望疗愈", "精神绿洲", "灵感迸发", "未来可期"],
    reversedKeywords: ["画饼画空", "虚假乐观", "希望落空", "迷茫内耗"],
    workplaceVibe: {
      upright: "至暗时刻已过，看清未来的职业蓝图，获得了宝贵的技术灵感与同伴支持。",
      reversed: "沉溺于宏大叙事却缺乏执行力，天天幻想成为行业大佬，手头PPT一页没动。",
      subtextMeaning: "‘未来上市大家都是合伙人’翻译：眼下工资低点忍忍，反正画饼又不花钱。",
    },
    loveVibe: {
      upright: "理想型灵魂伴侣出现，纯粹的心灵交流，互相给彼此点亮前行的路灯。",
      reversed: "把对方过度神化为完美无瑕的神明，等到现实滤镜破碎时失望透顶。",
      crushState: "TA觉得你很特别、很有灵气，对你抱有美好的幻想与向往。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 90,
      caution: "相信直觉，星星为你指引的方向不会错。",
    },
    memeQuote: "生活破破烂烂，但我可以缝缝补补，还能绣个哆啦A梦。",
    actionItem: "去阳台或窗边抬头看看天空或夜景，给眼睛 5 分钟远眺。",
    luckyBonus: "换一张清爽明亮的手机壁纸，点亮今日好运。",
    banweiIndex: 10,
  },
  {
    id: "major-18",
    nameEn: "The Moon",
    nameCn: "月亮",
    arcana: "major",
    number: 18,
    element: "water",
    icon: "Moon",
    uprightKeywords: ["焦虑迷雾", "隐秘背叛", "捕风捉影", "情绪海啸"],
    reversedKeywords: ["真相大白", "迷雾散去", "直面恐惧", "走出梦魇"],
    workplaceVibe: {
      upright: "办公室暗流涌动，小道消息乱飞，大家都在互相防备，信息极度不透明。",
      reversed: "终于摸清了背后搞小动作的人是谁，焦虑落地，开始筹谋对策。",
      subtextMeaning: "‘有些事你现在不需要知道’翻译：暗箱操作中，防的就是你。",
    },
    loveVibe: {
      upright: "极度缺乏安全感，怀疑TA有秘密，反复琢磨一句话睡不着觉，内耗爆棚。",
      reversed: "撕下欺骗的面具，不再自己骗自己，从患得患失的泥沼中走出来。",
      crushState: "TA心思极深且善于掩饰，你看到的TA可能只是TA精心伪装的冰山一角。",
    },
    decisionVibe: {
      recommendation: "HOLD",
      percentage: 25,
      caution: "黑暗中容易看走眼，绝对不要在心慌意乱时做重大决定。",
    },
    memeQuote: "脑补是最大的酷刑，百分之九十的焦虑都是自己吓自己。",
    actionItem: "把你在担心的 3 件事写在纸上，逐条标注‘我能改变吗？’不能就撕掉。",
    luckyBonus: "今晚泡个热水澡或泡脚 15 分钟，让大脑放松。",
    banweiIndex: 85,
  },
  {
    id: "major-19",
    nameEn: "The Sun",
    nameCn: "太阳",
    arcana: "major",
    number: 19,
    element: "fire",
    icon: "Sun",
    uprightKeywords: ["元气爆棚", "高光荣耀", "坦荡豁达", "好运拉满"],
    reversedKeywords: ["短暂阴霾", "精力透支", "过度自负", "晒伤警告"],
    workplaceVibe: {
      upright: "项目大获全胜，公开表彰拿到手软，个人影响力达到顶峰，意气风发。",
      reversed: "表面热火朝天实际利润微薄，或者高强度冲刺后陷入身体精力大滑坡。",
      subtextMeaning: "‘全公司都在向你学习’翻译：标杆立起来了，下次只准成功不准失败哦。",
    },
    loveVibe: {
      upright: "公开坦荡的甜蜜爱恋，阳光下牵手，家人朋友全员送上祝福。",
      reversed: "虽然有些小摩擦或小任性，但底色依然是温暖热烈，沟通即可化解。",
      crushState: "TA性格阳光开朗，对你毫不掩饰好感与赞美，跟你呆在一起很快乐。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 98,
      caution: "毫无疑问的晴空万里，大胆往前走！",
    },
    memeQuote: "本打工人今天散发的光芒，连太阳见了都得递根烟。",
    actionItem: "走出门去晒晒阳光 10 分钟，感受天然紫外线的洗礼。",
    luckyBonus: "穿一件暖色调（黄/橘/红）的衣服或带一个小饰品。",
    banweiIndex: 5,
  },
  {
    id: "major-20",
    nameEn: "Judgement",
    nameCn: "审判",
    arcana: "major",
    number: 20,
    element: "fire",
    icon: "Bell",
    uprightKeywords: ["号角吹响", "命运召回", "清算复活", "职业飞跃"],
    reversedKeywords: ["自甘堕落", "错过良机", "抗拒召唤", "反复受罚"],
    workplaceVibe: {
      upright: "关键考核或转正答辩迎来大反转，昔日积攒的口碑成为翻盘的关键筹码。",
      reversed: "对敲响的警钟视而不见，继续得过且过，最终被市场残酷淘汰。",
      subtextMeaning: "‘最终决定权在管理层’翻译：考验你平时为人处世和拉拢同盟的时刻到了。",
    },
    loveVibe: {
      upright: "复合的黄金契机，或者双方经过深刻反思后，感情进入全新的更高维度。",
      reversed: "重蹈覆辙，在同一个坑里反复跌倒，明知没有结局还死缠烂打。",
      crushState: "TA正在面临某种价值观或人生阶段的重大选择，你的出现可能促成TA的蜕变。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 85,
      caution: "过去的一切都是为了这一刻铺路，勇敢做出裁决！",
    },
    memeQuote: "出来混迟早要还，好在今天该轮到老天还我公道了。",
    actionItem: "复盘过去三个月最成功的经验，总结成方法论沉淀下来。",
    luckyBonus: "给手机设置一个振奋人心的闹钟铃声。",
    banweiIndex: 40,
  },
  {
    id: "major-21",
    nameEn: "The World",
    nameCn: "世界",
    arcana: "major",
    number: 21,
    element: "earth",
    icon: "Globe",
    uprightKeywords: ["圆满毕业", "闭环达成", "跨越阶级", "无懈可击"],
    reversedKeywords: ["差临门一脚", "虎头蛇尾", "烂尾工程", "自我设限"],
    workplaceVibe: {
      upright: "大型项目完美收官，KPI超额完成，准备功成身退晋升或无缝跳入更大平台。",
      reversed: "卡在最后 5% 的细节验收上反复扯皮，导致项目无法结项回款。",
      subtextMeaning: "‘感谢大家的辛勤付出’翻译：项目顺利结束，大家各奔东西前好聚好散。",
    },
    loveVibe: {
      upright: "感情修成正果，步入婚姻殿堂，或者在彼此的世界里达成了无死角的默契。",
      reversed: "双方明明各方面都合适，却总觉得差了一点心动，陷入鸡肋般的食之无味。",
      crushState: "TA觉得你就是TA苦苦寻找的那个各维度都完美契合的‘天选之人’。",
    },
    decisionVibe: {
      recommendation: "GO",
      percentage: 100,
      caution: "最圆满的终章，也是全新篇章的盛大起点。",
    },
    memeQuote: "通关了！这人间的游戏，我不仅玩懂了，还要打出全S成就。",
    actionItem: "郑重其事地做一次断舍离，打卡庆祝这个阶段的正式结束。",
    luckyBonus: "买一件你垂涎已久但一直舍不得买的心愿礼物奖励自己。",
    banweiIndex: 0,
  },

  // ================= 权杖组 (Wands / 火元素 / 行动力与职场拼搏) =================
  {
    id: "wands-1",
    nameEn: "Ace of Wands",
    nameCn: "权杖一",
    arcana: "minor",
    suit: "wands",
    number: 1,
    element: "fire",
    icon: "Zap",
    uprightKeywords: ["干劲拉满", "创业灵感", "新项目启动", "热血上头"],
    reversedKeywords: ["三分钟热度", "动力熄火", "开局不利", "冲动冒进"],
    workplaceVibe: {
      upright: "新的灵感与商机喷涌而出，整个人像打了鸡血，正是立项启动的最佳时机。",
      reversed: "脑子热得快凉得也快，计划书写了三行就躺平，缺乏后续落地支撑。",
      subtextMeaning: "‘这个新方向交给你负责’翻译：没预算没人力，全凭你的热情空手套白狼。",
    },
    loveVibe: {
      upright: "强烈的原始吸引力，干柴烈火，一眼就想冲上去要微信的荷尔蒙冲动。",
      reversed: "激情来得快去得更快，聊了两天突然断崖式冷淡，纯属下半身作祟。",
      crushState: "TA对你充满了探索欲与热情，目前处于积极上头的初期阶段。",
    },
    decisionVibe: { recommendation: "GO", percentage: 90, caution: "打铁趁热，别等热情凉了再后悔。" },
    memeQuote: "趁热血还没凉透，今天就去把那件大事干了！",
    actionItem: "立刻把脑子里的点子写下前 3 个步骤，今天落地第 1 步。",
    luckyBonus: "喝一杯冒泡的冰气泡水，刺激大脑突触。",
    banweiIndex: 30,
  },
  {
    id: "wands-2",
    nameEn: "Two of Wands",
    nameCn: "权杖二",
    arcana: "minor",
    suit: "wands",
    number: 2,
    element: "fire",
    icon: "Globe",
    uprightKeywords: ["远景规划", "跨出国门", "筹谋扩张", "运筹帷幄"],
    reversedKeywords: ["犹豫不决", "困守原地", "惧怕未知", "计划流产"],
    workplaceVibe: {
      upright: "手里握着现有盘子，眼睛已经望向更大的市场，正在制定中长期跳槽/扩张蓝图。",
      reversed: "既想出去闯荡又舍不得眼前的安逸窝，在前瞻与恐惧中白白耗尽青春。",
      subtextMeaning: "‘我们要有全球化视野’翻译：国内卷不动了，想忽悠你们去外派开荒。",
    },
    loveVibe: {
      upright: "在思考两人未来的长远规划，考虑异地合并或者共同买房落户。",
      reversed: "一谈到未来就顾左右而言他，根本没把你写进TA的人生剧本里。",
      crushState: "TA正在权衡自己的发展轨道，在观察你是否适合与TA并肩远行。",
    },
    decisionVibe: { recommendation: "GO", percentage: 70, caution: "放长线钓大鱼，不要只图眼下微利。" },
    memeQuote: "手握两千底薪，操着联合国秘书长的心。",
    actionItem: "打开求职软件更新一下简历，不一定要投，但要看清市场行情。",
    luckyBonus: "整理一下护照或身份证，准备未来的出行。",
    banweiIndex: 40,
  },
  {
    id: "wands-3",
    nameEn: "Three of Wands",
    nameCn: "权杖三",
    arcana: "minor",
    suit: "wands",
    number: 3,
    element: "fire",
    icon: "Navigation",
    uprightKeywords: ["货轮启航", "拓展版图", "成果初显", "静候佳音"],
    reversedKeywords: ["交货延期", "触礁碰壁", "后劲不足", "坐困愁城"],
    workplaceVibe: {
      upright: "前期布局的种子已经发芽，业务开始向外辐射，等待第一批正向数据反馈。",
      reversed: "海外业务受挫或跨部门沟通卡顿，原本寄予厚望的渠道没有带来回报。",
      subtextMeaning: "‘海外市场大有可为’翻译：准备好倒时差通宵跟外方撕逼吧。",
    },
    loveVibe: {
      upright: "异地恋迎来破局转机，或者关系得到了外界实质性进展的支持。",
      reversed: "距离产生的分歧越来越大，承诺的兑现日期一拖再拖，信心受挫。",
      crushState: "TA正在往更高的圈层迈进，TA期望的伴侣能带来新的认知增量。",
    },
    decisionVibe: { recommendation: "GO", percentage: 80, caution: "目光放长远，静等第一波成果回流。" },
    memeQuote: "我的小船已经出海了，哪怕带回一条咸鱼也是战利品。",
    actionItem: "给外地或好久不见的朋友发条问候，会有意外惊喜。",
    luckyBonus: "站在高处（天台或高楼窗口）向远方眺望 5 分钟。",
    banweiIndex: 35,
  },
  {
    id: "wands-4",
    nameEn: "Four of Wands",
    nameCn: "权杖四",
    arcana: "minor",
    suit: "wands",
    number: 4,
    element: "fire",
    icon: "Home",
    uprightKeywords: ["庆祝乔迁", "阶段庆功", "团队团建", "避风港湾"],
    reversedKeywords: ["庆功变丧宴", "表面祥和", "家庭矛盾", "团建受刑"],
    workplaceVibe: {
      upright: "项目顺利过关，大家一起开香槟吃庆功宴，团队士气处于舒适的蜜月期。",
      reversed: "打着团建旗号的大型周六受刑现场，领导敬酒，下属假笑，身心俱疲。",
      subtextMeaning: "‘今晚大家都来聚餐’翻译：无偿占用周末，谁敢不去谁就是不合群。",
    },
    loveVibe: {
      upright: "见父母、订婚、同居的大喜之日，感情得到双方社交圈的一致祝福。",
      reversed: "家庭干涉过多导致摩擦，或者在买房彩礼等世俗问题上发生分歧。",
      crushState: "TA很渴望安稳温馨的家庭港湾，对长久稳定的生活充满向往。",
    },
    decisionVibe: { recommendation: "GO", percentage: 90, caution: "放飞心情，享受当下阶段性胜利。" },
    memeQuote: "世界上最动听的音乐，是周五下午五点半下班打卡的声音。",
    actionItem: "今晚约上最舒服的朋友，去吃顿好吃的庆祝一下活过这一周。",
    luckyBonus: "把家里床头收拾温馨，放个香薰夜灯。",
    banweiIndex: 10,
  },
  {
    id: "wands-10",
    nameEn: "Ten of Wands",
    nameCn: "权杖十",
    arcana: "minor",
    suit: "wands",
    number: 10,
    element: "fire",
    icon: "Archive",
    uprightKeywords: ["负重前行", "牛马极限", "责任过载", "濒临暴毙"],
    reversedKeywords: ["学会卸包袱", "断然甩锅", "压垮骆驼", "拒绝内耗"],
    workplaceVibe: {
      upright: "一个人扛下整个部门的核心活，身兼数职，累到骨头散架，再不卸担子要进ICU。",
      reversed: "终于想通了‘干得越多错得越多’，开始勇敢说‘不’，果断甩掉不属于自己的烂摊子。",
      subtextMeaning: "‘能者多劳嘛’翻译：既然你好说话不闹事，那就全塞给你干。",
    },
    loveVibe: {
      upright: "在感情里当爹又当妈，所有的迁就和退让都是你在承担，疲惫不堪。",
      reversed: "不想再伺候大爷了，放过自己，终止这段单方面的苦役式恋爱。",
      crushState: "TA现在被现实生活和工作压得喘不过气，根本没有余力谈情说爱。",
    },
    decisionVibe: { recommendation: "RUN", percentage: 10, caution: "必须立刻放权或拒绝，否则身体先报警！" },
    memeQuote: "牛马也有极限，生产队的驴都不敢这么连轴转！",
    actionItem: "挑出一件别人硬塞给你的工作，明确回复：‘我手头优先级满了，做不了’。",
    luckyBonus: "去捏脚或做个全身精油SPA推拿，把僵硬的肩膀按开。",
    banweiIndex: 100,
  },

  // ================= 圣杯组 (Cups / 水元素 / 情感与人际关系) =================
  {
    id: "cups-1",
    nameEn: "Ace of Cups",
    nameCn: "圣杯一",
    arcana: "minor",
    suit: "cups",
    number: 1,
    element: "water",
    icon: "Heart",
    uprightKeywords: ["爱意漫溢", "灵性感知", "好感萌芽", "情感滋养"],
    reversedKeywords: ["情绪泛滥", "自作多情", "爱无能", "空虚寂寞"],
    workplaceVibe: {
      upright: "遇到了非常合拍且有共情力的工作搭档，职场不再只是冰冷的利益互换。",
      reversed: "把职场当秀场，过度投入私人感情，容易因别人的随口评价伤心半天。",
      subtextMeaning: "‘我很懂你的委屈’翻译：口头安慰管饱，涨薪升职免谈。",
    },
    loveVibe: {
      upright: "心中涌现出无限温柔与心动，真诚纯粹的喜欢，准备迎接美好的恋爱。",
      reversed: "爱得太满导致自我感动，甚至错把对方的客套礼貌当成了爱情信号。",
      crushState: "TA心中充满了善意与温情，对你敞开了心扉，愿意接纳你的好意。",
    },
    decisionVibe: { recommendation: "GO", percentage: 95, caution: "跟随你心底最柔软的直觉。" },
    memeQuote: "心动是本能，但别把客套当表白，先擦亮近视镜。",
    actionItem: "给好久没联系但真心在乎的人发个可爱的表情包问候一下。",
    luckyBonus: "喝一杯温润的花草水果茶，滋润心神。",
    banweiIndex: 15,
  },
  {
    id: "cups-2",
    nameEn: "Two of Cups",
    nameCn: "圣杯二",
    arcana: "minor",
    suit: "cups",
    number: 2,
    element: "water",
    icon: "Users",
    uprightKeywords: ["神仙搭档", "双向奔赴", "平等合作", "灵魂共鸣"],
    reversedKeywords: ["同床异梦", "信任瓦解", "塑料情谊", "合作翻脸"],
    workplaceVibe: {
      upright: "极佳的双赢合作关系，和搭档互补无间，谈商务一拍即合。",
      reversed: "原本说好的对半利益，背后偷偷截胡客户，塑料合作原形毕露。",
      subtextMeaning: "‘期待我们长期合作’翻译：只要你给的价格够低，我们就还是兄弟。",
    },
    loveVibe: {
      upright: "平等的爱意交换，你懂我的欲言又止，我懂你的奇奇怪怪，天造地设。",
      reversed: "表面情侣实际各自打着小算盘，一遇到现实考验就互相推卸责任。",
      crushState: "TA被你的共情和理解深深吸引，觉得找到了世界上另一个自己。",
    },
    decisionVibe: { recommendation: "GO", percentage: 95, caution: "合作大吉，把握双赢契机。" },
    memeQuote: "遇到了神仙搭档，连上班都变得像双人通关游戏。",
    actionItem: "对今天帮过你哪怕一点小忙的同事，当面表达一声真诚的谢意。",
    luckyBonus: "戴一对对称的小饰品或耳机。",
    banweiIndex: 20,
  },
  {
    id: "cups-5",
    nameEn: "Five of Cups",
    nameCn: "圣杯五",
    arcana: "minor",
    suit: "cups",
    number: 5,
    element: "water",
    icon: "Frown",
    uprightKeywords: ["沉溺悲伤", "牛奶洒了", "只看失去", "深夜网抑云"],
    reversedKeywords: ["抬头转身", "看到剩余希望", "走出失恋", "重拾信心"],
    workplaceVibe: {
      upright: "因为丢了一个客户或被扣了奖金痛苦万分，却没看到身后还有两个更大的机会。",
      reversed: "终于从‘为什么倒霉的总是我’的自怨自艾中醒悟，转身收拾残局。",
      subtextMeaning: "‘这次确实很可惜’翻译：别哭了，下周还有新的活等着你背呢。",
    },
    loveVibe: {
      upright: "死盯倒掉的三个杯子不放，反复翻看前任秀恩爱的动态折磨自己。",
      reversed: "擦干眼泪发现身后还有默默守护你的人，决定翻过这一页重新做人。",
      crushState: "TA被过去的某段感情伤得很重，目前还困在旧情疗伤期，走不出来。",
    },
    decisionVibe: { recommendation: "HOLD", percentage: 30, caution: "不要为了洒掉的牛奶哭泣，转身看看身后。" },
    memeQuote: "全国今天还有几千人和你一样抽到了圣杯五，你不是一个人在熬。",
    actionItem: "去洗手间用冷水洗一把脸，对着镜子深呼吸并拍拍自己的脸颊。",
    luckyBonus: "吃一颗薄荷糖或喝口凉水，给情绪降降温。",
    banweiIndex: 75,
  },

  // ================= 宝剑组 (Swords / 风元素 / 思维、内耗与冲突) =================
  {
    id: "swords-1",
    nameEn: "Ace of Swords",
    nameCn: "宝剑一",
    arcana: "minor",
    suit: "swords",
    number: 1,
    element: "air",
    icon: "Feather",
    uprightKeywords: ["锋芒毕露", "斩断纠结", "看破幻象", "一针见血"],
    reversedKeywords: ["出口伤人", "过度理性", "冷酷无情", "自掘坟墓"],
    workplaceVibe: {
      upright: "用极度清晰的逻辑和数据击碎所有的扯皮借口，一剑封喉，敲定方案。",
      reversed: "说话太刺伤了协作方的自尊心，导致方案虽然正确但根本推不动。",
      subtextMeaning: "‘我就事论事’翻译：虽然我态度差，但你拿我没办法，因为你确实理亏。",
    },
    loveVibe: {
      upright: "不爱了就干脆利落讲清楚，拒绝任何冷暴力和不清不楚的耗着。",
      reversed: "在吵架中用最恶毒的话攻击对方软肋，赢了辩论，丢了爱人。",
      crushState: "TA头脑极其冷静理智，对恋爱有清晰的标准框架，不会轻易感情用事。",
    },
    decisionVibe: { recommendation: "GO", percentage: 85, caution: "理智如刀，切中要害，但注意说话分寸。" },
    memeQuote: "逻辑是我的武器，专治各种职场和情感的低幼把戏。",
    actionItem: "把你的观点精简为一句不超过 15 个字的话，直接说结论。",
    luckyBonus: "换一把锋利顺手的水笔或裁纸刀。",
    banweiIndex: 45,
  },
  {
    id: "swords-3",
    nameEn: "Three of Swords",
    nameCn: "宝剑三",
    arcana: "minor",
    suit: "swords",
    number: 3,
    element: "air",
    icon: "HeartOff",
    uprightKeywords: ["心脏被扎", "背叛撕裂", "深夜emo", "血淋淋真相"],
    reversedKeywords: ["伤口结痂", "逐渐释怀", "原谅解脱", "最痛时刻已过"],
    workplaceVibe: {
      upright: "被最信任的同事背后捅刀，或者辛辛苦苦做的项目在评奖时名字被抹掉。",
      reversed: "痛定思痛，明白了‘同事就是同事不是家人’的真理，内心变得刀枪不入。",
      subtextMeaning: "‘我也是没办法，大家理解一下’翻译：为了保我自己，只能牺牲你了。",
    },
    loveVibe: {
      upright: "心被扎得千疮百孔，被断崖式分手或发现欺骗，痛到无法呼吸。",
      reversed: "虽然心还在隐隐作痛，但已经不再流血，开始理性看待这场劫难。",
      crushState: "TA当前情感状态处于破损撕裂期，极度脆弱甚至有防备心。",
    },
    decisionVibe: { recommendation: "RUN", percentage: 10, caution: "痛是成长的代价，别在伤口上撒盐。" },
    memeQuote: "心脏被扎成筛子也没事，正好通风透气，凉快！",
    actionItem: "戴上耳机大哭一场或者狂听 3 首重金属摇滚把委屈吼出来。",
    luckyBonus: "买一块甜甜的蛋糕或奶茶，让糖分抚慰破碎的心神。",
    banweiIndex: 90,
  },
  {
    id: "swords-10",
    nameEn: "Ten of Swords",
    nameCn: "宝剑十",
    arcana: "minor",
    suit: "swords",
    number: 10,
    element: "air",
    icon: "Crosshair",
    uprightKeywords: ["被扎满十剑", "触底谷底", "彻底瘫倒", "黎明前夜"],
    reversedKeywords: ["死透反弹", "最烂不过如此", "拔剑爬起", "劫后余生"],
    workplaceVibe: {
      upright: "加班加到猝死边缘，项目被砍，绩效背锅，坏事同时发生，躺在地上彻底摆烂。",
      reversed: "既然已经掉到马里亚纳海沟了，往后每一步都是向上走，已经没有什么能伤害你了。",
      subtextMeaning: "‘今年大家都不容易’翻译：年终奖取消，加班照旧，爱干不干。",
    },
    loveVibe: {
      upright: "这段感情已经死得透透的了，连争吵的力气都没了，灰飞烟灭。",
      reversed: "从行尸走肉的状态中终于喘上一口气，恭喜你，你的情劫渡完了！",
      crushState: "TA整个人处于精神瘫痪状态，根本没有多余能量回应任何人。",
    },
    decisionVibe: { recommendation: "HOLD", percentage: 5, caution: "躺平别动，此时任何挣扎都是浪费体力，静待黎明。" },
    memeQuote: "只要我彻底躺在地上，就没有人能把我击倒！",
    actionItem: "关机睡觉！天塌下来明天再说，先保命要紧。",
    luckyBonus: "换一双最舒服的软拖鞋，脱掉勒脚的皮鞋高跟鞋。",
    banweiIndex: 100,
  },

  // ================= 星币组 (Pentacles / 土元素 / 物质财富、现实价值与肉体安顿) =================
  {
    id: "pentacles-1",
    nameEn: "Ace of Pentacles",
    nameCn: "星币一",
    arcana: "minor",
    suit: "pentacles",
    number: 1,
    element: "earth",
    icon: "Coins",
    uprightKeywords: ["真金白银", "入职大吉", "务实红利", "落袋为安"],
    reversedKeywords: ["投资暴雷", "入不敷出", "错失财机", "贪小失大"],
    workplaceVibe: {
      upright: "收到满意的录用Offer，或者第一笔项目款到账，摸得到沉甸甸的现实回报。",
      reversed: "为了虚无缥缈的股权答应低薪，结果干了半年公司发不出工资。",
      subtextMeaning: "‘待遇从优’翻译：我们给不了市场价，但我们有一屋子零食和咖啡。",
    },
    loveVibe: {
      upright: "务实踏实接地气的感情，肯为你花钱，肯带你融入现实生活的每一个柴米油盐。",
      reversed: "天天把爱挂在嘴边但连一杯奶茶都舍不得买，纯属白嫖型恋爱。",
      crushState: "TA是个极其务实现实的人，先立业后成家，财富安全感是TA的首要前提。",
    },
    decisionVibe: { recommendation: "GO", percentage: 95, caution: "只要钱给到位，其他的都是次要矛盾。" },
    memeQuote: "别跟我谈虚头巴脑的情怀，请问能折现成人民币打我卡上吗？",
    actionItem: "把零钱包或微信零钱里的钱转到理财通或存钱罐里，积少成多。",
    luckyBonus: "摸摸手里的硬币或者银行卡，感受真实的财富质感。",
    banweiIndex: 20,
  },
  {
    id: "pentacles-4",
    nameEn: "Four of Pentacles",
    nameCn: "星币四",
    arcana: "minor",
    suit: "pentacles",
    number: 4,
    element: "earth",
    icon: "Lock",
    uprightKeywords: ["守财奴", "安全感匮乏", "守住底牌", "拒绝分享"],
    reversedKeywords: ["破财免灾", "敞开胸怀", "舍得放手", "松动格局"],
    workplaceVibe: {
      upright: "死死守住自己的核心代码或客户资源不交，缺乏安全感，对谁都防着一手。",
      reversed: "终于懂得资源只有流动起来才能生财，不再守着一亩三分地内卷。",
      subtextMeaning: "‘要加强知识沉淀分享’翻译：把你的独门秘籍交出来，方便后续替代你。",
    },
    loveVibe: {
      upright: "情感吝啬鬼，捂着自己的心生怕吃亏，算计谁付出的多谁付出的少。",
      reversed: "终于不再算小账，愿意为心爱的人承担一点风险与付出了。",
      crushState: "TA防备心理极强，捂得严严实实，绝不会轻易亮出自己的真实家底。",
    },
    decisionVibe: { recommendation: "HOLD", percentage: 50, caution: "守住现金流，眼下不是大手大脚的时候。" },
    memeQuote: "兜里有钱，心里不慌；谁劝我消费，我就跟谁急。",
    actionItem: "查一下银行卡余额，核对本周的日常开销，建立踏实的安全感。",
    luckyBonus: "把钱包整理干净，纸币按面额抚平放好。",
    banweiIndex: 50,
  },
  {
    id: "pentacles-10",
    nameEn: "Ten of Pentacles",
    nameCn: "星币十",
    arcana: "minor",
    suit: "pentacles",
    number: 10,
    element: "earth",
    icon: "Award",
    uprightKeywords: ["家底厚实", "财富自由", "传承基业", "人生赢家"],
    reversedKeywords: ["家族纠纷", "继承危机", "外强中干", "房贷断供"],
    workplaceVibe: {
      upright: "大厂或老牌头部企业的高管待遇，健全的五险一金和福利体系，家族式稳健庇护。",
      reversed: "表面光鲜的独角兽企业实则资金链断裂，拖欠社保，危机四伏。",
      subtextMeaning: "‘我们是有深厚底蕴的大平台’翻译：晋升通道早已锁死，论资排辈熬死你。",
    },
    loveVibe: {
      upright: "世俗与精神双重丰盛的完美结局，两家门当户对，受到全体长辈的真心祝福。",
      reversed: "因房产加名或两家利益拉扯闹崩，世俗的算盘压垮了原本纯洁的爱意。",
      crushState: "TA家境良好且考虑极具现实眼光，对未来家族建设有长远标准。",
    },
    decisionVibe: { recommendation: "GO", percentage: 95, caution: "稳扎稳打，背靠大树好乘凉。" },
    memeQuote: "努力的终极目标：早日退休，做一个无忧无虑的收租闲人。",
    actionItem: "给父母或家里长辈打个暖心电话，问候一下身体。",
    luckyBonus: "做一顿丰盛的家常菜，踏踏实实吃饱喝足。",
    banweiIndex: 10,
  },

  {
  id: "wands-5",
  nameEn: "Five of Wands",
  nameCn: "权杖五",
  arcana: "minor",
  suit: "wands",
  number: 5,
  element: "fire",
  icon: "Flame",
  uprightKeywords: [
    "多方扯皮",
    "办公室混战",
    "恶性竞争",
    "推诿拉扯"
  ],
  reversedKeywords: [
    "内耗平息",
    "达成妥协",
    "逃离撕逼",
    "各退一步"
  ],
  workplaceVibe: {
    upright: "各部门互相踢皮球，开会三小时全在辩解和甩锅，实际问题零进展。",
    reversed: "撕逼大戏终于告一段落，大家各退一步达成表面和平，可以安心干自己的活了。",
    subtextMeaning: "‘这个需求还需要大家拉通对齐’翻译：谁也不想承担责任，互相推诿中。"
  },
  loveVibe: {
    upright: "频繁因为鸡毛蒜皮的小事拌嘴，彼此都在争夺主导权，心累大于甜蜜。",
    reversed: "有一方决定不争了，用幽默或主动认怂化解火药味，警报解除。",
    crushState: "TA身边竞争对手不少，或者TA本人正陷入外界的人际纷争，无暇专注一人。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 35,
    caution: "水太浑，别在此时卷入神仙打架。"
  },
  memeQuote: "只要我没有道德，道德就绑架不了我；你们吵吧，我先去点奶茶了。",
  actionItem: "群聊消息设为免打扰，非必要绝不主动在撕逼大群里开麦发言。",
  luckyBonus: "买包薄荷糖，开会想翻白眼的时候含一颗冷静一下。",
  banweiIndex: 85
},
  {
  id: "wands-6",
  nameEn: "Six of Wands",
  nameCn: "权杖六",
  arcana: "minor",
  suit: "wands",
  number: 6,
  element: "fire",
  icon: "Crown",
  uprightKeywords: [
    "战绩高光",
    "C位出道",
    "通报表彰",
    "众人点赞"
  ],
  reversedKeywords: [
    "自嗨翻车",
    "虚假繁荣",
    "捧杀危机",
    "居功自傲"
  ],
  workplaceVibe: {
    upright: "项目成功落地拿到漂亮业务战报，周会受到老板点名表扬，正处在职业高光期。",
    reversed: "功劳被领导或空降领导顺手牵羊截胡，或者数据注水被内行人暗中看笑话。",
    subtextMeaning: "‘这次你表现不错，继续加油’翻译：口头封赏已给，实际绩效奖励下季度再说。"
  },
  loveVibe: {
    upright: "在感情里魅力大爆发，受到对方极度肯定与崇拜，自信心爆棚。",
    reversed: "太爱在另一半面前装逼说教，反而引起对方反感，小心被当场拆台。",
    crushState: "TA对你的外在展现或能力印象极佳，觉得你闪闪发光很有吸引力。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "顺风局大胆推进，但记住见好就收，勿被捧杀。"
  },
  memeQuote: "今天允许自己膨胀五分钟，本宫就是这片格子间最靓的崽！",
  actionItem: "把这次的成功案例截图存进专属‘高光作品集’文件夹，为跳槽加薪备好弹药。",
  luckyBonus: "朋友圈发一条低调凡尔赛的照片，接受大家的点赞洗礼。",
  banweiIndex: 25
},
  {
  id: "wands-7",
  nameEn: "Seven of Wands",
  nameCn: "权杖七",
  arcana: "minor",
  suit: "wands",
  number: 7,
  element: "fire",
  icon: "Shield",
  uprightKeywords: [
    "以一当十",
    "孤勇对线",
    "捍卫领地",
    "寸步不让"
  ],
  reversedKeywords: [
    "寡不敌众",
    "心态崩塌",
    "放弃抵抗",
    "任人宰割"
  ],
  workplaceVibe: {
    upright: "被多方质疑或加压，但你占据专业高地，拿出事实证据一人硬刚全场。",
    reversed: "防线被击穿，面对轮番轰炸无力招架，开始陷入被动挨打的境地。",
    subtextMeaning: "‘这也是为了你好’翻译：别反抗了，乖乖接受这个不合理的安排。"
  },
  loveVibe: {
    upright: "坚定守护自己的感情原则，面对外部非议或家庭阻力绝不妥协退缩。",
    reversed: "外界稍微一有风吹草动就动摇，甚至开始怀疑自己的选择是否值得。",
    crushState: "TA目前防御机制拉满，像一只竖起尖刺的刺猬，需要极大耐心才能破防。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 70,
    caution: "你占理，坚持底线就能赢，千万别先怯场！"
  },
  memeQuote: "只要我不尴尬，尴尬的就是别人；讲道理我没怕过谁！",
  actionItem: "把对方挑刺的条款逐一找出法律或规章依据，列成清单直接反弹回去。",
  luckyBonus: "换一张气场两米八的壁纸，给自己加点战斗BUFF。",
  banweiIndex: 75
},
  {
  id: "wands-8",
  nameEn: "Eight of Wands",
  nameCn: "权杖八",
  arcana: "minor",
  suit: "wands",
  number: 8,
  element: "fire",
  icon: "Zap",
  uprightKeywords: [
    "光速推进",
    "瞬发直达",
    "效率拉满",
    "飞速回信"
  ],
  reversedKeywords: [
    "急于求成",
    "信息混乱",
    "半路拦截",
    "刹不住车"
  ],
  workplaceVibe: {
    upright: "项目进入超音速冲刺，各环节一气呵成，等待已久的消息或offer即将秒达。",
    reversed: "消息传递脱节导致南辕北辙，忙中出错，发错邮件或给错数据导致返工。",
    subtextMeaning: "‘这个今天下班前必须给到’翻译：留给你的操作窗口期极短，速战速决！"
  },
  loveVibe: {
    upright: "感情进展一日千里，可能突然开启异地奔现或闪电告白，热度迅速升温。",
    reversed: "节奏太快导致消化不良，或者消息发太密吓跑对方，成了狂轰滥炸。",
    crushState: "TA正按捺不住想找你聊天，很快就会有突如其来的互动或邀约。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 95,
    caution: "趁热打铁，趁势头正猛一鼓作气拿下！"
  },
  memeQuote: "别问，问就是量子速度；起飞的一瞬间，烦恼就被甩在身后了。",
  actionItem: "趁着手感火热，把积压的三件小事在 15 分钟内全部处理掉。",
  luckyBonus: "喝一杯气泡水，感受口腔里噼里啪啦的活力释放。",
  banweiIndex: 40
},
  {
  id: "wands-9",
  nameEn: "Nine of Wands",
  nameCn: "权杖九",
  arcana: "minor",
  suit: "wands",
  number: 9,
  element: "fire",
  icon: "Lock",
  uprightKeywords: [
    "高度戒备",
    "吃一堑长一智",
    "最后防线",
    "坚守阵地"
  ],
  reversedKeywords: [
    "草木皆兵",
    "过度防卫",
    "精疲力竭",
    "杯弓蛇影"
  ],
  workplaceVibe: {
    upright: "受过坑害后学聪明了，做事留痕、邮件抄送、录音备份，把防线筑得密不透风。",
    reversed: "把所有人都当成潜在刺客，过度神经紧绷，把自己搞得喘不过气。",
    subtextMeaning: "‘按流程走就行’翻译：我已经设好免责协议，出了事别想找我背锅。"
  },
  loveVibe: {
    upright: "带着过去的感情情伤筑起心墙，不会轻易交付真心，谨慎观察对方人品。",
    reversed: "因为害怕再次受伤而彻底封闭内心，把真正带着诚意的人也推得远远的。",
    crushState: "TA受过情伤，安全感极度匮乏，试探你是不是一个靠谱安全的人。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 50,
    caution: "保持戒备是对的，但别把盟友也当成敌人。"
  },
  memeQuote: "跌倒过的地方，我不仅爬起来，还立了一块‘禁止踩坑’的荧光警示牌。",
  actionItem: "检查重要合同或沟通纪要是否有文字存档，没有就顺手补一封确认邮件。",
  luckyBonus: "晚上回家锁好门窗，点上助眠香薰，让自己在安全港湾里好好歇息。",
  banweiIndex: 70
},
  {
  id: "wands-page",
  nameEn: "Page of Wands",
  nameCn: "权杖侍从",
  arcana: "minor",
  suit: "wands",
  number: 11,
  element: "fire",
  icon: "Sparkles",
  uprightKeywords: [
    "好奇宝宝",
    "实习萌新",
    "满腔热忱",
    "灵感闪现"
  ],
  reversedKeywords: [
    "三分钟热度",
    "浮躁冒进",
    "消息闭塞",
    "粗心大意"
  ],
  workplaceVibe: {
    upright: "对新领域充满探索欲，初入职场的朝气能打破死气沉沉的老油条氛围。",
    reversed: "想法挺多但执行力拉胯，三分钟热度，写个开头就扔在一边不管了。",
    subtextMeaning: "‘年轻人很有想法嘛’翻译：先别急着指点江山，先把基础活干漂亮再说。"
  },
  loveVibe: {
    upright: "像充满好奇心的小狗一样试探性靠近，带着未经世故的可爱与热情。",
    reversed: "缺乏责任心，喜欢聊两句就玩消失，被新鲜感支配的幼稚鬼。",
    crushState: "TA对你充满好奇，时不时翻看你的动态，正打算找个借口找你开启话题。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 80,
    caution: "带着探索心态去尝试，但要给自己设一个落实期限。"
  },
  memeQuote: "虽然我啥也不会，但我能学啊！干劲十足，随时准备整点新花样。",
  actionItem: "去了解一个之前从未涉足的赛道或技能，看 15 分钟通识科普视频。",
  luckyBonus: "买一支颜色鲜艳的荧光笔或好看的笔记本，开启新灵感记录。",
  banweiIndex: 30
},
  {
  id: "wands-knight",
  nameEn: "Knight of Wands",
  nameCn: "权杖骑士",
  arcana: "minor",
  suit: "wands",
  number: 12,
  element: "fire",
  icon: "Compass",
  uprightKeywords: [
    "狂飙突进",
    "风风火火",
    "说干就干",
    "破风前行"
  ],
  reversedKeywords: [
    "鲁莽翻车",
    "虎头蛇尾",
    "脾气火爆",
    "盲目冲撞"
  ],
  workplaceVibe: {
    upright: "行动力极强的急先锋，敢接难活，执行速度极快，靠一股猛劲破冰。",
    reversed: "脾气比本事大，急躁冒进，不看红绿灯硬闯，最后不得不替自己的冲动买单。",
    subtextMeaning: "‘抓紧把这件事给办了’翻译：越快越好，不要纠缠细枝末节！"
  },
  loveVibe: {
    upright: "追求时攻势极其猛烈，带着热烈的浪漫与澎湃激情，让你迅速沦陷。",
    reversed: "来得快去得也快的三分钟热度男/女，热情退散后冷淡得像块冰。",
    crushState: "TA现在对你情绪高涨，主动性极强，正盘算着怎么约你出来。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "冲劲很足，但注意别在第一道弯道漂移过猛翻车。"
  },
  memeQuote: "犹豫就会败北，干就完了！大不了一边流泪一边狂奔！",
  actionItem: "选定一件想做但拖延的事，设定一个 25 分钟番茄钟，立刻动手开干！",
  luckyBonus: "听一首摇滚或电音，把心率拉上去，甩掉畏畏缩缩的犹疑。",
  banweiIndex: 50
},
  {
  id: "wands-queen",
  nameEn: "Queen of Wands",
  nameCn: "权杖王后",
  arcana: "minor",
  suit: "wands",
  number: 13,
  element: "fire",
  icon: "Sun",
  uprightKeywords: [
    "气场两米八",
    "飒爽大女主",
    "社交焦点",
    "自信感染力"
  ],
  reversedKeywords: [
    "戏精上身",
    "控制狂魔",
    "嫉妒心重",
    "情绪暴躁"
  ],
  workplaceVibe: {
    upright: "自信从容的业务大拿，既有专业度又极具个人魅力，谈笑间把棘手问题搞定。",
    reversed: "因为别人的风头盖过自己而暗生妒意，或者动辄在办公室大发雷霆搞窒息操作。",
    subtextMeaning: "‘我相信你的品味’翻译：做好了是你的功劳，做差了你全权负责。"
  },
  loveVibe: {
    upright: "独立而富有魅力的成熟伴侣，不依附不谄媚，活出最耀眼的自我。",
    reversed: "占有欲与控制欲爆表，把伴侣当成个人附属品，动辄上纲上线。",
    crushState: "TA觉得你非常有独立魅力，甚至觉得你气场太强有点不好接近。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "做自信的自己，你的魅力就是最好的入场券。"
  },
  memeQuote: "本大女主的一生只为自己精彩买单，老娘美得理直气壮！",
  actionItem: "穿一件最显气色和自信的衣服，出门前在镜子前给自己一个微笑。",
  luckyBonus: "喷一点温暖明亮的木质花香调香水，散发令人安心的气场。",
  banweiIndex: 20
},
  {
  id: "wands-king",
  nameEn: "King of Wands",
  nameCn: "权杖国王",
  arcana: "minor",
  suit: "wands",
  number: 14,
  element: "fire",
  icon: "Crown",
  uprightKeywords: [
    "大局操盘",
    "愿景领袖",
    "成熟魄力",
    "统御全局"
  ],
  reversedKeywords: [
    "独断专行",
    "暴君作风",
    "狂妄自大",
    "画大饼成性"
  ],
  workplaceVibe: {
    upright: "具备战略眼光的领军人物，能拿到核心资源，敢做决断并为团队扛事撑腰。",
    reversed: "满嘴跑火车画宏大蓝图，实际遇到风险第一个把下属推出去挡枪的伪君子。",
    subtextMeaning: "‘要站在更高维度看问题’翻译：别跟我谈当下加班费，跟我谈未来的期权梦。"
  },
  loveVibe: {
    upright: "有担当有长远规划的靠谱伴侣，愿意把两人的未来纳入人生蓝图之中。",
    reversed: "大男子主义/大女主作风过甚，凡事必须TA说了算，容不得半点反驳。",
    crushState: "TA是个事业心极强的人，考虑伴侣时会综合考量双方能否并肩作战。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "放眼长远，确立核心主导权，大局在握。"
  },
  memeQuote: "真正的王者不是不犯错，而是无论多大的风浪，手里都有舵！",
  actionItem: "写下未来 3 个月最核心的唯一业务/生活目标，聚焦精力不再分散。",
  luckyBonus: "换一把坐着最舒服的人体工学椅或靠垫，坐拥江山气定神闲。",
  banweiIndex: 35
},
  {
  id: "cups-3",
  nameEn: "Three of Cups",
  nameCn: "圣杯三",
  arcana: "minor",
  suit: "cups",
  number: 3,
  element: "water",
  icon: "Users",
  uprightKeywords: [
    "闺蜜聚会",
    "快乐恰饭",
    "庆功微醺",
    "搭子狂欢"
  ],
  reversedKeywords: [
    "塑料姐妹花",
    "社交过载",
    "表面客套",
    "八卦背刺"
  ],
  workplaceVibe: {
    upright: "跨部门协作异常顺滑，下班后和神仙饭搭子一起吐槽工作，治愈一整天的疲惫。",
    reversed: "办公室小团体勾心斗角，当面亲亲抱抱，背后在小群里把你说得一文不值。",
    subtextMeaning: "‘周末大家一起聚聚放松下’翻译：非强制但必须出席的变相团建。"
  },
  loveVibe: {
    upright: "融洽轻松的相处氛围，互相融入彼此的朋友圈，笑点一致，快乐加倍。",
    reversed: "小心有第三方插足或闺蜜掺和，恋爱变成了三个人的拥挤游戏。",
    crushState: "TA觉得和你相处像朋友一样轻松自然，但可能尚未区分是友情还是爱情。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "走出去社交，快乐与贵人都在群体互动中诞生。"
  },
  memeQuote: "打工哪有不疯的，只要有饭搭子和奶茶，我还能再苟五百年！",
  actionItem: "今晚下班约上最合拍的朋友，去吃顿火锅或喝杯小酒畅所欲言。",
  luckyBonus: "给好友发一张搞笑发疯表情包，收获双倍爆笑回复。",
  banweiIndex: 10
},
  {
  id: "cups-4",
  nameEn: "Four of Cups",
  nameCn: "圣杯四",
  arcana: "minor",
  suit: "cups",
  number: 4,
  element: "water",
  icon: "Moon",
  uprightKeywords: [
    "精神离职",
    "emo发呆",
    "心如止水",
    "视若无睹"
  ],
  reversedKeywords: [
    "重燃热情",
    "抓住转机",
    "走出自闭",
    "接纳好意"
  ],
  workplaceVibe: {
    upright: "对现在的晋升、画饼毫无兴趣，开启物理上班精神摸鱼模式，给再多也掀不起波澜。",
    reversed: "终于意识到躺平并不能解决焦虑，开始抬头看看周围递过来的新机会与橄榄枝。",
    subtextMeaning: "‘你觉得这个机会怎么样’翻译：别装死躺平了，出来接活！"
  },
  loveVibe: {
    upright: "沉浸在自己的小世界里，对外界示好无动于衷，甚至懒得回复微信消息。",
    reversed: "从过去的感情阴影或自闭状态中走出来，愿意给新人一个了解自己的机会。",
    crushState: "TA目前心态比较疲惫佛系，对恋爱提不起劲，不是针对你，是TA在电量耗尽期。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 30,
    caution: "不要盲目拒绝，那个你不屑一顾的选项可能藏着生机。"
  },
  memeQuote: "人在工位坐，魂在太空游；世界喧闹，我只想静静发呆。",
  actionItem: "去阳台或窗边深呼吸 3 分钟，看看天上的云和阳光，让感官重新联机。",
  luckyBonus: "把微信状态设为‘发呆中’，谁找你都先晾 10 分钟再说。",
  banweiIndex: 60
},
  {
  id: "cups-6",
  nameEn: "Six of Cups",
  nameCn: "圣杯六",
  arcana: "minor",
  suit: "cups",
  number: 6,
  element: "water",
  icon: "Heart",
  uprightKeywords: [
    "白月光回忆",
    "纯真治愈",
    "旧友重逢",
    "安全感怀抱"
  ],
  reversedKeywords: [
    "活在过去",
    "被回忆绑架",
    "逃避成长",
    "童年创伤复发"
  ],
  workplaceVibe: {
    upright: "老同事或老上级伸出援手，提供了安全舒适的工作机会，被熟悉的人温情以待。",
    reversed: "固守过去的老黄历和陈旧经验，不愿接受新工具和新环境，被时代甩下车。",
    subtextMeaning: "‘以前我们团队可不是这样的’翻译：老资格员工开始倚老卖老怀旧了。"
  },
  loveVibe: {
    upright: "像初恋般纯真无瑕的温柔关照，或者曾经的白月光前任重新发来真诚问候。",
    reversed: "戴着八层滤镜怀念前任，对眼前真实的人挑三拣四，困在回忆里出不来。",
    crushState: "TA对你有一种似曾相识的亲切感，觉得你身上有某种纯粹的美好特质。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 80,
    caution: "接受老朋友的善意，但别让怀旧阻挡你前进的步伐。"
  },
  memeQuote: "如果长大太辛苦，今天就允许自己做一个五岁的小朋友吧。",
  actionItem: "吃一口小时候最爱吃的零食（如大白兔奶糖或旺旺雪饼），重温纯真快乐。",
  luckyBonus: "翻看一张童年或大学时无忧无虑的旧照片，给自己注入温暖能量。",
  banweiIndex: 15
},
  {
  id: "cups-7",
  nameEn: "Seven of Cups",
  nameCn: "圣杯七",
  arcana: "minor",
  suit: "cups",
  number: 7,
  element: "water",
  icon: "Sparkles",
  uprightKeywords: [
    "白日做梦",
    "海市蜃楼",
    "选择困难",
    "画大饼幻象"
  ],
  reversedKeywords: [
    "看清现实",
    "戳破泡影",
    "目标聚焦",
    "脚踏实地"
  ],
  workplaceVibe: {
    upright: "眼前诱惑很多，领导画的饼一个比一个香，但全在云端，落地的可能性微乎其微。",
    reversed: "终于从‘年薪百万期权上市’的美梦中惊醒，看清合同里的违约条款，果断踩刹车。",
    subtextMeaning: "‘未来这块业务空间巨大’翻译：目前没有一分钱预算，全靠你的热情发电。"
  },
  loveVibe: {
    upright: "陷入了对对方完美的幻想中，把自己臆想的人设立在对方身上，恋爱脑严重超标。",
    reversed: "终于看清对方的真实面目，滤镜碎了一地，反而松了一口气，回归清醒。",
    crushState: "TA心思很活络，可能同时接触好几个选择，或者沉浸在自己的幻想泡沫里。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 25,
    caution: "眼花缭乱皆是泡影，必须核实最底层的真实数据！"
  },
  memeQuote: "梦里什么都有，醒来工位依旧；少画大饼多打钱，才是成年人的体面。",
  actionItem: "拿出一张白纸，把你纠结的所有选项列出，无情删掉 3 个最不切实际的幻想。",
  luckyBonus: "用冷水洗把脸，喷点爽肤水，让大脑瞬间恢复清醒。",
  banweiIndex: 55
},
  {
  id: "cups-8",
  nameEn: "Eight of Cups",
  nameCn: "圣杯八",
  arcana: "minor",
  suit: "cups",
  number: 8,
  element: "water",
  icon: "Compass",
  uprightKeywords: [
    "及时止损",
    "断舍离",
    "头也不回",
    "追寻真我"
  ],
  reversedKeywords: [
    "藕断丝连",
    "苟延残喘",
    "害怕未知",
    "原地打转"
  ],
  workplaceVibe: {
    upright: "哪怕眼前的工作待遇还凑合，但你知道它给不了你想要的意义，果断决定离开去寻找新天地。",
    reversed: "明知道这个岗位没有前途，但贪图温水煮青蛙的舒适感，犹犹豫豫不敢裸辞。",
    subtextMeaning: "‘你走了会很可惜的’翻译：再也找不到这么便宜好用的替代者了。"
  },
  loveVibe: {
    upright: "不再执着于沉没成本，体面地退出一段消耗你能量的关系，把尊严留给自己。",
    reversed: "反复拉黑又反复加回，在垃圾桶里翻找爱情，被同一个人伤害千百遍。",
    crushState: "TA的心已经开始游离，或许意识到两人并不合适，正在默默后撤疏远。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "离开才是最大的清醒，前方有更高的山峰在等候。"
  },
  memeQuote: "不是所有东西都值得留恋；头也不回地往前走，天亮就在前面。",
  actionItem: "果断清理手机相册里 10 张让你伤感的旧截图，或者扔掉一件鸡肋闲置旧物。",
  luckyBonus: "出门换一条之前没走过的回家路线，看看沿途新的风景。",
  banweiIndex: 45
},
  {
  id: "cups-9",
  nameEn: "Nine of Cups",
  nameCn: "圣杯九",
  arcana: "minor",
  suit: "cups",
  number: 9,
  element: "water",
  icon: "Sparkles",
  uprightKeywords: [
    "心满意足",
    "凡尔赛现场",
    "自我犒劳",
    "美梦成真"
  ],
  reversedKeywords: [
    "自满招损",
    "虚荣消费",
    "精神空虚",
    "享乐过度"
  ],
  workplaceVibe: {
    upright: "达成了阶段性圆满成果，绩效奖金到位，整个人处在极度松弛和愉悦的奖赏状态。",
    reversed: "稍微有点成绩就到处吹嘘，结果引来同事嫉恨或老板加大压榨力度。",
    subtextMeaning: "‘听说你最近赚不少啊’翻译：小心大家已经开始盯上你的肉了。"
  },
  loveVibe: {
    upright: "沉浸在被爱意包围的幸福中，对方的表现甚至超出了你的预期，满意度打满五星。",
    reversed: "在感情里只顾自己爽，忽视了伴侣的真实需求，显得自私而傲慢。",
    crushState: "TA自我感觉相当良好，生活滋润，目前正处在非常舒展自信的状态。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 95,
    caution: "好好犒赏自己，这是你应得的成果！"
  },
  memeQuote: "只要我吃饱喝足睡好，天大的事都能当成下酒小菜！",
  actionItem: "去吃一顿平时舍不得吃的高级餐厅，或者买下一件心水已久的小心愿单礼物。",
  luckyBonus: "泡一个舒舒服服的热水澡，在里面加一颗香香的泡泡浴球。",
  banweiIndex: 10
},
  {
  id: "cups-10",
  nameEn: "Ten of Cups",
  nameCn: "圣杯十",
  arcana: "minor",
  suit: "cups",
  number: 10,
  element: "water",
  icon: "Heart",
  uprightKeywords: [
    "稳稳的幸福",
    "家庭圆满",
    "情感大团圆",
    "终成正果"
  ],
  reversedKeywords: [
    "表面和谐",
    "家庭琐事",
    "价值观冲突",
    "貌合神离"
  ],
  workplaceVibe: {
    upright: "团队像一个温暖的大家庭，彼此支持没有勾心斗角，工作生活平衡感极佳。",
    reversed: "公司口头上提倡‘家文化’，实际是道德绑架员工周末无偿团建和加班。",
    subtextMeaning: "‘我们都是一家人嘛’翻译：既然是一家人，加班就不算加班费了哈。"
  },
  loveVibe: {
    upright: "能够携手走向婚姻的坚实伴侣，双方家庭认可，充满温情与安全感的大圆满。",
    reversed: "双方亲属过度干涉小两口的生活，现实一地鸡毛破坏了最初的浪漫誓言。",
    crushState: "TA渴望建立稳定长久的情感关系，看重彼此能否安安稳稳过好柴米油盐。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 95,
    caution: "珍惜身边的温情，大团圆结局正在显化。"
  },
  memeQuote: "世界的尽头是下班回家，吃上一口热气腾腾的饭菜，灯火可亲。",
  actionItem: "给父母或最在乎的亲人发一条关心的微信，分享今天的小趣事。",
  luckyBonus: "买一束新鲜的花插在客厅瓶子里，给家里增添生机与馨香。",
  banweiIndex: 5
},
  {
  id: "cups-page",
  nameEn: "Page of Cups",
  nameCn: "圣杯侍从",
  arcana: "minor",
  suit: "cups",
  number: 11,
  element: "water",
  icon: "Heart",
  uprightKeywords: [
    "浪漫小狗",
    "灵感缪斯",
    "纯真示好",
    "情绪敏感"
  ],
  reversedKeywords: [
    "玻璃心脆弱",
    "自作多情",
    "戏精附体",
    "恋爱脑发作"
  ],
  workplaceVibe: {
    upright: "带着艺术家的灵气进入项目，提出令人眼前一亮的情感化设计或营销文案创意。",
    reversed: "经不起批评，老板稍微提个修改意见就在洗手间抹眼泪，玻璃心碎一地。",
    subtextMeaning: "‘这个文案感觉差点意思’翻译：太学生气自嗨了，不够商业化落地。"
  },
  loveVibe: {
    upright: "像害羞纯情的小狗摇尾巴示好，发来笨拙却真诚的问候，满眼都是你。",
    reversed: "疯狂脑补剧情，对方撤回一条消息就以为对方讨厌自己，内耗得睡不着觉。",
    crushState: "TA对你心怀好感和敬意，但有些害羞胆怯，不敢太放肆地主动靠近。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "相信你心底最细腻的直觉，带着真诚出发。"
  },
  memeQuote: "虽然我偶尔玻璃心，但我这颗心晶莹剔透全是真诚啊！",
  actionItem: "把今天脑海里闪现的一个奇思妙想写在备忘录里，别让它溜走。",
  luckyBonus: "点一杯加了草莓或蜜桃果肉的甜甜奶茶，补充粉红多巴胺。",
  banweiIndex: 20
},
  {
  id: "cups-knight",
  nameEn: "Knight of Cups",
  nameCn: "圣杯骑士",
  arcana: "minor",
  suit: "cups",
  number: 12,
  element: "water",
  icon: "Compass",
  uprightKeywords: [
    "浪漫诗人",
    "情话达人",
    "白马王子",
    "温柔邀约"
  ],
  reversedKeywords: [
    "中央空调",
    "画饼海王",
    "不切实际",
    "花言巧语"
  ],
  workplaceVibe: {
    upright: "极擅长人际斡旋与公关，用温文尔雅的沟通方式拉近甲方关系，化干戈为玉帛。",
    reversed: "只会口头画情怀大饼，一到具体交付和技术攻坚就两手一摊找人代劳。",
    subtextMeaning: "‘这件事交给你我很放心’翻译：话先说得好听，但资源支持一概没有。"
  },
  loveVibe: {
    upright: "极具仪式感的浪漫约会，送花送礼物无微不至，满足你对偶像剧的所有幻想。",
    reversed: "对谁都一样温柔的中央空调，暖了你同时也暖了别人，让你分不清深浅。",
    crushState: "TA是个懂浪漫懂情调的人，近期很有可能会主动向你抛出约会橄榄枝。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "享受温柔浪漫的同时，多观察对方在现实中的执行力。"
  },
  memeQuote: "情话虽动听，行动见真章；别光听TA怎么说，看TA为你花多少时间和心思。",
  actionItem: "给生活增添一点小仪式感：比如买一朵喜欢的花插在办公桌上。",
  luckyBonus: "听一张爵士乐或轻柔 Lo-Fi 歌单，让情绪慢慢融化在音符里。",
  banweiIndex: 25
},
  {
  id: "cups-queen",
  nameEn: "Queen of Cups",
  nameCn: "圣杯王后",
  arcana: "minor",
  suit: "cups",
  number: 13,
  element: "water",
  icon: "Heart",
  uprightKeywords: [
    "共情天花板",
    "情绪解药",
    "神级倾听者",
    "无条件接纳"
  ],
  reversedKeywords: [
    "情绪黑洞",
    "圣母心泛滥",
    "过度敏感",
    "沉沦悲伤"
  ],
  workplaceVibe: {
    upright: "部门里的定海神针兼心灵避风港，谁有委屈找TA倾诉都能被温柔接住并重新充满电。",
    reversed: "太容易吸收别人的负能量，成了所有人的情绪垃圾桶，自己深夜回家崩溃。",
    subtextMeaning: "‘你人真好，太体贴了’翻译：既然你这么好说话，那这个锅顺便帮着背一下？"
  },
  loveVibe: {
    upright: "懂你所有欲言又止的知己型伴侣，眼神一碰就明白你的脆弱，给你无条件的包容。",
    reversed: "过度依赖与情绪勒索，把自己的喜怒哀乐全绑在对方身上，让人窒息。",
    crushState: "TA心思极其敏感细腻，能敏锐感知到你的情绪波动，对你充满温柔怜惜。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "在温暖他人的同时，一定要记得先给自己设一道情绪防火墙。"
  },
  memeQuote: "做别人的太阳之前，先把自己这盏小夜灯的电充满。",
  actionItem: "跟一位让你感到安心的人好好聊聊天，或者把心里憋的话写在私密日记里。",
  luckyBonus: "喝一杯温热的可可或肉桂燕麦奶，暖胃又暖心。",
  banweiIndex: 25
},
  {
  id: "cups-king",
  nameEn: "King of Cups",
  nameCn: "圣杯国王",
  arcana: "minor",
  suit: "cups",
  number: 14,
  element: "water",
  icon: "Crown",
  uprightKeywords: [
    "情绪极度稳定",
    "成熟包容",
    "治愈教父",
    "胸怀若谷"
  ],
  reversedKeywords: [
    "冷暴力大师",
    "情绪压抑",
    "城府过深",
    "虚伪操纵"
  ],
  workplaceVibe: {
    upright: "面对突发危机泰山崩于前而面不改色，用极高的情商和战略定力稳住整个军心。",
    reversed: "表面波澜不惊仿佛圣人，实际在暗中记仇搞小动作，让你死都不知道怎么死的。",
    subtextMeaning: "‘不要带着情绪谈工作’翻译：你的委屈我不关心，我只要看到合规结果。"
  },
  loveVibe: {
    upright: "情绪价值提供天花板，成熟稳重，无论你多焦虑慌乱，TA的一句话就能让你踏实下来。",
    reversed: "善用冷处理，吵架时拒绝沟通，看似冷静实则在用沉默逼对方妥协崩溃。",
    crushState: "TA是个非常克制成熟的人，不会轻易展现波澜，但内心非常重视精神共鸣。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "用成熟和从容应对风浪，情绪稳定就是你的最大护城河。"
  },
  memeQuote: "大人的成熟，是把所有的惊涛骇浪，都调成夜间静音模式。",
  actionItem: "在想发脾气或者回击之前，深呼吸倒数 10 秒，用最冷静平静的语调回复。",
  luckyBonus: "喝一杯高山绿茶或白茶，品味回甘与清心宁神。",
  banweiIndex: 20
},
  {
  id: "swords-2",
  nameEn: "Two of Swords",
  nameCn: "宝剑二",
  arcana: "minor",
  suit: "swords",
  number: 2,
  element: "air",
  icon: "Scale",
  uprightKeywords: [
    "左右为难",
    "盲目逃避",
    "两难僵局",
    "鸵鸟心态"
  ],
  reversedKeywords: [
    "揭开盲盒",
    "必须抉择",
    "僵局打破",
    "真相大白"
  ],
  workplaceVibe: {
    upright: "两个神仙领导打架让你站队，或者两个方案各有利弊，你蒙着眼睛谁也不想选。",
    reversed: "躲无可躲必须选边站，虽然痛苦但至少结束了内耗，开始面对现实后果。",
    subtextMeaning: "‘你觉得这两个方案哪个好’翻译：送命题来了，测测你到底是哪边的人。"
  },
  loveVibe: {
    upright: "心里明知道有问题却假装看不见，用冷战或不沟通维持脆弱的表面和平。",
    reversed: "终于把窗户纸捅破，把彼此的顾虑摊在阳光下，哪怕吵架也比冷暴力强。",
    crushState: "TA也在纠结犹豫，内心天平左右摇摆，暂时做不出决定，处于防御状态。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 40,
    caution: "拖延不能解决问题，摘下眼罩看清现实才能破局。"
  },
  memeQuote: "只要我把头埋进沙子里，世界上的烦心事就追不上我——才怪！",
  actionItem: "挑出那个你最害怕面对的未读消息或未处理审批，闭上眼睛点开它！",
  luckyBonus: "摘下眼镜或闭上双眼做一次眼保健操，给紧绷的神经放松一下。",
  banweiIndex: 75
},
  {
  id: "swords-4",
  nameEn: "Four of Swords",
  nameCn: "宝剑四",
  arcana: "minor",
  suit: "swords",
  number: 4,
  element: "air",
  icon: "Shield",
  uprightKeywords: [
    "闭关休眠",
    "电量回血",
    "挂起不回",
    "修养生息"
  ],
  reversedKeywords: [
    "强行开机",
    "身体报警",
    "被迫复工",
    "心力交瘁"
  ],
  workplaceVibe: {
    upright: "大战告一段落，把所有即时通讯软件静音，合上笔记本电脑，让大脑彻底休眠。",
    reversed: "还没休整完毕就被夺命连环call叫回工位，电量只充到20%就拔掉电源强行开机。",
    subtextMeaning: "‘假期好好休息，有紧急情况再找你’翻译：只要我找你，那就都是紧急情况。"
  },
  loveVibe: {
    upright: "给彼此设立冷静期，不纠缠不发疯，先让滚烫的情绪降降温。",
    reversed: "失眠到深夜胡思乱想，反复看过去的聊天记录，折磨自己不让心休息。",
    crushState: "TA目前处于社交疲惫期，需要独处充电，不要在此时穷追猛打。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 20,
    caution: "现在不是出击的时候，你最需要的是睡个好觉回血！"
  },
  memeQuote: "已进入休眠模式，有事请烧纸，无事勿扰本仙人静修。",
  actionItem: "今晚把手机调成飞行模式或睡眠免打扰，保证 8 小时不受打扰的睡眠。",
  luckyBonus: "戴上蒸汽眼罩，在温热的包裹中彻底放松眼周与大脑。",
  banweiIndex: 5
},
  {
  id: "swords-5",
  nameEn: "Five of Swords",
  nameCn: "宝剑五",
  arcana: "minor",
  suit: "swords",
  number: 5,
  element: "air",
  icon: "Skull",
  uprightKeywords: [
    "恶性内卷",
    "损人不利己",
    "撕破脸皮",
    "赢了也是惨胜"
  ],
  reversedKeywords: [
    "息事宁人",
    "退出恶斗",
    "愿赌服输",
    "收拾残局"
  ],
  workplaceVibe: {
    upright: "办公室办公室政治最恶劣的一面：抢功、背刺、踩着别人的肩膀往上爬，赢了也没朋友。",
    reversed: "意识到这种互撕毫无意义，主动选择抽身退出，不陪这帮跳梁小丑玩零和博弈。",
    subtextMeaning: "‘职场本就是残酷的丛林’翻译：我要对你下手了，别怪我不讲人情。"
  },
  loveVibe: {
    upright: "争吵时专挑最扎心的话往对方心窝里捅，赢了嘴上输了感情，两败俱伤。",
    reversed: "吵完后感到深深的空虚与懊悔，开始反思为什么把最恶毒的话留给了最在乎的人。",
    crushState: "TA防备心很重甚至有点自私刻薄，和TA接触容易被冷言冷语刺伤。"
  },
  decisionVibe: {
    recommendation: "RUN",
    percentage: 10,
    caution: "这是一场没有赢家的泥潭混战，尽早撤离！"
  },
  memeQuote: "为了赢争得面红耳赤，回头一看，大家都是被资本玩弄的纯牛马。",
  actionItem: "不要参与群聊里的任何八卦声讨，默默打卡下班，保全自己的心力。",
  luckyBonus: "吃一块黑巧克力，用微苦与甜味中和心里的戾气。",
  banweiIndex: 95
},
  {
  id: "swords-6",
  nameEn: "Six of Swords",
  nameCn: "宝剑六",
  arcana: "minor",
  suit: "swords",
  number: 6,
  element: "air",
  icon: "Compass",
  uprightKeywords: [
    "逃离苦海",
    "摆渡过渡",
    "伤痛渐愈",
    "平安靠岸"
  ],
  reversedKeywords: [
    "半路抛锚",
    "重回险境",
    "行囊沉重",
    "旧伤复发"
  ],
  workplaceVibe: {
    upright: "终于从有毒的团队或PUA领导手里逃脱，虽然新岗位还在适应，但水流正在变平稳。",
    reversed: "换了一个新工作发现进了另一个坑，或者旧项目的遗留烂摊子还在源源不断找你问责。",
    subtextMeaning: "‘换个环境对你大家都好’翻译：和平分手，各自留点体面。"
  },
  loveVibe: {
    upright: "慢慢走出失恋的阴霾，痛感正在减弱，你正在驶向平静安全的彼岸。",
    reversed: "一边往前走一边回头看，舍不得扔下旧感情的沉重包袱，导致船越沉越深。",
    crushState: "TA也在经历人生的某个过渡期或疗愈期，心境慢慢趋于平静。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 75,
    caution: "虽然前面还有一段暗礁，但你已经在离开最糟糕的漩涡了。"
  },
  memeQuote: "风浪再大，只要船一直在向前开，岸就在不远处。",
  actionItem: "列出 3 条离开上一段有毒环境后的好处，肯定自己做出改变的勇气。",
  luckyBonus: "听一段海浪拍岸或细雨白噪音，感受水流带走焦虑的静谧。",
  banweiIndex: 40
},
  {
  id: "swords-7",
  nameEn: "Seven of Swords",
  nameCn: "宝剑七",
  arcana: "minor",
  suit: "swords",
  number: 7,
  element: "air",
  icon: "Crosshair",
  uprightKeywords: [
    "暗度陈仓",
    "偷偷摸鱼",
    "留有后手",
    "防人之心不可无"
  ],
  reversedKeywords: [
    "当场抓包",
    "翻车露馅",
    "自欺欺人",
    "坦白从宽"
  ],
  workplaceVibe: {
    upright: "打工人的高智商摸鱼：偷偷刷简历、接外包、私藏核心代码，明修栈道暗度陈仓。",
    reversed: "摸鱼切屏慢了被老板在工位身后抓个正着，或者私下吐槽领导发错到了大群里。",
    subtextMeaning: "‘咱们这项目一定要保密’翻译：防止你们提前跳槽跑路。"
  },
  loveVibe: {
    upright: "感情里藏有隐瞒或小秘密，留心对方手机屏幕反扣、眼神闪烁的行为。",
    reversed: "秘密终于藏不住被戳穿，或者你主动坦白交代了心里的真实想法。",
    crushState: "TA可能对你隐瞒了部分关键信息，或者TA不擅长敞开全部自己，略有戒心。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 45,
    caution: "小心驶得万年船，藏好你的王牌底牌，别露破绽。"
  },
  memeQuote: "高情商摸鱼的最高境界：键盘敲得啪啪响，实际上在看小说刷八卦。",
  actionItem: "定期清理电脑桌面浏览器历史记录与下载文件夹，保护个人数字隐私。",
  luckyBonus: "给手机贴一张防窥钢化膜，在地铁上安全冲浪。",
  banweiIndex: 65
},
  {
  id: "swords-8",
  nameEn: "Eight of Swords",
  nameCn: "宝剑八",
  arcana: "minor",
  suit: "swords",
  number: 8,
  element: "air",
  icon: "Lock",
  uprightKeywords: [
    "画地为牢",
    "自我想象限制",
    "无力感包围",
    "其实能走"
  ],
  reversedKeywords: [
    "破茧而出",
    "解开束缚",
    "重获自由",
    "人间清醒"
  ],
  workplaceVibe: {
    upright: "觉得‘离开这家公司我就找不到工作了’，被环境PUA得完全丧失自信，画地为牢。",
    reversed: "突然清醒过来：‘老子有手有脚大不了去端盘子！’心理枷锁瞬间脱落，自由就在眼前。",
    subtextMeaning: "‘外面大环境可差了’翻译：别走，留下来继续让我低成本压榨你。"
  },
  loveVibe: {
    upright: "在一段有毒关系里自欺欺人，明明受够了却总觉得‘我离不开TA’，受虐成瘾。",
    reversed: "忍无可忍无需再忍，斩断羁绊，走出去才发现外面的森林有多宽广。",
    crushState: "TA深陷自己的精神枷锁或现实困境中，觉得无能为力，无法向外施展爱意。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 80,
    caution: "困住你的不是外部环境，而是你心里的恐惧。迈出第一步就破局了！"
  },
  memeQuote: "牢笼的门其实根本就没锁，只要你站起来推开它，就能大步走出去。",
  actionItem: "去招聘软件上更新并刷新一下简历，看看外面其实有大把机会在等你。",
  luckyBonus: "解开衣服最顶上一颗扣子，或者摘下束缚的领带皮带，大口深呼吸。",
  banweiIndex: 90
},
  {
  id: "swords-9",
  nameEn: "Nine of Swords",
  nameCn: "宝剑九",
  arcana: "minor",
  suit: "swords",
  number: 9,
  element: "air",
  icon: "Skull",
  uprightKeywords: [
    "深夜emo",
    "失眠噩梦",
    "焦虑过载",
    "无休止内耗"
  ],
  reversedKeywords: [
    "晨曦微露",
    "走出心魔",
    "最坏不过如此",
    "雨过天晴"
  ],
  workplaceVibe: {
    upright: "凌晨三点还在为明天的周会PPT发愁失眠，脑海里上演了一百种被领导当场开除的灾难大戏。",
    reversed: "天亮了发现世界没塌，昨晚折磨你到发疯的问题，其实一句话就能讲清楚。",
    subtextMeaning: "‘明早九点第一件事先跟我汇报’翻译：随口一句话，让你彻夜难眠。"
  },
  loveVibe: {
    upright: "患得患失，脑补TA每一句话的恶意，把自己逼到崩溃发狂的悬崖边。",
    reversed: "终于放下了执念：‘爱咋咋地吧，我先睡个饱觉！’焦虑瞬间烟消云散。",
    crushState: "TA最近心理压力极大，失眠焦虑缠身，情绪在危险边缘试探。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 15,
    caution: "你脑海里预演的灾难99%都不会发生，先逼自己合眼睡觉！"
  },
  memeQuote: "失眠到凌晨三点，突然想通了：大不了就去大街上发疯，谁怕谁啊！",
  actionItem: "把引起你焦虑的所有坏可能写在纸上，然后用打火机或碎纸机把它销毁。",
  luckyBonus: "睡前喝一杯温牛奶或热甘菊茶，点上薰衣草喷雾。",
  banweiIndex: 95
},
  {
  id: "swords-page",
  nameEn: "Page of Swords",
  nameCn: "宝剑侍从",
  arcana: "minor",
  suit: "swords",
  number: 11,
  element: "air",
  icon: "Zap",
  uprightKeywords: [
    "吃瓜前线",
    "情报刺探",
    "言辞犀利",
    "耳聪目明"
  ],
  reversedKeywords: [
    "造谣传谣",
    "口无遮拦",
    "窥探成瘾",
    "惹火烧身"
  ],
  workplaceVibe: {
    upright: "办公室大瓜第一手知情者，敏锐捕捉组织架构变动信号，提前嗅到职场风向。",
    reversed: "茶水间大嘴巴传闲话，结果把未公开的秘密泄露出去，成了背锅第一人。",
    subtextMeaning: "‘你听说了那件事没有’翻译：来，让我拿八卦试探一下你的阵营。"
  },
  loveVibe: {
    upright: "化身福尔摩斯，通过对方微博点赞、网易云歌单和微信步数破解TA的小心思。",
    reversed: "窥探欲过强，查手机查岗，搞得彼此毫无个人隐私和信任可言。",
    crushState: "TA也在暗中窥视你的社交媒体账号，正在偷偷搜集关于你的蛛丝马迹。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 70,
    caution: "搜集情报是对的，但管住嘴巴别到处声张。"
  },
  memeQuote: "只要瓜保熟，熬夜到两点我也能精神抖擞在瓜田里上蹿下跳。",
  actionItem: "把搜集到的关键信息在心里过一遍，绝不对外吐露半个字，做个高深莫测的人。",
  luckyBonus: "给手机设置一个更复杂的锁屏密码，守护个人数据安全。",
  banweiIndex: 50
},
  {
  id: "swords-knight",
  nameEn: "Knight of Swords",
  nameCn: "宝剑骑士",
  arcana: "minor",
  suit: "swords",
  number: 12,
  element: "air",
  icon: "Compass",
  uprightKeywords: [
    "逻辑怪人",
    "毒舌开麦",
    "雷厉风行",
    "单刀直入"
  ],
  reversedKeywords: [
    "伤人利刃",
    "杠精附体",
    "口嗨嘴臭",
    "不计后果"
  ],
  workplaceVibe: {
    upright: "思路极其清晰的辩论王者，会议上直接甩出数据无情撕碎对手的逻辑漏洞，手起刀落。",
    reversed: "纯粹的杠精键盘侠，为了反驳而反驳，把同事得罪了个精光，路越走越窄。",
    subtextMeaning: "‘你的逻辑前提根本不成立’翻译：省省吧，你的方案全是漏洞。"
  },
  loveVibe: {
    upright: "直男/直女式沟通，不拐弯抹角，虽然缺少花前月下但解决现实问题极其利索。",
    reversed: "吵架时句句像刀子剜心，把讲道理放在了在乎对方感受的前面，极其冷血。",
    crushState: "TA性格锋利直率，说话直来直去，可能不太会照顾你的细腻小情绪。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 80,
    caution: "拿出你的锋芒与逻辑，但别让刀刃划伤自己人。"
  },
  memeQuote: "跟傻X讲道理是对逻辑的亵渎；直接开麦，降维打击！",
  actionItem: "把你的沟通核心观点精炼为 3 个事实论据，直奔主题，绝不拖泥带水。",
  luckyBonus: "吃一片薄荷糖，感受冷冽的气流贯穿喉咙的清爽感。",
  banweiIndex: 60
},
  {
  id: "swords-queen",
  nameEn: "Queen of Swords",
  nameCn: "宝剑王后",
  arcana: "minor",
  suit: "swords",
  number: 13,
  element: "air",
  icon: "Scale",
  uprightKeywords: [
    "冷面判官",
    "人间清醒",
    "斩断情丝",
    "极度理智"
  ],
  reversedKeywords: [
    "尖酸刻薄",
    "冷若冰霜",
    "不近人情",
    "孤立无援"
  ],
  workplaceVibe: {
    upright: "洞察一切虚伪伪装的资深审查者，只认交付结果和事实数据，任何马屁和情怀在TA面前都失效。",
    reversed: "刻薄挑剔到近乎病态，哪怕下属做对了99件事，也会因为1件小事把人批得体无完肤。",
    subtextMeaning: "‘别跟我扯这些客观理由’翻译：我只要结果，解释等于掩饰。"
  },
  loveVibe: {
    upright: "斩断恋爱脑的清醒大女主，看清劣质男/女后手起刀落直接切断，毫不拖泥带水。",
    reversed: "心墙筑得比长城还厚，用冷酷伪装脆弱，拒绝任何温情渗透。",
    crushState: "TA理智清醒甚至有些冷漠挑剔，正在用极其严格的现实标准考量你。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "收起你的泛滥同情心，按最理智冷峻的标准裁决！"
  },
  memeQuote: "与其内耗委屈自己，不如发疯刀了虚伪的别人；智者不入爱河，寡王一路硕博。",
  actionItem: "把列表里那个消耗你能量却舍不得删的人，果断拉黑或删除聊天框。",
  luckyBonus: "整理自己的发型或戴上一副无框眼镜，气场全开。",
  banweiIndex: 40
},
  {
  id: "swords-king",
  nameEn: "King of Swords",
  nameCn: "宝剑国王",
  arcana: "minor",
  suit: "swords",
  number: 14,
  element: "air",
  icon: "Crown",
  uprightKeywords: [
    "行业法官",
    "顶层逻辑",
    "冷峻权威",
    "客观公允"
  ],
  reversedKeywords: [
    "冷酷独裁",
    "玩弄律法",
    "权术压人",
    "冷血无情"
  ],
  workplaceVibe: {
    upright: "顶尖的战略参谋或法务高管，精通所有博弈规则，一眼洞穿对手底牌，制定无懈可击的策略。",
    reversed: "把人当成纯粹的资源数字，为了利益可以冷酷牺牲任何团队伙伴，毫无温度可言。",
    subtextMeaning: "‘一切按法务合规标准来’翻译：别跟我谈感情，谈合同条款和违约成本。"
  },
  loveVibe: {
    upright: "智性恋天花板，思维高度契合，能给出最具建设性的现实建议与人生指导。",
    reversed: "在感情里像审犯人一样居高临下审讯对方，缺乏基本的体贴与共情。",
    crushState: "TA极其看重思想层面的门当户对与沟通智商，不吃低幼撒娇这一套。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "全凭理性逻辑与事实依据行事，绝不受任何情绪干扰！"
  },
  memeQuote: "在绝对的逻辑面前，所有的狡辩和眼泪都只是噪音。",
  actionItem: "制定一份严丝合缝的行动排期表，精确到小时，按部就班执行。",
  luckyBonus: "用一把沉甸甸的金属笔写下自己的重要签名，沉稳从容。",
  banweiIndex: 45
},
  {
  id: "pentacles-2",
  nameEn: "Two of Pentacles",
  nameCn: "星币二",
  arcana: "minor",
  suit: "pentacles",
  number: 2,
  element: "earth",
  icon: "Coins",
  uprightKeywords: [
    "资金周转",
    "时间管理大师",
    "两头平衡",
    "拆东墙补西墙"
  ],
  reversedKeywords: [
    "资金链断裂",
    "手忙脚乱",
    "盘子崩了",
    "失衡翻车"
  ],
  workplaceVibe: {
    upright: "多线程并行操盘，一边做主业一边搞搞副业，两头兼顾还能游刃有余。",
    reversed: "同时接了太多需求把自己累得团团转，结果哪个都没做好，盘子全砸地上了。",
    subtextMeaning: "‘要学会合理分配精力’翻译：反正工作量不会少，你自己看着办吧。"
  },
  loveVibe: {
    upright: "在恋爱与搞钱之间走钢丝，努力平衡两边的需求，虽然忙碌但很有活力。",
    reversed: "穷到没钱约会，或者在两个暧昧对象之间反复横跳最终翻车被当场揭穿。",
    crushState: "TA最近生活非常忙碌，在工作和各种琐事之间拉扯，分身乏术。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 55,
    caution: "保持节奏与灵活性，切忌在此时全仓押注单一项目。"
  },
  memeQuote: "一边打工一边搞副业，只要我转得够快，贫穷就追不上我！",
  actionItem: "梳理手头两项最耗时的任务，把非核心流程委派出去或推迟交付。",
  luckyBonus: "转一下手中的钥匙扣或指尖陀螺，找到内心的动态平衡。",
  banweiIndex: 65
},
  {
  id: "pentacles-3",
  nameEn: "Three of Pentacles",
  nameCn: "星币三",
  arcana: "minor",
  suit: "pentacles",
  number: 3,
  element: "earth",
  icon: "Award",
  uprightKeywords: [
    "跨界搞钱",
    "专业打磨",
    "团队匠人",
    "技能变现"
  ],
  reversedKeywords: [
    "豆腐渣工程",
    "各怀鬼胎",
    "专业度不够",
    "沟通脱节"
  ],
  workplaceVibe: {
    upright: "产研运无缝衔接的神仙团队，各司其职，靠过硬的专业能力打造出行业标杆作品。",
    reversed: "外行指导内行，甲方瞎指挥，设计师和程序员互相嫌弃，做出来的产品像个拼装缝合怪。",
    subtextMeaning: "‘听取各方专家意见’翻译：谁也不想做决定，开会拉所有人下水。"
  },
  loveVibe: {
    upright: "愿意共同为了两人的未来脚踏实地打拼，一起存钱、买房、规划现实生活。",
    reversed: "对未来没有共同规划，各打各的小算盘，聊到现实利益就产生严重分歧。",
    crushState: "TA非常认可你的专业能力和踏实人品，对你有一种敬佩和欣赏之情。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 90,
    caution: "发挥专业长处，依靠团队协作打出王炸。"
  },
  memeQuote: "与其跟外行废话，不如把手艺打磨到极致，让作品替自己说话。",
  actionItem: "向一位业务大牛请教一个卡壳的技术或业务细节，虚心吸取经验。",
  luckyBonus: "把工作软件的快捷键熟练度练习一遍，提升 20% 搬砖速度。",
  banweiIndex: 40
},
  {
  id: "pentacles-5",
  nameEn: "Five of Pentacles",
  nameCn: "星币五",
  arcana: "minor",
  suit: "pentacles",
  number: 5,
  element: "earth",
  icon: "ShieldAlert",
  uprightKeywords: [
    "囊中羞涩",
    "寒冬挨冻",
    "雪夜抱团",
    "贫穷体验卡"
  ],
  reversedKeywords: [
    "寒冬回暖",
    "找到救济",
    "脱离困境",
    "重见光明"
  ],
  workplaceVibe: {
    upright: "公司遭遇寒冬降薪裁员，或者裸辞后存款告急，在寒风中瑟瑟发抖感受现实的残酷。",
    reversed: "最艰难的阶段终于熬过去了，拿到救命回款或新offer，窗外透进一缕暖光。",
    subtextMeaning: "‘大环境不好大家共克时艰’翻译：公司没钱了，准备降薪或者裁员了。"
  },
  loveVibe: {
    upright: "穷困潦倒时才能看清谁是共患难的真朋友，两个失意的人在寒夜里相濡以沫。",
    reversed: "贫贱夫妻百事哀的阴霾散去，经济状况好转，感情重回甜蜜正轨。",
    crushState: "TA现在财务或心理处于低谷期，感到自卑无助，需要无声的陪伴与关怀。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 20,
    caution: "不要硬撑，抬头看看，旁边其实有一扇透着火光的避难所大门。"
  },
  memeQuote: "虽然兜比脸还干净，但只要还有一口热饭吃，就别想彻底击垮我！",
  actionItem: "查清自己的社保公积金和失业补助政策，留好最基础的温饱底线。",
  luckyBonus: "吃一碗热气腾腾的面条或暖心砂锅粥，让胃先热乎起来。",
  banweiIndex: 90
},
  {
  id: "pentacles-6",
  nameEn: "Six of Pentacles",
  nameCn: "星币六",
  arcana: "minor",
  suit: "pentacles",
  number: 6,
  element: "earth",
  icon: "Coins",
  uprightKeywords: [
    "利益分配",
    "贵人帮扶",
    "滴水之恩",
    "年终奖到账"
  ],
  reversedKeywords: [
    "施舍傲慢",
    "不平等待遇",
    "被债务套牢",
    "吃人嘴短"
  ],
  workplaceVibe: {
    upright: "遇到了肯分钱肯让利的贵人老板，资源倾斜到位，付出获得了公平对等的报酬。",
    reversed: "老板高高在上像施舍叫花子一样给你发点零头，还要逼着你感恩戴德。",
    subtextMeaning: "‘公司亏待不了你’翻译：只要你听话，我就给你指缝里漏点油水。"
  },
  loveVibe: {
    upright: "平衡健康的物质与情感互动，你请吃饭TA看电影，彼此体贴毫无负担。",
    reversed: "一方把钱当成控制另一方的武器，造成严重的不平等关系，尊严扫地。",
    crushState: "TA很慷慨，愿意为你提供实际的帮助与资源支持，真金白银地表达好感。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "接受合情合理的帮助，同时记住礼尚往来。"
  },
  memeQuote: "谈钱虽然俗气，但不谈钱直接要我卖命的人才是真的缺德。",
  actionItem: "把本月收到的一笔小收益拿出一小部分，请帮助过你的人喝杯咖啡道谢。",
  luckyBonus: "给路边的流浪小猫小狗喂一点零食，积累福报正循环。",
  banweiIndex: 30
},
  {
  id: "pentacles-7",
  nameEn: "Seven of Pentacles",
  nameCn: "星币七",
  arcana: "minor",
  suit: "pentacles",
  number: 7,
  element: "earth",
  icon: "Coins",
  uprightKeywords: [
    "持仓观望",
    "静待花开",
    "盘点收成",
    "权衡利弊"
  ],
  reversedKeywords: [
    "徒劳无功",
    "耐心耗尽",
    "沉没成本过高",
    "盲目坚持"
  ],
  workplaceVibe: {
    upright: "播下的种子已经长出了枝叶，现在到了阶段性复盘时刻，停下来评估投入产出比。",
    reversed: "辛苦干了半年发现种的是毒草，回报率微乎其微，再坚持下去就是自我感动。",
    subtextMeaning: "‘还要再观察观察表现’翻译：短期内不打算给你升职加薪，继续熬着吧。"
  },
  loveVibe: {
    upright: "感情到了平淡磨合期，双方停下来思考这段关系是否值得长期走下去。",
    reversed: "付出得不到任何积极反馈，耐心彻底告罄，意识到该及时止损了。",
    crushState: "TA在暗中观察评估你的长远契合度，需要时间慢慢消化与考量。"
  },
  decisionVibe: {
    recommendation: "HOLD",
    percentage: 50,
    caution: "停下来算算账本，别把宝贵精力浪费在低效的枯木上。"
  },
  memeQuote: "种瓜得瓜种豆得豆，但要是种在水泥地上，再怎么浇水也是白搭。",
  actionItem: "核算过去 3 个月在某件事上的金钱与时间投入，看看收益率是否达标。",
  luckyBonus: "给家里的绿植浇一次透水，修剪掉发黄的枯叶。",
  banweiIndex: 50
},
  {
  id: "pentacles-8",
  nameEn: "Eight of Pentacles",
  nameCn: "星币八",
  arcana: "minor",
  suit: "pentacles",
  number: 8,
  element: "earth",
  icon: "Sliders",
  uprightKeywords: [
    "匠人精神",
    "沉浸搬砖",
    "打磨细节",
    "精进手艺"
  ],
  reversedKeywords: [
    "枯燥厌倦",
    "流水线螺丝钉",
    "粗制滥造",
    "偷工减料"
  ],
  workplaceVibe: {
    upright: "心无旁骛专注于当下的技术细节，把一门手艺死磕到极致，形成别人带不走的核心壁垒。",
    reversed: "日复一日重复枯燥机械的螺丝钉工作，技能停滞不前，开始对重复劳动感到厌倦崩溃。",
    subtextMeaning: "‘熟能生巧，多练练’翻译：这些繁琐的基础活先全交给你搞定。"
  },
  loveVibe: {
    upright: "用一点一滴的耐心理念经营感情，默默记住对方的每一个生活习惯，细水长流。",
    reversed: "把相处变成打卡交差的任务，毫无情趣可言，恋爱成了按部就班的流程。",
    crushState: "TA是个极其务实专注于本职工作的人，近期工作安排极满，都在踏实搬砖。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "沉下心打磨基本功，量变终会引发质的飞跃！"
  },
  memeQuote: "别跟我谈虚无的大道理，把手头的每一个像素调齐才是真正的修行。",
  actionItem: "选一个技能点（如一个快捷操作或一段核心逻辑），专心打磨半小时。",
  luckyBonus: "把电脑桌面杂乱的文件归纳整理进文件夹，整齐划一治愈强迫症。",
  banweiIndex: 40
},
  {
  id: "pentacles-9",
  nameEn: "Nine of Pentacles",
  nameCn: "星币九",
  arcana: "minor",
  suit: "pentacles",
  number: 9,
  element: "earth",
  icon: "Sparkles",
  uprightKeywords: [
    "独美贵妇",
    "财务自洽",
    "松弛感拉满",
    "丰盛人生"
  ],
  reversedKeywords: [
    "打肿脸充胖子",
    "物质空虚",
    "金丝雀困局",
    "挥霍无度"
  ],
  workplaceVibe: {
    upright: "拥有独立自主的收入底气，无需看任何人的脸色，工作只是为了实现自我价值的消遣。",
    reversed: "为了维持虚假的高级人设疯狂透支信用卡买名牌，表面光鲜背后全是分期账单。",
    subtextMeaning: "‘你家里条件应该挺不错的吧’翻译：看你打工不紧不慢的，应该没啥还贷压力。"
  },
  loveVibe: {
    upright: "单身生活过得极其滋润，一个人也能插花、品酒、旅行，不迎合任何劣质恋爱。",
    reversed: "贪恋对方提供的优渥物质生活，不得不忍受对方的冷暴力与出轨，成为金丝雀。",
    crushState: "TA生活品质极高且非常独立自足，对伴侣的挑剔在于是否能提升TA的生活质量。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 95,
    caution: "享受你亲手创造的物质丰盛，独美也是一种顶级境界。"
  },
  memeQuote: "钱是我自己赚的，生活是我自己选的；本富婆的生活里，爱情只是锦上添花。",
  actionItem: "买一捧自己最喜欢的鲜花，或者去喝一杯精选的手冲咖啡犒劳自己。",
  luckyBonus: "换一床最高支数的纯棉或丝绸床品，感受细腻贴肤的舒适触感。",
  banweiIndex: 5
},
  {
  id: "pentacles-page",
  nameEn: "Page of Pentacles",
  nameCn: "星币侍从",
  arcana: "minor",
  suit: "pentacles",
  number: 11,
  element: "earth",
  icon: "Coins",
  uprightKeywords: [
    "搞钱学徒",
    "求真务实",
    "记账萌新",
    "踏实靠谱"
  ],
  reversedKeywords: [
    "投机取巧",
    "不愿付出",
    "眼高手低",
    "乱买理财被割"
  ],
  workplaceVibe: {
    upright: "谦逊好学的职场新人，不搞虚头巴脑的套路，每交代一件事都能踏踏实实给到回音。",
    reversed: "眼高手低，嫌基础工资低又不愿意吃苦积累，轻信网上野鸡课程被割韭菜。",
    subtextMeaning: "‘小伙子挺老实踏实的’翻译：脏活累活丢给你最省心，不用担心你耍滑头。"
  },
  loveVibe: {
    upright: "笨拙但认真的交往态度，虽然不会油腔滑调，但会认真存钱为了两人的未来做准备。",
    reversed: "对金钱极其抠门计较，AA制精确到小数点后两位，让人大倒胃口。",
    crushState: "TA是个务实谨慎的人，对你的考察在于日常相处是否靠谱踏实、适合过日子。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 80,
    caution: "脚踏实地积累第一桶金，万丈高楼平地起。"
  },
  memeQuote: "哪怕每天只存十块钱，日积月累也能砸出一个小金库！",
  actionItem: "下载一个记账软件或打开微信记账本，把今天的开销逐笔记录下来。",
  luckyBonus: "擦干净自己常用的银行卡卡面，感受金钱的能量流动。",
  banweiIndex: 35
},
  {
  id: "pentacles-knight",
  nameEn: "Knight of Pentacles",
  nameCn: "星币骑士",
  arcana: "minor",
  suit: "pentacles",
  number: 12,
  element: "earth",
  icon: "Shield",
  uprightKeywords: [
    "老黄牛精神",
    "稳如泰山",
    "使命必达",
    "财富筑基"
  ],
  reversedKeywords: [
    "死脑筋不知变通",
    "效率低下",
    "墨守成规",
    "工作狂狂人"
  ],
  workplaceVibe: {
    upright: "最值得信赖的执行骨干，哪怕暴风雨降临也绝不掉链子，按计划一步一个脚印死磕交付。",
    reversed: "不知变通的死脑筋，明明有自动化脚本偏要纯手工录入数据，加班到深夜还觉得自己特感动。",
    subtextMeaning: "‘这活必须得你盯着我才放心’翻译：没人愿意干这苦差事，老黄牛你上吧。"
  },
  loveVibe: {
    upright: "极度靠谱的结婚对象，承诺过的事情绝对兑现，给你遮风挡雨的稳健依靠。",
    reversed: "生活像一台死板的机器毫无情调可言，约会就像完成工作打卡，无聊至极。",
    crushState: "TA性格内敛稳健，行事谨慎，不会搞突然袭击，需要长时间观察才表态。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 85,
    caution: "按既定SOP稳步推进，时间会成为你最强大的盟友。"
  },
  memeQuote: "聪明人或许跑得快，但活到最后的往往是按部就班的老黄牛。",
  actionItem: "把今天最繁琐但不可避免的任务列在首位，戴上降噪耳机专心干完它。",
  luckyBonus: "穿一双底子最软最舒服的鞋子，稳稳走好脚下的每一步路。",
  banweiIndex: 45
},
  {
  id: "pentacles-queen",
  nameEn: "Queen of Pentacles",
  nameCn: "星币王后",
  arcana: "minor",
  suit: "pentacles",
  number: 13,
  element: "earth",
  icon: "Award",
  uprightKeywords: [
    "财商天花板",
    "生活家管家",
    "懂赚钱会享受",
    "大地母亲"
  ],
  reversedKeywords: [
    "守财奴",
    "过度焦虑柴米油盐",
    "生活邋遢",
    "物质算盘精"
  ],
  workplaceVibe: {
    upright: "资源配置大师，既能帮公司开源节流省下大笔预算，又能把团队福利照顾得妥妥帖帖。",
    reversed: "抠门抠到极致，连员工多领几张打印纸都要严加盘查，搞得整个团队怨声载道。",
    subtextMeaning: "‘每笔预算都要花在刀刃上’翻译：能不批的报销尽量给你打回去。"
  },
  loveVibe: {
    upright: "既有赚钱能力又有把日子过得活色生香的情趣，既能下厨房又能做财务规划的完美伴侣。",
    reversed: "势利眼过甚，动辄盘算伴侣的房产存款，把感情当成股权投资来审计。",
    crushState: "TA非常有生活情调且懂现实规划，对贤惠或有实际生活能力的伴侣极有好感。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 95,
    caution: "把现实账本算清，同时别忘了犒劳身边的人，财源滚滚来。"
  },
  memeQuote: "真正的顶级财商，是既有能赚钱的双手，又有懂生活的舌头与灵魂。",
  actionItem: "去菜市场买些新鲜有机食材，亲自做一顿色香味俱全的暖心晚餐。",
  luckyBonus: "整理一下厨房调料架或冰箱，把过期的东西扔掉，让食物香气充盈。",
  banweiIndex: 20
},
  {
  id: "pentacles-king",
  nameEn: "King of Pentacles",
  nameCn: "星币国王",
  arcana: "minor",
  suit: "pentacles",
  number: 14,
  element: "earth",
  icon: "Crown",
  uprightKeywords: [
    "商业巨擘",
    "资产大亨",
    "底盘坚实",
    "财富帝国"
  ],
  reversedKeywords: [
    "拜金唯利是图",
    "投资爆雷",
    "贪婪无度",
    "空壳资本家"
  ],
  workplaceVibe: {
    upright: "商界大佬与资本操盘手，现金流极度充裕，投资眼光毒辣，稳坐实体与金融基业。",
    reversed: "资金链断裂的空壳老板，表面开着豪车出入高档场所，背地里四处借钱抵押房产。",
    subtextMeaning: "‘我们看重的是长期的商业逻辑’翻译：不赚钱的项目我们一秒钟都不会留。"
  },
  loveVibe: {
    upright: "物质与安全感双重拉满的终极靠山，愿意把最好的现实保障全部留给你。",
    reversed: "以为有钱就能买来一切，把伴侣当成个人战利品炫耀，情感极度匮乏冷漠。",
    crushState: "TA是个极其成功的务实人士，考虑伴侣看重长期稳定性和对家庭基业的助益。"
  },
  decisionVibe: {
    recommendation: "GO",
    percentage: 95,
    caution: "稳扎稳打，背靠坚实的现实资产，胜利是时间的必然。"
  },
  memeQuote: "大风大浪吹不垮底盘稳健的大树；守住现金流，你就是人生的主宰。",
  actionItem: "查阅一份稳健理财或定投计划，为自己设立一笔不可动摇的‘防身备用金’。",
  luckyBonus: "抚平钱包里的纸币，或者将理财收益截图留档，感受物质带来的安全感。",
  banweiIndex: 25
},
];

// 辅助函数：根据 ID 获取牌面
export function getTarotCardById(id: string): TarotCardData {
  const found = TAROT_CARDS.find((c) => c.id === id);
  if (found) return found;
  return TAROT_CARDS[0]; // fallback
}

// 随机抽牌
export function drawRandomCards(count: number = 1): { card: TarotCardData; isReversed: boolean }[] {
  const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((card) => ({
    card,
    isReversed: Math.random() > 0.65, // 35% 几率逆位
  }));
}

