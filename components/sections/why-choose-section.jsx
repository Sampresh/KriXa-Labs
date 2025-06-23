"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function WhyChooseSection() {
  const whyChooseUs = [
    "Cutting-edge technology solutions",
    "Affordable and transparent pricing",
    "Fast delivery and reliable support",
    "Local expertise with global standards",
    "24/7 customer support",
    "Proven track record of success",
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Why Choose KriXa?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-6 rounded-xl flex items-center space-x-4 hover:border-gray-500/50 transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <span className="text-white">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
