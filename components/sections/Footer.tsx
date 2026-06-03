export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t-4 border-[var(--spider-red)]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-comic text-sm text-[var(--text-muted)] tracking-wide">
          © {new Date().getFullYear()} Mahmoud Moataz — Your Friendly Neighborhood Web-Dev
        </p>
        <p className="font-comic text-xs text-[var(--text-muted)]/60 mt-2">
          "With great code comes great responsibility"
        </p>
      </div>
    </footer>
  )
}