'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills } from '@/lib/data'

function SkillCard({ name, level, color, icon, i }: typeof skills[0] & { i: number }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="skill-orb reveal p-6 flex flex-col gap-4"
         style={{ transitionDelay: `${i*0.07}s` }}>
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="font-display text-2xl tracking-wider" style={{ color }}>{name}</div>
      <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}, ${color}88)`, boxShadow: `0 0 12px ${color}` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useScrollReveal()
  return (
    <section id="skills" className="relative py-32 px-6 md:px-16 bg-void2">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,0,255,0.15),transparent)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="font-mono text-xs text-plasma tracking-[0.4em] uppercase mb-3">// 02 INSTRUMENTS</div>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none">
            <span className="text-white">MY</span>{' '}
            <span className="text-acid animate-hue-spin inline-block">STACK</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map((s, i) => <SkillCard key={s.name} {...s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
