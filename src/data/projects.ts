export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "SkillXchange",
    category: "Full-Stack MERN · Real-Time Collaboration",
    description:
      "A full-stack MERN platform for peer-to-peer learning and mentorship, featuring real-time Socket.IO chat, video call support, Google OAuth authentication, and interactive skill matching.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Docker"],
    github: "https://github.com/mdarifanwar/SkillXchange",
    demo: "https://skill-xchange-gamma.vercel.app",
    featured: true,
  },
  {
    number: "02",
    title: "Employee Management API",
    category: "Enterprise ERP · ASP.NET Core & React",
    description:
      "A modern Employee Management & Payroll ERP System with role-based access control (Admin vs User), live workforce analytics, department payroll breakdowns, and automated CI pipelines.",
    stack: ["ASP.NET Core 8", "C#", "React 18", "EF Core", "SQLite", "xUnit"],
    github: "https://github.com/mdarifanwar/Employee-Management-API",
    demo: "https://employee-management-api-theta.vercel.app",
    featured: true,
  },
  {
    number: "03",
    title: "AI Revenue Recovery",
    category: "Fintech · AI & Payments · Razorpay Buildathon",
    description:
      "An intelligent payment recovery platform built for the Razorpay AI Revenue Recovery Buildathon, featuring a Java Spring Boot backend, Python FastAPI AI microservice, PostgreSQL, and Razorpay webhook integration.",
    stack: ["Spring Boot", "FastAPI", "React", "PostgreSQL", "Docker", "Razorpay"],
    github: "https://github.com/mdarifanwar/RecoverAI",
    demo: "https://recover-ai-lime.vercel.app",
    featured: true,
  },
  {
    number: "04",
    title: "StaffOps API",
    category: "Backend Web Service · Spring Boot & MySQL",
    description:
      "A production-grade RESTful Backend Web Service built with Java 17, Spring Boot 3, Spring Data JPA, and MySQL. Features full CRUD operations, dynamic filtering, 3-tier enterprise architecture, and automated JUnit 5 testing.",
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