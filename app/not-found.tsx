import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center max-w-md">
        <div className="onomatopoeia-lg text-[var(--spider-red)] mb-4 animate-bounce">404</div>
        <div className="kapow inline-block mb-4">PAGE NOT FOUND</div>
        <p className="font-comic text-xl font-bold mt-4" style={{ color: 'var(--spider-blue)' }}>
          THIS PAGE DOESN'T EXIST
        </p>
        <div className="speech-bubble mt-6">
          <p className="font-comic text-sm">
            "The page you're looking for may have been moved or removed. Let's get you back on track."
          </p>
        </div>
        <Link href="/" className="action-btn inline-block mt-6">
          RETURN HOME
        </Link>
      </div>
    </div>
  )
}