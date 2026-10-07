import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Mahmoud Moataz', description: 'Full Stack Developer building fast, reliable, and scalable web applications.', icons: './logo.png' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
