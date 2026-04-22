'use client'
import { useState, useEffect, useRef } from 'react'

export interface QuizQuestion {
  id: number
  question: string
  options: { A: string; B: string; C: string; D: string }
  answer: 'A' | 'B' | 'C' | 'D'
  rationale: string
  topic?: string
}

interface Props {
  title: string
  courseCode: string
  questions: QuizQuestion[]
  timeMinutes?: number
}

export default function QuizEngine({ title, courseCode, questions, timeMinutes = 30 }: Props) {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'review'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [flagged, setFlagged] = useState<Set<number>>(new Set())
  const [timeLeft, setTimeLeft] = useState(timeMinutes * 60)
  const [showRationale, setShowRationale] = useState<Record<number, boolean>>({})
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'flagged' | 'unanswered'>('all')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (phase === 'quiz') {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { clearInterval(timerRef.current!); setPhase('review'); return 0 }
          return t - 1
        })
      }, 1000)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const fmt = (s: number) => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`
  const pct = Math.round((timeLeft / (timeMinutes * 60)) * 100)
  const timerColor = pct > 50 ? '#22c55e' : pct > 25 ? '#f59e0b' : '#ef4444'

  const score = questions.filter(q => answers[q.id] === q.answer).length
  const scorePct = Math.round((score / questions.length) * 100)
  const passed = scorePct >= 70

  const selectAnswer = (qid: number, opt: string) => {
    setAnswers(prev => ({ ...prev, [qid]: opt }))
  }

  const toggleFlag = (qid: number) => {
    setFlagged(prev => {
      const n = new Set(prev)
      n.has(qid) ? n.delete(qid) : n.add(qid)
      return n
    })
  }

  const submit = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase('review')
  }

  const filteredQ = questions.filter(q => {
    if (reviewFilter === 'wrong') return answers[q.id] && answers[q.id] !== q.answer
    if (reviewFilter === 'flagged') return flagged.has(q.id)
    if (reviewFilter === 'unanswered') return !answers[q.id]
    return true
  })

  const answered = Object.keys(answers).length

  if (phase === 'intro') return (
    <div style={{background:'linear-gradient(135deg,#004B49,#007570)',borderRadius:'16px',padding:'40px',color:'white',maxWidth:'800px',margin:'0 auto',fontFamily:'system-ui,sans-serif'}}>
      <div style={{textAlign:'center',marginBottom:'32px'}}>
        <div style={{fontSize:'48px',marginBottom:'12px'}}>📋</div>
        <h2 style={{fontSize:'28px',fontWeight:800,margin:'0 0 8px',color:'white'}}>{title}</h2>
        <p style={{color:'rgba(255,255,255,0.75)',fontSize:'16px',margin:0}}>{courseCode} — Practice Quiz</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'16px',marginBottom:'32px'}}>
        {[['📝','Questions',`${questions.length} MCQs`],['⏱️','Time Limit',`${timeMinutes} minutes`],['🎯','Passing Score','70% ('+Math.ceil(questions.length*0.7)+' correct)']].map(([icon,label,val])=>(
          <div key={label} style={{background:'rgba(255,255,255,0.1)',borderRadius:'12px',padding:'20px',textAlign:'center'}}>
            <div style={{fontSize:'28px'}}>{icon}</div>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,0.6)',marginTop:'6px',textTransform:'uppercase',letterSpacing:'0.05em'}}>{label}</div>
            <div style={{fontSize:'16px',fontWeight:700,marginTop:'4px'}}>{val}</div>
          </div>
        ))}
      </div>
      <div style={{background:'rgba(255,255,255,0.08)',borderRadius:'12px',padding:'20px',marginBottom:'28px',fontSize:'14px',color:'rgba(255,255,255,0.8)',lineHeight:'1.6'}}>
        <strong style={{color:'#C9A84C'}}>📌 Instructions:</strong>
        <ul style={{margin:'10px 0 0',paddingLeft:'20px'}}>
          <li>Read each question carefully before selecting your answer</li>
          <li>Flag questions you want to review later using the 🚩 button</li>
          <li>Navigate freely between questions using the question grid</li>
          <li>Submit when ready — answers and detailed rationale will be shown</li>
          <li>Timer will auto-submit when time expires</li>
        </ul>
      </div>
      <button onClick={()=>setPhase('quiz')} style={{width:'100%',padding:'16px',background:'#C9A84C',border:'none',borderRadius:'10px',fontSize:'18px',fontWeight:700,color:'#004B49',cursor:'pointer'}}>
        🚀 Start Quiz
      </button>
    </div>
  )

  const q = questions[current]

  if (phase === 'quiz') return (
    <div style={{fontFamily:'system-ui,sans-serif',maxWidth:'900px',margin:'0 auto'}}>
      {/* Timer Bar */}
      <div style={{background:'#f8f8f8',borderRadius:'12px',padding:'16px 20px',marginBottom:'20px',display:'flex',alignItems:'center',gap:'16px',border:'1.5px solid #e5e7eb'}}>
        <div style={{flex:1}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'6px',fontSize:'13px',color:'#6b7280',fontWeight:600}}>
            <span>⏱️ Time Remaining</span>
            <span style={{color:timerColor,fontWeight:800,fontSize:'18px',fontVariantNumeric:'tabular-nums'}}>{fmt(timeLeft)}</span>
          </div>
          <div style={{background:'#e5e7eb',borderRadius:'99px',height:'8px',overflow:'hidden'}}>
            <div style={{height:'100%',borderRadius:'99px',background:timerColor,width:`${pct}%`,transition:'width 1s linear'}}/>
          </div>
        </div>
        <div style={{background:'#004B49',color:'white',borderRadius:'8px',padding:'8px 14px',fontSize:'13px',fontWeight:700,whiteSpace:'nowrap'}}>
          {answered}/{questions.length} answered
        </div>
      </div>

      {/* Question Grid Navigator */}
      <div style={{background:'white',border:'1.5px solid #e5e7eb',borderRadius:'12px',padding:'16px',marginBottom:'20px'}}>
        <div style={{fontSize:'12px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'10px'}}>Question Navigator</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
          {questions.map((qq,i)=>{
            const isAnswered = !!answers[qq.id]
            const isFlagged = flagged.has(qq.id)
            const isCurrent = i === current
            return (
              <button key={qq.id} onClick={()=>setCurrent(i)} style={{
                width:'36px',height:'36px',borderRadius:'6px',border:'none',cursor:'pointer',fontSize:'12px',fontWeight:700,
                background: isCurrent ? '#004B49' : isFlagged ? '#f59e0b' : isAnswered ? '#22c55e' : '#f3f4f6',
                color: isCurrent || isFlagged || isAnswered ? 'white' : '#374151',
              }}>{i+1}</button>
            )
          })}
        </div>
        <div style={{display:'flex',gap:'16px',marginTop:'10px',fontSize:'12px',color:'#6b7280'}}>
          <span><span style={{display:'inline-block',width:'12px',height:'12px',background:'#22c55e',borderRadius:'2px',marginRight:'4px'}}/>Answered</span>
          <span><span style={{display:'inline-block',width:'12px',height:'12px',background:'#f59e0b',borderRadius:'2px',marginRight:'4px'}}/>Flagged</span>
          <span><span style={{display:'inline-block',width:'12px',height:'12px',background:'#f3f4f6',border:'1px solid #e5e7eb',borderRadius:'2px',marginRight:'4px'}}/>Unanswered</span>
        </div>
      </div>

      {/* Question */}
      <div style={{background:'white',border:'1.5px solid #e5e7eb',borderRadius:'16px',padding:'28px',marginBottom:'16px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <div>
            {q.topic && <div style={{fontSize:'11px',fontWeight:700,color:'#C9A84C',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'8px'}}>{q.topic}</div>}
            <div style={{fontSize:'13px',color:'#9ca3af',fontWeight:600}}>Question {current + 1} of {questions.length}</div>
          </div>
          <button onClick={()=>toggleFlag(q.id)} style={{
            background: flagged.has(q.id) ? '#fef3c7' : '#f9fafb',
            border: `1.5px solid ${flagged.has(q.id) ? '#f59e0b' : '#e5e7eb'}`,
            borderRadius:'8px',padding:'6px 12px',cursor:'pointer',fontSize:'13px',fontWeight:600,
            color: flagged.has(q.id) ? '#92400e' : '#6b7280',
          }}>
            🚩 {flagged.has(q.id) ? 'Flagged' : 'Flag'}
          </button>
        </div>
        <p style={{fontSize:'17px',fontWeight:600,color:'#111827',lineHeight:'1.6',margin:'0 0 24px'}}>{q.question}</p>
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          {(['A','B','C','D'] as const).map(opt => {
            const selected = answers[q.id] === opt
            return (
              <button key={opt} onClick={()=>selectAnswer(q.id, opt)} style={{
                textAlign:'left',padding:'14px 18px',borderRadius:'10px',cursor:'pointer',fontSize:'15px',fontWeight:selected?700:400,
                border: `2px solid ${selected ? '#004B49' : '#e5e7eb'}`,
                background: selected ? '#f0faf9' : '#fff',
                color: selected ? '#004B49' : '#374151',
                transition:'all 0.15s',display:'flex',alignItems:'flex-start',gap:'10px',
              }}>
                <span style={{
                  minWidth:'28px',height:'28px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                  background: selected ? '#004B49' : '#f3f4f6',color: selected ? 'white' : '#6b7280',
                  fontSize:'12px',fontWeight:700,flexShrink:0,
                }}>{opt}</span>
                {q.options[opt]}
              </button>
            )
          })}
        </div>
      </div>

      {/* Nav Buttons */}
      <div style={{display:'flex',gap:'10px',justifyContent:'space-between'}}>
        <button onClick={()=>setCurrent(Math.max(0,current-1))} disabled={current===0} style={{padding:'12px 24px',borderRadius:'8px',border:'1.5px solid #e5e7eb',background:'white',cursor:current===0?'not-allowed':'pointer',fontWeight:600,color:current===0?'#9ca3af':'#374151',fontSize:'14px'}}>← Previous</button>
        <button onClick={submit} style={{padding:'12px 24px',borderRadius:'8px',border:'none',background:'#C9A84C',color:'#004B49',cursor:'pointer',fontWeight:800,fontSize:'14px'}}>Submit Quiz ✓</button>
        <button onClick={()=>setCurrent(Math.min(questions.length-1,current+1))} disabled={current===questions.length-1} style={{padding:'12px 24px',borderRadius:'8px',border:'1.5px solid #e5e7eb',background:'white',cursor:current===questions.length-1?'not-allowed':'pointer',fontWeight:600,color:current===questions.length-1?'#9ca3af':'#374151',fontSize:'14px'}}>Next →</button>
      </div>
    </div>
  )

  // Review Phase
  return (
    <div style={{fontFamily:'system-ui,sans-serif',maxWidth:'900px',margin:'0 auto'}}>
      {/* Score Card */}
      <div style={{background:passed?'linear-gradient(135deg,#004B49,#007570)':'linear-gradient(135deg,#7f1d1d,#991b1b)',borderRadius:'16px',padding:'36px',color:'white',textAlign:'center',marginBottom:'24px'}}>
        <div style={{fontSize:'52px',marginBottom:'8px'}}>{passed ? '🏆' : '📚'}</div>
        <h2 style={{fontSize:'32px',fontWeight:900,margin:'0 0 8px'}}>{passed ? 'Passed!' : 'Keep Studying'}</h2>
        <div style={{fontSize:'64px',fontWeight:900,margin:'12px 0',color:'#C9A84C'}}>{scorePct}%</div>
        <div style={{fontSize:'18px',color:'rgba(255,255,255,0.8)'}}>{score} out of {questions.length} correct</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'16px',marginTop:'24px'}}>
          {[['✅','Correct',score],['❌','Wrong',questions.length-score-Object.keys(answers).filter(k=>!answers[parseInt(k)]).length],['⭕','Unanswered',questions.length-Object.keys(answers).length]].map(([icon,label,val])=>(
            <div key={String(label)} style={{background:'rgba(255,255,255,0.12)',borderRadius:'10px',padding:'14px'}}>
              <div style={{fontSize:'24px'}}>{icon}</div>
              <div style={{fontSize:'22px',fontWeight:800,marginTop:'4px'}}>{val}</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.65)',marginTop:'2px'}}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div style={{display:'flex',gap:'8px',marginBottom:'20px',flexWrap:'wrap'}}>
        {(['all','wrong','flagged','unanswered'] as const).map(f=>(
          <button key={f} onClick={()=>setReviewFilter(f)} style={{
            padding:'8px 16px',borderRadius:'8px',border:'1.5px solid',fontWeight:600,fontSize:'13px',cursor:'pointer',
            borderColor: reviewFilter===f ? '#004B49' : '#e5e7eb',
            background: reviewFilter===f ? '#004B49' : 'white',
            color: reviewFilter===f ? 'white' : '#374151',
          }}>{f==='all'?`All (${questions.length})`:f==='wrong'?`Wrong (${questions.filter(q=>answers[q.id]&&answers[q.id]!==q.answer).length})`:f==='flagged'?`Flagged (${flagged.size})`:`Unanswered (${questions.length-Object.keys(answers).length})`}</button>
        ))}
      </div>

      {/* Questions Review */}
      <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
        {filteredQ.map((q,idx)=>{
          const userAns = answers[q.id] as 'A'|'B'|'C'|'D'|undefined
          const correct = userAns === q.answer
          const showRat = showRationale[q.id]
          return (
            <div key={q.id} style={{background:'white',border:`2px solid ${!userAns?'#e5e7eb':correct?'#22c55e':'#ef4444'}`,borderRadius:'14px',padding:'24px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>
                <span style={{fontSize:'12px',fontWeight:700,color:'#9ca3af',textTransform:'uppercase'}}>
                  Q{questions.indexOf(q)+1}{q.topic ? ` — ${q.topic}` : ''}
                </span>
                <span style={{fontSize:'13px',fontWeight:700,padding:'4px 10px',borderRadius:'6px',
                  background:!userAns?'#f3f4f6':correct?'#dcfce7':'#fee2e2',
                  color:!userAns?'#6b7280':correct?'#166534':'#991b1b',
                }}>{!userAns?'⭕ Not Answered':correct?'✅ Correct':'❌ Incorrect'}</span>
              </div>
              <p style={{fontSize:'15px',fontWeight:600,color:'#111827',margin:'0 0 16px',lineHeight:'1.5'}}>{q.question}</p>
              <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'16px'}}>
                {(['A','B','C','D'] as const).map(opt=>{
                  const isCorrect = opt === q.answer
                  const isUser = opt === userAns
                  let bg='#f9fafb', border='#e5e7eb', color='#374151'
                  if(isCorrect){bg='#dcfce7';border='#22c55e';color='#166534'}
                  if(isUser && !isCorrect){bg='#fee2e2';border='#ef4444';color='#991b1b'}
                  return (
                    <div key={opt} style={{padding:'12px 16px',borderRadius:'8px',border:`2px solid ${border}`,background:bg,color,fontSize:'14px',display:'flex',alignItems:'flex-start',gap:'8px'}}>
                      <span style={{fontWeight:800,minWidth:'20px'}}>{opt}.</span>
                      <span>{q.options[opt]}</span>
                      {isCorrect&&<span style={{marginLeft:'auto',fontWeight:700}}>✅</span>}
                      {isUser&&!isCorrect&&<span style={{marginLeft:'auto',fontWeight:700}}>Your answer ❌</span>}
                    </div>
                  )
                })}
              </div>
              <button onClick={()=>setShowRationale(prev=>({...prev,[q.id]:!prev[q.id]}))} style={{background:showRat?'#004B49':'#f0faf9',border:`1.5px solid ${showRat?'#004B49':'#d1fae5'}`,borderRadius:'8px',padding:'8px 16px',cursor:'pointer',fontSize:'13px',fontWeight:700,color:showRat?'white':'#004B49'}}>
                {showRat?'Hide Explanation ▲':'Show Explanation ▼'}
              </button>
              {showRat&&(
                <div style={{marginTop:'12px',background:'#f0fdf4',borderRadius:'10px',padding:'16px',borderLeft:'4px solid #22c55e'}}>
                  <div style={{fontSize:'12px',fontWeight:700,color:'#15803d',textTransform:'uppercase',marginBottom:'8px'}}>📖 Rationale</div>
                  <p style={{fontSize:'14px',color:'#166534',lineHeight:'1.7',margin:0}}>{q.rationale}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div style={{marginTop:'24px',display:'flex',gap:'12px',justifyContent:'center'}}>
        <button onClick={()=>{setPhase('intro');setAnswers({});setCurrent(0);setTimeLeft(timeMinutes*60);setShowRationale({});setFlagged(new Set())}} style={{padding:'14px 32px',background:'#004B49',border:'none',borderRadius:'10px',color:'white',fontWeight:700,cursor:'pointer',fontSize:'15px'}}>🔄 Retake Quiz</button>
        <a href="https://wa.me/17654709090" target="_blank" rel="noopener" style={{padding:'14px 32px',background:'#25D366',border:'none',borderRadius:'10px',color:'white',fontWeight:700,cursor:'pointer',fontSize:'15px',textDecoration:'none',display:'flex',alignItems:'center',gap:'8px'}}>💬 Get Expert Help</a>
      </div>
    </div>
  )
}
