"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Eye, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
     

      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 animate-slide-in-left text-left">
            <p className="text-primary  font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Hi, I'm Md Alauddin
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="animate-fade-in-up block" style={{ animationDelay: "0.4s" }}>
                Full Stack
              </span>
              <span className="text-primary block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                Developer
              </span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              I'm a Full-Stack Developer who enjoys building fast, reliable, and user-friendly web applications.
            </p>

            {/* CTA Buttons (side by side on small screens) */}
            <div className="flex flex-row  gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Button
                size="lg"
                className="group hover-lift flex items-center gap-2 "
                onClick={(e) => handleSmoothScroll(e, "#projects")}
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="secondary"
                className="group hover-lift flex items-center gap-2"
                asChild
              >
                <a
                  href="https://drive.usercontent.google.com/download?id=1tHTzTsZRyJLKcvbYwfN6c8rZERh47h8t&export=download&authuser=0"
                  download
                  className="flex items-center gap-2 justify-center "
                >
                  <Download className="w-4 h-4 group-hover:bounce transition-transform" />
             <span className="hidden md:block lg:block ">Download Resume</span>
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 text-left">
              <div className="animate-scale-in" style={{ animationDelay: "1.4s" }}>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">20+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="animate-scale-in hidden md:block lg:block" style={{ animationDelay: "1.6s" }}>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">2+</h3>
                <p className="text-muted-foreground">Years Coding</p>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "1.8s" }}>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">SEO</h3>
                <p className="text-muted-foreground">Optimization</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right mt-6 lg:mt-0">
            <div className="relative w-56 sm:w-72 md:w-80 lg:w-full max-w-lg">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-float"></div>
              <Image
                src="/alauddin.png"
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
