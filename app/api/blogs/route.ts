// app/api/blogs/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("portfolio");

    const result = await db.collection("blogs").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Blog saved", id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to save blog" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const blogs = await db
      .collection("blogs")
      .find()
      .sort({ createdAt: -1 }) 
      .toArray();

 
    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      _id: blog._id.toString(),
      date: blog.createdAt ? new Date(blog.createdAt).toISOString() : null,
    }));

    return NextResponse.json(formattedBlogs, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
  }
}
