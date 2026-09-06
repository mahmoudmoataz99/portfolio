export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t-4 border-[var(--spider-red)]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-comic text-sm text-[var(--text-muted)] tracking-wide">
          © {new Date().getFullYear()} Mahmoud Moataz — Full Stack Developer
        </p>
      </div>
    </footer>
  )
}