'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills } from '@/lib/data'

export default function Skills() {
  const ref = useScrollReveal()

  const skillGroups = [
    { title: "FRONTEND WEAPONS", skills: skills.slice(0, 5) },
    { title: "STYLE ARSENAL", skills: skills.slice(5, 9) },
    { title: "BACKEND POWERS", skills: skills.slice(9) }
  ]

  return (
    <section id="skills" className="py-20 px-6 relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            "THE SPIDER'S ARSENAL - POWER LEVELS"
          </div>

          <h2 className="font-spider text-4xl md:text-5xl mb-12 text-center" style={{ color: 'var(--spider-red)' }}>
            MY SUPER-POWERS
          </h2>

          <div className="panel-grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="comic-panel">
                <div className="kapow text-center mb-6 inline-block w-full" style={{ transform: 'rotate(0deg)' }}>
                  {group.title}
                </div>
                <div className="space-y-4">
                  {group.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-comic text-sm font-bold">
                          {skill.name}
                        </span>
                        <span className="font-comic text-xs font-bold text-[var(--spider-red)]">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-[var(--bg-secondary)] border border-[var(--spider-black)]">
                        <div className="h-full transition-all duration-1000"
                          style={{ width: `${skill.level}%`, background: 'var(--spider-red)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bam inline-block px-6 py-3">
              POWER LEVEL: UNLIMITED
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}