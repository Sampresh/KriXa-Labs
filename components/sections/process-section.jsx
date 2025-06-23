"use client"

// ============================================================================
// PROCESS SECTION COMPONENT
// ============================================================================
// Displays the work process steps
// Process data is imported from components/data/process-data.js
// To modify the process, edit the process-data.js file
// ============================================================================

import { motion } from "framer-motion"
import { processSteps } from "@/components/data/process-data"

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* ============================================================================ */}
        {/* SECTION HEADER */}
        {/* ============================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures success at every step
          </p>
        </motion.div>

        {/* ============================================================================ */}
        {/* PROCESS STEPS */}
        {/* ============================================================================ */}
        <div className="flex flex-wrap justify-center gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="glassmorphism p-8 rounded-2xl text-center max-w-xs hover:border-gray-500/50 transition-all duration-300"
            >
              <div className="text-gray-300 mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
              <div className="mt-4 text-gray-400 font-bold text-lg">{String(index + 1).padStart(2, "0")}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
