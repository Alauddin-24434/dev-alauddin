"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CalendarDays, Share } from 'lucide-react';
import Link from "next/link";

interface BlogPost {
  _id: string;
  content: string;
  date: string;
}

export default function BlogPostDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (!id) return;

    if (navigator.share) {
      setCanShare(true);
    }

    async function fetchBlogPost() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog post");
        const data: BlogPost = await res.json();
        setBlogPost(data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    }
    fetchBlogPost();
  }, [id]);

  const handleShare = async () => {
    try {
      if (navigator.share && blogPost) {
        await navigator.share({
          title: "Check out this blog post!",
          text: blogPost.content.replace(/<[^>]+>/g, '').slice(0, 150) + "...",
          url: `${window.location.origin}/blog/${blogPost._id}`,
        });
        console.log("Blog shared successfully");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (loading) return <p className="text-center py-10">Loading blog post...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (!blogPost) return <p className="text-center py-10">Blog post not found.</p>;

  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white dark:bg-gray-950 shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-start mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
            <div className="flex items-center text-muted-foreground text-sm space-x-2">
              <CalendarDays className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">
                {new Date(blogPost.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {canShare && (
              <Button onClick={handleShare} variant="outline" size="sm" className="space-x-2">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </Button>
            )}
          </div>

          <div className="prose prose-xl dark:prose-invert mx-auto mb-10 text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary-dark text-white font-semibold shadow-md transition-transform transform hover:scale-105">
              <Link href="/blog">Back to All Blogs</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}