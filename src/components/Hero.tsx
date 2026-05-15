import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (lineRef.current) lineRef.current.style.width = '100%'
    }, 400)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 clamp(1.5rem, 8vw, 8rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '900px' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          letterSpacing: '0.2em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
        }}>
          Frontend Developer
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '2.5rem',
        }}>
          안녕하세요,<br />
          <span style={{ color: 'var(--accent)' }}>프론트엔드 개발자 OOO입니다.</span>
        </h1>

        <div ref={lineRef} style={{
          height: '1px',
          background: 'var(--border)',
          width: 0,
          transition: 'width 1s ease',
          marginBottom: '2.5rem',
        }} />

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          lineHeight: 1.8,
        }}>
          사용자 경험을 먼저 생각하며,<br />
          왜 만드는지를 항상 고민합니다.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
          <a href="#projects" style={{
            padding: '0.75rem 2rem',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
          }}>
            프로젝트 보기
          </a>
          <a href="#contact" style={{
            padding: '0.75rem 2rem',
            border: '1px solid var(--border-hover)',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
          }}>
            연락하기
          </a>
        </div>
      </div>
    </section>
  )
}