"use client"

// ============================================================================
// PROJECTS SECTION COMPONENT
// ============================================================================
// Displays portfolio projects with detailed information
// Projects data is imported from components/data/projects-data.js
// To add new projects, edit the projects-data.js file
// ============================================================================

import { motion } from "framer-motion"
import { Calendar, Users } from "lucide-react"
// import { Button } from "@/components/ui/button" // Commented out - no buttons needed for now
import { projects } from "@/components/data/projects-data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
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
            Our Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries
          </p>
        </motion.div>

        {/* ============================================================================ */}
        {/* PROJECTS GRID */}
        {/* ============================================================================ */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism p-8 rounded-2xl hover:border-gray-500/50 transition-all duration-300"
            >
              {/* ============================================================================ */}
              {/* PROJECT HEADER */}
              {/* ============================================================================ */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-300 p-3 bg-gray-800/50 rounded-xl">{project.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Status</div>
                  <span className="text-green-400 font-semibold">{project.status}</span>
                </div>
              </div>

              {/* ============================================================================ */}
              {/* PROJECT DESCRIPTION */}
              {/* ============================================================================ */}
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              {/* ============================================================================ */}
              {/* PROJECT DETAILS */}
              {/* ============================================================================ */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Key Features */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies and Project Info */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      Duration: {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      Client: {project.client}
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================================ */}
              {/* PROJECT RESULTS - COMMENTED OUT AS REQUESTED */}
              {/* Uncomment the section below to show project results */}
              {/* ============================================================================ */}
              {/* 
              {project.results && (
                <div className="border-t border-gray-700/50 pt-6">
                  <h4 className="text-white font-semibold mb-4">Project Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(project.results).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              */}

              {/* ============================================================================ */}
              {/* ACTION BUTTON - COMMENTED OUT AS REQUESTED */}
              {/* Uncomment the section below to show case study button */}
              {/* ============================================================================ */}
              {/* 
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <Button
                  variant="outline"
                  className="w-full border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </div>
              */}
            </motion.div>
          ))}
        </div>

        {/* ============================================================================ */}
        {/* CALL TO ACTION */}
        {/* ============================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Ready to start your next project?</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 text-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 rounded-lg"
          >
            Let's Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
