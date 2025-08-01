"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  Search,
} from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Map string icons from JSON to Lucide-React components
const iconComponents: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Palette,
  Globe,
  Database,
  Server,
  Search,
};

// --- Skeleton Component for Services Grid ---
const ServicesGridSkeleton: React.FC = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="rounded-xl shadow-lg p-6 bg-background animate-pulse h-[170px] flex flex-col items-center justify-center space-y-4"
      >
        <div className="w-12 h-12 rounded-full bg-primary/20" />
        <div className="w-3/4 h-5 rounded-md bg-primary/20" />
        <div className="w-1/2 h-4 rounded-md bg-primary/10" />
      </div>
    ))}
  </div>
);

// --- Main About Component ---
export function About() {
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    async function fetchPortfolioData() {
      try {
        const response = await fetch("/portfolioData.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error("Could not fetch portfolio data:", error);
      } finally {
        setLoadingServices(false);
      }
    }

    fetchPortfolioData();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

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
              <h3 className="text-2xl font-bold">2+</h3>
              <p className="text-sm">Years Coding</p>
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
                I'm a passionate full-stack developer with over 2 years of experience in creating web applications. I
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

            <Button size="lg" data-aos="fade-up" data-aos-delay="600">
              Download Resume
            </Button>
          </div>
        </div>

        {/* ==== Services Grid ==== */}
        {loadingServices ? (
          <ServicesGridSkeleton />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {portfolioData.map((service, index) => {
              const IconComponent = iconComponents[service.icon];
              return (
                <Card
                  key={index}
                  className="text-center hover-lift hover-glow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                >
                  <CardContent className="p-6 flex flex-col items-center space-y-3">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-primary" />
                    )}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
