export const personal = {
  name: 'Venkata Satya Sreeya Chandrapati',
  shortName: 'Sreeya Chandrapati',
  title: 'Data Analyst · Applied Statistics & Data Science',
  location: 'Arlington, Texas',
  email: 'sreeyachandrapati10@gmail.com',
  phone: '+1 (945) 358-4380',
  linkedin: 'https://www.linkedin.com/in/sreeya-ch/',
  github: 'https://github.com/Sreeya003',
  medium: 'https://medium.com/@sreeyachandrapati10',
  resume: '/Sreeya_Chandrapati_Resume.pdf',
  photo: '/photo.png',
};

export const summary = `Data Analyst with strong data science fundamentals — combining automation, dashboarding, and predictive modeling to deliver measurable outcomes. I build classification models reaching ~95% accuracy and >0.92 ROC-AUC, design Tableau and Power BI reporting that turns raw data into decision-ready insights, and streamline manual workflows with Python, Apps Script, and SQL.`;

export const skills = [
  { group: 'Programming & Query', items: ['Python', 'SQL', 'R', 'SAS'] },
  { group: 'Analytics & BI', items: ['Excel', 'Power BI', 'Tableau', 'Google Sheets'] },
  { group: 'ML & Data Science', items: ['Scikit-learn', 'Statistics & EDA', 'Classification', 'Model Evaluation (AUC · F1 · ROC)'] },
  { group: 'Automation & Workflow', items: ['Google Apps Script', 'Jupyter', 'Git', 'GitHub', 'VS Code'] },
];

export const education = [
  {
    school: 'University of Texas at Arlington',
    location: 'Arlington, Texas',
    degree: 'M.S. Applied Statistics and Data Science',
    period: 'Aug 2025 – May 2027',
    detail: 'CGPA 4.0',
    courses: [
      'Statistical Theory and Application',
      'Statistical & Scientific Computing',
      'Principles of Data Science',
      'Machine Learning with Applications',
      'Applied Time Series Analysis',
      'Advanced Regression Analysis',
    ],
  },
  {
    school: 'MVSR Engineering College',
    location: 'Hyderabad, India',
    degree: 'B.E. Information Technology',
    period: 'Jul 2020 – Jun 2024',
    detail: 'CGPA 3.0',
    courses: [
      'Data Structures',
      'Database Management Systems',
      'Machine Learning',
      'Operating Systems',
    ],
  },
];

export const experience = [
  {
    role: 'Teaching Assistant',
    company: 'The University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'Aug 2026 — Present',
    bullets: [
      'Returned to support instructional delivery for DATA 3441: Stats for Data Science 1 — descriptive statistics, probability theory, and inferential statistics.',
      'Facilitate weekly laboratory sessions, guiding hands-on application of statistical methods and visualization in SAS.',
      'Grade homework, quizzes, and lab assignments for a 4-credit-hour curriculum.',
      'Provide academic support on least-squares regression, sampling distributions, and hypothesis testing.',
    ],
  },
  {
    role: 'Graduate Research Assistant',
    company: 'The University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'May 2026 — Aug 2026',
    bullets: [
      'Engineered robust Python data-analysis workflows under Prof. Anton Artemyev to investigate fast plasma flow thermalization in Earth’s magnetosphere and the near-Earth solar wind.',
      'Processed and analyzed high-resolution, multi-dimensional plasma measurements from NASA THEMIS and MMS (Magnetospheric Multiscale) missions to isolate complex energy-conversion patterns.',
      'Quantified statistical correlations between kinetic and thermal energy states using advanced data modeling techniques to deepen institutional understanding of energy dissipation in collisionless plasmas.',
      'Optimized data pipelines for massive space-physics datasets, leveraging core scientific computing libraries to accelerate diagnostic timelines and research outputs.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'The University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'Feb 2026 — May 2026',
    bullets: [
      'Supported instructional delivery for DATA 3441: Stats for Data Science 1 — descriptive statistics, probability theory, and inferential statistics.',
      'Facilitated weekly laboratory sessions, guiding hands-on application of statistical methods and visualization in SAS.',
      'Graded homework, quizzes, and lab assignments for a 4-credit-hour curriculum.',
      'Provided academic support on least-squares regression, sampling distributions, and hypothesis testing.',
    ],
  },
  {
    role: 'Project Associate',
    company: 'Deccan AI',
    location: 'Hyderabad, India',
    period: 'Mar 2025 — Jul 2025',
    bullets: [
      'Managed assessment-content delivery streams end-to-end (planning → execution → QA), meeting timelines and quality thresholds across domains.',
      'Built and ran an SME + freelancer pipeline (sourcing, onboarding, task assignment, review), improving throughput and reducing rework.',
      'Designed evaluation rubrics and review workflows with cross-functional stakeholders, shortening iteration cycles.',
      'Implemented QA checklists and audit routines, increasing content reliability and reducing reviewer variance.',
    ],
  },
  {
    role: 'AI Annotator',
    company: 'Deccan AI',
    location: 'Hyderabad, India',
    period: 'Nov 2024 — Mar 2025',
    bullets: [
      'Created and annotated high-quality training datasets for model improvement, following strict labeling guidelines.',
      'Supported RLHF-style refinement by generating structured feedback, improving response quality and reducing recurring failure patterns.',
      'Maintained dataset consistency through QA sampling and error logging, improving label accuracy and minimizing noise.',
    ],
  },
  {
    role: 'Data Analytics Intern',
    company: 'Tata Advanced Systems (TASL)',
    location: 'Hyderabad, India',
    period: 'Jan 2024 — Apr 2024',
    bullets: [
      'Debugged and resolved Google Apps Script failures in automated workflows, improving process stability.',
      'Built Google Sheets reporting logic (custom formulas + structured templates) for management-ready summaries on large datasets.',
      'Developed Tableau dashboards to track operational KPIs, improving visibility into performance drivers.',
      'Automated invoice delivery using Apps Script, reducing manual follow-ups and improving turnaround consistency.',
    ],
  },
];

export const projects = [
  {
    title: 'Correlation of Kinetic & Thermal Energies of Protons in Space Plasma',
    period: 'Jan 2026 — Present',
    summary: 'Research with Prof. Anton Artemyev (UTA Physics) investigating fast plasma flow thermalization in Earth’s magnetosphere and the near-Earth solar wind.',
    bullets: [
      'Developing data analysis workflows on high-resolution plasma measurements from NASA THEMIS and MMS missions.',
      'Quantifying the correlation between kinetic and thermal energy states to understand energy dissipation in collisionless plasmas.',
    ],
    tags: ['Research', 'Python', 'NASA THEMIS', 'MMS'],
    icon: 'plasma',
    repo: null,
    featured: true,
  },
  {
    title: 'PAW-ANALITICS — Predictive Operations Framework',
    period: 'Mar 2026 — May 2026',
    summary: 'Dual-model ML pipeline on the Dallas Animal Shelter dataset (34.8K records) — predicts animal outcomes and Length of Stay to optimize shelter resource allocation.',
    bullets: [
      'Engineered 13 critical features and built ensemble models (Random Forest + XGBoost) while mitigating data leakage.',
      'Achieved 91.5% ROC-AUC for classification and reduced LOS prediction error to 5.56 days MAE.',
    ],
    tags: ['XGBoost', 'Random Forest', 'Feature Engineering', 'Python'],
    icon: 'paw',
    repo: 'https://github.com/Sreeya003/PAW-ANALITICS-Predictive-Framework-for-Shelter-Operations',
    featured: true,
  },
  {
    title: 'Hierarchical Analysis of Texas Municipal Debt',
    period: 'Mar 2026 — May 2026',
    summary: 'Hierarchical Linear Models on 17K+ Texas municipal debt issuances to identify borrowing-cost drivers; improved AIC from −4566 to −4792.',
    bullets: [
      'Engineered the Interest-to-Principal Ratio (IPR) metric, quantifying a 0.06 premium for Revenue vs. General Obligation bonds.',
      'Led end-to-end preprocessing, GVIF multicollinearity checks, and residual diagnostics for robust inference.',
    ],
    tags: ['R', 'HLM', 'Multilevel Models', 'Diagnostics'],
    icon: 'building',
    repo: 'https://github.com/Sreeya003/Hierarchical-Analysis-of-Structural-Borrowing-Costs-in-Texas-Municipal-Debt',
    featured: true,
  },
  {
    title: 'Capital Bikeshare Demand Forecasting',
    period: 'Mar 2026 — May 2026',
    summary: 'Identified optimal operational windows and supply levels for a large-scale urban bike network through demand forecasting and EDA.',
    bullets: [
      'Isolated bimodal weekday commuter and unimodal weekend leisure patterns; audited US Federal Holiday and weather effects with Prophet.',
      'Validated a zero-disruption maintenance window (3–4 AM) and produced a redistribution blueprint across 700+ daily summaries.',
    ],
    tags: ['Prophet', 'Time Series', 'EDA', 'Python'],
    icon: 'bike',
    repo: 'https://github.com/Sreeya003/Capital-Bikeshare-Demand-Forecasting-Supply-Optimization',
    featured: true,
  },
  {
    title: 'Multiclass Classification of Liver Disease',
    period: 'Nov 2025 — Dec 2025',
    summary: 'Clinical multiclass pipeline segmenting patients into 4 diagnostic categories from demographic + biochemical markers.',
    bullets: [
      'Preprocessing in R: cleaning, encoding, 99th-percentile outlier capping, z-score scaling.',
      'Reduced multicollinearity with PCA; identified high-signal biomarkers (AST, BIL, GGT) via ANOVA.',
      'Best model — LDA on PCA features: 94.91% accuracy, 0.79 macro F1.',
    ],
    tags: ['R', 'PCA', 'LDA', 'ANOVA'],
    icon: 'liver',
    repo: 'https://github.com/Sreeya003/Multiclass-Classification-of-Liver-Disease',
    featured: false,
  },
  {
    title: 'Predicting Company Bankruptcy',
    period: 'Nov 2025 — Dec 2025',
    summary: 'Early-warning bankruptcy classifier on 6,819 Taiwanese firms (95 financial indicators, 3.23% bankruptcy rate).',
    bullets: [
      'Benchmarked SMOTE vs. class weighting, optimizing minority recall without collapsing precision.',
      'Reduced predictors 95 → 6 using VIF + forward selection (BIC).',
      'ROC-AUC > 0.92, ~95% accuracy; tuned thresholds to capture 57% of bankruptcy cases.',
    ],
    tags: ['Imbalanced Classes', 'SMOTE', 'Feature Selection', 'Python'],
    icon: 'finance',
    repo: 'https://github.com/Sreeya003/Predicting-Company-Bankruptcy',
    featured: false,
  },
  {
    title: 'Identifying Key Determinants of Heart Disease',
    period: 'Nov 2025 — Dec 2025',
    summary: 'SAS-based clinical analytics pipeline on the UCI Heart Disease dataset surfacing statistically significant drivers of risk.',
    bullets: [
      'Cleaned and encoded mixed-type variables; performed EDA to validate distributions.',
      'Inferential tests (t-tests, ANOVA, chi-square) to screen predictive signals.',
      'Stepwise logistic regression — ROC-AUC 0.9365, 87% sensitivity. Top predictors: thalassemia, vessel blockage.',
    ],
    tags: ['SAS', 'Logistic Regression', 'Inferential Stats'],
    icon: 'heart',
    repo: 'https://github.com/Sreeya003/Identifying-Key-Determinants-of-Heart-Disease',
    featured: false,
  },
  {
    title: 'Dehazing with Object Detection',
    period: 'Oct 2023 — Jun 2024',
    summary: 'Image & video dehazing pipeline using Dark Channel Prior + structural priors, paired with YOLOv5 detection.',
    bullets: [
      'Optimized for high-fidelity video processing, reducing artifacts and preserving edge structure.',
      'Deployed an interactive Streamlit app for upload-to-detection workflow on real-world frames.',
    ],
    tags: ['Dark Channel Prior', 'YOLOv5', 'Streamlit', 'OpenCV'],
    icon: 'fog',
    repo: 'https://github.com/Sreeya003/Dehazing-with-object-detection',
    featured: false,
  },
  {
    title: 'Cancer Data Analysis Dashboard',
    period: 'Mar 2024 — Apr 2024',
    summary: 'Power BI dashboard analyzing global cancer incidence and mortality trends (2000–2019) for stakeholder review.',
    bullets: [
      'Interactive filters by year, age group, and cancer type for drill-down analysis.',
      'Surfaced multi-year trend shifts and age-specific prevalence patterns.',
    ],
    tags: ['Power BI', 'Dashboarding', 'Public Health'],
    icon: 'pulse',
    repo: 'https://github.com/Sreeya003/Cancer-data-analysis-with-Power-Bi',
    featured: false,
  },
  {
    title: 'Liver Disease Prediction (ILPD)',
    period: 'Mar 2023 — Aug 2023',
    summary: 'Compared 8 ML classifiers on the Indian Liver Patient Dataset; deployed user-facing prediction interface.',
    bullets: [
      'Models compared: LogReg, KNN, SVM, RF, AdaBoost, GBM, DT, NB.',
      'Logistic Regression selected — 75% accuracy on held-out evaluation.',
      'Flask web app for collecting clinical inputs and returning predicted risk.',
    ],
    tags: ['Scikit-learn', 'Flask', 'Model Comparison'],
    icon: 'flask',
    repo: 'https://github.com/Sreeya003/Liver_Disease_Prediction',
    featured: false,
  },
];

export const leadership = [
  {
    role: 'Women in Engineering Chairperson',
    org: 'IEEE, MVSREC',
    location: 'Hyderabad, India',
    period: 'Jul 2023 — Jun 2024',
    bullets: [
      'Planned and delivered technical workshops and networking sessions, iterating event formats from participant feedback.',
      'Designed a structured student–alumni mentorship program — career guidance, project planning, interview prep.',
      'Executed STEM outreach for school students with age-appropriate technical sessions, focused on women in STEM.',
      'Coordinated industry speaker sessions and career clinics — expanding member exposure to technical roles and hiring expectations.',
    ],
  },
];

export const certifications = [
  'Large Language Model Operations (LLMOps)',
  'Introduction to R Programming for Data Science',
  'AWS Academy Graduate — Machine Learning Foundations',
  'Data Science with Python',
  'AWS Academy Graduate — Data Engineering',
  'Power BI for Beginners',
  'Smart Coder',
];

export const navLinks = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'projects', label: 'Projects', number: '03' },
  { id: 'education', label: 'Education', number: '04' },
  { id: 'leadership', label: 'Leadership', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];
