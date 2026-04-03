'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAVBAR_HEIGHT = 80

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const router = useRouter()
  const pathname = usePathname()

  const links = ['About', 'Skills', 'Experience', 'Education', 'Contact']

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  // After navigating to homepage, scroll to pending section
  useEffect(() => {
    if (pathname === '/') {
      const pending = sessionStorage.getItem('scrollTo')
      if (pending) {
        sessionStorage.removeItem('scrollTo')
        // Wait for page to render
        setTimeout(() => scrollToSection(pending), 100)
      }
    }
  }, [pathname])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    setOpen(false)
    if (pathname === '/') {
      scrollToSection(sectionId)
    } else {
      sessionStorage.setItem('scrollTo', sectionId)
      router.push('/')
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 max-w-7xl mx-auto z-50 transition-all duration-500 ${
      scrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border border-[var(--border-color)]' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl text-[var(--godfather-gold)] tracking-widest uppercase">
            Mahmoud
          </span>
        </Link>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l}>
              <a
                href={`/#${l.toLowerCase().replace('.', '')}`}
                onClick={e => handleNavClick(e, l.toLowerCase().replace('.', ''))}
                className="font-serif text-xs tracking-widest text-[var(--text-primary)]/80 uppercase hover:text-[var(--godfather-gold)] transition-all duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full border border-[var(--godfather-gold)]/30 hover:border-[var(--godfather-gold)] transition-all duration-300 flex items-center justify-center group"
            aria-label="Toggle theme"
          >
            <Sun
              size={16}
              className={`absolute transition-all duration-300 ${
                theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              } text-[var(--godfather-gold)]`}
            />
            <Moon
              size={16}
              className={`absolute transition-all duration-300 ${
                theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              } text-[var(--godfather-gold)]`}
            />
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--godfather-gold)]">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg-primary)]/95 border-t border-[var(--border-color)] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l}
              href={`/#${l.toLowerCase().replace('.', '')}`}
              onClick={e => handleNavClick(e, l.toLowerCase().replace('.', ''))}
              className="font-serif text-2xl text-[var(--godfather-gold)] tracking-widest"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}