"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Book,
  Code,
  Cpu,
  FileCode2,
  Lightbulb,
  MessageSquare,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import ProjectShowcase from "@/components/projects-showcase";
import { SectionHeader } from "@/components/shared/SectionHeader";
import AboutMe from "@/components/about-me";
import SkillsShowcase from "@/components/skill-showcase";
import Courses from "@/components/courses";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "courses",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex min-h-screen flex-col  text-white" ref={ref}>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Alauddin
            </span>
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
              Folio
            </span>
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
            <NavLink href="#courses" active={activeSection === "education"}>
              Courses
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
{/* ---------------------------------------------------------------main start--------------------------------------- */}
      <main className="flex-1">
        {/* ------------------------------Hero section start  ---------------------------*/}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY }}
          >
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </motion.div>

          <motion.div
            style={{ opacity: opacityHero }}
            className="container relative z-10"
          >
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
                  I transform ideas into exceptional web applications using
                  cutting-edge technologies and creative solutions.
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
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-500/50 text-white hover:bg-teal-950/50"
                  >
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
                      src="/alauddin.png"
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
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                    className="h-2 w-2 rounded-full bg-teal-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        {/* -------------------------------hero section end-------------------------- */}
        {/*------------------------------- About me section  start----------------------------*/}

        <section id="about" className="py-24">
          <div className="container">
            <SectionHeader title="About Me" />
            <AboutMe />
          </div>
        </section>
        {/* ------------------------------------- about me section end ---------------------------*/}

        {/* --------------------------skill section start----------------------------- */}
        <section id="skills" className="py-24">
          <div className="container">
            <SectionHeader title="My Skills" />
            <SkillsShowcase />
          </div>
        </section>

        {/* --------------------------skill section end----------------------------- */}
        {/*------------------- project showcase start -------------------- */}
        <section id="projects" className="py-24">
          <div className="container">
            <SectionHeader title="Featured Projects" />
            <ProjectShowcase />
          </div>
        </section>
        {/*----------------------- project showcase end ------------------- */}

        {/*------------------- courses section start ---------------------------------- */}
        <section
          id="courses"
          className="py-24 "
        >
          <div className="container">
            <SectionHeader title="Courses & Certifications" />
            <Courses />
          </div>
        </section>
        {/*  ------------------------------courses section end------------------------------------ */}

        {/* ----------------blog section start--------------------------- */}
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
              <Button
                variant="outline"
                size="lg"
                className="border-teal-500/50 text-white hover:bg-teal-950/50 group"
              >
                View All Articles{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
        {/* ------------------------blog section end---------------------------------- */}

        {/* ------------------------- contact section start------------------------------ */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-b from-transparent to-teal-950/20"
        >
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
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your vision.
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
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                          GitHub
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                          LinkedIn
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
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

        {/* ------------------------- contact section end------------------------------ */}
      </main>

{/*--------------------------------------- main end -------------------- ---------------------------------*/}
      <footer className="border-t border-white/10 py-12 bg-black/90">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-2xl mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Dev
              </span>
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                Folio
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              <Link
                href="#home"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#education"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Education
              </Link>
              <Link
                href="#blog"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex gap-6 mb-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Instagram
              </Link>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} DevFolio. All rights reserved.
              </p>
              <p className="mt-1">Designed and built with passion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        active ? "text-teal-400" : "text-gray-300 hover:text-teal-400"
      }`}
    >
      {children}
    </Link>
  );
}

function BlogCard({
  title,
  excerpt,
  date,
  category,
  image,
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
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
          <div className="rounded-md bg-teal-500 px-2 py-1 text-xs text-white">
            {category}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 text-sm text-gray-400">{date}</div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{excerpt}</p>

        <Link
          href="#"
          className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
