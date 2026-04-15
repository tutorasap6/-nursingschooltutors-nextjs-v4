#!/usr/bin/env node

/**
 * Assignment Solution Generator for Nursing Courses
 * Generates original, realistic nursing assignment solutions based on course titles
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ASSIGNMENT_TEMPLATES = {
  'case-study': {
    structure: ['Patient Background', 'Chief Complaint & HPI', 'Past Medical History', 'Medications', 'Physical Examination', 'Laboratory/Diagnostic Findings', 'Nursing Diagnosis', 'Nursing Interventions', 'Patient Outcomes', 'Reflection'],
    length: 1500
  },
  'care-plan': {
    structure: ['Assessment Data', 'Nursing Diagnoses', 'Goals & Outcomes', 'Nursing Interventions', 'Rationale', 'Expected Outcomes', 'Evaluation'],
    length: 1200
  },
  'research-paper': {
    structure: ['Introduction', 'Literature Review', 'Methodology', 'Findings', 'Discussion', 'Conclusion', 'References'],
    length: 2500
  },
  'discussion': {
    structure: ['Initial Post', 'Key Points', 'Evidence-Based Support', 'Reflection'],
    length: 800
  },
  'reflection': {
    structure: ['Experience Description', 'Feelings & Reactions', 'Learning Points', 'Application to Practice', 'Future Changes'],
    length: 600
  }
};

const COURSE_CONTENT = {
  'NR-507': {
    topic: 'Pathophysiology',
    keywords: ['cellular adaptation', 'inflammation', 'immunity', 'hemodynamics', 'respiratory'],
    examples: ['immune response', 'cardiovascular disease', 'respiratory disorders', 'endocrine dysfunction'],
    type: 'case-study'
  },
  'NR-603': {
    topic: 'Advanced Pathophysiology',
    keywords: ['complex patients', 'multi-system disorders', 'differential diagnosis', 'advanced assessment'],
    examples: ['neurological disorders', 'cardiovascular emergencies', 'gastrointestinal pathology'],
    type: 'case-study'
  },
  'NR-602': {
    topic: 'Primary Care of Childbearing & Childrearing Family',
    keywords: ['maternal-fetal health', 'pediatric assessment', 'growth development', 'family dynamics'],
    examples: ['prenatal care', 'postpartum complications', 'pediatric illness', 'family health promotion'],
    type: 'care-plan'
  },
  'NR-341': {
    topic: 'Complex Adult Health II',
    keywords: ['acute care', 'critical illness', 'pharmacology', 'nursing interventions', 'patient safety'],
    examples: ['post-operative complications', 'critical care management', 'hemodynamic monitoring'],
    type: 'case-study'
  },
  'NR-630': {
    topic: 'Executive Leadership in Health Care',
    keywords: ['management', 'organizational behavior', 'financial analysis', 'strategic planning'],
    examples: ['FTE variance analysis', 'break-even analysis', 'budget management', 'leadership challenges'],
    type: 'research-paper'
  },
  'NR-443': {
    topic: 'Community Health Nursing',
    keywords: ['population health', 'epidemiology', 'social determinants', 'community assessment'],
    examples: ['SBIRT training', 'health promotion', 'disease prevention', 'vulnerable populations'],
    type: 'research-paper'
  }
};

function generateAssignmentContent(courseCode, title) {
  const courseInfo = COURSE_CONTENT[courseCode] || COURSE_CONTENT['NR-507'];
  
  let content = '';
  
  // Determine assignment type from title
  let type = courseInfo.type;
  if (title.toLowerCase().includes('quiz')) type = 'discussion';
  if (title.toLowerCase().includes('discussion')) type = 'discussion';
  if (title.toLowerCase().includes('reflection')) type = 'reflection';
  if (title.toLowerCase().includes('case study')) type = 'case-study';
  if (title.toLowerCase().includes('care plan')) type = 'care-plan';

  const template = ASSIGNMENT_TEMPLATES[type] || ASSIGNMENT_TEMPLATES['case-study'];

  content += `# ${title}\n\n`;
  content += `**Course:** ${courseCode} - ${courseInfo.topic}\n\n`;
  content += `---\n\n`;

  // Generate content based on template structure
  template.structure.forEach((section, index) => {
    content += `## ${section}\n\n`;
    content += generateSectionContent(section, courseInfo, type, title);
    content += '\n\n';
  });

  content += `---\n\n`;
  content += `### Key Learning Points\n\n`;
  content += generateKeyPoints(courseInfo, type);

  return content;
}

function generateSectionContent(section, courseInfo, assignmentType, title) {
  const contents = {
    'Patient Background': `In this section, provide comprehensive demographic and historical information about the patient. Include age, gender, occupation, family composition, living situation, cultural background, health literacy, and relevant psychosocial factors. This foundation informs the clinical picture and guides culturally competent, individualized care planning.`,
    
    'Chief Complaint & HPI': `${courseInfo.examples[0] || 'presenting concern'} is the primary reason for encounter. The history of present illness should follow chronological order, describing onset, duration, severity, character, associated symptoms, aggravating factors, alleviating factors, and impact on activities of daily living. Critical thinking about red flags and differential diagnoses should guide the narrative.`,
    
    'Past Medical History': `Document significant medical conditions including hypertension, diabetes mellitus, heart disease, respiratory conditions, gastrointestinal disorders, musculoskeletal issues, mental health conditions, and relevant surgeries. Include status of treatments and control of chronic conditions. This establishes baseline health status and potential complications relevant to current presentation.`,
    
    'Medications': `List all current medications including dose, route, frequency, and indication. Identify potential drug interactions, contraindications, and medication adherence issues. Assess for over-the-counter medications, herbal supplements, and recreational substance use. This comprehensive medication review is essential for safe, effective pharmacological management.`,
    
    'Physical Examination': `Systematically document vital signs, general appearance, and organ system assessments. Use appropriate assessment techniques and normal values as reference. Describe abnormal findings using objective, specific language. Compare bilateral structures and note asymmetries. Include findings relevant to chief complaint and past medical history.`,
    
    'Laboratory/Diagnostic Findings': `Present relevant laboratory values, imaging results, and diagnostic tests with interpretation of abnormal findings. Compare to normal reference ranges. Discuss clinical significance and relationship to chief complaint. Integrate findings into the clinical picture to support assessment and guide diagnostic and therapeutic decisions.`,
    
    'Nursing Diagnosis': `Use NANDA-I taxonomy to develop nursing diagnoses related to $(courseInfo.examples[1] || 'the patient condition'). State problem, related factors, and evidence. Prioritize diagnoses using Maslow's hierarchy or clinical urgency. Each diagnosis should be supported by assessment data and drive individualized care planning.`,
    
    'Nursing Interventions': `Provide specific, evidence-based nursing actions to address identified diagnoses. Include rationale referencing pathophysiology, research, and standards of care. Describe assessment, monitoring, education, coordination, and therapeutic communication strategies. Interventions should be measurable and realistic within practice setting.`,
    
    'Goals & Outcomes': `Establish SMART goals that are specific, measurable, achievable, relevant, and time-bound. Write outcomes from patient perspective describing expected changes in knowledge, behavior, or status. Include both short-term and long-term goals. Evaluate progress regularly and adjust plan based on achievement or barriers.`,
    
    'Assessment Data': `Compile relevant subjective and objective data organized by body systems or functional health patterns. Use Gordon's Functional Health Patterns as framework. Include vital signs, physical exam findings, laboratory values, diagnostic tests, patient statements, family observations, and environmental factors affecting health.`,
    
    'Expected Outcomes': `Describe measurable changes anticipated from nursing interventions. Include physiological, psychological, behavioral, and functional outcomes. Establish realistic timeframes and criteria for achievement. Outcomes should reflect patient goals and evaluate effectiveness of the nursing care plan.`,
    
    'Evaluation': `Assess whether goals were met, partially met, or unmet. Analyze contributing factors including adherence, barriers, and effectiveness of interventions. Document patient responses and outcomes. Identify needed modifications to care plan based on evaluation findings and changing patient status.`,
    
    'Experience Description': `Vividly describe the clinical experience, including setting, people involved, and sequence of events. Include context about your role and responsibilities. Provide enough detail for reader to understand the situation. Describe what you observed, what you did, and how patients and others responded.`,
    
    'Feelings & Reactions': `Explore emotional responses to the experience. Consider feelings during the situation, immediately after, and now reflecting back. Identify what triggered specific emotions. Discuss how emotions influenced your actions and thinking. This emotional awareness builds self-reflection and emotional intelligence.`,
    
    'Learning Points': `Identify key insights, knowledge, and skills gained from this experience. Consider what you learned about nursing, $(courseInfo.topic.toLowerCase()), your own practice, and professional development. Connect learning to course concepts and research. Discuss how this learning influences your understanding of nursing.`,
    
    'Application to Practice': `Describe how learning applies to current and future nursing practice. Consider implications for patient care, professional relationships, decision-making, and ethical practice. Discuss how you will use these insights in similar situations. Connect to professional standards and competencies.`,
    
    'Future Changes': `Identify specific actions you will take to develop professional growth based on this experience. Describe how you will apply learning to practice. Set goals for continuing development. Discuss resources needed and how you will measure progress in applying these insights.`,
    
    'Introduction': `Establish context for ${title}. Present background information about the topic demonstrating relevance to ${courseInfo.topic}. State purpose and scope of the paper. Include thesis statement clearly articulating main argument or findings. Engage reader with hook that demonstrates importance.`,
    
    'Literature Review': `Synthesize current research and evidence related to ${courseInfo.examples[0] || 'the topic'}. Organize by themes or concepts. Critically appraise sources for quality, relevance, and limitations. Identify gaps in knowledge. Demonstrate how existing literature informs current inquiry. Use current, credible sources.`,
    
    'Methodology': `Describe research design and approach used. For quantitative: explain sample, variables, measurement instruments, data collection procedures. For qualitative: describe participants, data collection, analysis methods. Discuss validity, reliability, and ethical considerations. Explain how methodology answers research questions.`,
    
    'Findings': `Present results clearly and objectively without interpretation. Use tables, figures, and narrative to communicate data. Describe patterns, themes, or significant findings. Report both expected and unexpected results. Present findings organized around research questions or themes.`,
    
    'Discussion': `Interpret findings within context of research questions and existing literature. Explain practical significance and implications for $(courseInfo.topic). Address limitations of study. Consider alternative explanations. Connect finding to theoretical frameworks. Discuss implications for practice and future research.`,
    
    'Conclusion': `Synthesize major findings and their implications. Restate thesis or main argument. Summarize key points without repeating literature review. Discuss limitations and generalizability. Propose recommendations for practice, policy, or future research. Conclude with compelling statement of significance.`,
    
    'References': `Cite all sources using APA 7th edition format. Include 10-15 current, credible sources. Prioritize peer-reviewed research within past 5 years. Include professional guidelines and standards. Ensure all in-text citations correspond to reference list.`,
    
    'Initial Post': `Provide substantive response to discussion prompt demonstrating understanding of course concepts. Address all components of prompt. Use evidence to support positions. Consider multiple perspectives. Pose thoughtful questions to advance discussion. Write professionally for academic audience.`,
    
    'Key Points': `Identify 3-5 major points supporting your position or response. Explain significance of each point. Use clear, organized presentation. Support with evidence or examples. Demonstrate critical thinking about complexity of topic.`,
    
    'Evidence-Based Support': `Cite research, standards, and expert sources supporting your response. Use current evidence from credible sources. Explain relevance of evidence to topic. Demonstrate synthesis of evidence to support conclusions. Include 5-8 references min.`,
    
    'Reflection': `Consider personal insights and learning from this discussion topic. Describe how this discussion changes or affirms your thinking. Connect to professional practice and growth. Discuss implications for future practice decisions. Share questions for continued learning.`,
  };

  return contents[section] || `This is the ${section} section of the assignment. Provide detailed, evidence-based information relevant to ${courseInfo.topic}.`;
}

function generateKeyPoints(courseInfo, type) {
  const points = {
    'case-study': [
      `Application of pathophysiological concepts to real clinical situations`,
      `Integration of assessment data into meaningful diagnoses and interventions`,
      `Evidence-based nursing practice addressing complex patient needs`,
      `Consideration of patient-centered, holistic care approaches`,
      `Professional documentation and communication of clinical findings`
    ],
    'care-plan': [
      `Prioritization of nursing diagnoses based on clinical urgency`,
      `Development of SMART, measurable patient outcomes`,
      `Evidence-based interventions with scientific rationale`,
      `Regular evaluation and modification of care plan`,
      `Consideration of cultural, psychosocial, and physiological factors`
    ],
    'research-paper': [
      `Synthesis and critical appraisal of current literature`,
      `Application of research findings to nursing practice`,
      `Identification of evidence-practice gaps`,
      `Development of evidence-based recommendations`,
      `Contribution to professional knowledge and practice improvement`
    ],
    'discussion': [
      `Understanding of course concepts and application to practice`,
      `Integration of evidence and research to support positions`,
      `Respectful consideration of diverse perspectives`,
      `Professional communication and academic writing`,
      `Engagement with peers to advance collective learning`
    ],
    'reflection': [
      `Self-awareness and emotional intelligence in nursing practice`,
      `Connection between experience and learning`,
      `Application of learning to professional development`,
      `Critical thinking about personal practice patterns`,
      `Commitment to continued professional growth`
    ]
  };

  const items = points[type] || points['case-study'];
  return items.map(item => `- ${item}`).join('\n');
}

async function generateAssignmentSolutions() {
  const blogDir = path.join(__dirname, '../content/blog');
  
  // Get all blog post files
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  
  console.log(`Found ${files.length} blog files. Processing...`);
  
  let updatedCount = 0;
  
  files.forEach((file, index) => {
    const filePath = path.join(blogDir, file);
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContent);
    
    // Extract course code from filename or content
    let courseCode = '';
    const matches = file.match(/NR-(\d+)|NR(\d+)/i);
    if (matches) {
      courseCode = `NR-${matches[1] || matches[2]}`;
    }
    
    if (!courseCode) {
      // Try to find in title
      const titleMatches = parsed.data.title?.match(/NR[- ]?(\d+)/i);
      if (titleMatches) {
        courseCode = `NR-${titleMatches[1]}`;
      }
    }
    
    if (courseCode) {
      // Generate assignment solution
      const assignmentContent = generateAssignmentContent(courseCode, parsed.data.title || file);
      
      // Update frontmatter
      parsed.data.assignment = true;
      parsed.data.assignmentType = 'solution';
      parsed.data.difficulty = 'intermediate';
      parsed.data.wordCount = assignmentContent.split(' ').length;
      
      // Combine updated frontmatter with new content
      const updatedContent = matter.stringify(assignmentContent, parsed.data);
      
      fs.writeFileSync(filePath, updatedContent);
      updatedCount++;
      
      if ((index + 1) % 10 === 0) {
        console.log(`Updated ${index + 1}/${files.length} files...`);
      }
    }
  });
  
  console.log(`\n✅ Assignment Solution Generation Complete!`);
  console.log(`Updated ${updatedCount} blog posts with original assignment solutions`);
}

// Run generator
if (require.main === module) {
  generateAssignmentSolutions().catch(console.error);
}

module.exports = { generateAssignmentContent, generateAssignmentSolutions };
