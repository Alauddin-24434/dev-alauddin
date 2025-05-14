"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Book, Code, Cpu, FileCode2, Lightbulb, MessageSquare, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white" ref={ref}>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Alauddin</span>
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">Folio</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <NavLink href="#home" active={activeSection === "home"}>
              Home
            </NavLink>
            <NavLink href="#about" active={activeSection === "about"}>
              About
            </NavLink>
            <NavLink href="#skills" active={activeSection === "skills"}>
              Skills
            </NavLink>
            <NavLink href="#projects" active={activeSection === "projects"}>
              Projects
            </NavLink>
            <NavLink href="#education" active={activeSection === "education"}>
              Education
            </NavLink>
            <NavLink href="#blog" active={activeSection === "blog"}>
              Blog
            </NavLink>
            <NavLink href="#contact" active={activeSection === "contact"}>
              Contact
            </NavLink>
          </nav>
          <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0">
            Hire Me
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
          <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </motion.div>

          <motion.div style={{ opacity: opacityHero }} className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-900/40 to-emerald-900/40 px-4 py-2 text-sm backdrop-blur-md border border-teal-500/20"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                  </span>
                  Full-Stack Developer
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                >
                  Crafting{" "}
                  <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital
                  </span>{" "}
                  Experiences
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="max-w-[600px] text-gray-300 md:text-xl"
                >
                  I transform ideas into exceptional web applications using cutting-edge technologies and creative
                  solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 group border-0"
                  >
                    Explore Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-teal-500/50 text-white hover:bg-teal-950/50">
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 opacity-75 blur-xl"></div>
                  <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-teal-500/20 bg-black/80 p-1">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alauddin1-rqwTbU8w-4I1ZVjXwXSb0DNIpiGCOjqZTs4NR0i.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                    {/* Floating tech icons */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 5,
                        ease: "easeInOut",
                      }}
                      className="absolute -left-16 top-20 h-12 w-12 rounded-full bg-black/70 p-2 backdrop-blur-md border border-teal-500/20"
                    >
                      <FileCode2 className="h-full w-full text-teal-400" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                        x: [0, -5, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 6,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="absolute -right-10 top-10 h-10 w-10 rounded-full bg-black/70 p-2 backdrop-blur-md border border-emerald-500/20"
                    >
                      <Cpu className="h-full w-full text-emerald-400" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        x: [0, 15, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 7,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute -bottom-5 -left-5 h-14 w-14 rounded-full bg-black/70 p-2 backdrop-blur-md border border-cyan-500/20"
                    >
                      <Code className="h-full w-full text-cyan-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Background glow */}
                <div className="absolute -z-10 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-3xl"></div>
              </motion.div>
            </div>

            {/* Animated scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Scroll Down</span>
                <div className="mt-2 h-10 w-6 rounded-full border-2 border-teal-500/50 p-1">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="h-2 w-2 rounded-full bg-teal-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="py-24">
          <div className="container">
            <SectionHeader title="About Me" />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 opacity-20 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-teal-500/20 bg-black/80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alauddin1-rqwTbU8w-4I1ZVjXwXSb0DNIpiGCOjqZTs4NR0i.png"
                    alt="About me"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-3">
                      <div className="rounded-md bg-black/70 px-3 py-1 text-sm backdrop-blur-md border border-teal-500/20">
                        5+ Years Experience
                      </div>
                      <div className="rounded-md bg-black/70 px-3 py-1 text-sm backdrop-blur-md border border-emerald-500/20">
                        50+ Projects
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Full-Stack Developer with a Passion for Creating</h3>
                <p className="text-gray-300">
                  I'm a passionate full-stack developer with expertise in building modern web applications. My journey
                  in the tech world started with a curiosity about how websites work, which led me to dive deep into
                  both frontend and backend technologies.
                </p>
                <p className="text-gray-300">
                  I specialize in crafting seamless user experiences with React, Next.js, and modern JavaScript
                  frameworks while building robust backend systems with Node.js and various databases. My approach
                  combines technical expertise with creative problem-solving to deliver exceptional digital products.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">Frontend Development</h4>
                    </div>
                    <p className="text-sm text-gray-400">React, Next.js, Tailwind CSS</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">Backend Development</h4>
                    </div>
                    <p className="text-sm text-gray-400">Node.js, Express, MongoDB</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">UI/UX Design</h4>
                    </div>
                    <p className="text-sm text-gray-400">Figma, Responsive Design</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">DevOps</h4>
                    </div>
                    <p className="text-sm text-gray-400">Docker, CI/CD, AWS</p>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 group border-0">
                  Download CV <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-teal-950/20">
          <div className="container">
            <SectionHeader title="My Skills" />

            <div className="mt-16">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
                  <TabsTrigger
                    value="technical"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    Technical Skills
                  </TabsTrigger>
                  <TabsTrigger
                    value="design"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    Design Skills
                  </TabsTrigger>
                  <TabsTrigger value="soft" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                    Soft Skills
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="technical">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillProgressCard skill="JavaScript" progress={90} />
                    <SkillProgressCard skill="React.js" progress={85} />
                    <SkillProgressCard skill="Next.js" progress={80} />
                    <SkillProgressCard skill="Node.js" progress={85} />
                    <SkillProgressCard skill="MongoDB" progress={75} />
                    <SkillProgressCard skill="TypeScript" progress={80} />
                    <SkillProgressCard skill="PostgreSQL" progress={70} />
                    <SkillProgressCard skill="GraphQL" progress={65} />
                    <SkillProgressCard skill="Docker" progress={70} />
                  </div>
                </TabsContent>

                <TabsContent value="design">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillProgressCard skill="UI Design" progress={80} />
                    <SkillProgressCard skill="UX Design" progress={75} />
                    <SkillProgressCard skill="Responsive Design" progress={90} />
                    <SkillProgressCard skill="Figma" progress={70} />
                    <SkillProgressCard skill="Adobe XD" progress={65} />
                    <SkillProgressCard skill="Tailwind CSS" progress={85} />
                  </div>
                </TabsContent>

                <TabsContent value="soft">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillProgressCard skill="Problem Solving" progress={95} />
                    <SkillProgressCard skill="Communication" progress={85} />
                    <SkillProgressCard skill="Teamwork" progress={90} />
                    <SkillProgressCard skill="Time Management" progress={80} />
                    <SkillProgressCard skill="Adaptability" progress={85} />
                    <SkillProgressCard skill="Critical Thinking" progress={90} />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="container">
            <SectionHeader title="Featured Projects" />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-Commerce Platform"
                description="A comprehensive online shopping platform with secure payments, user authentication, and product management."
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "MongoDB", "Stripe"]}
                link="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management tool with real-time updates, team collaboration features, and analytics."
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Firebase", "Tailwind CSS"]}
                link="#"
              />
              <ProjectCard
                title="Finance Dashboard"
                description="Interactive financial dashboard with data visualization, expense tracking, and budget planning tools."
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "Chart.js", "PostgreSQL"]}
                link="#"
              />
              <ProjectCard
                title="AI Image Generator"
                description="Web application that generates custom images using AI based on text prompts and user preferences."
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Node.js", "OpenAI API"]}
                link="#"
              />
              <ProjectCard
                title="Real Estate Platform"
                description="Property listing and management platform with advanced search, virtual tours, and agent portals."
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "MongoDB", "Google Maps API"]}
                link="#"
              />
              <ProjectCard
                title="Social Media Dashboard"
                description="Unified dashboard for managing multiple social media accounts with analytics and scheduling tools."
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "Redux", "Node.js"]}
                link="#"
              />
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 group border-0"
              >
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section id="education" className="py-24 bg-gradient-to-b from-transparent to-teal-950/20">
          <div className="container">
            <SectionHeader title="Education & Courses" />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <Book className="mr-2 h-6 w-6 text-teal-400" /> Education
                </h3>
                <div className="space-y-12">
                  <TimelineItem
                    year="2018 - 2022"
                    title="Bachelor of Science in Computer Science"
                    organization="University of Technology"
                    description="Specialized in software engineering with focus on web development and database systems."
                  />
                  <TimelineItem
                    year="2016 - 2018"
                    title="Associate Degree in Information Technology"
                    organization="Community College of Technology"
                    description="Foundation studies in programming, networking, and system administration."
                  />
                  <TimelineItem
                    year="2016"
                    title="High School Diploma"
                    organization="Tech High School"
                    description="Advanced coursework in mathematics, physics, and computer science."
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <Lightbulb className="mr-2 h-6 w-6 text-teal-400" /> Courses & Certifications
                </h3>
                <div className="space-y-8">
                  <CourseCard
                    title="Advanced React & Next.js Patterns"
                    organization="Frontend Masters"
                    date="2023"
                    description="Deep dive into advanced React patterns, Next.js app architecture, and performance optimization."
                  />
                  <CourseCard
                    title="Full-Stack JavaScript Bootcamp"
                    organization="Code Academy"
                    date="2022"
                    description="Intensive training in modern JavaScript development across the entire stack."
                  />
                  <CourseCard
                    title="AWS Certified Developer"
                    organization="Amazon Web Services"
                    date="2021"
                    description="Professional certification for developing and maintaining applications on AWS."
                  />
                  <CourseCard
                    title="UI/UX Design Fundamentals"
                    organization="Design School"
                    date="2020"
                    description="Comprehensive training in user interface design, user experience principles, and design systems."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="py-24">
          <div className="container">
            <SectionHeader title="Latest Blog Posts" />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                title="Building Scalable Next.js Applications"
                excerpt="Learn how to architect Next.js applications that can scale to millions of users with best practices for performance and code organization."
                date="May 10, 2025"
                category="Development"
                image="/placeholder.svg?height=400&width=600"
              />
              <BlogCard
                title="The Future of Web Animation: Beyond CSS"
                excerpt="Exploring advanced animation techniques using WebGL, Canvas, and modern JavaScript libraries to create immersive web experiences."
                date="April 28, 2025"
                category="Design"
                image="/placeholder.svg?height=400&width=600"
              />
              <BlogCard
                title="Optimizing MongoDB for High-Traffic Applications"
                excerpt="Practical tips and strategies for optimizing MongoDB performance in applications that handle thousands of concurrent users."
                date="April 15, 2025"
                category="Backend"
                image="/placeholder.svg?height=400&width=600"
              />
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" className="border-teal-500/50 text-white hover:bg-teal-950/50 group">
                View All Articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-teal-950/20">
          <div className="container">
            <SectionHeader title="Get In Touch" />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold">Let's Work Together</h3>
                <p className="text-gray-300">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-teal-500/10 p-2">
                      <MessageSquare className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Me</h4>
                      <p className="text-gray-400">contact@yourname.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-teal-500/10 p-2">
                      <User className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Social Profiles</h4>
                      <div className="mt-2 flex gap-4">
                        <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                          GitHub
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                          LinkedIn
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                          Twitter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-2xl border border-teal-500/20 bg-black/50 p-8 backdrop-blur-sm">
                  <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 opacity-10 blur-xl"></div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md bg-gray-900/50 border border-teal-500/20 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md bg-gray-900/50 border border-teal-500/20 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="Your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md bg-gray-900/50 border border-teal-500/20 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md bg-gray-900/50 border border-teal-500/20 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 border-0">
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 bg-black/90">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-2xl mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Dev</span>
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">Folio</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              <Link href="#home" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Projects
              </Link>
              <Link href="#education" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Education
              </Link>
              <Link href="#blog" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex gap-6 mb-8">
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Instagram
              </Link>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} DevFolio. All rights reserved.</p>
              <p className="mt-1">Designed and built with passion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${active ? "text-teal-400" : "text-gray-300 hover:text-teal-400"}`}
    >
      {children}
    </Link>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
    </motion.div>
  )
}

function SkillProgressCard({ skill, progress }: { skill: string; progress: number }) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-teal-500/20 bg-black/40 p-6 backdrop-blur-sm"
    >
      <div className="mb-3 flex justify-between">
        <h3 className="font-medium">{skill}</h3>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progress}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
        ></motion.div>
      </div>
    </motion.div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-xl bg-black/50 border border-teal-500/20 transition-all"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link href={link}>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white border-0">View Project</Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs text-teal-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function TimelineItem({
  year,
  title,
  organization,
  description,
}: {
  year: string
  title: string
  organization: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-teal-500 before:to-emerald-500"
    >
      <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-teal-500"></div>
      <div className="inline-block rounded-md bg-teal-500/10 px-2 py-1 text-xs text-teal-400">{year}</div>
      <h4 className="mt-2 text-lg font-bold">{title}</h4>
      <p className="text-gray-400">{organization}</p>
      <p className="mt-2 text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}

function CourseCard({
  title,
  organization,
  date,
  description,
}: {
  title: string
  organization: string
  date: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-teal-500/20 bg-black/40 p-6 backdrop-blur-sm transition-transform hover:scale-105"
    >
      <div className="flex justify-between items-start">
        <h4 className="text-lg font-bold">{title}</h4>
        <div className="rounded-md bg-teal-500/10 px-2 py-1 text-xs text-teal-400">{date}</div>
      </div>
      <p className="mt-1 text-gray-400">{organization}</p>
      <p className="mt-3 text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}

function BlogCard({
  title,
  excerpt,
  date,
  category,
  image,
}: {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-xl bg-black/50 border border-teal-500/20 transition-all hover:border-teal-500/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <div className="rounded-md bg-teal-500 px-2 py-1 text-xs text-white">{category}</div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 text-sm text-gray-400">{date}</div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{excerpt}</p>

        <Link href="#" className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
