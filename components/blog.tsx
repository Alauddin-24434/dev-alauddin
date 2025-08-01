"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MoreHorizontal, Edit, Trash2, Share, FileText, PlusCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BlogPost {
  _id: string;
  content: string;
  date: string;
}

// A new component for the skeleton loader
const SkeletonCard = () => (
  <Card className="bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col h-full animate-pulse">
    <CardContent className="p-6 flex-grow">
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center w-2/5 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
      </div>
      <div className="space-y-3">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12" />
      </div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mt-4" />
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-4" />
    </CardContent>
  </Card>
);

export function BlogSection() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (navigator.share) {
      setCanShare(true);
    }
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogPost[] = await res.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const handleShare = async (id: string, content: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this blog post!",
          text: content.replace(/<[^>]+>/g, '').slice(0, 150) + "...",
          url: `${window.location.origin}/blog/${id}`,
        });
        console.log("Blog shared successfully");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleEdit = (id: string) => {
    alert(`Edit functionality for blog: ${id}`);
  };

  const handleDelete = (id: string) => {
    alert(`Delete functionality for blog: ${id}`);
  };

  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  return (
    <section id="blog" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Latest <span className="text-primary">Blogs</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Stay updated with my thoughts on technology, development, and more.
          </p>
        </div>
        <Tabs defaultValue="view-blogs" className="w-full">
       <TabsList className="grid w-full grid-cols-2 mb-8 max-w-sm mx-auto">
      <TabsTrigger value="view-blogs">
        <FileText className="h-4 w-4 mr-2" />
        View Blogs
      </TabsTrigger>
      <TabsTrigger value="add-blog" onClick={() => router.push("/addblog")}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Blog
      </TabsTrigger>
    </TabsList>
          <TabsContent value="view-blogs">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {loading ? (
                // Show skeleton cards during loading
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : (
                // Show actual blog posts after loading
                blogPosts.slice(0, 4).map((post) => (
                  <div key={post._id} className="relative">
                    <Card className="bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-800 rounded-xl transition hover:shadow-lg flex flex-col h-full">
                      <CardContent className="p-6 flex-grow">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <CalendarDays className="w-4 h-4 mr-2" />
                            <span>{new Date(post.date).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}</span>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                                <MoreHorizontal className="w-4 h-4" />
                                <span className="sr-only">More options</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEdit(post._id)}>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleDelete(post._id)} className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <Link href={`/blog/${post._id}`} className="block">
                          <div
                            className="prose prose-sm max-w-full dark:prose-invert mb-4 line-clamp-3"
                            dangerouslySetInnerHTML={{
                              __html: post.content.replace(/<[^>]+>/g, '').slice(0, 150) + (post.content.length > 150 ? '...' : '')
                            }}
                          />
                          <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                            Read More
                          </Button>
                        </Link>
                        {canShare && (
                          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                            <Button onClick={() => handleShare(post._id, post.content)} variant="outline" size="sm">
                              <Share className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))
              )}
            </div>
            <div className="text-center mt-16">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}