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
            "THE ORIGIN STORY - CHAPTER ONE"
          </div>

          <div className="panel-grid md:grid-cols-2 gap-8">
            <div className="comic-panel">
              <div className="bam inline-block mb-4">WHO AM I?</div>
              <p className="font-montserrat text-sm leading-loose mb-4">
                Computer Engineer by training, code superhero by choice! My journey began when I discovered 
                the power to create amazing web experiences. Now I fight against bad UI, squash bugs, 
                and build responsive applications that save the day.
              </p>
              <p className="font-montserrat text-sm leading-loose">
                <strong>Superpowers:</strong> Full-stack development, team collaboration, and the ability 
                to learn new technologies faster than a spider can crawl up a wall!
              </p>
            </div>

            <div className="comic-panel">
              <div className="kapow inline-block mb-4">MY MOTTO</div>
              <div className="speech-bubble mt-2">
                <p className="font-comic text-base">
                  "Every project is a mission. Every client is a citizen in need. 
                  I don't just write code — I save the web, one line at a time!"
                </p>
              </div>
              <div className="text-right mt-4 text-sm font-bold text-[var(--spider-red)]">
                — THE Web-Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}