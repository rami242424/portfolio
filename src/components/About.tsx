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
          marginBottom: '1.5rem',
        }}>
          About
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}>
              실수가 일어날 지점을<br />
              <span style={{ color: 'var(--accent)' }}>미리 찾습니다.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
              일터에서나 코드에서나, 실수가 일어날 수 있는 지점을 먼저 찾고 검증 단계를 넣는 방식으로 일합니다. 매장에서 고객 응대를 단계화해 오안내를 줄였던 경험이, 지금은 코드에서 에러 케이스를 미리 분기 처리하는 방식으로 이어지고 있습니다.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem', marginTop: '1rem' }}>
              3년의 회사 생활과 2년 반의 주말 매장 근무 동안 한 번의 무단결근 없이 일해왔고, 같은 태도로 코드를 짭니다. 외국인 고객이 검색에 실패하는 장면을 매주 보면서 발견한 페인 포인트를 코드로 풀 수 있는 사람이 되고자 공부하고 있습니다.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '0.5rem' }}>
            {[
              { label: 'GitHub', value: 'github.com/rami242424', href: 'https://github.com/rami242424' },
              { label: '관심 분야', value: '뷰티 · 헬스 · 언어교육' },
              { label: '현재 상태', value: '취업 준비 중' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent)',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.target as HTMLElement).style.opacity = '0.7'}
                    onMouseLeave={e => (e.target as HTMLElement).style.opacity = '1'}
                  >
                    {item.value} ↗
                  </a>
                ) : (
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
