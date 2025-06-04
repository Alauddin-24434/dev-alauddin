
import React from 'react';
import { motion } from "framer-motion";
const Courses = () => {
    return (
         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
           

            
              
                
                  <CourseCard
                    title="Full-Stack Web Development"
                    organization="Next Level Web Development - Programming Hero"
                    date="2024"
                    description="Deep dive into advanced React patterns, Next.js app architecture, and performance optimization."
                  />
                  <CourseCard
                    title="Web Development Course"
                    organization="Programming Hero"
                    date="2023"
                    description="Intensive training in modern JavaScript development across the entire stack."
                  />

                  <CourseCard
                    title="UI/UX Design Fundamentals"
                    organization="Design School"
                    date="2020"
                    description="Comprehensive training in user interface design, user experience principles, and design systems."
                  />
                </div>
            
         
    );
};

export default Courses;










function CourseCard({
  title,
  organization,
  date,
  description,
}: {
  title: string;
  organization: string;
  date: string;
  description: string;
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
        <div className="rounded-md bg-teal-500/10 px-2 py-1 text-xs text-teal-400">
          {date}
        </div>
      </div>
      <p className="mt-1 text-gray-400">{organization}</p>
      <p className="mt-3 text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}