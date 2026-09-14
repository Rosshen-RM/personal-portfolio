import {
  Code2,
  Layers,
  ShieldCheck,
  Server,
  Wrench,
  Code,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import type {
  ProjectData,
  SkillCategory,
  Milestone,
  ToolkitItem,
  StatItem,
  NavLink,
} from "../types/portfolio.types";

import a2lImg from "../assets/A2L.jpg";
import timesheetImg from "../assets/timesheet.jpg";

export const personalInfo = {
  name: "Rosshen R M",
  roleHeadline: "Junior Developer (1+ Year) • Front-End & Full-Stack Engineer",
  email: "rosshenramasamy.rm@gmail.com",
  phone: "7305325225",
  location: "India (IST UTC+5:30) • Open to Full-Time, Remote & On-Site Roles",
  github: "https://github.com/Rosshen-RM/personal-portfolio",
  linkedin:
    "https://www.linkedin.com/in/rosshen-r-m-10aaa6200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  cloneRepoCommand:
    "git clone https://github.com/Rosshen-RM/personal-portfolio.git",
  bio: "I am a self-motivated and passionate Junior Developer with one year of professional experience in building scalable web applications. I possess strong programming and communication skills with a keen interest in learning emerging technologies. My goal is to contribute to organizational growth while continuously enhancing my technical expertise.",
};

export const heroRoles = [
  "Junior Developer",
  "React & Angular Developer",
  "Spring Boot & REST API Engineer",
  "Legacy Application Conversion Specialist",
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const quickStats: StatItem[] = [
  {
    icon: Briefcase,
    label: "Professional Experience",
    value: "1+ Year @ Saazvat",
  },
  {
    icon: GraduationCap,
    label: "Degree & CGPA",
    value: "B.E CSE • 8.24 CGPA",
  },
  {
    icon: Code,
    label: "Core Stack",
    value: "React, Angular, Java",
  },
];

export const educationData = [
  {
    institution: "Rajalakshmi Institute of Technology",
    degree: "B.E Computer Science and Engineering",
    period: "2020 — 2024",
    score: "CGPA: 8.24",
    icon: GraduationCap,
    highlights: "Specialized in data structures, web technologies, software engineering, and database management.",
  },
  {
    institution: "Sri Venkateshwara Matriculation.Hr.School",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019 — 2020",
    score: "Percentage: 76%",
    icon: GraduationCap,
    highlights: "Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    institution: "Sri Venkateshwara Matriculation.Hr.School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "2017 — 2018",
    score: "Percentage: 82%",
    icon: GraduationCap,
    highlights: "Foundational mathematics, science, and computer literacy.",
  },
];

export const toolkitData: ToolkitItem[] = [
  {
    icon: Code2,
    title: "Front-End Engineering (React & Angular)",
    desc: "Designing and developing scalable web applications using React, Angular, TypeScript, and modern Tailwind CSS component libraries.",
    tags: ["React 19", "Angular", "TypeScript", "Tailwind CSS", "HTML5"],
    accent: "text-cyan-500 dark:text-[#0afcdb]",
    spotlight: "rgba(10, 252, 219, 0.18)",
  },
  {
    icon: Layers,
    title: "Legacy Application Modernization",
    desc: "Migrating complex Excel-based calculation tools and legacy desktop software into intuitive, automated, high-speed web suites.",
    tags: ["Excel Migration", "Desktop to Web", "Formula Automation", "UI/UX"],
    accent: "text-purple-500 dark:text-purple-400",
    spotlight: "rgba(168, 85, 247, 0.18)",
  },
  {
    icon: Server,
    title: "Backend & RESTful Microservices",
    desc: "Developing secure REST APIs, business service layers, Hibernate persistence, and optimizing backend queries for peak performance.",
    tags: ["Java", "Spring Boot", "RESTful APIs", "Hibernate", "Microservices"],
    accent: "text-emerald-500 dark:text-emerald-400",
    spotlight: "rgba(16, 185, 129, 0.18)",
  },
  {
    icon: ShieldCheck,
    title: "Databases & Agile Development",
    desc: "Managing PostgreSQL relational databases, conducting code reviews, implementing strict validation logic, and managing Git/GitHub workflows.",
    tags: ["PostgreSQL", "Postman", "Git / GitHub", "VS Code", "IntelliJ IDEA"],
    accent: "text-amber-500 dark:text-amber-400",
    spotlight: "rgba(245, 158, 11, 0.18)",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code2,
    accentColor: "text-cyan-500",
    tagColor:
      "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-[#0afcdb] border-cyan-200/50 dark:border-cyan-500/20",
    gradient: "from-cyan-500/10 to-blue-500/0",
    desc: "Crafting modern, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React 19 / 18", level: "Advanced" },
      { name: "Angular", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / Semantic UI", level: "Advanced" },
      { name: "CSS3 / Modern Layouts", level: "Advanced" },
      { name: "Vite & Tooling", level: "Proficient" },
    ],
    highlights: [
      "Built dynamic form calculation engines preserving complex Excel formula models",
      "Created modular, reusable UI components in React and Angular",
      "Optimized DOM rendering and responsiveness across mobile, tablet, and desktop",
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: Server,
    accentColor: "text-purple-500",
    tagColor:
      "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-500/20",
    gradient: "from-purple-500/10 to-indigo-500/0",
    desc: "Designing secure backend architectures, RESTful APIs, and relational schemas.",
    skills: [
      { name: "Java", level: "Proficient" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Hibernate / JPA", level: "Proficient" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Microservices (Basics)", level: "Intermediate" },
      { name: "SQL & Query Optimization", level: "Proficient" },
    ],
    highlights: [
      "Integrated secure REST APIs and optimized PostgreSQL database queries",
      "Implemented comprehensive input validation and automated calculation pipelines",
      "Structured enterprise backend services with clean MVC architecture",
    ],
  },
  {
    id: "tools",
    title: "Tools, Platforms & Testing",
    icon: Wrench,
    accentColor: "text-emerald-500",
    tagColor:
      "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/20",
    gradient: "from-emerald-500/10 to-teal-500/0",
    desc: "Maintaining efficient developer workflows, versioning, and API testing.",
    skills: [
      { name: "VS Code", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Proficient" },
      { name: "Postman API Testing", level: "Proficient" },
      { name: "Git", level: "Advanced" },
      { name: "GitHub Collaboration", level: "Advanced" },
      { name: "Code Review & Standards", level: "Proficient" },
    ],
    highlights: [
      "Managed feature branch lifecycles, pull requests, and Git code reviews",
      "Created Postman automated API test suites for backend validation",
      "Collaborated across cross-functional engineering and product teams",
    ],
  },
];

export const experienceData: Milestone[] = [
  {
    role: "Junior Developer (1+ Year)",
    project: "Saazvat Technologies Private Limited",
    period: "October 2024 — Present",
    description:
      "Working as a Junior Developer responsible for designing, developing, and deploying scalable web applications using React, Angular, Java, and Spring Boot.",
    achievements: [
      "Designed and developed scalable web applications using React/Angular and Spring Boot.",
      "Integrated REST APIs and optimized backend queries for improved database performance.",
      "Collaborated with cross-functional teams to enhance product functionality and user experience.",
      "Performed code reviews, implemented strict validation rules, and managed PostgreSQL databases.",
    ],
    technologies: [
      "React",
      "Angular",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "TypeScript",
      "REST APIs",
      "Git",
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "a2l-calculator",
    title: "A2L Calculator – Legacy Application Conversion",
    category: "Modernization",
    tagline:
      "Migrated the Excel-based HVAC calculation tool into a modern, web-based application.",
    desc: "Replicated and preserved all complex Excel formulas and logic in an interactive web interface with dynamic input fields based on room specs and equipment parameters.",
    longDesc:
      "Objective: Migrated the Excel-based HVAC calculation tool into a modern, web-based application. It automates complex HVAC safety evaluations to minimize manual errors, improve accuracy, and provide centralized updates for effortless enterprise maintenance.",
    img: a2lImg,
    github: "https://github.com/Rosshen-RM/personal-portfolio",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Spring Boot", "REST APIs"],
    metrics: [
      "100% replication of all Excel formulas and validation rules",
      "Dynamic input fields based on room specs & equipment type",
      "Automated complex HVAC calculations minimizing manual errors",
      "Centralized cloud updates for seamless maintenance",
    ],
    features: [
      "Dynamic adaptive input fields driven by room specs and equipment parameters",
      "Real-time formula calculation evaluation with zero delay",
      "Elimination of manual spreadsheet calculation errors",
      "Scalable web architecture with centralized cloud updates",
    ],
    featured: true,
  },
  {
    id: "sound-analyzer",
    title: "Sound Analyzer Measurement Suite",
    category: "Modernization",
    tagline:
      "Converted a legacy desktop application into a web-based sound measurement tool.",
    desc: "Supported both ducted and non-ducted CLM devices with adaptive input fields, streamlined measurement pipelines, validation logic, and modern UI design.",
    longDesc:
      "Objective: Converted a legacy desktop application into a modern web-based sound measurement tool. It supports ducted and non-ducted CLM devices with adaptive fields, streamlining measurements through automated logic while enhancing usability, data accuracy, and speed.",
    github: "https://github.com/Rosshen-RM/personal-portfolio",
    tags: ["React", "JavaScript", "Spring Boot", "Angular", "Data Visualization", "REST APIs"],
    metrics: [
      "Full support for ducted & non-ducted CLM devices",
      "Streamlined measurement process with automated validation",
      "Enhanced usability, data accuracy, and speed through modern UI",
    ],
    features: [
      "Adaptive input fields tailored for ducted & non-ducted acoustic devices",
      "Streamlined measurement workflow with integrated validation",
      "Instant browser-based analytics eliminating desktop installations",
      "High-speed, responsive visual interface",
    ],
    featured: true,
  },
  {
    id: "timesheet-system",
    title: "Enterprise Timesheet & Management Suite",
    category: "Full Stack",
    tagline:
      "Full-stack employee timesheet logging, manager review pipeline, and PostgreSQL database.",
    desc: "Engineered scalable REST APIs, role-based workflows, and PostgreSQL database queries to streamline employee time tracking and managerial approvals.",
    longDesc:
      "End-to-end full-stack web application designed and developed with Spring Boot and React. Features role-based access control, persistent PostgreSQL transaction logging, weekly time reports, and administrative audit trails.",
    img: timesheetImg,
    github: "https://github.com/Rosshen-RM/personal-portfolio",
    tags: ["Spring Boot", "PostgreSQL", "React", "REST APIs", "Java", "Hibernate"],
    metrics: [
      "Role-based access control (RBAC)",
      "Optimized PostgreSQL queries for high concurrency",
      "Clean RESTful API architecture with Spring Data JPA",
    ],
    features: [
      "Intuitive weekly work log submission and daily timesheet tracking",
      "Manager review, approval, and rejection workflows with remarks",
      "Historical data filtering and time summary reports",
      "Structured Spring Boot REST API backend with exception handling",
    ],
  },
  {
    id: "personal-portfolio-2",
    title: "Modern Developer Portfolio 2.0",
    category: "Frontend",
    tagline:
      "High-performance personal website built with React 19, TypeScript, and Tailwind CSS.",
    desc: "A sleek, responsive developer portfolio featuring dark/light modes, scroll-driven interactive card stacking, case study dossiers, and live resume data.",
    longDesc:
      "Engineered from the ground up to showcase professional experience at Saazvat Technologies, legacy modernization case studies, education credentials, and technical skills with fast load times.",
    github: "https://github.com/Rosshen-RM/personal-portfolio",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Lucide"],
    metrics: [
      "100% responsive across mobile, tablet, and desktop",
      "Scroll-driven sticky stacking cards animation",
    ],
    features: [
      "Scroll-driven sticky stacking project cards",
      "Live dual dark/light theme switching",
      "Interactive case study dossier modals",
      "Comprehensive education and career timeline",
    ],
  },
];
