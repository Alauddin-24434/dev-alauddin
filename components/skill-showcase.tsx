"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  // Programming Languages
  SiJavascript,
  SiTypescript,
  // Frontend Frameworks & Libraries
  SiReact,
  SiNextdotjs,
  // Backend & Runtime
  SiNodedotjs,
  SiExpress,
  // Databases
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  // Cloud & DevOps
  SiDocker,
  // Design Tools
  SiFigma,
  // CSS & Styling
  SiTailwindcss,
  // Version Control & Collaboration
  SiGit,
  SiGithub,
  // Testing
  SiJest,
  // Other Tools
  SiGraphql,
  SiPostman,
  SiInsomnia,
} from "react-icons/si"

import { Brain, Users, Clock, Lightbulb, MessageCircle, Zap, BookOpen } from "lucide-react"

export default function SkillsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const allSkills = [
    // Programming Languages
    { skill: "JavaScript", icon: <SiJavascript className="h-6 w-6" />, category: "Languages", color: "#F7DF1E" },
    { skill: "TypeScript", icon: <SiTypescript className="h-6 w-6" />, category: "Languages", color: "#3178C6" },

    // Frontend Frameworks
    { skill: "React.js", icon: <SiReact className="h-6 w-6" />, category: "Frontend", color: "#61DAFB" },
    { skill: "Next.js", icon: <SiNextdotjs className="h-6 w-6" />, category: "Frontend", color: "#000000" },

    // Backend & Runtime
    { skill: "Node.js", icon: <SiNodedotjs className="h-6 w-6" />, category: "Backend", color: "#339933" },
    { skill: "Express.js", icon: <SiExpress className="h-6 w-6" />, category: "Backend", color: "#000000" },

    // Databases
    { skill: "MongoDB", icon: <SiMongodb className="h-6 w-6" />, category: "Database", color: "#47A248" },
    { skill: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" />, category: "Database", color: "#336791" },
    { skill: "MySQL", icon: <SiMysql className="h-6 w-6" />, category: "Database", color: "#4479A1" },
    { skill: "Firebase", icon: <SiFirebase className="h-6 w-6" />, category: "Database", color: "#FFCA28" },
    { skill: "Supabase", icon: <SiSupabase className="h-6 w-6" />, category: "Database", color: "#3ECF8E" },

    // DevOps
    { skill: "Docker", icon: <SiDocker className="h-6 w-6" />, category: "DevOps", color: "#2496ED" },

    // Design Tools
    { skill: "Figma", icon: <SiFigma className="h-6 w-6" />, category: "Design", color: "#F24E1E" },

    // CSS & Styling
    { skill: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6" />, category: "Styling", color: "#06B6D4" },

    // Version Control
    { skill: "Git", icon: <SiGit className="h-6 w-6" />, category: "Tools", color: "#F05032" },
    { skill: "GitHub", icon: <SiGithub className="h-6 w-6" />, category: "Tools", color: "#181717" },

    // Testing
    { skill: "Jest", icon: <SiJest className="h-6 w-6" />, category: "Testing", color: "#C21325" },

    // API & GraphQL
    { skill: "GraphQL", icon: <SiGraphql className="h-6 w-6" />, category: "API", color: "#E10098" },
    { skill: "Postman", icon: <SiPostman className="h-6 w-6" />, category: "API", color: "#FF6C37" },
    { skill: "Insomnia", icon: <SiInsomnia className="h-6 w-6" />, category: "API", color: "#4000BF" },

    // Soft Skills
    { skill: "Problem Solving", icon: <Lightbulb className="h-6 w-6" />, category: "Soft Skills", color: "#FCD34D" },
    { skill: "Communication", icon: <MessageCircle className="h-6 w-6" />, category: "Soft Skills", color: "#10B981" },
    { skill: "Teamwork", icon: <Users className="h-6 w-6" />, category: "Soft Skills", color: "#8B5CF6" },
    { skill: "Time Management", icon: <Clock className="h-6 w-6" />, category: "Soft Skills", color: "#F59E0B" },
    { skill: "Adaptability", icon: <Zap className="h-6 w-6" />, category: "Soft Skills", color: "#EF4444" },
    { skill: "Critical Thinking", icon: <Brain className="h-6 w-6" />, category: "Soft Skills", color: "#3B82F6" },
    { skill: "Learning", icon: <BookOpen className="h-6 w-6" />, category: "Soft Skills", color: "#06B6D4" },
  ]

  return (
    <div className="w-full mt-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {allSkills.map((skillData, index) => (
          <AnimatedSkillCard
            key={skillData.skill}
            skill={skillData.skill}
            icon={skillData.icon}
            category={skillData.category}
            color={skillData.color}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
}

interface AnimatedSkillCardProps {
  skill: string
  icon: React.ReactNode
  category: string
  color: string
  index: number
}

function AnimatedSkillCard({ skill, icon, category, color, index }: AnimatedSkillCardProps) {
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
        delay: index * 0.03,
      },
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
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.03 + 0.1,
      },
    },
    hover: {
      rotate: 15,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }


                  
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-teal-500/50 text-white hover:bg-teal-950/50 cursor-pointer"
      variants={cardVariants}
      whileHover="hover"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 opacity-90 z-0"
      
      ></div>

      <div className="relative z-10 p-4 h-28 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white mb-1 truncate">{skill}</h3>
            <span className="text-xs text-white/70 uppercase tracking-wider">{category}</span>
          </div>
          <motion.div
            className="bg-white/20 backdrop-blur-sm p-2 rounded-lg flex-shrink-0 ml-2"
            variants={iconVariants}
          >
            <div style={{ color: color === "#000000" || color === "#181717" ? "#FFFFFF" : color }}>{icon}</div>
          </motion.div>
        </div>
      </div>

      {/* Animated particles */}
      <Particles color="white" />
    </motion.div>
  )
}


type ParticleData = {
  id: number
  width: number
  height: number
  top: string
  left: string
  y: number
  x: number
  scale: number
  delay: number
  duration: number
}

export function Particles({ color }: { color: string }) {
  const [particles, setParticles] = useState<ParticleData[]>([])

  useEffect(() => {
    const newParticles = [...Array(3)].map((_, i) => {
      const width = Math.random() * 10 + 2
      const height = Math.random() * 10 + 2
      const top = `${Math.random() * 100}%`
      const left = `${Math.random() * 100}%`
      const y = Math.random() * -20 - 5
      const x = Math.random() * 10 - 5
      const scale = Math.random() * 1.2 + 0.3
      const delay = Math.random() * 2
      const duration = Math.random() * 2 + 2

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
      }
    })

    setParticles(newParticles)
  }, [])

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-15"
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
            opacity: [0.15, 0],
            scale: [1, p.scale],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </>
  )
}
