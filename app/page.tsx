import { Suspense } from 'react'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <main className="light-leak">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}