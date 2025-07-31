import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14: A Complete Guide",
      excerpt:
        "Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "getting-started-nextjs-14",
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt:
        "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes and best practices.",
      image: "/placeholder.svg?height=300&width=500",
      category: "CSS",
      date: "2024-01-10",
      readTime: "6 min read",
      slug: "responsive-ui-tailwind-css",
    },
    {
      id: 3,
      title: "TypeScript Best Practices for React Developers",
      excerpt:
        "Improve your React development workflow with TypeScript best practices, type definitions, and common patterns.",
      image: "/placeholder.svg?height=300&width=500",
      category: "TypeScript",
      date: "2024-01-05",
      readTime: "10 min read",
      slug: "typescript-react-best-practices",
    },
    {
      id: 4,
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Explore essential database design patterns and how to implement them in modern web applications.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Database",
      date: "2023-12-28",
      readTime: "12 min read",
      slug: "database-design-patterns",
    },
    {
      id: 5,
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt:
        "Learn advanced techniques to optimize your React applications for better performance and user experience.",
      image: "/placeholder.svg?height=300&width=500",
      category: "React",
      date: "2023-12-20",
      readTime: "9 min read",
      slug: "react-performance-optimization",
    },
    {
      id: 6,
      title: "Building APIs with Node.js and Express",
      excerpt:
        "A comprehensive guide to building robust and scalable APIs using Node.js, Express, and modern development practices.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Backend",
      date: "2023-12-15",
      readTime: "15 min read",
      slug: "nodejs-express-api-guide",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* ==== Page Header ==== */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts about web development, programming, and technology
            </p>
          </div>

          {/* ==== Featured Post ==== */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {blogPosts[0].category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <Button className="w-fit group" asChild>
                      <Link href={`/blog/${blogPosts[0].slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* ==== All Posts Grid ==== */}
          <div>
            <h2 className="text-2xl font-bold mb-8">All Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full group bg-transparent" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* ==== Newsletter Signup ==== */}
          <div className="mt-20">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Subscribe to my newsletter to get the latest posts and updates delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
                  />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
