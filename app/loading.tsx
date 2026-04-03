export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center">
        <div className="w-12 h-12 border border-[var(--godfather-gold)] animate-spin mx-auto mb-6" />
        <p className="font-serif text-xs tracking-[0.3em] uppercase animate-pulse" style={{ color: 'var(--godfather-gold)' }}>
          Loading...
        </p>
        <p className="font-serif text-[10px] mt-3 italic" style={{ color: 'var(--text-muted)' }}>
          &ldquo;Leave the gun, take the cannoli.&rdquo;
        </p>
      </div>
    </div>
  )
}
