"use client"

import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Card, CardContent } from "@/components/ui/card"

// Import your Lucide icons
import {
  Atom,
  Triangle,
  Type,
  FileJsonIcon as FileJs,
  FileIcon as FileHtml,
  FileCodeIcon as FileCss,
  Wind,
  Redo,
  Fish,
  Droplet,
  Leaf,
  Rocket,
  Terminal,
  Shield,
  Link,
  GitGraph,
  Bird,
  Database,
  Flame,
  Bolt,
  GitBranch,
  Docker,
  Cloud,
  Workflow,
  Figma,
  PenTool,
  Image,
  MonitorSmartphone,
  Users,
  DraftingCompass,
  TestTube,
  Target,
  Kanban,
  Settings,
  Bug,
  Brush,
  Package,
  Repeat,
  Blocks,
  LayoutGrid,
  Scale,
  Lightbulb,
  Code2,
  Server,
  Palette,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react"

// Mapping skill names to Lucide icons for display
const skillIcons: { [key: string]: React.ElementType } = {
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
  Python: Terminal,
  Django: Shield,
  PHP: Terminal,
  "REST APIs": Link,
  GraphQL: GitGraph,
  NestJS: Bird,
  MongoDB: Database,
  PostgreSQL: Database,
  MySQL: Database,
  Firebase: Flame,
  Supabase: Bolt,
  Redis: Redo,
  Prisma: Database,
  Git: GitBranch,
  Docker: Docker,
  AWS: Cloud,
  Vercel: Triangle,
  Netlify: Cloud,
  "GitHub Actions": Workflow,
  "CI/CD": Workflow,
  Figma: Figma,
  "Adobe XD": PenTool,
  Photoshop: Image,
  "Responsive Design": MonitorSmartphone,
  "User Experience": Users,
  Prototyping: DraftingCompass,
  Jest: TestTube,
  Cypress: Target,
  "React Testing Library": TestTube,
  "Unit Testing": TestTube,
  "Integration Testing": TestTube,
  Jira: Kanban,
  Trello: Kanban,
  Asana: Kanban,
  "VS Code": Settings,
  ESLint: Bug,
  Prettier: Brush,
  Webpack: Package,
  Vite: Bolt,
  "Clean Code": Lightbulb,
  DRY: Repeat,
  "Modular Design": Blocks,
  "MVC Pattern": LayoutGrid,
  "Error Handling": Bug,
  Scalability: Scale,
  default: Lightbulb,
}

// Skill categories with skills inside
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
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
    title: "Backend Development",
    icon: Server,
    description: "Developing robust and scalable server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    description: "Managing and optimizing data storage solutions.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Prisma",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "Automating deployment, scaling, and infrastructure management.",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    description: "Crafting intuitive and visually appealing user experiences.",
    skills: [
      "Figma",
      "Responsive Design",
      "User Experience",
      
    ],
  },
  {
    title: "Testing & Quality Assurance",
    icon: ShieldCheck,
    description: "Ensuring code reliability and application stability.",
    skills: [
      "Jest",
      
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    title: "Project Management & Tools",
    icon: LayoutDashboard,
    description: "Organizing workflows and collaborating effectively.",
    skills: [
      "Jira",
      "Trello",
      "Asana",
      "VS Code",
      "ESLint",
      "Prettier",
      
    ],
  },
  {
    title: "Core Principles",
    icon: GitBranch,
    description: "Adhering to best practices for maintainable and efficient code.",
    skills: [
      "Clean Code",
      "DRY",
      "Modular Design",
      "MVC Pattern",
      "Error Handling",
      "Scalability",
    ],
  },
]

export function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const activeCategory = skillCategories[activeCategoryIndex]

  // Initialize AOS animations on mount and refresh on category change
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // animation triggers every time section enters viewport
      easing: "ease-in-out",
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [activeCategoryIndex])

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies, tools, and principles I
            master to build exceptional digital products.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategoryIndex(index)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeCategoryIndex === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              <category.icon className="w-4 h-4" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display Area */}
        <Card className="p-8 animate-scale-in" data-aos="zoom-in" data-aos-delay="200">
          <CardContent className="p-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <activeCategory.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeCategory.title}</h3>
                <p className="text-muted-foreground text-base">{activeCategory.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
              {activeCategory.skills.map((skill, skillIndex) => {
                const IconComponent = skillIcons[skill] || skillIcons["default"]
                return (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    data-aos="fade-up"
                    data-aos-delay={skillIndex * 50}
                  >
                    <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-base font-medium">{skill}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
