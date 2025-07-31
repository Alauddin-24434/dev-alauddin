"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CoursesAndCertifications() {
const courses = [
  {
    title: "Next Level Web Development Course",
    provider: "Programming Hero",
    year: "2024",
    description:
      "Covered advanced full-stack development topics including REST APIs, authentication, Redux, and deployment strategies.",
  },
  {
    title: "Complete Web Development Course",
    provider: "Programming Hero",
    year: "2023",
    description:
      "Learned foundational web development skills including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
  },
];


  const certifications = [

    {
      title: "Next Level Web Development Course",
      issuer: "Programming Hero",
      year: "2024",
      credentialId: "PHlevel2-batch-3-fullstackWEB8-38501070",
      viewUrl:"/certificates/label-2.pdf",

    },
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      year: "2023",
      credentialId: "WEB8-3850",
      viewUrl: "/certificates/label-1.pdf",
  
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
           Learning<span className="text-primary"> & Achievements</span> 
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A showcase of my commitment to continuous learning and professional development through various courses and
            certifications.
          </p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-sm grid-cols-2">
              <TabsTrigger value="courses">
                <GraduationCap className="w-4 h-4 mr-2" /> Courses
              </TabsTrigger>
              <TabsTrigger value="certifications">
                <Award className="w-4 h-4 mr-2" /> Certifications
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="courses">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">{course.title}</h4>
                        <p className="text-primary font-medium text-base">{course.provider}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1 text-sm px-3 py-1">
                        <Calendar className="w-3 h-3" /> {course.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm flex-grow">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">{cert.title}</h4>
                        <p className="text-primary font-medium text-base">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1 text-sm px-3 py-1">
                        <Calendar className="w-3 h-3" /> {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      Credential ID: <span className="font-mono text-foreground">{cert.credentialId}</span>
                    </p>
                    <div className="flex gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Link href={cert.viewUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Link>
                      </Button>
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
