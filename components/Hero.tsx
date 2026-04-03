'use client'
import { useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'

const WORDS = ['MERN STACK','NEXT.JS','NEST.JS','REACT','NODE.JS','TYPESCRIPT']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    window.addEventListener('resize', () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    })
    const particles: { x:number; y:number; vx:number; vy:number; r:number; hue:number; life:number }[] = []
    const COLORS = ['#c8ff00','#ff2d78','#00fff0','#8b00ff','#ff6b00']
    for (let i = 0; i < 80; i++) {
      particles.push({ x: Math.random()*W, y: Math.random()*H, vx:(Math.random()-.5)*.5, vy:(Math.random()-.5)*.5, r: Math.random()*2+.5, hue: Math.random()*360, life: Math.random() })
    }
    let raf: number
    const draw = () => {
      ctx.fillStyle = 'rgba(7,0,15,0.15)'
      ctx.fillRect(0,0,W,H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life += 0.005; p.hue += 0.5
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        const c = COLORS[Math.floor(p.hue/60)%COLORS.length]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = c + 'cc'
        ctx.shadowBlur = 12; ctx.shadowColor = c
        ctx.fill()
        ctx.shadowBlur = 0
      })
      // Draw connecting lines for nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(200,255,0,${(1 - dist/100) * 0.15})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden psych-bg">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="vhs-line z-10" />
      {/* Trippy blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-violet/30 animate-blob-morph blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-plasma/25 animate-blob-morph blur-3xl" style={{animationDelay:'-4s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber/5 animate-blob-morph blur-[100px]" style={{animationDelay:'-2s'}} />

      <div className="relative z-10 text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-acid/30 px-4 py-2 mb-8 bg-acid/5">
          <Sparkles size={12} className="text-acid animate-pulse" />
          <span className="font-mono text-xs text-acid tracking-[0.3em] uppercase">Full Stack Developer · Available Now</span>
        </div>

        {/* Name — glitching */}
        <h1 className="font-display text-[clamp(4rem,14vw,12rem)] leading-none tracking-tight mb-2 glitch-text chroma" data-text="Mahmoud Moataz">
          Mahmoud Moataz
        </h1>

        {/* Wavy subtitle */}
        <div className="wavy-text font-mono text-[clamp(1rem,3vw,2rem)] text-acid mb-6 tracking-widest">
          {'MERN · NEXT.JS · NEST.JS'.split('').map((c, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{c === ' ' ? '\u00a0' : c}</span>
          ))}
        </div>

        {/* Rotating tech words */}
        <div className="overflow-hidden h-8 mb-10">
          <div className="marquee-track text-white/60 font-mono text-xs tracking-widest uppercase">
            {[...WORDS,...WORDS].map((w,i) => (
              <span key={i} className="mx-8">{w}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#work" className="neon-btn">EXPLORE MY WORK</a>
          <a href="#contact" className="neon-btn plasma-btn">GET IN TOUCH</a>
        </div>
      </div>
    </section>
  )
}
