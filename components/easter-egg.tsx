"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEgg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [sequence, setSequence] = useState<string[]>([])

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = [...sequence, event.code].slice(-konamiCode.length)
      setSequence(newSequence)

      if (newSequence.join(",") === konamiCode.join(",")) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
        setSequence([])
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [sequence])

  const mantras = [
    "console.log('धर्मो रक्षति रक्षितः')",
    "// Code is my Karma, Culture is my Dharma",
    "function enlightenment() { return 'सा विद्या या विमुक्तये'; }",
    "const wisdom = 'Ancient roots, modern code';",
  ]

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="bg-slate-900 border border-orange-400 rounded-lg p-8 max-w-md mx-4 text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">🎉 Secret Dev Mode Activated!</h3>
            <div className="space-y-2 font-mono text-sm text-slate-300">
              {mantras.map((mantra, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.5 }}
                  className="text-left"
                >
                  {mantra}
                </motion.div>
              ))}
            </div>
            <p className="text-amber-400 mt-4 italic">"True knowledge is that which liberates the developer's soul"</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
