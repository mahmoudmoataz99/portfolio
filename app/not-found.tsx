import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--dark-bg)' }}>
      <div className="text-center max-w-md relative z-10">
        <div className="font-orbitron text-8xl font-bold neon-text-gradient mb-4 animate-bounce">404</div>
        <div className="pill-tag-pink inline-block mb-4">🎵 LOST IN THE MIX</div>
        <p className="font-space text-xl font-bold mt-4 text-[var(--neon-pink)]">
          THIS TRACK IS UNRELEASED
        </p>
        <div className="speech-bubble mt-6">
          <p className="font-space text-sm text-[var(--text-secondary)]">
            "Even the best producers lose a track now and then. Let's get you back to the studio."
          </p>
        </div>
        <Link href="/" className="action-btn inline-block mt-6">
          <span>↘ RETURN TO STUDIO</span>
        </Link>
      </div>
    </div>
  )
}