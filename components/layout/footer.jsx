"use client"

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
// Site footer with company info and social media links
// To modify social links, edit the socialLinks array below
// ============================================================================

import Image from "next/image"
import { Linkedin, Instagram, Github } from "lucide-react"

export default function Footer() {
  // ============================================================================
  // SOCIAL MEDIA LINKS CONFIGURATION
  // Edit this array to add/remove/modify social media links
  // ============================================================================
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/krixa-labs",
      icon: <Linkedin className="w-5 h-5" />,
      hoverColor: "hover:text-gray-200",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/krixalabs",
      icon: <Instagram className="w-5 h-5" />,
      hoverColor: "hover:text-gray-200",
    },
    {
      name: "GitHub",
      url: "https://github.com/krixalabs",
      icon: <Github className="w-5 h-5" />,
      hoverColor: "hover:text-gray-200",
    },
  ]

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* ============================================================================ */}
          {/* COMPANY LOGO AND NAME */}
          {/* ============================================================================ */}
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600/20 to-gray-400/20 p-0.5">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Image src="/logo.png" alt="KriXa Labs" width={24} height={24} className="w-6 h-6" />
                </div>
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              KriXa Labs
            </span>
          </div>

          {/* ============================================================================ */}
          {/* COMPANY TAGLINE */}
          {/* ============================================================================ */}
          <p className="text-gray-400 mb-6">Keep Revolutionizing Ideas. eXecute Always.</p>

          {/* ============================================================================ */}
          {/* SOCIAL MEDIA LINKS */}
          {/* ============================================================================ */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.hoverColor} transition-colors`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ============================================================================ */}
          {/* COPYRIGHT */}
          {/* ============================================================================ */}
          <p className="text-gray-500 text-sm">© 2024 KriXa Labs. All rights reserved. Made with ❤️ in Nepal.</p>
        </div>
      </div>
    </footer>
  )
}
