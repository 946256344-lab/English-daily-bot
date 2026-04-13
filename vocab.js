// 社媒运营核心词汇表 - 按学习难度排序，每天推送20个新词 + 复习10个
// 共300个词，循环使用（15天一轮，半年走12轮）

export const vocabulary = [
  // --- 基础社媒术语 ---
  { word: "engagement", pos: "n.", zh: "互动量", example: "Our latest reel had the highest engagement this month." },
  { word: "reach", pos: "n.", zh: "触达人数", example: "The campaign reached over 500K users in three days." },
  { word: "impression", pos: "n.", zh: "曝光次数", example: "The ad got 2 million impressions but low click-through." },
  { word: "caption", pos: "n.", zh: "配文/说明文字", example: "Write a caption that hooks readers in the first line." },
  { word: "hashtag", pos: "n.", zh: "话题标签", example: "Using trending hashtags can boost your organic reach." },
  { word: "viral", pos: "adj.", zh: "病毒式传播的", example: "The video went viral overnight with 10M views." },
  { word: "algorithm", pos: "n.", zh: "算法", example: "Instagram's algorithm favors content with high saves." },
  { word: "niche", pos: "n.", zh: "细分领域", example: "Finding your niche helps attract a loyal audience." },

  // --- 内容创作 ---
  { word: "content pillar", pos: "n.", zh: "内容支柱", example: "Define three content pillars before building your calendar." },
  { word: "CTA", pos: "n.", zh: "行动号召（Call to Action）", example: "End every post with a clear CTA like 'save this for later'." },
  { word: "hook", pos: "n.", zh: "钩子/开场吸引点", example: "Your hook must grab attention within the first 3 seconds." },
  { word: "carousel", pos: "n.", zh: "轮播帖子", example: "Carousels get up to 3x more engagement than single images." },
  { word: "reel", pos: "n.", zh: "短视频（Instagram）", example: "We post three reels per week to stay relevant." },
  { word: "thread", pos: "n.", zh: "连续推文/话题串", example: "He posted a thread explaining the brand story." },
  { word: "evergreen", pos: "adj.", zh: "常青内容（长期有效）", example: "Evergreen content keeps driving traffic months after posting." },
  { word: "repurpose", pos: "v.", zh: "二次利用内容", example: "Repurpose your blog posts into short social media clips." },

  // --- 数据与分析 ---
  { word: "analytics", pos: "n.", zh: "数据分析", example: "Check your analytics every Monday to spot trends." },
  { word: "click-through rate", pos: "n.", zh: "点击率（CTR）", example: "Our click-through rate improved after A/B testing the headline." },
  { word: "conversion", pos: "n.", zh: "转化", example: "More traffic doesn't always mean more conversions." },
  { word: "bounce rate", pos: "n.", zh: "跳出率", example: "A high bounce rate suggests the landing page needs work." },
  { word: "KPI", pos: "n.", zh: "关键绩效指标", example: "Set clear KPIs before launching any campaign." },
  { word: "benchmark", pos: "n.", zh: "基准/参照标准", example: "Use competitor data as a benchmark for your growth." },
  { word: "ROI", pos: "n.", zh: "投资回报率", example: "Influencer campaigns showed the highest ROI last quarter." },
  { word: "A/B test", pos: "n.", zh: "A/B 测试", example: "Run an A/B test to see which thumbnail performs better." },

  // --- 受众与社群 ---
  { word: "target audience", pos: "n.", zh: "目标受众", example: "Know your target audience before choosing a platform." },
  { word: "persona", pos: "n.", zh: "用户画像", example: "Build at least two buyer personas for your brand." },
  { word: "community", pos: "n.", zh: "社群", example: "Building a community is more valuable than chasing followers." },
  { word: "follower", pos: "n.", zh: "粉丝", example: "Quality followers matter more than raw follower count." },
  { word: "organic", pos: "adj.", zh: "自然流量的/非付费的", example: "Organic growth takes longer but builds more trust." },
  { word: "paid traffic", pos: "n.", zh: "付费流量", example: "We use paid traffic to boost new product launches." },
  { word: "UGC", pos: "n.", zh: "用户生成内容", example: "Encourage UGC by running photo contests." },
  { word: "brand advocate", pos: "n.", zh: "品牌倡导者", example: "Turn loyal customers into brand advocates." },

  // --- 广告与推广 ---
  { word: "ad spend", pos: "n.", zh: "广告花费", example: "We doubled our ad spend during the holiday season." },
  { word: "targeting", pos: "n.", zh: "定向投放", example: "Interest-based targeting helped reduce cost per click." },
  { word: "retargeting", pos: "n.", zh: "再营销/重定向广告", example: "Retargeting ads remind users who visited but didn't buy." },
  { word: "CPM", pos: "n.", zh: "每千次曝光成本", example: "Our CPM dropped after refining the audience segment." },
  { word: "CPC", pos: "n.", zh: "每次点击成本", example: "Video ads usually have a lower CPC than static images." },
  { word: "sponsored post", pos: "n.", zh: "赞助帖/付费推广", example: "Always disclose sponsored posts to maintain trust." },
  { word: "boosted post", pos: "n.", zh: "加推帖子", example: "Boost your top-performing organic post to expand reach." },
  { word: "lookalike audience", pos: "n.", zh: "相似受众", example: "Create a lookalike audience based on your best customers." },

  // --- 网红与合作 ---
  { word: "influencer", pos: "n.", zh: "网红/意见领袖", example: "Micro-influencers often drive better engagement than celebrities." },
  { word: "collaboration", pos: "n.", zh: "合作", example: "Brand collaborations can introduce you to new audiences." },
  { word: "partnership", pos: "n.", zh: "合作关系", example: "We secured a long-term partnership with a lifestyle creator." },
  { word: "gifting", pos: "n.", zh: "产品赠送合作", example: "Gifting campaigns work well for beauty and lifestyle brands." },
  { word: "affiliate", pos: "n.", zh: "联盟营销合作方", example: "Set up an affiliate program to scale word-of-mouth." },
  { word: "macro-influencer", pos: "n.", zh: "头部网红（百万粉以上）", example: "Macro-influencers are better for brand awareness campaigns." },
  { word: "micro-influencer", pos: "n.", zh: "中小网红（1万-10万粉）", example: "Micro-influencers have more engaged and trusted followings." },
  { word: "brief", pos: "n.", zh: "创作简报", example: "Always send a detailed brief to avoid misaligned content." },

  // --- 内容策略 ---
  { word: "content calendar", pos: "n.", zh: "内容日历", example: "Plan a monthly content calendar to stay consistent." },
  { word: "posting schedule", pos: "n.", zh: "发帖计划", example: "Stick to a posting schedule to train the algorithm." },
  { word: "brand voice", pos: "n.", zh: "品牌调性", example: "Maintain a consistent brand voice across all platforms." },
  { word: "storytelling", pos: "n.", zh: "内容叙事", example: "Storytelling makes your brand more relatable and memorable." },
  { word: "aesthetic", pos: "n.", zh: "视觉风格", example: "A cohesive aesthetic makes your feed look professional." },
  { word: "tone of voice", pos: "n.", zh: "内容语气", example: "Our tone of voice is friendly, direct, and empowering." },
  { word: "brand identity", pos: "n.", zh: "品牌识别度", example: "Strong brand identity builds recognition over time." },
  { word: "content mix", pos: "n.", zh: "内容组合", example: "Balance your content mix between education, promotion, and entertainment." },

  // --- 平台功能 ---
  { word: "story", pos: "n.", zh: "限时动态", example: "Use stories for behind-the-scenes and daily updates." },
  { word: "highlight", pos: "n.", zh: "精选故事（Instagram）", example: "Organize your best stories into highlights for new visitors." },
  { word: "bio", pos: "n.", zh: "个人简介", example: "Your bio should clearly state what you do and who you help." },
  { word: "link in bio", pos: "phrase", zh: "简介中的链接", example: "Drive traffic by pointing followers to the link in bio." },
  { word: "live stream", pos: "n.", zh: "直播", example: "Go live weekly to deepen connection with your community." },
  { word: "pinned post", pos: "n.", zh: "置顶帖子", example: "Pin your best-performing post to make a strong first impression." },
  { word: "poll", pos: "n.", zh: "投票互动", example: "Add a poll to your story to boost engagement instantly." },
  { word: "collab post", pos: "n.", zh: "联合发帖", example: "A collab post lets both audiences see the content." },

  // --- 文案写作 ---
  { word: "copywriting", pos: "n.", zh: "文案写作", example: "Good copywriting sells without feeling pushy." },
  { word: "headline", pos: "n.", zh: "标题", example: "A powerful headline can triple your click-through rate." },
  { word: "tagline", pos: "n.", zh: "广告语/口号", example: "Nike's tagline 'Just Do It' is one of the most recognized globally." },
  { word: "value proposition", pos: "n.", zh: "价值主张", example: "State your value proposition in the first sentence." },
  { word: "call to action", pos: "n.", zh: "行动号召", example: "Use action verbs in your call to action: 'Shop now', 'Learn more'." },
  { word: "pain point", pos: "n.", zh: "痛点", example: "Lead with the customer's pain point to grab attention." },
  { word: "social proof", pos: "n.", zh: "社会认同", example: "Add social proof like reviews and follower count to build trust." },
  { word: "urgency", pos: "n.", zh: "紧迫感", example: "Create urgency with phrases like 'limited time' or 'only 3 left'." },

  // --- 增长策略 ---
  { word: "growth hacking", pos: "n.", zh: "增长黑客", example: "Growth hacking focuses on low-cost, high-impact experiments." },
  { word: "funnel", pos: "n.", zh: "营销漏斗", example: "Map your content to each stage of the marketing funnel." },
  { word: "awareness", pos: "n.", zh: "品牌认知阶段", example: "Top-of-funnel content builds awareness with new audiences." },
  { word: "lead generation", pos: "n.", zh: "获客/引流", example: "Use giveaways for quick lead generation." },
  { word: "drip campaign", pos: "n.", zh: "滴灌式营销活动", example: "Set up a drip campaign to nurture new email subscribers." },
  { word: "cross-promotion", pos: "n.", zh: "跨平台推广", example: "Cross-promote your TikTok content on Instagram for more views." },
  { word: "platform diversification", pos: "n.", zh: "平台多元化", example: "Platform diversification protects you from algorithm changes." },
  { word: "viral loop", pos: "n.", zh: "病毒式传播循环", example: "Referral programs create a viral loop that drives cheap growth." },

  // --- 邮件与私信 ---
  { word: "DM", pos: "n.", zh: "私信", example: "Reply to every DM within 24 hours to build relationships." },
  { word: "outreach", pos: "n.", zh: "主动联系/拓展", example: "Cold outreach to influencers should be personal, not templated." },
  { word: "newsletter", pos: "n.", zh: "电子邮件通讯", example: "A weekly newsletter keeps your audience engaged off-platform." },
  { word: "open rate", pos: "n.", zh: "邮件打开率", example: "Personalized subject lines improve open rate significantly." },
  { word: "unsubscribe rate", pos: "n.", zh: "退订率", example: "A rising unsubscribe rate signals your content isn't relevant." },
  { word: "segmentation", pos: "n.", zh: "受众分层", example: "Email segmentation lets you send the right message to the right person." },
  { word: "nurture sequence", pos: "n.", zh: "培育序列邮件", example: "A nurture sequence builds trust before the sales pitch." },
  { word: "inbox placement", pos: "n.", zh: "收件箱送达率", example: "Avoid spam words to improve inbox placement." },

  // --- 电商与变现 ---
  { word: "shoppable post", pos: "n.", zh: "可购物帖子", example: "Tag products in shoppable posts to reduce buying friction." },
  { word: "drop", pos: "n.", zh: "限量发售", example: "A product drop creates hype and urgency among followers." },
  { word: "flash sale", pos: "n.", zh: "限时抢购", example: "Announce flash sales exclusively on stories for higher engagement." },
  { word: "bundle", pos: "n.", zh: "捆绑销售", example: "Offer a bundle deal to increase average order value." },
  { word: "promo code", pos: "n.", zh: "优惠码", example: "Give influencers a unique promo code to track campaign ROI." },
  { word: "cart abandonment", pos: "n.", zh: "购物车放弃", example: "Retarget cart abandonment users with a discount reminder." },
  { word: "product launch", pos: "n.", zh: "产品发布", example: "Build hype two weeks before the product launch with teaser content." },
  { word: "waitlist", pos: "n.", zh: "等待名单", example: "A waitlist creates scarcity and pre-launch buzz." },

  // --- 危机与声誉 ---
  { word: "brand reputation", pos: "n.", zh: "品牌声誉", example: "Respond to negative comments quickly to protect brand reputation." },
  { word: "crisis management", pos: "n.", zh: "危机管理", example: "Have a crisis management plan before something goes wrong." },
  { word: "comment moderation", pos: "n.", zh: "评论管理", example: "Set up comment moderation filters to hide offensive content." },
  { word: "sentiment analysis", pos: "n.", zh: "情绪分析", example: "Use sentiment analysis to gauge audience reaction to a campaign." },
  { word: "public relations", pos: "n.", zh: "公关", example: "Social media is now central to any public relations strategy." },
  { word: "transparency", pos: "n.", zh: "透明度", example: "Transparency about mistakes actually builds brand trust." },
  { word: "cancel culture", pos: "n.", zh: "取消文化", example: "Be mindful of cancel culture when creating edgy content." },
  { word: "backlash", pos: "n.", zh: "强烈反弹/负面反应", example: "The tonedeaf post caused major backlash online." },

  // --- 工具与流程 ---
  { word: "scheduling tool", pos: "n.", zh: "排程工具", example: "Use a scheduling tool like Buffer to plan posts in advance." },
  { word: "social listening", pos: "n.", zh: "社交媒体监听", example: "Social listening reveals what customers really think of your brand." },
  { word: "workflow", pos: "n.", zh: "工作流程", example: "Build a content approval workflow to avoid publishing errors." },
  { word: "asset", pos: "n.", zh: "素材/资产", example: "Store all brand assets in a shared folder for the team." },
  { word: "template", pos: "n.", zh: "模板", example: "Create Canva templates to keep designs consistent and fast." },
  { word: "approval process", pos: "n.", zh: "审批流程", example: "A clear approval process prevents miscommunication." },
  { word: "content audit", pos: "n.", zh: "内容审查", example: "Do a quarterly content audit to remove outdated posts." },
  { word: "media kit", pos: "n.", zh: "媒体资料包", example: "Prepare a media kit before reaching out to brand partners." },

  // --- 趋势与话题 ---
  { word: "trending", pos: "adj.", zh: "正在流行的", example: "Jump on trending audio to boost your reel's visibility." },
  { word: "newsjacking", pos: "n.", zh: "借势营销", example: "Newsjacking works best when the topic aligns with your brand." },
  { word: "meme marketing", pos: "n.", zh: "表情包营销", example: "Meme marketing can humanize your brand if done right." },
  { word: "seasonal content", pos: "n.", zh: "季节性内容", example: "Plan seasonal content at least 4 weeks in advance." },
  { word: "trend cycle", pos: "n.", zh: "趋势周期", example: "Understand the trend cycle to know when to jump in." },
  { word: "FOMO", pos: "n.", zh: "错失恐惧感", example: "Create FOMO with limited-time offers and exclusive content." },
  { word: "social currency", pos: "n.", zh: "社交货币", example: "Content that makes people look smart has high social currency." },
  { word: "zeitgeist", pos: "n.", zh: "时代精神/当下氛围", example: "The best campaigns tap into the cultural zeitgeist." },

  // --- 进阶营销策略 ---
  { word: "omnichannel", pos: "adj.", zh: "全渠道的", example: "An omnichannel strategy ensures a seamless experience across platforms." },
  { word: "touchpoint", pos: "n.", zh: "触点（品牌与用户接触的节点）", example: "Map every touchpoint in the customer journey." },
  { word: "customer journey", pos: "n.", zh: "用户旅程", example: "Understanding the customer journey helps you create better content." },
  { word: "top of funnel", pos: "n.", zh: "漏斗顶部（认知阶段）", example: "Educational content works best at the top of funnel." },
  { word: "bottom of funnel", pos: "n.", zh: "漏斗底部（转化阶段）", example: "Bottom of funnel content should remove buying objections." },
  { word: "demand generation", pos: "n.", zh: "需求激发", example: "Demand generation creates interest before the product exists." },
  { word: "inbound marketing", pos: "n.", zh: "内容吸引式营销", example: "Inbound marketing attracts customers through valuable content." },
  { word: "outbound marketing", pos: "n.", zh: "主动推送式营销", example: "Outbound marketing includes ads, cold emails, and direct outreach." },
  { word: "brand equity", pos: "n.", zh: "品牌资产/品牌价值", example: "Years of consistent content build strong brand equity." },
  { word: "share of voice", pos: "n.", zh: "声量占比", example: "Track share of voice to see how you compare to competitors." },

  // --- 数据深度 ---
  { word: "attribution", pos: "n.", zh: "归因（转化来源分析）", example: "Multi-touch attribution shows which content drove the sale." },
  { word: "cohort analysis", pos: "n.", zh: "群组分析", example: "Cohort analysis reveals how different audience groups behave over time." },
  { word: "engagement rate", pos: "n.", zh: "互动率", example: "Divide total engagements by reach to get engagement rate." },
  { word: "save rate", pos: "n.", zh: "收藏率", example: "A high save rate signals your content has lasting value." },
  { word: "share rate", pos: "n.", zh: "分享率", example: "Share rate is the strongest signal of content resonance." },
  { word: "watch time", pos: "n.", zh: "观看时长", example: "Watch time is the most important metric for video content." },
  { word: "drop-off rate", pos: "n.", zh: "退出率（视频中途退出）", example: "Check where viewers drop off to improve your video structure." },
  { word: "heat map", pos: "n.", zh: "热力图", example: "Use a heat map to see where users click on your landing page." },
  { word: "scroll depth", pos: "n.", zh: "滚动深度", example: "Low scroll depth means your content loses readers quickly." },
  { word: "session duration", pos: "n.", zh: "访问时长", example: "Longer session duration signals engaging content." },

  // --- 受众洞察 ---
  { word: "psychographic", pos: "adj.", zh: "心理特征的", example: "Psychographic targeting goes beyond age and location." },
  { word: "demographic", pos: "n.", zh: "人口统计数据", example: "Know your core demographic before choosing content formats." },
  { word: "audience insight", pos: "n.", zh: "受众洞察", example: "Use audience insights to refine your content strategy." },
  { word: "early adopter", pos: "n.", zh: "早期用户", example: "Early adopters amplify your launch if you treat them well." },
  { word: "lurker", pos: "n.", zh: "潜水用户（只看不互动）", example: "Most of your audience are lurkers — content still impacts them." },
  { word: "superfan", pos: "n.", zh: "超级粉丝", example: "Identify your superfans and give them exclusive access." },
  { word: "churn rate", pos: "n.", zh: "流失率", example: "A rising follower churn rate means content quality is slipping." },
  { word: "net promoter score", pos: "n.", zh: "净推荐值（NPS）", example: "Survey your community to calculate net promoter score." },
  { word: "feedback loop", pos: "n.", zh: "反馈循环", example: "Build a feedback loop by asking followers what they want." },
  { word: "audience retention", pos: "n.", zh: "受众留存率", example: "Audience retention on video should stay above 50%." },

  // --- 创作者经济 ---
  { word: "creator economy", pos: "n.", zh: "创作者经济", example: "The creator economy has made personal brands worth millions." },
  { word: "monetization", pos: "n.", zh: "变现", example: "Diversify monetization across merch, courses, and brand deals." },
  { word: "brand deal", pos: "n.", zh: "品牌合作（付费）", example: "Only accept brand deals that align with your audience's values." },
  { word: "rate card", pos: "n.", zh: "报价单", example: "Send your rate card when a brand reaches out for collaboration." },
  { word: "exclusivity clause", pos: "n.", zh: "独家条款", example: "An exclusivity clause prevents you from working with competitors." },
  { word: "usage rights", pos: "n.", zh: "内容使用权", example: "Charge extra if the brand wants usage rights for paid ads." },
  { word: "deliverable", pos: "n.", zh: "交付物", example: "List all deliverables clearly in the contract." },
  { word: "content ownership", pos: "n.", zh: "内容所有权", example: "Always clarify content ownership before signing a deal." },
  { word: "licensing", pos: "n.", zh: "授权", example: "Licensing your content to brands is a passive income stream." },
  { word: "flat fee", pos: "n.", zh: "一次性固定费用", example: "Negotiate a flat fee plus commission for better earnings." },

  // --- 平台算法与运营 ---
  { word: "shadowban", pos: "n.", zh: "隐形封禁", example: "Avoid banned hashtags or you risk a shadowban." },
  { word: "throttling", pos: "n.", zh: "流量限制", example: "Platforms use throttling to limit reach of commercial content." },
  { word: "native content", pos: "n.", zh: "原生内容（符合平台调性）", example: "Native content performs better than cross-posted material." },
  { word: "platform update", pos: "n.", zh: "平台更新/改版", example: "Stay on top of platform updates to adapt your strategy fast." },
  { word: "beta feature", pos: "n.", zh: "测试版功能", example: "Early adoption of beta features often gets algorithm boost." },
  { word: "content boost", pos: "n.", zh: "内容加推", example: "The algorithm gives a content boost to new format adopters." },
  { word: "suppress", pos: "v.", zh: "（算法）压制", example: "Overly promotional language can suppress your organic reach." },
  { word: "distribution", pos: "n.", zh: "内容分发", example: "Great content needs a distribution strategy to get seen." },
  { word: "cross-post", pos: "v.", zh: "跨平台同步发布", example: "Don't blindly cross-post — adapt content for each platform." },
  { word: "content velocity", pos: "n.", zh: "内容发布频率/速度", example: "High content velocity builds momentum but risks quality drop." },

  // --- 职场英语表达 ---
  { word: "brief", pos: "v.", zh: "向…汇报/简要说明", example: "Brief the client on campaign results every two weeks." },
  { word: "align", pos: "v.", zh: "使一致/达成共识", example: "Let's align on the content direction before production starts." },
  { word: "iterate", pos: "v.", zh: "迭代/反复优化", example: "Iterate based on data, not gut feeling." },
  { word: "scale", pos: "v.", zh: "规模化/扩大", example: "Once a format works, scale it across all channels." },
  { word: "leverage", pos: "v.", zh: "利用/借助", example: "Leverage your existing audience to launch the new product." },
  { word: "pivot", pos: "v.", zh: "转向/调整策略", example: "We need to pivot our content strategy after the algorithm change." },
  { word: "bandwidth", pos: "n.", zh: "精力/余力（口语）", example: "I don't have the bandwidth to manage another platform right now." },
  { word: "sync", pos: "v.", zh: "同步/对齐（口语）", example: "Let's sync tomorrow to review the campaign results." },
  { word: "takeaway", pos: "n.", zh: "核心要点/收获", example: "The key takeaway from the report is that video outperforms images." },
  { word: "actionable", pos: "adj.", zh: "可执行的", example: "Give clients actionable recommendations, not just data." },

  // --- 电子邮件与沟通 ---
  { word: "follow up", pos: "v.", zh: "跟进", example: "Follow up within 48 hours if you don't hear back." },
  { word: "loop in", pos: "v.", zh: "把…加入沟通", example: "Loop in the designer once the copy is approved." },
  { word: "circle back", pos: "v.", zh: "稍后再议/回头讨论", example: "Let's circle back on the budget after the strategy call." },
  { word: "touch base", pos: "v.", zh: "保持联系/简短沟通", example: "I'll touch base with you after the weekend." },
  { word: "heads up", pos: "n.", zh: "提前通知", example: "Just a heads up — the client moved the deadline to Friday." },
  { word: "sign off", pos: "v.", zh: "批准/最终确认", example: "We need the client to sign off before we publish." },
  { word: "turnaround time", pos: "n.", zh: "周转时间/交付时间", example: "Our standard turnaround time for content is 3 business days." },
  { word: "scope creep", pos: "n.", zh: "需求蔓延（超出原计划）", example: "Document everything to prevent scope creep mid-project." },
  { word: "bandwidth", pos: "n.", zh: "工作余力", example: "Check the team's bandwidth before adding new deliverables." },
  { word: "stakeholder", pos: "n.", zh: "利益相关方", example: "Get stakeholder buy-in before launching a new campaign." },
];
