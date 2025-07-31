import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      grade: "CGPA: 3.8/4.0",
      description: "Specialized in Software Engineering and Web Development",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Science College",
      year: "2016 - 2018",
      grade: "GPA: 5.0/5.0",
      description: "Science Group with focus on Mathematics and Physics",
    },
  ]

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2023",
      credentialId: "FCC-12345",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      credentialId: "META-67890",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2022",
      credentialId: "AWS-54321",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ==== Education Section ==== */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.description}</p>
                    <p className="text-sm font-medium text-primary">{edu.grade}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ==== Certifications Section ==== */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Credential ID: {cert.credentialId}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
