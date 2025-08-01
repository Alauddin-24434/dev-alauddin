"use client";

import React, { useState } from "react";
import { Editor } from "primereact/editor";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PrivateRoute from "@/components/privateRoute/privateRoute";

export default function EditableBlogEditor() {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function saveBlog() {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) throw new Error("Failed to save blog");

       await res.json();

      setContent("");
    } catch (error) {
      console.error(error);
      alert("Error saving blog");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PrivateRoute>
      <div className="max-w-7xl mx-auto mt-24 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 border-b pb-2">
          📝 Live Blog Editor (Side by Side)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Editor */}
          <div className="border rounded-lg p-4 bg-white shadow-sm h-[420px] overflow-hidden">
            <h3 className="text-lg font-medium text-gray-800 mb-2">✍️ Write Here:</h3>
            <Editor
              value={content}
              onTextChange={(e) => setContent(e.htmlValue ?? "")}
              style={{
                height: "350px",
                backgroundColor: "white",
                color: "#1f2937",
              }}
              placeholder="Start typing your content here..."
            />
          </div>

          {/* Right: Preview */}
          <div className="border rounded-lg p-4 bg-gray-50 shadow-sm h-[420px] overflow-y-auto">
            <h3 className="text-lg font-medium text-gray-800 mb-2">🔍 Live Preview:</h3>
            <div
              className="prose prose-indigo max-w-full text-black"
              dangerouslySetInnerHTML={{
                __html: content || "<p><em>Your content will appear here...</em></p>",
              }}
            />
          </div>
        </div>

        {/* Simple Save Button outside both editor and preview */}
        <div className="mt-6 text-center">
          <button
            onClick={saveBlog}
            disabled={loading || !content.trim()}
            className="px-6 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400"
          >
            {loading ? "Saving..." : "Save Blog"}
          </button>
        </div>
      </div>
    </PrivateRoute>
  );
}
