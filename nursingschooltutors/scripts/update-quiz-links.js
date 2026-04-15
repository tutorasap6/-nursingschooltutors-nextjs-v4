#!/usr/bin/env node

/**
 * Quiz Link Updater for Blog Posts
 * Automatically adds quiz links to blog posts based on course code
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const QUIZ_KEYWORDS = ['quiz', 'exam', 'test', 'assessment', 'study guide'];

function shouldAddQuizLink(title) {
  return QUIZ_KEYWORDS.some(keyword => title.toLowerCase().includes(keyword));
}

function extractCourseCode(filename, title) {
  // Try filename first
  let match = filename.match(/NR[- ]?(\d+)/i);
  if (match) {
    return `NR-${match[1]}`;
  }
  
  // Try title
  match = title.match(/NR[- ]?(\d+)/i);
  if (match) {
    return `NR-${match[1]}`;
  }
  
  return null;
}

function generateQuizButton(courseCode) {
  return `
## 📚 Practice Quiz

Test your knowledge with our interactive quiz for ${courseCode}. Features:
- **30+ Questions** covering key concepts
- **Immediate Feedback** with explanations
- **Score Report** showing your performance
- **Retake Anytime** to improve your score

[📝 Start Quiz for ${courseCode}](/quiz/${courseCode})

---
`;
}

async function updateBlogPostsWithQuizLinks() {
  const blogDir = path.join(__dirname, '../content/blog');
  
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  
  console.log(`Found ${files.length} blog files. Searching for quiz-related posts...`);
  
  let updatedCount = 0;
  
  files.forEach((file, index) => {
    const filePath = path.join(blogDir, file);
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContent);
    
    if (shouldAddQuizLink(parsed.data.title)) {
      const courseCode = extractCourseCode(file, parsed.data.title);
      
      if (courseCode) {
        // Check if quiz link already exists
        if (!fileContent.includes(`/quiz/${courseCode}`)) {
          const quizButton = generateQuizButton(courseCode);
          
          // Add quiz link before any "See more" or final sections
          let updatedBody = parsed.content;
          if (!updatedBody.endsWith('\n\n')) {
            updatedBody += '\n\n';
          }
          updatedBody += quizButton;
          
          // Update frontmatter
          parsed.data.hasQuiz = true;
          parsed.data.quizCode = courseCode;
          
          const updatedContent = matter.stringify(updatedBody, parsed.data);
          fs.writeFileSync(filePath, updatedContent);
          
          updatedCount++;
          console.log(`✓ Added quiz link to: ${file}`);
        }
      }
    }
    
    if ((index + 1) % 50 === 0) {
      console.log(`Processed ${index + 1}/${files.length} files...`);
    }
  });
  
  console.log(`\n✅ Quiz Link Update Complete!`);
  console.log(`Added quiz links to ${updatedCount} blog posts`);
}

// Run updater
if (require.main === module) {
  updateBlogPostsWithQuizLinks().catch(console.error);
}

module.exports = { shouldAddQuizLink, extractCourseCode, updateBlogPostsWithQuizLinks };
