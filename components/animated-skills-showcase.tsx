"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Palette,
  Brain,
  Zap,
  Database,
  Globe,
  Server,
  Layout,
  FigmaIcon,
  Layers,
  Users,
  Clock,
  Lightbulb,
} from "lucide-react";

export default function AnimatedSkillsShowcase() {
  const [activeTab, setActiveTab] = useState("technical");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <Tabs
      defaultValue="technical"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full mt-4"
    >
      <div className="flex justify-center mb-12">
        <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
          <motion.div
            className="absolute h-full top-0 rounded-full z-0"
            initial={false}
            animate={{
              x:
                activeTab === "technical"
                  ? 0
                  : activeTab === "design"
                  ? "100%"
                  : "200%",
              width: "33.333%",
            }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          />
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
          <TabsTrigger
            value="soft"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
          >
            Soft Skills
          </TabsTrigger>
        </TabsList>
      </div>

      <AnimatePresence mode="wait">
        <TabsContent value="technical" key="technical">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatedSkillCard
              skill="JavaScript"
              icon={<Zap className="h-6 w-6" />}
              level={90}
              color="bg-gradient-to-r from-teal-700 to-emerald-600 "
            />
            <AnimatedSkillCard
              skill="React.js"
              icon={<Code className="h-6 w-6" />}
              level={85}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Next.js"
              icon={<Globe className="h-6 w-6" />}
              level={80}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Node.js"
              icon={<Server className="h-6 w-6" />}
              level={85}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="MongoDB"
              icon={<Database className="h-6 w-6" />}
              level={75}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="TypeScript"
              icon={<Code className="h-6 w-6" />}
              level={80}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="PostgreSQL"
              icon={<Database className="h-6 w-6" />}
              level={70}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="GraphQL"
              icon={<Globe className="h-6 w-6" />}
              level={65}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Docker"
              icon={<Server className="h-6 w-6" />}
              level={70}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
          </motion.div>
        </TabsContent>

        <TabsContent value="design" key="design">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatedSkillCard
              skill="UI Design"
              icon={<Layout className="h-6 w-6" />}
              level={80}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="UX Design"
              icon={<Users className="h-6 w-6" />}
              level={75}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Responsive Design"
              icon={<Layers className="h-6 w-6" />}
              level={90}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Figma"
              icon={<FigmaIcon className="h-6 w-6" />}
              level={70}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Adobe XD"
              icon={<Layout className="h-6 w-6" />}
              level={65}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Tailwind CSS"
              icon={<Palette className="h-6 w-6" />}
              level={85}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
          </motion.div>
        </TabsContent>

        <TabsContent value="soft" key="soft">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatedSkillCard
              skill="Problem Solving"
              icon={<Lightbulb className="h-6 w-6" />}
              level={95}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Communication"
              icon={<Users className="h-6 w-6" />}
              level={85}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Teamwork"
              icon={<Users className="h-6 w-6" />}
              level={90}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Time Management"
              icon={<Clock className="h-6 w-6" />}
              level={80}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Adaptability"
              icon={<Zap className="h-6 w-6" />}
              level={85}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
            <AnimatedSkillCard
              skill="Critical Thinking"
              icon={<Brain className="h-6 w-6" />}
              level={90}
              color="bg-gradient-to-r from-teal-700 to-emerald-600"
            />
          </motion.div>
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
}

interface AnimatedSkillCardProps {
  skill: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

function AnimatedSkillCard({
  skill,
  icon,
  level,
  color,
}: AnimatedSkillCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg"
      variants={cardVariants}
      whileHover="hover"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 z-0`}
      ></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{skill}</h3>
          <motion.div
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
            variants={iconVariants}
          >
            <div className="text-white">{icon}</div>
          </motion.div>
        </div>

        <div className="mt-auto">
          <div className="text-white/80 text-sm mb-1 flex justify-between">
            <span>Proficiency</span>
            <span className="font-bold">{level}%</span>
          </div>
          <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-white"
              variants={progressVariants}
            />
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <Particles color="white" />
    </motion.div>
  );
}

type ParticleData = {
  id: number;
  width: number;
  height: number;
  top: string;
  left: string;
  y: number;
  x: number;
  scale: number;
  delay: number;
  duration: number;
};

export function Particles({ color }: { color: string }) {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const newParticles = [...Array(6)].map((_, i) => {
      const width = Math.random() * 20 + 5;
      const height = Math.random() * 20 + 5;
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const y = Math.random() * -30 - 10;
      const x = Math.random() * 20 - 10;
      const scale = Math.random() * 1.5 + 0.5;
      const delay = Math.random() * 2;
      const duration = Math.random() * 2 + 2;

      return {
        id: i,
        width,
        height,
        top,
        left,
        y,
        x,
        scale,
        delay,
        duration,
      };
    });

    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: p.width,
            height: p.height,
            backgroundColor: color,
            top: p.top,
            left: p.left,
          }}
          animate={{
            y: [0, p.y],
            x: [0, p.x],
            opacity: [0.3, 0],
            scale: [1, p.scale],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
}
