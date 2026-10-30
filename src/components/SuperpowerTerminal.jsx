import { useEffect, useRef, useState } from 'react'
import { about, skills, projects, profile } from '../data/content.js'
import VendingMachine from './VendingMachine.jsx'

const THEMES = ['dark', 'neon', 'pastel', 'halloween']
const CHIPS = ['help', 'about', 'skills', 'projects', 'superpower', 'halloween']

function runCommand(input, setTheme) {
  const [cmd, ...args] = input.trim().toLowerCase().split(/\s+/)
  switch (cmd) {
    case 'help':
      return (
        <ul className="t-list">
          <li><b>about</b> – who I am</li>
          <li><b>skills</b> – my tech superpowers</li>
          <li><b>projects</b> – things I've built</li>
          <li><b>superpower</b> – dispense a random superpower</li>
          <li><b>halloween</b> – 🎃 spooky mode: trick-or-treat superpowers</li>
          <li><b>theme</b> dark | neon | pastel | halloween – re-skin the site</li>
          <li><b>contact</b> – get in touch</li>
          <li><b>clear</b> – clear the screen · <b>exit</b> – close</li>
        </ul>
      )
    case 'about':
      return <p>{about.paragraphs[0]}</p>
    case 'skills':
      return (
        <ul className="t-list">
          {skills.map((s) => (
            <li key={s.group}><b>{s.group}:</b> {s.items.join(', ')}</li>
          ))}
        </ul>
      )
    case 'projects':
      return (
        <ul className="t-list">
          {projects.map((p) => (
            <li key={p.title}><b>{p.title}</b> – {p.subtitle}</li>
          ))}
        </ul>
      )
    case 'superpower':
      return <VendingMachine />
    case 'halloween':
      setTheme('halloween')
      return <p>🎃 Spooky mode on. Type <b>superpower</b> to trick-or-treat, or <b>theme dark</b> to escape.</p>
    case 'theme': {
      const t = args[0]
      if (!THEMES.includes(t)) return <p>Usage: theme {THEMES.join(' | ')}</p>
      setTheme(t)
      return <p>Theme set to {t}.</p>
    }
    case 'contact':
      return (
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      )
    default:
      return <p>Command not found: {cmd}. Type <b>help</b>.</p>
  }
}

export default function SuperpowerTerminal({ open, setOpen }) {
  const [lines, setLines] = useState([])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [hIndex, setHIndex] = useState(-1)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const nextId = useRef(0)

  const setTheme = (t) => {
    document.documentElement.dataset.theme = t === 'dark' ? '' : t
  }

  const submit = (raw) => {
    const text = raw.trim()
    if (!text) return
    setHistory((h) => [text, ...h])
    setHIndex(-1)
    const cmd = text.toLowerCase().split(/\s+/)[0]
    if (cmd === 'clear') return setLines([])
    if (cmd === 'exit' || cmd === 'close') return setOpen(false)
    setLines((l) => [...l, { id: nextId.current++, cmd: text, out: runCommand(text, setTheme) }])
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault()
      const i = Math.min(hIndex + 1, history.length - 1)
      setHIndex(i)
      setValue(history[i])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = hIndex - 1
      setHIndex(i)
      setValue(i >= 0 ? history[i] : '')
    }
  }

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [setOpen])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [lines])

  if (!open) {
    return (
      <button className="t-launcher" type="button" onClick={() => setOpen(true)}>
        <span aria-hidden="true">&gt;_</span> Find my superpower
      </button>
    )
  }

  return (
    <section className="terminal" role="dialog" aria-label="Superpower terminal">
      <header className="t-head">
        <span>superpower-terminal</span>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close terminal">✕</button>
      </header>
      <div className="t-body" ref={bodyRef}>
        <p className="t-dim">Welcome! Type <b>help</b>, or tap a command below. Try <b>superpower</b>.</p>
        {lines.map((l) => (
          <div key={l.id} className="t-entry">
            <div className="t-cmd">$ {l.cmd}</div>
            <div className="t-out">{l.out}</div>
          </div>
        ))}
      </div>
      <div className="t-chips">
        {CHIPS.map((c) => (
          <button key={c} type="button" onClick={() => submit(c)}>{c}</button>
        ))}
      </div>
      <form
        className="t-form"
        onSubmit={(e) => {
          e.preventDefault()
          submit(value)
          setValue('')
        }}
      >
        <span aria-hidden="true">$</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Terminal command"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="type a command…"
        />
      </form>
    </section>
  )
}
