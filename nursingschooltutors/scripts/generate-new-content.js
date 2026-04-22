const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogDir = path.join(__dirname, '..', 'content', 'blog');
const quizDataDir = path.join(__dirname, '..', 'public', 'quiz-data');
const quizPagePath = path.join(__dirname, '..', 'src', 'app', 'quiz', 'page.tsx');

// Ensure quiz data dir exists
if (!fs.existsSync(quizDataDir)) {
  fs.mkdirSync(quizDataDir, { recursive: true });
}

// Function to check if it's an exam/quiz
function isExamQuiz(filename, title) {
  const lower = (filename + ' ' + title).toLowerCase();
  return lower.includes('exam') || lower.includes('quiz') || lower.includes('test') || lower.includes('assessment') || lower.includes('midterm') || lower.includes('final') || lower.includes('hesi') || lower.includes('ati') || lower.includes('vati') || lower.includes('exit') || lower.includes('comprehensive');
}

// Function to generate quiz data
function generateQuizData(title, courseCode) {
  // Extract topic from title
  const topic = title.replace(/^(.*?)quiz|exam/i, '').trim();
  // Generate 30-50 questions based on topic
  const numQuestions = Math.floor(Math.random() * 21) + 30; // 30-50
  const questions = [];
  for (let i = 0; i < numQuestions; i++) {
    // Generate question based on nursing topics
    const question = generateQuestion(topic, i);
    questions.push(question);
  }
  return {
    courseCode,
    courseName: title,
    questions
  };
}

// Simple question generator
function generateQuestion(topic, index) {
  // This is a placeholder; in reality, use more sophisticated generation
  const options = ['A', 'B', 'C', 'D'];
  const correct = options[Math.floor(Math.random() * 4)];
  return {
    question: `Question ${index + 1} about ${topic}: What is the correct answer?`,
    options: {
      A: 'Option A',
      B: 'Option B',
      C: 'Option C',
      D: 'Option D'
    },
    correctAnswer: correct,
    explanation: `The correct answer is ${correct} because... (detailed explanation)`,
    difficulty: 'Medium'
  };
}

// Function to generate blog content
function generateBlogContent(title) {
  return `# ${title}

This is a comprehensive guide to ${title}. Learn everything you need to know about this nursing topic.

## Introduction

[Content about the topic]

## Key Concepts

- Point 1
- Point 2

## Conclusion

Get help with your nursing assignments at NursingSchoolTutors.com
`;
}

// Read all files
fs.readdir(blogDir, (err, files) => {
  if (err) throw err;
  const quizEntries = [];
  files.filter(f => f.endsWith('.md')).forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    const title = parsed.data.title;
    const slug = file.replace('.md', '');
    if (isExamQuiz(file, title)) {
      // Generate quiz
      const courseCode = slug;
      const quizData = generateQuizData(title, courseCode);
      fs.writeFileSync(path.join(quizDataDir, `${courseCode}.json`), JSON.stringify(quizData, null, 2));
      quizEntries.push({
        code: courseCode,
        name: title,
        description: `Practice quiz for ${title}`,
        totalQuestions: quizData.questions.length,
        passingScore: 75,
        difficulty: 'Medium',
        topics: [title.split(' ')[0]] // rough
      });
      // Update .md content
      const newContent = `---
${Object.entries(parsed.data).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}
---

# ${title}

Prepare for your ${title} with our interactive quiz practice.

## About This Exam

This quiz covers key concepts for ${title}.

## Take the Interactive Quiz

[Take Quiz](/quiz/${courseCode})

Get detailed explanations and track your progress.
`;
      fs.writeFileSync(filePath, newContent);
    } else {
      // Generate blog content
      const newBody = generateBlogContent(title);
      const newContent = `---
${Object.entries(parsed.data).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}
---

${newBody}
`;
      fs.writeFileSync(filePath, newContent);
    }
  });

  // Update quiz page
  let quizPageContent = fs.readFileSync(quizPagePath, 'utf8');
  // Find AVAILABLE_QUIZZES and replace
  const quizList = JSON.stringify(quizEntries, null, 2);
  quizPageContent = quizPageContent.replace(/const AVAILABLE_QUIZZES = \[[\s\S]*?\];/, `const AVAILABLE_QUIZZES = ${quizList};`);
  fs.writeFileSync(quizPagePath, quizPageContent);
});