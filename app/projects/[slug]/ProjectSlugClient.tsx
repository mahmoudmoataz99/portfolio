'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'

type Project = (typeof projects)[number]

export default function ProjectSlugClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen py-28 px-6" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/projects" className="godfather-btn text-sm py-2 px-5 inline-block mb-12">
          ← All Projects
        </Link>

        <div className="leather-card">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">{project.emoji}</span>
            <h1 className="font-serif text-4xl font-light mb-2">{project.title}</h1>
            <p className="font-serif italic text-lg" style={{ color: 'var(--godfather-gold)' }}>{project.sub}</p>
          </div>

          <div className="border-t pt-6 my-6" style={{ borderColor: 'var(--border-color)' }}>
            <p className="font-sans leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="font-serif text-[10px] px-3 py-1" style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="godfather-btn text-sm">
              Visit
            </a>
            <a href={project.source} target="_blank" rel="noopener noreferrer" className="godfather-btn text-sm">
              Examine code
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
