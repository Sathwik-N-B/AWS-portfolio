import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import SuperpowerTerminal from './components/SuperpowerTerminal.jsx'
import HalloweenLayer from './components/HalloweenLayer.jsx'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = theme
  }, [theme])

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
      {theme === 'halloween' && <HalloweenLayer />}
      <SuperpowerTerminal open={terminalOpen} setOpen={setTerminalOpen} theme={theme} setTheme={setTheme} />
    </>
  )
}
