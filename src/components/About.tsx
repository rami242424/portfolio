import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 8vw, 8rem)' }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: '900px' }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          fontWeight: 400,
        }}>
          About
        </p>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: '-0.005em',
              marginBottom: '2.5rem',
              color: 'var(--text-primary)',
              maxWidth: '420px',
            }}>
              실수가 일어날 지점을{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                미리 찾습니다.
              </span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.95, fontSize: '0.95rem', fontWeight: 300 }}>
              현장에서나 코드에서, 실수가 일어날 수 있는 지점을 먼저 찾고 검증 단계를 넣는 방식으로 일합니다. 매장에서 고객 응대를 단계화해 오안내를 줄였던 경험이, 지금은 코드에서 에러 케이스를 미리 분기 처리하는 방식으로 이어지고 있습니다.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.95, fontSize: '0.95rem', marginTop: '1.5rem', fontWeight: 300 }}>
              직장을 다니며 시작한 개발 공부를 부트캠프와 책 출간까지 이어왔고, 한번 맡은 일은 끝까지 해냅니다. 브랜드명을 몰라 헤매거나 원하는 상품이 매장에 없어 난감해하는 외국인 고객을 도우며, 그 경험에서 발견한 페인 포인트를 코드로 풀고자 공부하고 있습니다.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
            {[
              { label: 'GitHub', value: 'github.com/rami242424', href: 'https://github.com/rami242424' },
              { label: '관심 분야', value: '뷰티 · 헬스 · 언어교육' },
              { label: '현재 상태', value: '취업 준비 중' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 400 }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.target as HTMLElement).style.opacity = '0.7'}
                    onMouseLeave={e => (e.target as HTMLElement).style.opacity = '1'}
                  >
                    {item.value} ↗
                  </a>
                ) : (
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}