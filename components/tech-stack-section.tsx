"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const techCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", experience: "8+ months", icon: "⚛️" },
        { name: "Next.js", experience: "6+ months", icon: "▲" },
        { name: "Redux Saga", experience: "6+ months", icon: "🔄" },
        { name: "Tailwind CSS", experience: "8+ months", icon: "🎨" },
        { name: "Framer Motion", experience: "4+ months", icon: "🎭" },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", experience: "8+ months", icon: "🟢" },
        { name: "Express.js", experience: "8+ months", icon: "🚀" },
        { name: "MongoDB", experience: "8+ months", icon: "🍃" },
        { name: "Firebase", experience: "6+ months", icon: "🔥" },
        { name: "JWT Auth", experience: "6+ months", icon: "🔐" },
      ],
    },
    {
      category: "Mobile",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "React Native", experience: "6+ months", icon: "📱" },
        { name: "Expo", experience: "6+ months", icon: "🎯" },
        { name: "Push Notifications", experience: "4+ months", icon: "🔔" },
        { name: "Deep Linking", experience: "3+ months", icon: "🔗" },
      ],
    },
    {
      category: "Tools & Others",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Git & GitHub", experience: "8+ months", icon: "🐙" },
        { name: "Chrome Extensions", experience: "3+ months", icon: "🌐" },
        { name: "REST APIs", experience: "8+ months", icon: "🔌" },
        { name: "Three.js", experience: "2+ months", icon: "🎲" },
        { name: "SSR/EJS", experience: "4+ months", icon: "📄" },
      ],
    },
  ]

  return (
    <section id="tech" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              The Weaponry
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tools and technologies that empower me to build scalable, modern applications. Each skill represents
            countless hours of learning and practical application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                    <h3 className="text-white font-bold">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            hoveredTech === tech.name
                              ? "bg-gradient-to-r " + category.color + " transform scale-105"
                              : "bg-slate-700/50 hover:bg-slate-700"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{tech.icon}</span>
                            <div>
                              <div
                                className={`font-semibold ${
                                  hoveredTech === tech.name ? "text-white" : "text-slate-200"
                                }`}
                              >
                                {tech.name}
                              </div>
                              <div
                                className={`text-sm ${hoveredTech === tech.name ? "text-slate-100" : "text-slate-400"}`}
                              >
                                {tech.experience}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Current Focus</h3>
            <p className="text-slate-300 mb-6">
              Continuously expanding my expertise in modern web technologies while exploring emerging trends like Web3,
              AI integration, and advanced 3D web experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["TypeScript", "GraphQL", "Docker", "AWS", "Web3", "AI/ML"].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
