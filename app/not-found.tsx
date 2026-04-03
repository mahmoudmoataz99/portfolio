import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6 opacity-30 font-serif">⚜️</div>
        <h1 className="font-serif text-7xl mb-4" style={{ color: 'var(--godfather-gold)' }}>404</h1>
        <p className="font-serif text-xl italic mb-4" style={{ color: 'var(--godfather-gold)' }}>This page... it sleeps with the fishes.</p>
        <p className="font-sans text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          What you seek is not here. An offer you can't refuse? Return to the family.
        </p>
        <Link href="/" className="godfather-btn inline-block">
          Return to the compound
        </Link>
      </div>
    </div>
  )
}
