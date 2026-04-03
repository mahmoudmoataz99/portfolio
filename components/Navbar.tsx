'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  const links = ['About', 'Skills', 'Experience', 'Education', 'Contact']

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.classList.toggle('light', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-void/80 backdrop-blur-xl border-b border-acid/10' : 'bg-transparent'
      }`}>
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl text-acid tracking-widest uppercase glitch-text" data-text="ALEX.DEV">ALEX.DEV</span>
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace('.', '')}`}
                className="font-mono text-xs tracking-widest text-white/80 uppercase hover:text-acid transition-all duration-200 hover:[text-shadow:0_0_10px_#c8ff00]">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-acid font-mono text-xs uppercase tracking-widest">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-acid">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-void/95 border-t border-acid/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace('.', '')}`} onClick={() => setOpen(false)}
              className="font-display text-2xl text-acid tracking-widest">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
