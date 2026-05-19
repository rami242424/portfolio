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
          fontSize: '0.8rem',
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          fontWeight: 400,
        }}>
          Frontend Developer
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)',
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '-0.005em',
          marginBottom: '3rem',
          color: 'var(--text-primary)',
          maxWidth: '720px',
        }}>
          맡은 일을 <span style={{ color: 'var(--accent)', fontWeight: 600 }}>끝까지</span> 해내고, 사용자가 <span style={{ color: 'var(--accent)', fontWeight: 600 }}>막힐 지점</span>을 미리 찾는 프론트엔드 개발자입니다.
        </h1>

        <div ref={lineRef} style={{
          height: '1px',
          background: 'var(--border)',
          width: 0,
          transition: 'width 1s ease',
          marginBottom: '3rem',
        }} />

        <p style={{
          fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
          color: 'var(--text-secondary)',
          maxWidth: '480px',
          lineHeight: 1.9,
          fontWeight: 300,
        }}>
          현장에서 사용자의 페인 포인트를 관찰하는 일과, 그 문제를 코드로 풀어내는 일에 관심이 많습니다.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '3.5rem' }}>
          <a href="#projects" style={{
            padding: '0.85rem 2rem',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
          }}>
            프로젝트 보기
          </a>
          <a href="#contact" style={{
            padding: '0.85rem 2rem',
            border: '1px solid var(--border-hover)',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
          }}>
            연락하기
          </a>
        </div>
      </div>
    </section>
  )
}
