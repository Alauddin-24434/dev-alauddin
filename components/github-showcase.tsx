"use client"

import { useState, useEffect } from "react"
import { Github, GitCommit, Star, Calendar, Code2, TrendingUp, Users, BookOpen, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GitHubUser {
    public_repos: number
    followers: number
    following: number
    created_at: string
    bio: string
    location: string
    blog: string
}

interface GitHubRepo {
    id: number
    name: string
    description: string
    language: string
    stargazers_count: number
    forks_count: number
    html_url: string
    updated_at: string
    topics: string[]
}

export function GitHubShowcase() {
    const [activeTab, setActiveTab] = useState("contributions")
    const [githubData, setGithubData] = useState<GitHubUser | null>(null)
    const [repositories, setRepositories] = useState<GitHubRepo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const username = "Alauddin-24434"

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true)

                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`)
                if (!userResponse.ok) throw new Error("Failed to fetch user data")
                const userData: GitHubUser = await userResponse.json()

                // Fetch repositories
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
                if (!reposResponse.ok) throw new Error("Failed to fetch repositories")
                const reposData: GitHubRepo[] = await reposResponse.json()

                setGithubData(userData)
                setRepositories(reposData)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchGitHubData()
    }, [username])

    // Calculate dynamic stats
    const calculateStats = () => {
        if (!githubData || !repositories) return null

        const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0)
        const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0)
        const languages = [...new Set(repositories.filter((repo) => repo.language).map((repo) => repo.language))]

        // Calculate approximate commits (this is an estimation)
        const accountAge = new Date().getFullYear() - new Date(githubData.created_at).getFullYear()
        const estimatedCommits = Math.max(repositories.length * 15, 200) // Rough estimation

        return {
            totalCommits: estimatedCommits > 1000 ? `${Math.floor(estimatedCommits / 100) / 10}k+` : `${estimatedCommits}+`,
            repositories: githubData.public_repos,
            totalStars,
            totalForks,
            languages: languages.length,
            followers: githubData.followers,
            following: githubData.following,
            accountAge,
        }
    }

    const stats = calculateStats()

    // Get top repositories (by stars, then by forks)
    const getTopRepositories = () => {
        return repositories
            .filter((repo) => !repo.name.includes("24434") && repo.description) // Filter out profile repos
            .sort((a, b) => {
                // Sort by stars first, then by forks, then by recent updates
                if (b.stargazers_count !== a.stargazers_count) {
                    return b.stargazers_count - a.stargazers_count
                }
                if (b.forks_count !== a.forks_count) {
                    return b.forks_count - a.forks_count
                }
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            })
            .slice(0, 6) // Top 6 repositories
    }

    const topRepositories = getTopRepositories()

    // Get language colors
    const getLanguageColor = (language: string) => {
        const colors: { [key: string]: string } = {
            JavaScript: "#f1e05a",
            TypeScript: "#2b7489",
            Python: "#3572A5",
            Java: "#b07219",
            "C++": "#f34b7d",
            C: "#555555",
            HTML: "#e34c26",
            CSS: "#1572B6",
            PHP: "#4F5D95",
            Ruby: "#701516",
            Go: "#00ADD8",
            Rust: "#dea584",
            Swift: "#ffac45",
            Kotlin: "#F18E33",
            Dart: "#00B4AB",
            Shell: "#89e051",
            Vue: "#2c3e50",
            React: "#61dafb",
        }
        return colors[language] || "#8b5cf6"
    }

    if (loading) {
        return (
            <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-center">
                            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                            <p className="text-muted-foreground">Loading GitHub data...</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-red-500 mb-4">Error loading GitHub data: {error}</p>
                        <Button onClick={() => window.location.reload()}>Try Again</Button>
                    </div>
                </div>
            </section>
        )
    }

    if (!stats) return null

    return (
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Github className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold">
                            GitHub <span className="text-primary">Activity</span>
                        </h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My coding journey, contributions, and open-source projects showcase
                    </p>
              
                </div>


                {/* Additional Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                        < BookOpen className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-cyan-500">{stats.repositories}</div>
                        <div className="text-xs text-muted-foreground">Repositories</div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                        <Code2 className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-purple-500">{stats.languages}</div>
                        <div className="text-xs text-muted-foreground">Languages</div>
                    </div>




                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                        <Calendar className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-pink-500">{stats.accountAge}+</div>
                        <div className="text-xs text-muted-foreground">Years Coding</div>
                    </div>
                </div>

                {/* GitHub Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
                        <TabsTrigger value="contributions" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Contributions
                        </TabsTrigger>
                        <TabsTrigger value="languages" className="flex items-center gap-2">
                            <Code2 className="w-4 h-4" />
                            Languages
                        </TabsTrigger>

                    </TabsList>

                    {/* Contributions Tab */}
                    <TabsContent value="contributions" className="space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Contribution Activity
                                </h3>
                                <Badge variant="secondary">Live GitHub Data</Badge>
                            </div>

                            {/* GitHub Contributions Chart */}
                            <div className="mb-6">
                                <img
                                    src={`https://ghchart.rshah.org/2563eb/${username}`}
                                    alt="GitHub Contributions Chart"
                                    className="w-full rounded-lg border border-border/30"
                                />
                            </div>

                            {/* GitHub Streak Stats */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <img
                                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=0D1117&stroke=2563eb&ring=2563eb&fire=2563eb&currStreakLabel=2563eb`}
                                        alt="GitHub Streak Stats"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=0D1117&title_color=2563eb&icon_color=2563eb&text_color=ffffff`}
                                        alt="GitHub Stats"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Languages Tab */}
                    <TabsContent value="languages" className="space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-primary" />
                                Most Used Languages
                            </h3>

                            <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=0D1117&title_color=2563eb&text_color=ffffff`}
                                alt="Top Languages"
                                className="w-full rounded-lg"
                            />


                        </div>
                    </TabsContent>


                </Tabs>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                            View Full GitHub Profile
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
