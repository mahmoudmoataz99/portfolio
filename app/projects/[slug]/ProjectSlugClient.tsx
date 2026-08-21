'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'
import { ExternalLink, Code2 } from 'lucide-react'

type Project = (typeof projects)[number]

export default function ProjectSlugClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen py-28 px-6" style={{ background: 'var(--dark-bg)' }}>
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/projects" className="secondary-btn inline-block mb-8">
          ← BACK TO CATALOG
        </Link>

        <div className="glitch-card relative overflow-hidden">
          <div className="absolute top-4 right-4 font-orbitron text-xs text-[var(--neon-purple)] opacity-30 tracking-[4px]">
            CLASSIFIED
          </div>
          
          <div className="relative z-10 py-8">
            <div className="mb-8 text-center">
              <h1 className="font-orbitron text-5xl md:text-6xl mb-2">
                <span className="neon-text-gradient">{project.title}</span>
              </h1>
              <p className="font-space text-xl font-bold text-[var(--neon-pink)]">
                {project.sub}
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] mx-auto my-4" />
            </div>

            <div className="speech-bubble mb-6">
              <p className="font-space text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="pill-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href={project.link} target="_blank" rel="noopener noreferrer" 
                 className="action-btn text-sm inline-flex items-center gap-2">
                <ExternalLink size={16} /> SEE IT LIVE
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" 
                 className="secondary-btn text-sm inline-flex items-center gap-2">
                <Code2 size={16} /> VIEW FILES
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <div className="narration-box text-xs">NO CAP</div>
        </div>
      </div>
    </main>
  )
}