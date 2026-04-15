# NursingSchoolTutors Quiz & Assignment System

## Overview

This document describes the comprehensive quiz and assignment solution system integrated into the NursingSchoolTutors Next.js blog.

## Features

### 1. **Interactive Quiz System** 🎯
- **React-based Quiz Component** with Quizlet-style interface
- **30+ Questions per course** in multiple-choice format
- **Immediate Feedback** with explanations for each answer
- **Score Tracking** with percentage and correct/incorrect counts
- **Question Navigator** for easy navigation between questions
- **Status Indicators** showing answer status (correct/incorrect/unanswered)
- **Retake Capability** for unlimited practice attempts
- **Passing Score Requirements** (typically 75%)
- **Comprehensive Results Page** with detailed review of all answers

### 2. **Original Assignment Solutions** 📚
- **773 Blog Posts Updated** with original, realistic assignment content
- **Multiple Assignment Types**:
  - Case Studies with patient assessments and care plans
  - Research Papers with literature reviews and recommendations
  - Care Plans following NANDA-I taxonomy
  - Discussion Posts with evidence-based analysis
  - Reflection Assignments with personal learning integration
- **600-1000 Word Count** per assignment (as requested)
- **Evidence-Based Content** referencing nursing standards and research
- **Authentic Formatting** matching actual course requirements

### 3. **Quiz Links on Blog Posts** 🔗
- **169 Quiz-Related Blog Posts** with integrated quiz buttons
- **Easy Access** to practice quizzes directly from assignment pages
- **Visual Quiz Buttons** with course codes and difficulty levels

## Project Structure

```
nursingschooltutors/
├── src/
│   ├── app/
│   │   ├── quiz/
│   │   │   ├── page.tsx              # Quiz landing/index page
│   │   │   ├── [courseCode]/
│   │   │   │   └── page.tsx          # Individual quiz pages
│   │   └── ...
│   └── components/
│       └── QuizSystem/
│           ├── Quiz.tsx               # Main quiz component
│           ├── quiz.css               # Styling
│           └── index.ts               # Exports
├── public/
│   └── quiz-data/
│       ├── NR-507.json               # Pathophysiology quiz
│       ├── NR-603.json               # Advanced Pathophysiology quiz
│       ├── NR-341.json               # Complex Adult Health quiz
│       └── ...                        # Additional quizzes
├── scripts/
│   ├── generate-assignments.js       # Assignment solution generator
│   └── update-quiz-links.js          # Quiz link updater
├── content/
│   └── blog/
│       └── *.md                       # Updated blog posts with solutions
└── package.json
```

## Available Quizzes

### NR-507: Pathophysiology
- **Total Questions**: 35
- **Passing Score**: 75%
- **Difficulty**: Medium-Hard
- **Topics**: Inflammation, Immunity, Hemodynamics, Respiratory, Renal Function
- **Access**: `/quiz/NR-507`

### NR-603: Advanced Pathophysiology for Primary Care
- **Total Questions**: 38
- **Passing Score**: 75%
- **Difficulty**: Hard
- **Topics**: Neurological, Cardiovascular, Gastrointestinal, Endocrine, Sleep Disorders
- **Access**: `/quiz/NR-603`

### NR-341: Complex Adult Health II
- **Total Questions**: 40
- **Passing Score**: 75%
- **Difficulty**: Medium-Hard
- **Topics**: Acute Care, Critical Illness, Post-op Complications, Pharmacology
- **Access**: `/quiz/NR-341`

## Using the Quiz System

### For Students

1. **Visit Quiz Page**: Navigate to `/quiz` to see all available quizzes
2. **Select Course**: Click on the course code button to start a quiz
3. **Read Instructions**: Review quiz guidelines and start when ready
4. **Answer Questions**: Select answers and see immediate feedback
5. **Review Results**: View final score and detailed answer explanations
6. **Retake**: Practice unlimited times to improve your score

### For Instructors/Administrators

#### Adding New Quizzes

1. **Create Quiz Data File**: Add JSON file to `public/quiz-data/`

```json
{
  "courseCode": "NR-XXX",
  "courseName": "Course Name",
  "week": 1,
  "totalQuestions": 30,
  "passingScore": 75,
  "questions": [
    {
      "id": 1,
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Why this answer is correct...",
      "difficulty": "medium"
    }
  ]
}
```

2. **Quiz Route**: Automatically available at `/quiz/NR-XXX`

#### Adding Quiz Links to Blog Posts

Run the quiz link updater script:

```bash
node scripts/update-quiz-links.js
```

This automatically detects quiz-related blog posts and adds practice buttons.

#### Generating Assignment Solutions

Run the assignment generator script:

```bash
node scripts/generate-assignments.js
```

This generates original assignment content for all blog posts matching course codes.

## Quiz Component API

### Props

```typescript
interface Quiz {
  quizData: QuizData;
}

interface QuizData {
  courseCode: string;
  courseName: string;
  week?: number;
  totalQuestions: number;
  passingScore: number;
  questions: QuizQuestion[];
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}
```

### States

- **Not Started**: Quiz intro screen with instructions
- **In Progress**: Question display with options
- **Answered**: Show feedback and option to reveal explanation
- **Completed**: Results page with score and review

## Styling Features

### Color Scheme
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Darker Purple)
- Success: `#22c55e` (Green)
- Error: `#ef4444` (Red)

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 480px
- Touch-friendly button sizes
- Readable font sizes on all devices

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- High contrast colors
- Readable font families

## Blog Post Integration

### Automatic Quiz Links

Any blog post with titles containing keywords is automatically updated:

```markdown
[📝 Start Quiz for NR-XXX](/quiz/NR-XXX)
```

Keywords: `quiz`, `exam`, `test`, `assessment`, `study guide`

### Assignment Solutions

Original assignment content is injected into frontmatter:

```yaml
---
assignment: true
assignmentType: solution
difficulty: intermediate
wordCount: 850
---
```

## Performance Considerations

- **Lazy Loading**: Quiz components load on demand
- **Static Pre-rendering**: Quiz pages are statically generated where possible
- **Client-side Rendering**: Quiz interactions happen client-side for responsiveness
- **JSON Data**: Quiz questions stored as JSON for fast parsing

## Future Enhancements

- [ ] Quiz progress persistence (localStorage)
- [ ] User accounts and score history
- [ ] Timed quizzes with countdown timer
- [ ] Question bank randomization
- [ ] Difficulty level filtering
- [ ] Quiz categories and subsets
- [ ] Analytics dashboard for instructors
- [ ] Certificate generation on passing
- [ ] Mobile app version
- [ ] Video explanations for difficult questions

## Deployment

### Netlify Deployment

The Next.js app automatically deploys to Netlify with:

```toml
[build]
command = "npm run build"
functions = "netlify/functions"

[[redirects]]
from = "/quiz/*"
to = "/quiz/[courseCode]"
status = 200
```

### Build & Deploy

```bash
# Build locally
npm run build

# Deploy
git push origin main  # Triggers Netlify deploy
```

## Troubleshooting

### Quiz Not Loading
- Check quiz-data JSON exists at `/public/quiz-data/NR-XXX.json`
- Verify JSON syntax with `npm run lint`
- Clear browser cache

### Styling Issues
- Verify `quiz.css` is imported in component
- Check CSS classes match component markup
- Test in different browsers

### Assignment Content Not Appearing
- Run generator script: `node scripts/generate-assignments.js`
- Verify frontmatter is properly formatted
- Check blog post markdown is valid

## Support & Contributing

For questions or to add new quizzes:
1. Create new quiz JSON in `public/quiz-data/`
2. Add course info to generator scripts
3. Test quiz before deployment
4. Submit pull request with changes

## License

All quiz content and assignments are original, created specifically for NursingSchoolTutors educational purposes.

---

**Last Updated**: April 2026
**Total Quizzes**: 3+ courses
**Total Updated Assignments**: 773
**Total Quiz-linked Posts**: 169
