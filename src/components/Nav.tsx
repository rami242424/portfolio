import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.25rem clamp(1.5rem, 8vw, 8rem)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.1rem',
        letterSpacing: '-0.01em',
        color: 'var(--text-primary)',
      }}>
        오가람<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['about', 'skills', 'projects', 'experience', 'contact'].map(item => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-muted)'}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}