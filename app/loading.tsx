export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'var(--dark-bg)' }}>
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-2 border-[var(--neon-purple)] rounded-full animate-spin" />
          <div className="absolute inset-2 border-2 border-[var(--neon-pink)] rounded-full animate-spin animate-spin-slow" />
          <div className="absolute inset-4 border-2 border-[var(--neon-cyan)] rounded-full animate-spin animate-spin-slower" />
        </div>
        <div className="font-orbitron text-2xl neon-text-purple animate-pulse">LOADING...</div>
        <p className="font-space text-sm mt-4 text-[var(--text-muted)]">
          Loading the session...
        </p>
        <div className="narration-box inline-block mt-4">
          🎧 PATIENCE. GOOD HITS TAKE TIME.
        </div>
      </div>
      <style>{`
        .animate-spin-slow { animation-duration: 2s; }
        .animate-spin-slower { animation-duration: 3s; }
      `}</style>
    </div>
  )
}