'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/lib/data'
import { ExternalLink, Code2 } from 'lucide-react'

export default function Projects() {
  const ref = useScrollReveal()
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>
          
          <div className="narration-box text-center mb-8">
            "THE GREATEST HITS - FEATURED MISSIONS"
          </div>
          
          <h2 className="font-spider text-4xl md:text-5xl mb-6 text-center" style={{ color: 'var(--spider-red)' }}>
            MY MISSIONS
          </h2>
          <p className="text-center font-comic text-sm mb-12" style={{ color: 'var(--text-muted)' }}>
            "The cities I've saved from bad code!"
          </p>
          
          <div className="space-y-6">
            {featured.map((project, i) => (
              <div key={project.id} className="comic-panel">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-3xl">{project.emoji}</span>
                      <h3 className="font-spider text-2xl md:text-3xl" style={{ color: 'var(--spider-red)' }}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="font-comic font-bold text-sm mb-3" style={{ color: 'var(--spider-blue)' }}>
                      {project.sub}
                    </p>
                    <p className="font-montserrat text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-comic text-[10px] font-bold px-2 py-1 border border-[var(--spider-black)]"
                          style={{ background: 'var(--bg-secondary)', color: 'var(--spider-red)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="secondary-btn text-xs py-2 px-4 flex items-center gap-1.5">
                      <ExternalLink size={12} /> VIEW
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" 
                       className="action-btn text-xs py-2 px-4 flex items-center gap-1.5">
                      <Code2 size={12} /> CODE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="action-btn inline-block">
              READ ALL ISSUES
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}