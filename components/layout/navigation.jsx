"use client"

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
// Main site navigation with logo and menu items
// To add new navigation items:
// 1. Add the item to the navigationItems array below
// 2. Make sure the corresponding section has the matching id
// ============================================================================

import { motion } from "framer-motion"
import Image from "next/image"

export default function Navigation({ scrollToSection }) {
  // ============================================================================
  // NAVIGATION ITEMS CONFIGURATION
  // Edit this array to add/remove/modify navigation items
  // ============================================================================
  const navigationItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Process", id: "process" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-700/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ============================================================================ */}
        {/* LOGO SECTION */}
        {/* ============================================================================ */}
        <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600/20 to-gray-400/20 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Image src="/logo.png" alt="KriXa Labs" width={32} height={32} className="w-8 h-8" />
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            KriXa Labs
          </span>
        </motion.div>

        {/* ============================================================================ */}
        {/* NAVIGATION MENU */}
        {/* ============================================================================ */}
        <div className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-gray-300 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
