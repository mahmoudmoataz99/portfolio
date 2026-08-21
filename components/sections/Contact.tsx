'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Mail, Linkedin, Github } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    Icon: Mail,
    value: 'mahmoudmoataz99@gmail.com',
    href: 'mailto:mahmoudmoataz99@gmail.com',
    color: 'purple'
  },
  {
    label: 'LinkedIn',
    Icon: Linkedin,
    value: 'linkedin.com/in/mahmoudmoataz',
    href: 'https://www.linkedin.com/in/mahmoudmoataz99',
    color: 'cyan'
  },
  {
    label: 'GitHub',
    Icon: Github,
    value: 'github.com/mahmoudmoataz99',
    href: 'https://github.com/mahmoudmoataz99',
    color: 'pink'
  }
]

const colorMap = {
  purple: 'var(--neon-purple)',
  pink: 'var(--neon-pink)',
  cyan: 'var(--neon-cyan)'
}

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <div className="diamond" />
            <div className="line" />
          </div>

          <div className="narration-box text-center mb-8">
            📞 MAKE THE CONNECTION · LET'S BUILD
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl text-center mb-4">
            <span className="neon-text-gradient">BOOK A SESSION</span>
          </h2>

          <div className="panel-grid md:grid-cols-2 gap-8">
            <div>
              <div className="speech-bubble mb-6">
                <p className="font-space text-base text-[var(--text-secondary)]">
                  "I turn ideas into digital gold.
                  Your project deserves nothing less than a banger."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="neon-text-purple font-orbitron text-xs tracking-wider">Mahmoud Moataz</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[var(--neon-purple)]/10 bg-[var(--dark-card)]">
                  <div className="pill-tag text-xs">⏱️ RESPONSE TIME</div>
                  <p className="font-space text-sm font-bold text-[var(--text-secondary)]">Faster than 808s (&lt;24h)</p>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-[var(--neon-pink)]/10 bg-[var(--dark-card)]">
                  <div className="pill-tag-pink text-xs">📍 TERRITORY</div>
                  <p className="font-space text-sm font-bold text-[var(--text-secondary)]">Cairo, Egypt · Worldwide</p>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-[var(--neon-cyan)]/10 bg-[var(--dark-card)]">
                  <div className="pill-tag-cyan text-xs">🎯 STATUS</div>
                  <p className="font-space text-sm font-bold text-[var(--neon-secondary)]">TAKING NEW CLIENTS</p>
                </div>
              </div>
            </div>

            <div className="glitch-card">
              <div className="pill-tag text-center mb-6 block">📱 CONTACT CHANNELS</div>

              <div className="space-y-4">
                {contacts.map(({ label, Icon, value, href, color }) => (
                  <a key={label} href={href || undefined} target={href ? '_blank' : undefined} rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl border border-[var(--dark-surface)] hover:border-[var(--neon-purple)]/30 transition-all hover:translate-x-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ background: colorMap[color as keyof typeof colorMap] + '20' }}
                    >
                      <Icon size={18} style={{ color: colorMap[color as keyof typeof colorMap] }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-orbitron text-[10px] tracking-[2px] text-[var(--text-muted)]">{label}</p>
                      <p className="font-space text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="action-btn inline-block">
              <span>↘ LET'S BUILD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}