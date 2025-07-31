import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ==== Mock project data - in real app, this would come from a database or API ====
const getProject = (id: string) => {
  const projects = {
    "1": {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution built with modern technologies.",
      longDescription: `This e-commerce platform is a complete solution for online retail businesses. It features a modern, responsive design with a focus on user experience and performance. The platform includes a comprehensive admin dashboard for managing products, orders, and customers.

The application is built with Next.js for optimal performance and SEO, TypeScript for type safety, and integrates with Stripe for secure payment processing. The backend uses PostgreSQL for reliable data storage and includes features like inventory management, order tracking, and customer analytics.

Key features include real-time inventory updates, automated email notifications, advanced search and filtering, mobile-responsive design, and comprehensive admin controls. The platform is designed to scale and can handle high traffic loads efficiently.`,
      image: "/placeholder.svg?height=400&width=800",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      duration: "3 months",
      client: "Retail Business",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order management system",
        "Admin dashboard",
        "Inventory management",
        "Email notifications",
        "Responsive design",
        "SEO optimization",
      ],
      challenges: [
        "Implementing real-time inventory updates",
        "Optimizing database queries for large product catalogs",
        "Ensuring secure payment processing",
        "Creating an intuitive admin interface",
      ],
      gallery: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
  }

  return projects[id as keyof typeof projects] || null
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* ==== Back Button ==== */}
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          {/* ==== Project Header ==== */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex gap-4 mt-6 md:mt-0">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>

            {/* ==== Project Meta Info ==== */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-muted-foreground">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Client</p>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Category</p>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ==== Main Project Image ==== */}
          <div className="mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* ==== Main Content ==== */}
            <div className="lg:col-span-2 space-y-12">
              {/* ==== Project Description ==== */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-gray max-w-none">
                  {project.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* ==== Key Features ==== */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ==== Challenges ==== */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ==== Project Gallery ==== */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* ==== Sidebar ==== */}
            <div className="space-y-8">
              {/* ==== Technologies Used ==== */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ==== Project Links ==== */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* ==== Contact CTA ==== */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss your project requirements and how I can help bring your ideas to life.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
