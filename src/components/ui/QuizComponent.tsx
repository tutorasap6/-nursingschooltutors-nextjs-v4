'use client'
import { useState, useEffect, useCallback } from 'react'

export interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

interface Props {
  questions: Question[]
  title: string
  course: string
}

export default function QuizComponent({ questions, title, course }: Props) {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(questions.length * 90)
  const [timerActive, setTimerActive] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)

  const submitQuiz = useCallback(() => {
    setTimerActive(false)
    setShowResult(true)
  }, [])

  useEffect(() => {
    if (!timerActive) return
    if (timeLeft <= 0) { submitQuiz(); return }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(t)
  }, [timerActive, timeLeft, submitQuiz])

  const score = answers.filter((a, i) => a === questions[i].correct).length
  const pct = Math.round((score / questions.length) * 100)
  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    const newAnswers = [...answers]
    newAnswers[current] = idx
    setAnswers(newAnswers)
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(answers[current + 1])
    } else {
      submitQuiz()
    }
  }

  function handlePrev() {
    if (current > 0) {
      setCurrent(current - 1)
      setSelected(answers[current - 1])
    }
  }

  function startQuiz() {
    setStarted(true)
    setTimerActive(true)
    setCurrent(0)
    setSelected(null)
    setAnswers(Array(questions.length).fill(null))
    setShowResult(false)
    setReviewMode(false)
  }

  if (!started) {
    return (
      <div className="quiz-start-screen">
        <div className="quiz-icon">📝</div>
        <h2>{title}</h2>
        <p className="quiz-course">{course}</p>
        <div className="quiz-meta">
          <span>📋 {questions.length} Questions</span>
          <span>⏱️ {Math.floor(questions.length * 1.5)} minutes</span>
          <span>🎯 Exam Mode</span>
        </div>
        <p className="quiz-desc">Practice in a real exam environment. Each question includes the correct answer and detailed clinical rationale.</p>
        <button className="btn btn-primary btn-lg" onClick={startQuiz}>🚀 Start Quiz</button>
        <style>{styles}</style>
      </div>
    )
  }

  if (showResult && !reviewMode) {
    return (
      <div className="quiz-result">
        <div className={`result-circle ${pct >= 80 ? 'pass' : pct >= 70 ? near : 'fail'}`}>
          <div className="result-pct">{pct}%</div>
          <div className="result-label">{pct >= 80 ? 'PASS ✅' : pct >= 70 ? 'NEAR ⚠️' : 'FAIL ❌'}</div>
        </div>
        <h2>Quiz Complete!</h2>
        <p className="result-score">You scored <strong>{score} out of {questions.length}</strong></p>
        <div className="result-msg">
          {pct >= 80
            ? '🏆 Excellent! You are well-prepared for this exam topic.'
            : pct >= 70
            ? '📚 Good effort! Review the explanations below to strengthen your knowledge.'
            : '💪 Keep studying! Review all answers with rationale and retry.'}
        </div>
        <div className="result-buttons">
          <button className="btn btn-primary" onClick={() => setReviewMode(true)}>📖 Review All Answers</button>
          <button className="btn btn-green" onClick={startQuiz}>🔄 Retake Quiz</button>
          <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 Get Expert Help</a>
        </div>
        <style>{styles}</style>
      </div>
    )
  }

  if (showResult && reviewMode) {
    const q = questions[reviewIndex]
    const userAnswer = answers[reviewIndex]
    const isCorrect = userAnswer === q.correct
    return (
      <div className="quiz-review">
        <div className="review-nav">
          <span>Question {reviewIndex + 1} of {questions.length}</span>
          <span className={isCorrect ? 'correct-badge' : 'wrong-badge'}>{isCorrect ? '✅ Correct' : '❌ Incorrect'}</span>
        </div>
        <div className="quiz-question-text">{q.question}</div>
        <div className="quiz-options">
          {q.options.map((opt, i) => (
            <div key={i} className={`quiz-option review ${i === q.correct ? 'correct' : i === userAnswer && !isCorrect ? 'wrong' : ''}`}>
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
              {i === q.correct && <span className="opt-mark">✅</span>}
              {i === userAnswer && !isCorrect && <span className="opt-mark">❌</span>}
            </div>
          ))}
        </div>
        <div className="quiz-explanation">
          <strong>📚 Explanation:</strong> {q.explanation}
        </div>
        <div className="review-controls">
          <button className="btn btn-outline btn-sm" onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))} disabled={reviewIndex === 0}>← Previous</button>
          {reviewIndex < questions.length - 1
            ? <button className="btn btn-primary btn-sm" onClick={() => setReviewIndex(reviewIndex + 1)}>Next →</button>
            : <button className="btn btn-green btn-sm" onClick={() => setReviewMode(false)}>📊 See Score</button>}
        </div>
        <style>{styles}</style>
      </div>
    )
  }

  const q = questions[current]
  const answeredCount = answers.filter(a => a !== null).length

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress-info">
          <span>Question {current + 1}/{questions.length}</span>
          <span>{answeredCount} answered</span>
        </div>
        <div className={`quiz-timer ${timeLeft < 60 ? 'urgent' : timeLeft < 180 ? 'warning' : ''}`}>
          ⏱️ {mins}:{secs.toString().padStart(2,'0')}
        </div>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{width: `${((current + 1) / questions.length) * 100}%`}}/>
      </div>

      <div className="quiz-question-text">{q.question}</div>

      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (selected !== null) {
            if (i === q.correct) cls += ' correct'
            else if (i === selected && selected !== q.correct) cls += ' wrong'
          } else if (answers[current] === i) cls += ' selected'
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={selected !== null}>
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className={`quiz-feedback ${selected === q.correct ? 'correct-fb' : 'wrong-fb'}`}>
          <strong>{selected === q.correct ? '✅ Correct!' : `❌ Incorrect. Correct answer: ${String.fromCharCode(65 + q.correct)}`}</strong>
          <p>{q.explanation}</p>
        </div>
      )}

      <div className="quiz-controls">
        <button className="btn btn-sm" onClick={handlePrev} disabled={current === 0} style={{background:'var(--border)',color:'var(--text)'}}>← Prev</button>
        <button className="btn btn-primary btn-sm" onClick={handleNext}>
          {current === questions.length - 1 ? 'Submit Quiz 🎯' : 'Next →'}
        </button>
      </div>

      <div className="quiz-dots">
        {questions.map((_, i) => (
          <button key={i}
            className={`quiz-dot ${i === current ? 'current' : answers[i] !== null ? (answers[i] === questions[i].correct ? 'correct' : 'wrong') : ''}`}
            onClick={() => { setCurrent(i); setSelected(answers[i]) }}
            aria-label={`Question ${i+1}`}
          />
        ))}
      </div>
      <style>{styles}</style>
    </div>
  )
}

const styles = `
.quiz-start-screen,.quiz-result,.quiz-review,.quiz-container{background:var(--white);border:1.5px solid var(--border);border-radius:var(--radius-lg);padding:36px;max-width:820px;margin:0 auto}
.quiz-icon{font-size:48px;text-align:center;margin-bottom:12px}
.quiz-start-screen h2,.quiz-result h2{font-family:var(--font-heading);color:var(--jungle-dark);font-size:24px;text-align:center;margin-bottom:8px}
.quiz-course{text-align:center;color:var(--jungle-green);font-weight:700;margin-bottom:16px}
.quiz-meta{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
.quiz-meta span{background:var(--jungle-xlight);color:var(--jungle-green);padding:6px 14px;border-radius:50px;font-size:13px;font-weight:700}
.quiz-desc{text-align:center;color:var(--text-light);font-size:15px;margin-bottom:24px}
.quiz-start-screen .btn,.quiz-result .btn{display:block;margin:8px auto;max-width:280px;justify-content:center}
.quiz-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.quiz-progress-info{font-size:13px;color:var(--text-light);font-weight:600}
.quiz-timer{font-size:16px;font-weight:800;color:var(--jungle-green);background:var(--jungle-xlight);padding:6px 14px;border-radius:50px}
.quiz-timer.warning{color:#d97706;background:#fef3c7}
.quiz-timer.urgent{color:#dc2626;background:#fee2e2;animation:pulse 1s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}
.quiz-progress-bar{height:6px;background:var(--border);border-radius:3px;margin-bottom:24px;overflow:hidden}
.quiz-progress-fill{height:100%;background:linear-gradient(90deg,var(--jungle-green),var(--jungle-light));border-radius:3px;transition:width 0.3s}
.quiz-question-text{font-size:17px;font-weight:600;color:var(--jungle-dark);line-height:1.5;margin-bottom:20px;padding:16px;background:var(--off-white);border-radius:var(--radius);border-left:4px solid var(--jungle-green)}
.quiz-options{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
.quiz-option{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border:2px solid var(--border);border-radius:var(--radius);background:var(--white);cursor:pointer;font-size:15px;text-align:left;transition:all 0.18s;width:100%}
.quiz-option:hover:not(:disabled){border-color:var(--jungle-green);background:var(--jungle-xlight)}
.quiz-option.selected{border-color:var(--jungle-green);background:var(--jungle-xlight)}
.quiz-option.correct{border-color:#16a34a;background:#dcfce7;color:#15803d}
.quiz-option.wrong{border-color:#dc2626;background:#fee2e2;color:#dc2626}
.quiz-option.review.correct{border-color:#16a34a;background:#dcfce7}
.quiz-option.review.wrong{border-color:#dc2626;background:#fee2e2}
.opt-letter{width:28px;height:28px;border-radius:50%;background:var(--jungle-green);color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0}
.quiz-option.correct .opt-letter{background:#16a34a}
.quiz-option.wrong .opt-letter{background:#dc2626}
.opt-mark{margin-left:auto;font-size:18px;flex-shrink:0}
.quiz-feedback{padding:16px;border-radius:var(--radius);margin-bottom:16px;font-size:14px;line-height:1.6}
.correct-fb{background:#dcfce7;border:1px solid #16a34a;color:#15803d}
.wrong-fb{background:#fee2e2;border:1px solid #dc2626;color:#7f1d1d}
.quiz-feedback p{margin-top:8px;color:inherit}
.quiz-controls{display:flex;gap:12px;justify-content:flex-end;margin-bottom:16px}
.quiz-dots{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding-top:12px;border-top:1px solid var(--border)}
.quiz-dot{width:28px;height:28px;border-radius:50%;background:var(--border);border:none;cursor:pointer;transition:all 0.15s;font-size:0}
.quiz-dot.current{background:var(--jungle-green);transform:scale(1.2)}
.quiz-dot.correct{background:#16a34a}
.quiz-dot.wrong{background:#dc2626}
.result-circle{width:130px;height:130px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto 20px;border:6px solid}
.result-circle.pass{border-color:#16a34a;background:#dcfce7}
.result-circle.near{border-color:#d97706;background:#fef3c7}
.result-circle.fail{border-color:#dc2626;background:#fee2e2}
.result-pct{font-family:var(--font-heading);font-size:32px;font-weight:900;line-height:1}
.result-label{font-size:13px;font-weight:700}
.result-score{text-align:center;font-size:17px;margin-bottom:12px}
.result-msg{background:var(--off-white);border-radius:var(--radius);padding:14px;text-align:center;margin-bottom:20px;font-size:15px}
.result-buttons{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.review-nav{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.correct-badge{background:#dcfce7;color:#15803d;padding:4px 12px;border-radius:50px;font-size:13px;font-weight:700}
.wrong-badge{background:#fee2e2;color:#dc2626;padding:4px 12px;border-radius:50px;font-size:13px;font-weight:700}
.quiz-explanation{background:var(--jungle-xlight);border-left:4px solid var(--jungle-green);padding:16px;border-radius:var(--radius);margin:16px 0;font-size:14px;line-height:1.7;color:var(--jungle-dark)}
.review-controls{display:flex;gap:12px;justify-content:center}
`
