'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { education } from '@/lib/data'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>
          
          <div className="narration-box text-center mb-8">
            "THE ACADEMY - WHERE IT ALL BEGAN"
          </div>
          
          <h2 className="font-spider text-4xl md:text-5xl mb-12 text-center" style={{ color: 'var(--spider-red)' }}>
            EDUCATION
          </h2>
          
          <div className="space-y-5">
            {education.map((edu, idx) => (
              <div key={idx} className="comic-panel flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="font-spider text-xl" style={{ color: 'var(--spider-red)' }}>
                    {edu.certificate}
                  </h3>
                  <p className="font-comic text-sm" style={{ color: 'var(--spider-blue)' }}>
                    {edu.co}
                  </p>
                </div>
                <div>
                  <span className="bam text-xs py-1 px-3" style={{ transform: 'rotate(0deg)' }}>
                    {edu.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="kapow inline-block text-sm">
              "HONOR ROLL — DEAN'S LIST"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}