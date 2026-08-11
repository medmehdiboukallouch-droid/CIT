// Full class strings on purpose: Tailwind scans source text, so interpolated
// class names like `text-${accent}` would never be generated.
export const ACCENTS = {
  term: {
    text: 'text-term-bright',
    textDim: 'text-term',
    border: 'border-term/35',
    borderHover: 'hover:border-term/60',
    bg: 'bg-term/10',
    ring: 'shadow-[0_0_30px_-14px_rgba(31,191,92,0.8)]',
    dot: 'bg-term',
  },
  cyan: {
    text: 'text-cyan',
    textDim: 'text-cyan/80',
    border: 'border-cyan/35',
    borderHover: 'hover:border-cyan/60',
    bg: 'bg-cyan/10',
    ring: 'shadow-[0_0_30px_-14px_rgba(42,151,173,0.85)]',
    dot: 'bg-cyan',
  },
  violet: {
    text: 'text-violet',
    textDim: 'text-violet/80',
    border: 'border-violet/35',
    borderHover: 'hover:border-violet/60',
    bg: 'bg-violet/10',
    ring: 'shadow-[0_0_30px_-14px_rgba(109,95,211,0.85)]',
    dot: 'bg-violet',
  },
  amber: {
    text: 'text-amber',
    textDim: 'text-amber/80',
    border: 'border-amber/35',
    borderHover: 'hover:border-amber/60',
    bg: 'bg-amber/10',
    ring: 'shadow-[0_0_30px_-14px_rgba(184,134,47,0.85)]',
    dot: 'bg-amber',
  },
  danger: {
    text: 'text-danger',
    textDim: 'text-danger/80',
    border: 'border-danger/35',
    borderHover: 'hover:border-danger/60',
    bg: 'bg-danger/10',
    ring: 'shadow-[0_0_30px_-14px_rgba(184,64,60,0.85)]',
    dot: 'bg-danger',
  },
}

export const accent = (key) => ACCENTS[key] ?? ACCENTS.term
