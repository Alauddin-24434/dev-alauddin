"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Eye, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [

    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    
    { href: "#contact", label: "Contact" },

  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Smooth scroll handler (optional if you want JS control)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md  border-border z-50 animate-slide-in-left">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform">
            Portfolio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={false} // prevent Next.js from scrolling instantly
                onClick={(e) => handleScroll(e, item.href)} // JS smooth scroll
                className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              className="group hover-lift bg-transparent"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1tHTzTsZRyJLKcvbYwfN6c8rZERh47h8t/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View Resume
              </a>
            </Button>

            {mounted && (
              <Button variant="outline" size="icon" onClick={toggleTheme} className="hover-lift">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <Button variant="outline" size="icon" onClick={toggleTheme} className="hover-lift">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={false}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="w-fit bg-transparent hover-lift" asChild>
                  <a
                href="https://drive.google.com/file/d/1tHTzTsZRyJLKcvbYwfN6c8rZERh47h8t/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View Resume
              </a>
                </Button>
                <Button size="sm" className="w-fit hover-lift">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
