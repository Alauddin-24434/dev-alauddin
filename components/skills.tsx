
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import the separated skill data and types
import { skillCategories, skillIcons, MainSkillCategory } from "@/public/skillsData";

// --- Skeleton Component for Skills Grid ---
const SkillsGridSkeleton: React.FC = () => (
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
{[...Array(6)].map((_, index) => (
<div
key={index}
className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 animate-pulse"
>
<div className="w-5 h-5 rounded-full bg-primary/20" />
 <div className="w-3/4 h-5 rounded-md bg-primary/20" />
 </div>
 ))}
 </div>
);

// --- Main Skills Component ---
export function Skills() {
 const [loadingSkills, setLoadingSkills] = useState(true);
 const [activeCategoryTitle, setActiveCategoryTitle] = useState(skillCategories[0].title);

 // Initialize AOS animations on mount
 useEffect(() => {
 AOS.init({
 duration: 800,
 once: false,
 easing: "ease-in-out",
 });
 }, []);

 // Use a separate useEffect to handle loading state for the skills grid
 // This will run when the activeCategoryTitle changes
 useEffect(() => {
 setLoadingSkills(true);
 const timer = setTimeout(() => {
 setLoadingSkills(false);
 }, 500);

 return () => clearTimeout(timer);
 }, [activeCategoryTitle]);

 useEffect(() => {
 AOS.refresh();
 });

 return (
 <section
 id="skills"
 className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"
 >
 <div className="container mx-auto px-4">
 {/* Section title and description (always visible) */}
 <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
  My <span className="text-primary">Skills</span>
  </h2>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  A comprehensive overview of the technologies, tools, and principles I master to build exceptional digital products.
  </p>
 </div>

 {/* Tabs Component for Categories */}
 <Tabs value={activeCategoryTitle} onValueChange={setActiveCategoryTitle}>
  <div
  className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up"
  data-aos="fade-up"
  data-aos-delay="100"
  >
  <TabsList className="flex flex-wrap justify-center h-auto gap-2 p-1.5">
  {skillCategories.map((mainCategory) => {
  const IconComponent = mainCategory.icon;
  return (
   <TabsTrigger
   key={mainCategory.title}
   value={mainCategory.title}
   className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
   >
   <IconComponent className="w-4 h-4" />
   {mainCategory.title}
   </TabsTrigger>
  );
  })}
  </TabsList>
  </div>

  {/* Skills Display Area */}
  <Card className="p-8 animate-scale-in" data-aos="zoom-in" data-aos-delay="200">
  <CardContent className="p-0">
  {skillCategories.map((mainCategory, mainIndex) => (
  <TabsContent key={mainIndex} value={mainCategory.title} className="mt-0">
   {mainCategory.subCategories.map((subCategory, subIndex) => (
   <React.Fragment key={subIndex}>
   {/*
   The `data-aos` attribute was using `skillIndex` which was not in scope here.
   It has been removed to prevent errors.
   */}
   <div className="flex items-center gap-4 mb-4 mt-6 first:mt-0" data-aos="fade-up">
   <div className="p-3 rounded-full bg-primary/10 text-primary">
    <mainCategory.icon className="w-6 h-6" />
   </div>
   <div>
    <h3 className="text-2xl font-bold">{subCategory.title}</h3>
    <p className="text-muted-foreground text-base">
    {subCategory.description}
    </p>
   </div>
   </div>
   {loadingSkills ? (
   <SkillsGridSkeleton />
   ) : (
   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
    {subCategory.skills.map((skill, skillIndex) => {
    const IconComponent = skillIcons[skill] || skillIcons["default"];
    return (
    <div
    key={skillIndex}
    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
    data-aos="fade-up"
   data-aos-delay={skillIndex * 50}
    >
    <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
    <span className="text-base font-medium">{skill}</span>
    </div>
    );
    })}
   </div>
   )}
   </React.Fragment>
   ))}
  </TabsContent>
  ))}
  </CardContent>
  </Card>
 </Tabs>
 </div>
 </section>
 );
}
