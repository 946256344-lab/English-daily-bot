import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function getDateInfo() {
  const now = new Date();
  const options = { timeZone: 'Asia/Shanghai' };
  const dateStr = now.toLocaleDateString('zh-CN', {
    ...options, year: 'numeric', month: '2-digit', day: '2-digit'
  });
  const weekday = now.toLocaleDateString('zh-CN', { ...options, weekday: 'long' });
  // Use day-of-year as seed for content rotation
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return { dateStr, weekday, dayOfYear };
}

async function generateModule(moduleNum, dayOfYear, dateStr) {
  const prompts = {
    1: `你是一位专业的英语学习教练，服务对象是在做海外社媒运营的中国职场人，英语高中水平，目标是达到工作英语水平。

今天是 ${dateStr}，轮换序号为 ${dayOfYear}（用于确保每天内容不重复）。

请生成【模块一：词汇 + 行业阅读】的学习内容，要求如下：
- 8个与社媒运营直接相关的英文词汇，包含词性、中文释义、一个真实社媒场景例句
- 1段3-4句的英文行业短文（来自社媒/内容营销场景），附中文译文
- 词汇每14天内不重复，根据轮换序号 ${dayOfYear} 选择不同词汇

输出格式（直接输出内容，不要加任何前缀说明）：
<b>📚 模块一：词汇 + 阅读</b>（20分钟）

<b>今日词汇</b>

<b>1. [单词]</b> [词性] · [中文]
例：<i>[例句]</i>

<b>2. [单词]</b> [词性] · [中文]
例：<i>[例句]</i>

（以此格式列出8个词汇）

<b>今日阅读</b>
<i>[英文短文]</i>

译文：[中文翻译]`,

    2: `你是一位专业的英语学习教练，服务对象是在做海外社媒运营的中国职场人，英语高中水平，目标是达到工作英语水平。

今天是 ${dateStr}，轮换序号为 ${dayOfYear}（用于确保每天内容不重复）。

请生成【模块二：文案仿写练习】的学习内容，要求如下：
- 按轮换序号选择平台：序号除以3余0用Instagram，余1用Twitter/X，余2用LinkedIn
- 提供1条真实风格的英文社媒帖子作为参考
- 用中文分析2-3个关键表达技巧
- 给出1个中文写作提示，让学员写自己的英文版本

输出格式（直接输出内容，不要加任何前缀说明）：
<b>✍️ 模块二：文案仿写</b>（20分钟）

<b>今日平台：</b>[平台名]

<b>参考文案</b>
<i>"[英文帖子原文]"</i>

<b>分析要点</b>
• [技巧1]
• [技巧2]
• [技巧3]

<b>你来写：</b>[中文写作提示，说明场景和要求]`,

    3: `你是一位专业的英语学习教练，服务对象是在做海外社媒运营的中国职场人，英语高中水平，目标是达到工作英语水平。

今天是 ${dateStr}，轮换序号为 ${dayOfYear}（用于确保每天内容不重复）。

请生成【模块三：听力练习】的学习内容，要求如下：
- 推荐1个真实存在的英文播客节目或YouTube频道（给出节目名和频道名，不要给具体链接）
- 3个中文收听引导问题（帮助聚焦理解）
- 1句10-15个词的英文句子用于跟读，附发音要点提示

输出格式（直接输出内容，不要加任何前缀说明）：
<b>🎧 模块三：听力练习</b>（20分钟）

<b>今日推荐</b>
节目：[播客/频道名称]
说明：[一句话介绍这个节目，中文]

<b>带着问题去听</b>
1. [问题1]
2. [问题2]
3. [问题3]

<b>跟读练习</b>
<i>"[英文句子]"</i>
发音提示：[中文说明难点发音]`
  };

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompts[moduleNum] }]
  });

  return message.content[0].text;
}

async function sendTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram error: ${err}`);
  }
}

export default async function handler(req, res) {
  // Uncomment below to re-enable security after testing
  // const secret = process.env.CRON_SECRET;
  // if (secret && req.headers['authorization'] !== `Bearer ${secret}`) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  const { dateStr, weekday, dayOfYear } = getDateInfo();

  // Send header message
  await sendTelegram(`📅 <b>英语每日任务 · ${dateStr} ${weekday}</b>\n\n今天共3个模块，合计60分钟，加油 💪`);

  // Send each module separately to stay within Telegram's 4096-char limit
  for (let i = 1; i <= 3; i++) {
    const content = await generateModule(i, dayOfYear, dateStr);
    await sendTelegram(content);
  }

  await sendTelegram('✅ 今日任务发送完毕！完成后记得打卡 📝');

  res.status(200).json({ success: true });
}
