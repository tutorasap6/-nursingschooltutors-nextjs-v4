/**
 * Blog Scraper — NursingSchoolTutors.com
 * Run: node scripts/scrape-blog.js [pageCount]
 * Prereqs: npm install node-fetch cheerio
 */
const fs = require('fs')
const path = require('path')

const DEFAULT_TOTAL_PAGES = 125
const BASE_URL = 'https://nursingschooltutors.com/blog'
const OUT_DIR = path.join(__dirname, '../content/blog')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 80)
}

function extractTags(str) {
  const map = {
    'NR 507': 'NR 507',
    'ATI TEAS': 'ATI TEAS',
    'HESI': 'HESI',
    'NCLEX': 'NCLEX',
    'Chamberlain': 'Chamberlain',
    'DNP': 'DNP',
    'PICOT': 'PICOT',
    'capstone': 'Capstone',
    'pathophysiology': 'Pathophysiology',
    'pharmacology': 'Pharmacology',
    'MSN': 'MSN',
    'FNP': 'FNP',
    'WGU': 'WGU',
    'proctored': 'Proctored Exams',
    'care plan': 'Care Plans',
    'evidence-based': 'EBP',
  }
  const low = str.toLowerCase()
  return [...new Set(Object.entries(map)
    .filter(([k]) => low.includes(k))
    .map(([, v]) => v))].slice(0, 5)
}

function buildUrl(href) {
  if (!href) return ''
  if (href.startsWith('http://') || href.startsWith('https://')) return href
  return new URL(href, BASE_URL).href
}

function findArticleBody($) {
  const selectors = [
    'article .entry-content',
    'article .post-content',
    '.entry-content',
    '.post-content',
    '.blog-post-content',
    '.post-body',
    '.content',
    '.post',
    'article',
    'main',
  ]
  for (const selector of selectors) {
    const el = $(selector).first()
    if (el.length && el.text().trim().length > 200) return el
  }

  let best = null
  $('body *').each((_, el) => {
    const $el = $(el)
    const text = $el.text().trim()
    if (text.length < 200) return

    const classOrId = `${$el.attr('class') || ''} ${$el.attr('id') || ''}`
    if (/sidebar|nav|header|footer|comment|advert|share|widget|related|breadcrumb|menu|subscribe/i.test(classOrId)) return

    const pCount = $el.find('p').length
    if (pCount < 2) return

    const linkCount = $el.find('a').length
    const score = text.length + pCount * 300 - linkCount * 100
    if (!best || score > best.score) best = { el: $el, score }
  })

  if (best && best.el.length) return best.el
  return $('article').first().length ? $('article').first() : $('body').first()
}

function cleanBody($, root) {
  root.find('script, style, noscript, iframe, ins, footer, .share, .social, .related-posts, .related-post, .comments, .comment, .author, .post-meta, .entry-meta, .byline, .tags, .post-tags, .breadcrumbs, .newsletter, .ads, .advertisement, .promo, .subscribe, .wp-block-button, .sidebar, .widget, .nav, .breadcrumb').remove()
  root.find('*').each((_, el) => {
    $(el).removeAttr('style class id onclick onmouseover onmouseout')
  })
  return root.html() || ''
}

function formatDate(rawDate) {
  if (!rawDate) return new Date().toISOString().split('T')[0]
  const parsed = new Date(rawDate)
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().split('T')[0]
  return new Date().toISOString().split('T')[0]
}

async function scrape() {
  const { default: fetch } = await import('node-fetch')
  const { load } = await import('cheerio')
  const totalPages = Number(process.argv[2]) || DEFAULT_TOTAL_PAGES
  const seen = new Set()
  const posts = []

  for (let i = 1; i <= totalPages; i++) {
    const url = i === 1 ? `${BASE_URL}/` : `${BASE_URL}/page/${i}/`
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(15000),
      })
      if (!res.ok) {
        console.warn(`Skipping page ${i}: ${res.status} ${res.statusText}`)
        continue
      }
      const $ = load(await res.text())
      $('article, .post, [class*=\"post-item\"], [class*=\"blog-card\"]').each((_, el) => {
        const $el = $(el)
        const title = $el.find('h1,h2,h3').first().text().trim()
        if (!title || title.length < 10) return

        const href = buildUrl($el.find('a[href*="/blog/"]').first().attr('href') || '')
        if (!href) return

        const excerpt = $el.find('p').first().text().trim().slice(0, 200)
        const slug = slugify(title)
        if (seen.has(slug)) return
        seen.add(slug)

        posts.push({ title, slug, excerpt, href, date: new Date().toISOString().split('T')[0], tags: extractTags(title + ' ' + excerpt) })
      })
      process.stdout.write(`\rPage ${i}/${totalPages} — ${posts.length} posts found`)
      await new Promise(resolve => setTimeout(resolve, 700))
    } catch (error) {
      process.stdout.write(` [skip: ${error.message}]`)
    }
  }

  console.log(`\n\nFound ${posts.length} article candidates. Fetching full article bodies...`)
  for (const post of posts) {
    const fp = path.join(OUT_DIR, `${post.slug}.md`)
    try {
      const res = await fetch(post.href, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(15000),
      })
      if (!res.ok) {
        console.warn(`Skipping article ${post.href}: ${res.status} ${res.statusText}`)
        continue
      }
      const html = await res.text()
      const $ = load(html)

      const main = findArticleBody($)
      const bodyHtml = cleanBody($, main)
      const description = $('meta[name="description"]').attr('content') || post.excerpt
      const date = $('meta[property="article:published_time"]').attr('content') || $('time').first().attr('datetime') || post.date
      const extraTags = [...new Set([
        ...post.tags,
        ...$('a[href*="tag"], .tags a, .post-tags a, .category a, .post-category a').map((_, tag) => $(tag).text().trim()).get().filter(Boolean),
      ])].slice(0, 8)

      const fileContent = [
        '---',
        `title: "${post.title.replace(/"/g, '\\"')}"`,
        `description: "${description.replace(/"/g, '\\"')}"`,
        `excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`,
        `date: "${formatDate(date)}"`,
        `tags: [${extraTags.map(t => `"${t.replace(/"/g, '\\"')}"`).join(', ')}]`,
        '---',
        '',
        bodyHtml || `<p>${post.excerpt}</p>`,
        '',
        '---',
        '',
        '**Need expert nursing help?** Our certified tutors are available 24/7.',
        '',
        '👉 [Get a Free Quote](/order)',
        '👉 [WhatsApp Us](https://wa.me/17654709090)',
      ].join('\n')

      fs.writeFileSync(fp, fileContent, 'utf-8')
      process.stdout.write(`\rWrote ${post.slug}.md      `)
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.warn(`\nFailed to fetch ${post.href}: ${error.message}`)
    }
  }

  console.log('\nDone! Check content/blog/')
}

scrape().catch(console.error)
