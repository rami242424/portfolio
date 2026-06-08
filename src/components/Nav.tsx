import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const items = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 메뉴 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.25rem clamp(1.5rem, 8vw, 8rem)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: (scrolled || open) ? 'rgba(10,10,10,0.9)' : 'transparent',
      backdropFilter: (scrolled || open) ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <a href="#" onClick={() => setOpen(false)} style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.1rem',
        letterSpacing: '-0.01em',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap',
        zIndex: 2,
      }}>
        오가람<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* 데스크탑 메뉴 */}
      <div className="nav-links-desktop" style={{ gap: '2.5rem' }}>
        {items.map(item => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-muted)'}
          >
            {item}
          </a>
        ))}
      </div>

      {/* 모바일 햄버거 버튼 */}
      <button
        className="nav-burger"
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          zIndex: 300,
          position: 'relative',
          flexDirection: 'column',
          gap: '5px',
          width: '40px',
          height: '40px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{
          display: 'block',
          width: '22px',
          height: '2px',
          background: 'var(--text-primary)',
          transition: 'transform 0.25s ease, opacity 0.25s ease',
          transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
        }} />
        <span style={{
          display: 'block',
          width: '22px',
          height: '2px',
          background: 'var(--text-primary)',
          transition: 'opacity 0.2s ease',
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          display: 'block',
          width: '22px',
          height: '2px',
          background: 'var(--text-primary)',
          transition: 'transform 0.25s ease, opacity 0.25s ease',
          transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
        }} />
      </button>
    </nav>

    {/* 모바일 펼침 메뉴 — Portal로 body 직속에 렌더 (nav 쌓임 맥락에서 분리) */}
    {open && createPortal(
      <div
        className="nav-menu-mobile"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          zIndex: 9999,
        }}
      >
        <button
          aria-label="메뉴 닫기"
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: 'clamp(1.5rem, 8vw, 8rem)',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        {items.map(item => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            {item}
          </a>
        ))}
      </div>,
      document.body
    )}
    </>
  )
}