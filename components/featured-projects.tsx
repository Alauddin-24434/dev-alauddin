"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

export function FeaturedProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("recent");

  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchProjects();
  }, []);

  const renderProjectCard = (project: any, index: number) => (
    <div
      key={project.id}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift hover-glow"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.thumnail || "/placeholder.svg"}
          alt={"image"}
          width={600}
          height={400}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <Badge className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
            <Code className="w-3 h-3" />
            {project.category}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech: string, i: number) => (
            <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs px-2 py-1">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );

  const recentProjects = projects.slice(0, 3);
  const allProjects = projects;

  return (
    <section id="projects" className="py-20  relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work, skills, and continuous learning journey
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val)}>
          <div
            className="flex justify-center mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
          </div>

          {/* Recent Projects */}
          <TabsContent value="recent">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <p className="col-span-full text-center text-muted-foreground text-lg">
                  Loading recent projects...
                </p>
              ) : recentProjects.length > 0 ? (
                recentProjects.map((p, i) => renderProjectCard(p, i))
              ) : (
                <p className="col-span-full text-center text-muted-foreground text-lg">
                  No recent projects found.
                </p>
              )}
            </div>
          </TabsContent>

          {/* All Projects */}
          <TabsContent value="all">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <p className="col-span-full text-center text-muted-foreground text-lg">
                  Loading all projects...
                </p>
              ) : allProjects.length > 0 ? (
                allProjects.map((p, i) => renderProjectCard(p, i))
              ) : (
                <p className="col-span-full text-center text-muted-foreground text-lg">
                  No projects found.
                </p>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Collapse / Back Button */}
        {activeTab === "all" && (
          <Button
            className="fixed bottom-10 right-10 bg-primary text-white z-10 flex items-center gap-2 shadow-lg hover:shadow-xl transition"
            onClick={() => setActiveTab("recent")}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Recent
          </Button>
        )}
      </div>
    </section>
  );
}
