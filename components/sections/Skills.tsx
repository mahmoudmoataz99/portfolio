'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills } from '@/lib/data'
import { Monitor, Server, Database } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const categories = ['Frontend', 'Backend', 'Database']
const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
}

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-16 px-6 relative bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ II ⚜️</span>
            <div className="line" />
          </div>
          
          <h2 className="title-card text-3xl md:text-4xl font-light mb-16 text-center">
            The Arsenal
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map(cat => (
              <div key={cat} className="leather-card">
                <div className="flex items-center gap-3 mb-8">
                  {(() => { const Icon = categoryIcons[cat as keyof typeof categoryIcons]; return <Icon size={18} style={{ color: 'var(--godfather-gold)' }} /> })()}
                  <h3 className="font-serif text-lg" style={{ color: 'var(--godfather-gold)' }}>{cat}</h3>
                </div>
                <div className="space-y-5">
                  {skills.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-serif text-sm" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                        <span className="font-serif text-xs" style={{ color: 'var(--godfather-gold)' }}>{skill.level}%</span>
                      </div>
                      <div className="h-[1px]" style={{ backgroundColor: 'var(--border-color)' }}>
                        <div className="h-full" style={{ width: `${skill.level}%`, backgroundColor: 'var(--godfather-gold)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Secret skills */}
          <div className="mt-12 text-center">
            <div className="ornate-divider">
              <div className="line" />
              <span className="symbol">✦</span>
              <div className="line" />
            </div>
            <p className="font-serif text-[10px] tracking-wider mt-4" style={{ color: 'var(--text-muted)' }}>
              Loyalty • Respect • Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}