'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Mail, Linkedin, Github, Clock, MapPin, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const contacts: { label: string; Icon: LucideIcon; value: string; href: string }[] = [
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
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-16 px-6 relative bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/20 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ VI ⚜️</span>
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