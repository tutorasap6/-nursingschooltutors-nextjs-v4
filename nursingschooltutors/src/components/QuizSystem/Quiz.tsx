'use client';

import React, { useState, useEffect } from 'react';
import './quiz.css';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface QuizData {
  courseCode: string;
  courseName: string;
  week?: number;
  totalQuestions: number;
  passingScore: number;
  questions: QuizQuestion[];
}

interface Props {
  quizData: QuizData;
}

export default function Quiz({ quizData }: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizData.questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestionIndex] !== null;
  const isCorrect =
    selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer;
  const allAnswered = selectedAnswers.every((answer) => answer !== null);
  const finalScore = selectedAnswers.filter(
    (answer, index) =>
      answer === quizData.questions[index].correctAnswer
  ).length;
  const passedQuiz = finalScore >= Math.ceil((quizData.passingScore / 100) * quizData.questions.length);

  const handleAnswer = (optionIndex: number) => {
    if (!answered) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestionIndex] = optionIndex;
      setSelectedAnswers(newAnswers);
      setAnswered(true);
      setShowExplanation(false);

      if (optionIndex === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(false);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswered(false);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers(new Array(quizData.questions.length).fill(null));
    setShowResults(false);
    setAnswered(false);
    setQuizStarted(false);
    setShowExplanation(false);
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  if (!quizStarted) {
    return (
      <div className="quiz-intro">
        <div className="intro-card">
          <h1>{quizData.courseName}</h1>
          <p className="course-code">{quizData.courseCode}</p>
          {quizData.week && <p className="week-info">Week {quizData.week}</p>}
          
          <div className="quiz-info">
            <div className="info-item">
              <span className="info-label">Total Questions:</span>
              <span className="info-value">{quizData.totalQuestions}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Passing Score:</span>
              <span className="info-value">{quizData.passingScore}%</span>
            </div>
            <div className="info-item">
              <span className="info-label">Format:</span>
              <span className="info-value">Multiple Choice</span>
            </div>
          </div>

          <div className="quiz-instructions">
            <h3>Instructions:</h3>
            <ul>
              <li>Read each question carefully</li>
              <li>Select the best answer from the four options</li>
              <li>You can review your answers after submission</li>
              <li>Your score and detailed explanations will be provided</li>
              <li>Pass the quiz to get a certificate of completion</li>
            </ul>
          </div>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => setQuizStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((finalScore / quizData.questions.length) * 100);

    return (
      <div className="quiz-results">
        <div className="results-card">
          <div className={`score-circle ${passedQuiz ? 'passed' : 'failed'}`}>
            <div className="score-text">
              <span className="score-number">{percentage}%</span>
              <span className="score-label">{finalScore}/{quizData.questions.length}</span>
            </div>
          </div>

          <h2>{passedQuiz ? '🎉 Congratulations!' : 'Keep Practicing!'}</h2>
          <p className="result-message">
            {passedQuiz
              ? `You passed the ${quizData.courseCode} quiz! You answered ${finalScore} out of ${quizData.questions.length} questions correctly.`
              : `You scored ${percentage}%. You need ${quizData.passingScore}% to pass. Review the explanations below and try again!`}
          </p>

          <div className="results-summary">
            <div className="summary-item">
              <span className="summary-label">Correct Answers:</span>
              <span className="summary-value correct">{finalScore}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Incorrect Answers:</span>
              <span className="summary-value incorrect">
                {quizData.questions.length - finalScore}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Status:</span>
              <span className={`summary-value ${passedQuiz ? 'passed' : 'failed'}`}>
                {passedQuiz ? 'PASSED ✓' : 'FAILED ✗'}
              </span>
            </div>
          </div>

          <div className="results-review">
            <h3>Question Review</h3>
            <div className="review-list">
              {quizData.questions.map((question, index) => (
                <div
                  key={index}
                  className={`review-item ${
                    selectedAnswers[index] === question.correctAnswer
                      ? 'correct'
                      : 'incorrect'
                  }`}
                >
                  <div className="review-header">
                    <span className="review-number">Q{index + 1}</span>
                    <span className="review-status">
                      {selectedAnswers[index] === question.correctAnswer
                        ? '✓ Correct'
                        : '✗ Incorrect'}
                    </span>
                  </div>
                  <p className="review-question">{question.question}</p>
                  <div className="review-answers">
                    <p>
                      <strong>Your Answer:</strong>{' '}
                      {question.options[selectedAnswers[index]!]}
                    </p>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <p>
                        <strong>Correct Answer:</strong>{' '}
                        {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className="review-explanation">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="results-actions">
            <button className="btn btn-primary" onClick={handleRestart}>
              📚 Retake Quiz
            </button>
            <button className="btn btn-secondary" onClick={() => window.history.back()}>
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="header-left">
          <h2>{quizData.courseCode}</h2>
          <p>{quizData.courseName}</p>
        </div>
        <div className="header-right">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </span>
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-card">
          <div className="question-header">
            <h3 className="question-text">{currentQuestion.question}</h3>
            <span className={`difficulty difficulty-${currentQuestion.difficulty}`}>
              {currentQuestion.difficulty.toUpperCase()}
            </span>
          </div>

          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? isCorrect
                      ? 'selected correct'
                      : 'selected incorrect'
                    : ''
                } ${
                  answered &&
                  index === currentQuestion.correctAnswer &&
                  selectedAnswers[currentQuestionIndex] !== index
                    ? 'correct-answer'
                    : ''
                }`}
                onClick={() => handleAnswer(index)}
                disabled={answered}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
                {answered && index === currentQuestion.correctAnswer && (
                  <span className="option-icon">✓</span>
                )}
                {answered &&
                  selectedAnswers[currentQuestionIndex] === index &&
                  !isCorrect && <span className="option-icon">✗</span>}
              </button>
            ))}
          </div>

          {answered && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              <p>
                {isCorrect ? '✓ Correct!' : '✗ Incorrect!'}
              </p>
              <button
                className="btn-explanation"
                onClick={() => setShowExplanation(!showExplanation)}
              >
                {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
              </button>
              {showExplanation && (
                <p className="explanation-text">{currentQuestion.explanation}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="quiz-footer">
        <button
          className="btn btn-secondary"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </button>

        <div className="button-group">
          {currentQuestionIndex === quizData.questions.length - 1 ? (
            <button
              className="btn btn-primary"
              onClick={handleSubmitQuiz}
              disabled={!allAnswered}
            >
              Submit Quiz
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={!answered}
            >
              Next →
            </button>
          )}
        </div>

        <div className="question-navigator">
          {quizData.questions.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${
                index === currentQuestionIndex ? 'active' : ''
              } ${
                selectedAnswers[index] !== null
                  ? selectedAnswers[index] ===
                    quizData.questions[index].correctAnswer
                    ? 'answered-correct'
                    : 'answered-incorrect'
                  : ''
              }`}
              onClick={() => {
                setCurrentQuestionIndex(index);
                setAnswered(false);
                setShowExplanation(false);
              }}
              title={`Question ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
