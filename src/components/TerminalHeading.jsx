/**
 * The recurring section header:
 *
 *   // cells.hpp
 *   [CIT@specializations]:~$ cat cells.txt
 *   > Our Cells
 *   <subtitle>
 */
export default function TerminalHeading({ file, host, command, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {file && <p className="text-xs text-ink-faint">// {file}</p>}

      <p className="terminal-text text-xs sm:text-sm">
        <span className="text-term-deep">[CIT@{host}]</span>
        <span className="text-ink-faint">:~</span>
        <span className="text-violet">$ </span>
        <span className="text-ink-dim">{command}</span>
      </p>

      <h2 className="terminal-text text-3xl font-bold text-term-bright glow-text sm:text-4xl">
        <span className="text-term-deep">&gt;</span> {title}
      </h2>

      {subtitle && (
        <p className={`max-w-3xl text-sm leading-relaxed text-ink-dim sm:text-base ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
