import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Share2, Heart, MessageCircle, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ==== Mock blog data - in real app, this would come from a database or CMS ====
const getBlogPost = (slug: string) => {
  const posts = {
    "getting-started-nextjs-14": {
      id: 1,
      title: "Getting Started with Next.js 14: A Complete Guide",
      excerpt:
        "Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.",
      content: `
        <h2>Introduction to Next.js 14</h2>
        <p>Next.js 14 brings exciting new features and improvements that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore everything you need to know to get started with Next.js 14.</p>
        
        <h3>What's New in Next.js 14?</h3>
        <p>Next.js 14 introduces several groundbreaking features:</p>
        <ul>
          <li><strong>Turbopack:</strong> The new Rust-based bundler that's up to 700x faster than Webpack</li>
          <li><strong>Server Actions:</strong> Simplified server-side mutations without API routes</li>
          <li><strong>Partial Prerendering:</strong> Combine static and dynamic content seamlessly</li>
          <li><strong>Enhanced App Router:</strong> Improved routing with better performance</li>
        </ul>

        <h3>Setting Up Your First Next.js 14 Project</h3>
        <p>Getting started with Next.js 14 is straightforward. Here's how to create your first project:</p>
        
        <pre><code>npx create-next-app@latest my-nextjs-app
cd my-nextjs-app
npm run dev</code></pre>

        <p>This command creates a new Next.js application with all the latest features and best practices configured out of the box.</p>

        <h3>Understanding the App Router</h3>
        <p>The App Router is built on React's Server Components and introduces a new way to structure your application. Here are the key concepts:</p>
        
        <h4>File-based Routing</h4>
        <p>Next.js uses a file-based routing system where the folder structure in your <code>app</code> directory determines your routes.</p>

        <h4>Server Components vs Client Components</h4>
        <p>By default, components in the App Router are Server Components, which run on the server and can directly access databases and other server-side resources.</p>

        <h3>Building Your First Page</h3>
        <p>Let's create a simple page to demonstrate Next.js 14 features:</p>

        <pre><code>// app/about/page.tsx
export default function About() {
  return (
    &lt;div&gt;
      &lt;h1&gt;About Us&lt;/h1&gt;
      &lt;p&gt;Welcome to our Next.js 14 application!&lt;/p&gt;
    &lt;/div&gt;
  )
}</code></pre>

        <h3>Conclusion</h3>
        <p>Next.js 14 represents a significant step forward in React development, offering improved performance, better developer experience, and powerful new features. Whether you're building a simple website or a complex web application, Next.js 14 provides the tools you need to succeed.</p>

        <p>In the next article, we'll dive deeper into Server Actions and how they can simplify your application's data flow.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      category: "Web Development",
      date: "2024-01-15",
      readTime: "8 min read",
      author: "John Doe",
      tags: ["Next.js", "React", "Web Development", "JavaScript", "Tutorial"],
      views: 1250,
      likes: 89,
      comments: 23,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* ==== Back Button ==== */}
          <Button variant="ghost" className="mb-8 hover-lift animate-slide-in-left" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* ==== Article Header ==== */}
          <div className="mb-8 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 hover:scale-105 transition-transform">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

            {/* ==== Article Meta ==== */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views} views
              </div>
            </div>

            {/* ==== Social Actions ==== */}
            <div className="flex items-center gap-4 animate-slide-in-right">
              <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                {post.comments}
              </Button>
              <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* ==== Featured Image ==== */}
          <div className="mb-8 animate-scale-in">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* ==== Article Content ==== */}
          <div className="grid lg:grid-cols-4 gap-8">
            <article className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none animate-fade-in-up"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* ==== Tags ==== */}
              <div className="mt-8 pt-8 border-t border-border animate-slide-in-left">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="hover:scale-105 transition-transform cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* ==== Author Bio ==== */}
              <Card className="mt-8 hover-lift animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">About {post.author}</h4>
                      <p className="text-muted-foreground mb-4">
                        Full Stack Developer with 3+ years of experience in building scalable web applications.
                        Passionate about sharing knowledge and helping others learn web development.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                          Follow
                        </Button>
                        <Button variant="ghost" size="sm" className="hover-lift">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* ==== Sidebar ==== */}
            <aside className="space-y-6">
              {/* ==== Table of Contents ==== */}
              <Card className="hover-lift animate-slide-in-right">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#introduction"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      Introduction to Next.js 14
                    </a>
                    <a href="#whats-new" className="block text-muted-foreground hover:text-primary transition-colors">
                      What's New in Next.js 14?
                    </a>
                    <a href="#setup" className="block text-muted-foreground hover:text-primary transition-colors">
                      Setting Up Your Project
                    </a>
                    <a href="#app-router" className="block text-muted-foreground hover:text-primary transition-colors">
                      Understanding the App Router
                    </a>
                    <a href="#first-page" className="block text-muted-foreground hover:text-primary transition-colors">
                      Building Your First Page
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* ==== Related Posts ==== */}
              <Card className="hover-lift animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    <div className="group cursor-pointer">
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        Building Responsive UIs with Tailwind CSS
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">6 min read</p>
                    </div>
                    <div className="group cursor-pointer">
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        TypeScript Best Practices for React
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">10 min read</p>
                    </div>
                    <div className="group cursor-pointer">
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                        Optimizing React Performance
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">9 min read</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ==== Newsletter Signup ==== */}
              <Card className="hover-lift animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest posts delivered directly to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
                    />
                    <Button size="sm" className="w-full hover-lift">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
