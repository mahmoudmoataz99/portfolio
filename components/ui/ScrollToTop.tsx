'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[var(--neon-purple)] text-white shadow-[0_0_40px_rgba(176,38,255,0.3)] hover:shadow-[0_0_60px_rgba(176,38,255,0.5)] transition-all hover:scale-110 border border-[var(--neon-purple)]/30"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="mx-auto" />
        </button>
      )}
    </>
  )
}