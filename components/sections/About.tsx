'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            ORIGIN STORY · BORN IN THE CODE
          </div>

          <div className="panel-grid md:grid-cols-2 gap-8">
            <div className="glitch-card">
              <div className="pill-tag mb-4">WHO AM I?</div>
              <p className="font-space text-sm leading-loose mb-4 text-[var(--text-secondary)]">
                Computer Engineer by training. I build digital empires 
                from the ground up with clean architecture, efficient systems, and a mindset that 
                never settles for mediocrity.
              </p>
              <p className="font-space text-sm leading-loose text-[var(--text-secondary)]">
                <span className="text-[var(--neon-cyan)]">▸</span> Full-stack development 
                <span className="text-[var(--text-muted)] mx-2">·</span>
                <span className="text-[var(--neon-pink)]">▸</span> System architecture 
                <span className="text-[var(--text-muted)] mx-2">·</span>
                <span className="text-[var(--neon-purple)]">▸</span> Speed & precision
              </p>
            </div>

            <div className="glitch-card">
              <div className="pill-tag-pink mb-4">MY CREED</div>
              <div className="speech-bubble mt-2">
                <p className="font-space text-base text-[var(--text-secondary)]">
                  "Every project is a beat. Every line of code is a bar. 
                  I don't just write code. I produce hits."
                </p>
              </div>
              <div className="text-right mt-4">
                <span className="neon-text-purple font-orbitron text-sm tracking-wider">
                Mahmoud Moataz
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}