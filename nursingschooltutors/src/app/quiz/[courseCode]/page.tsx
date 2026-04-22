'use client';

import { useEffect, useState } from 'react';
import { Quiz } from '@/components/QuizSystem';
import type { ReactNode } from 'react';

interface PageProps {
  params: {
    courseCode: string;
  };
}

export default function QuizPage({ params }: PageProps) {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const response = await fetch(`/quiz-data/${params.courseCode}.json`);
        if (!response.ok) {
          throw new Error(`Quiz not found for course ${params.courseCode}`);
        }
        const data = await response.json();
        setQuizData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadQuizData();
  }, [params.courseCode]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}>
        <div style={{
          textAlign: 'center',
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #667eea',
            borderTop: '4px solid transparent',
            borderRadius: '50%',
            margin: '0 auto 20px',
            animation: 'spin 1s linear infinite',
          }} />
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Loading quiz...</p>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
      }}>
        <div style={{
          textAlign: 'center',
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          maxWidth: '500px',
        }}>
          <h1 style={{ color: '#ef4444', fontSize: '2rem', margin: '0 0 15px 0' }}>
            ⚠️ Quiz Not Found
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem', margin: 0 }}>
            {error}
          </p>
          <button
            onClick={() => window.history.back()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
            }}
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return quizData ? <Quiz quizData={quizData} /> : null;
}
