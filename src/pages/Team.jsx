import { useState } from 'react'
import TerminalHeading from '../components/TerminalHeading'
import MemberCard from '../components/MemberCard'
import MemberSpotlight from '../components/MemberSpotlight'
import { cellTeams, executive, teamStats } from '../data/team'
import { accent } from '../utils/accents'

function SubHeading({ label }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-px flex-1 bg-line" />
      <h3 className="terminal-text text-sm uppercase tracking-[0.25em] text-ink-dim">{label}</h3>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}

export default function Team() {
  const [chairman, ...board] = executive
  // { member, accentKey, cell } — the profile shown fullscreen, or null.
  const [spotlight, setSpotlight] = useState(null)

  const open = (accentKey, cell) => (member) => setSpotlight({ member, accentKey, cell })

  return (
    <>
      <section className="vignette relative overflow-hidden border-b border-line">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <TerminalHeading
            file="organization.hpp"
            host="leadership"
            command="cat organizational_chart.txt"
            title="Organizational Chart"
            subtitle="Our dedicated team of passionate students and professionals working together to build an amazing community and drive innovation in technology."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Chairman */}
          <div className="mx-auto max-w-sm">
            <MemberCard
              member={chairman}
              accentKey="term"
              featured
              onSelect={open('term', 'Executive Board')}
            />
          </div>

          {/* Executive board */}
          <div className="mt-16">
            <SubHeading label="Executive Board" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {board.map((m) => (
                <MemberCard
                  key={m.id}
                  member={m}
                  accentKey="cyan"
                  onSelect={open('cyan', 'Executive Board')}
                />
              ))}
            </div>
          </div>

          {/* Cells */}
          <div className="mt-20">
            <SubHeading label="Specialized Cells" />

            <div className="space-y-12">
              {cellTeams.map((cell) => {
                const a = accent(cell.accent)
                return (
                  <div key={cell.slug}>
                    <div className="mb-5 flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                      <h4 className={`terminal-text text-lg font-bold ${a.text}`}>{cell.cell}</h4>
                      <span className="h-px flex-1 bg-line" />
                      <span className="text-[10px] uppercase tracking-widest text-ink-faint">
                        {cell.members.length} member{cell.members.length > 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {cell.members.map((m) => (
                        <MemberCard
                          key={m.id}
                          member={m}
                          accentKey={cell.accent}
                          size="sm"
                          onSelect={open(cell.accent, cell.cell)}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamStats.map((s) => (
              <div key={s.label} className="panel panel-hover p-6 text-center">
                <p className="terminal-text text-3xl font-bold text-term-bright glow-text">
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ink-faint">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MemberSpotlight
        member={spotlight?.member}
        accentKey={spotlight?.accentKey}
        cell={spotlight?.cell}
        onClose={() => setSpotlight(null)}
      />
    </>
  )
}
