import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section id="contact" style={{
      padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg-card)',
    }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: '900px' }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Contact
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '2rem',
        }}>
          연락 주시면<br />
          <span style={{ color: 'var(--accent)' }}>빠르게 회신드립니다.</span>
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.9, maxWidth: '480px', marginBottom: '3rem' }}>
          채용·협업·기술 문의 모두 환영합니다.<br />
          아래 채널로 편하게 연락 주세요.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', maxWidth: '480px' }}>
          {[
            { label: 'Email', value: '[본인 이메일 입력]', href: 'mailto:[본인 이메일 입력]' },
            { label: 'GitHub', value: 'github.com/rami242424', href: 'https://github.com/rami242424' },
            // 노션 포트폴리오 링크가 있으면 추가 (선택)
            // { label: 'Notion', value: '[본인 노션 링크]', href: '[본인 노션 링크]' },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{
              background: 'var(--bg-card)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)'}
            >
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {item.label}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>{item.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
