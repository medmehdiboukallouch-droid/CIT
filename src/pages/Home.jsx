import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TerminalHeading from '../components/TerminalHeading'
import { asset } from '../utils/asset'

const BOOT_LINES = [
  { text: '> Initializing CIT Club...', tone: 'text-ink-dim' },
  { text: '> Loading modules: cells, events, members ... OK', tone: 'text-ink-dim' },
  { text: '> Status: Operational since 1996', tone: 'text-term' },
]

function BootSequence() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= BOOT_LINES.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 420)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="panel scanlines mx-auto w-full max-w-2xl overflow-hidden text-left">
      <div className="flex items-center gap-2 border-b border-line bg-panel-2/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-term/70" />
        <span className="ml-3 text-[11px] text-ink-faint">CIT@main — main.cpp</span>
      </div>

      <div className="space-y-1.5 px-5 py-5 text-xs sm:text-sm">
        <p className="text-ink-faint">// main.cpp</p>
        <p>
          <span className="text-term-deep">[CIT@main]</span>
          <span className="text-ink-faint">:~</span>
          <span className="text-violet">$</span>
          <span className="ml-2 text-ink">./initialize_club.sh</span>
        </p>
        {BOOT_LINES.slice(0, visible).map((l) => (
          <p key={l.text} className={`${l.tone} animate-fade-up`}>
            {l.text}
          </p>
        ))}
        {visible >= BOOT_LINES.length && (
          <p className="text-ink-faint">
            <span className="text-term-deep">[CIT@main]</span>
            <span className="text-ink-faint">:~</span>
            <span className="text-violet">$</span>
            <span className="animate-cursor ml-2 text-term-bright">▊</span>
          </p>
        )}
      </div>
    </div>
  )
}

const HIGHLIGHTS = [
  {
    icon: 'fa-users',
    title: 'Community',
    body: 'Join a passionate community of IT students and professionals',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Learning',
    body: 'Access courses and workshops throughout the year',
  },
  {
    icon: 'fa-trophy',
    title: 'Competitions',
    body: 'Participate in exciting IT competitions and challenges',
  },
]

const DATACAMP_FEATURES = [
  'Interactive Learning Platform',
  'Hands-on Coding Challenges',
  'Data Science & AI Courses',
  'Industry-Standard Tools',
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="vignette relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="sweep-line" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <img
            src={asset('images/logo-cit.png')}
            alt="CIT Club logo"
            className="animate-float h-24 w-auto opacity-90 drop-shadow-[0_0_28px_rgba(31,191,92,0.25)] sm:h-32"
          />

          <div>
            <h1 className="terminal-text text-4xl font-bold leading-tight text-term-bright glow-text sm:text-6xl">
              Club Informatique
              <span className="block text-ink">&amp; Telecoms</span>
            </h1>
            <p className="mt-5 text-sm text-ink-dim sm:text-base">
              <span className="text-term-deep">&gt;</span> Status:{' '}
              <span className="text-term">Operational since 1996</span>
            </p>
          </div>

          <BootSequence />

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/cells"
              className="rounded-lg border border-term/40 bg-term/10 px-6 py-3 text-sm text-term-bright transition-all duration-300 hover:bg-term hover:text-void neon-border"
            >
              ./explore_cells
            </Link>
            <Link
              to="/events"
              className="rounded-lg border border-line-2 px-6 py-3 text-sm text-ink-dim transition-all duration-300 hover:border-cyan/50 hover:text-cyan"
            >
              ./view_events
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section className="relative border-y border-line bg-abyss/50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <TerminalHeading
            file="mission.cpp"
            host="mission"
            command="cat mission.txt"
            title="Our Mission"
          />

          <div className="panel mt-10 p-6 sm:p-9">
            <p className="text-sm leading-8 text-ink sm:text-base">
              The CIT club is the first IT club in Morocco and has as a goal to gather passionate
              students reach their goals in IT by offering courses throughout the year and make them
              compete in competitions.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="panel panel-hover group p-6 text-center">
                <i className={`fa-solid ${h.icon} text-2xl text-term-deep transition-colors duration-300 group-hover:text-term-bright`} />
                <h3 className="mt-4 terminal-text text-base font-semibold text-ink">{h.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-faint">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnerships ─────────────────────────────────────────────────── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <TerminalHeading
            host="partnerships"
            command="ls -la collaborators/"
            title="Strategic Partnerships"
            subtitle="Collaborating with industry leaders to enhance learning experiences"
          />

          <div className="panel panel-hover mt-12 overflow-hidden">
            <div className="flex items-center justify-between border-b border-line bg-panel-2/60 px-5 py-3">
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-term">
                <span className="h-1.5 w-1.5 rounded-full bg-term animate-pulse" />
                Partnership Active
              </span>
              <span className="text-[11px] text-ink-faint">0x01</span>
            </div>

            <div className="grid gap-8 p-6 sm:p-9 md:grid-cols-[280px_1fr]">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-line bg-void/60 p-6">
                <img
                  src={asset('images/datacamp.png')}
                  alt="DataCamp"
                  className="h-16 w-auto opacity-90"
                />
                <div className="text-center">
                  <p className="terminal-text text-lg font-bold text-ink">DataCamp</p>
                  <p className="text-xs text-ink-faint">Educational Technology</p>
                </div>
              </div>

              <div>
                <p className="text-sm leading-7 text-ink-dim">
                  Learn Data Science &amp; AI from the comfort of your browser, at your own pace with
                  DataCamp&apos;s video tutorials &amp; coding challenges on R, Python, Statistics
                  &amp; more.
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {DATACAMP_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-ink">
                      <span className="text-term-deep">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.datacamp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-7 inline-block rounded-lg border border-term/40 bg-term/10 px-5 py-2.5 text-xs uppercase tracking-widest text-term-bright transition-all duration-300 hover:bg-term hover:text-void"
                >
                  Initialize Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
