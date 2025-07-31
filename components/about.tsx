"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

export function About() {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

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
    <section id="about" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ==== About Image ==== */}
          <div className="relative" data-aos="fade-right">
            <Image
              src="/alauddin.png?height=500&width=500"
              alt="About Me"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
            <div
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* ==== About Content ==== */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl font-bold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                About <span className="text-primary">Me</span>
              </h2>
              <p
                className="text-lg text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Full-Stack Developer with a Passion for Creating Exceptional Digital Experiences
              </p>
              <p
                className="text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                I'm a passionate full-stack developer with over 3 years of experience in creating web applications. I
                specialize in React, Next.js, Node.js, and modern web technologies.
              </p>
              <p
                className="text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                I believe in writing clean, maintainable code and creating user-friendly interfaces that provide
                exceptional user experiences.
              </p>
            </div>

            <Button
              size="lg"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* ==== Services Grid ==== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover-lift hover-glow"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
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
