export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[var(--spider-red)] rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-[var(--spider-blue)] rounded-full animate-spin animate-spin-slow" />
        </div>
        <div className="onomatopoeia-lg text-[var(--spider-red)] animate-pulse">THWIP!</div>
        <p className="font-comic text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
          Waiting for my spider-sense to tingle...
        </p>
        <div className="narration-box inline-block mt-4">
          "WITH GREAT CODE COMES GREAT RESPONSIBILITY"
        </div>
      </div>
    </div>
  )
}