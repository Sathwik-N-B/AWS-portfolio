import { useEffect, useState } from 'react'
import { superpowers, halloweenSuperpowers } from '../data/content.js'

// Plays a short "dispense" animation, then reveals a random superpower card.
// In the halloween theme it becomes a trick-or-treat machine with spooky cards.
export default function VendingMachine() {
  const spooky = document.documentElement.dataset.theme === 'halloween'
  const pool = spooky ? halloweenSuperpowers : superpowers
  const [pick, setPick] = useState(() => pool[Math.floor(Math.random() * pool.length)])
  const [phase, setPhase] = useState('dispensing')

  useEffect(() => {
    if (phase !== 'dispensing') return
    const t = setTimeout(() => setPhase('ready'), 1400)
    return () => clearTimeout(t)
  }, [phase])

  const again = () => {
    setPick(pool[Math.floor(Math.random() * pool.length)])
    setPhase('dispensing')
  }

  return (
    <div className="vm" role="status" aria-live="polite">
      <div className="vm-body">
        <div className="vm-window">
          {phase === 'dispensing'
            ? <span className="vm-spinner">{spooky ? '🎃' : '⚙'}</span>
            : <span>{spooky ? '🍬' : '✨'}</span>}
        </div>
        <div className="vm-slot" />
      </div>
      {phase === 'dispensing' ? (
        <p className="vm-label">{spooky ? 'Trick or treat…' : 'Dispensing a superpower…'}</p>
      ) : (
        <div className="vm-card">
          <strong>{pick.title}</strong>
          <p>{pick.text}</p>
          <button type="button" className="vm-again" onClick={again}>Insert another coin 🪙</button>
        </div>
      )}
    </div>
  )
}
