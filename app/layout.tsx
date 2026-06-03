import type { Metadata, Viewport } from 'next'
import { Comic_Neue, Montserrat, Bangers } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const comicNeue = Comic_Neue({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700'], 
  variable: '--font-comic',
})

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '800', '900'], 
  variable: '--font-montserrat'
})

const bangers = Bangers({ 
  subsets: ['latin'], 
  weight: ['400'], 
  variable: '--font-spider'
})

export const metadata: Metadata = {
  title: { default: 'THE AMAZING WEB-DEV', template: '%s | Web-Dev Comics' },
  description: 'Your Friendly Neighborhood Full Stack Developer! With great code comes great responsibility.',
  keywords: ['Full Stack', 'Developer', 'Engineer', 'Portfolio', 'Spider-Man', 'Comic', 'Web Developer'],
  authors: [{ name: 'Mahmoud Moataz' }],
  openGraph: {
    title: 'THE AMAZING Web-DEV',
    description: 'Your friendly neighborhood full stack developer!',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#E23636',
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${comicNeue.variable} ${montserrat.variable} ${bangers.variable} font-comic`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}