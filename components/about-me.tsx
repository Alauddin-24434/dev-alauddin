import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';
const AboutMe = () => {
    return (
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
                    src="/alauddin.png"
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
                <h3 className="text-2xl font-bold">
                  Full-Stack Developer with a Passion for Creating
                </h3>
                <p className="text-gray-300">
                  I'm a passionate full-stack developer with expertise in
                  building modern web applications. My journey in the tech world
                  started with a curiosity about how websites work, which led me
                  to dive deep into both frontend and backend technologies.
                </p>
                <p className="text-gray-300">
                  I specialize in crafting seamless user experiences with React,
                  Next.js, and modern JavaScript frameworks while building
                  robust backend systems with Node.js and various databases. My
                  approach combines technical expertise with creative
                  problem-solving to deliver exceptional digital products.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">Frontend Development</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-white">Core:</span>{" "}
                      HTML, CSS, JavaScript, TypeScript
                      <br />
                      <span className="font-semibold text-white">
                        Frameworks & Libraries:
                      </span>{" "}
                      React, Next.js, Redux Toolkit, Zustand, Tailwind CSS,
                      Framer Motion
                      <br />
                      <span className="font-semibold text-white">
                        Utilities:
                      </span>{" "}
                      Axios, React Hook Form, Chart.js, AOS
                      <br />
                      <span className="font-semibold text-white">
                        Others:
                      </span>{" "}
                      Responsive Design, Component Reusability, SEO
                      Optimization, REST API Integration
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">Backend Development</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-white">
                        Runtime & Frameworks:
                      </span>{" "}
                      Node.js, Express.js
                      <br />
                      <span className="font-semibold text-white">
                        Databases:
                      </span>{" "}
                      MongoDB, Mongoose, PostgreSQL, Prisma ORM
                      <br />
                      <span className="font-semibold text-white">
                        Authentication:
                      </span>{" "}
                      JWT, OAuth, bcrypt, Role-based Access Control (RBAC)
                      <br />
                      <span className="font-semibold text-white">
                        API:
                      </span>{" "}
                      RESTful API Design, CRUD Operations, Pagination,
                      Filtering, Error Handling
                      <br />
                      <span className="font-semibold text-white">
                        Others:
                      </span>{" "}
                      MVC Pattern, Middleware, Express Validator alternatives,
                      File Upload (Multer), Environment Variables, Postman,
                      Thunder Client
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-teal-400"></div>
                      <h4 className="font-medium">UI/UX Design</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      Figma, Responsive Design
                    </p>
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
                  Download CV{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
    );
};

export default AboutMe;