import type { Metadata } from 'next'
import Link from 'next/link'
import { classSubpages } from '@/data/navigation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return classSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = classSubpages.find(p => p.slug === params.slug)
  if (!page) return {}
  const cleanLabel = page.label.replace('Pay Someone to Do My Online Class ','')
  return {
    title: `Pay Someone to Do My Online Class ${cleanLabel} | NursingSchoolTutors.com`,
    description: `Pay someone to do your online class ${cleanLabel} at Chamberlain College of Nursing. Certified nursing experts handle every discussion, assignment, quiz, and exam. A or B grade guaranteed. 100% confidential, AI-free, 24/7 support.`,
    keywords: [cleanLabel, 'pay someone to do my online class', 'Chamberlain nursing help', 'online nursing class help', 'A or B guaranteed', 'NursingSchoolTutors'],
  }
}

export default function ClassSubPage({ params }: { params: { slug: string } }) {
  const page = classSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()
  const related = classSubpages.filter(p => p.slug !== params.slug).slice(0, 10)
  const cleanLabel = page.label.replace('Pay Someone to Do My Online Class ','')
  const codeMatch = cleanLabel.match(/\b(NR[-\s]?\d{3,4}[A-Z]?|HSM[-\s]?\d{3})\b/i)
  const courseCode = codeMatch ? codeMatch[0].toUpperCase().replace(' ','-') : 'Nursing'
  const pageTags = [courseCode, 'Pay Someone to Do My Online Class', 'Chamberlain College of Nursing', 'Online Class Help', 'A or B Guaranteed', '100% Confidential', 'AI-Free Work', '24/7 Support', 'NursingSchoolTutors.com'].filter(Boolean)

  // Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pay Someone to Do My Online Class",
    "provider": { "@type": "EducationalOrganization", "name": "NursingSchoolTutors.com" },
    "description": "Expert online class help at Chamberlain College of Nursing. Guaranteed A or B.",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "58247", "bestRating": "5" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services/pay-someone-to-do-my-online-class">Pay For My Class</Link> › {cleanLabel}
          </nav>
          <h1>Pay Someone to Do My Online Class — {cleanLabel}</h1>
          <p>Certified nursing expert manages your entire {courseCode} course — discussions, assignments, quizzes, and exams. A or B grade guaranteed.</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'16px'}}>
            <span className="badge badge-gold">🏆 A or B Guaranteed</span>
            <span className="badge badge-gold">🔒 100% Confidential</span>
            <span className="badge badge-gold">🧬 AI-Free Work</span>
          </div>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'22px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0',background:'var(--off-white)'}}>
        <div className="container">
          <div className="blog-layout">
            <div>
              <div className="page-content-wrap">
                <h2>Pay Someone to Do My Online Class — {cleanLabel}</h2>
                <p>
                  If you are enrolled in <strong>{cleanLabel}</strong> at Chamberlain College of Nursing and feeling overwhelmed, you are not alone. This course is demanding — with weekly discussion posts, written assignments, case study analyses, quizzes, and proctored exams all competing for your attention alongside clinical rotations, work schedules, and family responsibilities.
                </p>
                <p>
                  At <strong>NursingSchoolTutors.com</strong>, we specialize in providing full-course management for {courseCode} and all other Chamberlain nursing courses. When you pay someone to do your online class with us, a certified nursing expert with specific, verified experience in {cleanLabel} takes complete ownership of your coursework — submitting every assignment on time, maintaining your academic integrity, and ensuring you receive an A or minimum B.
                </p>

                <h2>What's Included in Our {courseCode} Online Class Service</h2>
                <p>Our pay-someone-to-do-my-online-class service for {cleanLabel} is fully comprehensive. There are no hidden components or extra charges for specific assignment types — everything is included from day one to final submission:</p>
                <ul>
                  <li><strong>Weekly Discussion Posts:</strong> Original, APA-formatted initial posts and peer responses that demonstrate graduate-level nursing knowledge and critical thinking. Each post is written by a human nursing expert with clinical experience — never by AI.</li>
                  <li><strong>Written Assignments:</strong> Papers, reflection journals, concept analyses, policy briefs, case study analyses, and any other written assignments required by {courseCode}. All work is plagiarism-checked and AI-detection-proof.</li>
                  <li><strong>Quizzes and Module Tests:</strong> All non-proctored online quizzes and module exams completed accurately and submitted before the deadline.</li>
                  <li><strong>Proctored Exams:</strong> For courses with proctored finals or midterms, we provide intensive preparation coaching to ensure you are ready to perform confidently under exam conditions.</li>
                  <li><strong>Group Projects:</strong> We coordinate and complete any collaborative assignments on your behalf without involving other students in our arrangement.</li>
                  <li><strong>Deadline Management:</strong> We track every due date from the moment you engage us, ensuring nothing is missed or submitted late.</li>
                  <li><strong>Grade Monitoring:</strong> We provide regular updates on your grade progress and adjust our approach if needed to maintain your target grade.</li>
                </ul>

                <h2>About {cleanLabel} at Chamberlain College of Nursing</h2>
                <p>
                  <strong>{cleanLabel}</strong> is a core component of the Chamberlain University nursing curriculum. {"This course builds foundational knowledge in pathophysiology, pharmacology, health assessment, or nursing practice that underpins all subsequent clinical coursework." if any(x in cleanLabel.lower() for x in ['nr-2','nr-3']) else "This graduate-level course develops advanced competencies in nursing leadership, clinical practice, research, or specialty nursing that prepare students for advanced practice roles."} Students in this course are expected to apply evidence-based frameworks, engage with current nursing literature, and demonstrate professional clinical reasoning in all assignments.
                </p>
                <p>
                  Common assignments in {courseCode} include: discussion board posts requiring synthesis of nursing theory and clinical application, APA-formatted papers analyzing healthcare issues or nursing concepts, case studies applying the nursing process to complex patient scenarios, and quizzes assessing mastery of course content. Our expert tutors have completed this exact course and understand its specific grading rubrics, instructor expectations, and high-yield content areas.
                </p>

                <h2>Why Students Choose NursingSchoolTutors.com for {courseCode} Help</h2>
                <p>Since 2018, we have helped over 50,000 nursing students at Chamberlain University, WGU, Capella, SNHU, Liberty University, and more than 200 other programs nationwide. Here is what sets us apart:</p>
                <ul>
                  <li><strong>Specialized Expert Matching:</strong> You are never paired with a generalist writer. Your assigned expert has passed {courseCode} — or a closely equivalent course — and understands its content, format, and grading criteria inside and out.</li>
                  <li><strong>100% AI-Free Guarantee:</strong> Every discussion post, paper, and assignment is written by a human nursing professional. Our work consistently passes Turnitin, GPTZero, and Copyleaks AI detection tools. We never use ChatGPT or any AI writing assistant.</li>
                  <li><strong>Absolute Confidentiality:</strong> Your personal information, institution, and course login credentials are protected under strict non-disclosure protocols. We operate with the same data security standards as financial institutions, and we have never had a privacy breach in over seven years of operation.</li>
                  <li><strong>Grade Guarantee:</strong> We guarantee an A or minimum B for every course we manage. If we fall short of the agreed grade target, we issue a full, immediate refund — no delay, no dispute, no questions asked.</li>
                  <li><strong>24/7 Expert Access:</strong> Our support team is available around the clock, every day of the year. Whether your assignment is due in 3 days or 3 hours, we can help.</li>
                  <li><strong>Free Unlimited Revisions:</strong> If any submission requires adjustments, we revise immediately at zero additional charge.</li>
                </ul>

                <h2>How Our Pay-Someone-to-Do-My-Online-Class Process Works</h2>
                <ol>
                  <li><strong>Contact Us (30 Minutes to Start):</strong> Reach us via WhatsApp, email, or our free quote form. Share your course name, institution, start date, current grade standing, and any upcoming deadlines.</li>
                  <li><strong>Expert Assignment:</strong> We identify and assign the best-qualified available expert for {courseCode} — typically within 30–60 minutes of your initial contact.</li>
                  <li><strong>Secure Credentials Sharing:</strong> You share your course login through our encrypted messaging channel. Credentials are used exclusively by your assigned expert and deleted immediately after course completion.</li>
                  <li><strong>Full Course Management:</strong> Your expert logs in, reviews all remaining course requirements, builds a completion schedule, and begins working immediately.</li>
                  <li><strong>Progress Updates:</strong> We keep you informed of grades received, upcoming assignments, and any course announcements that require your awareness.</li>
                  <li><strong>Course Completion:</strong> Your final grade is delivered. A or B — guaranteed. If anything falls short, you receive a full refund within 24 hours.</li>
                </ol>

                <h2>Frequently Asked Questions — {courseCode} Online Class Help</h2>

                <h3>Is it safe to share my login credentials?</h3>
                <p>Yes. We use encrypted, secure channels for all credential sharing. Your login is used exclusively by your assigned expert and is permanently deleted after course completion. We have maintained a perfect privacy record since 2018.</p>

                <h3>Can you handle an accelerated 5-week or 8-week course?</h3>
                <p>Absolutely. Our experts specialize in compressed nursing course timelines. Many {courseCode} sections run on accelerated schedules, and our team is equipped to manage the heavy weekly workload these formats demand while maintaining grade quality.</p>

                <h3>What if the professor notices a different writing style?</h3>
                <p>We can adapt to your natural writing voice. For your first assignment, provide us with a sample of your previous writing (a past discussion post or paper) and we will match your style, vocabulary, and writing patterns precisely.</p>

                <h3>How much does it cost to have someone do my {courseCode} class?</h3>
                <p>Pricing depends on the course length, program level, and urgency. Typical ranges: 4–6 week short course ($200–$400), 8-week standard course ($400–$700), graduate MSN/DNP course ($700–$1,200). Contact us for a personalized quote — it takes less than 5 minutes.</p>

                <div style={{background:'var(--jungle-xlight)',borderRadius:'var(--radius)',padding:'28px',marginTop:'32px',border:'1.5px solid rgba(0,148,143,0.2)'}}>
                  <h3 style={{fontFamily:'var(--font-heading)',color:'var(--jungle-dark)',fontSize:'20px',marginBottom:'14px'}}>Ready to Start? Contact Us Now</h3>
                  <p style={{color:'var(--text-light)',marginBottom:'20px'}}>We respond within 30 minutes, 24 hours a day, 7 days a week.</p>
                  <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                    <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 WhatsApp +1(765)470-9090</a>
                    <Link href="/order" className="btn btn-primary">🎯 Get Free Quote</Link>
                  </div>
                </div>
              </div>

              <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius)',padding:'22px',marginTop:'20px'}}>
                <h4 style={{fontSize:'12px',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--gold)',marginBottom:'14px'}}>📌 Course Tags</h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {pageTags.map(t=><span key={t} className="sidebar-tag">{t}</span>)}
                </div>
              </div>

              <div className="related-box">
                <h3>Other Courses We Take For You</h3>
                <div className="related-links">
                  {related.map(p=><Link key={p.slug} href={`/services/pay-someone-to-do-my-online-class/${p.slug}`}>{p.label}</Link>)}
                  <Link href="/services/pay-someone-to-do-my-online-class">View All Courses →</Link>
                </div>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-box">
                <h3>🎯 Start Today</h3>
                <p>Expert takes over in 30 min. A or B guaranteed.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{width:'100%',justifyContent:'center',marginBottom:'10px',display:'flex'}}>💬 WhatsApp Now</a>
                <Link href="/order" className="btn btn-primary" style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:'10px'}}>🎯 Free Quote</Link>
                <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green btn-sm" style={{width:'100%',justifyContent:'center',display:'flex'}}>📧 Email Us</a>
              </div>
              <div className="sidebar-box">
                <h4>All Services</h4>
                <Link href="/services/online-proctored-exam-help">📋 Proctored Exam Help</Link>
                <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
                <Link href="/services/take-my-class-for-me">📚 Take My Class For Me</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
                <Link href="/contact">📞 Contact Us</Link>
                <Link href="/faq">❓ FAQ</Link>
              </div>
              <div className="sidebar-box">
                <h4>Grade Guarantee</h4>
                <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>✅ A or B Grade</span>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>🔒 Confidential</span>
                  <span className="badge badge-gold" style={{justifyContent:'center'}}>💰 Money-Back</span>
                  <span className="badge badge-gold" style={{justifyContent:'center'}}>🧬 AI-Free</span>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>⏰ 24/7 Support</span>
                </div>
              </div>
              <div className="sidebar-box" style={{textAlign:'center'}}>
                <h4>Student Ratings</h4>
                <div style={{fontSize:'26px',color:'var(--gold)',margin:'8px 0'}}>★★★★★</div>
                <div style={{fontFamily:'var(--font-heading)',fontSize:'28px',fontWeight:900,color:'var(--jungle-dark)'}}>4.9/5</div>
                <p style={{fontSize:'12px',color:'var(--text-light)',margin:'4px 0 0'}}>58,247 verified ratings</p>
              </div>
              <div className="sidebar-box">
                <h4>Course Tags</h4>
                <div className="sidebar-tags">{pageTags.map(t=><span key={t} className="sidebar-tag">{t}</span>)}</div>
              </div>
              <div className="sidebar-box" style={{background:'var(--jungle-dark)',border:'none'}}>
                <h4 style={{color:'var(--gold-light)'}}>Quick Contact</h4>
                <p style={{color:'rgba(255,255,255,0.65)',fontSize:'13px'}}>30-min response. Day or night.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" style={{color:'#25D366',fontWeight:700,display:'block',marginBottom:'8px'}}>💬 +1 (765) 470-9090</a>
                <a href="mailto:instanthelp24hr@gmail.com" style={{color:'var(--gold-light)',fontWeight:700,fontSize:'13px'}}>📧 instanthelp24hr@gmail.com</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let Us Take Your {cleanLabel} Class For You</h2>
          <p>Expert matched in 30 minutes. A or B guaranteed — or full refund.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
