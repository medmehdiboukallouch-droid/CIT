import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: '/home/CIT' },
  { to: '/cells', label: '~/cells' },
  { to: '/events', label: '~/events' },
  { to: '/team', label: '~/our team' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  const itemClass =
    (extra = '') =>
    ({ isActive }) =>
      [
        'px-4 py-2 rounded-lg text-sm transition-all duration-300',
        isActive
          ? 'bg-term/10 text-term-bright neon-border'
          : 'text-ink-dim hover:text-term hover:bg-term/5',
        extra,
      ].join(' ')

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'glass-dark border-line shadow-[0_10px_40px_-30px_rgba(31,191,92,0.6)]'
          : 'bg-void/40 backdrop-blur-sm border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="terminal-text text-base font-bold sm:text-lg">
            <span className="text-term">CIT@cit-inpt.com</span>
            <span className="ml-2 text-cyan">~</span>
            <span className="ml-1 text-violet">$</span>
            <span className="animate-cursor ml-1 text-term-bright">_</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} className={itemClass()}>
                  <span className="terminal-prompt">{l.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="rounded-md border border-term/40 p-2 text-term transition-all duration-300 hover:bg-term hover:text-void"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={[
          'overflow-hidden transition-all duration-300 md:hidden',
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="glass-dark space-y-1 border-t border-line px-3 pb-4 pt-3">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={itemClass('block')}>
              <span className="terminal-prompt">{l.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
