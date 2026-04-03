'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { experience } from '@/lib/data'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-16 px-6 relative bg-gradient-to-b from-transparent via-[#1a1510]/20 to-transparent ">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ IV ⚜️</span>
            <div className="line" />
          </div>
          
          <h2 className="title-card text-3xl md:text-4xl text-[#f5efdc] font-light mb-16 text-center">
            The Chronicle
          </h2>
          
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={exp.date} className="relative pl-8 pb-10 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 w-px h-full bg-[#c9a84c]/20 last:h-10" />
                {/* Timeline node */}
                <div className="absolute left-[-4px] top-0 w-2 h-2 bg-[#c9a84c] rotate-45" />
                
                <div className="mb-2">
                  <span className="font-serif text-[10px] text-[#8b7332] tracking-wide">{exp.date}</span>
                </div>
                <h3 className="font-serif text-xl text-[#c9a84c] mb-1">{exp.role}</h3>
                <p className="font-serif text-sm mb-3">{exp.co}</p>
                <p className="font-sans text-sm text-[#8b7332] leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}