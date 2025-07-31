"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Code, Server, Play, Database, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedProjects() {
  const projectCategories = [
    { name: "Full Stack", icon: Code, color: "bg-blue-600" },
    { name: "Backend", icon: Server, color: "bg-slate-600" },
  ]

  const projects = [
    {
      id: 1,
      title: "Royal Place Hotel",
      description:
        "A comprehensive hotel booking system with modern payment integration, real-time room availability, guest management, and an intuitive admin dashboard for seamless hotel operations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Socket.io"],
      liveUrl: "https://royal-place-hotel.vercel.app",
      githubUrl: "https://github.com/yourusername/royal-place-frontend",
      category: "Full Stack",
      // Backend-specific data
      backendTitle: "Royal Place Hotel Backend",
      backendDescription:
        "Robust REST API with secure authentication, payment processing, real-time booking management, room availability tracking, and comprehensive admin controls for hotel operations.",
      backendTechnologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Stripe API", "Socket.io", "Multer"],
      backendFeatures: [
        "JWT Authentication & Authorization",
        "Stripe Payment Integration",
        "Real-time Room Availability",
        "Booking Management System",
        "Guest Profile Management",
        "Email Notification Service",
        "File Upload for Documents",
        "Admin Dashboard APIs",
      ],
      backendGithubUrl: "https://github.com/yourusername/royal-place-backend",
      apiCollection: {
        name: "Royal Place Hotel API",
        baseUrl: "https://royal-place-server.vercel.app",
        requests: [
          {
            id: "auth-login",
            name: "User Login",
            method: "POST",
            url: "{{BASE_URL}}/api/users/login",
            headers: [{ key: "Content-Type", value: "application/json" }],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                email: "alauddin150900@gmail.com",
                password: "123456",
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Authentication",
          },
          {
            id: "rooms-available",
            name: "Get Available Rooms",
            method: "GET",
            url: "{{BASE_URL}}/api/rooms/available?checkin=2024-02-01&checkout=2024-02-05&guests=2",
            headers: [{ key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" }],
            bodyType: "none",
            jsonBody: "",
            formDataFields: [],
            category: "Rooms",
          },
          {
            id: "booking-create",
            name: "Create Booking",
            method: "POST",
            url: "{{BASE_URL}}/api/bookings",
            headers: [
              { key: "Content-Type", value: "application/json" },
              { key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" },
            ],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                roomId: "room_deluxe_001",
                checkinDate: "2024-02-01",
                checkoutDate: "2024-02-05",
                guests: 2,
                guestInfo: {
                  name: "John Doe",
                  email: "john@example.com",
                  phone: "+1234567890",
                },
                paymentMethod: "stripe",
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Bookings",
          },
          {
            id: "payment-process",
            name: "Process Payment",
            method: "POST",
            url: "{{BASE_URL}}/api/payments/process",
            headers: [
              { key: "Content-Type", value: "application/json" },
              { key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" },
            ],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                bookingId: "booking_123",
                amount: 25000,
                currency: "usd",
                paymentMethodId: "pm_card_visa",
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Payments",
          },
        ],
        envVariables: [
          { key: "BASE_URL", value: "https://royal-place-server.vercel.app" },
          { key: "AUTH_TOKEN", value: "your-jwt-token-here" },
        ],
      },
    },
    {
      id: 2,
      title: "Academi Admission Management",
      description:
        "A comprehensive admission management system featuring student application processing, document verification, real-time status tracking, and advanced analytics for educational institutions.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js", "Material-UI"],
      liveUrl: "https://academi-admission.vercel.app",
      githubUrl: "https://github.com/yourusername/academi-frontend",
      category: "Full Stack",
      // Backend-specific data
      backendTitle: "Academi Admission Backend",
      backendDescription:
        "Scalable admission management system with student application processing, document verification, real-time notifications, automated workflows, and comprehensive reporting APIs.",
      backendTechnologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Multer", "Nodemailer", "PDF-Kit"],
      backendFeatures: [
        "Student Application Processing",
        "Document Upload & Verification",
        "Real-time Status Updates",
        "Automated Email Notifications",
        "Admin Reporting Dashboard",
        "Bulk Data Import/Export",
        "PDF Report Generation",
        "Application Workflow Management",
      ],
      backendGithubUrl: "https://github.com/yourusername/academi-backend",
      apiCollection: {
        name: "Academi Admission API",
        baseUrl: "https://academi-server.vercel.app",
        requests: [
          {
            id: "student-register",
            name: "Student Registration",
            method: "POST",
            url: "{{BASE_URL}}/api/students/register",
            headers: [{ key: "Content-Type", value: "application/json" }],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@email.com",
                phone: "+1234567890",
                dateOfBirth: "1995-05-15",
                program: "Computer Science",
                previousEducation: "Bachelor's Degree",
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Students",
          },
          {
            id: "application-submit",
            name: "Submit Application",
            method: "POST",
            url: "{{BASE_URL}}/api/applications",
            headers: [
              { key: "Content-Type", value: "multipart/form-data" },
              { key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" },
            ],
            bodyType: "multipart",
            jsonBody: "",
            formDataFields: [
              { key: "studentId", value: "student_123", type: "text" },
              { key: "transcripts", value: null, type: "file" },
              { key: "personalStatement", value: "My personal statement for admission...", type: "text" },
              { key: "recommendationLetter", value: null, type: "file" },
            ],
            category: "Applications",
          },
          {
            id: "application-status",
            name: "Check Application Status",
            method: "GET",
            url: "{{BASE_URL}}/api/applications/{{APPLICATION_ID}}/status",
            headers: [{ key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" }],
            bodyType: "none",
            jsonBody: "",
            formDataFields: [],
            category: "Applications",
          },
          {
            id: "admin-applications",
            name: "Get All Applications (Admin)",
            method: "GET",
            url: "{{BASE_URL}}/api/admin/applications?status=pending&program=Computer Science",
            headers: [{ key: "Authorization", value: "Bearer {{ADMIN_TOKEN}}" }],
            bodyType: "none",
            jsonBody: "",
            formDataFields: [],
            category: "Admin",
          },
        ],
        envVariables: [
          { key: "BASE_URL", value: "https://academi-server.vercel.app" },
          { key: "AUTH_TOKEN", value: "your-jwt-token-here" },
          { key: "ADMIN_TOKEN", value: "admin-jwt-token-here" },
          { key: "APPLICATION_ID", value: "app_123456" },
        ],
      },
    },
    {
      id: 3,
      title: "Car Wash Booking System",
      description:
        "A modern car wash booking platform with service scheduling, real-time slot availability, payment integration, customer management, and automated service reminders.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://carwash-booking.vercel.app",
      githubUrl: "https://github.com/yourusername/carwash-frontend",
      category: "Full Stack",
      // Backend-specific data
      backendTitle: "Car Wash Booking Backend",
      backendDescription:
        "Efficient booking management API with service scheduling, slot management, payment processing, customer notifications, and comprehensive business analytics.",
      backendTechnologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "Stripe API", "Twilio", "Cron Jobs"],
      backendFeatures: [
        "Service Slot Management",
        "Real-time Booking System",
        "Payment Processing",
        "SMS/Email Notifications",
        "Customer Management",
        "Service History Tracking",
        "Automated Reminders",
        "Business Analytics",
      ],
      backendGithubUrl: "https://github.com/yourusername/carwash-backend",
      apiCollection: {
        name: "Car Wash Booking API",
        baseUrl: "https://carwash-server.vercel.app",
        requests: [
          {
            id: "services-list",
            name: "Get Available Services",
            method: "GET",
            url: "{{BASE_URL}}/api/services",
            headers: [],
            bodyType: "none",
            jsonBody: "",
            formDataFields: [],
            category: "Services",
          },
          {
            id: "slots-available",
            name: "Get Available Time Slots",
            method: "GET",
            url: "{{BASE_URL}}/api/slots/available?date=2024-02-01&serviceId=basic-wash",
            headers: [],
            bodyType: "none",
            jsonBody: "",
            formDataFields: [],
            category: "Booking",
          },
          {
            id: "booking-create",
            name: "Create Booking",
            method: "POST",
            url: "{{BASE_URL}}/api/bookings",
            headers: [{ key: "Content-Type", value: "application/json" }],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                serviceId: "basic-wash",
                date: "2024-02-01",
                timeSlot: "10:00",
                customerInfo: {
                  name: "John Doe",
                  phone: "+1234567890",
                  email: "john@example.com",
                },
                vehicleInfo: {
                  make: "Toyota",
                  model: "Camry",
                  year: 2020,
                  licensePlate: "ABC123",
                },
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Booking",
          },
          {
            id: "booking-payment",
            name: "Process Booking Payment",
            method: "POST",
            url: "{{BASE_URL}}/api/bookings/{{BOOKING_ID}}/payment",
            headers: [{ key: "Content-Type", value: "application/json" }],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                paymentMethodId: "pm_card_visa",
                amount: 2500,
                currency: "usd",
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Payments",
          },
        ],
        envVariables: [
          { key: "BASE_URL", value: "https://carwash-server.vercel.app" },
          { key: "BOOKING_ID", value: "booking_123456" },
        ],
      },
    },
    {
      id: 4,
      title: "Agriculture Management System",
      description:
        "A comprehensive agricultural management platform with crop monitoring, weather integration, inventory management, farmer networking, and smart farming analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Weather API", "Chart.js", "Socket.io"],
      liveUrl: "https://agri-management.vercel.app",
      githubUrl: "https://github.com/yourusername/agriculture-frontend",
      category: "Full Stack",
      // Backend-specific data
      backendTitle: "Agriculture Management Backend",
      backendDescription:
        "Advanced agricultural API with crop monitoring, weather data integration, inventory tracking, farmer collaboration tools, and predictive analytics for smart farming.",
      backendTechnologies: ["Node.js", "Express.js", "MongoDB", "Weather API", "ML Models", "Socket.io", "Cron Jobs"],
      backendFeatures: [
        "Crop Monitoring & Tracking",
        "Weather Data Integration",
        "Inventory Management",
        "Farmer Networking Platform",
        "Predictive Analytics",
        "Automated Alerts System",
        "Market Price Integration",
        "Equipment Management",
      ],
      backendGithubUrl: "https://github.com/yourusername/agriculture-backend",
      apiCollection: {
        name: "Agriculture Management API",
        baseUrl: "https://agri-server.vercel.app",
        requests: [
          {
            id: "farmer-register",
            name: "Farmer Registration",
            method: "POST",
            url: "{{BASE_URL}}/api/farmers/register",
            headers: [{ key: "Content-Type", value: "application/json" }],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                name: "John Farmer",
                email: "john.farmer@email.com",
                phone: "+1234567890",
                farmLocation: {
                  latitude: 40.7128,
                  longitude: -74.006,
                  address: "123 Farm Road, Rural County",
                },
                farmSize: 50,
                cropTypes: ["wheat", "corn", "soybeans"],
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Farmers",
          },
          {
            id: "crop-add",
            name: "Add Crop Record",
            method: "POST",
            url: "{{BASE_URL}}/api/crops",
            headers: [
              { key: "Content-Type", value: "application/json" },
              { key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" },
            ],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                cropType: "wheat",
                variety: "Winter Wheat",
                plantingDate: "2024-03-15",
                expectedHarvestDate: "2024-08-15",
                fieldArea: 10,
                fieldLocation: {
                  latitude: 40.7128,
                  longitude: -74.006,
                },
                soilType: "loamy",
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Crops",
          },
          {
            id: "weather-data",
            name: "Get Weather Forecast",
            method: "GET",
            url: "{{BASE_URL}}/api/weather?lat=40.7128&lon=-74.0060&days=7",
            headers: [{ key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" }],
            bodyType: "none",
            jsonBody: "",
            formDataFields: [],
            category: "Weather",
          },
          {
            id: "inventory-update",
            name: "Update Inventory",
            method: "PUT",
            url: "{{BASE_URL}}/api/inventory/{{ITEM_ID}}",
            headers: [
              { key: "Content-Type", value: "application/json" },
              { key: "Authorization", value: "Bearer {{AUTH_TOKEN}}" },
            ],
            bodyType: "json",
            jsonBody: JSON.stringify(
              {
                itemName: "Fertilizer NPK 10-10-10",
                quantity: 500,
                unit: "kg",
                location: "Warehouse A",
                expiryDate: "2025-12-31",
                cost: 1500,
              },
              null,
              2,
            ),
            formDataFields: [],
            category: "Inventory",
          },
        ],
        envVariables: [
          { key: "BASE_URL", value: "https://agri-server.vercel.app" },
          { key: "AUTH_TOKEN", value: "your-jwt-token-here" },
          { key: "ITEM_ID", value: "item_123456" },
        ],
      },
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("Full Stack")

  // Filter projects based on category
  const getFilteredProjects = () => {
    if (selectedCategory === "Backend") {
      // Show all full-stack projects as backend projects
      return projects.filter((p) => p.category === "Full Stack")
    }
    return projects.filter((p) => p.category === selectedCategory)
  }

  const filteredProjects = getFilteredProjects()

  const getCategoryIcon = (categoryName: string) => {
    const category = projectCategories.find((cat) => cat.name === categoryName)
    return category ? category.icon : Code
  }

  const getCategoryColor = (categoryName: string) => {
    const category = projectCategories.find((cat) => cat.name === categoryName)
    return category ? category.color : "bg-gray-500"
  }

  const generateApiTestingUrl = (apiCollection: any) => {
    const config = {
      collection: apiCollection,
    }
    return `/api-tester?collection=${encodeURIComponent(JSON.stringify(config))}`
  }

  const renderBackendCard = (project: any, index: number) => {
    return (
      <div
        key={project.id}
        className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift hover-glow animate-fade-in-up"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-br from-slate-600 to-slate-800 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Badge className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
              <Server className="w-3 h-3" />
              Backend API
            </Badge>
            <div className="flex gap-2">
              <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white" asChild>
                <a
                  href={project.backendGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.backendTitle}`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" className="bg-primary/80 backdrop-blur-sm hover:bg-primary text-white" asChild>
                <Link href={generateApiTestingUrl(project.apiCollection)}>
                  <Play className="w-4 h-4 mr-1" />
                  Test API
                </Link>
              </Button>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{project.backendTitle}</h3>
          <p className="text-white/90 text-sm">{project.backendDescription}</p>
        </div>

        <div className="p-6">
          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.backendTechnologies.map((tech: string, techIndex: number) => (
                <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.backendFeatures.slice(0, 4).map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
              {project.backendFeatures.length > 4 && (
                <div className="text-xs text-muted-foreground mt-1">
                  +{project.backendFeatures.length - 4} more features
                </div>
              )}
            </div>
          </div>

          {/* API Endpoints Info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Database className="w-4 h-4" />
                API Collection
              </h4>
              <Badge variant="outline" className="text-xs">
                {project.apiCollection.requests.length} endpoints
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Pre-configured API collection ready for testing</p>
            <Button variant="outline" size="sm" className="w-full group/btn bg-transparent" asChild>
              <Link href={generateApiTestingUrl(project.apiCollection)}>
                <Play className="w-4 h-4 mr-2" />
                Open in API Tester
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const renderRegularCard = (project: any, index: number) => {
    const CategoryIcon = getCategoryIcon(project.category)
    return (
      <div
        key={project.id}
        className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift hover-glow animate-fade-in-up"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              className={`flex items-center gap-2 px-3 py-1 rounded-full ${getCategoryColor(project.category)} text-white text-sm font-medium`}
            >
              <CategoryIcon className="w-3 h-3" />
              {project.category}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between h-[calc(100%-14rem)]">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs px-2 py-1">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* View Details Button */}
          <Button variant="outline" className="w-fit group/btn bg-transparent" asChild>
            <Link href={`/projects/${project.id}`}>
              View Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work across different technologies and domains
          </p>
        </div>

        {/* Project Categories (Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {projectCategories.map((category, index) => {
            const CategoryIcon = category.icon
            const isActive = selectedCategory === category.name

            return (
              <Button
                key={index}
                variant={isActive ? "default" : "outline"}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  isActive ? getCategoryColor(category.name) + " text-white" : "bg-muted/50 hover:bg-muted"
                } hover-lift`}
                onClick={() => setSelectedCategory(category.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryIcon className="w-5 h-5" />
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            )
          })}
        </div>

        {/* Filtered Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              if (selectedCategory === "Backend") {
                return renderBackendCard(project, index)
              }
              return renderRegularCard(project, index)
            })
          ) : (
            <div className="col-span-full text-center text-muted-foreground text-lg py-10">
              No projects found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
