import { useFadeIn } from '../hooks/useFadeIn'

const projects = [
  {
    number: '01',
    title: 'WeatherNow',
    description: 'OpenWeatherMap API 기반 날씨 검색 및 5일 예보 조회 앱. 한글·영어 도시명 검색과 위치 기반 자동 조회를 지원합니다.',
    tags: ['React', 'TypeScript', 'CSS Modules', 'useReducer'],
    points: [
      '외부 API 정책 변경 대응: Places API → Geocoding API로 마이그레이션',
      'useReducer로 6개 연관 상태를 명시적 액션 단위로 관리',
      'parseWeatherPayload 함수 분리로 응답 파싱 로직 중복 제거',
    ],
    demo: 'https://weather-now-nine-iota.vercel.app/',
    github: 'https://github.com/rami242424/Weather-app',
    notion: '', // 노션 상세 페이지 링크 (본인이 채우기)
  },
  {
    number: '02',
    title: 'CineSearch',
    description: 'TMDB API 기반 영화 검색 및 상세 정보 조회 앱. 키워드 검색, 정렬 필터, 스켈레톤 UI를 포함합니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    points: [
      'Discriminated Union으로 fetch 상태를 타입 레벨에서 안전하게 관리',
      'useMovieDetail에 id 외부 주입으로 URL 의존성 분리, 훅 재사용성 확보',
      '실제 카드와 동일한 레이아웃의 스켈레톤 UI로 로딩 중 레이아웃 이동 방지',
    ],
    demo: 'https://movie-app-zeta-ruby.vercel.app/',
    github: 'https://github.com/rami242424/movie-app',
    notion: '', // 노션 상세 페이지 링크 (본인이 채우기)
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
                  <div style={{ display: 'flex', gap: '1rem', flexShrink: 0, marginLeft: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    <a href={project.demo} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>Demo ↗</a>
                    <a href={project.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>GitHub ↗</a>
                    {project.notion && (
                      <a href={project.notion} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>Notion ↗</a>
                    )}
                  </div>
                </div>
                <p style={{ color: '#b5b2ac', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
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