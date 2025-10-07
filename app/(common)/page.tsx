import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { FeaturedProjects } from "@/components/featured-projects"


import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CoursesAndCertifications } from "@/components/course"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />

      <CoursesAndCertifications />
      {/* <BlogSection /> */}
      
      <Contact />
      <Footer />
    </main>
  )
}
