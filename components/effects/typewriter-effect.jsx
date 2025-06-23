"use client"

// ============================================================================
// TYPEWRITER EFFECT COMPONENT
// ============================================================================
// Creates a typewriter animation that cycles through multiple texts
// Customizable speed, delete speed, and delay between texts
// ============================================================================

import { useState, useEffect } from "react"

export default function TypewriterEffect({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Main typewriter logic
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          // Typing phase
          if (currentText !== fullText) {
            setCurrentText(fullText.substring(0, currentText.length + 1))
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenTexts)
          }
        } else {
          // Deleting phase
          if (currentText !== "") {
            setCurrentText(fullText.substring(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetweenTexts])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
    </span>
  )
}
