// ============================================================================
// PROJECTS DATA
// ============================================================================
// Configuration for all projects in the portfolio
// To add a new project:
// 1. Import the icon from lucide-react
// 2. Add a new object to the projects array below
// 3. The project will automatically appear on the projects section
// ============================================================================

import { ShoppingCart, Plane } from "lucide-react"

export const projects = [
  {
    id: 1,
    title: "Shopify Store Management System",
    description:
      "Complete e-commerce solution with advanced inventory management, automated order processing, and comprehensive analytics dashboard for a growing retail business.",
    icon: <ShoppingCart className="w-12 h-12" />,
    category: "E-commerce",
    technologies: ["Shopify", "React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Automated inventory tracking",
      "Real-time analytics dashboard",
      "Multi-channel integration",
      "Customer management system",
      "Payment processing automation",
    ],
    duration: "3 months",
    client: "Retail Business",
    status: "Completed",
    // ============================================================================
    // PROJECT RESULTS - Currently commented out as requested
    // Uncomment the section below to show project results
    // ============================================================================
    // results: {
    //   sales: "+150% sales increase",
    //   efficiency: "60% faster order processing",
    //   satisfaction: "95% customer satisfaction",
    // },
  },
  {
    id: 2,
    title: "Travel Agency Mobile App",
    description:
      "Cross-platform mobile application built with Flutter for a travel agency, featuring booking management, itinerary planning, and real-time travel updates.",
    icon: <Plane className="w-12 h-12" />,
    category: "Mobile Development",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Payment Gateway"],
    features: [
      "Trip booking and management",
      "Interactive itinerary planner",
      "Real-time flight tracking",
      "Offline map access",
      "Multi-language support",
    ],
    duration: "4 months",
    client: "Travel Agency",
    status: "Completed",
    // ============================================================================
    // PROJECT RESULTS - Currently commented out as requested
    // Uncomment the section below to show project results
    // ============================================================================
    // results: {
    //   downloads: "10K+ downloads",
    //   rating: "4.8/5 app store rating",
    //   bookings: "300% increase in mobile bookings",
    // },
  },
]
