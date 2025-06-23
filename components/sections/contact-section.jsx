"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/xeokrgop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Talk
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to revolutionize your business with cutting-edge technology? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-200">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-300" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">krixalabs@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gray-300" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+977-9769404538</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gray-300" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-200">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  required
                  className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email *"
                  required
                  className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  required
                  className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg focus:border-gray-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="text-green-400 text-center">Message sent successfully! We'll get back to you soon.</div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-400 text-center">Please fill in all required fields and try again.</div>
              )}

              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white py-4 text-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
