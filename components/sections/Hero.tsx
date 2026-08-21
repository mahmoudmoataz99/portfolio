'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full Stack Engineer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index])
        setIndex(prev => prev + 1)
      }, 60)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 px-6 overflow-hidden">
      {/* Neon Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--neon-purple)]/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[var(--neon-pink)]/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--neon-cyan)]/5 blur-[150px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="narration-box mb-6">
          CODE FACTORY
        </div>

        <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4">
          <span className="neon-text-gradient">Mahmoud</span>
          <br />
          <span className="text-[var(--text-primary)]">Moataz</span>
        </h1>

        <div className="h-14 mb-6">
          <p className="font-orbitron text-xl md:text-2xl font-bold tracking-wider">
            <span className="neon-text-cyan">{displayText}</span>
            <span className="cursor-blink text-[var(--neon-purple)]">_</span>
          </p>
        </div>

        <div className="speech-bubble max-w-xl mx-auto mb-8">
          <p className="font-space text-sm leading-relaxed text-[var(--text-secondary)]">
            <span className="text-[var(--neon-purple)] font-bold">▸</span> Code that hits harder than 808s.
            Full-stack engineering with trap mentality with clean, efficient, and always ahead of the beat.
            <span className="block mt-2 text-xs text-[var(--text-muted)]">#TrapHouse #CodeFactory #NoCap</span>
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#work" className="action-btn"><span>↘ VIEW THE STASH</span></a>
          <a href="#contact" className="secondary-btn">↗ MAKE CONTACT</a>
        </div>

        {/* Animated beat bars */}
        <div className="flex justify-center gap-1 mt-12 opacity-40">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="w-1 bg-[var(--neon-purple)] rounded-full"
              style={{
                height: `${Math.random() * 30 + 10}px`,
                animation: `bounce 0.6s ease-in-out infinite ${i * 0.08}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .cursor-blink {
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}