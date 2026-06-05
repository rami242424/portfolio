import { useFadeIn } from '../hooks/useFadeIn'

export default function Publication() {
  const ref = useFadeIn()

  return (
    <section id="publication" style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 8vw, 8rem)' }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: '900px' }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Publication
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '3.5rem',
        }}>
          출판
        </h2>

        <div style={{
          border: '1px solid var(--border)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          background: 'var(--bg-card)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                자바스크립트 개념서 기초부터 핵심까지
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
                리디북스 · 2023.10
              </p>
            </div>
            <span style={{
              fontSize: '0.78rem',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              borderRadius: '999px',
              padding: '0.35rem 0.9rem',
              whiteSpace: 'nowrap',
              fontWeight: 500,
            }}>
              프로그래밍 인기순위 1위
            </span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
            {[
              '8명의 개발자와 자바스크립트 기초부터 심화 개념까지 다룬 이론서를 공동 집필',
              '편집·검수·체크리스트 확인 및 배포까지 마지막 단계를 총괄',
            ].map(point => (
              <li key={point} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.75rem', lineHeight: 1.7, fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                {point}
              </li>
            ))}
          </ul>

          <a href="https://ridibooks.com/books/2773000088" target="_blank" rel="noreferrer" style={{
            fontSize: '0.85rem',
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.target as HTMLElement).style.opacity = '0.7'}
            onMouseLeave={e => (e.target as HTMLElement).style.opacity = '1'}
          >
            리디북스에서 보기 ↗
          </a>
        </div>
      </div>
    </section>
  )
}