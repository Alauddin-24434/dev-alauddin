import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "All Projects", href: "/projects" },
      { name: "Resume", href: "/resume.pdf" },
      { name: "API Tester", href: "/api-tester" },
    ],
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "API Development", href: "#services" },
      { name: "Database Design", href: "#services" },
      { name: "Consulting", href: "#contact" },
    ],
   
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Alauddin-24434", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alauddin-dev", label: "LinkedIn" },

  ]

  return (
    <footer className="bg-background/80 backdrop-blur-md  border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Alauddin
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences and solving complex
              problems through innovative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Barisal, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:alauddin150900@gmail.com" className="hover:text-primary transition-colors">
                  alauddin150900@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Available for freelance work</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-primary">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-muted-foreground text-sm">© {currentYear} Alauddin. All rights reserved.</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for work
                </span>
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
