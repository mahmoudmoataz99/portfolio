'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="sr">
          {/* Chapter header */}
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ I ⚜️</span>
            <div className="line" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div>
              <h2 className="title-card text-3xl md:text-4xl font-light mb-8">
                About Me
              </h2>
              <p className="font-sans text-sm leading-loose mb-4" style={{ color: 'var(--text-primary)' }}>
                Computer Engineer with a strong foundation in both frontend and backend development, and hands-on experience across multiple web development projects. Skilled in building responsive, user-friendly applications and collaborating effectively with cross-functional teams. Known for quickly adapting to new tools and technologies, with a passion for continuous learning and staying current with industry trends. Eager to bring a versatile skill set and engineering mindset to a dynamic development team.
              </p>
            </div>

            <div>
              <div className="leather-card">
                <p className="don-quote mb-4">
                  &quot;Every project is personal. Every client is family. I make offers you can't refuse —
                  not through fear, but through exceptional craftsmanship and unwavering dedication.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}