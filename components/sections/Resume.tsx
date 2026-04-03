'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Download, Eye } from 'lucide-react'

export default function Resume() {
  const ref = useScrollReveal()

  return (
    <section id="resume" className="py-16 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ V ⚜️</span>
            <div className="line" />
          </div>

          <h2 className="title-card text-3xl md:text-4xl font-light text-center mb-4">
            The Dossier
          </h2>

          <p className="font-serif italic text-center text-sm mb-12" style={{ color: 'var(--text-muted)' }}>
            Every man of respect has a record. Here is mine.
          </p>

          <div className="leather-card text-center">
            <div className="text-5xl mb-6">📄</div>
            <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--godfather-gold)' }}>
              Mahmoud Moataz — Curriculum Vitae
            </h3>
            <p className="font-serif text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
              Full Stack Developer &amp; Computer Engineer
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="godfather-btn inline-flex items-center gap-2"
              >
                <Eye size={14} />
                View CV
              </a>
              <a
                href="/cv.pdf"
                download="Mahmoud_Moataz_CV.pdf"
                className="godfather-btn inline-flex items-center gap-2"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
