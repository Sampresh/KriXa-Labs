"use client"

// ============================================================================
// SERVICES SECTION COMPONENT
// ============================================================================
// Displays all services offered by KriXa Labs
// Services data is imported from components/data/services-data.js
// To add new services, edit the services-data.js file
// ============================================================================

import { motion } from "framer-motion"
import { services } from "@/components/data/services-data"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
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
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to revolutionize your business
          </p>
        </motion.div>

        {/* ============================================================================ */}
        {/* SERVICES GRID */}
        {/* ============================================================================ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glassmorphism p-8 rounded-2xl hover:border-gray-500/50 transition-all duration-300 group"
            >
              <div className="text-gray-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
