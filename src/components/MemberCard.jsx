import MemberPhoto from './MemberPhoto'
import { accent } from '../utils/accents'

export default function MemberCard({
  member,
  accentKey = 'term',
  size = 'md',
  featured = false,
  onSelect,
}) {
  const a = accent(accentKey)

  return (
    <button
      type="button"
      onClick={() => onSelect?.(member)}
      aria-label={`Open ${member.firstName} ${member.lastName}'s profile`}
      className={[
        'panel panel-hover group flex w-full cursor-pointer flex-col items-center px-5 py-6 text-center',
        featured ? 'py-8' : '',
      ].join(' ')}
    >
      <div className={featured ? 'animate-pulse-ring rounded-full' : ''}>
        <MemberPhoto member={member} size={featured ? 'lg' : size} accentClasses={a} />
      </div>

      <h3 className="mt-4 terminal-text text-sm font-semibold leading-tight text-ink">
        <span className="block text-ink-dim">{member.lastName}</span>
        <span className="block text-base text-ink">{member.firstName}</span>
      </h3>

      <p className={`mt-2 text-xs font-semibold uppercase tracking-wider ${a.text}`}>{member.role}</p>

      {member.description && (
        <p className="mt-3 text-xs leading-relaxed text-ink-faint">{member.description}</p>
      )}

      <span
        className={`mt-4 h-px w-10 ${a.dot} opacity-40 transition-all duration-300 group-hover:w-16 group-hover:opacity-90`}
      />
    </button>
  )
}
