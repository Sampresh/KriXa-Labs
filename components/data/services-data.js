// ============================================================================
// SERVICES DATA
// ============================================================================
// Configuration for all services offered by KriXa Labs
// To add a new service:
// 1. Import the icon from lucide-react
// 2. Add a new object to the services array below
// 3. The service will automatically appear on the services section
// ============================================================================

import { Code, Smartphone, Shield, Zap, Cog, Globe } from "lucide-react"

export const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Software Solutions",
    description: "Custom software development tailored to your business needs",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automation",
    description: "Streamline your processes with intelligent automation solutions",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Complete digital transformation for modern businesses",
  },
]
