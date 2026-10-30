import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Let's connect:</p>
        <p className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <p className="small">Built with React and hosted on AWS Amplify.</p>
      </div>
    </footer>
  )
}
