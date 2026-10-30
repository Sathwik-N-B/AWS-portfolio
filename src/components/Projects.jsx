import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects &amp; Achievements</h2>
        <div className="card-grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p className="subtitle">{p.subtitle}</p>
              <p>{p.description}</p>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer">View project →</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
