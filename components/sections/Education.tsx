'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { education } from '@/lib/data'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>
          
          <div className="narration-box text-center mb-8">
            🎓 THE TRAINING · FORMAL EDUCATION
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-5xl mb-12 text-center">
            <span className="neon-text-gradient">EDUCATION</span>
          </h2>
          
          <div className="space-y-5">
            {education.map((edu, idx) => (
              <div key={idx} className="glitch-card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-orbitron text-xl text-[var(--neon-purple)]">
                      {edu.certificate}
                    </h3>
                    <p className="font-space text-sm text-[var(--text-secondary)]">
                      {edu.co}
                    </p>
                  </div>
                  <div>
                    <span className="pill-tag-cyan text-xs py-1 px-3">
                      {edu.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="narration-box text-sm">
              📚 EARNED MY PLACE AT THE CONSOLE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}