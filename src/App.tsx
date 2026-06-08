import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'

import Experience from './components/Experience'
import Publication from './components/Publication'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publication />
        <Contact />
      </main>
      <footer style={{
        padding: '2rem clamp(1.5rem, 8vw, 8rem)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>© 2026</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Built with React + TypeScript</span>
      </footer>
    </>
  )
}

export default App