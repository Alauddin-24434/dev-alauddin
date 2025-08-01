"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Eye, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* ==== Background Animation ==== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ==== Hero Content ==== */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-primary font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Hi, I'm Md Alauddin
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="animate-fade-in-up block" style={{ animationDelay: "0.4s" }}>
                  Full Stack
                </span>
                <span className="text-primary block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  Developer
                </span>
              </h1>
              <p
                className="text-xl text-muted-foreground max-w-lg animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                I'm a Full-Stack Developer who enjoys building fast, reliable, and user-friendly web applications.
              </p>
            </div>

            {/* ==== CTA Buttons ==== */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Button
                size="lg"
                className="group hover-lift flex text-white items-center gap-2"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
              >

                View My Work
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group hover-lift bg-transparent flex items-center gap-2"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>


            </div>

            {/* ==== Resume Buttons ==== */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
              <Button
                variant="outline"
                className="group hover-lift bg-transparent"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1K00zqoXR7jJNJjmKC9R5WW9edH_iSSUl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </Button>
              <Button
                variant="secondary"
                className="group hover-lift"
                asChild
              >
                <a
                  href=" https://drive.usercontent.google.com/download?id=1K00zqoXR7jJNJjmKC9R5WW9edH_iSSUl&export=download&authuser=0"


                  download
                >
                  <Download className="w-4 h-4 mr-2 group-hover:bounce transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>


            {/* ==== Stats ==== */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="animate-scale-in" style={{ animationDelay: "1.4s" }}>
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "1.6s" }}>
                <h3 className="text-2xl font-bold text-primary">3+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "1.8s" }}>
                <h3 className="text-2xl font-bold text-primary">100%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* ==== Hero Image ==== */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-float"></div>
              <Image
                src="/alauddin.png?height=600&width=600"
                alt="Professional Developer"
                width={600}
                height={600}
                className="relative z-10 rounded-full border-4 border-primary/20 hover:scale-105 transition-transform duration-500"
              />


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
