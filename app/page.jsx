"use client"

// ============================================================================
// MAIN PAGE COMPONENT - KriXa Labs Website
// ============================================================================
// This is the main page that combines all sections of the website.
// To add a new section:
// 1. Create the component in components/sections/
// 2. Import it here
// 3. Add it to the JSX below
// 4. Add navigation link in components/layout/navigation.jsx
// ============================================================================

import { useScroll, useTransform } from "framer-motion"

// Layout Components
import Navigation from "@/components/layout/navigation"
import Footer from "@/components/layout/footer"

// Visual Effects
import CustomCursor from "@/components/effects/custom-cursor"
import FloatingParticles from "@/components/effects/floating-particles"

// Page Sections (in order of appearance)
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import ProcessSection from "@/components/sections/process-section"
import WhyChooseSection from "@/components/sections/why-choose-section"
import ContactSection from "@/components/sections/contact-section"

export default function HomePage() {
  // Parallax effect for background
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ============================================================================ */}
      {/* VISUAL EFFECTS - Background elements and cursor */}
      {/* ============================================================================ */}
      <CustomCursor />
      <FloatingParticles />

      {/* ============================================================================ */}
      {/* NAVIGATION - Fixed header navigation */}
      {/* ============================================================================ */}
      <Navigation scrollToSection={scrollToSection} />

      {/* ============================================================================ */}
      {/* PAGE SECTIONS - Main content sections */}
      {/* To reorder sections, simply move the components below */}
      {/* To add a new section, import the component and add it here */}
      {/* ============================================================================ */}

      {/* Hero/Landing Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Company Section */}
      <AboutSection />

      {/* Services Offered Section */}
      <ServicesSection />

      {/* Projects/Portfolio Section */}
      <ProjectsSection />

      {/* Work Process Section */}
      <ProcessSection />

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Contact Form & Information Section */}
      <ContactSection />

      {/* ============================================================================ */}
      {/* FOOTER - Site footer with links and company info */}
      {/* ============================================================================ */}
      <Footer />
    </div>
  )
}
