'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { experience } from '@/lib/data'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-20 px-6 relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>
          
          <div className="narration-box text-center mb-8">
            "THE TRAINING MONTAGE - MY JOURNEY"
          </div>
          
          <h2 className="font-spider text-4xl md:text-5xl mb-12 text-center" style={{ color: 'var(--spider-red)' }}>
            COMBAT EXPERIENCE
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="comic-panel">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="kapow text-sm py-1 px-2" style={{ transform: 'rotate(0deg)' }}>
                        {exp.role}
                      </div>
                    </div>
                    <p className="font-comic font-bold text-sm mb-2" style={{ color: 'var(--spider-blue)' }}>
                      {exp.co}
                    </p>
                    <p className="font-montserrat text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {exp.desc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="bam text-xs py-1 px-3 whitespace-nowrap" style={{ transform: 'rotate(0deg)' }}>
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="bam inline-block text-sm">
              "LEVELING UP EVERY DAY!"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}