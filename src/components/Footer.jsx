export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-abyss/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="terminal-text text-sm">
          <span className="text-term-deep">root@cit-inpt.com</span>
          <span className="text-ink-faint">:~</span>
          <span className="text-violet">$ </span>
          <span className="text-ink">echo &quot;© {new Date().getFullYear()} CIT Club - Club Informatique &amp; Telecoms&quot;</span>
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-faint">
          <span>
            <span className="text-cyan">[INFO]</span> System uptime: Since 2005
          </span>
          <span className="text-line-2">|</span>
          <span>
            <span className="text-term">[STATUS]</span> All systems operational
          </span>
          <span className="text-line-2">|</span>
          <span>
            <span className="text-violet">[BUILD]</span> React + Tailwind CSS
          </span>
        </div>

        <div className="mt-6 border-t border-line pt-6">
          <p className="terminal-text text-xs text-ink-dim">
            <span className="text-term-deep">visitor@cit-website</span>
            <span className="text-ink-faint">:~</span>
            <span className="text-violet">$ </span>
            join_the_club.sh --passion=tech
            <span className="animate-cursor ml-1 text-term-bright">▊</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
