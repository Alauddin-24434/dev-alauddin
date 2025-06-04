"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  Users,
  BarChart3,
  Palette,
  Star,
  Eye,
} from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string // Single tall image that will scroll
  technologies: string[]
  category: "API" | "Full Stack" | "Frontend" | "Backend"
  features: string[]
  liveUrl?: string
  githubUrl?: string
  status: "Completed" | "In Progress" | "Planning"
  year: string
  highlights: {
    users?: string
    performance?: string
    rating?: string
  }
}

interface AutoScrollImageProps {
  src: string
  alt: string
  className?: string
}

function AutoScrollImage({ src, alt, className = "" }: AutoScrollImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageHeight, setImageHeight] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Calculate scroll distance once image and container are loaded
  useEffect(() => {
    if (imageRef.current && containerRef.current) {
      const imgHeight = imageRef.current.offsetHeight
      const contHeight = containerRef.current.offsetHeight
      setImageHeight(imgHeight)
      setContainerHeight(contHeight)
    }
  }, [src])

  // Calculate how far to scroll (image height minus container height)
  const scrollDistance = Math.max(0, imageHeight - containerHeight)

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-cover object-top"
        style={{
          height: "auto",
          minHeight: "100%",
        }}
        animate={{
          y: isHovered && scrollDistance > 0 ? [0, -scrollDistance, 0] : 0,
        }}
        transition={{
          duration: isHovered ? 15 : 0,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          ease: "linear",
          repeatType: "loop",
        }}
        onLoad={() => {
          if (imageRef.current && containerRef.current) {
            setImageHeight(imageRef.current.offsetHeight)
            setContainerHeight(containerRef.current.offsetHeight)
          }
        }}
      />

      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* Hover indicator */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            Hover to scroll
          </div>
        </div>
      )}
    </div>
  )
}

export default function FeaturesProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI and secure payments",
      longDescription:
        "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, product management, shopping cart, secure payment processing with Stripe, order tracking, and admin dashboard. Includes real-time inventory management and email notifications.",
      image: "/1resort_hotel _home.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "TypeScript"],
      category: "Full Stack",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filters",
        "Shopping Cart & Wishlist",
        "Secure Payment Processing",
        "Order Management System",
        "Admin Dashboard",
        "Real-time Inventory Tracking",
        "Email Notifications",
        "Responsive Design",
      ],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      status: "Completed",
      year: "2024",
      highlights: {
        users: "1,200+",
        performance: "98% uptime",
        rating: "4.8/5",
      },
    },
  
   
  
    {
      id: "5",
      title: "REST API Service",
      description: "Scalable REST API with authentication and rate limiting",
      longDescription:
        "A robust REST API service built with Node.js and Express, featuring JWT authentication, rate limiting, data validation, comprehensive documentation, and automated testing. Designed for high performance and scalability.",
          image: "/1resort_hotel _home.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Jest", "Swagger"],
      category: "Backend",
      features: [
        "RESTful API Design",
        "JWT Authentication",
        "Rate Limiting",
        "Data Validation",
        "Error Handling",
        "API Documentation",
        "Automated Testing",
        "Database Optimization",
        "Security Best Practices",
      ],
      githubUrl: "https://github.com/username/rest-api-service",
      status: "Completed",
      year: "2023",
      highlights: {
        performance: "99.9% uptime",
        rating: "Enterprise ready",
      },
    },
    {
      id: "6",
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and dark mode",
      longDescription:
        "A stunning portfolio website showcasing projects and skills with smooth animations, dark/light mode toggle, contact form, and blog section. Built with modern web technologies for optimal performance.",
        image: "/1resort_hotel _home.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      category: "Frontend",
      features: [
        "Responsive Design",
        "Dark/Light Mode Toggle",
        "Smooth Animations",
        "Project Showcase",
        "Skills Section",
        "Contact Form",
        "Blog Integration",
        "SEO Optimized",
        "Fast Loading",
      ],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/username/portfolio",
      status: "Completed",
      year: "2024",
      highlights: {
        performance: "100% Lighthouse",
        rating: "Modern design",
      },
    },
  ]

  const categories = ["All", "Full Stack",  "Frontend", "Backend", "API"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <Zap className="h-4 w-4" />
   
   
      case "Frontend":
        return <Palette className="h-4 w-4" />
      case "Backend":
        return <Database className="h-4 w-4" />
      case "API":
        return <Code className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="w-full mt-12 ">
 

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="flex items-center gap-2"
          >
            {category !== "All" && getCategoryIcon(category)}
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              whileHover={{ y: -5 }}
              transition={{ duration: 0.1 }}
            >
              <Card className="h-full cursor-pointer group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <AutoScrollImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{project.description}</CardDescription>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Highlights */}
                  {Object.keys(project.highlights).length > 0 && (
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      {project.highlights.users && (
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {project.highlights.users}
                        </div>
                      )}
                      {project.highlights.performance && (
                        <div className="flex items-center gap-1">
                          <BarChart3 className="h-3 w-3" />
                          {project.highlights.performance}
                        </div>
                      )}
                      {project.highlights.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {project.highlights.rating}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setSelectedProject(project)} className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <AutoScrollImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 rounded-t-xl"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </Button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-600">{selectedProject.longDescription}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Badge className={getStatusColor(selectedProject.status)}>{selectedProject.status}</Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getCategoryIcon(selectedProject.category)}
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <Button asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
