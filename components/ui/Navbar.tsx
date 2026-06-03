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

  useEffect(() => {
    if (pathname === '/') {
      const pending = sessionStorage.getItem('scrollTo')
      if (pending) {
        sessionStorage.removeItem('scrollTo')
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[var(--bg-primary)]/95 shadow-lg border-b-2 border-[var(--spider-red)] backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <p className="font-spider text-2xl tracking-wider transition-all group-hover:scale-105 inline-block"
            style={{
              background: 'linear-gradient(135deg, var(--spider-red), var(--spider-blue))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
            Mahmoud Moataz
          </p>
          <div className="spider-logo w-6 h-6 animate-bounce" />
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l}>
              <a href={`/#${l.toLowerCase()}`} onClick={e => handleNavClick(e, l.toLowerCase())}
                className="font-comic font-bold text-sm tracking-wide text-[var(--text-primary)]/80 uppercase hover:text-[var(--spider-red)] transition-all hover:scale-110 inline-block">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}
            className="w-10 h-10 transition-all flex items-center justify-center"
            aria-label="Toggle theme">
            <Sun size={16} className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />
            <Moon size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} className="text-[var(--spider-red)]" /> : <Menu size={24} className="text-[var(--spider-red)]" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg-primary)] border-t-2 border-[var(--spider-red)] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} onClick={e => handleNavClick(e, l.toLowerCase())}
              className="font-spider text-3xl text-[var(--spider-red)] tracking-wider">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}