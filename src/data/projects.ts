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
    category: "Payments · AI · Backend",
    description:
      "A payment recovery platform concept designed to help identify failed payment journeys and coordinate recovery attempts with an AI-assisted service.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Python", "FastAPI", "React"],
    github: "https://github.com/mdarifanwar",
    featured: true,
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "C#", "Python", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Spring Boot", "ASP.NET Core", "Node.js", "Express", "REST APIs", "JWT"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
  { group: "Tools & Practices", items: ["Git", "GitHub", "xUnit", "Postman", "CI/CD", "OOP", "DSA"] },
];