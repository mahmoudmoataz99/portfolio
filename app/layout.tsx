import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import FloatingParticles from '@/components/ui/FloatingParticles'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: { default: 'Mahmoud Moataz', template: '%s | Trap Code' },
  description: 'Full Stack Engineer. Code that hits harder than 808s.',
  keywords: ['Full Stack', 'Developer', 'Trap', 'Psychedelic', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Mahmoud Moataz' }],
  openGraph: {
    title: 'Mahmoud Moataz',
    description: 'Full Stack Developer',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#B026FF',
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-space`}>
        <FloatingParticles />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}