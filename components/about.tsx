import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"

export function About() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and scalable web applications",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces",
    },
    {
      icon: Globe,
      title: "Digital Solutions",
      description: "Providing comprehensive digital transformation",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ==== About Image ==== */}
          <div className="relative animate-slide-in-left">
            <Image
              src="/alauddin.png?height=500&width=500"
              alt="About Me"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg">
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* ==== About Content ==== */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Full-Stack Developer with a Passion for Creating Exceptional Digital Experiences
              </p>
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with over 3 years of experience in creating web applications. I
                specialize in React, Next.js, Node.js, and modern web technologies. My journey in web development
                started with a curiosity about how things work on the internet, and it has evolved into a career where I
                get to build amazing digital experiences.
              </p>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and creating user-friendly interfaces that provide
                exceptional user experiences. When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
            </div>

            <Button size="lg">Download Resume</Button>
          </div>
        </div>

        {/* ==== Services Grid ==== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover-lift hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
