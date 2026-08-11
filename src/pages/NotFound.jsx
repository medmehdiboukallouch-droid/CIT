import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="terminal-text text-xs text-term-deep">
        [CIT@kernel]<span className="text-ink-faint">:~</span>
        <span className="text-violet">$ </span>
        <span className="text-ink-dim">cat /requested/path</span>
      </p>
      <h1 className="mt-4 terminal-text text-6xl font-bold text-term-bright glow-text">404</h1>
      <p className="mt-4 text-sm text-ink-dim">
        No such file or directory. The route you requested is not mounted.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg border border-term/40 bg-term/10 px-5 py-2.5 text-xs uppercase tracking-widest text-term-bright transition-all hover:bg-term hover:text-void"
      >
        cd /home/CIT
      </Link>
    </section>
  )
}
