import type { Metadata } from 'next'
import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { getQuizForSlug } from '@/data/quizzes'
import dynamic as dynamicImport from 'next/dynamic'

// Load quiz interactively (client-side only)
const QuizComponent = dynamicImport(() => import('@/components/ui/QuizComponent'), { ssr: false })

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | NursingSchoolTutors.com`,
    description: post.description || post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      type: 'article',
      siteName: 'NursingSchoolTutors.com',
    },
  }
}

function getCourseTags(post: { title: string; tags: string[]; slug: string }): string[] {
  const existing = [...post.tags]
  const codes = (post.title + ' ' + post.slug).match(/\b(NR[-\s]?\d{3,4}[A-Z]?|PA[-\s]?\d{3,4}|MPH[-\s]?\d{3,4}|MSW[-\s]?\d{3,4})\b/gi) || []
  codes.forEach(c => { const u = c.toUpperCase().replace(' ','-'); if (!existing.includes(u)) existing.push(u) })
  if (!existing.includes('Chamberlain College of Nursing')) existing.push('Chamberlain College of Nursing')
  const trending = ['NursingSchoolTutors.com','Online Nursing Help','A or B Guaranteed','AI-Free Nursing Writing']
  trending.forEach(t => { if (!existing.includes(t)) existing.push(t) })
  return [...new Set(existing)].slice(0, 15)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter(p => p.slug !== post.slug && p.tags.some(t => post.tags.includes(t))).slice(0, 3)
  const relatedPosts = related.length > 0 ? related : allPosts.filter(p => p.slug !== post.slug).slice(0, 3)
  const allTags = getCourseTags(post)
  const ratingCount = (post.schema?.ratingCount || 58247).toLocaleString()
  const quizData = getQuizForSlug(params.slug)

  const schema = {
    "@context": "https://schema.org",
    "@type": post.schema?.type || "MedicalWebPage",
    "name": post.title,
    "description": post.description || post.excerpt,
    "url": `https://nursingschooltutors.com/blog/${post.slug}`,
    "datePublished": post.date,
    "publisher": { "@type": "Organization", "name": "NursingSchoolTutors.com" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": post.schema?.rating || 4.9,
      "reviewCount": post.schema?.ratingCount || 58247,
      "bestRating": 5
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › {post.title.slice(0, 55)}{post.title.length > 55 ? '...' : ''}</nav>
          <h1>{post.title}</h1>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginTop:'14px',flexWrap:'wrap'}}>
            <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
              <span style={{color:'var(--gold-light)',fontSize:'20px'}}>★★★★★</span>
              <span style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',fontWeight:600}}>{post.schema?.rating || 4.9} ({ratingCount} ratings)</span>
            </div>
            <span style={{color:'rgba(255,255,255,0.5)',fontSize:'13px'}}>
              Published {new Date(post.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}
            </span>
          </div>
          <p style={{marginTop:'10px',color:'rgba(255,255,255,0.72)',fontSize:'16px',maxWidth:'700px'}}>{post.description}</p>
        </div>
      </div>

      <div style={{background:'var(--jungle-green)',padding:'12px 0'}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
          <span style={{color:'white',fontWeight:600,fontSize:'14px'}}>💬 Need expert help with this topic? Certified tutors available 24/7.</span>
          <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-sm">Free Quote</Link>
          </div>
        </div>
      </div>

      <article style={{padding:'56px 0',background:'var(--off-white)'}}>
        <div className="container">
          <div className="blog-layout">
            <div>
              {/* Main content */}
              <div className="page-content-wrap blog-content prose" dangerouslySetInnerHTML={{__html: post.content || `<p>${post.excerpt}</p>`}}/>

              {/* Interactive Quiz Panel — shown for quiz/exam posts */}
              {quizData && (
                <div style={{marginTop:'36px'}}>
                  <div style={{background:'var(--jungle-dark)',borderRadius:'var(--radius-lg)',padding:'28px',marginBottom:'20px',textAlign:'center'}}>
                    <h2 style={{fontFamily:'var(--font-heading)',color:'var(--white)',fontSize:'24px',marginBottom:'8px'}}>
                      🎯 Practice Quiz — Exam Mode
                    </h2>
                    <p style={{color:'rgba(255,255,255,0.72)',fontSize:'15px',marginBottom:'0'}}>
                      {quizData.questions.length} questions • Timed environment • Instant feedback with rationale
                    </p>
                  </div>
                  <QuizComponent
                    questions={quizData.questions}
                    title={quizData.title}
                    course={quizData.course}
                  />
                </div>
              )}

              {/* Exam Practice CTA for non-quiz posts */}
              {!quizData && (
                <div style={{background:'linear-gradient(135deg,var(--jungle-dark),var(--jungle-green))',borderRadius:'var(--radius-lg)',padding:'32px',marginTop:'28px'}}>
                  <div style={{display:'flex',alignItems:'flex-start',gap:'16px',marginBottom:'20px'}}>
                    <span style={{fontSize:'32px',flexShrink:0}}>🎯</span>
                    <div>
                      <h3 style={{fontFamily:'var(--font-heading)',color:'white',fontSize:'20px',marginBottom:'6px'}}>Practice in Exam Mode</h3>
                      <p style={{color:'rgba(255,255,255,0.72)',fontSize:'14px'}}>Get timed practice questions with answer explanations for this topic</p>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                    <a href="https://wa.me/17654709090?text=Hi!%20I%20want%20practice%20questions%20for%20this%20topic." target="_blank" rel="noopener" className="btn btn-primary">🧪 Get Practice Questions</a>
                    <Link href="/order" className="btn btn-green">📝 Get Expert Tutoring</Link>
                    <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 WhatsApp Tutor</a>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius)',padding:'24px',marginTop:'24px'}}>
                <h4 style={{fontSize:'12px',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--gold)',marginBottom:'14px',paddingBottom:'8px',borderBottom:'1px solid var(--border)'}}>
                  📌 Course Tags &amp; Related Topics
                </h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {allTags.map(tag => <span key={tag} className="sidebar-tag">{tag}</span>)}
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{background:'var(--jungle-dark)',borderRadius:'var(--radius-lg)',padding:'40px',marginTop:'28px',textAlign:'center'}}>
                <h3 style={{fontFamily:'var(--font-heading)',color:'var(--white)',fontSize:'24px',marginBottom:'10px'}}>Need Expert Nursing Help Right Now?</h3>
                <p style={{color:'rgba(255,255,255,0.72)',marginBottom:'24px',fontSize:'16px'}}>Certified tutors 24/7. Guaranteed A or B — or full refund.</p>
                <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
                  <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us</a>
                  <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
                  <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg" style={{borderColor:'rgba(255,255,255,0.4)',color:'white'}}>📧 Email Us</a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-box">
                <h3>🎯 Get Expert Help</h3>
                <p>Certified tutors 24/7. A or B guaranteed.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{width:'100%',justifyContent:'center',marginBottom:'10px',display:'flex'}}>💬 WhatsApp Now</a>
                <Link href="/order" className="btn btn-primary" style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:'10px'}}>🎯 Free Quote</Link>
                <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green btn-sm" style={{width:'100%',justifyContent:'center',display:'flex'}}>📧 Email Us</a>
              </div>
              {quizData && (
                <div className="sidebar-box" style={{background:'var(--jungle-xlight)',border:'1.5px solid rgba(0,148,143,0.2)'}}>
                  <h4 style={{color:'var(--jungle-dark)'}}>🧪 Practice Quiz Available</h4>
                  <p style={{fontSize:'13px',color:'var(--text-light)'}}>This page includes an interactive {quizData.questions.length}-question exam-mode quiz with instant feedback.</p>
                  <a href="#quiz" className="btn btn-green btn-sm" style={{width:'100%',justifyContent:'center',display:'flex'}} onClick={() => document.querySelector('[class*="quiz-start"]')?.scrollIntoView({behavior:'smooth'})}>Start Quiz ↓</a>
                </div>
              )}
              <div className="sidebar-box">
                <h4>Our Services</h4>
                <Link href="/services/online-proctored-exam-help">📋 Proctored Exam Help</Link>
                <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
                <Link href="/services/take-my-class-for-me">📚 Take My Class For Me</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
                <Link href="/contact">📞 Contact Us</Link>
                <Link href="/faq">❓ FAQ</Link>
              </div>
              <div className="sidebar-box">
                <h4>Popular Exams</h4>
                <Link href="/services/online-proctored-exam-help/ati-teas-proctored-exam-help">ATI TEAS Exam Help</Link>
                <Link href="/services/online-proctored-exam-help/hesi-proctored-exam-help">HESI A2 Exam Help</Link>
                <Link href="/services/online-proctored-exam-help/nclex-exam-help">NCLEX Exam Help</Link>
                <Link href="/services/online-proctored-exam-help/nr-507-advanced-pathophysiology">NR-507 Pathophysiology</Link>
                <Link href="/services/online-proctored-exam-help/wgu-proctored-exam-help">WGU Proctored Exams</Link>
              </div>
              <div className="sidebar-box" style={{textAlign:'center'}}>
                <h4>Student Ratings</h4>
                <div style={{fontSize:'28px',color:'var(--gold)',margin:'8px 0'}}>★★★★★</div>
                <div style={{fontFamily:'var(--font-heading)',fontSize:'32px',fontWeight:900,color:'var(--jungle-dark)'}}>4.9/5</div>
                <p style={{fontSize:'12px',color:'var(--text-light)',margin:'4px 0 0'}}>{ratingCount} verified ratings</p>
              </div>
              <div className="sidebar-box">
                <h4>Course Tags</h4>
                <div className="sidebar-tags">{allTags.slice(0,10).map(t=><span key={t} className="sidebar-tag">{t}</span>)}</div>
              </div>
              <div className="sidebar-box" style={{background:'var(--jungle-dark)',border:'none'}}>
                <h4 style={{color:'var(--gold-light)'}}>Quick Contact</h4>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" style={{color:'#25D366',fontWeight:700,display:'block',marginBottom:'8px'}}>💬 +1 (765) 470-9090</a>
                <a href="mailto:instanthelp24hr@gmail.com" style={{color:'var(--gold-light)',fontWeight:700,fontSize:'13px'}}>📧 instanthelp24hr@gmail.com</a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section style={{padding:'56px 0',background:'var(--white)'}}>
          <div className="container">
            <h2 className="section-title">Related <span>Articles</span></h2>
            <div className="blog-grid">
              {relatedPosts.map(p => (
                <article key={p.slug} className="blog-card">
                  <div className="blog-card-body">
                    <div className="blog-card-tags">{p.tags.slice(0,2).map(t=><span key={t} className="blog-tag">{t}</span>)}</div>
                    <h3 className="blog-card-title"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <div className="blog-card-meta">
                      <span style={{color:'var(--gold)',fontSize:'13px'}}>★★★★★ 4.9</span>
                      <Link href={`/blog/${p.slug}`} className="blog-card-read-more">Read More →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
