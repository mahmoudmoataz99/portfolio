'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/lib/data'
import { ExternalLink, Code2 } from 'lucide-react'

export default function Projects() {
  const ref = useScrollReveal()
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="py-10px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>
          
          <div className="narration-box text-center mb-8">
            💿 THE CATALOG · FEATURED RELEASES
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-5xl mb-6 text-center">
            <span className="neon-text-gradient">THE PORTFOLIO</span>
          </h2>
          <p className="text-center font-space text-sm mb-12 text-[var(--text-muted)]">
            Every project is a single. Every line is a verse. Press play.
          </p>
          
          <div className="space-y-6">
            {featured.map((project) => (
              <div key={project.id} className="glitch-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="font-orbitron text-xl md:text-2xl">
                        <span className="neon-text-gradient">{project.title}</span>
                      </h3>
                    </div>
                    <p className="font-space font-bold text-sm mb-3 text-[var(--neon-pink)]">
                      {project.sub}
                    </p>
                    <p className="font-space text-sm leading-relaxed mb-4 text-[var(--text-secondary)]">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="secondary-btn text-md py-2 px-4 flex items-center gap-1.5">
                      <ExternalLink size={16} /> LISTEN
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" 
                       className="secondary-btn text-md py-2 px-4 flex items-center gap-1.5">
                      <Code2 size={16} /> SEE THE STEMS
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="action-btn inline-block">
              <span>↘ VIEW FULL CATALOG</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}