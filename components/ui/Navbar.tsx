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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[var(--dark-bg)]/95 backdrop-blur-xl border-b border-[var(--neon-purple)]/20' 
        : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <p className="font-orbitron text-xl md:text-2xl tracking-wider transition-all group-hover:scale-105">
            <span className="neon-text-gradient">MAHMOUD</span>
          </p>
          <div className="w-3 h-3 rounded-full bg-[var(--neon-purple)] shadow-[0_0_20px_rgba(176,38,255,0.6)] animate-pulse" />
        </Link>

        <ul className="hidden md:flex gap-8 list-none items-center">
          {links.map(l => (
            <li key={l}>
              <a 
                href={`/#${l.toLowerCase()}`} 
                onClick={e => handleNavClick(e, l.toLowerCase())}
                className="font-orbitron text-xs tracking-[3px] text-[var(--text-secondary)] uppercase hover:text-[var(--neon-purple)] transition-all hover:tracking-[5px]"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[var(--dark-card)] border border-[var(--neon-purple)]/20 flex items-center justify-center transition-all hover:border-[var(--neon-purple)]/50 hover:shadow-[var(--glow-purple)]"
            aria-label="Toggle theme"
          >
            <Sun size={16} className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />
            <Moon size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} className="text-[var(--neon-purple)]" /> : <Menu size={24} className="text-[var(--neon-purple)]" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--dark-bg)]/95 backdrop-blur-xl border-t border-[var(--neon-purple)]/20 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a 
              key={l} 
              href={`/#${l.toLowerCase()}`} 
              onClick={e => handleNavClick(e, l.toLowerCase())}
              className="font-orbitron text-2xl text-[var(--neon-purple)] tracking-wider hover:tracking-[4px] transition-all"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}