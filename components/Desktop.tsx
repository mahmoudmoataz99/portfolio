'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { projects, skills, experience, education } from '@/lib/data'
import Image from 'next/image'
import {SquarePower} from 'lucide-react'

const TAG = 'Full Stack Developer & Computer Engineer'
type App = { id: string; title: string; icon: string; w: number; h: number; body: () => ReactNode }

function Projects() {
  const [i, setI] = useState(0)
  const p = projects[i]
  return (
    <div className="explorer">
      <div className="addr">Address <span>C:\Projects\{p.slug}</span></div>
      <div className="split">
        <aside className="tasks">
          <h4>Details</h4>
          <b>{p.emoji} {p.title}</b><small>{p.sub} · {p.year}{p.featured ? ' · ★ Featured' : ''}</small>
          <p>{p.desc}</p>
          <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
          <a className="xpbtn" href={p.link} target="_blank" rel="noopener noreferrer">Open live site</a>
          <a className="xpbtn" href={p.source} target="_blank" rel="noopener noreferrer">View source</a>
        </aside>
        <div className="files">
          {projects.map((q, k) => <button key={q.id} className={`file ${k === i ? 'sel' : ''}`} onClick={() => setI(k)}><span>📁</span>{q.title}</button>)}
        </div>
      </div>
    </div>
  )
}
const Bars = ({ list }: { list: typeof skills }) => <>{list.map(s => <div className="sk" key={s.name}><span>{s.name}</span><div className="prog"><b style={{ width: `${s.level}%` }} /></div><i>{s.level}%</i></div>)}</>

const apps: App[] = [
  {
    id: 'about', title: 'About Me - Notepad', icon: '📝', w: 520, h: 420, body: () => (
      <div className="np"><div className="menu"><span>File</span><span>Edit</span><span>Format</span><span>View</span><span>Help</span></div>
        <pre>{`Hello, I'm Mahmoud Moataz.
${TAG}

Computer Engineer with a passion for building great software. My journey began when I discovered the power to create seamless web experiences. Now I focus on writing clean code, solving tricky problems, and building responsive applications that deliver real value.

Core strengths: Full-stack development, team collaboration, and the ability to learn new technologies quickly and apply them effectively.

"Every project is an opportunity to solve a real problem. I focus on writing clean, maintainable code that delivers results, one line at a time."
                                  — Mahmoud Moataz`}</pre></div>)
  },
  {
    id: 'skills', title: 'Skills - Control Panel', icon: '⚙️', w: 560, h: 460, body: () => (
      <div className="pad"><fieldset><legend>Frontend</legend><Bars list={skills.slice(0, 5)} /></fieldset><fieldset><legend>Styling &amp; UI</legend><Bars list={skills.slice(5, 9)} /></fieldset><fieldset><legend>Backend &amp; Database</legend><Bars list={skills.slice(9)} /></fieldset><p className="hint">Always learning, always growing.</p></div>)
  },
  { id: 'projects', title: 'My Projects', icon: '📁', w: 700, h: 460, body: () => <Projects /> },
  {
    id: 'experience', title: 'Experience.doc - WordPad', icon: '💼', w: 560, h: 460, body: () => (
      <div className="doc">{experience.map(e => <div key={e.role}><h3>{e.role}</h3><p><b>{e.co}</b> — <i>{e.date}</i></p><p>{e.desc}</p></div>)}</div>)
  },
  {
    id: 'education', title: 'Education', icon: '🎓', w: 560, h: 280, body: () => (
      <div className="pad"><table><thead><tr><th>Name</th><th>Institution</th><th>Date</th></tr></thead><tbody>{education.map(e => <tr key={e.certificate}><td>🎓 {e.certificate}</td><td>{e.co}</td><td>{e.date}</td></tr>)}</tbody></table></div>)
  },
  {
    id: 'contact', title: 'New Message - Outlook Express', icon: '✉️', w: 560, h: 470, body: () => (
      <div className="mail">
        <div className="tool"><a className="xpbtn" href="mailto:mahmoudmoataz99@gmail.com?subject=Let%27s%20build%20something%20great">✉ Send</a></div>
        <div className="fld"><label>To:</label><span>Mahmoud Moataz &lt;mahmoudmoataz99@gmail.com&gt;</span></div>
        <div className="fld"><label>Subject:</label><span>Let&apos;s build something great together</span></div>
        <div className="msg"><p>I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.</p>
          <p>Email: <a href="mailto:mahmoudmoataz99@gmail.com">mahmoudmoataz99@gmail.com</a><br />LinkedIn: <a href="https://www.linkedin.com/in/mahmoudmoataz99" target="_blank" rel="noopener noreferrer">linkedin.com/in/mahmoudmoataz</a><br />GitHub: <a href="https://github.com/mahmoudmoataz99" target="_blank" rel="noopener noreferrer">github.com/mahmoudmoataz99</a></p>
          <p>Response time: usually within 24 hours<br />Location: Cairo, Egypt (available worldwide)<br />Status: <b style={{ color: '#2a7a1a' }}>Open to opportunities</b></p></div>
      </div>)
  },
  {
    id: 'resume', title: 'CV.pdf - Reader', icon: '📄', w: 640, h: 520, body: () => (
      <div className="reader"><div className="tool"><a className="xpbtn" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Open in new tab</a><a className="xpbtn" href="/cv.pdf" download="Mahmoud_Moataz_CV.pdf">Download PDF</a></div><iframe src="/cv.pdf" title="Resume" /></div>)
  },
  { id: 'bin', title: 'Recycle Bin', icon: '🗑️', w: 380, h: 220, body: () => <div className="pad center"><p style={{ fontSize: 40, margin: 0 }}>🗑️</p><p>This folder is empty.<br />All bugs have been resolved.</p></div> },
]
const byId = Object.fromEntries(apps.map(a => [a.id, a]))
type W = { min: boolean; max: boolean; z: number; x: number; y: number }

export default function Desktop() {
  const [wins, setWins] = useState<Record<string, W>>({})
  const [sel, setSel] = useState('')
  const [menu, setMenu] = useState(false)
  const [off, setOff] = useState(false)
  const [clock, setClock] = useState('')
  const zc = useRef(10)
  const drag = useRef<{ id: string; dx: number; dy: number } | null>(null)

  useEffect(() => {
    const t = () => setClock(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
    t(); const iv = setInterval(t, 20000)
    openApp('about')
    return () => clearInterval(iv)
  }, [])

  const openApp = (id: string) => {
    setMenu(false)
    setWins(w => {
      const n = Object.keys(w).length
      const cur = w[id]
      return { ...w, [id]: cur ? { ...cur, min: false, z: ++zc.current } : { min: false, max: false, z: ++zc.current, x: 130 + (n % 6) * 28, y: 30 + (n % 6) * 28 } }
    })
  }
  const patch = (id: string, p: Partial<W>) => setWins(w => ({ ...w, [id]: { ...w[id], ...p } }))
  const close = (id: string) => setWins(w => { const c = { ...w }; delete c[id]; return c })
  const focus = (id: string) => patch(id, { z: ++zc.current })
  const topId = Object.entries(wins).filter(([, w]) => !w.min).sort((a, b) => b[1].z - a[1].z)[0]?.[0]

  const icons = ['about', 'skills', 'projects', 'experience', 'education', 'contact', 'resume', 'bin']
  const label: Record<string, string> = { about: 'About Me', skills: 'Skills', projects: 'My Projects', experience: 'Experience', education: 'Education', contact: 'Contact', resume: 'My Resume', bin: 'Recycle Bin' }

  if (off) return <div className="off" onClick={() => { setOff(false) }}><h1>It&apos;s now safe to hire Mahmoud.</h1><p>(click anywhere to restart)</p></div>

  return (
    <div className="screen">
      <div className="desktop" onClick={() => setSel('')}>
        <div className="icons">
          {icons.map(id => (
            <button key={id} className={`icon ${sel === id ? 'sel' : ''}`}
              onClick={e => { e.stopPropagation(); setSel(id); if (matchMedia('(pointer:coarse)').matches) openApp(id) }}
              onDoubleClick={() => openApp(id)}><span>{byId[id].icon}</span>{label[id]}</button>
          ))}
        </div>

        {Object.entries(wins).map(([id, w]) => {
          const a = byId[id]
          return (
            <div key={id} className={`win ${id === topId ? 'on' : ''} ${w.max ? 'max' : ''}`} hidden={w.min}
              style={{ zIndex: w.z, left: w.x, top: w.y, width: a.w, height: a.h }} onPointerDown={() => focus(id)}>
              <div className="title"
                onPointerDown={e => { if (w.max || (e.target as HTMLElement).closest('button')) return; drag.current = { id, dx: e.clientX - w.x, dy: e.clientY - w.y }; e.currentTarget.setPointerCapture(e.pointerId) }}
                onPointerMove={e => { if (drag.current?.id === id) patch(id, { x: Math.max(-200, e.clientX - drag.current.dx), y: Math.max(0, e.clientY - drag.current.dy) }) }}
                onPointerUp={() => (drag.current = null)}
                onDoubleClick={() => patch(id, { max: !w.max })}>
                <span>{a.icon}</span><b>{a.title}</b>
                <button aria-label="Minimize" onClick={() => patch(id, { min: true })}>_</button>
                <button aria-label="Maximize" onClick={() => patch(id, { max: !w.max })}>{w.max ? '❐' : '□'}</button>
                <button className="x" aria-label="Close" onClick={() => close(id)}>✕</button>
              </div>
              <div className="body">{a.body()}</div>
            </div>
          )
        })}
      </div>

      {menu && <div className="veil" onClick={() => setMenu(false)} />}
      {menu && (
        <div className="start">
          <div className="uh"><b>Mahmoud Moataz</b></div>
          <div className="cols">
            <div className="l">{['about', 'projects', 'skills', 'experience', 'education'].map(id => <button key={id} onClick={() => openApp(id)}><span>{byId[id].icon}</span>{label[id]}</button>)}</div>
            <div className="r">{['resume', 'contact', 'bin'].map(id => <button key={id} onClick={() => openApp(id)}><span>{byId[id].icon}</span>{label[id]}</button>)}</div>
          </div>
          <div className="uf space-x-4">
            <button onClick={() => { setMenu(false); setOff(true) }}><SquarePower className='bg-red-600' /></button>
          </div>
        </div>
      )}

      <div className="taskbar">
        <div className="sbtn flex gap-x-4 py-8">
          <Image src="/logo.png" width={20} height={10} alt="Logo" />
          <button onClick={() => setMenu(m => !m)}>start</button>
        </div>
        <div className="tasks-bar">
          {Object.entries(wins).map(([id, w]) => (
            <button key={id} className={id === topId ? 'on' : ''} onClick={() => (w.min || id !== topId ? openApp(id) : patch(id, { min: true }))}><span>{byId[id].icon}</span>{byId[id].title}</button>
          ))}
        </div>
        <div className="tray">🔊 {clock}</div>
      </div>
    </div>
  )
}
