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
          marginBottom: '2rem',
          fontWeight: 400,
        }}>
          Contact
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
          fontWeight: 500,
          letterSpacing: '-0.005em',
          lineHeight: 1.45,
          marginBottom: '2rem',
          color: 'var(--text-primary)',
          maxWidth: '600px',
        }}>
          함께 일하고 <span style={{ color: 'var(--accent)', fontWeight: 600 }}>싶습니다.</span>
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.95, maxWidth: '480px', marginBottom: '3rem', fontWeight: 300 }}>
          새로운 자리와 협업 기회에 열려 있습니다. 편하게 연락 주세요.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', maxWidth: '480px' }}>
          {[
            { label: 'Email', value: '[본인 이메일 입력]', href: 'mailto:[본인 이메일 입력]' },
            { label: 'GitHub', value: 'github.com/rami242424', href: 'https://github.com/rami242424' },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{
              background: 'var(--bg-card)',
              padding: '1.4rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)'}
            >
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 400 }}>
                {item.label}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>{item.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
