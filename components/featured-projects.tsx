"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, Code, Server, Play, Database, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// --- Skeleton Components ---
const RegularCardSkeleton = () => (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 animate-pulse h-[500px]">
        <div className="relative overflow-hidden h-56 bg-gray-200 dark:bg-gray-700" />
        <div className="p-6">
            <div className="w-3/4 h-6 rounded-md bg-gray-200 dark:bg-gray-700 mb-2" />
            <div className="w-full h-4 rounded-md bg-gray-200 dark:bg-gray-700 mb-2" />
            <div className="w-5/6 h-4 rounded-md bg-gray-200 dark:bg-gray-700 mb-4" />
            <div className="flex flex-wrap gap-2 mb-4">
                <div className="w-16 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="w-20 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="w-32 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
    </div>
);

const BackendCardSkeleton = () => (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 animate-pulse h-[500px]">
        <div className="relative bg-gradient-to-br from-slate-600 to-slate-800 p-6 h-48">
            <div className="w-28 h-6 rounded-full bg-white/20 mb-4" />
            <div className="w-3/4 h-6 rounded-md bg-white/20 mb-2" />
            <div className="w-full h-4 rounded-md bg-white/20" />
        </div>
        <div className="p-6">
            <div className="w-24 h-4 rounded-md bg-gray-200 dark:bg-gray-700 mb-3" />
            <div className="flex flex-wrap gap-2 mb-6">
                <div className="w-20 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="w-16 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="w-20 h-4 rounded-md bg-gray-200 dark:bg-gray-700 mb-3" />
            <div className="grid grid-cols-1 gap-2 mb-6">
                <div className="w-full h-4 rounded-md bg-gray-200 dark:bg-gray-700" />
                <div className="w-5/6 h-4 rounded-md bg-gray-200 dark:bg-gray-700" />
                <div className="w-4/5 h-4 rounded-md bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="w-full h-12 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
    </div>
);

// --- Main Component ---
export function FeaturedProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initialize AOS animations on component mount
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: "ease-in-out",
        });
        // You can use AOS.refresh() if needed when content changes
        // but here we are loading all content at once, so it's not
        // strictly necessary, but good practice.
        AOS.refresh();
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/projects.json");
                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching project data:", error);
            } finally {
                // Simulate a delay for a better user experience with the skeleton loader
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchProjects();
    }, []);

    const getCategoryIcon = (categoryName: string) => {
        switch (categoryName) {
            case "Full Stack":
                return Code;
            case "Backend":
                return Server;
            default:
                return Code;
        }
    };

    const getCategoryColor = (categoryName: string) => {
        switch (categoryName) {
            case "Full Stack":
                return "bg-blue-600";
            case "Backend":
                return "bg-slate-600";
            default:
                return "bg-gray-500";
        }
    };

    const generateApiTestingUrl = (apiCollection: any) => {
        const config = {
            collection: apiCollection,
        };
        return `/api-tester?collection=${encodeURIComponent(JSON.stringify(config))}`;
    };

    const renderBackendCard = (project: any, index: number) => {
        if (project.category !== "Backend") return null;

        return (
            <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift hover-glow"
                data-aos="fade-up" // <-- Added data-aos
                data-aos-delay={index * 100} // <-- Added data-aos-delay for staggered effect
            >
                <div className="relative bg-gradient-to-br from-slate-600 to-slate-800 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <Badge className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                            <Server className="w-3 h-3" />
                            Backend API
                        </Badge>
                        <div className="flex gap-2">
                            <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white" asChild>
                                <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View GitHub repository for ${project.backendTitle}`}>
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
                                <div className="text-xs text-muted-foreground mt-1">+{project.backendFeatures.length - 4} more features</div>
                            )}
                        </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold flex items-center gap-2">
                                <Database className="w-4 h-4" />
                                API Collection
                            </h4>
                            <Badge variant="outline" className="text-xs">{project.apiCollection.requests.length} endpoints</Badge>
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
        );
    };

    const renderRegularCard = (project: any, index: number) => {
        if (project.category !== "Full Stack") return null;

        const CategoryIcon = getCategoryIcon(project.category);
        return (
            <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift hover-glow"
                data-aos="fade-up" // <-- Added data-aos
                data-aos-delay={index * 100} // <-- Added data-aos-delay
            >
                <div className="relative overflow-hidden">
                    <Image
                        src={project?.thumnail || "/placeholder.svg"}
                        alt={project?.thumnail}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                        <Badge
                            className={`flex items-center gap-2 px-3 py-1 rounded-full ${getCategoryColor(project.category)} text-white text-sm font-medium`}
                        >
                            <CategoryIcon className="w-3 h-3" />
                            {project.category}
                        </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View GitHub repository for ${project.title}`}>
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
                    {/* <Button variant="outline" className="w-fit group/btn bg-transparent" asChild>
                        <Link href={`/projects/${project.id}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button> */}
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-20 bg-muted/10">
            
            <div className="container mx-auto px-4">
                
                <div className="text-center mb-16" data-aos="fade-up"> {/* Added data-aos */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Showcasing my work, skills, and continuous learning journey
                    </p>
                </div>
                <Tabs defaultValue="fullstack">
                    <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100"> {/* Added data-aos and delay */}
                        <TabsList className="grid w-full max-w-sm grid-cols-2">
                            <TabsTrigger value="fullstack">
                                <Code className="w-4 h-4 mr-2" /> Full Stack
                            </TabsTrigger>
                            <TabsTrigger value="backend">
                                <Server className="w-4 h-4 mr-2" /> Backend
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="fullstack">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {loading ? (
                                <>
                                    <RegularCardSkeleton />
                                    <RegularCardSkeleton />
                                    <RegularCardSkeleton />
                                </>
                            ) : projects.length > 0 ? (
                                projects.filter((p: any) => p.category === "Full Stack").map((project, index) => renderRegularCard(project, index))
                            ) : (
                                <div className="col-span-full text-center text-muted-foreground text-lg py-10">
                                    No full stack projects found.
                                </div>
                            )}
                        </div>
                    </TabsContent>
                    <TabsContent value="backend">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {loading ? (
                                <>
                                    <BackendCardSkeleton />
                                    <BackendCardSkeleton />
                                    <BackendCardSkeleton />
                                </>
                            ) : projects.length > 0 ? (
                                projects.filter((p: any) => p.category === "Backend").map((project, index) => renderBackendCard(project, index))
                            ) : (
                                <div className="col-span-full text-center text-muted-foreground text-lg py-10">
                                    No backend projects found.
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}