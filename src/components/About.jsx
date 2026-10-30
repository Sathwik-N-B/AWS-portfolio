import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
