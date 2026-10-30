// Tiny synthesized sound effects (Web Audio, no audio files). Off by default; the visitor must opt in.
let ctx = null
let enabled = false

export const isSoundOn = () => enabled

export function setSound(on) {
  enabled = on
  if (on && !ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (AC) ctx = new AC()
  }
  if (on && ctx && ctx.state === 'suspended') ctx.resume()
  window.dispatchEvent(new CustomEvent('hw-sound-change', { detail: on }))
}

function tone(freq, start, dur, type = 'sine', gain = 0.12, endFreq) {
  const t0 = ctx.currentTime + start
  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur)
  g.gain.setValueAtTime(gain, t0)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(ctx.destination)
  osc.start(t0)
  osc.stop(t0 + dur)
}

export function play(name) {
  if (!enabled || !ctx) return
  if (name === 'pop') tone(500, 0, 0.12, 'square', 0.08, 120)
  if (name === 'candy') {
    tone(660, 0, 0.12, 'triangle')
    tone(880, 0.1, 0.12, 'triangle')
    tone(1320, 0.2, 0.2, 'triangle')
  }
  if (name === 'boo') {
    tone(220, 0, 0.5, 'sawtooth', 0.15, 70)
    tone(110, 0, 0.6, 'square', 0.1, 55)
  }
  if (name === 'win') [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.25, 'triangle'))
}
