'use client'

import Link from 'next/link'
import { projects } from '@/lib/data'
import { ExternalLink, Code2 } from 'lucide-react'

type Project = (typeof projects)[number]

export default function ProjectSlugClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen py-28 px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="secondary-btn inline-block mb-8">
          ← BACK TO COLLECTION
        </Link>

        <div className="comic-panel relative overflow-hidden">
          <div className="absolute top-4 right-4 onomatopoeia-md text-[var(--spider-red)] opacity-20">POW!</div>
          
          <div className="relative z-10 py-8">
            <div className="mb-8 text-center">
              <span className="text-6xl mb-4 inline-block animate-bounce">{project.emoji}</span>
              <h1 className="font-spider text-5xl md:text-6xl mb-2" style={{ color: 'var(--spider-red)' }}>
                {project.title}
              </h1>
              <p className="font-comic text-xl font-bold" style={{ color: 'var(--spider-blue)' }}>
                {project.sub}
              </p>
              <div className="w-16 h-0.5 bg-[var(--spider-red)] mx-auto my-4" />
            </div>

            <div className="speech-bubble mb-6">
              <p className="font-comic text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="kapow text-xs py-1 px-3" style={{ transform: 'rotate(0deg)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href={project.link} target="_blank" rel="noopener noreferrer" 
                 className="action-btn text-sm inline-flex items-center gap-2">
                <ExternalLink size={14} />
                LAUNCH MISSION
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" 
                 className="secondary-btn text-sm inline-flex items-center gap-2">
                <Code2 size={14} />
                VIEW FILES
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <div className="bam inline-block text-xs">"EXCELSIOR!"</div>
        </div>
      </div>
    </main>
  )
}