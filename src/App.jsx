import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import SuperpowerTerminal from './components/SuperpowerTerminal.jsx'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <>
      <Nav />
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <SuperpowerTerminal open={terminalOpen} setOpen={setTerminalOpen} />
    </>
  )
}
