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
    title: "AI Revenue Recovery",
    category: "Payments · AI · Backend",
    description:
      "A payment recovery platform concept designed to help identify failed payment journeys and coordinate recovery attempts with an AI-assisted service.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Python", "FastAPI", "React"],
    github: "https://github.com/mdarifanwar",
    featured: true,
  },
  {
    number: "02",
    title: "SkillXchange",
    category: "Full-stack web application",
    description:
      "A peer-to-peer skill exchange platform concept where people can connect, share what they know, and learn skills from one another.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/mdarifanwar",
    featured: true,
  },
  {
    number: "03",
    title: "Protein Structure Prediction",
    category: "Machine learning · Research",
    description:
      "A machine-learning project exploring protein sequence inputs and structure-related prediction using a trained model and Python tooling.",
    stack: ["Python", "Machine Learning", "Scikit-learn", "Joblib"],
    github: "https://github.com/mdarifanwar",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST APIs", "JWT"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { group: "Tools & Practices", items: ["Git", "GitHub", "Maven", "Postman", "OOP", "DSA"] },
];