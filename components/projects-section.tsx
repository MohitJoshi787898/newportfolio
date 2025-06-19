"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Plane, Smartphone, Chrome, Palette } from "lucide-react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "B2B/B2C Travel Booking Platform",
      description:
        "A comprehensive travel booking system allowing users to book flights, buses, hotels, and tour packages. Integrated with multiple third-party APIs including Amadeus, TBO, and Kafila for real-time pricing and availability.",
      icon: Plane,
      tech: ["React", "Node.js", "MongoDB", "Redux", "Firebase", "Express"],
      features: [
        "Flight booking engine with SSR and caching optimization",
        "Dynamic passenger form system (adult/child/infant validation)",
        "Custom itinerary builder with layover filters",
        "Real-time pricing with multiple API integrations",
        "Admin dashboard for booking management",
      ],
      github: "https://github.com/mohitjoshi155/travel-booking-platform",
      live: "https://travel-booking-demo.vercel.app",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Firebase Auth & Push Notification App",
      description:
        "Mobile application built with Expo featuring comprehensive authentication system and push notification functionality with deep linking capabilities.",
      icon: Smartphone,
      tech: ["Expo", "React Native", "Firebase", "Redux"],
      features: [
        "Phone authentication with OTP verification",
        "Google Sign-In integration",
        "Push notifications with deep linking",
        "Offline data synchronization",
        "Cross-platform compatibility",
      ],
      github: "https://github.com/mohitjoshi155/firebase-auth-app",
      live: "https://expo.dev/@mohitjoshi/firebase-auth-app",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Social Media UI Clone",
      description:
        "Instagram/WhatsApp inspired social media application with modern UI/UX, featuring posts, stories, chat functionality, and real-time interactions.",
      icon: Smartphone,
      tech: ["Expo", "Tailwind CSS", "React Native", "Firebase"],
      features: [
        "Instagram-like post creation and editing",
        "Real-time chat functionality",
        "Stories with 24-hour expiry",
        "Like, comment, and share features",
        "Modern, responsive design",
      ],
      github: "https://github.com/mohitjoshi155/social-media-clone",
      live: "https://expo.dev/@mohitjoshi/social-media-clone",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "PAN Card Auto Form Filler",
      description:
        "Chrome extension that automates PAN card form filling across various government and financial websites, saving time and reducing errors.",
      icon: Chrome,
      tech: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
      features: [
        "Automatic form detection and filling",
        "Secure data storage",
        "Multiple website compatibility",
        "Error validation and correction",
        "User-friendly interface",
      ],
      github: "https://github.com/mohitjoshi155/pan-card-autofill",
      live: "https://chrome.google.com/webstore/detail/pan-card-autofill/example",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Developer Color Picker Extension",
      description:
        "Simple and clean color picker tool for developers, featuring hex, RGB, and HSL color formats with clipboard integration.",
      icon: Palette,
      tech: ["JavaScript", "Chrome APIs", "CSS"],
      features: [
        "Multiple color format support",
        "One-click clipboard copy",
        "Color history tracking",
        "Eyedropper tool integration",
        "Minimal, developer-focused UI",
      ],
      github: "https://github.com/mohitjoshi155/dev-color-picker",
      live: "https://chrome.google.com/webstore/detail/dev-color-picker/example",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              The Work Manifest
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Each project represents a journey of learning, innovation, and the pursuit of excellence. From travel
            platforms to mobile apps, every creation tells a story.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={hoveredProject === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="text-slate-300 text-sm flex items-start space-x-2"
                          >
                            <span className="text-orange-400 mt-1">•</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-amber-400 font-semibold mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-slate-700 text-slate-300 hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-amber-400 italic">
            "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"
          </blockquote>
          <p className="text-slate-400 mt-2">
            You have a right to perform your duties, but not to the fruits of your actions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
