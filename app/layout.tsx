import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Cinzel, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-cormorant',
  style: ['normal', 'italic']
})

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'], 
  variable: '--font-cinzel'
})

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'], 
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: { default: 'Mahmoud Moataz — The Portfolio', template: '%s | Eng. Mahmoud' },
  description: 'Full Stack Developer & Computer Engineer. A legacy of code and craftsmanship.',
  keywords: ['Full Stack', 'Developer', 'Portfolio', 'Engineer'],
  authors: [{ name: 'Mahmoud Moataz' }],
  openGraph: {
    title: 'Mahmoud Moataz — The Portfolio',
    description: 'A legacy of code and craftsmanship',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${cinzel.variable} ${inter.variable} font-serif vignette`}>
       <Navbar />
        {children}
        
      <Footer />
      </body>
    </html>
  )
}