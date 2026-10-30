import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2>Tech Superpowers</h2>
        <div className="card-grid">
          {skills.map((s) => (
            <article key={s.group} className="card">
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
