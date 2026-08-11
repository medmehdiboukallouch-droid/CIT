import { useEffect } from 'react'

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-4xl',
  // Set while something sits on top of the modal (the fullscreen viewer), so a
  // single Escape closes only the topmost layer.
  escDisabled = false,
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && !escDisabled && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose, escDisabled])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-void/85 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={`panel scanlines my-6 w-full ${maxWidth} animate-fade-up overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line bg-panel-2/60 px-5 py-4 sm:px-7">
          <div>
            <h3 className="terminal-text text-xl font-bold text-term-bright glow-text sm:text-2xl">
              {title}
            </h3>
            {subtitle && <p className="mt-1 text-xs text-ink-dim sm:text-sm">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-md border border-line px-2.5 py-1 text-ink-dim transition-all hover:border-danger/60 hover:text-danger"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-5 py-6 sm:px-7">{children}</div>
      </div>
    </div>
  )
}
