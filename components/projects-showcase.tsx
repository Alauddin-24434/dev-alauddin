"use client";
import { SectionHeader } from '@/app/page';
import React, { useState } from 'react';
import {  Tabs, TabsList } from './ui/tabs';
import { TabsContent,  TabsTrigger } from "@/components/ui/tabs";
import { motion, } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
            <div className="container">
            <SectionHeader title="Featured Projects" />
            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full mt-4"
            >
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-12">
                  <motion.div
                    className="absolute h-full top-0 rounded-full z-0"
                    initial={false}
                    animate={{
                      x:
                        activeTab === "all"
                          ? 0
                          : activeTab === "design"
                          ? "100%"
                          : "200%",
                      width: "33.333%",
                    }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="next"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    Next Js
                  </TabsTrigger>
                  <TabsTrigger
                    value="react"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    React Js
                  </TabsTrigger>
                  <TabsTrigger
                    value="backend"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    Backend
                  </TabsTrigger>
                </TabsList>
              </div>
  
      {/* All */}
      <TabsContent value="all">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* All Projects */}
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
      </TabsContent>

      {/* Next.js */}
      <TabsContent value="next">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A comprehensive online shopping platform with secure payments, user authentication, and product management."
            image="/placeholder.svg?height=400&width=600"
            tags={["Next.js", "MongoDB", "Stripe"]}
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
            title="Real Estate Platform"
            description="Property listing and management platform with advanced search, virtual tours, and agent portals."
            image="/placeholder.svg?height=400&width=600"
            tags={["Next.js", "MongoDB", "Google Maps API"]}
            link="#"
          />
        </div>
      </TabsContent>

      {/* React */}
      <TabsContent value="react">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management tool with real-time updates, team collaboration features, and analytics."
            image="/placeholder.svg?height=400&width=600"
            tags={["React", "Firebase", "Tailwind CSS"]}
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
            title="Social Media Dashboard"
            description="Unified dashboard for managing multiple social media accounts with analytics and scheduling tools."
            image="/placeholder.svg?height=400&width=600"
            tags={["React", "Redux", "Node.js"]}
            link="#"
          />
        </div>
      </TabsContent>

      {/* Backend */}
      <TabsContent value="backend">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AI Image Generator"
            description="Web application that generates custom images using AI based on text prompts and user preferences."
            image="/placeholder.svg?height=400&width=600"
            tags={["React", "Node.js", "OpenAI API"]}
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
      </TabsContent>
    </Tabs>

    <div className="mt-12 flex justify-center">
      <Button
        size="lg"
        className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 group border-0"
      >
        View All Projects{" "}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  </div>
  );
};


function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
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
            <Button className="bg-teal-500 hover:bg-teal-600 text-white border-0">
              View Project
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs text-teal-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectShowcase;

