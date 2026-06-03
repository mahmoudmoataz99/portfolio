'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Download, Eye } from 'lucide-react'
import SpiderUpside from '../ui/SpiderUpside'

export default function Resume() {
  const ref = useScrollReveal()

  return (
    <section id="resume" className="py-20 px-6 relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            "SECRET IDENTITY DOSSIER — CLASSIFIED"
          </div>

          <h2 className="font-spider text-4xl md:text-5xl text-center mb-4" style={{ color: 'var(--spider-red)' }}>
            HERO DOSSIER
          </h2>
          <p className="font-comic text-center text-sm mb-12" style={{ color: 'var(--text-muted)' }}>
            "Top Secret — Handle With Care"
          </p>

          <div className="comic-panel text-center relative">
            <div className="absolute -top-3 -left-3 onomatopoeia-md text-[var(--spider-red)] opacity-30">TOP</div>
            <div className="absolute -bottom-3 -right-3 onomatopoeia-md text-[var(--spider-blue)] opacity-30">SECRET</div>

            <div className="">
              <SpiderUpside />
            </div>
            <h3 className="font-spider text-2xl mb-2" style={{ color: 'var(--spider-red)' }}>
              Mahmoud Moataz — THE Web-Dev
            </h3>
            <p className="font-comic text-sm mb-6" style={{ color: 'var(--spider-blue)' }}>
              Full Stack Developer & Computer Engineer
            </p>

            <div className="thought-bubble max-w-md mx-auto mb-6">
              <p className="font-comic text-xs">
                "With great code comes great responsibility"
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                className="secondary-btn inline-flex items-center gap-2 text-sm">
                <Eye size={14} /> VIEW DOSSIER
              </a>
              <a href="/cv.pdf" download="Mahmoud_Moataz_CV.pdf"
                className="action-btn inline-flex items-center gap-2 text-sm">
                <Download size={14} /> DOWNLOAD PDF
              </a>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="kapow inline-block text-xs">
              "EXCELSIOR!"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}