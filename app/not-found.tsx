import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center max-w-md">
        <div className="onomatopoeia-lg text-[var(--spider-red)] mb-4 animate-bounce">404!</div>
        <div className="kapow inline-block mb-4">KAPOW!</div>
        <p className="font-comic text-xl font-bold mt-4" style={{ color: 'var(--spider-blue)' }}>
          THIS PAGE ESCAPED THE COMIC!
        </p>
        <div className="speech-bubble mt-6">
          <p className="font-comic text-sm">
            "Even Spider-Man misses his web-swing sometimes. Let's get you back to NYC!"
          </p>
        </div>
        <Link href="/" className="action-btn inline-block mt-6">
          RETURN TO HEADQUARTERS
        </Link>
      </div>
    </div>
  )
}