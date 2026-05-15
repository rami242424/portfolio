import { useFadeIn } from '../hooks/useFadeIn'

const skills = [
  {
    category: 'Core',
    items: ['React 18', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    category: 'Styling',
    items: ['CSS Modules', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'State & Data',
    items: ['useReducer', 'Custom Hooks', 'REST API'],
  },
  {
    category: 'Tools',
    items: ['Vite', 'Git / GitHub', 'Vercel'],
  },
]

export default function Skills() {
  const ref = useFadeIn()

  return (
    <section id="skills" style={{
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
          Skills
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '3.5rem',
        }}>
          기술 스택
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
        }}>
          {skills.map(group => (
            <div key={group.category} style={{
              background: 'var(--bg-card)',
              padding: '2rem 1.5rem',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)'}
            >
              <p style={{
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                {group.category}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {group.items.map(item => (
                  <li key={item} style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}