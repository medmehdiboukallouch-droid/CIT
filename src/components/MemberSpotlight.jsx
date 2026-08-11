import { useEffect } from 'react'
import { accent } from '../utils/accents'
import { asset } from '../utils/asset'

/**
 * Fullscreen profile for a board member: the portrait at full size next to the
 * name, role and cell. Opened by clicking a card in the org chart.
 */
export default function MemberSpotlight({ member, accentKey = 'term', cell, onClose }) {
  useEffect(() => {
    if (!member) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [member, onClose])

  if (!member) return null

  const a = accent(accentKey)
  const initials = `${member.firstName?.[0] ?? ''}${member.lastName?.[0] ?? ''}`.toUpperCase()

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-void/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${member.firstName} ${member.lastName}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-md border border-line bg-void/80 px-3 py-1.5 text-ink-dim transition-colors hover:border-danger/60 hover:text-danger"
      >
        ✕
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up flex max-h-[92vh] w-full max-w-4xl flex-col items-center gap-8 overflow-y-auto px-2 py-6 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left"
      >
        <div
          className={`relative shrink-0 overflow-hidden rounded-2xl border bg-panel-2 ${a.border} ${a.ring}`}
        >
          {member.photo ? (
            <img
              src={asset(member.photo)}
              alt={`${member.firstName} ${member.lastName}`}
              className="h-[46vh] w-auto max-w-[80vw] object-cover object-top sm:h-[62vh]"
            />
          ) : (
            <div className="flex h-64 w-64 items-center justify-center text-6xl font-bold text-ink-faint">
              {initials}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="terminal-text text-xs">
            <span className="text-term-deep">[CIT@team]</span>
            <span className="text-ink-faint">:~</span>
            <span className="text-violet">$ </span>
            <span className="text-ink-dim">cat {member.id}.profile</span>
          </p>

          <h2 className="mt-4 terminal-text text-2xl font-bold leading-tight sm:text-4xl">
            <span className="block text-ink-dim">{member.lastName}</span>
            <span className="block text-ink">{member.firstName}</span>
          </h2>

          <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.2em] ${a.text}`}>
            {member.role}
          </p>

          {cell && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 text-xs text-ink-dim">
              <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
              {cell}
            </p>
          )}

          {member.description && (
            <p className="mt-5 max-w-md text-sm leading-7 text-ink-dim">{member.description}</p>
          )}

          <p className="mt-8 text-[11px] text-ink-faint">
            Esc or click outside to close
            <span className="animate-cursor ml-1 text-term-bright">▊</span>
          </p>
        </div>
      </div>
    </div>
  )
}
