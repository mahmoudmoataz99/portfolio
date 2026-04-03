'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/lib/data'
import { ArrowUpRight, Cpu } from 'lucide-react'

function ProjectCard({ title, sub, desc, tags, color, href, i }: typeof projects[0] & { i: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="proj-card reveal p-8 flex flex-col gap-5" style={{ transitionDelay: `${i * 0.1}s` }}>
      <div className="proj-glow" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-4xl tracking-widest" style={{ color }}>{title}</h3>
          <div className="font-body text-sm text-white/75 mt-1">{sub}</div>
        </div>
        <Link href={href as any}
          className="flex items-center justify-center w-10 h-10 border transition-all duration-300 flex-shrink-0 hover:scale-110"
          style={{ borderColor: color + '40', color }}>
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <p className="font-body text-white/60 text-sm leading-relaxed">{desc}</p>
      <div className="flex gap-2 flex-wrap pt-1">
        {tags.map(t => (
          <span key={t} className="font-mono text-sm px-2 py-1 border border-white/10 text-white/75 uppercase tracking-wide">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()
  return (
    <section id="work" className="relative py-32 px-6 md:px-16 psych-bg">
      <div className="absolute inset-0 scanlines" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal mb-16">
          <div className="font-mono text-xs text-cyber tracking-[0.4em] uppercase mb-3">// 03 COMPOSITIONS</div>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none">
            FEATURED{' '}<span className="text-plasma animate-glitch inline-block">WORK</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => <ProjectCard key={p.id} {...p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
