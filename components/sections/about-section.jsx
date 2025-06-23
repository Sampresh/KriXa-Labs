"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Github } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About KriXa
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            KriXa is a digital innovation company focused on revolutionizing how people and businesses bring their ideas
            to life. We combine knowledge, experience, and automation to build smart, scalable, and accessible tech —
            from websites to cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "What KriXa Stands For",
              description:
                "Knowledge Revolution In eXperiential Automation - We revolutionize how technology experiences are created and delivered.",
            },
            {
              title: "Our Philosophy",
              description:
                "Keep Revolutionizing Ideas. eXecute Always - We believe in continuous innovation and flawless execution of every project.",
            },
            {
              title: "Our Mission",
              description:
                "To make powerful technology accessible to everyone, bridging the digital gap between ideas and reality through smart solutions.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-8 rounded-2xl hover:border-gray-500/50 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-200">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.linkedin.com/company/krixa-labs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="glassmorphism p-4 rounded-full hover:border-gray-500/50 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/krixalabs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="glassmorphism p-4 rounded-full hover:border-gray-500/50 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-gray-300" />
            </motion.a>
            <motion.a
              href="https://github.com/krixalabs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="glassmorphism p-4 rounded-full hover:border-gray-500/50 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
