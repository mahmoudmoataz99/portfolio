'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Download, Eye } from 'lucide-react'

export default function Resume() {
  const ref = useScrollReveal()

  return (
    <section id="resume" className="py-10px-6 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            📄 THE PRESS KIT
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl text-center mb-4">
            <span className="neon-text-gradient">THE RESUME</span>
          </h2>
          <p className="font-space text-center text-sm mb-12 text-[var(--text-muted)]">
            "Complete press kit. For booking inquiries and collaborations"
          </p>

          <div className="glitch-card text-center relative">
            <div className="absolute -top-3 -left-3 font-orbitron text-xs text-[var(--neon-purple)] opacity-30 tracking-[4px]">PREMIUM</div>
            <div className="absolute -bottom-3 -right-3 font-orbitron text-xs text-[var(--neon-pink)] opacity-30 tracking-[4px]">EXCLUSIVE</div>
            
            <h3 className="font-orbitron text-2xl mb-2">
              <span className="neon-text-gradient">Mahmoud Moataz</span>
            </h3>
            <p className="font-space text-sm mb-6 text-[var(--neon-pink)]">
              Full Stack Developer & Computer Engineer
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                className="secondary-btn inline-flex items-center gap-2 text-sm">
                <Eye size={14} /> VIEW PRESS KIT
              </a>
              <a href="/cv.pdf" download="Mahmoud_Moataz_CV.pdf"
                className="action-btn inline-flex items-center gap-2 text-sm">
                <Download size={14} /> DOWNLOAD PDF
              </a>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="narration-box text-xs">
              🎧 NO CAP
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}