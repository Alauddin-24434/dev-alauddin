import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Code, Palette, Server, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedProjects() {
  const projectCategories = [
    { name: "Full Stack", icon: Code, color: "bg-blue-600" },
    { name: "Frontend", icon: Palette, color: "bg-indigo-600" },
    { name: "Backend", icon: Server, color: "bg-slate-600" },
    { name: "Mobile", icon: Smartphone, color: "bg-blue-700" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution with modern payment integration, real-time inventory management, and an intuitive admin dashboard for seamless business operations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "A collaborative project management application featuring real-time updates, team collaboration tools, advanced analytics, and intuitive task tracking capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Analytics App",
      description:
        "An intelligent weather application with location-based forecasts, interactive maps, weather pattern analysis, and personalized alerts for weather enthusiasts.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Express.js", "Weather API", "D3.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media API",
      description:
        "A robust RESTful API for social media applications with user authentication, post management, real-time messaging, and comprehensive analytics endpoints.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Node.js", "Express", "JWT", "Redis", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend",
      featured: false,
    },
    {
      id: 5,
      title: "Fitness Tracking Mobile App",
      description:
        "A cross-platform mobile application for fitness tracking with workout plans, progress monitoring, social features, and health data synchronization.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Health APIs"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website Builder",
      description:
        "A drag-and-drop portfolio builder with customizable templates, real-time preview, SEO optimization, and one-click deployment capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "DnD Kit", "Tailwind", "Vercel API", "CMS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)

  const getCategoryIcon = (categoryName: string) => {
    const category = projectCategories.find((cat) => cat.name === categoryName)
    return category ? category.icon : Code
  }

  const getCategoryColor = (categoryName: string) => {
    const category = projectCategories.find((cat) => cat.name === categoryName)
    return category ? category.color : "bg-gray-500"
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work across different technologies and domains
          </p>
        </div>

        {/* ==== Project Categories ==== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted transition-colors cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>

        {/* ==== Featured Projects Grid ==== */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/20 hover-lift hover-glow animate-scale-in ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid ${index === 0 ? "lg:grid-cols-2" : "grid-cols-1"} gap-0 h-full`}>
                  {/* ==== Project Image ==== */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        index === 0 ? "h-64 lg:h-full" : "h-48"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* ==== Category Badge ==== */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full ${getCategoryColor(project.category)} text-white text-sm font-medium`}
                      >
                        <CategoryIcon className="w-3 h-3" />
                        {project.category}
                      </div>
                    </div>

                    {/* ==== Action Buttons ==== */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* ==== Project Content ==== */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {/* ==== Technologies ==== */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* ==== View Details Button ==== */}
                    <Button variant="outline" className="w-fit group/btn bg-transparent" asChild>
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ==== More Projects Grid ==== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl bg-card border hover-lift hover-glow animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-full ${getCategoryColor(project.category)} text-white text-xs font-medium`}
                      >
                        <CategoryIcon className="w-3 h-3" />
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button variant="ghost" size="sm" className="w-full group/btn" asChild>
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
        </div>

        {/* ==== View All Projects Button ==== */}
        <div className="text-center animate-fade-in-up">
          <Button size="lg" className="group" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
