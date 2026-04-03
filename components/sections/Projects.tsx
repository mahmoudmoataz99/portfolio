'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/lib/data'
import { ExternalLink, Code2 } from 'lucide-react'

export default function Projects() {
  const ref = useScrollReveal()
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" className="py-16 px-6 relative ">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ III ⚜️</span>
            <div className="line" />
          </div>
          
          <h2 className="title-card text-3xl md:text-4xl text-[#f5efdc] font-light mb-16 text-center">
            Work
          </h2>
          
          <div className="space-y-8">
            {featured.map((project, i) => (
              <div key={project.id} className="leather-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-serif text-2xl text-[#c9a84c]">{project.title}</h3>
                    </div>
                    <p className="font-serif italic text-sm mb-3">{project.sub}</p>
                    <p className="font-sans text-sm text-[#8b7332] leading-relaxed mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-serif text-[9px] text-[#c9a84c] border border-[#c9a84c]/20 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="godfather-btn text-[9px] py-2 px-4 flex items-center gap-1.5">
                      <ExternalLink size={11} /> Visit
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="godfather-btn text-[9px] py-2 px-4 flex items-center gap-1.5">
                      <Code2 size={11} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="godfather-btn inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}