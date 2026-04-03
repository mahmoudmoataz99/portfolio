'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full Stack Developer & Computer Engineer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index])
        setIndex(prev => prev + 1)
      }, 45)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Dramatic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      
      {/* Soft spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--godfather-gold)]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}>
          Mahmoud
          <br />
          <span style={{ color: 'var(--godfather-gold)' }}>Moataz</span>
        </h1>
        
        {/* Subtitle with typewriter */}
        <div className="h-9 mb-8">
          <p className="font-serif text-lg md:text-xl italic" style={{ color: 'var(--godfather-gold)' }}>
            {displayText}
            <span className="cursor-blink" />
          </p>
        </div>
        
        {/* Description */}
        <p className="font-sans text-sm max-w-xl mx-auto leading-relaxed mb-12" style={{ color: 'var(--text-muted)' }}>
          Building digital empires with precision, loyalty, and respect. 
          Based in Cairo, serving clients worldwide.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#work" className="godfather-btn">
            View the portfolio
          </a>
          <a href="#contact" className="godfather-btn">
            Make an offer
          </a>
        </div>
      </div>
    </section>
  )
}