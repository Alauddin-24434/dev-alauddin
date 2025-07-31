import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  }

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "Python", "PHP", "REST APIs", "GraphQL"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  }

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      grade: "CGPA: 3.8/4.0",
    },
  ]

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "https://github.com/johndoe/ecommerce",
    },
    {
      name: "Task Management App",
      description: "Collaborative project management with real-time updates",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/johndoe/taskmanager",
    },
    {
      name: "Weather Dashboard",
      description: "Weather application with location-based forecasts and analytics",
      technologies: ["Vue.js", "Express.js", "Weather API", "Chart.js"],
      link: "https://github.com/johndoe/weather",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* ==== Header Actions ==== */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fade-in-up">
            <Button variant="ghost" asChild className="hover-lift">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" className="hover-lift bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button className="hover-lift">Print Resume</Button>
            </div>
          </div>

          {/* ==== Resume Content ==== */}
          <div className="bg-white dark:bg-card rounded-lg shadow-2xl p-8 animate-scale-in">
            {/* ==== Personal Info Header ==== */}
            <div className="text-center mb-8 animate-fade-in-up">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-primary mb-4">{personalInfo.title}</p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {personalInfo.location}
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <a href={personalInfo.website} className="flex items-center gap-1 text-primary hover:underline">
                  <Globe className="w-4 h-4" />
                  Portfolio
                </a>
                <a href={personalInfo.github} className="flex items-center gap-1 text-primary hover:underline">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a href={personalInfo.linkedin} className="flex items-center gap-1 text-primary hover:underline">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* ==== Professional Summary ==== */}
            <Card className="mb-6 hover-lift animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-primary">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate Full Stack Developer with 3+ years of experience in building scalable web applications.
                  Expertise in React, Next.js, Node.js, and modern web technologies. Strong problem-solving skills and
                  commitment to writing clean, maintainable code. Experienced in collaborating with cross-functional
                  teams to deliver high-quality software solutions.
                </p>
              </CardContent>
            </Card>

            {/* ==== Skills ==== */}
            <Card className="mb-6 hover-lift animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-primary">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h4 className="font-semibold mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="hover:scale-105 transition-transform">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ==== Education ==== */}
            <Card className="mb-6 hover-lift animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.year} • {edu.grade}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* ==== Projects ==== */}
            <Card className="mb-6 hover-lift animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-primary">Featured Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary pl-4 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <a href={project.link} className="text-primary text-sm hover:underline">
                        View Project →
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ==== Certifications ==== */}
            <Card className="hover-lift animate-scale-in">
              <CardHeader>
                <CardTitle className="text-primary">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="animate-fade-in-up">
                    <h4 className="font-semibold">Full Stack Web Development</h4>
                    <p className="text-sm text-muted-foreground">freeCodeCamp • 2023</p>
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <h4 className="font-semibold">React Developer Certification</h4>
                    <p className="text-sm text-muted-foreground">Meta • 2023</p>
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <h4 className="font-semibold">AWS Cloud Practitioner</h4>
                    <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ==== Bottom Actions ==== */}
          <div className="text-center mt-8 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="hover-lift">
                <Download className="w-4 h-4 mr-2" />
                Download PDF Resume
              </Button>
              <Button variant="outline" size="lg" className="hover-lift bg-transparent" asChild>
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
