import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-links">
          <a className="btn" href="#projects">See my work</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
