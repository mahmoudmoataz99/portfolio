import { Github, Linkedin, Gem } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <div className="ornate-divider">
          <div className="line" />
          <Gem size={14} className="text-[#c9a84c]" />
          <div className="line" />
        </div>

        <p className="font-serif text-md text-[#8b7332] tracking-wide mt-6">
          © {new Date().getFullYear()} Mahmoud Moataz — All rights reserved
        </p>
        <p className="font-serif text-lg text-[#8b7332]/50 mt-2 tracking-wider">
          Lasciate ogne speranza, voi ch&apos;intrate
        </p>
      </div>
    </footer>
  )
}
