'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'

export default function Contact() {
  const ref = useScrollReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-32 px-6 relative bg-gradient-to-b from-transparent via-[#1a1510]/20 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="sr">
          <div className="chapter-divider">
            <div className="line" />
            <span className="ornament">⚜️ VI ⚜️</span>
            <div className="line" />
          </div>
          
          <h2 className="title-card text-3xl md:text-4xl text-[#f5efdc] font-light mb-16 text-center">
            Make an Offer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="don-quote text-base mb-6">
                "Make me an offer I can't refuse."
              </p>
              <p className="font-sans text-[#c9a84c] text-sm leading-relaxed mb-6">
                Whether you need a digital empire built from scratch or a legacy system restored to glory — 
                come to me as a friend, and I will make you an offer you cannot refuse.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-serif text-[10px] text-[#8b7332] tracking-wider mb-1">✉️ Send word</p>
                  <a href="mailto:mahmoudmoataz99@gmail.com" className="font-serif text-sm text-[#c9a84c] hover:text-[#f5efdc] transition-colors">
                    mahmoudmoataz99@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-serif text-[10px] text-[#8b7332] tracking-wider mb-1">📍 Territory</p>
                  <p className="font-serif text-sm text-[#f5efdc]/70">Cairo, Egypt / Worldwide</p>
                </div>
                <div>
                  <p className="font-serif text-[10px] text-[#8b7332] tracking-wider mb-1">⚜️ Availability</p>
                  <p className="font-serif text-sm text-[#c9a84c]">Accepting select contracts</p>
                </div>
              </div>
            </div>
            
            <div className="leather-card">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">⚜️</div>
                  <p className="font-serif text-[#c9a84c] text-lg mb-2">Grazie</p>
                  <p className="font-sans text-xs text-[#8b7332]">Your message has been received. I will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-serif text-[10px] text-[#8b7332] tracking-wider block mb-1">Your name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-[#c9a84c]/30 py-2 font-serif text-sm text-[#f5efdc] focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-serif text-[10px] text-[#8b7332] tracking-wider block mb-1">Your word (email)</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-[#c9a84c]/30 py-2 font-serif text-sm text-[#f5efdc] focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-serif text-[10px] text-[#8b7332] tracking-wider block mb-1">The proposition</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-[#c9a84c]/30 py-2 font-serif text-sm text-[#f5efdc] focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="godfather-btn w-full text-center py-3">
                    Send the offer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}