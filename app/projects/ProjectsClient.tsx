'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'

export default function ProjectsClient() {
  return (
    <main className="min-h-screen py-28 px-6" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/#work" className="godfather-btn text-sm py-2 px-5 inline-block mb-12">
          ← Return
        </Link>

        <div className="chapter-divider">
          <div className="line" />
          <span className="ornament">⚜️</span>
          <div className="line" />
        </div>

        <h1 className="font-serif text-4xl font-light text-center mt-8 mb-12" style={{ color: 'var(--text-primary)' }}>All Operations</h1>

        <div className="space-y-6">
          {projects.map(project => (
            <div key={project.id} className="leather-card">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{project.emoji}</span>
                    <h2 className="font-serif text-xl text-[#c9a84c]">{project.title}</h2>
                  </div>
                  <p className="font-serif italic text-sm mb-2">{project.sub}</p>
                  <div className="flex gap-2 mt-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="font-serif text-[8px] text-[#c9a84c] border border-[#c9a84c]/20 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/projects/${project.slug}`} className="godfather-btn text-[9px] py-2 px-4">
                  Examine
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
