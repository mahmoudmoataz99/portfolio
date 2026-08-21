'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  shape: 'circle' | 'diamond' | 'triangle'
}

const colors = ['#B026FF', '#FF2D95', '#00F5FF', '#39FF14', '#FF6B00', '#FFE600']
const shapes: ('circle' | 'diamond' | 'triangle')[] = ['circle', 'diamond', 'triangle']

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsLight(theme === 'light')
    }
    
    checkTheme()
    
    const observer = new MutationObserver(() => checkTheme())
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const count = isLight ? 40 : 30
    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isLight ? 6 : 4) + (isLight ? 2 : 2),
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * (isLight ? 15 : 10) + (isLight ? 8 : 5),
        delay: Math.random() * (isLight ? 12 : 10),
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      })
    }
    setParticles(newParticles)
  }, [isLight])

  const getShapeStyle = (shape: string) => {
    switch(shape) {
      case 'diamond':
        return { transform: 'rotate(45deg)', borderRadius: '2px' }
      case 'triangle':
        return { 
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          borderRadius: '0'
        }
      default:
        return { borderRadius: '50%' }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: isLight 
              ? `0 0 ${p.size * 4}px ${p.color}60, 0 0 ${p.size * 8}px ${p.color}30` 
              : `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ...getShapeStyle(p.shape)
          }}
        />
      ))}
    </div>
  )
}