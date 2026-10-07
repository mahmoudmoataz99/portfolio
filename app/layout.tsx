import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Mahmoud Moataz — Full Stack Developer', description: 'Full Stack Developer building fast, reliable, and scalable web applications.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
