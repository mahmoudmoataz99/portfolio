'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'

export default function ProjectsClient() {
  return (
    <main className="min-h-screen py-28 px-6" style={{ background: 'var(--dark-bg)' }}>
      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/#work" className="secondary-btn inline-block mb-8">
          ← BACK TO THE STASH
        </Link>

        <div className="chapter-divider">
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>

        <div className="narration-box text-center mb-8">
          THE COMPLETE CATALOG · EVERY HIT ON RECORD
        </div>

        <h1 className="font-orbitron text-5xl text-center mb-12">
          <span className="neon-text-gradient">ALL THE HITS</span>
        </h1>

        <div className="panel-grid">
          {projects.map(project => (
            <div key={project.id} className="glitch-card hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-orbitron text-xl">
                      <span className="neon-text-gradient">{project.title}</span>
                    </h2>
                  </div>
                  <p className="font-space font-bold text-sm mb-2 text-[var(--neon-pink)]">{project.sub}</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/projects/${project.slug}`} className="action-btn text-center text-sm py-2">
                  <span>OPEN THE FILE →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}