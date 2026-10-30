import { useCallback, useEffect, useRef, useState } from 'react'
import { halloweenSuperpowers, profile } from '../data/content.js'
import { play, setSound, isSoundOn } from '../sfx.js'

const PUMPKIN_COUNT = 5

const BATS = [
  { top: 70, size: 2, dur: 14, delay: -2 },
  { top: 120, size: 1.4, dur: 19, delay: -9 },
  { top: 200, size: 2.4, dur: 24, delay: -15 },
  { top: 50, size: 1.1, dur: 11, delay: -6 },
]

const START_GHOSTS = [
  { id: 1, left: 10, dur: 16, delay: -4 },
  { id: 2, left: 55, dur: 21, delay: -12 },
  { id: 3, left: 82, dur: 18, delay: -8 },
]

function makePumpkins() {
  const h = Math.max(document.documentElement.scrollHeight, window.innerHeight)
  // Keep clear of the page edges and bottom corners, where the HUD and terminal button sit.
  const span = (h - 520) / PUMPKIN_COUNT
  return Array.from({ length: PUMPKIN_COUNT }, (_, i) => ({
    id: i,
    x: 18 + Math.random() * 64,
    y: 240 + i * span + Math.random() * span * 0.8,
  }))
}

// Everything that makes the halloween theme come alive. Mounted only while the theme is "halloween".
export default function HalloweenLayer() {
  const [hunt, setHunt] = useState(false)
  const [pumpkins, setPumpkins] = useState([])
  const [pageHeight, setPageHeight] = useState(0)
  const [found, setFound] = useState([])
  const [toast, setToast] = useState(null)
  const [ghosts, setGhosts] = useState(START_GHOSTS)
  const [popped, setPopped] = useState([])
  const [flash, setFlash] = useState(false)
  const [sound, setSoundState] = useState(isSoundOn())
  const [scrollY, setScrollY] = useState(0)
  const spotRef = useRef(null)
  const toastTimer = useRef(null)
  const nextGhost = useRef(100)

  const showToast = useCallback((content, ms = 3500) => {
    clearTimeout(toastTimer.current)
    setToast(content)
    if (ms) toastTimer.current = setTimeout(() => setToast(null), ms)
  }, [])

  // Terminal commands (boo / trick / ghost) arrive as window events.
  useEffect(() => {
    const onEvent = (e) => {
      const type = e.detail
      if (type === 'boo') {
        play('boo')
        setFlash(true)
        document.body.classList.add('hw-shake')
        setTimeout(() => {
          setFlash(false)
          document.body.classList.remove('hw-shake')
        }, 800)
      } else if (type === 'trick') {
        play('pop')
        document.body.classList.add('hw-glitch')
        setTimeout(() => document.body.classList.remove('hw-glitch'), 1800)
      } else if (type === 'ghost') {
        const id = nextGhost.current++
        setGhosts((g) => [...g, { id, left: 10 + Math.random() * 75, dur: 10, delay: 0 }])
        setTimeout(() => setGhosts((g) => g.filter((x) => x.id !== id)), 11000)
        showToast('👻 A ghost drifts onto the page. Catch it!')
      }
    }
    window.addEventListener('halloween', onEvent)
    return () => {
      window.removeEventListener('halloween', onEvent)
      document.body.classList.remove('hw-shake', 'hw-glitch')
    }
  }, [showToast])

  useEffect(() => {
    const onSound = (e) => setSoundState(e.detail)
    window.addEventListener('hw-sound-change', onSound)
    return () => window.removeEventListener('hw-sound-change', onSound)
  }, [])

  // The spider's thread lengthens as you scroll.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // The flashlight follows the mouse or finger.
  useEffect(() => {
    if (!hunt) return
    const move = (x, y) => {
      const el = spotRef.current
      if (!el) return
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }
    const onPointer = (e) => move(e.clientX, e.clientY)
    const onTouch = (e) => {
      const t = e.touches[0]
      if (t) move(t.clientX, t.clientY)
    }
    move(window.innerWidth / 2, window.innerHeight / 2)
    window.addEventListener('pointermove', onPointer)
    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('touchstart', onTouch)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [hunt])

  const toggleHunt = () => {
    if (!hunt) {
      if (!pumpkins.length) setPumpkins(makePumpkins())
      setPageHeight(Math.max(document.documentElement.scrollHeight, window.innerHeight))
      showToast(`🔦 Find the ${PUMPKIN_COUNT} hidden 🎃. Move your mouse or finger to look around, and scroll to explore.`, 5000)
    } else {
      setToast(null)
    }
    setHunt(!hunt)
  }

  const popGhost = (id) => {
    play('pop')
    setPopped((p) => [...p, id])
    showToast('👻 BOO! You got me… I’ll be back.', 2500)
    setTimeout(() => setPopped((p) => p.filter((x) => x !== id)), 3000)
  }

  const findPumpkin = (id) => {
    if (found.includes(id)) return
    const next = [...found, id]
    setFound(next)
    if (next.length === PUMPKIN_COUNT) {
      play('win')
      showToast(
        <div>
          <strong>🏆 Trick-or-Treat Champion!</strong>
          <p>You found all {PUMPKIN_COUNT} pumpkins. Great instincts. Say hi at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
          <button type="button" className="hw-close" onClick={() => setToast(null)}>Close</button>
        </div>,
        0,
      )
    } else {
      play('candy')
      showToast(`🎃 Found one (${next.length}/${PUMPKIN_COUNT})! ${halloweenSuperpowers[id].text}`, 5000)
    }
  }

  const toggleSound = () => setSound(!sound)

  // Scrolls to the height of a pumpkin that hasn't been found yet (not its exact spot).
  const giveHint = () => {
    const next = pumpkins.find((p) => !found.includes(p.id))
    if (!hunt || !next) {
      showToast('🧭 Start the 🔦 Flashlight hunt first, then tap here for a hint.', 3000)
      return
    }
    window.scrollTo({ top: Math.max(0, next.y - window.innerHeight / 2), behavior: 'smooth' })
    showToast('🧭 One is hiding around here. Sweep your flashlight across this part of the page.', 4000)
  }

  return (
    <>
      <div className="hw-vignette" aria-hidden="true" />
      <div className="hw-fog" aria-hidden="true" />
      <div className="hw-moon" aria-hidden="true">🌕</div>
      <div className="hw-web" aria-hidden="true">🕸️</div>

      {BATS.map((b, i) => (
        <span
          key={i}
          className="hw-bat"
          aria-hidden="true"
          style={{ '--top': `${b.top}px`, '--size': `${b.size}rem`, '--dur': `${b.dur}s`, '--delay': `${b.delay}s` }}
        >
          🦇
        </span>
      ))}

      {ghosts.map((g) => (
        <button
          key={g.id}
          type="button"
          className={`hw-ghost${popped.includes(g.id) ? ' popped' : ''}`}
          aria-label="Pop the ghost"
          style={{ '--left': `${g.left}%`, '--dur': `${g.dur}s`, '--delay': `${g.delay}s` }}
          onClick={() => popGhost(g.id)}
        >
          👻
        </button>
      ))}

      <div className="hw-spider">
        <div className="hw-thread" style={{ height: 50 + Math.min(scrollY / 5, 220) }} />
        <button
          type="button"
          aria-label="Poke the spider"
          onClick={() => {
            play('pop')
            showToast('🕷️ Eek! Please don’t poke the spider.', 2500)
          }}
        >
          🕷️
        </button>
      </div>

      {hunt && (
        <>
          <div className="hw-pumpkins" style={{ height: pageHeight }}>
            {pumpkins.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`hw-pumpkin${found.includes(p.id) ? ' found' : ''}`}
                style={{ left: `${p.x}%`, top: p.y }}
                aria-label="Hidden pumpkin"
                onClick={() => findPumpkin(p.id)}
              >
                🎃
              </button>
            ))}
          </div>
          <div className="hw-spot" ref={spotRef} aria-hidden="true" />
        </>
      )}

      {flash && (
        <div className="hw-flash" aria-hidden="true">
          <span>👻</span>
          <strong>BOO!</strong>
        </div>
      )}

      {toast && <div className="hw-toast" role="status">{toast}</div>}

      <div className="hw-hud">
        <button type="button" className="hw-btn" onClick={toggleHunt}>
          {hunt ? '💡 Lights on' : '🔦 Flashlight hunt'}
        </button>
        <button type="button" className="hw-btn" onClick={toggleSound} aria-pressed={sound}>
          {sound ? '🔊 Sound on' : '🔇 Sound off'}
        </button>
        <button type="button" className="hw-btn" onClick={giveHint} title="Scroll to a pumpkin that is still hidden">
          🍬 {found.length}/{PUMPKIN_COUNT} · 🧭 Hint
        </button>
      </div>
    </>
  )
}
