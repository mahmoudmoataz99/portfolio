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
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 my-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--spider-red)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--spider-blue)]/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute bottom-20 right-10 onomatopoeia-lg text-[var(--spider-blue)] opacity-20 animate-bounce">{'{ }'}</div>
      <div className="absolute top-1/3 right-20 text-4xl opacity-15 spider-sense">⚡</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        <h1 className="font-spider text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4"
          style={{ color: 'var(--text-primary)' }}>
          Mahmoud
          <br />
          <span className="inline-block"
            style={{
              background: 'linear-gradient(135deg, var(--spider-red), var(--spider-blue))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
            Moataz
          </span>
        </h1>

        <div className="h-12 mb-6">
          <p className="font-comic text-xl md:text-2xl font-bold" style={{ color: 'var(--spider-blue)' }}>
            {displayText}
            <span className="cursor-blink" />
          </p>
        </div>

        <div className="speech-bubble max-w-xl mx-auto mb-8">
          <p className="font-comic text-sm">
            <strong>"About me:</strong> Computer Engineer with hands-on experience across the stack,
            skilled in a range of modern technologies, and committed to writing clean, bug-free, user-friendly software."
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#work" className="action-btn">VIEW MY WORK</a>
          <a href="#contact" className="secondary-btn">GET IN TOUCH</a>
        </div>
      </div>
    </section>
  )
}