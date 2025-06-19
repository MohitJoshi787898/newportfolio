"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

interface SanskritTransitionProps {
  text: string
  translation: string
}

export default function SanskritTransition({ text, translation }: SanskritTransitionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showTranslation, setShowTranslation] = useState(false)

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="cursor-pointer"
          onClick={() => setShowTranslation(!showTranslation)}
          onMouseEnter={() => setShowTranslation(true)}
          onMouseLeave={() => setShowTranslation(false)}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4 font-serif">{text}</h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showTranslation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-slate-300 italic"
          >
            "{translation}"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
