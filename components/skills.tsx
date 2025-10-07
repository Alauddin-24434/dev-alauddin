"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";

// Skill data with badges
const skillSections = [
  {
    title: "Frontend & UI/UX",

    skills: [
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white",
      "https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white",
      "https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white",
      "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white",

      "https://img.shields.io/badge/redux-%23593d88.svg?style=flat-square&logo=redux&logoColor=white",
      "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat-square&logo=reacthookform&logoColor=white",
      "https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white",
    ],
  },
  {
    title: "Backend & Databases",

    skills: [
      "https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=%2361DAFB",
      "https://img.shields.io/badge/Go-%23404d59.svg?style=flat-square&logo=go&logoColor=%2361DAFB",

      "https://img.shields.io/badge/postgres-%23316192.svg?style=flat-square&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white",
      "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/Socket.io-black?style=flat-square&logo=socket.io&badgeColor=010101",
      "https://img.shields.io/badge/JWT-black?style=flat-square&logo=JSON%20web%20tokens",

      "https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white",
      "https://img.shields.io/badge/Firebase-%23039BE5.svg?style=flat-square&logo=firebase",
    ],
  },
  {
    title: "Tools",

    skills: [
      "https://img.shields.io/badge/docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white",
      "https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white",
      "https://img.shields.io/badge/Postman-%23FF6C37.svg?style=flat-square&logo=postman&logoColor=white",

      "https://img.shields.io/badge/git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",
      "https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white",
      "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat-square&logo=githubactions&logoColor=white",
      "https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat-square&logo=npm&logoColor=white",
      "https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat-square&logo=pnpm&logoColor=f69220",
      "https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white",
    ],
  },
];

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="skills" className="py-20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies, tools, and frameworks I use to craft modern, scalable,
            and user-friendly applications.
          </p>
        </div>

        <div className="space-y-12">
          {skillSections.map((section, index) => (
            <Card
              key={index}
              className="p-8 border-none  transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {section.skills.map((badge, i) => (
                    <img
                      key={i}
                      src={badge}
                      alt="skill badge"
                      className="h-7 hover:scale-110 transition-transform"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
