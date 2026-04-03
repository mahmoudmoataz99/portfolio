'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { education } from '@/lib/data'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-16 px-6 relative ">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ V ⚜️</span>
            <div className="line" />
          </div>
          
          <h2 className="title-card text-3xl md:text-4xl text-[#f5efdc] font-light mb-16 text-center">
            The Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={edu.date} className="leather-card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div>
                    <h3 className="font-serif text-xl text-[#c9a84c] mb-1">{edu.certificate}</h3>
                    <p className="font-serif text-sm">{edu.co}</p>
                  </div>
                  <div className="font-serif text-xs text-[#8b7332] whitespace-nowrap">
                    {edu.date}
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