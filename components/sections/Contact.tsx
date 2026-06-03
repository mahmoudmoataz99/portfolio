'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Mail, Linkedin, Github } from 'lucide-react'

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const contacts = [
  {
    label: 'Email',
    Icon: Mail,
    value: 'mahmoudmoataz99@gmail.com',
    href: 'mailto:mahmoudmoataz99@gmail.com',
  },
  {
    label: 'LinkedIn',
    Icon: Linkedin,
    value: 'linkedin.com/in/mahmoudmoataz',
    href: 'https://www.linkedin.com/in/mahmoudmoataz99',
  },
  {
    label: 'GitHub',
    Icon: Github,
    value: 'github.com/mahmoudmoataz99',
    href: 'https://github.com/mahmoudmoataz99',
  },
  {
    label: 'Discord',
    Icon: DiscordIcon,
    value: 'm_abouelregal',
    href: null,
  },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="spider-logo" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            "FINAL ISSUE — THE CALL TO ACTION"
          </div>

          <h2 className="font-spider text-4xl md:text-5xl text-center mb-4" style={{ color: 'var(--spider-red)' }}>
            NEED A HERO?
          </h2>
          <p className="font-comic text-center text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            "The city needs a hero! Will you answer the call?"
          </p>

          <div className="panel-grid md:grid-cols-2 gap-8">
            <div>
              <div className="speech-bubble mb-6">
                <p className="font-comic text-base">
                  "Every great hero needs a sidekick... I mean, a client! Let's team up and save the web together!"
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="font-comic text-xs font-bold text-[var(--spider-red)]">— YOUR FRIENDLY WEB-DEV</span>
                </div>
              </div>

              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-3 p-3 border border-[var(--spider-black)] bg-[var(--bg-secondary)]/30">
                  <div className="kapow text-xs py-1 px-2">RESPONSE TIME</div>
                  <p className="font-comic text-sm font-bold">Faster than a spider can crawl! (&lt;24h)</p>
                </div>

                <div className="flex items-center gap-3 p-3 border border-[var(--spider-black)] bg-[var(--bg-secondary)]/30">
                  <div className="kapow text-xs py-1 px-2">HQ LOCATION</div>
                  <p className="font-comic text-sm font-bold">Cairo, Egypt (Serving worldwide!)</p>
                </div>

                <div className="flex items-center gap-3 p-3 border border-[var(--spider-black)] bg-[var(--bg-secondary)]/30">
                  <div className="kapow text-xs py-1 px-2">HERO RANK</div>
                  <p className="font-comic text-sm font-bold text-[var(--comic-green)]">LEVELING UP DAILY!</p>
                </div>
              </div>
            </div>

            <div className="comic-panel">
              <div className="text-center mb-6">
                <div className="kapow inline-block">CONTACT CHANNELS</div>
              </div>

              <div className="space-y-4">
                {contacts.map(({ label, Icon, value, href }) => (
                  <a key={label} href={href || undefined} target={href ? '_blank' : undefined} rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 border-2 border-[var(--spider-black)] hover:border-[var(--spider-red)] transition-all hover:translate-x-1">
                    <div className="w-10 h-10 bg-[var(--spider-red)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={18} className="!text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-comic text-xs font-bold text-[var(--text-primary)]">{label}</p>
                      <p className="font-comic text-sm font-bold group-hover:text-[var(--spider-red)] transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="action-btn inline-block">
              "TOGETHER, WE CAN SAVE THE WEB!"
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}