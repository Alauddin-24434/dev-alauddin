"use client"

import React, { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

// Import AOS
import AOS from "aos"
import "aos/dist/aos.css"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    })
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service configuration is missing.")
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      if (result.status === 200 || result.text === "OK") {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error("Failed to send message.")
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast.error("An error occurred while sending the message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alauddin150900@gmail.com",
      href: "mailto:hello@example.com",
    },

    {
      icon: MapPin,
      title: "Location",
      value: "Barisal, Bangladesh",
      href: "#",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+880 1951231561",
      href: "https://wa.me/8801951231561?text=Hello!%20I%20want%20to%20connect%20with%20you",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together! Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ==== Contact Information ==== */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                Don’t hesitate to reach out if you have any questions or just want to say hello!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ==== Social Links ==== */}
            <div className="pt-8" data-aos="fade-right" data-aos-delay="600">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn"].map((social, index) => (
                  <Button key={index} variant="outline" size="sm">
                    {social}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* ==== Contact Form ==== */}
          <Card data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="600">
                  <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Toaster position="top-center" />
    </section>
  )
}