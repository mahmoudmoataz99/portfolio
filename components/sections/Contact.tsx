'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Mail, Linkedin, Github, Clock, MapPin, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const contacts: { label: string; Icon: LucideIcon | (() => JSX.Element); value: string; href: string }[] = [
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
    href: '',
  },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-16 px-6 relative bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/20 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ VII ⚜️</span>
            <div className="line" />
          </div>

          <h2 className="title-card text-3xl md:text-4xl font-light text-center">
            Make an Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="don-quote text-base my-6">
                &quot;Make me an offer I can&apos;t refuse.&quot;
              </p>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Whether you need a digital empire built from scratch or a legacy system restored to glory —
                come to me as a friend, and you won't leave upset.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock size={12} style={{ color: 'var(--text-muted)' }} />
                  <div>
                    <p className="font-serif text-[10px] tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Response time</p>
                    <p className="font-serif text-sm" style={{ color: 'var(--text-primary)' }}>Less than 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                  <div>
                    <p className="font-serif text-[10px] tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Location</p>
                    <p className="font-serif text-sm" style={{ color: 'var(--text-primary)' }}>Cairo, Egypt</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={12} style={{ color: 'var(--text-muted)' }} />
                  <div>
                    <p className="font-serif text-[10px] tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Experience Level</p>
                    <p className="font-serif text-sm" style={{ color: 'var(--godfather-gold)' }}>Junior</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="leather-card flex flex-col justify-center gap-6">
              {contacts.map(({ label, Icon, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-[var(--border-color)] pb-5 last:border-0 last:pb-0 hover:border-[var(--godfather-gold)]/60 transition-colors"
                >
                  <Icon size={20} className="shrink-0" style={{ color: 'var(--godfather-gold)' }} />
                  <div>
                    <p className="font-serif text-[10px] tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="font-serif text-sm group-hover:transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}