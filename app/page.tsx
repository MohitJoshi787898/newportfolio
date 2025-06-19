"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import SanskritTransition from "@/components/sanskrit-transition"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import WisdomSection from "@/components/wisdom-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import EasterEgg from "@/components/easter-egg"
import ExperienceSection from "@/components/experience-section"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated background */}
      <motion.div className="fixed inset-0 opacity-10" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-amber-500/20" />
      </motion.div>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <SanskritTransition text="धर्मो रक्षति रक्षितः" translation="Dharma protects those who uphold it" />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <WisdomSection />
        <ContactSection />
      </main>

      <ScrollToTop />
      <EasterEgg />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-slate-800">
        <p className="text-slate-400 italic">"Code is my Karma. Culture is my Dharma."</p>
        <p className="text-sm text-slate-500 mt-2">Crafted with passion. Guided by values.</p>
      </footer>
    </div>
  )
}
