'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { experience } from '@/lib/data'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-10px-6 relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="family-crest" />
            <div className="line" />
          </div>
          
          <div className="narration-box text-center mb-8">
            RISING THROUGH THE RANKS · MY JOURNEY
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-12 text-center neon-text-gradient">
            THE RECORD
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="dossier-panel">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="contract-stamp text-lg py-1" style={{ transform: 'rotate(0deg)' }}>
                        {exp.role}
                      </div>
                    </div>
                    <p className="font-bold text-md mb-2 px-2" style={{ color: 'var(--neon-cyan)' }}>
                      {exp.co}
                    </p>
                    <p className="font-montserrat text-md leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {exp.desc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="font-semibold text-md py-1 px-3 whitespace-nowrap" style={{ transform: 'rotate(0deg)', color: 'var(--neon-purple)' }}>
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}