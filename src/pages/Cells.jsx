import { useState } from 'react'
import TerminalHeading from '../components/TerminalHeading'
import Modal from '../components/Modal'
import { cells } from '../data/cells'
import { accent } from '../utils/accents'

function CellCard({ cell, onOpen }) {
  const a = accent(cell.accent)

  return (
    <article className={`panel panel-hover group flex flex-col overflow-hidden`}>
      <div className={`flex items-center gap-3 border-b border-line ${a.bg} px-5 py-4`}>
        <i className={`fa-solid ${cell.icon} text-lg ${a.text}`} />
        <h3 className="terminal-text text-lg font-bold text-ink">{cell.name}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {cell.technologies.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-xs leading-6 text-ink-dim">{cell.summary}</p>

        <button
          type="button"
          onClick={onOpen}
          className={`mt-5 self-start rounded-lg border ${a.border} px-4 py-2 text-xs uppercase tracking-widest ${a.text} transition-all duration-300 hover:bg-white/5`}
        >
          Learn More <span className="ml-1">→</span>
        </button>
      </div>
    </article>
  )
}

export default function Cells() {
  const [active, setActive] = useState(null)
  const a = active ? accent(active.accent) : null

  return (
    <>
      <section className="vignette relative overflow-hidden border-b border-line">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <TerminalHeading
            file="cells.hpp"
            host="specializations"
            command="cat cells.txt"
            title="Our Cells"
            subtitle="Discover our specialized cells where passionate students collaborate, learn, and innovate in various domains of information technology and telecommunications."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cells.map((c) => (
              <CellCard key={c.id} cell={c} onOpen={() => setActive(c)} />
            ))}
          </div>

          <div className="panel mt-14 p-7 text-center sm:p-10">
            <p className="terminal-text text-xs text-ink-faint">
              <span className="text-term-deep">[CIT@info]</span>
              <span className="text-ink-faint">:~</span>
              <span className="text-violet">$ </span>
              cat cell_info.md
            </p>
            <h3 className="mt-4 terminal-text text-2xl font-bold text-term-bright glow-text">
              Explore Our Specialized Cells
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink-dim">
              Each cell represents a specialized area of expertise where students collaborate on
              innovative projects, share knowledge, and develop cutting-edge solutions in their
              chosen field.
            </p>
            <p className="mt-5 text-xs text-ink-faint">
              <span className="text-term-deep">&gt;</span> Click &quot;Learn More&quot; to discover
              detailed information about each cell
            </p>
          </div>
        </div>
      </section>

      <Modal open={Boolean(active)} onClose={() => setActive(null)} title={active?.name}>
        {active && (
          <div className="space-y-8">
            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>&gt; Overview</h4>
              <p className="mt-3 text-sm leading-7 text-ink-dim">{active.overview}</p>
            </section>

            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>&gt; Cell Heads</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {active.heads.map((h) => (
                  <div key={h.name} className="rounded-lg border border-line bg-void/50 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-widest text-ink-faint">{h.role}</p>
                    <p className="mt-1 terminal-text text-sm text-ink">{h.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>
                &gt; Current Projects
              </h4>
              <ul className="mt-3 space-y-2">
                {active.projects.map((p, i) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink-dim">
                    <span className="mt-0.5 text-xs text-ink-faint">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>
                &gt; Key Skills Developed
              </h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {active.skills.map((s) => (
                  <p key={s} className="flex items-center gap-2 text-sm text-ink-dim">
                    <span className={`h-1 w-1 rounded-full ${a.dot}`} />
                    {s}
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>
                &gt; Technologies &amp; Tools
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}
      </Modal>
    </>
  )
}
