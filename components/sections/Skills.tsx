'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills } from '@/lib/data'

export default function Skills() {
  const ref = useScrollReveal()

  const skillGroups = [
    { title: "FRONTEND · THE MELODY", skills: skills.slice(0, 5), color: 'purple' },
    { title: "STYLE · THE VIBE", skills: skills.slice(5, 9), color: 'pink' },
    { title: "BACKEND · THE BEAT", skills: skills.slice(9), color: 'cyan' }
  ]

  const colorMap = {
    purple: 'var(--neon-purple)',
    pink: 'var(--neon-pink)',
    cyan: 'var(--neon-cyan)'
  }

  const getColorByLevel = (level: number, baseColor: string) => {
    if (level >= 80) return baseColor
    if (level >= 60) return `color-mix(in srgb, ${baseColor} 70%, var(--neon-cyan))`
    if (level >= 40) return `color-mix(in srgb, ${baseColor} 50%, var(--neon-orange))`
    return `color-mix(in srgb, ${baseColor} 30%, var(--text-muted))`
  }

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            🎛️ THE STUDIO · TOOLS OF THE TRADE
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl mb-12 text-center">
            <span className="neon-text-gradient">MY Gear</span>
          </h2>

          <div className="panel-grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="glitch-card">
                <div
                  className="pill-tag text-center mb-6 block"
                  style={{
                    borderColor: colorMap[group.color as keyof typeof colorMap],
                    color: colorMap[group.color as keyof typeof colorMap]
                  }}
                >
                  {group.title}
                </div>
                <div className="space-y-5">
                  {group.skills.map(skill => {
                    const baseColor = colorMap[group.color as keyof typeof colorMap]
                    const barColor = getColorByLevel(skill.level, baseColor)
                    const isHigh = skill.level >= 80
                    const isMid = skill.level >= 60 && skill.level < 80

                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-space text-sm font-medium text-[var(--text-secondary)]">
                            {skill.name}
                          </span>
                          <span
                            className="font-orbitron text-xs font-bold px-2 py-0.5 rounded"
                            style={{
                              background: `${baseColor}20`,
                              color: baseColor,
                              border: `1px solid ${baseColor}30`
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-[var(--dark-surface)] overflow-hidden relative">
                          <div
                            className="h-full rounded-full transition-all duration-1000 relative"
                            style={{
                              width: `${skill.level}%`,
                              background: barColor,
                              boxShadow: isHigh ? `0 0 20px ${baseColor}60` : isMid ? `0 0 12px ${baseColor}40` : 'none'
                            }}
                          >
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="narration-box">
              NO CAP · ALL SKILLS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}