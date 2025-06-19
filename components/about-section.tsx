"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Heart, Globe, Zap } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const timeline = [
    { year: "2023", event: "Started MERN Stack Journey", icon: Code },
    { year: "2023", event: "Built First React Application", icon: Zap },
    { year: "2024", event: "Developed Travel Booking Platform", icon: Globe },
    { year: "2024", event: "Mastered Full-Stack Architecture", icon: Heart },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              The Inner Story
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A passionate developer who believes in the harmony between cutting-edge technology and timeless wisdom. My
            journey spans from mastering React fundamentals to building scalable travel platforms that serve thousands
            of users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">My Philosophy</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I believe in writing code that not only solves problems but does so with elegance and purpose. Every
                  line of code is an opportunity to create something meaningful, just as every action in life should be
                  guided by dharma.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-orange-400" size={20} />
                    <span className="text-slate-300">Clean, maintainable code architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="text-orange-400" size={20} />
                    <span className="text-slate-300">User-centric design thinking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-orange-400" size={20} />
                    <span className="text-slate-300">Scalable, global solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Journey Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-orange-400 font-semibold">{item.year}</div>
                    <div className="text-slate-300">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-amber-400 italic">
            "कर्मणि व्यज्यते यः सः पुरुषः"
          </blockquote>
          <p className="text-slate-400 mt-2">One is defined by one's actions</p>
        </motion.div>
      </div>
    </section>
  )
}
