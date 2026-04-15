'use client';

import Link from 'next/link';

const AVAILABLE_QUIZZES = [
  {
    code: 'NR-507',
    name: 'Pathophysiology',
    description: 'Test your knowledge of cellular adaptation, inflammation, hemodynamics, and physiological responses to disease.',
    totalQuestions: 35,
    passingScore: 75,
    difficulty: 'Medium-Hard',
    topics: ['Inflammation', 'Immunity', 'Hemodynamics', 'Respiratory', 'Renal Function']
  },
  {
    code: 'NR-603',
    name: 'Advanced Pathophysiology for Primary Care',
    description: 'Complex case-based questions covering advanced pathophysiology concepts for clinical decision-making.',
    totalQuestions: 38,
    passingScore: 75,
    difficulty: 'Hard',
    topics: ['Neurological', 'Cardiovascular', 'Gastrointestinal', 'Endocrine', 'Sleep Disorders']
  },
  {
    code: 'NR-341',
    name: 'Complex Adult Health II',
    description: 'Critical care and acute nursing management scenarios with focus on patient safety and clinical judgment.',
    totalQuestions: 40,
    passingScore: 75,
    difficulty: 'Medium-Hard',
    topics: ['Acute Care', 'Critical Illness', 'Post-op Complications', 'Pharmacology', 'Hemodynamic Monitoring']
  }
];

export default function QuizzesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f7fa', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: 700 }}>
            📚 Interactive Nursing Quizzes
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95, marginBottom: '10px' }}>
            Practice with realistic exam-style questions to master your nursing courses
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.85 }}>
            Immediate feedback • Detailed explanations • Score tracking • Unlimited retakes
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          How Our Quizzes Work
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              icon: '📝',
              title: 'Multiple Choice Questions',
              desc: 'Answer carefully crafted questions designed to test your understanding'
            },
            {
              icon: '⚡',
              title: 'Instant Feedback',
              desc: 'Get immediate results showing right/wrong answers with explanations'
            },
            {
              icon: '📊',
              title: 'Performance Tracking',
              desc: 'See your score, percentage, and areas needing improvement'
            },
            {
              icon: '🔄',
              title: 'Unlimited Retakes',
              desc: 'Practice as many times as you want to master the material'
            }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Quizzes */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Available Quizzes
        </h2>
        <div style={{
          display: 'grid',
          gap: '25px'
        }}>
          {AVAILABLE_QUIZZES.map((quiz) => (
            <div key={quiz.code} style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center',
              gap: '30px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              {/* Left - Course Code */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '40px 30px',
                textAlign: 'center',
                minWidth: '150px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>{quiz.code}</div>
              </div>

              {/* Middle - Content */}
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '10px' }}>
                  {quiz.name}
                </h3>
                <p style={{ color: '#666', marginBottom: '15px', lineHeight: 1.6 }}>
                  {quiz.description}
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Total Questions</span>
                    <div style={{ color: '#667eea', fontWeight: 600 }}>{quiz.totalQuestions}</div>
                  </div>
                  <div>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Passing Score</span>
                    <div style={{ color: '#667eea', fontWeight: 600 }}>{quiz.passingScore}%</div>
                  </div>
                  <div>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Difficulty</span>
                    <div style={{ color: '#667eea', fontWeight: 600 }}>{quiz.difficulty}</div>
                  </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <span style={{ color: '#999', fontSize: '0.9rem' }}>Topics Covered:</span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {quiz.topics.map((topic) => (
                      <span key={topic} style={{
                        background: '#f0f4ff',
                        color: '#667eea',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - CTA Button */}
              <div>
                <Link href={`/quiz/${quiz.code}`}>
                  <button style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    Start Quiz →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Quiz Tips for Success
        </h2>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Read each question carefully and consider all options before answering',
              'After answering, review the explanation to understand the rationale',
              'Retake quizzes to reinforce learning and improve your score',
              'Note topics where you scored lower and study them more deeply',
              'Use quizzes as a study tool to supplement course materials and textbooks',
              'Take quizzes in a quiet environment to minimize distractions',
              'Aim to understand WHY answers are correct, not just memorize'
            ].map((tip, idx) => (
              <li key={idx} style={{
                padding: '15px 0',
                borderBottom: idx < 6 ? '1px solid #eee' : 'none',
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '1.5rem' }}>✓</span>
                <span style={{ color: '#555', lineHeight: 1.6 }}>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to Master Your Course?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.95 }}>
          Choose a quiz above and start practicing now. Unlimited access with instant feedback!
        </p>
        <Link href="/blog">
          <button style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginRight: '15px'
          }}>
            ← Back to Blog
          </button>
        </Link>
      </section>
    </main>
  );
}
