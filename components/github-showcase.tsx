"use client";

import { useState, useEffect } from "react";
import { Github, GitCommit, Star, Calendar, Code2, TrendingUp, Users, BookOpen, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  bio: string;
  location: string;
  blog: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
  topics: string[];
}

const StatsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
        <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="w-12 h-6 mx-auto mb-1 rounded-md bg-gray-200 dark:bg-gray-700" />
        <div className="w-20 h-4 mx-auto rounded-md bg-gray-200 dark:bg-gray-700" />
      </div>
    ))}
  </div>
);

const ContentSkeleton = () => (
  <div className="w-full animate-pulse">
    <div className="bg-card border border-border rounded-2xl p-6 h-96" />
  </div>
);

export function GitHubShowcase() {
  const [activeTab, setActiveTab] = useState("contributions");
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "Alauddin-24434";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData: GitHubUser = await userResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
        const reposData: GitHubRepo[] = await reposResponse.json();

        setGithubData(userData);
        setRepositories(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const calculateStats = () => {
    if (!githubData || !repositories) return null;

    const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languages = [...new Set(repositories.filter((repo) => repo.language).map((repo) => repo.language))];
    const estimatedCommits = repositories.length * 15;

    return {
      totalCommits: estimatedCommits > 1000 ? `${Math.floor(estimatedCommits / 100) / 10}k+` : `${estimatedCommits}+`,
      repositories: githubData.public_repos,
      totalStars,
      totalForks,
      languages: languages.length,
      followers: githubData.followers,
      following: githubData.following,
      accountAge: new Date().getFullYear() - new Date(githubData.created_at).getFullYear(),
    };
  };

  const stats = calculateStats();

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
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header - Always visible */}
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

        {loading ? (
          <>
            <StatsSkeleton />
            <div className="grid w-full grid-cols-2 mb-8 max-w-sm mx-auto bg-muted/50 rounded-lg animate-pulse">
                <div className="h-10 rounded-lg bg-gray-200 dark:bg-gray-700" />
                <div className="h-10 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
            <ContentSkeleton />
          </>
        ) : (
          <>
            {/* Additional Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <BookOpen className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-cyan-500">{stats?.repositories}</div>
                <div className="text-xs text-muted-foreground">Repositories</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Code2 className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-purple-500">{stats?.languages}</div>
                <div className="text-xs text-muted-foreground">Languages</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-pink-500">{stats?.accountAge}+</div>
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
                  <div className="mb-6">
                    <img
                      src={`https://ghchart.rshah.org/2563eb/${username}`}
                      alt="GitHub Contributions Chart"
                      className="w-full rounded-lg border border-border/30"
                    />
                  </div>
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
          </>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              View Full GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}