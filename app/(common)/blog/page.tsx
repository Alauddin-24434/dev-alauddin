"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MoreHorizontal, Edit, Trash2, Share } from 'lucide-react';
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

export default function AllBlogsPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Check if the browser supports the Web Share API
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
    console.log(`Editing blog post with id: ${id}`);
    alert(`Edit functionality for blog: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting blog post with id: ${id}`);
    alert(`Delete functionality for blog: ${id}`);
  };

  if (loading) return <p className="text-center py-10">Loading all blogs...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter">
            All <span className="text-primary">Blog Posts</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Browse through all my articles and insights on various topics.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <div key={post._id} className="relative">
              <Card className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full">
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>
                        {new Date(post.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
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
                        Share Post
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}