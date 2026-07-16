// ─────────────────────────────────────────────
//  src/data/content.ts
//  Single source of truth for all portfolio content.
//  UI components must map over these exports — no
//  hardcoded strings inside .tsx files.
// ─────────────────────────────────────────────

// ── HERO ──────────────────────────────────────
export const hero = {
  greetings: ["hey there 👋", "how are u?", "welcome! 🌱", "good to see you.", "dont think twice, it's alright"],
  name: "Hamud Abdul Aziz",
  role: "Computer Science Student",
 tagline: "I write code that works perfectly. (On my machine, at least.) Data-driven mind in the world of data-consuming heart",
  bio: "Hiiii, my name is Hamud. I'm a CS student, which is mostly just a fancy way of saying I am my family's unpaid IT support. I survive on caffeine, stubbornness, and the delusion that my code will compile on the first try.",avatar: "/images/profile.jpeg",
  links: {
    github: "https://github.com/abdazizhamud",
    linkedin: "https://www.linkedin.com/in/hamud-abdul-aziz/",
    resume: "/docs/CV_GLOBAL.pdf",
    instagram:"",
    spotify:"",
    letterboxd:""
  },
};

// ── ABOUT ──────────────────────────────────────
export type About = {
  title: string;
  avatars: string[]; // Changed from a single string to an array
  summary: string;
  paragraphs: string[];
};

export const about: About = {
  title: "About Me",
  avatars: [
    "/images/about1.webp", // Replace with your actual image paths
    "/images/about2.webp",
    "/images/about3.webp",
    "/images/about4.webp",
  ],
  summary: "A passionate computer sciences student mainly focus in data analytics and software engineering",
  paragraphs: [
    "I'm an Informatics student specializing myself in backend architecture, systems programming, and data analytics. My journey is driven by a curiosity about how complex modern data works and how to grow with them",
    "Currently, I'm focusing on learning and doing projects on software engineering and data analytics. I have hands-on experience with technologies like Next.js, ExpressJs, and PostgreSQL, and I love diving deep into how can I explain data to common people and make the data useful for them",
    "My goal is to secure a challenging software engineering or data analytics internship for Summer 2026 where I can apply my skills and grow within a professional team.",
  ],
};

// ── PROFESSIONAL EXPERIENCE ───────────────────
export type ProfessionalExperience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export const professionalExperiences: ProfessionalExperience[] = [
  {
    company: "Department of Computer Science Unpad ",
    logo: "/images/unpad.png",
    role: "Laboratory Teaching Assisant",
    period: "Mar 2025 — Jun 2026",
    location: "Hybrid, Jatinangor",
    bullets: [
      "Mentored and assessed 150+ student across two years",
      "Designed quizzes, debugging exercises, and supervised lab exams to maintain academic integrity.",
      "Collaborated with lecturers to develop and standardize grading rubrics across multiple lab sections.",
    ],
    tags: ["System Database", "Algorithm and Programming", "OOPs", "Network Engineering"],
  },
  {
    company: "Center for Innovation in Teaching and Learning (PIPP) Unpad ",
    logo: "/images/unpad.png",
    role: "Asset Developer Intern",
    period: "Oct 2025 — Jan 2026",
    location: "Jatinangor, ID · Hybrid",
    bullets: [
      "Pioneered and played a key role in the comprehensive virtualization of the campus, successfully recreating the university's environment and atmosphere within the Roblox engine.",
      "Meticulously modeled 9+ iconic university buildings with 1:1 precision, ensuring high-fidelity accuracy by rescaling real-world dimensions to program-specific scales.",
      "Developed 2 interactive faculty-themed mini-games to enhance user engagement and provide an immersive, hands-on experience within the virtual campus.",
      "Fostered a highly cooperative workflow within a 10-person development team, ensuring technical cohesion and the successful execution of complex project milestones.",
    ],
    tags: ["Blender", "Lua", "Roblox Engine"],
  },
];

// ── ORGANIZATIONAL EXPERIENCE ─────────────────
export type OrgExperience = {
  organization: string;
  logo: string;
  role: string;
  period: string;
  description: string;
};

export const orgExperiences: OrgExperience[] = [
  {
    organization: "RDAT, BEM Kema FMIPA Unpad ",
    logo: "/images/unpad.png",
    role: "Backend Lead & Co–Lead Consultant Research Team",
    period: "May 2025 — Jan 2026",
    description:
      "Served as Backend Lead for the BEM FMIPA website, responsible for API development, database design, and system architecture decisions and also appointed as Co–Vice Consultant for Research, supporting research project development, methodology structuring, and analytical review within the bureau.",

  },
  {
    organization: "Himpunan Mahasiswa Teknik Informatika UNPAD",
    logo: "/images/himatif.jpg",
    role: "Staff of Career Development Departent",
    period: "Mar 2024 — Dec 2025",
    description:
      "Organized a 80 student company visit to one of the biggest bank in Indonesia",
  },
];

// // ── SKILLS MATRIX ─────────────────────────────
// export type SkillCategory = {
//   category: string;
//   skills: string[];
// };

// export const skillCategories: SkillCategory[] = [
//   {
//     category: "Backend",
//     skills: ["Go", "Python", "Node.js", "Rust (learning)", "gRPC", "REST", "GraphQL", "FastAPI", "Gin"],
//   },
//   {
//     category: "Systems",
//     skills: ["Linux (Debian/Arch)", "POSIX C", "TCP/IP", "Socket Programming", "Memory Management", "Concurrency"],
//   },
//   {
//     category: "Data & Messaging",
//     skills: ["PostgreSQL", "MySQL", "Redis", "Apache Kafka", "RabbitMQ", "ClickHouse"],
//   },
//   {
//     category: "Infrastructure & DevOps",
//     skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Nginx"],
//   },
//   {
//     category: "Tools & Practices",
//     skills: ["Git", "Neovim", "Postman", "k6", "Datadog", "ADR", "TDD", "Code Review"],
//   },
// ];
// ── SKILLS MATRIX ─────────────────────────────
export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Software Engineering",
    skills: [
      "Next.js & React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "REST",
      "Docker",
      "Git",
    ],
  },
  {
    category: "Data Analytics & AI",
    skills: [
      "Python(Pandas)",
      "Data Analysis (SQL)",
      "Data Plotting",
      "Data Visualization",
      "Data cleansing and data extraction",
      "Machine Learning and Deep Learning",
    ],
  },
];

// ── PROJECTS ──────────────────────────────────

// Pinned (major) projects
export type PinnedProject = {
  title: string;
  thumbnail: string;
  summary: string;
  techStack: string[];
  bullets: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const pinnedProjects: PinnedProject[] = [
  {
    title: "Automated Garment Tracking & Quality Control System",
    thumbnail: "images/bgi_tracker.png",
    summary:
      "A QR-code-integrated production tracking system designed to automate garment manufacturing workflows and provide real-time progress visibility for both factory admins and clients.",
    techStack: ["Nextjs", "Docker","Server-Management", "QRCODE", "Postgres","Cloudflare"],
    bullets: [
      "Engineered a real-time production tracking system using Next.js and FastAPI, enabling factory admins to monitor daily garment batches and worker activities seamlessly.",
      "Developed an integrated QR Code scanning module for field workers to perform automated scan-in/scan-out, reducing manual logging errors.",
      "Deployed the system on a custom-built local Ubuntu server, implementing Cloudflare Tunnels for secure external routing and domain management without exposing the internal network.",
    ],
    liveUrl: "https://konveksibgi.com",
    repoUrl: "https://github.com/abdazizhamud/garment-automation",
  },
  {
    title: "NutriMatch: AI-Powered Personalized Diet & Allergen-Smart Recommendation System",
    thumbnail: "/images/projek1.png",
    summary:
      "NutriMatch is an AI-powered meal plan recommendation web app that helps users create weekly meal plans based on their personal nutritional needs and food allergy safety.",
    techStack: ["Python", "FastApi", "Tensorflow", "Keras", "Nextjs"],
    bullets: [
      "Analyzed and processed multi-dimensional user health data (age, gender, BMI, activity levels, and diet goals) to build automated calculators for BMR, TDEE, and daily caloric targets.",
      "Designed and evaluated a multi-class Deep Learning classification model using TensorFlow/Keras to cross-reference dense food ingredient datasets against user allergy profiles.",
      "Mitigated critical medical risks by driving model optimization based on the Recall metric, successfully minimizing False Negatives to ensure hazardous allergens were strictly filtered out",
      "Developed data-driven insight engines by engineering custom training pipelines and wrapping the predictive models into live endpoints, enabling automated, personalized 7-day meal plan recommendations.",
    ],
    liveUrl: "https://nutrimatch-app.vercel.app/",
    repoUrl: "kurtz17/NutriMatch",
  },
  {
    title: "BeliBiji - E-Commerce & Biodiversity Crowdfunding Platform",
    thumbnail: "/images/projek2.png",
    summary:
      "BeliBiji is an integrated web platform that combines retail e-commerce (B2C) functionality with natural resource conservation initiatives. ",
    techStack: ["JavaScript", "TypeScript", "ExpressJs", "Supabase", "NextJs", "MidTrans"],
    bullets: [
      "Designed and developed a secure, scalable RESTful API architecture for an e-commerce and ecological crowdfunding web application using Node.js/Express and PostgreSQL.",
      "Integrated third-party Payment Gateway APIs in Sandbox mode to efficiently process automatic B2C shopping checkouts and micro-donation transactions.",
      "Developed an AI-driven product review analysis system using a Decision Tree model and built its backend endpoint to process textual feedback parameters, enabling automated sentiment and rating classification.",
    ],
    liveUrl: "https://belibiji.dzikribassyril.me/",
    repoUrl: "https://github.com/dzikribassyril/BeliBIji",
  },
  {
    title: "KotakP3K (MediProfen): Virtual Reality Emergency Medical Training Simulation",
    thumbnail: "/images/projek3.png",
    summary:
      "MediProfen VR is a Virtual Reality-based first aid training simulation.",
    techStack: ["Blender", "C#", "Figma", "Unity", ],
    bullets: [
      "Conceptualized and developed 8 distinct medical-response animations using Blender to realistically simulate real-time clinical patient symptoms and trauma reactions.",
      "Designed lifelike character rigging and visual asset feedback loops for critical scenarios, including choking indicators, respiratory distress reactions, and post-injection recoveries.",
      "Collaborated within a 5-member cross-functional team to integrate 3D environmental assets, logic-driven scenario state machines, and gamified user evaluation systems.",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/yumairai/MediProfen_KotakP3K_IMK7",
  },
  {
    title: "Kamojang PLTP Geothermal Data Analytics & Real-Time Dashboard",
    thumbnail: "/images/projek4.png",
    summary:
      "Developed an interactive dashboard and machine learning system that processes NASA satellite data to forecast temperatures and detect real-time anomalies at the Kamojang PLTP.",
    techStack: ["Time Series", "Machine Learning", "Data Visualization", "Data Cleaning", ],
    bullets: [
      "Engineered an end-to-end machine learning system to process 16 years of NASA satellite data, resolving severe data gaps using linear interpolation and climatology baselines to ensure reliable analysis.",
      "Trained and evaluated multiple regression algorithms for temperature forecasting, achieving a highly accurate Mean Absolute Error of 0.645°C and an R² score of 0.7560 utilizing a Random Forest model.",
      "Deployed the forecasting model and unsupervised anomaly detection algorithms (Isolation Forest, Local Outlier Factor) into a real-time monitoring interface to successfully track and isolate high-confidence subsurface thermal events.",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/abdazizhamud/Land-Surface-Temperature-Anomaly-Prediction-using-Evolutionary-Fuzzy-System",
  },
];

// List (smaller) projects
export type ListProject = {
  title: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
};

export const listProjects: ListProject[] = [
  {
    title: "Portals — SSH Tunnel Manager CLI",
    thumbnail: "https://placehold.co/64x64/e2e8f0/64748b?text=PO",
    description: "A terminal utility for managing persistent SSH tunnels with named profiles and auto-reconnect logic.",
    techStack: ["Go", "Cobra CLI", "YAML"],
    repoUrl: "https://github.com",
  },
  {
    title: "Logdrain — Structured Log Shipper",
    thumbnail: "https://placehold.co/64x64/e2e8f0/64748b?text=LD",
    description: "A sidecar agent that tails container logs, parses JSON, and ships to ClickHouse for cheap long-term retention.",
    techStack: ["Python", "ClickHouse", "Docker"],
    repoUrl: "https://github.com",
  },
  {
    title: "Blink — URL Shortener API",
    thumbnail: "https://placehold.co/64x64/e2e8f0/64748b?text=BL",
    description: "Minimal URL shortener with analytics, custom slugs, and expiration — built as a systems design study.",
    techStack: ["Go", "Redis", "PostgreSQL"],
    repoUrl: "https://github.com",
  },
  {
    title: "Kamus — Indonesian NLP Tokenizer",
    thumbnail: "https://placehold.co/64x64/e2e8f0/64748b?text=KA",
    description: "A rule-based morphological tokenizer for Bahasa Indonesia, supporting affix stripping and compound word detection.",
    techStack: ["Python", "pytest"],
    repoUrl: "https://github.com",
  },
  {
    title: "Watchdog — Uptime Monitor",
    thumbnail: "https://placehold.co/64x64/e2e8f0/64748b?text=WD",
    description: "Cron-based uptime monitoring with Telegram alert integration and a simple SQLite history store.",
    techStack: ["Python", "SQLite", "Telegram Bot API"],
    repoUrl: "https://github.com",
  },
];

// ── CERTIFICATES ──────────────────────────────
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
    {
      title: "Membangun Proyek Deep Learning Tingkat Mahir",
      issuer: "Coding Camp 2026 powered by DBS Foundation, DICODING",
      date: "May 2026",
      badge: "/images/dicoding.png",
      credentialUrl: "https://www.dicoding.com/certificates/JMZVOOE0NXN9",
    },
  {
    title: "Belajar Fundamental Deep Learning",
    issuer: "Coding Camp 2026 powered by DBS Foundation, DICODING",
    date: "May 2026",
    badge: "/images/dicoding.png",
    credentialUrl: "https://www.dicoding.com/certificates/GRX5WW2D3Z0M",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "Jun 2026",
    badge: "/images/cisco.jpg",
    credentialUrl: "https://www.credly.com/badges/6a8348fc-8141-4ea7-b4ae-c42ea37de51a/linked_in_profile",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "May 2026",
    badge: "/images/cisco.jpg",
    credentialUrl: "https://www.credly.com/badges/d3310226-c8d0-4607-94f1-75d3fdea0035/linked_in_profile",
  },
];