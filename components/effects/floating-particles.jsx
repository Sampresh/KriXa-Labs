"use client"

// ============================================================================
// FLOATING PARTICLES EFFECT
// ============================================================================
// Creates animated background particles in black and white theme
// Particles move in random patterns across the screen
// ============================================================================

import { motion } from "framer-motion"

export default function FloatingParticles() {
  // ============================================================================
  // PARTICLES CONFIGURATION
  // Change particleCount to add/remove particles
  // Modify colors in the className below
  // ============================================================================
  const particleCount = 20

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full opacity-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-400"}`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
