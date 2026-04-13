import Anthropic from '@anthropic-ai/sdk';
import { vocabulary } from '../vocab.js';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function getDateInfo() {
  const now = new Date();
  const options = { timeZone: 'Asia/Shanghai' };
  const dateStr = now.toLocaleDateString('zh-CN', {
    ...options, year: 'numeric', month: '2-digit', day: '2-digit'
  });
  const weekday = now.toLocaleDateString('zh-CN', { ...options, weekday: 'long' });
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return { dateStr, weekday, dayOfYear };
}

const NEW_WORDS_PER_DAY = 20;
const REVIEW_WORDS_PER_DAY = 10;
const REVIEW_INTERVAL_DAYS = 7;

function getTodayVocab(dayOfYear) {
  const startIndex = (dayOfYear * NEW_WORDS_PER_DAY) % vocabulary.length;
  const newWords = [];
  for (let i = 0; i < NEW_WORDS_PER_DAY; i++) {
    newWords.push(vocabulary[(startIndex + i) % vocabulary.length]);
  }

  // Review words from REVIEW_INTERVAL_DAYS ago
  const reviewDay = dayOfYear - REVIEW_INTERVAL_DAYS;
  const reviewStart = ((reviewDay * NEW_WORDS_PER_DAY) % vocabulary.length + vocabulary.length) % vocabulary.length;
  const reviewWords = [];
  for (let i = 0; i < REVIEW_WORDS_PER_DAY; i++) {
    reviewWords.push(vocabulary[(reviewStart + i) % vocabulary.length]);
  }

  return { newWords, reviewWords };
}

function formatVocabMessage({ newWords, reviewWords }) {
  const newLines = newWords.map((w, i) =>
    `<b>${i + 1}. ${w.word}</b> ${w.pos} · ${w.zh}\n例：<i>${w.example}</i>`
  ).join('\n\n');

  const reviewLines = reviewWords.map(w =>
    `• <b>${w.word}</b> ——（填写中文意思，再看答案：${w.zh}）`
  ).join('\n');

  return `<b>📚 模块一：词汇 + 阅读</b>（20分钟）\n\n<b>今日新词（${NEW_WORDS_PER_DAY}个）</b>\n\n${newLines}\n\n——————\n\n<b>🔁 复习上周词汇（${REVIEW_WORDS_PER_DAY}个）</b>\n先默想中文意思，再看答案👇\n\n${reviewLines}`;
}

async function generateReading(words, dateStr) {
  const wordList = words.map(w => w.word).join(', ');
  const prompt = `你是一位专业的英语学习教练。

今天是 ${dateStr}。请根据以下词汇，写一段3-4句的英文行业短文（社媒/内容营销场景），尽量自然地使用其中2-3个词，然后附上中文译文。

今日词汇：${wordList}

输出格式（直接输出，不要加前缀）：

<b>今日阅读</b>
<i>[英文短文3-4句]</i>

译文：[中文翻译]`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    messages: [{ role: 'user', content: prompt }]
  });
  return message.content[0].text;
}

async function generateModule2(dayOfYear, dateStr) {
  const platforms = ['Instagram', 'Twitter/X', 'LinkedIn'];
  const platform = platforms[dayOfYear % 3];

  const prompt = `你是一位专业的英语学习教练，服务对象是在做海外社媒运营的中国职场人，英语高中水平。

今天是 ${dateStr}，今日平台：${platform}。

请生成一条真实风格的${platform}英文帖子作为仿写参考，用中文分析2-3个关键表达技巧，并给出一个中文写作提示。

输出格式（直接输出，不要加前缀）：
<b>✍️ 模块二：文案仿写</b>（20分钟）

<b>今日平台：</b>${platform}

<b>参考文案</b>
<i>"[英文帖子]"</i>

<b>分析要点</b>
• [技巧1]
• [技巧2]
• [技巧3]

<b>你来写：</b>[中文写作提示，说明场景和要求]`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 768,
    messages: [{ role: 'user', content: prompt }]
  });
  return message.content[0].text;
}

async function generateModule3(dayOfYear, dateStr) {
  const prompt = `你是一位专业的英语学习教练，服务对象是在做海外社媒运营的中国职场人，英语高中水平。

今天是 ${dateStr}，轮换序号 ${dayOfYear}。

推荐一个真实存在的英文播客或YouTube频道（社媒/营销/创业方向，根据序号轮换不同节目），给出3个中文收听引导问题，以及1句跟读练习句子。

输出格式（直接输出，不要加前缀）：
<b>🎧 模块三：听力练习</b>（20分钟）

<b>今日推荐</b>
节目：[名称]
简介：[一句中文介绍]

<b>带着问题去听</b>
1. [问题1]
2. [问题2]
3. [问题3]

<b>跟读练习</b>
<i>"[10-15词英文句子]"</i>
发音提示：[中文说明难点]`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    messages: [{ role: 'user', content: prompt }]
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

  await sendTelegram(`📅 <b>英语每日任务 · ${dateStr} ${weekday}</b>\n\n今天共3个模块，合计60分钟，加油 💪`);

  // Module 1: vocab from list (no AI) + AI-generated reading
  const todayVocab = getTodayVocab(dayOfYear);
  await sendTelegram(formatVocabMessage(todayVocab));
  const reading = await generateReading(todayVocab.newWords, dateStr);
  await sendTelegram(reading);

  // Module 2 & 3: AI-generated
  const mod2 = await generateModule2(dayOfYear, dateStr);
  await sendTelegram(mod2);

  const mod3 = await generateModule3(dayOfYear, dateStr);
  await sendTelegram(mod3);

  await sendTelegram('✅ 今日任务发送完毕！完成后记得打卡 📝');

  res.status(200).json({ success: true });
}
