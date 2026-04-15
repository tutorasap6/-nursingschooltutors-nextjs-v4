const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const BLOG_DIR = path.join(__dirname, '../content/blog')
const STOP_WORDS = new Set(['the', 'and', 'for', 'with', 'of', 'in', 'to', 'a', 'an', 'by', 'on', 'from', 'is', 'are', 'as', 'at', 'or', 'about', 'into', 'course', 'study', 'assignment', 'homework', 'help', 'guide', 'free', 'answer', 'answered', 'answers', 'week', 'nr', 'nursing'])

function normalizeTitle(title) {
  return title
    .replace(/\(.*?\)/g, '')
    .replace(/\[[^\]]*\]/g, '')
    .replace(/\bfree[- ]?answer(s)?\b/gi, '')
    .replace(/\b(exam|quiz|homework|assignment|case study|case-study)\b/gi, '$1')
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function deriveTopic(title) {
  const normalized = normalizeTitle(title)
  const words = normalized
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(word => !STOP_WORDS.has(word))
  const commonWords = words.slice(0, 5)
  return commonWords.length ? commonWords.join(' ') : normalized
}

function isQuestionPost(title) {
  const keywords = ['question', 'questions', 'quiz', 'exam', 'mcq', 'case study', 'case-study', 'assessment', 'review', 'practice']
  const lower = title.toLowerCase()
  return keywords.some(k => lower.includes(k))
}

function randChoice(items) {
  return items[Math.floor(Math.random() * items.length)]
}

function buildLongParagraph(topic, focus, minWords = 120) {
  const sentencePatterns = [
    `When studying ${topic}, ${focus} should be framed as a clear academic objective that supports nursing practice.`,
    `This paragraph explores how ${topic} connects to classroom learning, assignment expectations, and practical application in the clinical setting.`,
    `Students should explain ${topic} using evidence-based reasoning, real-world examples, and a step-by-step process that demonstrates scholarly thinking.`,
    `A successful response to ${topic} requires attention to terminology, organizational flow, and the key learning goals expected by faculty.`,
    `Practical examples make ${topic} easier to understand and help the reader see how the subject can be applied in a typical homework assignment.`,
    `The focus on ${focus} ensures that the entire discussion remains relevant to the nursing assignment and does not drift into unrelated detail.`,
    `It is useful to compare ${topic} across common scenarios, linking theory to practice while keeping the explanation concise and purposeful.`,
  ]

  const sentences = []
  let count = 0
  while (count < minWords) {
    const sentence = randChoice(sentencePatterns)
    sentences.push(sentence)
    count += sentence.split(' ').length
  }
  return `<p>${sentences.join(' ')}</p>`
}

function buildList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`
}

function normalizeQuestionText(text) {
  return text.replace(/\s+/g, ' ').replace(/ +/g, ' ').trim()
}

function generateMcqs(topic) {
  const baseQuestions = [
    `Which of the following best describes an essential element of ${topic}?`,
    `What is the most appropriate first step when completing an assignment on ${topic}?`,
    `Which approach improves the clarity of a homework answer about ${topic}?`,
    `When writing about ${topic}, which statement reflects best academic practice?`,
    `Which conclusion is most accurate when summarizing ${topic}?`,
  ]

  return baseQuestions.map((q, index) => {
    const options = [
      `A. Use precise academic language and relate the topic to real nursing scenarios.`,
      `B. Focus on broad generalities without specific evidence or examples.`,
      `C. Include unrelated technical details that do not support the assignment purpose.`,
      `D. Write only from personal opinion without connecting to course requirements.`,
    ]
    const answer = 'A'
    return `<div style="margin-bottom:22px;"><h3>${index + 1}. ${normalizeQuestionText(q)}</h3><ol type="A">${options.map(opt => `<li>${opt}</li>`).join('')}</ol><p><strong>Answer:</strong> ${answer}</p></div>`
  }).join('')
}

function generateContent(title) {
  const topic = deriveTopic(title)
  const safeTitle = normalizeTitle(title)
  const isQuestion = isQuestionPost(title)

  const introduction = `<h2>Introduction</h2>${buildLongParagraph(topic, 'the purpose and scope of this assignment', 140)}${buildLongParagraph(topic, 'how the topic supports nursing scholarship', 130)}`
  const concepts = `<h2>Key Concepts and Approach</h2>${buildLongParagraph(topic, 'the structure of a strong academic response', 140)}${buildList([
    `Define the scope and purpose of ${topic}.`,
    `Summarize the most important evidence-based concepts related to ${topic}.`,
    `Explain how the topic connects to nursing practice or patient care.`,
    `Use examples that illustrate the assignment as a realistic homework solution.`,
  ])}`
  const methodology = `<h2>Step-by-Step Solution Strategy</h2>${buildLongParagraph(topic, 'an effective plan for organizing the response', 140)}${buildLongParagraph(topic, 'the process of reviewing course materials and applying key ideas', 130)}`

  let additional = `<h2>Practical Application for Homework Solutions</h2>${buildLongParagraph(topic, 'translating academic concepts into assignment-ready content', 140)}`
  if (isQuestion) {
    additional += `<h2>Practice MCQs</h2>${generateMcqs(topic)}${buildLongParagraph(topic, 'using these questions to reinforce understanding', 120)}`
  } else {
    additional += `<h2>Example Assignment Response</h2>${buildLongParagraph(topic, 'sample phrasing for a polished homework answer', 140)}${buildLongParagraph(topic, 'how to structure supporting arguments and evidence', 120)}`
  }

  const conclusion = `<h2>Conclusion</h2>${buildLongParagraph(topic, 'the final summary and academic takeaway', 140)}${buildLongParagraph(topic, 'how this content supports course objectives and assignment criteria', 130)}`

  return [`<h1>${safeTitle}</h1>`, introduction, concepts, methodology, additional, conclusion].join('\n\n')
}

function rewriteBlogPosts(limit) {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error('Blog directory not found:', BLOG_DIR)
    process.exit(1)
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'))
  const targetFiles = typeof limit === 'number' && limit > 0 ? files.slice(0, limit) : files

  console.log(`Rewriting ${targetFiles.length} blog posts with generated assignment-style content...`)
  for (const file of targetFiles) {
    const fullPath = path.join(BLOG_DIR, file)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const parsed = matter(raw)
    const title = parsed.data.title || normalizeTitle(file.replace(/\.md$/, ''))
    const body = generateContent(title)
    const updated = `${matter.stringify('', parsed.data)}\n${body}\n`
    fs.writeFileSync(fullPath, updated, 'utf8')
    process.stdout.write(`\rRewrote ${file}   `)
  }

  console.log('\nDone rewriting blog posts.')
}

const arg = process.argv[2]
const limit = arg ? Number(arg.replace(/[^0-9]/g, '')) : 0
rewriteBlogPosts(limit)
