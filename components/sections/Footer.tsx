export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--neon-purple)]/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-1.5 h-4 rounded-full"
              style={{
                background: `linear-gradient(180deg, var(--neon-purple), var(--neon-pink))`,
                opacity: 0.3 + i * 0.1,
                animation: `pulse 1s ease-in-out infinite ${i * 0.1}s`
              }}
            />
          ))}
        </div>
        <p className="font-orbitron text-xs tracking-[3px] text-[var(--text-muted)]">
          © {new Date().getFullYear()} Mahmoud Moataz
        </p>
        <p className="font-space text-[10px] text-[var(--text-muted)]/50 mt-2 tracking-wider">
          "Every commit is a bar. Every deploy is a drop."
        </p>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </footer>
  )
}