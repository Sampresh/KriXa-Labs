"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import TypewriterEffect from "@/components/typewriter-effect"
import { Button } from "@/components/ui/button"

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-600/30 to-gray-400/30 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Image src="/logo.png" alt="KriXa" width={80} height={80} className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            KriXa
          </div>
          <div className="text-lg md:text-xl text-gray-300 mb-8">Digital Innovation Company from Nepal</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <TypewriterEffect
            texts={[
              "Knowledge Revolution In eXperiential Automation",
              "Keep Revolutionizing Ideas. eXecute Always",
              "Building Smart, Scalable, Accessible Tech",
              "From Websites to Cybersecurity",
            ]}
            className="text-2xl md:text-4xl font-bold text-white"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 text-lg border border-gray-600 hover:border-gray-500 transition-all duration-300"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg"
          >
            Explore Services <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
