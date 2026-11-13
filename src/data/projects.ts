export type Project = {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  overview: string;
  highlights: string[];
  architecture: { layer: string; details: string }[];
  metrics: { label: string; value: string }[];
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "skillxchange",
    title: "SkillXchange",
    tagline: "Peer-to-Peer Learning, Mentorship & Real-Time Collaboration Platform",
    category: "Full-Stack MERN · Real-Time Collaboration",
    description:
      "A full-stack MERN platform for peer-to-peer learning and mentorship, featuring real-time Socket.IO chat, video call support, Google OAuth authentication, and interactive skill matching.",
    overview:
      "SkillXchange is an end-to-end full-stack MERN application engineered to facilitate seamless peer-to-peer knowledge sharing and mentorship. It enables learners and professionals to connect, negotiate learning sessions, exchange messages in real-time, and jump into low-latency video calls. Built with security and developer experience in mind, it pairs Google OAuth and HTTP-only cookie authentication with a clean, responsive mobile-first UI.",
    highlights: [
      "Real-Time Messaging: Instant peer chat with live presence indicators and message synchronization powered by Socket.IO.",
      "WebRTC Video Calling: High-performance audio/video calling integration utilizing Zego Cloud WebRTC SDK.",
      "Robust Authentication: Dual authentication flow featuring Google OAuth and secure HTTP-only cookie-based JWT sessions.",
      "Profile & Skill Directory: Dynamic user profiles with comprehensive skill tags, star ratings, peer feedback, and user reporting mechanisms.",
      "Containerized & Cloud-Ready: Complete multi-stage Docker containerization deployed on Vercel (Frontend) and Render (Backend).",
    ],
    architecture: [
      { layer: "Frontend Client", details: "React 18, Vite, React Router, Context API, Axios with global /api routing, React-Toastify" },
      { layer: "Backend Server", details: "Node.js, Express.js, Socket.IO Server, Passport.js, JWT, Cookie-Parser, CORS" },
      { layer: "Database Layer", details: "MongoDB Atlas with Mongoose ODM schemas, indexes, and document relationships" },
      { layer: "Media & Real-Time", details: "Cloudinary CDN for user avatars & media; Zego Cloud WebRTC for live video sessions" },
      { layer: "DevOps & Deployment", details: "Docker, Docker Compose, Vercel SPA deployment, Render web service" },
    ],
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Real-Time Engine", value: "Socket.IO & WebRTC" },
      { label: "Auth Model", value: "Google OAuth + JWT" },
      { label: "Deployment", value: "Vercel & Render" },
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Docker", "Tailwind CSS"],
    github: "https://github.com/mdarifanwar/SkillXchange",
    demo: "https://skill-xchange-gamma.vercel.app",
    featured: true,
  },
  {
    number: "02",
    slug: "employee-management-api",
    title: "Employee Management API",
    tagline: "Enterprise Workforce & Payroll ERP System with Role-Based Access Control",
    category: "Enterprise ERP · ASP.NET Core & React",
    description:
      "A modern Employee Management & Payroll ERP System with role-based access control (Admin vs User), live workforce analytics, department payroll breakdowns, and automated CI pipelines.",
    overview:
      "Employee Management API is a comprehensive, production-ready enterprise ERP platform built with ASP.NET Core 8 Web API and React 18. Designed for modern human resource departments, it features granular role-based access control (RBAC) separating administrative actions from read-only staff queries, real-time payroll budget analytics, department-level distribution tables, and automated continuous integration testing with 14 xUnit test suites.",
    highlights: [
      "Role-Based Access Control (RBAC): Strict administrative segregation allowing Admins full CRUD capabilities while granting standard Users filtered read & export access.",
      "Workforce & Payroll Analytics: Real-time computational cards tracking active personnel, department counts, total payroll expenses, and average staff compensation.",
      "Department Budget Visualizations: Live budget-share percentage progress bars and department-level compensation distribution tables.",
      "Advanced Records Directory: Instant multi-column sorting, instant search query evaluation, department dropdown filters, and configurable pagination.",
      "1-Click CSV Reporting: Client-side CSV generation allowing instant export of current staff directories for financial records.",
      "Automated Testing Suite: 14 automated unit tests built with xUnit, Moq, and EF Core InMemory database running on GitHub Actions CI.",
    ],
    architecture: [
      { layer: "Backend Web API", details: "ASP.NET Core 8 (.NET 8.0), Clean RESTful Controllers, FluentValidation, Serilog logging" },
      { layer: "Data Access (ORM)", details: "Entity Framework Core 8 with SQLite database, automatic migrations, and data seeding" },
      { layer: "Frontend Portal", details: "React 18, React Router v6, Axios with JWT request interceptors, Modular Enterprise CSS" },
      { layer: "Security", details: "JWT Bearer token authentication, BCrypt password hashing, secure CORS policies" },
      { layer: "Testing & CI/CD", details: "xUnit, Moq, GitHub Actions workflow verifying backend compilation and unit tests" },
    ],
    metrics: [
      { label: "Backend Framework", value: ".NET 8 Web API" },
      { label: "Frontend UI", value: "React 18 ERP" },
      { label: "Unit Test Coverage", value: "14 xUnit Tests" },
      { label: "Security", value: "JWT + RBAC" },
    ],
    stack: ["ASP.NET Core 8", "C#", "React 18", "EF Core", "SQLite", "xUnit", "REST API"],
    github: "https://github.com/mdarifanwar/Employee-Management-API",
    demo: "https://employee-management-api-theta.vercel.app",
    featured: true,
  },
  {
    number: "03",
    slug: "ai-revenue-recovery",
    title: "AI Revenue Recovery",
    tagline: "Intelligent Payment Recovery & Churn Prevention Platform for Razorpay",
    category: "Fintech · AI & Payments · Razorpay Buildathon",
    description:
      "An intelligent payment recovery platform built for the Razorpay AI Revenue Recovery Buildathon, featuring a Java Spring Boot backend, Python FastAPI AI microservice, PostgreSQL, and Razorpay webhook integration.",
    overview:
      "Developed for the Razorpay AI Revenue Recovery Buildathon, RecoverAI is a specialized fintech platform that identifies failed customer payment journeys, evaluates risk telemetry, and coordinates recovery attempts using an AI-assisted scoring model. By parsing webhook events and customer drop-off patterns, the service determines optimal retry strategies to minimize merchant revenue churn.",
    highlights: [
      "Failed Payment Journey Interception: Ingests real-time checkout failures and webhook signals to log transaction failure codes.",
      "AI Recovery Scoring Service: Standalone Python FastAPI microservice that calculates payment recovery probability based on historical telemetry.",
      "Razorpay Sandbox Integration: Integrated with Razorpay test APIs and webhook handlers to simulate payment retry workflows.",
      "Enterprise Banking Backend: High-throughput Java 17 Spring Boot backend featuring Spring Security, JWT tokens, and connection pooling.",
      "ACID Audit Trails: PostgreSQL database recording every transaction attempt, recovery communication, and reconciliation event.",
    ],
    architecture: [
      { layer: "Core Backend", details: "Java 17, Spring Boot 3, Spring Security, Spring Data JPA, JWT Authentication" },
      { layer: "AI Decision Microservice", details: "Python 3.11, FastAPI, Scikit-learn/ML telemetry models, RESTful inter-service communication" },
      { layer: "Frontend Dashboard", details: "React 18, TypeScript, Tailwind CSS, Lucide icons, responsive analytics charts" },
      { layer: "Database", details: "PostgreSQL with relational schema for transactions, users, and audit events" },
      { layer: "Gateway & Infra", details: "Razorpay Payment APIs & Webhooks, Docker, Docker Compose" },
    ],
    metrics: [
      { label: "Challenge", value: "Razorpay Buildathon" },
      { label: "Core Service", value: "Java Spring Boot" },
      { label: "AI Microservice", value: "Python FastAPI" },
      { label: "Database", value: "PostgreSQL" },
    ],
    stack: ["Spring Boot", "FastAPI", "React", "PostgreSQL", "Docker", "Razorpay", "TypeScript"],
    github: "https://github.com/mdarifanwar/RecoverAI",
    demo: "https://recover-ai-lime.vercel.app",
    featured: true,
  },
  {
    number: "04",
    slug: "staffops-api",
    title: "StaffOps API",
    tagline: "Production-Grade High-Performance RESTful Backend Web Service",
    category: "Backend Web Service · Spring Boot & MySQL",
    description:
      "A production-grade RESTful Backend Web Service built with Java 17, Spring Boot 3, Spring Data JPA, and MySQL. Features full CRUD operations, dynamic filtering, 3-tier enterprise architecture, and automated JUnit 5 testing.",
    overview:
      "StaffOps API is a production-grade backend web service built from the ground up with Java 17, Spring Boot 3.1.5, Spring Data JPA, and MySQL 8. Designed following strict 3-tier enterprise architectural patterns, it exposes a suite of clean, validated REST endpoints for managing workforce operational records, training materials, and enterprise tutorial data with dynamic query parameter filtering.",
    highlights: [
      "Complete CRUD Operations: Robust endpoints supporting record creation, retrieval, updates, and batch deletions with accurate HTTP status codes (200, 201, 204, 404, 500).",
      "Dynamic Query Filtering: Efficient database queries supporting title search parameterization (`/api/tutorials?title=...`) and publication state filters (`/api/tutorials/published`).",
      "Strict 3-Tier Layered Architecture: Decoupled Controller, Repository abstraction, and JPA Entity model layers adhering to single-responsibility principles.",
      "Enterprise ORM Mapping: Hibernate 6.x engine mapped to MySQL 8 with HikariCP connection pooling and automatic schema updates.",
      "Configurable Environment Properties: Externalized connection parameters with environment variable fallbacks for cloud containerization.",
      "Automated Testing Suite: Full JUnit 5 unit and context-loading test coverage executed through Apache Maven wrappers.",
    ],
    architecture: [
      { layer: "Language & Runtime", details: "Java 17 LTS (OpenJDK)" },
      { layer: "Backend Framework", details: "Spring Boot 3.1.5, Spring MVC, RESTful Controller endpoints" },
      { layer: "Data Persistence", details: "Spring Data JPA 3.1.5, Hibernate 6.x ORM, HikariCP pool" },
      { layer: "Relational Database", details: "MySQL 8.0+ with indexed schemas and UTF-8 encoding" },
      { layer: "Build & Test Harness", details: "Apache Maven 3.8+, JUnit 5.9+ integration tests" },
    ],
    metrics: [
      { label: "Language", value: "Java 17 LTS (100%)" },
      { label: "Framework", value: "Spring Boot 3.1.5" },
      { label: "ORM Engine", value: "Hibernate 6 & JPA" },
      { label: "Testing", value: "JUnit 5 Automated" },
    ],
    stack: ["Java 17", "Spring Boot 3", "MySQL", "Spring Data JPA", "Hibernate", "JUnit 5", "Maven"],
    github: "https://github.com/mdarifanwar/StaffOps-API",
    featured: true,
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "C#", "Python", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Spring Boot", "ASP.NET Core", "Node.js", "Express", "REST APIs", "JWT"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
  { group: "Tools & Practices", items: ["Git", "GitHub", "Maven", "JUnit 5", "xUnit", "Docker", "Postman", "CI/CD", "OOP", "DSA"] },
];
