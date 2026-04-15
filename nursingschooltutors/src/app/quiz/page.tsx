'use client';

import Link from 'next/link';

const AVAILABLE_QUIZZES = [
  {
    "code": "(free-answer)-nr-507-week-6-td-and-quiz",
    "name": "Free Answer) NR 507 Week 6 TD and Quiz",
    "description": "Practice quiz for Free Answer) NR 507 Week 6 TD and Quiz",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "-nr-341-quiz-1-exam",
    "name": "NR 341 Quiz 1 EXAM",
    "description": "Practice quiz for NR 341 Quiz 1 EXAM",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "-nr-566-week-7-presentation",
    "name": "NR 566 Week 7 Presentation",
    "description": "Practice quiz for NR 566 Week 7 Presentation",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "-nr-nr-305-fnp-application-essay",
    "name": "NR NR 305 FNP application essay",
    "description": "Practice quiz for NR NR 305 FNP application essay",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "-nr-nr-534-week-7-business-plan-final",
    "name": "NR NR 534 Week 7 Business Plan Final",
    "description": "Practice quiz for NR NR 534 Week 7 Business Plan Final",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "-nr-nr-603-course-pulmonary-case-presentation-for-week-2",
    "name": "NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "description": "Practice quiz for NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "-nr-nr507-week-2-quiz-2-study-guide",
    "name": "NR NR507 Week 2 Quiz 2 Study Guide",
    "description": "Practice quiz for NR NR507 Week 2 Quiz 2 Study Guide",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "2019-hesi-exit-v2-",
    "name": "2019 HESI EXIT V2",
    "description": "Practice quiz for 2019 HESI EXIT V2",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "2019"
    ]
  },
  {
    "code": "2019-hesi-exit-v2",
    "name": "2019 HESI EXIT V2",
    "description": "Practice quiz for 2019 HESI EXIT V2",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "2019"
    ]
  },
  {
    "code": "2019-hesi-rn-exit-v1-v2v3v4v-5-and-v8-complete-exams-2023-versions",
    "name": "2019 HESI RN EXIT V1 ,V2,V3,V4,V 5 AND V8 Complete Exams 2023 Versions",
    "description": "Practice quiz for 2019 HESI RN EXIT V1 ,V2,V3,V4,V 5 AND V8 Complete Exams 2023 Versions",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "2019"
    ]
  },
  {
    "code": "2024-25-hesi-exit-v3-",
    "name": "2024-25 HESI EXIT V3",
    "description": "Practice quiz for 2024-25 HESI EXIT V3",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "2024-25"
    ]
  },
  {
    "code": "2024-25-hesi-exit-v3",
    "name": "2024-25 HESI EXIT V3",
    "description": "Practice quiz for 2024-25 HESI EXIT V3",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "2024-25"
    ]
  },
  {
    "code": "503-nursing-midterm-study-guide",
    "name": "503 Nursing Midterm Study Guide",
    "description": "Practice quiz for 503 Nursing Midterm Study Guide",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "503"
    ]
  },
  {
    "code": "507-week-5-assignment-alterations-in-neurobiological-function",
    "name": "507 Week 5 Assignment Alterations in Neurobiological Function",
    "description": "Practice quiz for 507 Week 5 Assignment Alterations in Neurobiological Function",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "507"
    ]
  },
  {
    "code": "510-organizational-behavior-and-business-influences-and-advanced-practice-nursin",
    "name": "510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "description": "Practice quiz for 510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "510"
    ]
  },
  {
    "code": "510-organizational-behavior-and-business-influences-and-advanced-practice-nursing",
    "name": "510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "description": "Practice quiz for 510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "510"
    ]
  },
  {
    "code": "510-week-1-introduction-presentation-and-practicum-process-assignment",
    "name": "510 Week 1 Introduction Presentation and Practicum Process Assignment",
    "description": "Practice quiz for 510 Week 1 Introduction Presentation and Practicum Process Assignment",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "510"
    ]
  },
  {
    "code": "532-week-3-collaboration-caf%C3%A9-organizational-project-planning-nr",
    "name": "Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "description": "Practice quiz for Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "599-week-1-2-week-2-2-nursing-informatics-theory",
    "name": "599 Week 1 2 Week 2 2 Nursing Informatics theory",
    "description": "Practice quiz for 599 Week 1 2 Week 2 2 Nursing Informatics theory",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "599"
    ]
  },
  {
    "code": "addressing-the-toxic-work-environment-and-patient-safety-concerns-nr-506",
    "name": "Addressing the Toxic Work Environment and Patient Safety Concerns NR 506",
    "description": "Practice quiz for Addressing the Toxic Work Environment and Patient Safety Concerns NR 506",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Addressing"
    ]
  },
  {
    "code": "advanaced-patho-unit-4-quiz-mn551-",
    "name": "Advanaced Patho Unit 4 Quiz MN551",
    "description": "Practice quiz for Advanaced Patho Unit 4 Quiz MN551",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanaced"
    ]
  },
  {
    "code": "advanaced-patho-unit-4-quiz-mn551",
    "name": "Advanaced Patho Unit 4 Quiz MN551",
    "description": "Practice quiz for Advanaced Patho Unit 4 Quiz MN551",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanaced"
    ]
  },
  {
    "code": "advanced-communication-in-systems-leadership-nr534",
    "name": "Advanced Communication in Systems Leadership NR534",
    "description": "Practice quiz for Advanced Communication in Systems Leadership NR534",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanced"
    ]
  },
  {
    "code": "ah2-quiz-answers-cardiovascular-quiz-answers",
    "name": "AH2 Quiz Answers Cardiovascular quiz answers",
    "description": "Practice quiz for AH2 Quiz Answers Cardiovascular quiz answers",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "AH2"
    ]
  },
  {
    "code": "answered-midterm-study-guide-nr-599-informatics",
    "name": "Answered Midterm Study Guide NR 599 Informatics",
    "description": "Practice quiz for Answered Midterm Study Guide NR 599 Informatics",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered"
    ]
  },
  {
    "code": "answered-nr-507-week-4-midterm-exam",
    "name": "Answered NR 507 Week 4 Midterm Exam",
    "description": "Practice quiz for Answered NR 507 Week 4 Midterm Exam",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered"
    ]
  },
  {
    "code": "answered-nr-534-collaboration-cafe",
    "name": "Answered NR 534 Collaboration Cafe",
    "description": "Practice quiz for Answered NR 534 Collaboration Cafe",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered"
    ]
  },
  {
    "code": "answered-nr542-capstone-simulation-questions",
    "name": "Answered NR542 Capstone Simulation Questions",
    "description": "Practice quiz for Answered NR542 Capstone Simulation Questions",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered"
    ]
  },
  {
    "code": "answered-nr599-final-exam-study-guide",
    "name": "Answered NR599 final exam study guide",
    "description": "Practice quiz for Answered NR599 final exam study guide",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered"
    ]
  },
  {
    "code": "ati-rn-comprehensive-exit-exam-flashcards-2",
    "name": "ATI RN COMPREHENSIVE EXIT EXAM Flashcards 2",
    "description": "Practice quiz for ATI RN COMPREHENSIVE EXIT EXAM Flashcards 2",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ATI"
    ]
  },
  {
    "code": "ati-rn-comprehensive-exit-exam-flashcards",
    "name": "ATI RN COMPREHENSIVE EXIT EXAM Flashcards",
    "description": "Practice quiz for ATI RN COMPREHENSIVE EXIT EXAM Flashcards",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ATI"
    ]
  },
  {
    "code": "ati-teas-assistance-from-nursingschooltutors.com",
    "name": "ATI TEAS Assistance from NursingSchoolTutors.com",
    "description": "Practice quiz for ATI TEAS Assistance from NursingSchoolTutors.com",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ATI"
    ]
  },
  {
    "code": "ati-teas-assistance-from-nursingschooltutorscom",
    "name": "ATI TEAS Assistance from NursingSchoolTutors.com",
    "description": "Practice quiz for ATI TEAS Assistance from NursingSchoolTutors.com",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ATI"
    ]
  },
  {
    "code": "ati-teas-exam-help-from-nursingschooltutors.com",
    "name": "ATI TEAS Exam Help from NursingSchoolTutors.com",
    "description": "Practice quiz for ATI TEAS Exam Help from NursingSchoolTutors.com",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ATI"
    ]
  },
  {
    "code": "ati-teas-exam-help-from-nursingschooltutorscom",
    "name": "ATI TEAS Exam Help from NursingSchoolTutors.com",
    "description": "Practice quiz for ATI TEAS Exam Help from NursingSchoolTutors.com",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ATI"
    ]
  },
  {
    "code": "capstone-simulation-paper-nr452",
    "name": "CAPSTONE SIMULATION PAPER NR452",
    "description": "Practice quiz for CAPSTONE SIMULATION PAPER NR452",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CAPSTONE"
    ]
  },
  {
    "code": "chamberlain-final-nr452-ccnpr-guidelines",
    "name": "Chamberlain FINAL NR452 CCNPR Guidelines",
    "description": "Practice quiz for Chamberlain FINAL NR452 CCNPR Guidelines",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chamberlain"
    ]
  },
  {
    "code": "chamberlain-virtual-ati-student-checklist-nr452",
    "name": "Chamberlain Virtual ATI Student Checklist NR452",
    "description": "Practice quiz for Chamberlain Virtual ATI Student Checklist NR452",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chamberlain"
    ]
  },
  {
    "code": "chapter-01-prescriptive-authority-and-role-implementation-tradition-vs-change",
    "name": "Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "description": "Practice quiz for Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chapter"
    ]
  },
  {
    "code": "chapter-01-prescriptive-authority-and-role-implementation-tradition-vs.-change",
    "name": "Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "description": "Practice quiz for Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chapter"
    ]
  },
  {
    "code": "clinical-learning-direct-patient-care-documentation-",
    "name": "Clinical Learning – Direct Patient Care Documentation",
    "description": "Practice quiz for Clinical Learning – Direct Patient Care Documentation",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Clinical"
    ]
  },
  {
    "code": "clinical-learning-direct-patient-care-documentation",
    "name": "Clinical Learning – Direct Patient Care Documentation",
    "description": "Practice quiz for Clinical Learning – Direct Patient Care Documentation",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Clinical"
    ]
  },
  {
    "code": "community-health-nr-442-test-matrix-for-exam-2",
    "name": "Community Health NR 442 Test Matrix for Exam 2",
    "description": "Practice quiz for Community Health NR 442 Test Matrix for Exam 2",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Community"
    ]
  },
  {
    "code": "comprehensive-retake-2020-nr-504",
    "name": "Comprehensive Retake 2020 NR 504",
    "description": "Practice quiz for Comprehensive Retake 2020 NR 504",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Comprehensive"
    ]
  },
  {
    "code": "concept-map-draft-population-health-and-epidemiology-chamberlain-college",
    "name": "Concept Map Draft Population Health and Epidemiology Chamberlain College",
    "description": "Practice quiz for Concept Map Draft Population Health and Epidemiology Chamberlain College",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Concept"
    ]
  },
  {
    "code": "critical-appraisal-of-the-lexicomp-medical-application-nr599",
    "name": "Critical Appraisal of the Lexicomp Medical Application NR599",
    "description": "Practice quiz for Critical Appraisal of the Lexicomp Medical Application NR599",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Critical"
    ]
  },
  {
    "code": "critique-of-systematic-research-review-",
    "name": "Critique of Systematic Research Review",
    "description": "Practice quiz for Critique of Systematic Research Review",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Critique"
    ]
  },
  {
    "code": "critique-of-systematic-research-review",
    "name": "Critique of Systematic Research Review",
    "description": "Practice quiz for Critique of Systematic Research Review",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Critique"
    ]
  },
  {
    "code": "decreasing-surgical-site-infections-to-improve-patient-outcomes",
    "name": "Decreasing Surgical Site Infections to Improve Patient Outcomes",
    "description": "Practice quiz for Decreasing Surgical Site Infections to Improve Patient Outcomes",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Decreasing"
    ]
  },
  {
    "code": "depression-management-in-primary-care-presentation-nr-566",
    "name": "Depression Management in Primary Care Presentation NR 566",
    "description": "Practice quiz for Depression Management in Primary Care Presentation NR 566",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Depression"
    ]
  },
  {
    "code": "direct-care-project-part-1-assessment-and-diagnosis",
    "name": "DIRECT CARE PROJECT PART 1 ASSESSMENT AND DIAGNOSIS",
    "description": "Practice quiz for DIRECT CARE PROJECT PART 1 ASSESSMENT AND DIAGNOSIS",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "DIRECT"
    ]
  },
  {
    "code": "dr-thompson-nr-566-final-exam-review-week-5",
    "name": "Dr Thompson NR 566 Final Exam Review Week 5",
    "description": "Practice quiz for Dr Thompson NR 566 Final Exam Review Week 5",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Dr"
    ]
  },
  {
    "code": "education-and-empathy-5-of-5-",
    "name": "Education and Empathy 5 of 5",
    "description": "Practice quiz for Education and Empathy 5 of 5",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Education"
    ]
  },
  {
    "code": "education-and-empathy-5-of-5",
    "name": "Education and  Empathy 5 of 5",
    "description": "Practice quiz for Education and  Empathy 5 of 5",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Education"
    ]
  },
  {
    "code": "ensuring-client-confidentiality-during-documentation-nr452",
    "name": "Ensuring Client Confidentiality During Documentation NR452",
    "description": "Practice quiz for Ensuring Client Confidentiality During Documentation NR452",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Ensuring"
    ]
  },
  {
    "code": "entr-510-week-5-midterm-paper",
    "name": "Free Answer) ENTR 510 Week 5 Midterm Paper",
    "description": "Practice quiz for Free Answer) ENTR 510 Week 5 Midterm Paper",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "exam-1-focus-points-nr228-",
    "name": "Exam 1 Focus Points NR228",
    "description": "Practice quiz for Exam 1 Focus Points NR228",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Exam"
    ]
  },
  {
    "code": "exam-1-focus-points-nr228",
    "name": "Exam 1 Focus Points NR228",
    "description": "Practice quiz for Exam 1 Focus Points NR228",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Exam"
    ]
  },
  {
    "code": "exam-review-document-exam-3-nr-228-",
    "name": "Exam Review Document Exam 3 NR 228",
    "description": "Practice quiz for Exam Review Document Exam 3 NR 228",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Exam"
    ]
  },
  {
    "code": "exam-review-document-exam-3-nr-228",
    "name": "Exam Review Document Exam 3 NR 228",
    "description": "Practice quiz for Exam Review Document Exam 3 NR 228",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Exam"
    ]
  },
  {
    "code": "final-exam-nurs-6521n-55-advanced-pharmacology",
    "name": "FINAL EXAM NURS-6521N-55 Advanced Pharmacology",
    "description": "Practice quiz for FINAL EXAM NURS-6521N-55 Advanced Pharmacology",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "FINAL"
    ]
  },
  {
    "code": "final-exam-recap-nr-224",
    "name": "Final Exam Recap NR 224",
    "description": "Practice quiz for Final Exam Recap NR 224",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "final-exam-study-guide-chapters-111-nr228",
    "name": "FINAL EXAM STUDY GUIDE Chapters 111 NR228",
    "description": "Practice quiz for FINAL EXAM STUDY GUIDE Chapters 111 NR228",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "FINAL"
    ]
  },
  {
    "code": "final-exam-study-guide-nr601-",
    "name": "Final Exam Study Guide NR601",
    "description": "Practice quiz for Final Exam Study Guide NR601",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "final-exam-study-guide-nr601",
    "name": "Final Exam Study Guide NR601",
    "description": "Practice quiz for Final Exam Study Guide NR601",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "final-nr-228-presentation",
    "name": "Final NR 228 Presentation",
    "description": "Practice quiz for Final NR 228 Presentation",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "final-self-assessment-of-professional-competencies-week-1-week-8-nr-630-",
    "name": "Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "description": "Practice quiz for Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "final-self-assessment-of-professional-competencies-week-1-week-8-nr-630",
    "name": "Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "description": "Practice quiz for Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "final-study-guide-nr599",
    "name": "Final study guide NR599",
    "description": "Practice quiz for Final study guide NR599",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Final"
    ]
  },
  {
    "code": "free-answer-532-week-3-collaboration-caf-organizational-project-planning-nr",
    "name": "(Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "description": "Practice quiz for (Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-answered-nr-507-week-4-midterm-exam",
    "name": "(Free answer) Answered NR 507 Week 4 Midterm Exam",
    "description": "Practice quiz for (Free answer) Answered NR 507 Week 4 Midterm Exam",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-entr-510-week-5-midterm-paper",
    "name": "(Free Answer) ENTR 510 Week 5 Midterm Paper",
    "description": "Practice quiz for (Free Answer) ENTR 510 Week 5 Midterm Paper",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-entr-510-week-8-final-assignment",
    "name": "(Free Answer) ENTR 510 Week 8 Final Assignment",
    "description": "Practice quiz for (Free Answer) ENTR 510 Week 8 Final Assignment",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-healthcare-topic-debate-powerpoint-presentation-nr552",
    "name": "(Free Answer) Healthcare Topic Debate PowerPoint Presentation NR552",
    "description": "Practice quiz for (Free Answer) Healthcare Topic Debate PowerPoint Presentation NR552",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-math-225n-week-7-assignment-conducting-a-hypothesis-test",
    "name": "(Free Answer) MATH 225N Week 7 Assignment Conducting a Hypothesis Test",
    "description": "Practice quiz for (Free Answer) MATH 225N Week 7 Assignment Conducting a Hypothesis Test",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-507-week-6-td-and-quiz",
    "name": "(Free Answer) NR 507 Week 6 TD and Quiz",
    "description": "Practice quiz for (Free Answer) NR 507 Week 6 TD and Quiz",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-510-week-4-organizational-change-and-ethical-legal-influences",
    "name": "(Free Answer) NR 510 Week 4 Organizational Change and Ethical Legal Influences",
    "description": "Practice quiz for (Free Answer) NR 510 Week 4 Organizational Change and Ethical Legal Influences",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-nr-507-week-2-quiz-2",
    "name": "(Free answer)  NR NR 507 Week 2 Quiz 2",
    "description": "Practice quiz for (Free answer)  NR NR 507 Week 2 Quiz 2",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-nr-510-week-7-assignment-recorded-lace-presentation",
    "name": "(Free answer) NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "description": "Practice quiz for (Free answer) NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-nr507-midterm-review-nr507-mid-term-study-guide",
    "name": "(Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "description": "Practice quiz for (Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-nr507-midterm-review",
    "name": "(Free Answer) NR NR507 MIDTERM REVIEW",
    "description": "Practice quiz for (Free Answer) NR NR507 MIDTERM REVIEW",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-nr507-wk-2-quiz-2-study-guide-2",
    "name": "(Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "description": "Practice quiz for (Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr-nr525-week-1-apa-quiz-solutions",
    "name": "(Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "description": "Practice quiz for (Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr507-final-exam-study-guide-2",
    "name": "(Free Answer) NR507 Final exam Study Guide 2",
    "description": "Practice quiz for (Free Answer) NR507 Final exam Study Guide 2",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answer-nr507-week-3-quiz",
    "name": "(Free Answer) NR507 Week 3 Quiz",
    "description": "Practice quiz for (Free Answer) NR507 Week 3 Quiz",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answers-final-exam-study-guide-nr601",
    "name": "(Free Answers) Final Exam Study Guide NR601",
    "description": "Practice quiz for (Free Answers) Final Exam Study Guide NR601",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-4-midterm-exam-real-exam",
    "name": "(Free Answers) NR NR507 Week 4 Midterm Exam Real Exam",
    "description": "Practice quiz for (Free Answers) NR NR507 Week 4 Midterm Exam Real Exam",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-4-midterm-exam",
    "name": "(Free Answers) NR NR507 Week 4 Midterm Exam",
    "description": "Practice quiz for (Free Answers) NR NR507 Week 4 Midterm Exam",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-4-midterm-questions-and-answers",
    "name": "(Free Answers) NR NR507 Week 4 Midterm Questions and Answers",
    "description": "Practice quiz for (Free Answers) NR NR507 Week 4 Midterm Questions and Answers",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-8-final-exam",
    "name": "(Free Answers) NR NR507 Week 8 Final Exam",
    "description": "Practice quiz for (Free Answers) NR NR507 Week 8 Final Exam",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-answers-week-7-quiz-dementia-elder-abuse-delirium-nr601",
    "name": "(Free answers) WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "description": "Practice quiz for (Free answers) WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-nr-507-final-exam-study-guide-3",
    "name": "(Free) NR 507 Final Exam Study Guide 3",
    "description": "Practice quiz for (Free) NR 507 Final Exam Study Guide 3",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free)"
    ]
  },
  {
    "code": "free-solution-capstone-med-surg-assessment-nr601",
    "name": "(Free Solution) Capstone Med Surg Assessment NR601",
    "description": "Practice quiz for (Free Solution) Capstone Med Surg Assessment NR601",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-final-self-assessment-of-professional-competencies-week-1-week-8-n",
    "name": "(Free Solution) Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "description": "Practice quiz for (Free Solution) Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-nr-nr601-final-exam-study-guide",
    "name": "(Free Solution) NR NR601 Final Exam Study Guide",
    "description": "Practice quiz for (Free Solution) NR NR601 Final Exam Study Guide",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-nr-nr601-final-study-guide-questions",
    "name": "(Free Solution) NR NR601 final study guide questions",
    "description": "Practice quiz for (Free Solution) NR NR601 final study guide questions",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-nr-nr601-week-5-quiz",
    "name": "(Free Solution) NR NR601 WEEK 5 QUIZ",
    "description": "Practice quiz for (Free Solution) NR NR601 WEEK 5 QUIZ",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-nr-nr601-week-6-quiz",
    "name": "(Free Solution) NR NR601 WEEK 6 QUIZ",
    "description": "Practice quiz for (Free Solution) NR NR601 WEEK 6 QUIZ",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-nr601-final-exam-study-guide-week-5-glucose-metabolism-disorders",
    "name": "(Free Solution) NR601 FINAL EXAM STUDY GUIDE Week 5 Glucose metabolism disorders",
    "description": "Practice quiz for (Free Solution) NR601 FINAL EXAM STUDY GUIDE Week 5 Glucose metabolism disorders",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-nurs-fpx4900-odom-jonell-assessment2-1",
    "name": "(Free Solution) NURS FPX4900 Odom Jonell Assessment2 1",
    "description": "Practice quiz for (Free Solution) NURS FPX4900 Odom Jonell Assessment2 1",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-quiz-5-nr-601-mature-and-aging-adult",
    "name": "(Free Solution) Quiz 5 NR 601 MATURE AND AGING ADULT",
    "description": "Practice quiz for (Free Solution) Quiz 5 NR 601 MATURE AND AGING ADULT",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-sbirt-presentation-alcohol-and-its-impact-nr443",
    "name": "(Free Solution) SBIRT Presentation Alcohol and Its Impact NR443",
    "description": "Practice quiz for (Free Solution) SBIRT Presentation Alcohol and Its Impact NR443",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-the-rise-of-patient-sitters-the-financial-burden-on-organizations-",
    "name": "(Free Solution) The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "description": "Practice quiz for (Free Solution) The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-week-1-initial-self-assessment-of-professional-competencies-nr-630",
    "name": "(Free Solution) Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "description": "Practice quiz for (Free Solution) Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-week-2-assignment-direct-care-project-part-1-assessment-and-diagno",
    "name": "(Free Solution) Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "description": "Practice quiz for (Free Solution) Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-week-3-social-media-discussion-with-responses-population-health-pr",
    "name": "(Free Solution) Week 3 Social Media Discussion with Responses Population Health Problems",
    "description": "Practice quiz for (Free Solution) Week 3 Social Media Discussion with Responses Population Health Problems",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-week-4-assignment-check-in-direct-care-project-part-2-planning-the",
    "name": "(Free Solution) Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "description": "Practice quiz for (Free Solution) Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "free-solution-week-6-check-in-direct-care-project-part-3-presentation-delivery",
    "name": "(Free Solution) Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "description": "Practice quiz for (Free Solution) Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free"
    ]
  },
  {
    "code": "hesi-admission-assessment-exam-help-by-nursingschooltutors.com",
    "name": "HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "description": "Practice quiz for HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "hesi-admission-assessment-exam-help-by-nursingschooltutorscom",
    "name": "HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "description": "Practice quiz for HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "hesi-exam-2024-100-out-of-100",
    "name": "HESI exam 2024 100 out of 100",
    "description": "Practice quiz for HESI exam 2024 100 out of 100",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "hesi-exam-3-2024",
    "name": "HESI Exam 3 2024",
    "description": "Practice quiz for HESI Exam 3 2024",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "hesi-exam-4-2024-25",
    "name": "HESI Exam 4 2024-25",
    "description": "Practice quiz for HESI Exam 4 2024-25",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "hesi-exam-6-2024-26",
    "name": "HESI Exam 6 2024-26",
    "description": "Practice quiz for HESI Exam 6 2024-26",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "hesi-exam-practice-questions-2024",
    "name": "HESI Exam Practice Questions 2024",
    "description": "Practice quiz for HESI Exam Practice Questions 2024",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "HESI"
    ]
  },
  {
    "code": "how-to-pass-ati-teas-exam",
    "name": "How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "description": "Practice quiz for How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "How"
    ]
  },
  {
    "code": "how-to-pass-the-ati-teas-exam-in-2025-complete-study-guide",
    "name": "How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "description": "Practice quiz for How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "How"
    ]
  },
  {
    "code": "humor-health-promotion-sensitivity-to-each-patients-goals-values",
    "name": "Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "description": "Practice quiz for Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Humor"
    ]
  },
  {
    "code": "introduction-and-foundations-of-advanced-pharmacology",
    "name": "Introduction and Foundations of Advanced Pharmacology",
    "description": "Practice quiz for Introduction and Foundations of Advanced Pharmacology",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Introduction"
    ]
  },
  {
    "code": "leadership-community-vati-remediation-week-7-nr452-",
    "name": "Leadership Community VATI Remediation Week 7 NR452",
    "description": "Practice quiz for Leadership Community VATI Remediation Week 7 NR452",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Leadership"
    ]
  },
  {
    "code": "leadership-community-vati-remediation-week-7-nr452",
    "name": "Leadership Community VATI Remediation Week 7 NR452",
    "description": "Practice quiz for Leadership Community VATI Remediation Week 7 NR452",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Leadership"
    ]
  },
  {
    "code": "med-surg-pharm-remediation-nr452",
    "name": "MED SURG PHARM REMEDIATION NR452",
    "description": "Practice quiz for MED SURG PHARM REMEDIATION NR452",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "MED"
    ]
  },
  {
    "code": "mfa-case-presentation-study-for-week-7-nr602",
    "name": "MFA Case Presentation Study for Week 7 NR602",
    "description": "Practice quiz for MFA Case Presentation Study for Week 7 NR602",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "MFA"
    ]
  },
  {
    "code": "midterm-book-review-study-guide-nr-602",
    "name": "Midterm Book Review - Study Guide NR 602",
    "description": "Practice quiz for Midterm Book Review - Study Guide NR 602",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Midterm"
    ]
  },
  {
    "code": "midterm-book-review-study-guide-nr602",
    "name": "Midterm book review- study guide NR602",
    "description": "Practice quiz for Midterm book review- study guide NR602",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Midterm"
    ]
  },
  {
    "code": "midterm-exam-study-guide-nr511",
    "name": "Midterm Exam Study Guide NR511",
    "description": "Practice quiz for Midterm Exam Study Guide NR511",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Midterm"
    ]
  },
  {
    "code": "midterm-study-guide-for-nr-599-nursing-informatics",
    "name": "Midterm Study Guide for NR 599 Nursing Informatics",
    "description": "Practice quiz for Midterm Study Guide for NR 599 Nursing Informatics",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Midterm"
    ]
  },
  {
    "code": "midterm-study-guide-nr-599-informatics",
    "name": "Midterm Study Guide NR 599 Informatics",
    "description": "Practice quiz for Midterm Study Guide NR 599 Informatics",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Midterm"
    ]
  },
  {
    "code": "mindfulness-in-nursing-education-fixed-vs-growth-mindsets",
    "name": "Mindfulness in Nursing Education: Fixed vs. Growth Mindsets",
    "description": "Practice quiz for Mindfulness in Nursing Education: Fixed vs. Growth Mindsets",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Mindfulness"
    ]
  },
  {
    "code": "multi-client-simulation-student-instructions-nr-nr452",
    "name": "NR NR452 Multi Client Simulation: Student Instructions",
    "description": "Practice quiz for NR NR452 Multi Client Simulation: Student Instructions",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "new-nr-599-week-6-medical-application-critical-appraisal-guidelines",
    "name": "New NR 599 Week 6 Medical Application Critical Appraisal Guidelines",
    "description": "Practice quiz for New NR 599 Week 6 Medical Application Critical Appraisal Guidelines",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr-nr224-exam-3-study-guide",
    "name": "New NR NR224 Exam 3 Study Guide",
    "description": "Practice quiz for New NR NR224 Exam 3 Study Guide",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr103-week-4-ati-test-taking-skills-notes",
    "name": "New NR103 Week 4 ATI TEST TAKING SKILLS NOTES",
    "description": "Practice quiz for New NR103 Week 4 ATI TEST TAKING SKILLS NOTES",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr228-final-exam-study-guide-",
    "name": "New NR228 Final Exam Study Guide",
    "description": "Practice quiz for New NR228 Final Exam Study Guide",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr228-final-exam-study-guide",
    "name": "New NR228 Final Exam Study Guide",
    "description": "Practice quiz for New NR228 Final Exam Study Guide",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr393-w3-course-project-phase-2-conversation-",
    "name": "New NR393 W3 Course Project Phase 2 Conversation",
    "description": "Practice quiz for New NR393 W3 Course Project Phase 2 Conversation",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr393-w3-course-project-phase-2-conversation",
    "name": "New NR393 W3 Course Project Phase 2 Conversation",
    "description": "Practice quiz for New NR393 W3 Course Project Phase 2 Conversation",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "new-nr506np-week-4-assignment",
    "name": "NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "description": "Practice quiz for NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR506NP"
    ]
  },
  {
    "code": "new-vati-nclex-review-calendar",
    "name": "New VATI NCLEX Review Calendar",
    "description": "Practice quiz for New VATI NCLEX Review Calendar",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New"
    ]
  },
  {
    "code": "nr-103-perioperative-nursing-and-safety",
    "name": "NR 103 Perioperative Nursing and Safety",
    "description": "Practice quiz for NR 103 Perioperative Nursing and Safety",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-103-week-2-tutorial-preparation-activities-professional-identity-and-reflecti",
    "name": "NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "description": "Practice quiz for NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-103-week-2-tutorial-preparation-activities-professional-identity-and-reflection",
    "name": "NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "description": "Practice quiz for NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-103-week-3-ceap-assessment-chamberlain-college-of-nursing",
    "name": "NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "description": "Practice quiz for NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-103-week-3-chamberlain-early-assessment-program-ceap",
    "name": "NR 103 Week 3 Chamberlain Early Assessment Program (CEAP",
    "description": "Practice quiz for NR 103 Week 3 Chamberlain Early Assessment Program (CEAP",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-103-week-8-assignment-final-project-presentation",
    "name": "NR 103 Week 8 Assignment Final Project Presentation",
    "description": "Practice quiz for NR 103 Week 8 Assignment Final Project Presentation",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-103-week-8-final-project",
    "name": "NR 103 Week 8- final project",
    "description": "Practice quiz for NR 103 Week 8- final project",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-224-exam-3-study-guide",
    "name": "NR 224 Exam 3 Study Guide",
    "description": "Practice quiz for NR 224 Exam 3 Study Guide",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-305-health-assessment-at-chamberlain-college-of-nursing",
    "name": "NR 305 Health Assessment at Chamberlain College of Nursing",
    "description": "Practice quiz for NR 305 Health Assessment at Chamberlain College of Nursing",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-305-health-assessment-for-the-practicing-rn-online-class-help",
    "name": "NR-305: Health Assessment for the Practicing RN-Online class Help",
    "description": "Practice quiz for NR-305: Health Assessment for the Practicing RN-Online class Help",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR-305:"
    ]
  },
  {
    "code": "nr-341-ati-client-comfort-and-end-of-life-care-reflection-assignment",
    "name": "NR 341 ATI Client Comfort and End-of-life Care Reflection Assignment",
    "description": "Practice quiz for NR 341 ATI Client Comfort and End-of-life Care Reflection Assignment",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-ati-client-comfort-and-end-of-life-care-reflection.docx-",
    "name": "NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "description": "Practice quiz for NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-ati-client-comfort-and-end-of-life-care-reflectiondocx",
    "name": "NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "description": "Practice quiz for NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-case-study-exercise-dysrhythmia-interpretation-1",
    "name": "NR 341 Case Study Exercise: Dysrhythmia Interpretation 1",
    "description": "Practice quiz for NR 341 Case Study Exercise: Dysrhythmia Interpretation 1",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-complex-adult-health-exam-1-questions-with-rationales-2",
    "name": "NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "description": "Practice quiz for NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-complex-adult-health-exam-1-questions-with-rationales",
    "name": "NR 341 Complex Adult Health Exam 1 Questions with Rationales",
    "description": "Practice quiz for NR 341 Complex Adult Health Exam 1 Questions with Rationales",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-complex-adult-health-exam-1-questions-with-rationales2",
    "name": "NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "description": "Practice quiz for NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-exam-2-rok",
    "name": "NR 341 Exam 2 ROK",
    "description": "Practice quiz for NR 341 Exam 2 ROK",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-exam-view-ch0009-harding-11e-tb-lewis",
    "name": "NR 341 Exam View - CH0009 Harding 11e TB lewis",
    "description": "Practice quiz for NR 341 Exam View - CH0009 Harding 11e TB lewis",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-final-exam-with-100-correct-answers",
    "name": "Nr 341 - Final Exam with 100% correct Answers",
    "description": "Practice quiz for Nr 341 - Final Exam with 100% correct Answers",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nr"
    ]
  },
  {
    "code": "nr-341-final-paper-rua-for-nr-341",
    "name": "Nr 341 final paper - rua for nr 341",
    "description": "Practice quiz for Nr 341 final paper - rua for nr 341",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nr"
    ]
  },
  {
    "code": "nr-341-quiz-1-docx-chamberlain-college-of-nursing",
    "name": "Nr 341 Quiz 1 Docx Chamberlain College of Nursing",
    "description": "Practice quiz for Nr 341 Quiz 1 Docx Chamberlain College of Nursing",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nr"
    ]
  },
  {
    "code": "nr-341-quiz-1-exam-help",
    "name": "NR 341 Quiz 1 Exam Help",
    "description": "Practice quiz for NR 341 Quiz 1 Exam Help",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-quiz-1-exam",
    "name": "NR 341 Quiz 1 EXAM",
    "description": "Practice quiz for NR 341 Quiz 1 EXAM",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-341-quiz-1-version-4",
    "name": "NR 341 Quiz 1 version 4",
    "description": "Practice quiz for NR 341 Quiz 1 version 4",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-361-information-systems-healthcare-online-class-help",
    "name": "NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "description": "Practice quiz for NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-361-information-systems-in-healthcare-excelling-with-nursingschooltutorscom",
    "name": "NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "description": "Practice quiz for NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-390-wk3-nr393-course-project-phase-2-conversation-",
    "name": "NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "description": "Practice quiz for NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-390-wk3-nr393-course-project-phase-2-conversation",
    "name": "NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "description": "Practice quiz for NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-390-wk5-discussion-the-establishment-of-nursing-education-programs",
    "name": "NR 390 Wk5 Discussion The Establishment of Nursing Education Programs",
    "description": "Practice quiz for NR 390 Wk5 Discussion The Establishment of Nursing Education Programs",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-442-exam-2-matrix",
    "name": "NR 442 Exam 2 Matrix",
    "description": "Practice quiz for NR 442 Exam 2 Matrix",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-442-exam-2",
    "name": "NR 442 Exam 2",
    "description": "Practice quiz for NR 442 Exam 2",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-442-test-matrix-for-exam-2",
    "name": "NR 442 Test Matrix for Exam 2",
    "description": "Practice quiz for NR 442 Test Matrix for Exam 2",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-451-capstone-project-milestone-3-educating-staff-and-implementing-change",
    "name": "NR 451 Capstone Project Milestone 3 Educating Staff and Implementing Change",
    "description": "Practice quiz for NR 451 Capstone Project Milestone 3 Educating Staff and Implementing Change",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-451-capstone-week-3-powerpoint-presentation-",
    "name": "NR 451 Capstone Week 3 PowerPoint presentation",
    "description": "Practice quiz for NR 451 Capstone Week 3 PowerPoint presentation",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-451-capstone-week-3-powerpoint-presentation",
    "name": "NR 451 Capstone Week 3 PowerPoint presentation",
    "description": "Practice quiz for NR 451 Capstone Week 3 PowerPoint presentation",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-451-chamberlain-week-5-icare-improving-communication-and-collaboration-paper",
    "name": "NR 451 Chamberlain Week 5 iCARE Improving Communication and Collaboration Paper",
    "description": "Practice quiz for NR 451 Chamberlain Week 5 iCARE Improving Communication and Collaboration Paper",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-501-wk-5-discussion-analysis-and-application-of-a-nursing-model-theory",
    "name": "NR 501 Wk 5 Discussion Analysis and Application of a Nursing Model-Theory",
    "description": "Practice quiz for NR 501 Wk 5 Discussion Analysis and Application of a Nursing Model-Theory",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-503-epidemiology-midterm-questions-answers",
    "name": "NR 503 Epidemiology Midterm Questions Answers",
    "description": "Practice quiz for NR 503 Epidemiology Midterm Questions Answers",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-503-final-exam-nr-503-final-exam-study-guide",
    "name": "NR 503 FINAL EXAM NR 503 Final Exam Study Guide",
    "description": "Practice quiz for NR 503 FINAL EXAM NR 503 Final Exam Study Guide",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-503-population-health-epidemiology-",
    "name": "NR 503 Population Health Epidemiology",
    "description": "Practice quiz for NR 503 Population Health Epidemiology",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-503-population-health-epidemiology",
    "name": "NR 503 Population Health Epidemiology",
    "description": "Practice quiz for NR 503 Population Health Epidemiology",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-503-week-6-evaluation-of-epidemiological-problem-type-2-diabetes-mellitus",
    "name": "NR 503 Week 6 Evaluation of Epidemiological Problem Type 2 Diabetes Mellitus",
    "description": "Practice quiz for NR 503 Week 6 Evaluation of Epidemiological Problem Type 2 Diabetes Mellitus",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-504-week-8-synthesis-and-reflection-of-learning",
    "name": "NR 504 Week 8 Synthesis and Reflection of Learning",
    "description": "Practice quiz for NR 504 Week 8 Synthesis and Reflection of Learning",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-505-introduction-to-research-ethics-quiz-summary",
    "name": "NR 505 Introduction to Research Ethics Quiz Summary",
    "description": "Practice quiz for NR 505 Introduction to Research Ethics Quiz Summary",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-505-week-1-global-health-training-quiz",
    "name": "NR 505 Week 1 global health training quiz",
    "description": "Practice quiz for NR 505 Week 1 global health training quiz",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-505-week-5-research-literature-design-sampling-and-implementation-",
    "name": "NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "description": "Practice quiz for NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-505-week-5-research-literature-design-sampling-and-implementation",
    "name": "NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "description": "Practice quiz for NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-505-week-6-discussion-the-importance-of-research-ethics-and-federal-regulatio",
    "name": "NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "description": "Practice quiz for NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-505-week-6-discussion-the-importance-of-research-ethics-and-federal-regulations-in-biomedical-research",
    "name": "NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "description": "Practice quiz for NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-508-pharmacology-practice-quiz-2",
    "name": "NR 508 Pharmacology Practice Quiz 2",
    "description": "Practice quiz for NR 508 Pharmacology Practice Quiz 2",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-508-week-1-discussion-foundation-of-the-role-of-the-nurse-practitioner-",
    "name": "NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "description": "Practice quiz for NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-508-week-1-discussion-foundation-of-the-role-of-the-nurse-practitioner",
    "name": "NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "description": "Practice quiz for NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-immersion-physical-exam-summary",
    "name": "NR 509 Immersion Physical Exam Summary",
    "description": "Practice quiz for NR 509 Immersion Physical Exam Summary",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-immersion-physical-exam.docx.pdf-version-1",
    "name": "NR 509 Immersion Physical Exam.docx.pdf version 1",
    "description": "Practice quiz for NR 509 Immersion Physical Exam.docx.pdf version 1",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-immersion-physical-examdocxpdf-version-1",
    "name": "NR 509 Immersion Physical Exam.docx.pdf version 1",
    "description": "Practice quiz for NR 509 Immersion Physical Exam.docx.pdf version 1",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-midterm-study-guide",
    "name": "NR 509 Midterm Study Guide",
    "description": "Practice quiz for NR 509 Midterm Study Guide",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-shadow-health-pediatric-education-",
    "name": "NR 509 Shadow Health Pediatric Education",
    "description": "Practice quiz for NR 509 Shadow Health Pediatric Education",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-shadow-health-pediatric-education",
    "name": "NR 509 Shadow Health Pediatric Education",
    "description": "Practice quiz for NR 509 Shadow Health Pediatric Education",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-soap-note-week-2-respiratory-system-assessment",
    "name": "NR 509 SOAP Note Week 2 - Respiratory System Assessment",
    "description": "Practice quiz for NR 509 SOAP Note Week 2 - Respiratory System Assessment",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-1-health-history-and-physical-examination",
    "name": "NR 509 Week 1: Health History and Physical Examination",
    "description": "Practice quiz for NR 509 Week 1: Health History and Physical Examination",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-2-neurological-system-assessment",
    "name": "NR 509 Week 2: Neurological System Assessment",
    "description": "Practice quiz for NR 509 Week 2: Neurological System Assessment",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-2-quiz-review-revised",
    "name": "NR 509 Week 2 Quiz Review",
    "description": "Practice quiz for NR 509 Week 2 Quiz Review",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-2-quiz-review",
    "name": "NR 509 Week 2 Quiz Review",
    "description": "Practice quiz for NR 509 Week 2 Quiz Review",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-4-midweek-comprehension-quiz",
    "name": "NR 509 Week 4: Midweek Comprehension Quiz",
    "description": "Practice quiz for NR 509 Week 4: Midweek Comprehension Quiz",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-4-respiratory-system-assessment",
    "name": "NR 509 Week 4: Respiratory System Assessment",
    "description": "Practice quiz for NR 509 Week 4: Respiratory System Assessment",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-5-gastrointestinal-system-assessment",
    "name": "NR 509 Week 5: Gastrointestinal System Assessment",
    "description": "Practice quiz for NR 509 Week 5: Gastrointestinal System Assessment",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-6-alternative-writing-assignment-abdomen",
    "name": "NR 509 Week 6 Alternative Writing Assignment: Abdomen",
    "description": "Practice quiz for NR 509 Week 6 Alternative Writing Assignment: Abdomen",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-509-week-7-male-and-female-genitalia-and-breast-assessment",
    "name": "NR 509 Week 7: Male and Female Genitalia and Breast Assessment",
    "description": "Practice quiz for NR 509 Week 7: Male and Female Genitalia and Breast Assessment",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-cpg-htn-presentation",
    "name": "NR 511 CPG HTN Presentation",
    "description": "Practice quiz for NR 511 CPG HTN Presentation",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-midterm-exam",
    "name": "NR 511 Midterm Exam",
    "description": "Practice quiz for NR 511 Midterm Exam",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-snapps-oral-presentation-patient-case-summary",
    "name": "NR 511 SNAPPS Oral Presentation Patient Case Summary",
    "description": "Practice quiz for NR 511 SNAPPS Oral Presentation Patient Case Summary",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-week-5-quiz-part-2-",
    "name": "NR 511 week 5 quiz part 2",
    "description": "Practice quiz for NR 511 week 5 quiz part 2",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-week-5-quiz-part-2",
    "name": "NR 511 week 5 quiz part 2",
    "description": "Practice quiz for NR 511 week 5 quiz part 2",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-week-6-quiz",
    "name": "NR 511 Week 6 Quiz",
    "description": "Practice quiz for NR 511 Week 6 Quiz",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-511-week-8-final-exam",
    "name": "NR 511 Week 8 Final Exam",
    "description": "Practice quiz for NR 511 Week 8 Final Exam",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-512-quiz-on-key-informatics-terms",
    "name": "NR 512 Quiz on Key Informatics Terms",
    "description": "Practice quiz for NR 512 Quiz on Key Informatics Terms",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-512-week6-pluone-2-analyzing-healthcare-legislation-and-its-impact",
    "name": "NR 512 week6 pluone 2 Analyzing Healthcare Legislation and Its Impact",
    "description": "Practice quiz for NR 512 week6 pluone 2 Analyzing Healthcare Legislation and Its Impact",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-512-wk-2-transformation-from-data",
    "name": "NR 512 Wk 2 Transformation from Data",
    "description": "Practice quiz for NR 512 Wk 2 Transformation from Data",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-537-test-construction",
    "name": "NR 537 Test Construction",
    "description": "Practice quiz for NR 537 Test Construction",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-537-week-3-assignment-guidelines-and-rubric-final",
    "name": "NR 537 Week 3 Assignment Guidelines and Rubric Final",
    "description": "Practice quiz for NR 537 Week 3 Assignment Guidelines and Rubric Final",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-537-week-3-assignment-required-template-for-test-blueprint-final",
    "name": "NR 537 Week 3 Assignment Required Template for Test Blueprint FINAL",
    "description": "Practice quiz for NR 537 Week 3 Assignment Required Template for Test Blueprint FINAL",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-553-week-5-dq-nursing-and-population-health",
    "name": "NR 553 Week 5 DQ Nursing and Population Health",
    "description": "Practice quiz for NR 553 Week 5 DQ Nursing and Population Health",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-554-week-7-post-tanic-assessment",
    "name": "NR 554 Week 7 Post TANIC Assessment",
    "description": "Practice quiz for NR 554 Week 7 Post TANIC Assessment",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-final-exam-review-week-5-review-chapter-18",
    "name": "NR 566 - Final Exam Review Week 5 Review Chapter 18",
    "description": "Practice quiz for NR 566 - Final Exam Review Week 5 Review Chapter 18",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-midterm-study-guide",
    "name": "NR 566 Midterm Study Guide",
    "description": "Practice quiz for NR 566 Midterm Study Guide",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-presentation-cold-and-cough-rx",
    "name": "NR 566 presentation Cold and Cough Rx",
    "description": "Practice quiz for NR 566 presentation Cold and Cough Rx",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-week-1-open-book-quiz-answers-and-rationales",
    "name": "NR 566 Week 1 Open Book Quiz Answers and Rationales",
    "description": "Practice quiz for NR 566 Week 1 Open Book Quiz Answers and Rationales",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-week-7-pp-presentation-final",
    "name": "NR 566 Week 7 PP Presentation Final",
    "description": "Practice quiz for NR 566 Week 7 PP Presentation Final",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-week-7-presentation",
    "name": "NR 566 Week 7 Presentation",
    "description": "Practice quiz for NR 566 Week 7 Presentation",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-566-wk-5-immunization-paper-b-ingram",
    "name": "NR 566 Wk 5 Immunization Paper B Ingram",
    "description": "Practice quiz for NR 566 Wk 5 Immunization Paper B Ingram",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-agnp-board-examination-questions-assessment-eye-ear-nose-and-throat",
    "name": "NR 576 AGNP Board Examination Questions - Assessment Eye, Ear, Nose and Throat",
    "description": "Practice quiz for NR 576 AGNP Board Examination Questions - Assessment Eye, Ear, Nose and Throat",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-differential-diagnosis-in-adult-gerontology-primary-care-exam-review",
    "name": "NR 576 Differential Diagnosis in Adult-Gerontology Primary Care Exam Review",
    "description": "Practice quiz for NR 576 Differential Diagnosis in Adult-Gerontology Primary Care Exam Review",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-elaborated-ati-gerontology-exam-questions-and-answers-2022-5-rated-latest",
    "name": "NR 576 - Elaborated ATI Gerontology Exam Questions and Answers-2022-5 Rated latest",
    "description": "Practice quiz for NR 576 - Elaborated ATI Gerontology Exam Questions and Answers-2022-5 Rated latest",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-exam-help",
    "name": "NR 576 EXAM Help",
    "description": "Practice quiz for NR 576 EXAM Help",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-exam-prep-latest",
    "name": "NR 576 Exam Prep Latest",
    "description": "Practice quiz for NR 576 Exam Prep Latest",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-final-exam",
    "name": "NR-576 Final Exam",
    "description": "Practice quiz for NR-576 Final Exam",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR-576"
    ]
  },
  {
    "code": "nr-576-gerontology-quiz-1-answers",
    "name": "NR 576: Gerontology Quiz 1 Answers",
    "description": "Practice quiz for NR 576: Gerontology Quiz 1 Answers",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-midterm-adult-gerontology-questions-and-answers",
    "name": "NR 576 Midterm - Adult Gerontology Questions and Answers",
    "description": "Practice quiz for NR 576 Midterm - Adult Gerontology Questions and Answers",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-week-5-reflection-impact-of-patient-setting-on-care",
    "name": "NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "description": "Practice quiz for NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-week-5-reflection",
    "name": "NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "description": "Practice quiz for NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-week-7-cpg-bph-presentation.pptx",
    "name": "NR 576 Week 7 CPG BPH presentation.pptx",
    "description": "Practice quiz for NR 576 Week 7 CPG BPH presentation.pptx",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-576-week-7-cpg-bph-presentationpptx",
    "name": "NR 576 Week 7 CPG BPH presentation.pptx",
    "description": "Practice quiz for NR 576 Week 7 CPG BPH presentation.pptx",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-599-cdc-milestone-final",
    "name": "NR 599 CDC Milestone Final",
    "description": "Practice quiz for NR 599 CDC Milestone Final",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-599-midterm-exam-",
    "name": "NR 599 midterm exam",
    "description": "Practice quiz for NR 599 midterm exam",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-599-midterm-exam",
    "name": "NR 599 midterm exam",
    "description": "Practice quiz for NR 599 midterm exam",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-599-midterm-review-1",
    "name": "NR 599 midterm review 1",
    "description": "Practice quiz for NR 599 midterm review 1",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-599-midterm-review-general-principles-of-nursing-informatics",
    "name": "NR 599 midterm review General Principles of Nursing Informatics",
    "description": "Practice quiz for NR 599 midterm review General Principles of Nursing Informatics",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-599-pre-tanic-self-assessment-and-reflection-post",
    "name": "NR 599 Pre TANIC Self Assessment and Reflection Post",
    "description": "Practice quiz for NR 599 Pre TANIC Self Assessment and Reflection Post",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-602-midterm-study-guide-topics-26-30",
    "name": "NR 602 Midterm Study Guide Topics 26-30",
    "description": "Practice quiz for NR 602 Midterm Study Guide Topics 26-30",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-603-comparison-of-post-concussive-syndrome-and-traumatic-brain-injury",
    "name": "NR 603 Comparison of Post Concussive Syndrome and Traumatic Brain Injury",
    "description": "Practice quiz for NR 603 Comparison of Post Concussive Syndrome and Traumatic Brain Injury",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-603-quiz-1-neuro-week-1-quiz-and-answers",
    "name": "NR 603 QUIZ 1 Neuro Week 1 quiz and answers",
    "description": "Practice quiz for NR 603 QUIZ 1 Neuro Week 1 quiz and answers",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-661-eent-1-59-quiz",
    "name": "NR 661 EENT 1 59 QUIZ",
    "description": "Practice quiz for NR 661 EENT 1 59 QUIZ",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-661-gastrointestinal-quiz",
    "name": "NR 661 Gastrointestinal Quiz",
    "description": "Practice quiz for NR 661 Gastrointestinal Quiz",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-661-general-class-information-",
    "name": "NR 661 General class information",
    "description": "Practice quiz for NR 661 General class information",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-661-general-class-information",
    "name": "NR 661 General class information",
    "description": "Practice quiz for NR 661 General class information",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-661-know-presentation-diagnosis-and-management",
    "name": "NR 661 Know Presentation Diagnosis and Management",
    "description": "Practice quiz for NR 661 Know Presentation Diagnosis and Management",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-305-fnp-application-essay",
    "name": "NR NR 305 FNP application essay",
    "description": "Practice quiz for NR NR 305 FNP application essay",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-507-final-study-guide",
    "name": "NR NR 507 Final Study Guide",
    "description": "Practice quiz for NR NR 507 Final Study Guide",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-507-midterm-patho",
    "name": "NR NR 507 midterm patho",
    "description": "Practice quiz for NR NR 507 midterm patho",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-507-week-2-quiz-2",
    "name": "NR NR 507 Week 2 Quiz 2",
    "description": "Practice quiz for NR NR 507 Week 2 Quiz 2",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-510-week-7-assignment-recorded-lace-presentation",
    "name": "NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "description": "Practice quiz for NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-534-week-7-business-plan-final",
    "name": "NR NR 534 Week 7 Business Plan Final",
    "description": "Practice quiz for NR NR 534 Week 7 Business Plan Final",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-603-course-pulmonary-case-presentation-for-week-2",
    "name": "NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "description": "Practice quiz for NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-exam-2-help",
    "name": "NR NR224 EXAM 2 Help",
    "description": "Practice quiz for NR NR224 EXAM 2 Help",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-exam-3-study-guide",
    "name": "NR NR224 Exam 3 Study Guide",
    "description": "Practice quiz for NR NR224 Exam 3 Study Guide",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-final-exam-concept-blueprint",
    "name": "NR NR224 Final Exam Concept Blueprint",
    "description": "Practice quiz for NR NR224 Final Exam Concept Blueprint",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-final-exam-key-concepts",
    "name": "NR NR224 Final Exam Key Concepts",
    "description": "Practice quiz for NR NR224 Final Exam Key Concepts",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-final-practice-nr",
    "name": "NR NR224 Final Practice NR",
    "description": "Practice quiz for NR NR224 Final Practice NR",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-final-practice",
    "name": "NR NR224 Final Practice",
    "description": "Practice quiz for NR NR224 Final Practice",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-simulation-i-sbar-chamberlain-college-of-nursing",
    "name": "NR NR224 Simulation I-SBAR CHAMBERLAIN COLLEGE OF NURSING",
    "description": "Practice quiz for NR NR224 Simulation I-SBAR CHAMBERLAIN COLLEGE OF NURSING",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-unit-8-clinical-preparation-worksheet-",
    "name": "NR NR224 Unit 8 Clinical Preparation Worksheet",
    "description": "Practice quiz for NR NR224 Unit 8 Clinical Preparation Worksheet",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-unit-8-clinical-preparation-worksheet",
    "name": "NR NR224 Unit 8 Clinical Preparation Worksheet",
    "description": "Practice quiz for NR NR224 Unit 8 Clinical Preparation Worksheet",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr228-discussion-6-initial-assessment-data-for-jordan",
    "name": "NR NR228 Discussion 6 Initial Assessment Data for Jordan",
    "description": "Practice quiz for NR NR228 Discussion 6 Initial Assessment Data for Jordan",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr228-exam-review-document-exam-3",
    "name": "NR NR228 Exam Review Document Exam 3",
    "description": "Practice quiz for NR NR228 Exam Review Document Exam 3",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr228-informatics-quiz-5-study-guide",
    "name": "NR NR228 Informatics Quiz 5 Study Guide",
    "description": "Practice quiz for NR NR228 Informatics Quiz 5 Study Guide",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr228-review-of-knowledge-exam-1",
    "name": "NR NR228 Review of Knowledge Exam 1",
    "description": "Practice quiz for NR NR228 Review of Knowledge Exam 1",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr283-ati-basic-concept-1-fluids-and-electrolytes",
    "name": "NR NR283 ATI Basic Concept 1 Fluids and Electrolytes",
    "description": "Practice quiz for NR NR283 ATI Basic Concept 1 Fluids and Electrolytes",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr447-smart-goal-utilizing-informatics",
    "name": "NR NR447 SMART GOAL Utilizing Informatics",
    "description": "Practice quiz for NR NR447 SMART GOAL Utilizing Informatics",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-aa3-information-11-",
    "name": "NR NR452 AA3 Information 11",
    "description": "Practice quiz for NR NR452 AA3 Information 11",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-aa3-information-11",
    "name": "NR NR452 AA3 Information 11",
    "description": "Practice quiz for NR NR452 AA3 Information 11",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-funds-remediation",
    "name": "NR NR452 Funds Remediation",
    "description": "Practice quiz for NR NR452 Funds Remediation",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-medication-calculation-practice-prepare-for-math-exam",
    "name": "NR NR452 Medication Calculation Practice: Prepare for Math Exam",
    "description": "Practice quiz for NR NR452 Medication Calculation Practice: Prepare for Math Exam",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-multi-client-simulation-student-instructions",
    "name": "NR NR452 Multi Client Simulation: Student Instructions",
    "description": "Practice quiz for NR NR452 Multi Client Simulation: Student Instructions",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-remediation-for-rn-comprehensive-practice-assessment",
    "name": "NR NR452 remediation for rn comprehensive practice assessment",
    "description": "Practice quiz for NR NR452 remediation for rn comprehensive practice assessment",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr452-required-practice-medication-calculation-packet-a",
    "name": "NR NR452 Required Practice Medication Calculation Packet A",
    "description": "Practice quiz for NR NR452 Required Practice Medication Calculation Packet A",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-midterm-review-",
    "name": "Free Answer) NR NR507 MIDTERM REVIEW",
    "description": "Practice quiz for Free Answer) NR NR507 MIDTERM REVIEW",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "nr-nr507-midterm-review-nr507-mid-term-study-guide-",
    "name": "Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "description": "Practice quiz for Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "nr-nr507-week-2-quiz-2-study-guide",
    "name": "NR NR507 Week 2 Quiz 2 Study Guide",
    "description": "Practice quiz for NR NR507 Week 2 Quiz 2 Study Guide",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-week-4-midterm-exam-real-exam",
    "name": "NR NR507 Week 4 Midterm Exam Real Exam",
    "description": "Practice quiz for NR NR507 Week 4 Midterm Exam Real Exam",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-week-4-midterm-exam",
    "name": "NR NR507 Week 4 Midterm Exam",
    "description": "Practice quiz for NR NR507 Week 4 Midterm Exam",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-week-4-midterm-questions-and-answers",
    "name": "NR NR507 Week 4 Midterm Questions and Answers",
    "description": "Practice quiz for NR NR507 Week 4 Midterm Questions and Answers",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-week-8-final-exam",
    "name": "NR NR507 Week 8 Final Exam",
    "description": "Practice quiz for NR NR507 Week 8 Final Exam",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-wk-2-quiz-2-study-guide-2",
    "name": "Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "description": "Practice quiz for Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "nr-nr525-week-1-apa-quiz-solutions",
    "name": "Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "description": "Practice quiz for Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "nr103-week-4-ati-test-taking-skills",
    "name": "NR103 Week 4 ATI Test Taking Skills",
    "description": "Practice quiz for NR103 Week 4 ATI Test Taking Skills",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR103"
    ]
  },
  {
    "code": "nr341-content-review-exam-2",
    "name": "NR341 Content Review Exam 2",
    "description": "Practice quiz for NR341 Content Review Exam 2",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR341"
    ]
  },
  {
    "code": "nr341-exam-2-study-notes.docx",
    "name": "NR341 Exam 2 Study Notes.docx",
    "description": "Practice quiz for NR341 Exam 2 Study Notes.docx",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR341"
    ]
  },
  {
    "code": "nr341-exam-2-study-notesdocx",
    "name": "NR341 Exam 2 Study Notes.docx",
    "description": "Practice quiz for NR341 Exam 2 Study Notes.docx",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR341"
    ]
  },
  {
    "code": "nr449-evidence-based-practice-in-nursing-comprehensive-exam-practice-mcq",
    "name": "NR449 Evidence Based Practice in Nursing Comprehensive Exam Practice MCQ",
    "description": "Practice quiz for NR449 Evidence Based Practice in Nursing Comprehensive Exam Practice MCQ",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR449"
    ]
  },
  {
    "code": "nr452-nursing-care-of-children-post-assessment-questions",
    "name": "NR452 Nursing Care of Children Post Assessment Questions",
    "description": "Practice quiz for NR452 Nursing Care of Children Post Assessment Questions",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR452"
    ]
  },
  {
    "code": "nr501-week-5-week-5-analysis-and-application-of-a-nursing-theory.docx",
    "name": "NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "description": "Practice quiz for NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR501"
    ]
  },
  {
    "code": "nr501-week-5-week-5-analysis-and-application-of-a-nursing-theorydocx",
    "name": "NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "description": "Practice quiz for NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR501"
    ]
  },
  {
    "code": "nr501-week5-patient-centered-care-behind-the-theory-pcn",
    "name": "NR501 Week5 Patient Centered Care: Behind the Theory PCN",
    "description": "Practice quiz for NR501 Week5 Patient Centered Care: Behind the Theory PCN",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR501"
    ]
  },
  {
    "code": "nr503-midterm-exam-study-guide-chamberlain-college-of-nursing-2",
    "name": "NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "description": "Practice quiz for NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR503"
    ]
  },
  {
    "code": "nr503-midterm-exam-study-guide-chamberlain-college-of-nursing",
    "name": "NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "description": "Practice quiz for NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR503"
    ]
  },
  {
    "code": "nr503-relative-risk-calculations-worksheet-guidelines",
    "name": "NR503 Relative Risk Calculations Worksheet Guidelines",
    "description": "Practice quiz for NR503 Relative Risk Calculations Worksheet Guidelines",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR503"
    ]
  },
  {
    "code": "nr506-identification-of-healthcare-policy-concern",
    "name": "NR506 Identification of Healthcare Policy Concern",
    "description": "Practice quiz for NR506 Identification of Healthcare Policy Concern",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR506"
    ]
  },
  {
    "code": "nr506np-week-4-assignment-health-policy-analysis-kaltura-presentation",
    "name": "NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "description": "Practice quiz for NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR506NP"
    ]
  },
  {
    "code": "nr507-final-exam-study-guide-2",
    "name": "Free Answer) NR507 Final exam Study Guide 2",
    "description": "Practice quiz for Free Answer) NR507 Final exam Study Guide 2",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "nr507-week-3-quiz",
    "name": "Free Answer) NR507 Week 3 Quiz",
    "description": "Practice quiz for Free Answer) NR507 Week 3 Quiz",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free"
    ]
  },
  {
    "code": "nr508-final-questions-chapter-1",
    "name": "NR508 Final Questions Chapter 1",
    "description": "Practice quiz for NR508 Final Questions Chapter 1",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR508"
    ]
  },
  {
    "code": "nr508-midterm-chapter-.docx",
    "name": "NR508 Midterm chapter .docx",
    "description": "Practice quiz for NR508 Midterm chapter .docx",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR508"
    ]
  },
  {
    "code": "nr508-midterm-chapter-docx",
    "name": "NR508 Midterm chapter .docx",
    "description": "Practice quiz for NR508 Midterm chapter .docx",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR508"
    ]
  },
  {
    "code": "nr509-advanced-physical-assessment-midterm-exam-review",
    "name": "NR509 Advanced Physical Assessment Midterm Exam Review",
    "description": "Practice quiz for NR509 Advanced Physical Assessment Midterm Exam Review",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR509"
    ]
  },
  {
    "code": "nr511-week-6-quiz-part-2-",
    "name": "NR511 week 6 quiz part 2",
    "description": "Practice quiz for NR511 week 6 quiz part 2",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR511"
    ]
  },
  {
    "code": "nr511-week-6-quiz-part-2",
    "name": "NR511 week 6 quiz part 2",
    "description": "Practice quiz for NR511 week 6 quiz part 2",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR511"
    ]
  },
  {
    "code": "nr512-discussion-on-electronic-health-records-and-patient-empowerment",
    "name": "NR512 Discussion on Electronic Health Records and Patient Empowerment",
    "description": "Practice quiz for NR512 Discussion on Electronic Health Records and Patient Empowerment",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR512"
    ]
  },
  {
    "code": "nr512-quiz",
    "name": "NR512 quiz",
    "description": "Practice quiz for NR512 quiz",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR512"
    ]
  },
  {
    "code": "nr512-w7-narrated-ppt-presentation-final",
    "name": "NR512 W7 Narrated PPT Presentation Final",
    "description": "Practice quiz for NR512 W7 Narrated PPT Presentation Final",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR512"
    ]
  },
  {
    "code": "nr512-week-1-term-quiz",
    "name": "nr512 week 1 term quiz",
    "description": "Practice quiz for nr512 week 1 term quiz",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nr512"
    ]
  },
  {
    "code": "nr512-week-2-informatics-key-terms-quiz",
    "name": "NR512 Week 2 Informatics Key Terms Quiz",
    "description": "Practice quiz for NR512 Week 2 Informatics Key Terms Quiz",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR512"
    ]
  },
  {
    "code": "nr512-wk-reflection-fundamentals-of-nursing-informatics",
    "name": "NR512 WK Reflection Fundamentals of Nursing Informatics",
    "description": "Practice quiz for NR512 WK Reflection Fundamentals of Nursing Informatics",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR512"
    ]
  },
  {
    "code": "nr534-advanced-communication-in-systems-leadership-copy",
    "name": "NR534 Advanced Communication in Systems Leadership copy",
    "description": "Practice quiz for NR534 Advanced Communication in Systems Leadership copy",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR534"
    ]
  },
  {
    "code": "nr534-organizational-culture-and-climate-assessment-and-analysis",
    "name": "NR534 Organizational Culture and Climate Assessment and Analysis",
    "description": "Practice quiz for NR534 Organizational Culture and Climate Assessment and Analysis",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR534"
    ]
  },
  {
    "code": "nr534-week-5-organizational-culture-and-climate",
    "name": "NR534 Week 5 Organizational Culture and Climate",
    "description": "Practice quiz for NR534 Week 5 Organizational Culture and Climate",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR534"
    ]
  },
  {
    "code": "nr566-final-study-guide",
    "name": "NR566 Final Study Guide",
    "description": "Practice quiz for NR566 Final Study Guide",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR566"
    ]
  },
  {
    "code": "nr568-final-exam-study-guide",
    "name": "NR568 Final Exam Study Guide",
    "description": "Practice quiz for NR568 Final Exam Study Guide",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR568"
    ]
  },
  {
    "code": "nr576-final-study-guide-worksheet",
    "name": "NR576 Final Study Guide Worksheet",
    "description": "Practice quiz for NR576 Final Study Guide Worksheet",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR576"
    ]
  },
  {
    "code": "nr599-week-6-medical-application-critical-appraisal-guidelines",
    "name": "NR599 Week 6 Medical Application Critical Appraisal Guidelines",
    "description": "Practice quiz for NR599 Week 6 Medical Application Critical Appraisal Guidelines",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR599"
    ]
  },
  {
    "code": "nr602-pediatric-clinical-case-presentation",
    "name": "NR602 Pediatric Clinical Case Presentation",
    "description": "Practice quiz for NR602 Pediatric Clinical Case Presentation",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR602"
    ]
  },
  {
    "code": "nr602-w1d2-physical-examination",
    "name": "NR602 W1D2 Physical Examination",
    "description": "Practice quiz for NR602 W1D2 Physical Examination",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR602"
    ]
  },
  {
    "code": "nr602-week-3-immunization-case-study",
    "name": "NR602 week 3 Immunization Case Study",
    "description": "Practice quiz for NR602 week 3 Immunization Case Study",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR602"
    ]
  },
  {
    "code": "nr621-potential-education-practicum-project-topics-2",
    "name": "NR621 Potential Education Practicum Project Topics",
    "description": "Practice quiz for NR621 Potential Education Practicum Project Topics",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR621"
    ]
  },
  {
    "code": "nr621-potential-education-practicum-project-topics",
    "name": "NR621 Potential Education Practicum Project Topics",
    "description": "Practice quiz for NR621 Potential Education Practicum Project Topics",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR621"
    ]
  },
  {
    "code": "nr667-week-1-certification-review-plan-",
    "name": "NR667 Week 1 Certification Review Plan",
    "description": "Practice quiz for NR667 Week 1 Certification Review Plan",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR667"
    ]
  },
  {
    "code": "nr667-week-1-certification-review-plan",
    "name": "NR667 Week 1 Certification Review Plan",
    "description": "Practice quiz for NR667 Week 1 Certification Review Plan",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR667"
    ]
  },
  {
    "code": "nur-6521-quiz-solution",
    "name": "NUR 6521 Quiz Solution",
    "description": "Practice quiz for NUR 6521 Quiz Solution",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NUR"
    ]
  },
  {
    "code": "nursing-care-and-compassion-fatigue",
    "name": "Nursing Care and Compassion Fatigue",
    "description": "Practice quiz for Nursing Care and Compassion Fatigue",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nursing"
    ]
  },
  {
    "code": "nutrition-exam-1-study-guide",
    "name": "Nutrition Exam 1 Study Guide",
    "description": "Practice quiz for Nutrition Exam 1 Study Guide",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nutrition"
    ]
  },
  {
    "code": "nutritional-assessment-rua",
    "name": "Nutritional Assessment RUA",
    "description": "Practice quiz for Nutritional Assessment RUA",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nutritional"
    ]
  },
  {
    "code": "overvthevcounter-medications-for-cold-and-cough-nr-566-assignment",
    "name": "OvervthevCounter Medications for Cold and Cough NR 566 Assignment",
    "description": "Practice quiz for OvervthevCounter Medications for Cold and Cough NR 566 Assignment",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "OvervthevCounter"
    ]
  },
  {
    "code": "pedi-remediation-vati-pedi-remediation-nr452",
    "name": "PEDI REMEDIATION VATI PEDI REMEDIATION NR452",
    "description": "Practice quiz for PEDI REMEDIATION VATI PEDI REMEDIATION NR452",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "PEDI"
    ]
  },
  {
    "code": "pertinent-history-questions-to-ask-the-patient",
    "name": "Pertinent History Questions to Ask the Patient",
    "description": "Practice quiz for Pertinent History Questions to Ask the Patient",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pertinent"
    ]
  },
  {
    "code": "pham-final-nurs-6521",
    "name": "Pham Final Nurs 6521",
    "description": "Practice quiz for Pham Final Nurs 6521",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pham"
    ]
  },
  {
    "code": "practice-medication-calculation-a-student-copy-nr452-",
    "name": "Practice Medication Calculation A Student Copy NR452",
    "description": "Practice quiz for Practice Medication Calculation A Student Copy NR452",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Practice"
    ]
  },
  {
    "code": "practice-medication-calculation-a-student-copy-nr452",
    "name": "Practice Medication Calculation A Student Copy NR452",
    "description": "Practice quiz for Practice Medication Calculation A Student Copy NR452",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Practice"
    ]
  },
  {
    "code": "proctored-exam-help-by-nursingschooltutors",
    "name": "Proctored Exam Help by Nursingschooltutors",
    "description": "Practice quiz for Proctored Exam Help by Nursingschooltutors",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Proctored"
    ]
  },
  {
    "code": "quick-reference-guide-clinical-recommendations",
    "name": "Quick Reference Guide Clinical Recommendations",
    "description": "Practice quiz for Quick Reference Guide Clinical Recommendations",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Quick"
    ]
  },
  {
    "code": "rua-ethical-dilemma-treating-a-septic-newborn-with-herbal-therapy",
    "name": "RUA Ethical Dilemma Treating a Septic Newborn with Herbal Therapy",
    "description": "Practice quiz for RUA Ethical Dilemma Treating a Septic Newborn with Herbal Therapy",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "RUA"
    ]
  },
  {
    "code": "sbirt-presentation-alcohol-and-its-impact-nr443",
    "name": "SBIRT Presentation Alcohol and Its Impact NR443",
    "description": "Practice quiz for SBIRT Presentation Alcohol and Its Impact NR443",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "SBIRT"
    ]
  },
  {
    "code": "seitz-nr512-wk6-health-it-topic-ppt-presentation",
    "name": "Seitz NR512 Wk6 Health IT Topic PPT Presentation",
    "description": "Practice quiz for Seitz NR512 Wk6 Health IT Topic PPT Presentation",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Seitz"
    ]
  },
  {
    "code": "sensitivity-to-each-patients-goals-values",
    "name": "Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "description": "Practice quiz for Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Humor"
    ]
  },
  {
    "code": "sh-fam-focused-exam-long-bone-fracture",
    "name": "SH FAM Focused Exam Long Bone Fracture",
    "description": "Practice quiz for SH FAM Focused Exam Long Bone Fracture",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "SH"
    ]
  },
  {
    "code": "solution-cna758-foundations-of-child-and-family-health-nursing-assessment-2",
    "name": "Solution) CNA758 Foundations of Child and Family Health Nursing Assessment 2",
    "description": "Practice quiz for Solution) CNA758 Foundations of Child and Family Health Nursing Assessment 2",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solution)"
    ]
  },
  {
    "code": "solved-mfa-case-presentation-study-for-week-7-nr602",
    "name": "Solved MFA Case Presentation Study for Week 7 NR602",
    "description": "Practice quiz for Solved MFA Case Presentation Study for Week 7 NR602",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr-510-week-8-final-exam-questions-and-answers",
    "name": "Solved NR 510 Week 8 Final Exam questions and answers",
    "description": "Practice quiz for Solved NR 510 Week 8 Final Exam questions and answers",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr-566-week-1-quiz",
    "name": "Solved NR 566 WEEK 1 QUIZ",
    "description": "Practice quiz for Solved NR 566 WEEK 1 QUIZ",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr-602-midterm-exam",
    "name": "Solved NR 602 MIDTERM EXAM",
    "description": "Practice quiz for Solved NR 602 MIDTERM EXAM",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr512-week-2-informatics-key-terms-quiz",
    "name": "Solved NR512 Week 2 Informatics Key Terms Quiz",
    "description": "Practice quiz for Solved NR512 Week 2 Informatics Key Terms Quiz",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr602-midterm-exam",
    "name": "Solved NR602 Midterm Exam",
    "description": "Practice quiz for Solved NR602 Midterm Exam",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-post-tanic-self-assessment-and-reflection",
    "name": "Solved Post TANIC Self Assessment and Reflection",
    "description": "Practice quiz for Solved Post TANIC Self Assessment and Reflection",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "summative-performance-evaluation-of-new-hire-rn-nr-537",
    "name": "Summative Performance Evaluation of New Hire RN NR-537",
    "description": "Practice quiz for Summative Performance Evaluation of New Hire RN NR-537",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Summative"
    ]
  },
  {
    "code": "the-rise-of-patient-sitters-the-financial-burden-on-organizations-nr-630",
    "name": "The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "description": "Practice quiz for The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "The"
    ]
  },
  {
    "code": "tina-jones-neurological-shadow-health-assessment-lifespan-review-questions",
    "name": "Tina Jones Neurological Shadow Health Assessment Lifespan Review Questions",
    "description": "Practice quiz for Tina Jones Neurological Shadow Health Assessment Lifespan Review Questions",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tina"
    ]
  },
  {
    "code": "tradition-vs-change-test-bank",
    "name": "Tradition vs. Change Test Bank",
    "description": "Practice quiz for Tradition vs. Change Test Bank",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tradition"
    ]
  },
  {
    "code": "tradition-vs.-change-test-bank",
    "name": "Tradition vs. Change Test Bank",
    "description": "Practice quiz for Tradition vs. Change Test Bank",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tradition"
    ]
  },
  {
    "code": "vati-mental-health-remediation-nr452",
    "name": "VATI Mental Health Remediation NR452",
    "description": "Practice quiz for VATI Mental Health Remediation NR452",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "VATI"
    ]
  },
  {
    "code": "week-1-ceritfication-review-nr667",
    "name": "Week 1 ceritfication review nr667",
    "description": "Practice quiz for Week 1 ceritfication review nr667",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-1-certification-review-plan-nr-603",
    "name": "Week 1 Certification Review Plan NR 603",
    "description": "Practice quiz for Week 1 Certification Review Plan NR 603",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-1-initial-self-assessment-of-professional-competencies-nr-630-",
    "name": "Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "description": "Practice quiz for Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-1-quiz-questions-and-answers-100-correct",
    "name": "WEEK 1 - QUIZ Questions and Answers 100% correct",
    "description": "Practice quiz for WEEK 1 - QUIZ Questions and Answers 100% correct",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "WEEK"
    ]
  },
  {
    "code": "week-2-assignment-direct-care-project-part-1-assessment-and-diagnosis-nr443",
    "name": "Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "description": "Practice quiz for Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-2-bsn-level-4-direct-patient-care-documentation-nr-224",
    "name": "Week 2 BSN Level 4 Direct Patient Care Documentation NR 224",
    "description": "Practice quiz for Week 2 BSN Level 4 Direct Patient Care Documentation NR 224",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-2-case-presentation-summary-chamberlain-university-nr603",
    "name": "Week 2 Case Presentation Summary Chamberlain University NR603",
    "description": "Practice quiz for Week 2 Case Presentation Summary Chamberlain University NR603",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-3-3-ceap-assessment-chamberlain-college-of-nursing",
    "name": "NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "description": "Practice quiz for NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "week-3-qualitative-study-nr505",
    "name": "Week 3 - Qualitative Study NR505",
    "description": "Practice quiz for Week 3 - Qualitative Study NR505",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-3-social-media-discussion-with-responses-population-health-problems",
    "name": "Week 3 Social Media Discussion with Responses Population Health Problems",
    "description": "Practice quiz for Week 3 Social Media Discussion with Responses Population Health Problems",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-4-assignment-check-in-direct-care-project-part-2-planning-the-presentation-nr-443",
    "name": "Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "description": "Practice quiz for Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-4-nr599-midterm-study-guide",
    "name": "Week 4 NR599 Midterm Study Guide",
    "description": "Practice quiz for Week 4 NR599 Midterm Study Guide",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-5-ethical-and-legal-implications-nr506",
    "name": "Week 5 Ethical and Legal Implications NR506",
    "description": "Practice quiz for Week 5 Ethical and Legal Implications NR506",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-5-patient-nr-603-chamberlain-college",
    "name": "WEEK 5 Patient NR 603 Chamberlain College",
    "description": "Practice quiz for WEEK 5 Patient NR 603 Chamberlain College",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "WEEK"
    ]
  },
  {
    "code": "week-6-check-in-direct-care-project-part-3-presentation-delivery",
    "name": "Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "description": "Practice quiz for Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-6-scope-of-practice-and-patients-healthcare-accessibility-nr506",
    "name": "Week 6 Scope of Practice and Patient's Healthcare Accessibility NR506",
    "description": "Practice quiz for Week 6 Scope of Practice and Patient's Healthcare Accessibility NR506",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week"
    ]
  },
  {
    "code": "week-7-quiz-dementia-elder-abuse-delirium-nr601",
    "name": "WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "description": "Practice quiz for WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "WEEK"
    ]
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
