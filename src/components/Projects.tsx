import { useFadeIn } from '../hooks/useFadeIn'

const projects = [
  {
    number: '01',
    title: 'WeatherNow',
    description: 'OpenWeatherMap API 기반 현재 날씨 및 5일 예보 조회 앱. 한글/영어 도시명 검색, 현재 위치 기반 자동 조회 지원.',
    tags: ['React', 'TypeScript', 'CSS Modules', 'useReducer'],
    points: [
      'Google Geocoding API로 한글 도시명 → 영어 변환',
      'useReducer로 6개 연관 상태 예측 가능하게 관리',
      'Promise.all로 날씨 + 예보 API 병렬 호출',
    ],
    demo: 'https://weather-now-nine-iota.vercel.app/',
    github: 'https://github.com/rami242424/Weather-app',
  },
  {
    number: '02',
    title: 'CineSearch',
    description: 'TMDB API 기반 영화 검색 및 상세 정보 조회 앱. 키워드 검색, 정렬 필터, 스켈레톤 UI 구현.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    points: [
      'Discriminated Union으로 fetch 상태를 타입 레벨에서 안전하게 관리',
      'useMovieDetail에 id 외부 주입으로 훅 재사용성 확보',
      '스켈레톤 UI로 로딩 중 레이아웃 유지',
    ],
    demo: 'https://movie-app-zeta-ruby.vercel.app/',
    github: 'https://github.com/rami242424/movie-app',
  },
]

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects" style={{ padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 8vw, 8rem)' }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: '900px' }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Projects
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '4rem',
        }}>
          프로젝트
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {projects.map(project => (
            <div key={project.number} style={{
              background: 'var(--bg)',
              padding: '2.5rem 0',
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '2rem',
              borderBottom: '1px solid var(--border)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg)'}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  {project.number}
                </span>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem', flexShrink: 0, marginLeft: '1rem' }}>
                    <a href={project.demo} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>Demo ↗</a>
                    <a href={project.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>GitHub ↗</a>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.points.map(point => (
                    <li key={point} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ padding: '0.25rem 0.75rem', border: '1px solid var(--border)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}