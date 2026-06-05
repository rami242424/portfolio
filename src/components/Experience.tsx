import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const careers = [
  {
    company: '올리브영 인천공항점',
    period: '2023.12 ~ 현재',
    role: '계약직',
    points: [
      '고객의 피부 타입과 요구를 파악해 맞춤 상품을 추천하고, 미취급 상품은 온라인·대체 경로까지 안내',
      '영어·중국어·일본어로 다국적 고객의 결제, 택스리펀, 할인 적용 응대',
    ],
  },
  {
    company: '중부에스켐',
    period: '2020.04 ~ 2023.04',
    role: '주임',
    points: [
      '100여 개 협력업체 발주 전담 및 이행 관리',
      '입고 수량·단가 검증 (영수증 · ERP · 업체 청구서 대조)',
      '월말·연말 구매 실적 정리 및 결재 보고',
    ],
  },
  {
    company: '대상에스티',
    period: '2018.04 ~ 2019.05',
    role: '사원',
    points: [
      '생산수량·불량수량 일일 집계 및 ERP 입력',
      'ERP → MEMS 시스템 전환 참여 및 현업 적용',
    ],
  },
]

export default function Experience() {
  const ref = useFadeIn()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="experience" style={{
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
          Experience
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
        }}>
          경력
        </h2>

        <p style={{ color: '#b5b2ac', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
          현장에서 데이터 검증과 오류 예방 경험을 쌓았고, 이는 코드에서 에러 케이스를 미리 처리하는 습관으로 이어졌습니다.
        </p>

        {/* 경력 아코디언 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '5rem' }}>
          {careers.map((c, i) => {
            const isOpen = open === i
            return (
              <div key={c.company} style={{ background: 'var(--bg-card)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '1.75rem 0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {c.company}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
                      {c.period} · {c.role}
                    </span>
                  </span>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '1.2rem',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '0 0.5rem 1.75rem' }}>
                    {c.points.map(point => (
                      <li key={point} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.75rem', lineHeight: 1.7, fontWeight: 300 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* 어학 & 기타 활동 */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* 어학 / 자격 */}
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              자격 · 어학
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {['토익스피킹 IM3', '컴퓨터활용능력 2급', '영국 어학연수 (Sprachcafe Brighton, 2015)'].map(item => (
                <li key={item} style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 기타 활동 */}
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Activity
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                국토대장정 — 기획·운영 / 통신팀장 / 조장
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                조장으로 팀원 컨디션을 매일 점검하고 도우며, 유일하게 조기 퇴소자 없이 팀원 전원 완주
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                영어 커뮤니케이션
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                15여 개국 친구들과 영어로 지속 교류, 해외 팬 계정에서 1천여 팔로워에게 콘텐츠 번역·공유
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}