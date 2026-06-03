import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
    </>
  )
}