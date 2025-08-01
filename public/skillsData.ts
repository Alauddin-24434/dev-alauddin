// skillsData.ts (updated)

import {
  Atom,
  Triangle,
  Type,
  FileText as FileJs,
  File as FileHtml,
  FileCode as FileCss,
  Wind,
  Redo,
  Fish,
  Droplet,
  Leaf,
  Rocket,
  Link,
  Database,
  Flame,
  Bolt,
  GitBranch,
  Dock,
  Cloud,
  Workflow,
  Figma,
  Palette,
  MonitorSmartphone,
  Users,
  TestTube,
  Kanban,
  Settings,
  Bug,
  Brush,
  Code2,
  Server,
  ShieldCheck,
  LayoutDashboard,
  LucideIcon,
  Lightbulb,
  Repeat,
  Blocks,
  LayoutGrid,
  Scale,
} from "lucide-react";

// Define a type for skill icons
export const skillIcons: { [key: string]: LucideIcon } = {
  React: Atom,
  "Next.js": Triangle,
  TypeScript: Type,
  JavaScript: FileJs,
  HTML5: FileHtml,
  CSS3: FileCss,
  "Tailwind CSS": Wind,
  Redux: Redo,
  Zustand: Fish,
  Sass: Droplet,
  "Node.js": Leaf,
  "Express.js": Rocket,
  "REST APIs": Link,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "Firebase": Flame,
  "Supabase": Bolt,
  "Prisma": Database,
  Git: GitBranch,
  Docker: Dock,
  Vercel: Triangle,
  "GitHub Actions": Workflow,
  "CI/CD": Workflow,
  Figma: Figma,
  "Responsive Design": MonitorSmartphone,
  "User Experience": Users,
  Jest: TestTube,
  "Unit Testing": TestTube,
  "Integration Testing": TestTube,
  Jira: Kanban,
  Trello: Kanban,
  Asana: Kanban,
  "VS Code": Settings,
  ESLint: Bug,
  Prettier: Brush,
  "Clean Code": Lightbulb,
  DRY: Repeat,
  "Modular Design": Blocks,
  "MVC Pattern": LayoutGrid,
  "Error Handling": Bug,
  Scalability: Scale,
  default: Lightbulb,
};

// Define a type for a single skill sub-category
export interface SkillSubCategory {
  title: string;
  description: string;
  skills: string[];
}

// Define a type for the main skill categories (the 3 tabs)
export interface MainSkillCategory {
  title: string;
  icon: LucideIcon;
  subCategories: SkillSubCategory[];
}

// The new, consolidated skill categories
export const skillCategories: MainSkillCategory[] = [
  {
    title: "Frontend & UI/UX",
    icon: Code2,
    subCategories: [
      {
        title: "Frontend Development",
        description: "Building interactive and responsive user interfaces.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Redux",
          "Zustand",
        ],
      },
      {
        title: "Design & UI/UX",
        description: "Crafting intuitive and visually appealing user experiences.",
        skills: ["Figma", "Responsive Design", "User Experience"],
      },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Server,
    subCategories: [
      {
        title: "Backend Development",
        description: "Developing robust and scalable server-side applications.",
        skills: ["Node.js", "Express.js", "REST APIs"],
      },
      {
        title: "Database & Storage",
        description: "Managing and optimizing data storage solutions.",
        skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma"],
      },
      {
        title: "DevOps & Cloud",
        description: "Automating deployment, scaling, and infrastructure management.",
        skills: ["Git", "Docker", "Vercel", "GitHub Actions", "CI/CD"],
      },
    ],
  },
  {
    title: "Tools & Principles",
    icon: LayoutDashboard,
    subCategories: [
      {
        title: "Testing & Quality Assurance",
        description: "Ensuring code reliability and application stability.",
        skills: ["Jest", "Unit Testing", "Integration Testing"],
      },
      {
        title: "Project Management & Tools",
        description: "Organizing workflows and collaborating effectively.",
        skills: ["Jira", "Trello", "Asana", "VS Code", "ESLint", "Prettier"],
      },
      {
        title: "Core Principles",
        description: "Adhering to best practices for maintainable and efficient code.",
        skills: ["Clean Code", "DRY", "Modular Design", "MVC Pattern", "Error Handling", "Scalability"],
      },
    ],
  },
];