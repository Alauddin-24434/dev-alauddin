import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  try {
    // Correct way to access params according to Next.js best practices
    const { id } = await context.params;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");

    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return NextResponse.json({ message: "No blog found" }, { status: 404 });
    }

    const formattedBlog = {
      ...blog,
      _id: blog._id.toString(),
      date: blog.createdAt ? new Date(blog.createdAt).toISOString() : null,
    };

    return NextResponse.json(formattedBlog, { status: 200 });

  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ message: "Failed to fetch blog" }, { status: 500 });
  }
}