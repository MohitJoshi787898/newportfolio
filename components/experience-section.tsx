"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Code, Users, Zap } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TheSkyTrails",
      duration: "Jan 2024 – Present",
      location: "Remote, India",
      type: "Full-time",
      description:
        "Leading the development of a comprehensive B2B/B2C travel booking platform that serves thousands of users daily. Responsible for both frontend user experience and backend architecture.",
      achievements: [
        "Built a complete travel booking platform supporting flights, hotels, buses, and tour packages",
        "Integrated multiple third-party APIs (Amadeus, TBO, Kafila) for real-time flight data and pricing",
        "Developed dynamic passenger forms with complex validation for adult, child, and infant bookings",
        "Implemented Firebase authentication system with phone OTP and Google Sign-In",
        "Created push notification system with deep linking using Expo for mobile app",
        "Architected state management using Redux Saga for complex async operations",
        "Built RESTful APIs with Node.js and Express for seamless data flow",
        "Optimized application performance with SSR and intelligent caching strategies",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Redux Saga",
        "Firebase",
        "Expo",
        "REST APIs",
        "Amadeus API",
        "TBO API",
        "Kafila API",
      ],
      highlights: [
        { icon: Users, text: "Thousands of daily users" },
        { icon: Code, text: "Full-stack ownership" },
        { icon: Zap, text: "Real-time integrations" },
      ],
      color: "from-orange-500 to-amber-500",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My experience in building scalable applications and solving complex problems in the travel technology
            domain.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-amber-500 hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 md:ml-16"
              onMouseEnter={() => setHoveredExperience(index)}
              onMouseLeave={() => setHoveredExperience(null)}
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-4 border-slate-900 hidden md:block" />

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl text-white group-hover:text-orange-400 transition-colors mb-2">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-orange-400 font-semibold text-lg mb-2">
                        <Building size={20} />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-slate-300">
                        <Calendar size={16} />
                        <span className="font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">{experience.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hoveredExperience === index ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                        className="flex items-center space-x-2 bg-slate-700/50 px-3 py-2 rounded-lg"
                      >
                        <highlight.icon className="text-orange-400" size={16} />
                        <span className="text-slate-300 text-sm font-medium">{highlight.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-orange-400 font-semibold mb-4 flex items-center">
                        <Zap className="mr-2" size={18} />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 + achievementIndex * 0.1 }}
                            className="flex items-start space-x-3 group/item"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                            <p className="text-slate-300 leading-relaxed group-hover/item:text-slate-200 transition-colors">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-amber-400 font-semibold mb-4 flex items-center">
                        <Code className="mr-2" size={18} />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 1 + techIndex * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-slate-700 text-slate-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sanskrit Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-lg border border-slate-700"
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-amber-400 italic mb-4">
            "योगः कर्मसु कौशलम्"
          </blockquote>
          <p className="text-slate-400">
            Excellence in action is yoga - Every project is an opportunity to achieve mastery
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">Currently Available for New Opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
