const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/cit.inpt',
    icon: 'fab fa-facebook',
    hover: 'hover:text-cyan hover:border-cyan/50',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cit-inpt/',
    icon: 'fab fa-linkedin',
    hover: 'hover:text-cyan hover:border-cyan/50',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/cit.inpt',
    icon: 'fab fa-instagram',
    hover: 'hover:text-violet hover:border-violet/50',
  },
  {
    label: 'cit.inpt@gmail.com',
    href: 'mailto:cit.inpt@gmail.com',
    icon: 'fas fa-envelope',
    hover: 'hover:text-term hover:border-term/50',
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-abyss/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Social links */}
        <div className="flex flex-col items-center gap-4 border-b border-line pb-8">
          <p className="terminal-text text-xs">
            <span className="text-term-deep">[CIT@social]</span>
            <span className="text-ink-faint">:~</span>
            <span className="text-violet">$ </span>
            <span className="text-ink-dim">ls -la ./channels/</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                className={`flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel text-ink-dim transition-all duration-300 hover:-translate-y-0.5 ${s.hover}`}
              >
                <i className={`${s.icon} text-lg`} aria-hidden="true" />
              </a>
            ))}
          </div>

          <a
            href="mailto:cit.inpt@gmail.com"
            className="terminal-text text-xs text-ink-faint transition-colors hover:text-term"
          >
            cit.inpt@gmail.com
          </a>
        </div>

        <p className="mt-8 terminal-text text-sm">
          <span className="text-term-deep">root@cit-inpt.com</span>
          <span className="text-ink-faint">:~</span>
          <span className="text-violet">$ </span>
          <span className="text-ink">
            echo &quot;© {new Date().getFullYear()} CIT Club - Club Informatique &amp; Telecoms&quot;
          </span>
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
