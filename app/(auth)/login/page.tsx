"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AOS from "aos"
import "aos/dist/aos.css"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out", once: true })
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      const data = await res.json()
      localStorage.setItem("accessToken", data.accessToken)
      router.push("/addblog")
    } else {
      const data = await res.json()
      setError(data.error || "Login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-card text-card-foreground shadow-lg p-8 rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error && <p className="text-red-600 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-muted-foregro py-3 rounded-md hover:bg-secondary transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
