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
              코드 한 줄에도<br />
              <span style={{ color: 'var(--accent)' }}>이유가 있습니다.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
              단순히 동작하는 코드가 아니라, 왜 이렇게 설계했는지 설명할 수 있는 코드를 씁니다. React와 TypeScript를 기반으로 사용자 경험을 중심에 두고 개발합니다.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem', marginTop: '1rem' }}>
              [본인의 배경과 이야기를 여기에 채워주세요]
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