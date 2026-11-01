'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            "ABOUT ME"
          </div>

          <div className="panel-grid md:grid-cols-2 gap-8">
            <div className="comic-panel">
              <div className="bam inline-block mb-4">WHO AM I?</div>
              <p className="font-montserrat text-sm leading-loose mb-4">
                Frontend developer with over a year of professional and internship experience building responsive React, Next.js and Angular interfaces in Agile teams, with guidance from senior engineers. Cut page-load time by 35% on API-driven pages at Infotech Global and shipped features for Wazifame, a full-stack recruitment platform. Backend skills in Node.js/Express, NestJS and Laravel with MongoDB and MySQL, applied in four full-stack personal projects. Actively seeking frontend, backend or full-stack roles.
              </p>
              <p className="font-montserrat text-sm leading-loose">
                <strong>Core strengths:</strong> Full-stack development, team collaboration, and the ability
                to learn new technologies quickly and apply them effectively.
              </p>
            </div>

            <div className="comic-panel">
              <div className="kapow inline-block mb-4">MY APPROACH</div>
              <div className="speech-bubble mt-2">
                <p className="font-comic text-base">
                  "Every project is an opportunity to solve a real problem. I focus on writing
                  clean, maintainable code that delivers results, one line at a time."
                </p>
              </div>
              <div className="text-right mt-4 text-sm font-bold text-[var(--spider-red)]">
                — Mahmoud Moataz
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}