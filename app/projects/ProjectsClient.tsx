'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'

export default function ProjectsClient() {
  return (
    <main className="min-h-screen py-28 px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <Link href="/#work" className="secondary-btn inline-block mb-8">
          ← BACK TO NYC
        </Link>

        <div className="chapter-divider">
          <div className="line" />
          <div className="spider-logo" />
          <div className="line" />
        </div>

        <div className="narration-box text-center mb-8">
          "THE COMPLETE COLLECTION OF WEB-SLINGING ADVENTURES"
        </div>

        <h1 className="font-spider text-5xl text-center mb-12" style={{ color: 'var(--spider-red)' }}>
          ALL MISSIONS
        </h1>

        <div className="panel-grid">
          {projects.map(project => (
            <div key={project.id} className="comic-panel hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-spider text-xl" style={{ color: 'var(--spider-red)' }}>{project.title}</h2>
                    <span className="text-2xl">{project.emoji}</span>
                  </div>
                  <p className="font-comic font-bold text-sm mb-2" style={{ color: 'var(--spider-blue)' }}>{project.sub}</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="font-comic text-[9px] font-bold px-2 py-1 border border-[var(--spider-black)]"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--spider-red)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/projects/${project.slug}`} className="action-btn text-center text-sm py-2">
                  READ ISSUE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}